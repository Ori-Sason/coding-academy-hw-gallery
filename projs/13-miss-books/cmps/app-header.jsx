const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <section className="app-header">
      <header className="main-layout">
        <Link className="logo" to="/book">
          📚 Miss Book
        </Link>
        <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/book">Books</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
    </section>
  )
}
