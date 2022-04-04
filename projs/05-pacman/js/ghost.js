'use strict'
const GHOST = '☢' //''👻 &#9781; ⚉ ♾
var gGhosts = []
const gGhostColors = ['red', 'orange', 'purple', 'deeppink']
const GHOST_SUPER_FOOD_MODE_COLOR = 'blue'
var gIntervalGhosts

function createGhost(board, ghostColors) {
  // DONE
  var ghost = {
    location: {
      i: 3,
      j: 6,
    },
    currCellContent: FOOD,
    color: getRandomGhostColor(ghostColors),
  }

  gGhosts.push(ghost)
  board[ghost.location.i][ghost.location.j] = GHOST
}

function createGhosts(board) {
  // DONE: 3 ghosts and an interval
  gGhosts = []
  var ghostColors = gGhostColors.slice()
  for (var i = 0; i < 3; i++) {
    createGhost(board, ghostColors)
  }
  gIntervalGhosts = setInterval(moveGhosts, 1000)
}

function moveGhosts() {
  // DONE: loop through ghosts
  for (var i = 0; i < gGhosts.length; i++) {
    var ghost = gGhosts[i]
    moveGhost(ghost)
  }
}

function moveGhost(ghost) {
  // DONE: figure out moveDiff, nextLocation, nextCell
  var moveDiff = getMoveDiff()

  var nextLocation = {
    i: ghost.location.i + moveDiff.i,
    j: ghost.location.j + moveDiff.j,
  }

  var nextCell = gBoard[nextLocation.i][nextLocation.j]

  // DONE: return if cannot move
  if (nextCell === WALL) return
  if (nextCell === GHOST) return

  // DONE: hitting a pacman?  call gameOver
  if (nextCell === PACMAN) {
    if (gPacman.isSuper) return
    gameOver(false)
    return
  }

  // DONE: moving from current position:
  // DONE: update the model
  gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent
  // DONE: update the DOM
  renderCell(ghost.location, ghost.currCellContent)

  // DONE: Move the ghost to new location
  // DONE: update the model
  ghost.location = nextLocation
  ghost.currCellContent = nextCell
  gBoard[ghost.location.i][ghost.location.j] = GHOST
  // DONE: update the DOM
  renderCell(ghost.location, getGhostHTML(ghost))
}

function getMoveDiff() {
  var randNum = getRandomIntInclusive(1, 100)
  if (randNum <= 25) {
    return { i: 0, j: 1 }
  } else if (randNum <= 50) {
    return { i: -1, j: 0 }
  } else if (randNum <= 75) {
    return { i: 0, j: -1 }
  } else {
    return { i: 1, j: 0 }
  }
}

function getGhostHTML(ghost) {
  return `<span>${GHOST}</span>`
}

function getRandomGhostColor(ghostColors) {
  var idx = getRandomIntInclusive(0, ghostColors.length - 1)
  return ghostColors.splice(idx, 1)[0]
}

function setGhostsToNormalMode(ghost, color) {
  gPacman.isSuper = false
  ghost.color = color
  const idx = gGhosts.indexOf(ghost)
  if (idx === -1) gGhosts.push(ghost)
  renderCell(ghost.location, getGhostHTML(ghost))
}
