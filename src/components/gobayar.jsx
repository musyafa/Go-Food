import React, { Component } from 'react'
import { Button } from 'reactstrap';
import {Link} from "react-router-dom";

export default class Gobayar extends Component {

    componentDidMount() {
        var x = sessionStorage.total;
        document.getElementById("totalHarga").innerHTML = x;
    }

    alhamdulillah = () =>{
        if (sessionStorage.total > 0) {
            onclick=alert("Terima Kasih")
            onclick= sessionStorage.total = 0;
        } else {
            onclick=alert("Pilihan Makanan nya dulu gan")
            onclick= sessionStorage.total = 0;
        }
    }


  render() {
    return (
      <div align="center">
        <img src="https://static.thenounproject.com/png/610677-200.png"/>
        <h3>Total Pemayaran</h3>
        <h3 id="totalHarga" />
        <hr></hr>

        <Button onClick={this.alhamdulillah} color="success" href=".">Bayar</Button>
      </div>
    )
  }
}
