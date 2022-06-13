'use strict'

function setManualMineMode(elLi) {
  clear7BoomMode()
  
  gGame.isManualMine = !gGame.isManualMine
  resetGameProperties()
  buildBoard()
  renderBoard(gBoard)

  elLi.classList.toggle('selected')

  if (gGame.isManualMine) {
    revealBoard()

    document
      .querySelectorAll('.cell')
      .forEach((cell) => (cell.style.cursor = 'pointer'))
  } else {
    clearManualMode()
    initGame()
  }
}

function setMineOnBoard(elTd, idxI, idxJ) {
  const isMine = elTd.innerText !== MINE

  gGame.minesShownCount += isMine ? 1 : -1
  elTd.innerText = isMine ? MINE : ''
  elTd.style.color = isMine ? 'black' : 'transparent'
  gBoard[idxI][idxJ].isMine = isMine

  renderMinesLeft()
  if (isMine && +gElMinesLeft.innerText === 0) startManualMineGame()
}

function revealBoard() {
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[i].length; j++) {
      gBoard[i][j].isShown = true
    }
  }

  renderBoard(gBoard)
}

function startManualMineGame() {
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard[i].length; j++) {
      if (gBoard[i][j].isMine) setMinesNegsCount(i, j)
      gBoard[i][j].isShown = false
    }
  }

  gGame.isManualMine = false
  gGame.isManualGame = true
  gGame.timeIntervalId = setInterval(renderTimer, 1000)
  initGame()
}

function clearManualMode(){
  gGame.isManualMine = false
  gGame.isManualGame = false
  gElManualMines.classList.remove('selected')
}
