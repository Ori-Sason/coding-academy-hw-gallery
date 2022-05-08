import { AppHeader } from './cmps/app-header.jsx'
import { BookDetails } from './cmps/book-details.jsx'
import { About } from './pages/about.jsx'
import { BookApp } from './pages/book-app.jsx'
import { Home } from './pages/home.jsx'
import { UserMsg } from './cmps/user-msg.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <section className='body-container'>
        <AppHeader />
        <section className="app">
          <Switch>
            <Route path="/book/:bookId" component={BookDetails} />
            <Route path="/book" component={BookApp} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
        <footer className='main-footer main-layout'>
          <p>☕ Coffeerights 2022 Ori Sason, nothing reserved</p>
        </footer>
      </section>
      <UserMsg />
    </Router>
  )
}
