import React, { Component } from 'react'
import Customer from './SectionCustomer/Customer'
import BestO2 from './SectionOurBesto2/BestO2'
import TopSelling from './SectionTopSelling/TopSelling'
import Trendy from './SectionTrendy/Trendy'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Customer></Customer>
        <BestO2></BestO2>
        <TopSelling></TopSelling>
        <Trendy></Trendy>
      </div>
    )
  }
}
