import React, { Component } from 'react'

class navBar extends Component {
  render() {
    return (
      <header className="page-header">
        <nav class="header">
          <img src="./images/logo (1).png" />
          <div class="top-links">
            <a>RSS</a>
            <a>FAQ</a>
            <a>Back to GitHub</a>
          </div>
        </nav>
      </header>
    )
  }
}

export default navBar
