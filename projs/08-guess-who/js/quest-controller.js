'use strict'

// NOTE: This is a global used only in the controller
var gLastRes = null

$(document).ready(init)
$('.btn-start').click(onStartGuessing)
$('.btn-yes').click({ ans: 'yes' }, onUserResponse)
$('.btn-no').click({ ans: 'no' }, onUserResponse)
$('.btn-add-guess').click(onAddGuess)

function init() {
  console.log('Started...')
  createQuestsTree()
}

function onStartGuessing() {
  // DONE: hide the game-start section
  $(this).closest('.game-start').hide()

  renderQuest()
  // DONE: show the quest section
  $('.quest').show()
}

function renderQuest() {
  // DONE: select the <h2> inside quest and update
  // its text by the currQuest text
  $('.quest h2').text(getCurrQuest().txt)
}

function onUserResponse(ev) {
  // console.log('ev', ev)
  var res = ev.data.ans
  // If this node has no children
  if (isChildless(getCurrQuest())) {
    $('.quest').hide()
    
    if (res === 'yes') {
      // alert('Yes, I knew it!')
      // DONE: improve UX
      var successModal = new bootstrap.Modal(
        document.querySelector('.success-quest')
      )
      successModal.show()
      onRestartGame()
    } else {
      // alert('I dont know...teach me!')
      // DONE: hide and show new-quest section
      $('.new-quest').show()
    }
  } else {
    // DONE: update the lastRes global var
    gLastRes = res
    moveToNextQuest(res)
    renderQuest()
  }
}

function onAddGuess(ev) {
  ev.preventDefault()
  // DONE: Get the inputs' values
  var newGuess = $('#newGuess').val()
  var newQuest = $('#newQuest').val()

  // DONE: Call the service addGuess
  addGuess(newQuest, newGuess, gLastRes)
  onRestartGame()
}

function onRestartGame() {
  restartGame()
  $('.new-quest').hide()
  $('.game-start').show()
  gLastRes = null
}
