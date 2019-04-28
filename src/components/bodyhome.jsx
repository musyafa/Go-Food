import React, { Component } from 'react'
import {Row, Col, Container} from "reactstrap";
import Goapp from './goapp';

export default class Bodyhome extends Component {

    state={
        aplikasi:[
            {
            id: 1,
            nama: "Go-Food",
            gambar: "https://i.ibb.co/f1Kyf6M/rsz-logo-go-food-vector.png",
            tombol: "Order",
            tujuan: "/restoran"
            },
            {
            id: 2,
            nama: "Go-Jek",
            gambar: "https://i.ibb.co/ZSmPrSb/rsz-15fcaiedtixd53sm90gn5ja.jpg",
            tombol: "Order"
            },
            {
            id: 3,
            nama: "Go-Resto",
            gambar: "https://i.ibb.co/DwN0nV1/rsz-logo-go-resto-vector.jpg",
            tombol: "Order"
            },
            {
            id: 4,
            nama: "Go-Car",
            gambar:"https://i.ibb.co/sP8vhZ3/rsz-3865804-1300b412-4b78-4cb6-81c6-ab2d8b1acca1-2048-2047.png",
            tombol: "Order"
            }
        ]
    }

  render() {
    return (
      <div>
          <Container>
          <Row>
          {this.state.aplikasi.map(itemapp=>(
            <Col xs="6" md="4" lg="3">
            <Goapp
            gambarapp={itemapp.gambar}
            namaapp={itemapp.nama}
            tombolapp={itemapp.tombol}
            tujuan={itemapp.tujuan}/>
            
            </Col>  
          ))}
        </Row>  
        </Container>
      </div>
    )
  }
}
