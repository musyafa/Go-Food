import React, { Component } from 'react'
import {Row, Col} from "reactstrap";
import Goapp from './goapp';


export default class Bodyrestoran extends Component {
    state={
        restoran:[
            {
            id: 1,
            nama: "McDoland",
            gambar: "https://www.snopes.com/tachyon/2018/08/mcdonalds.jpg?resize=865,452",
            tombol: "McDoland",
            tujuan: "/makanan"
            },
            {
            id: 1,
            nama: "KFC",
            gambar: "https://1.bp.blogspot.com/--WsOsppH2Og/WmSZv5iCIxI/AAAAAAAAADI/3tC5PE72QIoMeL4XWOlQNF4N3JkQW9IcQCLcBGAs/s1600/3055921-poster-p-1-kfcs-new-store-is-a-bucket-full-of-bad-taste.jpg",
            tombol: "KFC"
            },
            {
            id: 1,
            nama: "Pizza-Hut",
            gambar: "https://lh3.googleusercontent.com/-2sAf8N72wFE/Vb3eds0w-aI/AAAAAAAAczM/3cxVPmruiss/s980-Ic42/IMG_1017.JPG",
            tombol: "PIzza-Hut"
            }
        ]
    }

  render() {
    return (
      <div>
        <br/>
        <Row>
            {this.state.restoran.map(itemrestoran=>(
               <Col xs="12" md="6" lg="4">
               <Goapp
               gambarapp={itemrestoran.gambar}
               namaapp={itemrestoran.nama}
               tombolapp={itemrestoran.tombol}
               tujuan={itemrestoran.tujuan}/>
               </Col> 
            ))}
        </Row>

        
      </div>
    )
  }
}