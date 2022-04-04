'use strict'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null

function restartGame() {
  saveToStorage('guessMeDB', gQuestsTree)
  gCurrQuest = gQuestsTree
  gPrevQuest = null
}

function createQuestsTree() {
  gQuestsTree = loadFromStorage('guessMeDB')
  if (!gQuestsTree) {
    gQuestsTree = createQuest('Male?')
    gQuestsTree.yes = createQuest('Gandhi')
    gQuestsTree.no = createQuest('Rita')
  }

  gCurrQuest = gQuestsTree
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  }
}

function isChildless(node) {
  return node.yes === null && node.no === null
}

function moveToNextQuest(res) {
  // DONE: update the gPrevQuest, gCurrQuest global vars
  gPrevQuest = gCurrQuest
  gCurrQuest = gCurrQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  // DONE: Create and Connect the 2 Quests to the questions tree
  const newQuestTree = createQuest(newQuestTxt)
  newQuestTree.yes = createQuest(newGuessTxt)
  newQuestTree.no = gCurrQuest

  gPrevQuest[lastRes] = newQuestTree
}

function getCurrQuest() {
  return gCurrQuest
}
