import React, { Component } from 'react'
import {Navbar, NavbarBrand, Button } from 'reactstrap';
import {Link} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        
        <Navbar style={{backgroundColor: "#00CC00"}} color="faded" dark>
        <NavbarBrand href="/"><b>{this.props.judul}</b></NavbarBrand>
        </Navbar>
      </div>
    )
  }
}
