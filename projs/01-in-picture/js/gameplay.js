'use strict'

function checkAnswer(elLi, optIdx) {
    var question = gQuests[gCurrQuestIdx]
    
    if (optIdx !== question.correctOptIndex) {
      elLi.classList.add('wrong')
      elLi.classList.remove('option')
      gIsWrongPicked = true
      
    } else {
      gCurrQuestIdx++
      if (!gIsWrongPicked) gCorrectAnswers++
  
      if (gCurrQuestIdx === gQuests.length) endGame()
      else {
        gElQuestion.style.opacity = 0
        setTimeout(() => {
          gElQuestion.style.opacity = '1'
  
          renderQuest()
        }, 500)
      }
  
      gIsWrongPicked = false
    }
  }
  
  function endGame() {
    gElGameOver.querySelector('span').innerText = gCorrectAnswers
    
    containersToggle(gElGameOver, gElGame)
  }
  
  function restartGame() {
    gCurrQuestIdx = 0
    gCorrectAnswers = 0
    gIsWrongPicked = false
  
    containersToggle(gElGame, gElGameOver)
    initGame()
  }
  
  function containersToggle(toVisible, toInvisible) {
    toInvisible.style.opacity = 0
  
    setTimeout(() => {
      toInvisible.style.display = 'none'
      toVisible.style.display = 'block'
      setTimeout(() => (toVisible.style.opacity = '1'), 300)
    }, 300)
  }