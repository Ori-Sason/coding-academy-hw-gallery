'use strict'

const CHERRY = '🍒'
const CHERRY_INTERVAL_DURATION = 15000
var gCherryInterval
var gCherryTimeout

function placeCherry() {
  if (gGame.foodEaten === 0) return //we don't have empty place

  var cherryCell = null
  while (cherryCell !== EMPTY) {
    var randomI = getRandomIntInclusive(0, gBoard.length - 1)
    var randomJ = getRandomIntInclusive(0, gBoard[randomI].length - 1)
    cherryCell = gBoard[randomI][randomJ]
  }

  gCherryTimeout = setTimeout((i, j) => {
      gBoard[i][j] = EMPTY
      renderCell({ i, j }, EMPTY)
  }, CHERRY_INTERVAL_DURATION - 100, randomI, randomJ)
  
  gBoard[randomI][randomJ] = CHERRY  
  renderCell({ i: randomI, j: randomJ }, CHERRY)
}
