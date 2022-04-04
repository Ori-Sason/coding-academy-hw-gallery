'use strict'

function initGame() {
    gQuests = createQuests()
    document.querySelector(
      '.end-game p'
    ).innerHTML = `You hit <span>0</span>/${gQuests.length}`
    
    renderQuest()
  }
  
  function createQuests() {
    return [
      { id: 0, opts: ['HTML', 'CSS', 'JavaScript'], correctOptIndex: 1 },
      // { id: 1, opts: ['HTML', 'CSS', 'JavaScript'], correctOptIndex: 0 },
      // { id: 2, opts: ['HTML', 'CSS', 'JavaScript'], correctOptIndex: 2 },
      // { id: 3, opts: ['React', 'Angular', 'Vue'], correctOptIndex: 1 },
      // { id: 4, opts: ['React', 'Angular', 'Vue'], correctOptIndex: 0 },
      // { id: 5, opts: ['React', 'Angular', 'Vue'], correctOptIndex: 2 },
      // { id: 6, opts: ['JavaScript', 'NodeJs', 'jQuery'], correctOptIndex: 1 },
      // { id: 7, opts: ['Bootstrap', 'MongoDB', 'Vue'], correctOptIndex: 1 },
      // { id: 8, opts: ['MongoDB', 'jQuery', 'SQL'], correctOptIndex: 2 },
      // { id: 9, opts: ['jQuery', 'Bootstrap', 'MongoDB'], correctOptIndex: 0 },
      // { id: 10, opts: ['Ajax', 'MongoDB', 'SQL'], correctOptIndex: 0 },
      // { id: 11, opts: ['MongoDB', 'Bootstrap', 'Babel'], correctOptIndex: 1 },
    ]
  }
  
  function renderQuest() {
    var question = gQuests[gCurrQuestIdx]
  
    var htmlStr = `<img src="img/${gCurrQuestIdx}.png" alt="icon" />`
    htmlStr += `<ul class="answers">`
  
    for (var i = 0; i < question.opts.length; i++) {
      htmlStr += `<li class="option" onclick="checkAnswer(this, ${i})">${question.opts[i]}</li>`
    }
  
    htmlStr += `</ul>`
  
    gElQuestion.innerHTML = htmlStr
  }