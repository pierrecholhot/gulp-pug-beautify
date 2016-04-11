'use strict';

var pugBeautify = require('./');

var gulp = require('gulp');
var path = require('path');
var should = require('should');
var assert = require('stream-assert');

describe('gulp-pug-beautify', function() {

  function fixtures(glob) {
    return path.join(__dirname, 'fixtures', glob + '.jade');
  }

  it('should emit an error on streamed file', function(done) {

    function test(err) {
      err.message.should.eql('Streaming not supported'); done();
    }

    gulp.src(fixtures('*'), { buffer: false })
      .pipe(pugBeautify({ fill_tab: true }))
      .on('error', test);

  });

  describe('initialized', function() {

    function test(file) {
      file.contents.toString().should.eql('.ugly\n  h2 Hello\n  p World\n');
    }

    it('should beautify when no args were supplied', function(done) {
      gulp.src(fixtures('indent'))
        .pipe(pugBeautify())
        .pipe(assert.first(test))
        .pipe(assert.end(done));
    });

    it('should omit empty lines when instructed', function(done) {
      gulp.src(fixtures('indent-nl'))
        .pipe(pugBeautify({ omit_empty_lines: true }))
        .pipe(assert.first(test))
        .pipe(assert.end(done));
    });

  });

});
