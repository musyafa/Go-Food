import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Navbar } from 'reactstrap';

export default class Gomakanan extends Component {
    state = {
        qty: 0
    };

    tambah = (price,id) => {
        this.setState({
            qty: this.state.qty + 1
        })

        const x = this.props.makanan.find(item=>item.id===id)
        this.props.tambahTotalHarga(price, x)

    }

    kurang = (price, id) => {
        if (this.state.qty === 0){
            return;
        }
        this.setState({
            qty: this.state.qty - 1
        })
        const x = this.props.makanan.find(item=>item.id===id)
        this.props.kurangTotalHarga(price, x)

    }
    
  render() {
      const {gambar, nama, price, id}=this.props.itemmakanan

    return (
      <div>
        <Card style={{margin: "7px"}}>
        <CardImg top width="100%" src={gambar} alt="Go App" />
        <CardBody>
          <CardTitle>{nama}</CardTitle>
          <p>Harga : Rp {price}</p>
          <Navbar style={{backgroundColor : "white"}} color="faded" light>
          <Button  size ="sm" onClick={()=>this.kurang(price, id)} color="danger">-</Button>{' '}
          <h2 align="center">{this.state.qty}</h2>
          <Button  size ="sm" onClick={()=>this.tambah(price,id)} color="success">+</Button>{' '}
          </Navbar>
        </CardBody>
        </Card>
      </div>
    )
  }
}
