import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import map from './imgs/Oslo_T-bane_linjekart.svg.png'

class App extends Component {

  clickThis(e) {

    //TODO: retain scroll position on reload
    //e.preventDefault()
    console.log(e.target.id)
    e.target.style.fill = "red"
    document.e.target.id.focus();

  }

  render() {
    return (
      <div className="App">

        <img src={map} useMap="#tmap" alt="Oslo T-Bane Linjekart"/>

        <map name="tmap">

          // TODO: populate from another file or component // L1
          // CENTRE x,y and radius
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
          // TODO: use poly instead of circle for this one, it's a triangle
          <area id="gulleraasen" alt="Gulleråsen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="364.5,490.5,10" href=""/>
          <area id="graakammen" alt="Gråkammen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="397.5,524.5,10" href=""/>
          <area id="slemdal" alt="Slemdal" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="429.5,555.5,10" href=""/>
          <area id="ris" alt="Ris" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="460.5,587.5,10" href=""/>
          <area id="gaustad" alt="Gaustad" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="492.5,618.5,10" href=""/>
          <area id="vinderen" alt="Vinderen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="523.5,649.5,10" href=""/>
          <area id="steinerud" alt="Steinerud" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="554.5,681.5,10" href=""/>
          <area id="froeen" alt="Frøen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="circle" shape="circle" coords="586.5,712.5,10" href=""/>

          // TOP LEFT x,y - BOTTOM RIGHT x,y
          <area id="ellingsrudaasen" alt="Ellingsrudåsen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1621, 491, 1666, 515" href=""/>
          <area id="furuset" alt="Furuset" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1621, 543, 1666, 567" href=""/>
          <area id="lindeberg" alt="Lindeberg" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1621, 595, 1666, 619" href=""/>
          <area id="trosterud" alt="Trosterud" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1621, 647, 1666, 671" href=""/>
          <area id="haugerud" alt="Haugerud" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1621, 701, 1666, 723" href=""/>
          <area id="tveita" alt="Tveita" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1621, 753, 1666, 775" href=""/>

        </map>

      </div>
    )
  }
}

export default App
