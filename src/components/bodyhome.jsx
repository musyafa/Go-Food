import React, { Component } from 'react'
import {Row, Col} from "reactstrap";
import Goapp from './goapp';

export default class Bodyhome extends Component {

    state={
        aplikasi:[
            {
            id: 1,
            nama: "Go-Food",
            gambar: "https://www.kampungdesigner.com/wp-content/uploads/edd/2018/08/Logo-Go-Food-Vector.png",
            tombol: "Go-Food",
            tujuan: "/restoran"
            },
            {
            id: 2,
            nama: "Go-Jek",
            gambar: "https://cdn-images-1.medium.com/max/1200/1*5fCAiEdtIXD53sM90gn5JA.jpeg",
            tombol: "Go-Jek"
            },
            {
            id: 3,
            nama: "Go-Resto",
            gambar: "https://www.kampungdesigner.com/wp-content/uploads/edd/2018/11/Logo-Go-Resto-Vector.jpg",
            tombol: "Go-Resto"
            },
            {
            id: 4,
            nama: "Go-Car",
            gambar:"https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/19/3865804/3865804_1300b412-4b78-4cb6-81c6-ab2d8b1acca1_2048_2047.png",
            tombol: "Go-Car"
            }
        ]
    }

  render() {
    return (
      <div>
          <br></br>
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
      </div>
    )
  }
}
