'use strict'

$('.offcanvas-aside form').on('submit', onContactFormSubmit)

function toggleAside(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');    
}

function onContactFormSubmit(ev){
    ev.preventDefault()
    // const $elEmail = $('.offcanvas-aside input[type=email]')
    const $elSubject = $('.offcanvas-aside input[type=text]')
    const $elBody = $('.offcanvas-aside textarea')

    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=orisason1@gmail.com&su=${$elSubject.val()}&body=${$elBody.val()}`
    
    // $elEmail.val('')
    $elSubject.val('')
    $elBody.val('')

    window.open(emailUrl, '_blank')
    toggleAside()
}