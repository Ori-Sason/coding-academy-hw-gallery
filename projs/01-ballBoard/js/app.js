'using strict'

/**@@ when i wrote this - it means that I've added this line to the code */

const WALL = 'WALL';
const FLOOR = 'FLOOR';
const BALL = 'BALL';
const GAMER = 'GAMER';

const GAMER_IMG = '<img src="img/gamer.png" />';
const BALL_IMG = '<img src="img/ball.png" />';

var gBoard;
var gGamerPos;
//**@@ elements count */
const GLUE_IMG = '<img src="img/glue.png" />';
const GLUE = 'GLUE';
const ADDING_BALL_TIME_GAP = 1500
const ADDING_GLUE_TIME_GAP = 5000
const DURATION_OF_GLUE = 3000
var gElementsCount = {floors: 0, walls:0, balls: 0, gamers: 0, glues: 0 }
var gBallInterval
var gBallsCollected = 0
const gBallSound = new Audio('sounds/hit-soccer-ball.wav')
var gGlueInterval
var gIsGlued = false

function initGame() {
	gGamerPos = { i: 2, j: 9 };
	gBoard = buildBoard();
	renderBoard(gBoard);
	gBallInterval = setInterval(addElementToBoard, ADDING_BALL_TIME_GAP, BALL, BALL_IMG)
	gGlueInterval = setInterval(addGlue, ADDING_GLUE_TIME_GAP)
}


function buildBoard() {
	// Create the Matrix
	var board = createMat(10, 12)


	// Put FLOOR everywhere and WALL at edges
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			// Put FLOOR in a regular cell
			var cell = { type: FLOOR, gameElement: null, glueTimeout: null };

			//**@@ */
			updateElementsCount(FLOOR, 1)

			// Place Walls at edges
			if (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) {
				cell.type = WALL;
				updateElementsCount(WALL, 1)
			}

			// Add created cell to The game board
			board[i][j] = cell;
		}
	}

	// Place the gamer at selected position
	board[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
	updateElementsCount(GAMER, 1)

	// Place the Balls (currently randomly chosen positions)
	board[3][8].gameElement = BALL;
	board[7][4].gameElement = BALL;
	updateElementsCount(BALL, 2)

	//**@@add passages
	board[0][5].type = FLOOR
	board[board.length-1][5].type = FLOOR
	
	var row = 5
	board[row][0].type = FLOOR
	board[row][board[row].length-1].type = FLOOR
	updateElementsCount(WALL, -4)
	

	return board;
}

// Render the board to an HTML table
function renderBoard(board) {

	var strHTML = '';
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>\n';
		for (var j = 0; j < board[0].length; j++) {
			var currCell = board[i][j];

			var cellClass = getClassName({ i: i, j: j })

			// TODO - change to short if statement
			// if (currCell.type === FLOOR) cellClass += ' floor';
			// else if (currCell.type === WALL) cellClass += ' wall';
			cellClass += (currCell.type === FLOOR) ?  ' floor' : ' wall';

			//TODO - Change To template string
			strHTML += '\t<td class="cell ' + cellClass +
				'"  onclick="moveTo(' + i + ',' + j + ')" >\n';

			// TODO - change to switch case statement
			if (currCell.gameElement === GAMER) {
				strHTML += GAMER_IMG;
			} else if (currCell.gameElement === BALL) {
				strHTML += BALL_IMG;
			}

			strHTML += '\t</td>\n';
		}
		strHTML += '</tr>\n';
	}

	var elBoard = document.querySelector('.board');
	elBoard.innerHTML = strHTML;
}

