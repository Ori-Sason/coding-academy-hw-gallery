'use strict'

function cellClicked(elTd, idx) {
  if (elTd.classList.contains('possible') && idx === gLastNum + 1) {
    elTd.classList.remove('possible')
    elTd.classList.add('right')

    if (gLastNum === 0) {
      gTimeInterval = setInterval(renderTime, TIME_GAPS)
    }

    gLastNum++
    document.querySelector('.last-number').innerText = gLastNum
    if (gLastNum === gMaxNumber) restartGame()
  }
}

function changeDifficulty(elLi) {
  console.dir(elLi)
  gMaxNumber = +elLi.innerText
  restartGame()

  var elLis = document.querySelectorAll('.difficulty li')
  for (var i = 0; i < elLis.length; i++) {
    elLis[i].classList.remove('curr-difficulty')
  }

  elLi.classList.add('curr-difficulty')
}