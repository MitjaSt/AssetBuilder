
/** Build CSS files
  *
  **/

// Gulp Dependencies
var gulp = require( 'gulp' );

// Configuration
var Config = require( '../config.js' );

module.exports = function()
{
  gulp.task('watchCss', function ()
  {
    return gulp.watch( Config.css.app.substring( 0, Config.css.output.lastIndexOf( '/' ) ) + '/**/**/*.scss', [ 'buildCss' ] );
  } );
};
