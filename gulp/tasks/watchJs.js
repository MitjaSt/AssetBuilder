
/** Watch changes of JS files and run buildJs gulp command
  *
  **/

// Gulp Dependencies
var gulp = require( 'gulp' );

// Configuration
var Config = require( '../config.js' );

module.exports = function()
{
  gulp.task( 'watchJs', function ()
  {
    return gulp.watch( Config.js.app.substring( 0, Config.js.output.lastIndexOf( '/' ) -1 ) + '/**/*.js', [ 'buildJs' ] );
  } );
};
