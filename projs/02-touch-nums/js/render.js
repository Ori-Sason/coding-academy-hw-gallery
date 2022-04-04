'use strict'

function renderDifficulties() {
  var htmlStr = ''
  for (var i = 4; i < 4 + NUM_OF_DIFFICULTIES; i++) {
    htmlStr += `<li onclick="changeDifficulty(this)">${i ** 2}</li>`
  }
  var elUl = document.querySelector('.difficulty ul')
  elUl.innerHTML = htmlStr
  elUl.children[0].classList.add('curr-difficulty')
}

function renderTable() {
  for (var i = 0; i < gMaxNumber; i++) {
    gNumbers.push(i + 1)
  }

  var htmlStr = ''
  for (var i = 0; i < gMaxNumber ** 0.5; i++) {
    htmlStr += '<tr>'
    for (var j = 0; j < gMaxNumber ** 0.5; j++) {
      var num = drawNum()
      htmlStr += `<td class="possible" onclick="cellClicked(this, ${num})">${num}</td>`
    }
    htmlStr += '</tr>'
  }

  document.querySelector('table').innerHTML = htmlStr
}

function renderTime() {
  var elGameTime = document.querySelector('.game-time')
  gGameTime += TIME_GAPS
  elGameTime.innerText = (gGameTime / 1000).toFixed(2)
}
