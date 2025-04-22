import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import Main from './MainHeader/Main'

export default class Header extends Component {
  render() {
    return (
        // <header className="bg-[url('/image/bg-header.png')] h-screen bg-cover w-full mb-96">
        <header className="bg-[url('/image/bg-header.png')] bg-cover bg-center w-full min-h-screen">
          {/* Component */}
          <NavBar></NavBar>
          <Main></Main>
        </header>
      
    )
  }
}
