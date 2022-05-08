'use strict'

const PAGE_SIZE = 3

var gBookCount = 0
var gBooks = []
var gSortBy = {
  id: { type: 'number', asc: -1 },
  name: { type: 'text', asc: -1 },
  price: { type: 'number', asc: -1 },
}
var gPageIdx = 0

function getBooks() {
  const startIdx = gPageIdx * PAGE_SIZE
  const books = gBooks.slice(startIdx, startIdx + PAGE_SIZE)
  return books
}

function removeBook(bookId) {
  const bookIdx = getBookIdx(bookId)
  if (bookIdx === -1) return

  gBooks.splice(bookIdx, 1)
  _saveToStorage()
}

function addBook(name, price, description) {
  _createBook(name, price, description)
  _saveToStorage()
}

function updateBook(bookId, bookPrice) {
  const book = getBookById(bookId)
  if (!book) return

  book.price = bookPrice
  _saveToStorage()
}

function updateRate(book, newRate) {
  book.rate = newRate
  _saveToStorage()
}

function sortBooksBy(sortBy) {
  const sortSetting = gSortBy[sortBy]
  sortSetting.asc = sortSetting.asc * -1

  if (sortSetting.type === 'text') {
    gBooks.sort(
      (a, b) =>
        a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase()) *
        sortSetting.asc
    )
  } else if (sortSetting.type === 'number') {
    gBooks.sort((a, b) => (+a[sortBy] - +b[sortBy]) * sortSetting.asc)
  }

  return sortSetting.asc
}

function setPage(pageIdx, step) {
  if (pageIdx !== null) {
    gPageIdx = pageIdx
  
  } else if (
    gPageIdx + step >= 0 &&
    (gPageIdx + step) * PAGE_SIZE < gBooks.length
  ) {
    gPageIdx += step
  }

  return gPageIdx
}

function getMaxNumOfPages(){
  return Math.ceil(gBooks.length / PAGE_SIZE)
}

function getBookById(bookId) {
  return gBooks.find((book) => book.id === bookId)
}

function getBookIdx(bookId) {
  return gBooks.findIndex((book) => book.id === bookId)
}

function createBooks() {
  const books = getFromStorage('booksDB')
  if (!books || books.length === 0) {
    _createBooks()
    _saveToStorage()
  } else {
    gBooks = books
    gBookCount = gBooks[gBooks.length - 1].id
  }
}

function _saveToStorage() {
  saveToStorage('booksDB', gBooks)
}

function _createBooks() {
  _createBook(
    'Think and Grow Rich',
    7.89,
    'en',
    'Think and Grow Rich reveals the secrets that can bring you fortune. By suppressing negative thoughts and keeping your focus on the long term, you can find true and lasting success.',
    'img/think-and-grow-rich.jpg'
  )

  _createBook(
    'Rich Dad Poor Dad',
    7.18,
    'en',
    "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    'img/rich-dad-poor-dad.jpg'
  )

  _createBook(
    'The 80/20 Principle',
    11.39,
    'en',
    'Be more effective with less effort by learning how to identify and leverage the 80/20 principle: that 80 percent of all our results in business and in life stem from a mere 20 percent of our efforts.',
    'img/the-80-20-principle.jpg'
  )

  _createBook(
    'The Law of Success',
    20.72,
    'en',
    "The Law of Success is the golden key to Hill's thought--his complete and unabridged mind-power method for achieving your goals. After interviewing dozens of industrialists, diplomats, thought leaders, and successful people from all walks of life, the young Hill distilled what he learned into these fifteen core lessons, organized with an introductory chapter, 'The Master Mind,' that serves as a primer to Hill's overall philosophy.",
    'img/the-law-of-success.jpg'
  )

  _createBook(
    'The 7 Habits of Highly Effective People',
    17.39,
    'en',
    'One of the most inspiring and impactful books ever written, The 7 Habits of Highly Effective People has captivated readers for nearly three decades. It has transformed the lives of presidents and CEOs, educators and parents—millions of people of all ages and occupations. Now, this 30th anniversary edition of the timeless classic commemorates the wisdom of the 7 Habits with modern additions from Sean Covey.',
    'img/the-7-habits-of-highly-successful-people.jpg'
  )
}

function _createBook(
  name,
  price,
  lang = 'en',
  description = makeLorem(),
  imgUrl = 'img/default-book.jpg'
) {
  gBooks.push({
    id: ++gBookCount,
    name,
    description,
    price,
    imgUrl,
    rate: 0,
    lang
  })
}
