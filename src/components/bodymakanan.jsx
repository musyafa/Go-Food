import React, { Component } from 'react'
import {Row, Col, Jumbotron, Button, Table} from "reactstrap";
import Gomakanan from './gomakanan';
import {Link} from "react-router-dom";
import makanan from '../containers/Makanan/makanan';

export default class Bodymakanan extends Component {

    state={
        daftar:[],
        makanan:[
            {
            id: 1,
            nama: "Hamburger",
            gambar: "https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_400,q_auto:eco,w_600/https://inews.co.uk/wp-content/uploads/2018/11/Capture-1-e1542813014368.png",
            price: 20000,
            number:0
            },
            {
            id: 2,
            nama: "Kentang Goreng",
            gambar: "https://mcdonalds.co.id/img/kentang.png",
            price: 5000,
            number:0
            },
            {
            id: 3,
            nama: "Ayam Goreng",
            gambar: "https://mcdonalds.co.id/uploads/Oe7UWB28yBHgERB9PcZt.png",
            price: 15000,
            number:0
            },
            {
            id: 4,
            nama: "Ice Cream",
            gambar: "https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/08112410/ourfood-category-desserts-mobile.jpg",
            price: 5000,
            number:0
            }
        ],
        total: 0
    };

    tambahTotalHarga= (harga, item) =>{
        this.setState({
            total: this.state.total + harga,
            daftar: this.state.daftar.concat(item)
        });
    sessionStorage.total = this.state.total + harga
    console.log(this.state.daftar);
    };
    


    kurangTotalHarga= (harga, item) =>{
        this.setState({
            total: this.state.total - harga,
            daftar: this.state.daftar.filter(l=>l.id != item.id)
        });
    };

  render() {
    
    return (
      <div>

        <br></br>
        <Jumbotron>
        <h5>Makanan Terpesan</h5>

        {this.state.daftar.map((item)=>
        <p>{item.nama} x 1 = {item.price}</p>
            )}

          <hr></hr>
            <h5>Total Harga</h5>
            <h5>Rp {this.state.total}</h5>
            <br></br>
            <Button size="sm" tag={Link} to="/bayar" color="success">Check Out</Button>
        </Jumbotron>
          <Row>
          {this.state.makanan.map(itemmakanan=>(
            <Col xs="12" md="4" lg="3">
            <Gomakanan
            itemmakanan={itemmakanan}
            tambahTotalHarga={this.tambahTotalHarga}
            kurangTotalHarga={this.kurangTotalHarga}
            makanan={this.state.makanan}/>
            
            </Col>  
          ))}
        </Row>  
      </div>
    )
  }
}
