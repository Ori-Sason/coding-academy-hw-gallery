'use strict'

function setMemoryOperations(elBtn) {
  if (elBtn.innerText === 'MR' && (!gOp || (gNums[0] && gNums[1]))) return
  gMemoryNum = updateMemory(elBtn.innerText)
  renderDisplay(gMemoryNum, true)
}

function updateMemory(value) {
  if (value === 'MC') return '0'
  if (value === 'MR' && !gOp === '') {
    return gMemoryNum
  } else if (value === 'MR') {
    gNums[1] = gMemoryNum
    renderDisplay(gMemoryNum)
    return gMemoryNum
  }
  if (value === 'MS') {
    return document.querySelector('.calculate-display td').innerText
  }
  if (value === 'M+') {
    return +gMemoryNum + +updateMemory('MS')
  }
}
