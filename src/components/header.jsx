import React, { Component } from 'react'
import {Navbar, NavbarBrand, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {Link} from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        
        <Navbar style={{backgroundColor: "#00CC00"}} color="faded" dark>
        <NavbarBrand href="/" style={{fontFamily:"monospace", fontSize:"150%"}}><b>{this.props.judul}</b></NavbarBrand>
        <Button color="success" id="Popover1" type="button">
          Contact Us
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Contact Us</PopoverHeader>
          <PopoverBody>
            <p>Hub : +62 888</p>
            <p>IG : Go Food</p> 
            <p>FB : Go Food</p>
          </PopoverBody>
        </Popover>
        </Navbar>
      </div>
    )
  }
}
