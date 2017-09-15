import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpaasdck'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me';
  btn.onclick = printMe;

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());