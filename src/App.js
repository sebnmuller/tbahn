import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import map from './imgs/Oslo_T-bane_linjekart.svg.png'

class App extends Component {

  clickThis(e) {

    e.preventDefault()
    alert("stuff happened")
    

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to T-PAIN</h2>
        </div>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>

        <img src={map} useMap="#tmap" alt="Oslo T-Bane Linjekart"/>

        <map name="tmap">
          <area id="1" alt="station name goes here" onTouchEnd={this.clickThis} onClick={this.clickThis} className="yellow" shape="circle" coords="500,500,500" href=""/>
        </map>

      </div>
    )
  }
}

export default App