// Move the player to a specific location
function moveTo(i, j) {

	var targetCell = gBoard[i][j];
	if (targetCell.type === WALL || gIsGlued) return;

	// Calculate distance to make sure we are moving to a neighbor cell
	var iAbsDiff = Math.abs(i - gGamerPos.i);
	var jAbsDiff = Math.abs(j - gGamerPos.j);

	// If the clicked Cell is one of the four allowed
	if ((iAbsDiff === 1 && jAbsDiff === 0) || (jAbsDiff === 1 && iAbsDiff === 0) ||
		(iAbsDiff === gBoard.length - 1 && jAbsDiff === 0) ||
		(iAbsDiff === 0 && jAbsDiff === gBoard[i].length - 1)) {

		if (targetCell.gameElement === BALL) {
			console.log('Collecting!');
			//**@@ */
			gBallsCollected++
			gBallSound.play()
			updateElementsCount(BALL,-1)
			updateElementsCount(FLOOR,1) //for the position we left
			renderBallsCollected()
			if(gElementsCount.balls === 0) gameOver()
		}else if(targetCell.gameElement === GLUE){
			console.log('glued')
			gIsGlued = true
			clearTimeout(targetCell.glueTimeout)
			setTimeout(() => gIsGlued = false,DURATION_OF_GLUE)
		}

		// MOVING from current position
		// Model:
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
		// Dom:
		renderCell(gGamerPos, '');

		// MOVING to selected position
		// Model:
		gGamerPos.i = i;
		gGamerPos.j = j;
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
		// DOM:
		renderCell(gGamerPos, GAMER_IMG);

	} // else console.log('TOO FAR', iAbsDiff, jAbsDiff);

}

// Convert a location object {i, j} to a selector and render a value in that element
function renderCell(location, value) {
	var cellSelector = '.' + getClassName(location)
	var elCell = document.querySelector(cellSelector);
	elCell.innerHTML = value;
}

// Move the player by keyboard arrows
function handleKey(event) {

	var i = gGamerPos.i;
	var j = gGamerPos.j;


	switch (event.key) {
		case 'ArrowLeft':
			moveTo(i, j === 0? gBoard[i].length - 1 : j - 1);
			break;
		case 'ArrowRight':
			moveTo(i, j === gBoard[i].length - 1 ? 0 : j + 1);
			break;
		case 'ArrowUp':
			moveTo((i === 0? gBoard.length - 1 : i - 1), j);
			break;
		case 'ArrowDown':
			moveTo(i === gBoard.length - 1 ? 0:  i + 1, j);
			break;

	}

}

// Returns the class name for a specific cell
function getClassName(location) {
	var cellClass = 'cell-' + location.i + '-' + location.j;
	return cellClass;
}


//**@@ */
function addElementToBoard(elementName, img){
	var cell = getRandomEmptyCell()
	if(cell === -1) return -1
	//Model
	gBoard[cell.i][cell.j].gameElement = elementName
	updateElementsCount(elementName, 1)

	//DOM
	renderCell(cell, img)

	return cell
}

function getRandomEmptyCell(){
	var value = 'Cell Value'
	
	while (value !== null){
		
		if(gElementsCount.floors <= 0){
			value = 'no floors'
			break
		} 
		
		var maxRows = gBoard.length-1
		var randomI = getRandomIntInclusive(0, maxRows)
		
		var maxCols = gBoard[randomI].length -1
		var randomJ = getRandomIntInclusive(0, maxCols)
		
		var cell = gBoard[randomI][randomJ]
		if(cell.type === FLOOR) value = cell.gameElement
	}

	if (value === 'no floors'){
		console.log('got here')
		gameOver(true)
		return -1
	}
	
	return {i: randomI, j: randomJ}
}

function updateElementsCount(keyName, step){
	keyName = keyName.toLowerCase() + 's'
	if (keyName !== 'floors') updateElementsCount(FLOOR, -step)
	return gElementsCount[keyName] += step
}

function renderBallsCollected(){
	document.querySelector('.balls-collected').innerText = gBallsCollected
}

function gameOver(isLoss = false){
	clearInterval(gBallInterval)
	clearInterval(gGlueInterval)
	
	if(isLoss){
		document.querySelector('.game-over-won').style.display = 'none'
		document.querySelector('.game-over-lost').style.display = 'block'
	}
	
	document.querySelector('.game-over').style.display = 'flex'

}

function restartGame(){
	gBallsCollected = 0
	for(const key in gElementsCount){
		gElementsCount[key] = 0
	}

	document.querySelector('.game-over-won').style.display = 'block'
		document.querySelector('.game-over-lost').style.display = 'none'
	document.querySelector('.game-over').style.display = 'none'
	initGame()
}

function addGlue (){
	var cell = addElementToBoard(GLUE, GLUE_IMG)
	if (cell === -1) return

	gBoard[cell.i][cell.j].glueTimeout = setTimeout(function() {
		gBoard[cell.i][cell.j].gameElement = null
		renderCell(cell,'')
		updateElementsCount(GLUE, -1)
	}, DURATION_OF_GLUE)
}