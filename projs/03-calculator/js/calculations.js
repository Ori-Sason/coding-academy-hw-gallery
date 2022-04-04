'use strict'

function addDigit(digit, isKey = false) {
  if(!isKey) digit = digit.innerText

  if (gOp) {
    gNums[1] += digit
    renderDisplay(gNums[1])
  } else {
    gNums[0] += digit
    renderDisplay(gNums[0])
  }
  console.log(gNums, gOp)
}

function setOp(operation, isKey = false) {
  if(!isKey) operation = operation.innerText
  if (gNums[0] === '0' && operation === '-') {
    gNums[0] = '-'
  } else if (gNums[1]) {
    gNums[0] = result()
    gNums[1] = ''
  }

  gOp = operation
}

function result() {
  var result = +gNums[0]

  switch (gOp) {
    case '+':
      result += +gNums[1]
      break
    case '-':
      result -= +gNums[1]
      break
    case 'x':
      result *= +gNums[1]
      break
    case '÷':
      result /= +gNums[1]
      break
  }

  renderDisplay(result.toFixed(7))
  return result
}

function addDot() {
  var idx = getCurrentIndex()

  if (!gNums[idx].includes('.')) gNums[idx] += '.'
}
