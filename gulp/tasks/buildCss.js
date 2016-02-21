
/** Build CSS files
  *
  **/

// Gulp Dependencies
var gulp = require( 'gulp' );

var source  = require( 'vinyl-source-stream' );
var buffer  = require( 'vinyl-buffer' );
var merge   = require( 'utils-merge' );

var rename = require( 'gulp-rename' );
var uglify = require( 'gulp-uglify' );

var sass        = require( 'gulp-ruby-sass' );
var sourcemaps  = require( 'gulp-sourcemaps' );

var autoprefixer = require( 'gulp-autoprefixer' );
var cssnano      = require( 'gulp-cssnano' );


/* Browserify nicer errors */
var gutil = require( 'gulp-util' );
var chalk = require( 'chalk' );

// Configuration
var Config = require( '../config.js' );

// Export gulp task definition as function
module.exports = function()
{
  // Gulp task
  gulp.task( 'buildCss', function ()
  {
    var Sass = sass( Config.css.app );
    Sass = Sass.pipe( autoprefixer( 'last 2 version' ) );
    Sass = Sass.pipe( cssnano() );

    Sass = Sass.pipe( gulp.dest( Config.css.output.substring( 0, Config.js.output.lastIndexOf( '/' ) ) + '/' ) );
    Sass = Sass.pipe( rename( { suffix: '.min' } ) );

    /*
    // Check if this works
    Sass = Sass.on( 'error', function()
    {
      console.log( 'SUP')
      gutil.log( chalk.red( 'Error' ) + chalk.white( sass.logError ) );
    } );
    */

    // Sass = Sass.pipe( gulp.dest( Config.css.output.substring( 0, Config.js.output.lastIndexOf( '/' ) ) + '/' ) );

    Sass = Sass.pipe( gulp.dest( Config.css.output.substring( 0, Config.js.output.lastIndexOf( '/' ) ) + '/' ) );

    gutil.log( chalk.green( '[CSS] SUCCESS' ) + ': ' + chalk.yellow( Config.css.app ) );

  } );
};
