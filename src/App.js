import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from "react-router-dom";
import Header from './components/header';
import Home from "./containers/Home";
import Restoran from "./containers/Restoran";
import Makanan from "./containers/Makanan";
import Bayar from "./containers/Bayar";

class App extends Component {

  render() {
  return (
    <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/restoran" component={Restoran} />
      <Route path="/makanan" component={Makanan} />
      <Route path="/bayar" component={Bayar} />
    </Switch>
    </div>
    );
  }
}
export default App;
