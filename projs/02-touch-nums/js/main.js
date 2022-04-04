'use strict'

const TIME_GAPS = 100
const NUM_OF_DIFFICULTIES = 5

const gNumbers = []
var gMaxNumber = 16 //make sure it's the number in curr-difficulty class
var gLastNum = 0
var gTimeInterval = 0
var gGameTime

function init() {
  renderDifficulties()
  restartGame()
}

function restartGame() {
  gLastNum = 0
  gGameTime = 0
  document.querySelector('.last-number').innerText = gLastNum
  clearInterval(gTimeInterval)
  renderTable()
}