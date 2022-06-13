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
    labels: ['board-games', 'frontend'],
  },
  {
    id: '02-touch-nums',
    name: 'Touch Nums',
    title: 'Get all numbers as fast as you can',
    desc: 'Mini game written in vanilla JavaScript',
    dayAtCourse: 9,
    url: null,
    publishedAt: 'March 2022',
    labels: ['board-games', 'frontend'],
  },
  {
    id: '03-calculator',
    name: 'Calculator',
    title: '',
    desc: 'Calculator program, written in vanilla JavaScript',
    dayAtCourse: 9,
    url: null,
    publishedAt: 'March 2022',
    labels: ['frontend'],
  },
  {
    id: '04-ball-board',
    name: 'Ball Board',
    title: 'Get all balls before they overload',
    desc: 'Mini game written in vanilla JavaScript',
    dayAtCourse: 10,
    url: null,
    publishedAt: 'March 2022',
    labels: ['board-games', 'frontend'],
  },
  {
    id: '05-pacman',
    name: 'Pac-Man',
    title: 'Can you beat the ghosts?',
    desc: 'Mini game written in vanilla JavaScript',
    dayAtCourse: 11,
    url: null,
    publishedAt: 'March 2022',
    labels: ['board-games', 'frontend'],
  },
  {
    id: '06-minesweeper',
    name: 'Minesweeper',
    title: 'My first sprint project',
    desc: 'My first spring project, Written in vanilla JavaScript. Explore the new features.',
    dayAtCourse: 13,
    url: null,
    publishedAt: 'March 2022',
    labels: ['board-games', 'frontend', 'sprint'],
  },
  {
    id: '07-book-shop',
    name: 'Book Shop',
    title: 'First MVC project',
    desc: 'Written in vanilla JavaScript',
    dayAtCourse: 18,
    url: null,
    publishedAt: 'April 2022',
    labels: ['MVC', 'frontend', 'i18n'],
  },
  {
    id: '08-guess-who',
    name: 'Guess Who',
    title: 'First project using jQuery and Bootstrap',
    desc: 'Written in JavaScript using with jQuery and Bootstrap',
    dayAtCourse: 19,
    url: null,
    publishedAt: 'April 2022',
    labels: ['mini-games', 'frontend'],
  },
  {
    id: '09-place-keeper',
    name: 'Place Keeper',
    title: 'Store locations in Google Maps',
    desc: 'Written in vanilla JavaScript',
    dayAtCourse: 25,
    url: null,
    publishedAt: 'April 2022',
    labels: ['frontend', 'Google Maps'],
  },
  {
    id: '10-meme-generator',
    name: 'Meme Generator',
    title: 'My second sprint project',
    desc: 'Written in vanilla JavaScript',
    dayAtCourse: 29,
    url: null,
    publishedAt: 'April 2022',
    labels: ['frontend', 'canvas'],
  },
  {
    id: '11-wikitube',
    name: 'Wikitube',
    title: 'Wikipedia and YouTube in once place',
    desc: 'Written in vanilla JavaScript, using AJAX and Promises',
    dayAtCourse: 32,
    // url: 'https://ori-sason.github.io/wikitube/',
    url: null,
    publishedAt: 'April 2022',
    labels: ['frontend', 'AJAX', 'promises'],
  },
  {
    id: '12-traveltip',
    name: 'Traveltip',
    title: 'Find the right locations to travel to',
    desc: 'Collaborating with Alex Yakovlev (using Git & GitHub)',
    dayAtCourse: 32,
    url: 'MISSING', /* FIX - need to add a URL */
    publishedAt: 'April 2022',
    labels: ['frontend', 'AJAX', 'promises'],
  },
  {
    id: '13-miss-book',
    name: 'Miss Book',
    title: 'A Book Store written in React',
    desc: '4 days of React workshop',
    dayAtCourse: 36,
    url: null,
    publishedAt: 'April 2022',
    labels: ['frontend', 'React'],
  },
  {
    id: '14-appsus',
    name: 'Appsus',
    title: 'My third sprint project',
    desc: 'Gmail and Google Keep written in React. Collaborating with Alex Yakovlev.',
    dayAtCourse: 38,
    url: 'https://ori-sason.github.io/appsus/#/',
    publishedAt: 'April 2022',
    labels: ['frontend', 'React'],
  },
  {
    id: '15-mister-toy',
    name: 'Mister Toy',
    title: 'Toy shop',
    desc: 'React project with a backend for the first time. Using SASS and web sockets.',
    dayAtCourse: 54,
    url: 'http://mister-toy-camar22.herokuapp.com/#/',
    publishedAt: 'May 2022',
    labels: ['backend', 'React', 'Web Sockets', 'SASS'],
  },
  {
    id: '16-wixy',
    name: 'Wixy',
    title: 'Fianl Project. Build your website with Wixy',
    desc: 'Website builder based on Wix. Collaborating with Alex Yakovlev and Vicky Polatov.',
    dayAtCourse: 55,
    url: 'https://wixy-2022.herokuapp.com/#/',
    publishedAt: 'May 2022',
    labels: ['backend', 'React', 'Web Sockets', 'SASS'],
  },
]

function getProjects() {
  return gProjs
}

function getProjById(projId){
  return gProjs.find(proj => proj.id === projId)
}
