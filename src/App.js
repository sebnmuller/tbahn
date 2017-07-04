import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import map from './imgs/Oslo_T-bane_linjekart.svg.png'

class App extends Component {

  clickThis(e) {

    //e.preventDefault()
    console.log(e.target.id)
    e.target.style.fill="red"

  }

  render() {
    return (
      <div className="App">

        <img src={map} useMap="#tmap" alt="Oslo T-Bane Linjekart"/>

        <map name="tmap">
          <area id="frognerseteren" alt="Frognerseteren" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="272.5,104.5,10" href=""/>
          <area id="voksenkollen" alt="Voksenkollen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="272.5,146.5,10" href=""/>
          <area id="lillevann" alt="Lillevann" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="272.5,188.5,10" href=""/>
          <area id="skogen" alt="Skogen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="272.5,230.5,10" href=""/>
          <area id="voksenlia" alt="Voksenlia" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="272.5,272.5,10" href=""/>
          <area id="holmekollen" alt="Holmekollen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="272.5,314.5,10" href=""/>
          <area id="besserud" alt="besserud" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="272.5,356.5,10" href=""/>
          <area id="midstuen" alt="Midstuen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="272.5,398.5,10" href=""/>
          <area id="skaadalen" alt="Skådalen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="303.5,429.5,10" href=""/>
          <area id="vettakollen" alt="Vettakollen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="335.5,461.5,10" href=""/>

        </map>

      </div>
    )
  }
}

export default App
