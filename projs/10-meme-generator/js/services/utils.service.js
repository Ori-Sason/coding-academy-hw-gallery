'use strict'

function getCamelCase(txt) {
  function firstCharUpperCase(word) {
    return word.charAt(0).toUpperCase() + word.substring(1)
  }

  return txt
    .split('-')
    .map((word) => firstCharUpperCase(word))
    .join(' ')
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function makeLorem(size = 100) {
  var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', 'All', 'this happened', 'more or less', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', 'It', 'was', 'a pleasure', 'to', 'burn'];
  var txt = '';
  while (size > 0) {
      size--;
      txt += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  
  return txt.trim();
}