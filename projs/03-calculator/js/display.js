'use strict'

function renderDisplay(num, isMemory = false) {
  var elDisplay = document.querySelector(
    isMemory ? '.memory-display' : '.calculate-display td'
  )
  elDisplay.innerText = +num
}

function backspace() {
  var idx = getCurrentIndex()
  gNums[idx] = gNums[idx].substring(0, gNums[idx].length - 1)
  renderDisplay(gNums[idx])
}

function clearEntirely() {
  gNums = ['0', '']
  gOp = ''
  renderDisplay(0)
}

function clearCurrent() {
  var idx = getCurrentIndex()
  gNums[idx] = '0'
  renderDisplay(0)
}

function getCurrentIndex() {
  return gNums[1] ? 1 : 0
}
