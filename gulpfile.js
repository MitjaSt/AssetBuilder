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

//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  !! MISSING BUILD JS LIBRARIES !!
//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Default task (ran by "gulp default" or just "gulp") explains its functionality and usage
gulp.task( 'default', function ()
{
  // Chalk color options
  // *********************

  // Background colors
  // bgBlack bgRed bgGreen bgYellow bgBlue bgMagenta bgCyan bgWhite

  // Text colors
  // black red green yellow blue magenta cyan whitegray

  var message = "\r\n\r\n";

  // Info header
  message += '   ' + chalk.white( chalk.bgMagenta( '                                     ' ) );
  message += "\r\n";
  message += '   ' + chalk.white( chalk.bgMagenta( ' *** How to use this gulp script *** ' ) );
  message += "\r\n";
  message += '   ' + chalk.white( chalk.bgMagenta( '                                     ' ) );

  message += "\r\n\r\n";

  message += '   Options:';
  message += "\r\n";
  message += "\r\n";

  message += chalk.green( '     buildCss' );
  message += '       - Run "gulp buildCss" to compile sCSS->CSS [from file: ' + Config.css.app + ']';
  message += "\r\n";
  message += "\r\n";

  message += chalk.green( '     buildJs' );
  message += '        - Run "gulp buildJs" to compile JS [from file: ' + Config.js.app + ']';
  message += "\r\n";
  message += "\r\n";

  message += chalk.green( '     watchCss' );
  message += '       - Run "gulp watchCss" to enable Watchify (auto-runs buildCss on (s)CSS file changes)';
  message += "\r\n";
  message += "\r\n";

  message += chalk.green( '     watchJs' );
  message += '        - Run "gulp watchJs" to enable Watchify (auto-runs buildJs on Js file changes)';
  message += "\r\n";
  message += "\r\n";

  message += chalk.green( '     watchJSAndCss' );
  message += '  - Run "gulp watchJSAndCss" to enable auto-build for both CSS and JS (recompiles both on any CSS or JS file change)';
  message += "\r\n";
  message += "\r\n";


  message += "\r\n";
  message += "\r\n";

  console.log( message );
} );



// Exit gulp process
// process.exit( 1 );
