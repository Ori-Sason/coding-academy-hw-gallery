'use strict'

var gIsNewBookForm = false
var gUpdateBookId = false

function openForm(isNewBook, bookId) {
  gIsNewBookForm = isNewBook
  const elFormSection = document.querySelector('.book-form')

  elFormSection.querySelector('h2').innerText = isNewBook
    ? 'Add new book'
    : 'Update price'

  //title
  const elTitle = elFormSection.querySelector('li')
  elTitle.querySelector('input').required = isNewBook
  elTitle.querySelector('input').hidden = !isNewBook
  elTitle.style.display = isNewBook ? 'block' : 'none'

  //description
  elFormSection.querySelector('li:nth-of-type(2)').style.display = isNewBook
    ? 'block'
    : 'none'

  //price
  if (!isNewBook) {
    gUpdateBookId = bookId
    elFormSection.querySelector('#book-name').value = getBookById(bookId).price
  }

  //submit button
  elFormSection.querySelector('button[type=submit]').innerText = isNewBook
    ? 'Add'
    : 'Update'

  elFormSection.style.display = 'block'
  document.querySelector('.backlog').style.display = 'block'
}

function onUpdateBook(ev) {
    console.log(ev)
  ev.preventDefault()

  const name = ev.target[0].value
  const description = ev.target[1].value
  const price = parseFloat(ev.target[2].value).toFixed(2)

  if (gIsNewBookForm) {
    addBook(name, price, description ? description : undefined)
  }else{
      updateBook(gUpdateBookId, price)
  }

  renderBooks()
  renderPages()
  closeForm()
}

function closeForm() {
  const elFormSection = document.querySelector('.book-form')

  elFormSection
    .querySelectorAll('.book-form input')
    .forEach((input) => (input.value = ''))
  elFormSection
    .querySelectorAll('.book-form textarea')
    .forEach((input) => (input.value = ''))

  elFormSection.style.display = 'none'
  document.querySelector('.backlog').style.display = 'none'
}
