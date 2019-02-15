import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link to="/">graphql.explore-tech.org</Link>
        {/* <a class="navbar-item" href="/"> */}
        {/* graphql.explore-tech.org */}
        {/* </a> */}
      </div>
    </nav>
  )
}

export default Navigation
