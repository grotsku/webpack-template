import _ from 'lodash';
import './style.css';
import hero from './hero.js';

const content = document.createElement("div");
content.textContent = "testi";
document.body.appendChild(content);

content.appendChild(hero());
