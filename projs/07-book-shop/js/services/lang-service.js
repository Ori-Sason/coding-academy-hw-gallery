'use strict'

var gCurrLang = 'en'

const gTrans = {
  title: {
    he: 'ברוכה הבא ל-My Bookshop',
    en: 'Welcome to My Bookshop',
  },
  'create-new-book': {
    he: 'צור ספר חדש',
    en: 'Create new book',
  },
  'header-id': {
    he: 'מס.',
    en: 'Id',
  },
  'header-title': {
    he: 'שם הספר',
    en: 'Title',
  },
  'header-price': {
    he: 'מחיר',
    en: 'Price',
  },
  'header-actions': {
    he: 'פעולות',
    en: 'Actions',
  },
  'btn-read': {
    he: 'קרא עוד',
    en: 'Read',
  },
  'btn-update': {
    he: 'עדכן',
    en: 'Update',
  },
  'btn-delete': {
    he: 'מחק',
    en: 'Delete',
  },
  'form-title': {
    add: {
      he: 'הוסף ספר חדש',
      en: 'Add new book',
    },
    update: {
      he: 'עדכן מחיר',
      en: 'Update price',
    },
  },
  'form-label-title': {
    he: 'שם הספר',
    en: 'Book Title',
  },
  'form-input-title': {
    he: 'רשום את שם הספר',
    en: 'Enter book name',
  },
  'form-label-desc': {
    he: 'תיאור',
    en: 'Description',
  },
  'form-input-desc': {
    he: 'רשום תיאור לספר (אופציונלי)',
    en: 'Enter book description (optional)',
  },
  'form-label-price': {
    he: 'מחיר',
    en: 'Price',
  },
  'form-input-price': {
    he: 'רשום את מחיר הספר בדולר ארה"ב',
    en: 'Enter book price in USD',
  },
  'form-btn-cancel': {
    he: 'בטל',
    en: 'Cancel',
  },
  'form-btn-add': {
    add: {
      he: 'הוסף',
      en: 'Add',
    },
    update: {
        he: 'עדכן',
        en: 'Update',
    },
  },
  'modal-price': {
    he:'מחיר:',
    en:'Price:'
  },
  'modal-rate': {
    he:'דירוג:',
    en:'Rate:'
  },
}



function getTrans() {
  return gTrans
}

function setCurrLang(lang) {
  gCurrLang = lang
}

function getCurrLang(){
    return gCurrLang
}
