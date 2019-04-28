import React, { Component } from 'react'
import Header from '../../components/header';
import Bodyhome from '../../components/bodyhome';
import {Container} from "reactstrap";

export default class home extends Component {
  render() {
    return (
      <div align="center">

        <Header judul="Go-App"/>

        <Bodyhome/>
        
      </div>
    )
  }
}
