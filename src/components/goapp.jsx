import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from "react-router-dom";

export default class Goapp extends Component {
  render() {
    return (
      <div>
        <Card style={{margin: "10px"}}>
        <CardImg top width="100%" src={this.props.gambarapp} alt="Go App" />
        <CardBody>
          <CardTitle>{this.props.namaapp}</CardTitle>
          <Button tag={Link} to={this.props.tujuan} size="sm" outline color="success">{this.props.tombolapp}</Button>
        </CardBody>
      </Card>
      </div>
    )
  }
}
