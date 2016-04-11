# gulp-pug-beautify [![Build Status](https://travis-ci.org/pierrecholhot/gulp-pug-beautify.svg?branch=master)](https://travis-ci.org/pierrecholhot/gulp-pug-beautify)

A gulp wrapper for <strike>JADE Beautify</strike> PUG Beautify with a couple of more features.

*Issues regarding rules should be reported on the PugBeautify [issue tracker](https://github.com/vingorius/pug-beautify/issues) as it's the actual beautifier.*

## install

```
$ npm install --save-dev gulp-pug-beautify
```

## usage

```
'use strict';

var gulp = require('gulp');
var gulpPugBeautify = require('gulp-pug-beautify');

gulp.task('default', function () {
  return gulp.src('views/*.jade')
    .pipe(gulpPugBeautify({ omit_empty: true }))
    .pipe(gulp.dest('dist'));
});
```

## API

### options

#### [gulp-pug-beautify](https://github.com/PierreCholhot/gulp-pug-beautify)

In the gulpfile you can specify the following options:

##### omit_empty_lines

- Type: `boolean`
- Default: `'false'`

Omits all empty new lines (except at EOF)

#### [pug-beautify](https://github.com/vingorius/pug-beautify)

You can also specify the following options (parsed by pug-beautify):

##### fill_tab

- Type: `boolean`
- Default: `'true'`

Indent using tabs or spaces

##### omit_div

- Type: `boolean`
- Default: `'false'`

Whether to omit `div` tag [`div.hello(attr=..)` becomes `.hello(attr=..)`]

##### tab_size

- Type: `number`
- Default: `'false'`

When `fill_tab` is set to `false`, indents using spaces, default is 2.

## test

```
npm test
```

## develop

```
npm install
```

## contribute

All code in any code-base should look like a single person typed it, no matter how many people contributed.

## but why ?

Being one of <strike>JADE</strike> PUG's earliest adopters, I've implemented it in almost every single project at work.<br />
However, 5 years, 16 developers (and hundreds of jade files) later, some of our projects have become a(n) -ugly- mess.<br />
That being said, this plugin will help you automate that ugly mess' conversion back into a more consistent code.

*I've actually managed to run CPD afterwards to find all the possible duplicated code blocks, and then [I went nuts](https://twitter.com/pierrecholhot/status/719548050193137665)..*

## license

MIT © [Pierre Cholhot](http://pierre.cx/)
