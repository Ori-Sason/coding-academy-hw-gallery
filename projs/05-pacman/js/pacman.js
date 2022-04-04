'use strict'
const PACMAN = '<img class="packman-gif" src="img/pacman.gif" alt="packman-gif">' //😲
var gSuperModeTimeOut

var gPacman
function createPacman(board) {
  // DONE
  gPacman = {
    location: {
      i: 2,
      j: 2,
    },
    isSuper: false,
    direction: '0deg'
  }
  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
}

function movePacman(ev) {
  // DONE: use getNextLocation(), nextCell
  if (!gGame.isOn) return
  
  var nextLocation = getNextLocation(ev.key)
  if(nextLocation.i === null || nextLocation.j === null) return 

  var nextCell = gBoard[nextLocation.i][nextLocation.j]

  // DONE: return if cannot move
  if (nextCell === WALL) return
  // DONE: hitting a ghost?  call gameOver
  if (nextCell === GHOST) {
    if (!gPacman.isSuper) {
      gameOver(false)
      return
    }

    packmanEatsGhost(nextLocation)
  } else if (nextCell === FOOD) {
    updateScore(1, true)

    if (gGame.foodEaten === 1) {
      gCherryInterval = setInterval(placeCherry, CHERRY_INTERVAL_DURATION)
    }
  } else if (nextCell === SUPER_FOOD) {
    if (gPacman.isSuper) return

    //updateScore(1, true)
    createSuperFoodMode()
  } else if (nextCell === CHERRY) {
    clearTimeout(gCherryTimeout)
    updateScore(10)
  }

  // DONE: moving from current position:
  // DONE: update the model
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
  // DONE: update the DOM
  renderCell(gPacman.location, EMPTY)

  // DONE: Move the pacman to new location
  // DONE: update the model
  gPacman.location = nextLocation
  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
  // DONE: update the DOM
  renderCell(gPacman.location, PACMAN)

  console.log(gGame.foodEaten)
}

function getNextLocation(eventKey) {
  // DONE: figure out nextLocation
  var nextLocation = {
    i: gPacman.location.i,
    j: gPacman.location.j,
  }

  switch (eventKey) {
    case 'ArrowUp':
      gPacman.direction = '270deg'
      nextLocation.i--
      break
    case 'ArrowRight':
      gPacman.direction = '0deg'
      nextLocation.j++
      break
      case 'ArrowDown':
      gPacman.direction = '90deg'
      nextLocation.i++
      break
      case 'ArrowLeft':
      gPacman.direction = '180deg'
      nextLocation.j--
      break

    default:
      return null
  }

  return nextLocation
}

function createSuperFoodMode() {
  gPacman.isSuper = true
  for (var ghost of gGhosts) {
    var oldColor = ghost.color
    ghost.color = GHOST_SUPER_FOOD_MODE_COLOR
    renderCell(ghost.location, getGhostHTML(ghost))

    gSuperModeTimeOut = setTimeout(setGhostsToNormalMode, gGame.superModeTime, ghost, oldColor)
  }
}

function packmanEatsGhost(location) {
  for (const ghost of gGhosts) {
    if (ghost.location.i === location.i && ghost.location.j === location.j) {
      if (
        ghost.currCellContent === FOOD ||
        ghost.currCellContent === SUPER_FOOD
      ) {
        updateScore(1, ghost.currCellContent === FOOD )
      }

      ghost.currCellContent = EMPTY
      const idx = gGhosts.indexOf(ghost)
      gGhosts.splice(idx, 1)
      return
    }
  }
}
