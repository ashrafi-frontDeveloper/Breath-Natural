import React, { Component } from 'react'
import Header from './Header/Header'
import Main from './Main/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'



export default class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  render() {
    return (
      <div className=' relative'>
        <Header></Header>
        <Main></Main>
      </div>
    )
  }
}
