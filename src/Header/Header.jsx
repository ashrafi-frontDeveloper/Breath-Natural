import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import Main from './Main/Main'

export default class Header extends Component {
  render() {
    return (
        <header className="bg-[url('/image/bg-header.png')] h-screen bg-cover mb-96">
          {/* Component */}
          <NavBar></NavBar>
          <Main></Main>
      </header>
      
    )
  }
}
