'use strict'

function toggleLangMenu() {
  const elUl = document.querySelector('.lang-flag ul')

  if (elUl.style.display === 'block') return (elUl.style.display = 'none')

  const elDropdown = document.querySelector('.languages')

  const top = elDropdown.offsetHeight // + elDropdown.offsetTop
  const left = elDropdown.offsetLeft

  elUl.style.top = top + 'px'
  elUl.style.left = left + 2 + 'px'

  elUl.style.display = 'block'
}

function onChangeLang(lang) {
  const elDropdown = document.querySelector('.languages')
  elDropdown.querySelector('img').src = `img/flags/${lang}.png`

  const modal = document.querySelector('.modal')

  if (lang === 'he') {
    document.body.style.direction = 'rtl'
    modal.classList.add('rtl')
  } else if (lang === 'en') {
    document.body.style.direction = 'ltr'
    modal.classList.remove('rtl')
  }

  const els = document.querySelectorAll('[data-trans]')

  els.forEach((el) => {
    const trans = getTrans()
    const key = el.dataset.trans
    if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
      el.placeholder = trans[key][lang]
    } else el.innerText = trans[key][lang]
  })

  //close modal
  onCloseModal()

  //update language on service
  setCurrLang(lang)

  //toggle off menu
  toggleLangMenu()
}