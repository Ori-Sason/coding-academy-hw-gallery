'use strict'

var gProjs = [
  {
    id: '01-in-picture',
    name: 'In Picture',
    title: 'Icons of Web Development tools and technologies questionnaire',
    desc: 'Mini game written in vanilla JavaScript.\nCan you get all answers right?',
    dayAtCourse: 9,
    url: null,
    publishedAt: 'March 2022',
    labels: ['board-games', 'front-end'],
  },
  {
    id: '02-touch-nums',
    name: 'Touch Nums',
    title: 'Get all numbers as fast as you can',
    desc: 'Mini game written in vanilla JavaScript',
    dayAtCourse: 9,
    url: null,
    publishedAt: 'March 2022',
    labels: ['board-games', 'front-end'],
  },
  {
    id: '03-calculator',
    name: 'Calculator',
    title: '',
    desc: 'Calculator program, written in vanilla JavaScript',
    dayAtCourse: 9,
    url: null,
    publishedAt: 'March 2022',
    labels: ['front-end'],
  },
  {
    id: '04-ball-board',
    name: 'Ball Board',
    title: 'get all balls before they overload',
    desc: 'Mini game written in vanilla JavaScript',
    dayAtCourse: 10,
    url: null,
    publishedAt: 'March 2022',
    labels: ['board-games', 'front-end'],
  },
  {
    id: '05-pacman',
    name: 'Pac-Man',
    title: 'can you beat the ghosts?',
    desc: 'Mini game written in vanilla JavaScript',
    dayAtCourse: 11,
    url: null,
    publishedAt: 'March 2022',
    labels: ['board-games', 'front-end'],
  },
  {
    id: '06-Minesweeper',
    name: 'minesweeper',
    title: 'My first sprint project',
    desc: 'My first spring project, Written in vanilla JavaScript. Explore the new features.',
    dayAtCourse: 13,
    url: 'https://ori-sason.github.io/Minesweeper/',
    publishedAt: 'March 2022',
    labels: ['board-games', 'front-end', 'sprint'],
  },
  {
    id: '07-book-shop',
    name: 'Book Shop',
    title: 'first MVC project',
    desc: 'Written in vanilla JavaScript',
    dayAtCourse: 18,
    url: null,
    publishedAt: 'April 2022',
    labels: ['MVC', 'front-end'],
  },
  {
    id: '08-guess-who',
    name: 'Guess Who',
    title: 'First project using jQuery and Bootstrap',
    desc: 'Written in JavaScript using with jQuery and Bootstrap',
    dayAtCourse: 19,
    url: null,
    publishedAt: 'April 2022',
    labels: ['mini-games', 'front-end'],
  },
]

function getProjects() {
  return gProjs
}

function getProjById(projId){
  return gProjs.find(proj => proj.id === projId)
}
