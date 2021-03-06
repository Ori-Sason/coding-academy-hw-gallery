'use strict'

//KEYWORDS: animal, politician, baby, dog, cat, men, women, actors, movies, funny, comic, smile

const gKeywordSearchCountMap = {}
const MAX_KEYWORD_HEIGHT = 10
const gFontFamilies = ['impact', 'poppins', 'fontdiner-swanky', 'lobster']

const gImgs = [
  {
    id: 1,
    url: 'img/gallery/1.jpg',
    keywords: ['politician', 'men'],
    alt: 'donald trump',
  },
  {
    id: 2,
    url: 'img/gallery/2.jpg',
    keywords: ['animal', 'dog'],
    alt: 'puppies',
  },
  {
    id: 3,
    url: 'img/gallery/3.jpg',
    keywords: ['animal', 'dog', 'baby'],
    alt: 'baby and dog',
  },
  {
    id: 4,
    url: 'img/gallery/4.jpg',
    keywords: ['animal', 'cat'],
    alt: 'cat sleep on laptop',
  },
  {
    id: 5,
    url: 'img/gallery/5.jpg',
    keywords: ['baby', 'funny'],
    alt: 'baby wins',
  },
  {
    id: 6,
    url: 'img/gallery/6.jpg',
    keywords: ['actors', 'movies', 'men'],
    alt: '',
  },
  {
    id: 7,
    url: 'img/gallery/7.jpg',
    keywords: ['baby', 'smile', 'funny'],
    alt: 'happy baby',
  },
  {
    id: 8,
    url: 'img/gallery/8.jpg',
    keywords: ['actors', 'movies', 'men'],
    alt: '',
  },
  {
    id: 9,
    url: 'img/gallery/9.jpg',
    keywords: ['baby', 'smile', 'funny'],
    alt: 'happy baby',
  },
  {
    id: 10,
    url: 'img/gallery/10.jpg',
    keywords: ['politician', 'smile', 'men'],
    alt: 'Barack Obama',
  },
  {
    id: 11,
    url: 'img/gallery/11.jpg',
    keywords: ['men'],
    alt: 'kissing men',
  },
  {
    id: 12,
    url: 'img/gallery/12.jpg',
    keywords: ['men', 'funny'],
    alt: 'Haim Hecht',
  },
  {
    id: 13,
    url: 'img/gallery/13.jpg',
    keywords: ['actors', 'movies', 'men', 'smile'],
    alt: 'Leonardo DiCaprio',
  },
  {
    id: 14,
    url: 'img/gallery/14.jpg',
    keywords: ['actors', 'movies', 'men'],
    alt: '',
  },
  {
    id: 15,
    url: 'img/gallery/15.jpg',
    keywords: ['actors', 'movies', 'men'],
    alt: '',
  },
  {
    id: 16,
    url: 'img/gallery/16.jpg',
    keywords: ['actors', 'movies', 'men'],
    alt: 'Dr. Evil',
  },
  {
    id: 17,
    url: 'img/gallery/17.jpg',
    keywords: ['politician', 'men'],
    alt: 'vladimir Putin',
  },
  {
    id: 18,
    url: 'img/gallery/18.jpg',
    keywords: ['movies', 'men'],
    alt: 'Toy Story',
  },
  {
    id: 19,
    url: 'img/gallery/19.jpg',
    keywords: ['movies', 'men'],
    alt: '',
  },
  {
    id: 20,
    url: 'img/gallery/20.jpg',
    keywords: ['movies', 'women'],
    alt: 'Toy Story',
  },
  {
    id: 21,
    url: 'img/gallery/21.jpg',
    keywords: ['movies', 'men', 'funny'],
    alt: 'Dr evil',
  },
  {
    id: 22,
    url: 'img/gallery/22.jpg',
    keywords: ['movies', 'men', 'smile', 'funny'],
    alt: 'Dancing kids',
  },
  {
    id: 23,
    url: 'img/gallery/23.jpg',
    keywords: ['politician', 'men'],
    alt: 'Donald Tramp',
  },
  {
    id: 24,
    url: 'img/gallery/24.jpg',
    keywords: ['dog', 'funny'],
    alt: 'lying dog',
  },
  {
    id: 25,
    url: 'img/gallery/25.jpg',
    keywords: ['women'],
    alt: 'Opera Winfrey',
  },
]

