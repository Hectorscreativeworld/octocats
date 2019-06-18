import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import navBar from './components/navBar'
import Character from './components/Character'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { octInfo: [] }
  }

  componentDidMount() {
    fetch('https://sdg-octodex.herokuapp.com/')
      .then(function(response) {
        return response.json()
      })
      .then(myJson => {
        console.log(Array.isArray(myJson['data']))
        this.setState({
          octInfo: myJson['data']
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  cardMap() {
    console.log(this.state.octInfo)
    return this.state.octInfo.map((card, key) => {
      return (
        <div key={key} class="container">
          <section class="main-body">
            <div class="outer-image">
              <img className="image-area" src={card.image} />
            </div>
          </section>
          <section class="caption">
            <p>{card.number}</p>
            <div className="name-pic">
              <p>
                the <em>{card.name}</em> by
              </p>
              <img src={card.authors[0].image} />
            </div>
          </section>
        </div>
      )
    })
  }

  render() {
    return (
      <>
        <nav className="header">
          <img src="https://octodex.github.com/ui/logo.png" />
          <div className="top-links">
            <a>RSS</a>
            <a>FAQ</a>
            <a>Back to GitHub</a>
          </div>
        </nav>
        {this.cardMap()}
        {
          <div>
            <footer>
              <div class="bottom-links">
                <p>RSS</p>
                <p>FAQ</p>
              </div>
              <i class="fab fa-github" />
              <div class="copyright">
                <p>© 2013 – 2018 GitHub, Inc.</p>
                <p>All rights reserved.</p>
              </div>
            </footer>
          </div>
        }
      </>
    )
  }
}

export default App
