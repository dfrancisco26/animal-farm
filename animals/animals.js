import { animals } from '../data.js';
import { findById } from '../utils.js';

const animalName = document.getElementById('animal-name');
const animalImg = document.getElementById('animal-image');
const animalSays = document.getElementById('animal-says');

const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);

animalName.textContent = animal.name;
animalImg.src = `../assets/${animal.type}.svg`;
animalSays.textContent = animal.says;