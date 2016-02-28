// Gulp Dependencies
var gulp = require( 'gulp' );

var source = require( 'vinyl-source-stream' );
var buffer = require( 'vinyl-buffer' );
var merge = require( 'utils-merge' );


// Build Dependencies
var browserify = require( 'browserify' );
var watchify = require( 'watchify' );
var babelify = require( 'babelify' );

var rename = require( 'gulp-rename' );
var uglify = require( 'gulp-uglify' );
// var sourcemaps = require( 'gulp-sourcemaps' );



// Development Dependencies
var jshint = require('gulp-jshint');
// https://quickleft.com/blog/setting-up-a-clientside-javascript-project-with-gulp-and-browserify/
var stylish = require('jshint-stylish');


/* Browserify nicer errors */
var gutil = require( 'gulp-util' );
var chalk = require( 'chalk' );

// Configuration
var Config = require( './gulp/config.js' );

// Display gulp process - starting
console.log( chalk.red( 'Starting Gulp process...' ) );


// Load and initialize buildJs task
require( './gulp/tasks/buildJs.js' )();

// Load and initialize buildCss task
require( './gulp/tasks/buildCss.js' )();

// Start watching (S)CSS files for changes
require( './gulp/tasks/watchCss.js' )();

// Start watching JS files for changes
require( './gulp/tasks/watchJs.js' )();

// Start watching JS and CSS files for changes
require( './gulp/tasks/watchJSAndCss.js' )();

// Information on how to use this script
require( './gulp/tasks/info.js' )();

//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  !! MISSING BUILD & CSS JS LIBRARIES !!
//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Default task, runs watchify on both JS and CSS
gulp.task('default', [ 'watchJsAndCss' ], function()
{
  var message = '';

  message += "\r\n";
  message += "\r\n";

  message += ' Type "' + chalk.green( 'gulp info' ) + '" ';
  message += 'for information on how to use this script.';
  message += "\r\n";
  message += "\r\n";

  message += ' As no specific task was set, it defaulted on "' +  chalk.red( 'gulp watchJsAndCss' ) + '"';

  message += "\r\n";
  message += "\r\n";

  console.log( message );
} );


// Exit gulp process
// process.exit( 1 );


// Other resources
// ---------------

// Sample gulp build script - http://weaintplastic.github.io/web-development-field-guide/Development/Frontend_Development/Setting_up_your_project/Setup_Build_System/A_complex_Gulp_build_script.html