const gStickers = [
  { id: 1, url: 'img/stickers/bar-chart.png' },
  { id: 2, url: 'img/stickers/cool.png' },
  { id: 3, url: 'img/stickers/headache.png' },
  { id: 4, url: 'img/stickers/idea.png' },
  { id: 5, url: 'img/stickers/nice.png' },
  { id: 6, url: 'img/stickers/no-way.png' },
  { id: 7, url: 'img/stickers/oh-yeah.png' },
  { id: 8, url: 'img/stickers/oops.png' },
  { id: 9, url: 'img/stickers/self-confidence.png' },
  { id: 10, url: 'img/stickers/yay.png' },
]

let gSavedMemes = []
let gMeme = {}

function createNewMeme() {
  gMeme = {
    id:
      gSavedMemes.length === 0 ? 0 : gSavedMemes[gSavedMemes.length - 1].id + 1,

    selectedImgId: 1,
    userImg: null,
    selectedLineIdx: 0,
    fontFamily: 'impact',
    lines: [],
    screenshot: null,
    oldCanvasSize: { width: 504, height: 572 },
  }
}

function getImgs(keyword) {
  if (!keyword) return gImgs
  return gImgs.filter((img) => img.keywords.includes(keyword.toLowerCase()))
}

function getMeme() {
  return gMeme
}

function getCurrLine() {
  if (gMeme.lines.length === 0) return null
  return gMeme.lines[gMeme.selectedLineIdx]
}

function setCurrLine(idx) {
  gMeme.selectedLineIdx = idx
}

function getImg(id) {
  return gImgs.find((img) => img.id === id)
}

function setImg(id, userImg) {
  gMeme.selectedImgId = id
  gMeme.userImg = userImg
}

function setLineTxt(text) {
  gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function switchLine() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    return (gMeme.selectedLineIdx = 0)
  }

  gMeme.selectedLineIdx++
}

