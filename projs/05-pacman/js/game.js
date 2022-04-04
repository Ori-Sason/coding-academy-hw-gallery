'use strict'
const WALL = '🧱'
const FOOD = '◽' //🍉
const SUPER_FOOD = '🍔' //🥙🥧🍔
const EMPTY = ' '
const GAME_OVER = '💀'

var gBoard

var gGame = {
  score: 0,
  isOn: false,
  totalFoodCount: 0,
  foodEaten: 0,
  superModeTime: 3000,
}


function init() {
  gBoard = buildBoard()
  createPacman(gBoard)
  createGhosts(gBoard)
  gGame.totalFoodCount = getTotalFood(gBoard)
  printMat(gBoard, '.board-container')
  
  //color first ghost cell
  renderCell(gGhosts[0].location, GHOST)
  
  gGame.isOn = true
  renderGameStatus()
}

function buildBoard() {
  const SIZE = 10
  var board = []
  for (var i = 0; i < SIZE; i++) {
    board.push([])
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FOOD
      if (
        i === 0 ||
        i === SIZE - 1 ||
        j === 0 ||
        j === SIZE - 1 ||
        (j === 3 && i > 4 && i < SIZE -2)
      ) {
        board[i][j] = WALL
      }
    }
  }

  //super food
  board[1][1] = SUPER_FOOD
  board[1][board[1].length - 2] = SUPER_FOOD
  board[board.length - 2][1] = SUPER_FOOD
  board[board.length - 2][board.length - 2] = SUPER_FOOD

  return board
}

function updateScore(diff, isFood = false) {
  // DONE: update model and dom

  // Model
  gGame.score += diff
  //DOM
  document.querySelector('.game-contianer h2 span').innerText = gGame.score

  if (isFood) gGame.foodEaten++
  if (gGame.foodEaten === gGame.totalFoodCount) gameOver(true)
}

function gameOver(isWin) {
  gGhosts = []
  clearInterval(gIntervalGhosts)
  clearInterval(gCherryInterval)
  clearTimeout(gSuperModeTimeOut)
  clearTimeout(gCherryTimeout)
  renderCell(gPacman.location, GAME_OVER)
  gSuperModeTimeOut = null

  gGame.isOn = false
  gGame.totalFoodCount = 0
  gGame.foodEaten = 0
  gPacman.isSuper = false

  if(!isWin) gGame.score = 0
  renderGameStatus(isWin)
}

function getTotalFood(board) {
  var count = 1 //we start with 1 since the ghosts take 1 place of food
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === FOOD) count++ //|| board[i][j] === SUPER_FOOD) count++
    }
  }
  return count
}

function renderGameStatus(isWin = false) {
  var titleH2 = 'Go Go Go!!'
  var imgFile = 'pacman.png'

  if(!gGame.isOn){
    if(isWin){
      titleH2 = 'You Won!!'
      imgFile = 'happy-smiley.gif'
    }
    else{
      titleH2 = 'Maby next Time'
      imgFile = 'rip.png'
    }
  }

  var strHtml = `<h2>${titleH2}</h2>`
  strHtml += `<img src="img/${imgFile}" />`
  strHtml += `<button onclick="init()">Restart</button>`

  document.querySelector('.game-status').innerHTML = strHtml
}