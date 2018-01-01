// promise & fetch polyfills
// require('es6-promise').polyfill();
// require('whatwg-fetch');

// components js
import Header from './components/header/Header';

// baseline app styles
require('./app/fonts/fonts.css');
require('./app/app.css');

// components styles
require.context('./components/', true, /\.css$/);

// header component
const headers = document.getElementsByClassName('header');
for (let i = 0; i < headers.length; i++) {
  new Header({ el: headers[i] });
}
