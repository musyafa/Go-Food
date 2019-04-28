import React, { Component } from 'react'
import Header from '../../components/header';
import Bodyhome from '../../components/bodyhome';
import {Container} from "reactstrap";
import Slide from '../../components/slide';

export default class home extends Component {
  render() {
    return (
      <div align="center">

        <Header judul="Go-App"/>

        <Slide/>
        <br></br>
        <Bodyhome/>
        <hr></hr>
        <p style={{color:"silver", fontSize:"70%"}}>Created by Khoirul Musyafa</p>
      </div>
    )
  }
}
