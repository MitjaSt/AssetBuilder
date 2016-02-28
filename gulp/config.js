
/** Main configuration
  *
  **/

(function( global )
{
  var Config = {};

  Config.developmentMode = true;

  Config.basePath = './src/';

  // Javascript
  Config.js = {

    // Libraries/dependancies
    libs    : [],

    // App main script
    app     : Config.basePath + 'js/app.js', 

    // Compiled&minified distribution script
    output  : Config.basePath + 'dist/js/app-dist.min.js' 
  };

  // CSS
  Config.css = {

    // Libraries/dependancies
    libs  : {
      // (s)CSS ...
    },

    // App main SCSS file
    app    : Config.basePath + 'css/main.scss',

    // Compiled&minified CSS file
    output : Config.basePath + 'dist/css/css-dist.css'
  };


  // Watchify looks for file changes and updates on the "fly"
  Config.watchify = {};

    Config.watchify.args = {
      cache: {},
      packageCache: {},
      debug: false,
      poll: true,
      fullPaths : false,
      compress: true
    };


  module.exports = Config;

} )( this );


