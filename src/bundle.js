// promise & fetch polyfills
// require('es6-promise').polyfill();
// require('whatwg-fetch');

// baseline app styles
require('./app/fonts/fonts.css');
require('./app/app.css');

// components styles
require.context('./components/', true, /\.css$/);
