import React, { Component } from 'react'
import Header from '../../components/header';
import Bodyrestoran from '../../components/bodyrestoran';

export default class restoran extends Component {
  render() {
    return (
      <div align="center">
          <Header judul="Go-Food"/>
          <Bodyrestoran/>

        
      </div>
    )
  }
}
