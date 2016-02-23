
/** Main configuration
  *
  **/

(function( global )
{
  var Config = {};

  Config.developmentMode = true;

  // Javascript
  Config.js = {
    libs: [],
    app: './src/js/app.jsx', // Path (string)
    output: './src/dist/app-dist.min.js'
  };

  // CSS
  Config.css = {
    libs  : {
      // jQuery ...
    },
    app    : './src/css/main.scss',
    output : './src/dist/css-dist.css'
  };

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


