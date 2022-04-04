'use strict'

$('.offcanvas-aside form').on('submit', onContactFormSubmit)

function onContactFormSubmit(ev){
    ev.preventDefault()
    const $elEmail = $('.offcanvas-aside input[type=email]')
    const $elSubject = $('.offcanvas-aside input[type=text]')
    const $elBody = $('.offcanvas-aside textarea')

    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${$elEmail.val()}&su=${$elSubject.val()}&body=${$elBody.val()}`
    
    $elEmail.val('')
    $elSubject.val('')
    $elBody.val('')

    window.open(emailUrl, '_blank')
    openCanvas()
}