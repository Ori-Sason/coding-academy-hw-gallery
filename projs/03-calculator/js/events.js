'use strict'

function keyUp(event) {
  var key = event.key

  if (!isNaN(+key)) return addDigit(key, true)
  if (['+', '-', '*', '/'].includes(key)) return setOp(key, true)
  if (key === '.') addDot()
  if (key === 'Enter' || key === '=') return result()
  if (key === 'Backspace') return clearCurrent()
}
