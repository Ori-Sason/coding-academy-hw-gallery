'use strict'

function saveToStorage(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function getFromStorage(key){
    const json = localStorage.getItem(key)
    return JSON.parse(json)
}