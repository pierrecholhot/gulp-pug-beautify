'use strict';

var util = require('gulp-util');
var through = require('through2');
var objectAssign = require('object-assign');
var pugBeautify = require('pug-beautify');

module.exports = function(opts) {

  opts = objectAssign({
    fill_tab: false,
    omit_div: true,
    tab_size: 2,
    omit_empty_lines: false
  }, opts);

  function beautify(src, options) {
    var out = pugBeautify(src, options);
    if (options.omit_empty_lines) { out = out.replace(/^\s*[\r\n]/gm, ''); }
    return out;
  }

  function blame(message, data) {
    return new util.PluginError('gulp-pug-beautify', message, data);
  }

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(blame('Streaming not supported'));
      return;
    }

    try {
      var output = beautify(file.contents.toString(), opts);
      file.contents = new Buffer(output);
    } catch (err) {
      this.emit('error', function() { blame(err, { fileName: file.path }); });
    }

    cb(null, file);

  });

};
