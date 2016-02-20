
/** Watch changes of JS files and run buildJs gulp command
  *
  **/

// Gulp Dependencies
var gulp = require( 'gulp' );

// Configuration
var Config = require( '../config.js' );

module.exports = function()
{
  gulp.task( 'watchJsAndCss', function ()
  {
    var filesToWatch = [
      Config.js.app.substring( 0, Config.js.output.lastIndexOf( '/' ) -1 ) + '/**/*.js',
      Config.css.app.substring( 0, Config.css.output.lastIndexOf( '/' ) ) + '/**/**/*.scss'
    ];

    return gulp.watch( filesToWatch, [ 'buildJs', 'buildCss' ] );
  } );
};
