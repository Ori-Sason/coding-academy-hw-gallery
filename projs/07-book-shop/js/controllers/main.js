'use strict'

function init() {
  createBooks()
  renderBooks()
  renderPages()
}

function renderBooks() {
  var strHtml = getBooks()

  strHtml = strHtml.map((book) => {
    return `<tr>
        <td>${book.id}</td>
        <td>${book.name}</td>
        <td>$ ${book.price}</td>
        <td><button class="btn bgc-grd-blue" onclick="openBookModal(${book.id})" data-trans="btn-read">Read</button></td>
        <td><button class="btn bgc-grd-yellow" onclick="openForm(false, ${book.id})" data-trans="btn-update">Update</button></td>
        <td><button class="btn bgc-grd-red" onclick="onDelete(${book.id})" data-trans="btn-delete">Delete</button></td>
        </tr>
        `
  })

  document.querySelector('tbody').innerHTML = strHtml.join('')
}

// function onAddBook() {
//   const name = prompt('Enter book name')
//   const price = getPrice()

//   if (!name || !price) return

//   addBook(name, price)
//   renderBooks()
// }

function onDelete(bookId) {
  removeBook(bookId)
  renderBooks()
  renderPages()
}

// function onUpdate(bookId) {
//   const price = getPrice()

//   if (!price) return

//   updateBook(bookId, price)
//   renderBooks()
// }

function onSortBy(elTh, sortBy) {
  const sortOrder = sortBooksBy(sortBy) === 1
  elTh.querySelector('span').innerText = sortOrder ? '↓' : '↑'
  renderBooks()
}

function renderPages() {
  const maxPages = getMaxNumOfPages()
  var strHtml = '<li onclick="onNextPage(-1)">&lt;&lt;</li>'
  for (var i = 0; i < maxPages; i++) {
    strHtml += `<li onclick="onSelectPage(${i + 1})">${i + 1}</li>`
  }
  strHtml += '<li onclick="onNextPage(1)">&gt;&gt;</li>'

  document.querySelector('.pages').innerHTML = strHtml
}

function onSelectPage(idx) {
  setPage(+idx - 1)
  renderBooks()
}

function onNextPage(step) {
  setPage(null, +step)
  renderBooks()
}

function getPrice() {
  var price = +prompt('Enter book price in dollars (integer or decimal number)')
  if (!price) return null
  return price.toFixed(2)
}
