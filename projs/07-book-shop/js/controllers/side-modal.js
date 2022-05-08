'use strict'

const TOP_RATE = 10
const BOTTOM_RATE = 0

function openBookModal(bookId) {
  const modal = document.querySelector('.modal')
  const book = getBookById(bookId)

  if (book.lang === 'he')
    modal.querySelector('.modal-book-details').style.direction = 'rtl'
  else if (book.lang === 'en')
    modal.querySelector('.modal-book-details').style.direction = 'ltr'

  modal.querySelector('h2').innerText = book.name
  modal.querySelector('img').src = book.imgUrl
  modal.querySelector('img').alt = book.name + ' cover picture'
  modal.querySelector('.modal-description').innerText = book.description
  modal.querySelector('.modal-price').innerText = '$ ' + book.price

  const strHtml = `
  <button class="btn black" onclick="onUpdateRate(this, ${book.id}, -1)" ${
    checkIfDisabled(book.rate, BOTTOM_RATE) ? 'disabled' : ''
  }>-</button>
  <span class="modal-rate">${book.rate}</span>
  <button class="btn black" onclick="onUpdateRate(this, ${book.id}, 1)" ${
    checkIfDisabled(book.rate, TOP_RATE) ? 'disabled' : ''
  }>+</button>
  `

  modal.querySelector('.modal-rate-para').innerHTML = strHtml
  
  modal.classList.add(getCurrLang() === 'he' ? 'openrtl' : 'open')
}

function onUpdateRate(elBtn, bookId, step) {
  const book = getBookById(bookId)
  step = +step

  const newRate = book.rate + step

  document
    .querySelectorAll('.modal-rate-para button')
    .forEach((btn) => (btn.disabled = false))

  if (checkIfDisabled(newRate, TOP_RATE, BOTTOM_RATE)) {
    elBtn.disabled = true
  }

  updateRate(book, newRate)
  document.querySelector('.modal-rate').innerText = newRate
}

function checkIfDisabled(rate, ...values) {
  return values.some((val) => val === rate)
}

function onCloseModal() {
  document.querySelector('.modal').classList.remove('open', 'openrtl')
}
