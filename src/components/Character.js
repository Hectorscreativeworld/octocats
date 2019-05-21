import React, { Component } from 'react'

class Character extends Component {
  render() {
    return (
      <div class="container">
        <section class="main-body">
          <div class="outer-image">
            <img class="image-area" src={this.props.pictureUrl} />
            <section class="caption">
              <p>{this.props.number}</p>
              <div class="name-pic">
                <p>
                  the <em>{this.props.name}</em> by
                </p>
                <img src={this.props.ArtiestUrl} />
              </div>
            </section>
          </div>
        </section>
      </div>
    )
  }
}

export default Character
