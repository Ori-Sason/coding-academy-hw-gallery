'use strict'

function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>'
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>'
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j]
      var className = 'cell cell-' + i + '-' + j
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>'
  var elContainer = document.querySelector(selector)
  elContainer.innerHTML = strHTML
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
  if (value.includes(GHOST)) {
    for (var ghost of gGhosts) {
      if (ghost.location.i === location.i && ghost.location.j === location.j) {
        elCell.style.color = ghost.color
        break
      }
    }
  } else {
    elCell.style.color = 'white'
  }

  if(value !== PACMAN) elCell.style.transform = 'rotate(0)'
  else if(value === PACMAN) elCell.style.transform = `rotate(${gPacman.direction})`

  elCell.innerHTML = value
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
