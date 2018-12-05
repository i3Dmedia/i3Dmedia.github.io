// gulpfile.js
var gulp = require("gulp");
var gutil = require("gulp-util");
var bower = require('gulp-bower');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var docco = require('gulp-docco');
var changed = require('gulp-changed');
var traceur = require('gulp-traceur');



// task - traceur
// transpile ES6 js-source to ES5 js-source
// uses google traceur transpiler
gulp.task('traceur', function() {
  return gulp.src('./app/scripts_es6/**/*.js')
    .pipe(traceur({sourcemap: true}))
    .pipe(gulp.dest('./app/scripts_es5'));
});


// task - bower
// installs dependencies (and devDependencies) in bower.json to directory 
// given in ./.bowerrc (usually './app/libs') If no directory given then 
// uses './bower_components' (or path arg to bower(path) if given)
// NOTE: useful policy is to use the the following in .bowerrc: 
// {
//   "directory": "./app/libs", 
//   "json": "./bower.json"  
// }
// NOTE: useful policy is to use bower to install app dependencies
// given in bower.json into './app/libs', and npm to install 
// devDependencies given in package.json into './app/lib'
// NOTE: target directory (./app/lib) set in .bowerrc
// Thus 'gulp bower' will install bower.json dependencies into './app/libs'
gulp.task('bower', function() {
  bower();
});


// task - jshint
// NOTE: jshint is controlled by the options in './.jshintrc'
var jshFiles = [
  './app/scripts/**/*.js'
];
gulp.task("jshint", function() {
  gulp.src(jshFiles)
      .pipe(jshint())
      .pipe(jshint.reporter("jshint-stylish"));
});


// task - karma
// testfiles for task-karma
var testFiles = [
  './test/unit/**/*.spec.js'
];
gulp.task("karma", function() {
  return gulp.src(testFiles)
      .pipe(karma({
        configFile: './karma.conf.js',
        action: 'run'
      }))
      .on('err', function(err){
        // make certain that failed tests cause gulp to exit non-zero
        throw err;
      });
});


// task - webpack 
// build score to app import
// all configuration and loader option details are in 
// the './webpack.config.js' configuration object
gulp.task('webpack', function(callback){
  // run webpack using webpackConfig object
  webpack(webpackConfig, function(err, stats){
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log(['webpack'], stats.toString({colors: true}));
  });
  callback();
});


// task - docco
// generate side-by-side annotated (/** */) L comments with R source
var srcFiles = ['./app/scripts/*.js', './app/scripts/**/*.js'];
var docFiles = './docs/scripts';
gulp.task('docco', function(){
  gulp.src(srcFiles)
      .pipe(docco())
      .pipe(gulp.dest(docFiles));
});


// task - watch
// srcFiles - see task - docco
// watch srcFiles - apply jshint & karma
// TBD - fix karma.conf.js - then use tasks ['jshint', 'karma']
gulp.task('watch', function(event){
  gulp.watch(srcFiles, ['jshint']);
  //gulp.watch(srcFiles, ['jshint', 'karma']);
});


// task - sync
// sync selected paths in source with the isomorphic paths in destination 
// exp: creates/writes app, test and docs into destination root
var source = './';
var target = '../mediaweb-sync/'; 
var rootsToSync = [
        'app/images/',
        'app/libs/',
        'app/obj/',
        'app/styles/',
        'app/views/',
        'app/scripts/',
        'test/unit/',
        'docs/scripts/'
    ];
gulp.task('sync', function(){
  // NOTE: gulp-changed passes only files with newer modification date
  // NOTE: ./app/scripts/factories/mediator/angel.js - is ignored
  // although ./app/scripts/factories/*.js are copied
  // included below (commented out) is a safe check for sync-copy
  // Use this safe-check first (and target = './tmp') if there are fears. 
  //target = './tmp/';
  //rootsToSync.forEach(function(root, index){
  //  console.log('src = ' + source + root);
  //  console.log('dest = ' + target + root);
  //});
  rootsToSync.forEach(function(root, index){
    gulp.src([source + root + '*.*', source + root + '**/*.*'])
      .pipe(changed(target + root))
      .pipe(gulp.dest(target + root));
  });
});


// task - build
// automated build
gulp.task('build', ['bower', 'jshint', 'karma', 'docco']);


// default task - watch
gulp.task("default", ['watch']);


