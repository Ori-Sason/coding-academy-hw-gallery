'use strict'

function drawNum() {
  var num = getRandomInt(0, gNumbers.length - 1)
  return gNumbers.splice(num, 1)[0]
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}