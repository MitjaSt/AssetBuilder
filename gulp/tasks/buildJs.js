
/** Build JavaScript files
  *
  **/

// Gulp Dependencies
var gulp = require( 'gulp' );

var source  = require( 'vinyl-source-stream' );
var buffer  = require( 'vinyl-buffer' );
var merge   = require( 'utils-merge' );


// Build Dependencies
var browserify  = require( 'browserify' );
var watchify    = require( 'watchify' );
var babelify    = require( 'babelify' );

var rename = require( 'gulp-rename' );
var uglify = require( 'gulp-uglify' );
var sourcemaps = require( 'gulp-sourcemaps' );

/* Browserify nicer errors */
var gutil = require( 'gulp-util' );
var chalk = require( 'chalk' );

// Configuration
var Config = require( '../config.js' );

// Error handler
var ErrorHandler = require( '../error_handler.js' );


// Export gulp task definition as function
module.exports = function()
{
  // Gulp task
  gulp.task( 'buildJs', function ()
  {
    // Create JS script bundler
    var bundler = browserify( Config.js.app, Config.watchify.args );

    // Enable babel transformations
    bundler.transform( babelify, { presets: [ 'es2015', 'react' ] } );

    // Create bundle / compiler
    bundle_js( bundler );
  } );


  // Bundler
  function bundle_js( bundler )
  {
    var Bundle = bundler.bundle();

    // Register error handler
    Bundle.on( 'error', ErrorHandler );

    // Save compiled JS script
    Bundle = Bundle.pipe( source( 'app-dist.js' ) );
    
    // Load script to buffer (memory)
    Bundle = Bundle.pipe( buffer() );

    // Set paths
    Bundle = Bundle.pipe( gulp.dest( Config.js.output.substring( 0, Config.js.output.lastIndexOf( '/' ) ) + '/' ) )
    Bundle = Bundle.pipe( rename( Config.js.output.substring( Config.js.output.lastIndexOf( '/' ) ) ) );

    // Init sourcemaps
    if( Config.developmentMode )
    {
      Bundle = Bundle.pipe( sourcemaps.init( { loadMaps: true } ) );
    }

    // Uglify JS code
    Bundle = Bundle.pipe( uglify() );
   
    // Create sourcemaps
    if( Config.developmentMode )
    {
      Bundle = Bundle.pipe( sourcemaps.write( '.' ) )
    }

    // Save minified/uglified Js file
    Bundle = Bundle.pipe( gulp.dest( Config.js.output.substring( 0, Config.js.output.lastIndexOf( '/' ) ) ) )

    // Log successful compilation
    gutil.log( chalk.green( '[JS] SUCCESS' ) + ': ' + chalk.yellow( Config.js.app ) );

    return Bundle;
  }
};
  