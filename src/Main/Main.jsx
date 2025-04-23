import React, { Component } from 'react'
import Customer from './SectionCustomer/Customer'
import BestO2 from './SectionOurBesto2/BestO2'
import TopSelling from './SectionTopSelling/TopSelling'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Customer></Customer>
        <BestO2></BestO2>
        <TopSelling></TopSelling>
      </main>
    )
  }
}
