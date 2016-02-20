
/** Error handler for browserify calls
  *
  **/


/* Browserify nicer errors */
var gutil = require( 'gulp-util' );
var chalk = require( 'chalk' );


(function( global )
{
  function errorHandler( err )
  {
    var strMessage = '';

    // Standard error
    if( err.fileName )
    {
      strMessage += chalk.red( err.name ) + ': ';
      strMessage += chalk.yellow( err.fileName.replace( __dirname + config.js.path, '' ) );
      strMessage += ': Line ' + chalk.magenta( err.lineNumber );
      strMessage += ' & Column ' + chalk.magenta( err.columnNumber || err.column );
      strMessage += ': ' + chalk.blue( err.description );
    }

    // Browserify error
    else
    {
      strMessage += chalk.red( err.name );
      strMessage += ': ' + chalk.yellow( err.message );
    }

    gutil.log( strMessage );
  }

  module.exports = errorHandler;
} )( this );