function addLine() {
  _createMemeLine()
  gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function deleteLine() {
  if (gMeme.lines.length === 0) return

  gMeme.lines.splice(gMeme.selectedLineIdx)
  gMeme.selectedLineIdx--

  if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = 0

  if (gMeme.lines.length === 0) {
    _createMemeLine()
  }
}

/* STYLE LINE */

function setFontSize(step) {
  getCurrLine().size += +step
}

function setAlign(alignment, canvasWidth) {
  const line = getCurrLine()
  line.align = alignment

  let x = line.sticker ? line.size : 30

  if (line.align === 'right') {
    x =
      canvasWidth -
      30 -
      (line.sticker ? line.size : gCtx.measureText(line.txt).width)
  } else if (line.align === 'center') {
    x =
      (canvasWidth -
        (line.sticker ? line.size : gCtx.measureText(line.txt).width)) /
      2
  }

  line.pos.x = x
}

function getFontFamilies() {
  return gFontFamilies.sort()
}

function setFontFamily(fontName) {
  gMeme.fontFamily = fontName
}

function setStrokeClr(clr) {
  gMeme.lines[gMeme.selectedLineIdx].strokeClr = clr
}

function setFillClr(clr) {
  gMeme.lines[gMeme.selectedLineIdx].fillClr = clr
}

/* STICKERS */

function setSticker(src) {
  const line = getCurrLine()
  line.sticker = src
}

function getStickerUrl(id) {
  const sticker = gStickers.find((sticker) => sticker.id === +id)
  return sticker.url
}

function getStickers() {
  return gStickers
}

/* LINE POSITION */

function isLineClicked(clickedPos) {
  function isStickerInArea(pos, width, height) {
    return (
      clickedPos.x >= pos.x - width / 2 - 10 &&
      clickedPos.x <= pos.x + width / 2 + 10 &&
      clickedPos.y >= pos.y - height / 2 - 10 &&
      clickedPos.y <= pos.y + height / 2 + 10
    )
  }

  function isTextInArea(pos, width, height) {
    return (
      clickedPos.x >= pos.x - 10 &&
      clickedPos.x <= pos.x + width + 10 &&
      clickedPos.y >= pos.y - height - 10 &&
      clickedPos.y <= pos.y - 10
    )
  }

  const lineIdx = gMeme.lines.findIndex(
    (line) =>
      (line.sticker && isStickerInArea(line.pos, line.size, line.size)) ||
      (line.txt &&
        isTextInArea(line.pos, gCtx.measureText(line.txt).width, line.size))
  )

  if (lineIdx !== -1) setCurrLine(lineIdx)

  return lineIdx !== -1
}

function setLineDrag(isDrag) {
  const line = getCurrLine()
  line.isDrag = isDrag
}

function moveLine(dx, dy) {
  const line = getCurrLine()
  line.pos.x += dx
  line.pos.y += dy
}

function setLineInitPos(pos) {
  const line = getCurrLine()
  line.pos = pos
}

/* SAVE IN STORAGE */
function getSavedMemes() {
  return gSavedMemes
}

function loadMemesFromStorage() {
  const storagedMemes = getFromStorage(STORAGE_KEY)
  if (storagedMemes) gSavedMemes = storagedMemes
  else gSavedMemes = []
}

function saveMeme() {
  const memeIdx = getMemeIdxInStorage(gMeme.id)

  addLine()
  renderMeme()

  //the next set timeout is because 'image onload' takes time (we didn't learn promises yet)
  setTimeout(() => {
    const data = gElCanvas.toDataURL()
    gMeme.screenshot = data

    if (memeIdx === -1) gSavedMemes.push(gMeme)
    else gSavedMemes[memeIdx] = gMeme

    saveMemesToStorage()

    deleteLine()
    renderMeme()
  }, 0)
}

function saveMemesToStorage() {
  saveToStorage(STORAGE_KEY, gSavedMemes)
}

function loadMeme(id) {
  const memeIdx = getMemeIdxInStorage(id)
  gMeme = gSavedMemes[memeIdx]
}

function removeMemeFromStorage(id) {
  const memeIdx = getMemeIdxInStorage(id)
  gSavedMemes.splice(memeIdx, 1)
  saveMemesToStorage()
}

function getMemeIdxInStorage(id) {
  return gSavedMemes.findIndex((meme) => meme.id === id)
}

/* KEYWORDS */
function createKeywordSearchMap() {
  const keywords = new Set()
  const imgs = getImgs()
  imgs.forEach((img) => img.keywords.forEach((word) => keywords.add(word)))

  Array.from(keywords).map(
    (word) =>
      (gKeywordSearchCountMap[word] = getRandomIntInclusive(
        1,
        MAX_KEYWORD_HEIGHT
      ))
  )
}

function getKeywordSearchMap() {
  return gKeywordSearchCountMap
}

function countKeyword(keyword) {
  if (gKeywordSearchCountMap[keyword]) gKeywordSearchCountMap[keyword]++
}

function getMaxKeywordHeight() {
  return MAX_KEYWORD_HEIGHT
}

/* RANDOM MEME (SURPRISE ME) */

/* FIX - EVERYTHING IS IN  THE SERVICE. SOME OF HERE SHOULD BE IN THE CONTROLLER */
function createRandomMeme() {
  createNewMeme()
  gMeme.selectedImgId = getRandomIntInclusive(0, gImgs.length - 1)
  initGenerator(true)
  showEditor()
  resizeCanvas()

  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      if (i === 2 && Math.random() > 0.4) continue
      addLine()
      gMeme.selectedLineIdx = i
      const line = gMeme.lines[i]
      if (i < 2) line.txt = makeLorem(getRandomIntInclusive(2, 4)) // CHECK SIZE
      line.size = getRandomIntInclusive(40, 50)
      line.align = 'center'
      line.strokeClr = getRandomColor()
      line.fillClr = getRandomColor()

      
      if (i === 2) {
        const stickerId = getRandomIntInclusive(1, gStickers.length)
        line.sticker = getStickerUrl(stickerId)
        line.align = 'left'
      }

      setInitialPos(line)
    }

    gMeme.selectedLineIdx = 0
    setTimeout(() => {
      resizeCanvas()
      renderMeme()
    }, 10)
  }, 10)
}

/* PRIVATE FUNCTIONS */
function _createMemeLine() {
  gMeme.lines.push({
    id: gMeme.lines.length,
    txt: '',
    size: 50,
    align: 'left',
    strokeClr: 'black',
    fillClr: 'whitesmoke',
    sticker: null,
    pos: { x: 30, y: 60 },
    isDrag: false,
  })
}
