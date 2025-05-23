import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import Main from './MainHeader/Main'
import Trendy from './Trendy/Trendy'

export default class Header extends Component {
  render() {
    return (
        // <header className="bg-[url('/image/bg-header.png')] bg-cover bg-center w-full min-h-screen">
        <header className="bg-[url('/image/bg-header.png')] bg-cover bg-center w-full min-h-[300vh]">
          {/* Component */}
          <NavBar></NavBar>
          <Main></Main>
          <Trendy></Trendy>
        </header>
    )
  }
}
