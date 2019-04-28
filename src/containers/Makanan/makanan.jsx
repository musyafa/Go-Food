import React, { Component } from 'react'
import Header from '../../components/header';
import Bodymakanan from '../../components/bodymakanan';

export default class makanan extends Component {
  render() {
    return (
      <div align="center">
        <Header judul="Go-Food"/>
        <Bodymakanan/>
      </div>
    )
  }
}
