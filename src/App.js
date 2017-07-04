import React, {Component} from 'react'
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

          <area id="hellerud" alt="Hellerud" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1548, 795, 1572, 861" href=""/>

          <area id="brynseng" alt="Brynseng" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1475, 795, 1499, 882" href=""/>
          <area id="brynseng" alt="Brynseng" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1401, 795, 1426, 882" href=""/>
          <area id="ensjoe" alt="Ensjø" onTouchEnd={this.clickThis} onClick={this.clickThis} className="rect" shape="rect" coords="1328, 795, 1353, 882" href=""/>

          <area id="toeyen" alt="Tøyen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="poly" shape="poly" coords="1244, 954, 1239, 954, 1146, 861, 1146, 855, 1158, 843, 1163, 843, 1257, 937, 1257, 941" href=""/>
          <area id="groennland" alt="Grønnland" onTouchEnd={this.clickThis} onClick={this.clickThis} className="poly" shape="poly" coords="1186, 1013, 1184, 1013, 1089, 919, 1089, 914, 1102, 901, 1106, 901, 1200, 995, 1200, 1000" href=""/>
          <area id="jernbanetorget" alt="Jernbanetorget" onTouchEnd={this.clickThis} onClick={this.clickThis} className="poly" shape="poly" coords="1038, 1071, 1035, 1068, 1035, 945, 1038, 942, 1056, 942, 1059, 945, 1059, 1068, 1056, 1071" href=""/>
          <area id="stortinget" alt="Stortinget" onTouchEnd={this.clickThis} onClick={this.clickThis} className="poly" shape="poly" coords="973, 1071, 976, 1066, 976, 947, 973, 942, 954, 942, 951, 945, 951, 1068, 954, 1071" href=""/>
          <area id="nationaltheatret" alt="Nationaltheatret" onTouchEnd={this.clickThis} onClick={this.clickThis} className="poly" shape="poly" coords="870, 1071, 867, 1067, 867, 946, 870, 942, 889, 942, 892, 945, 892, 1068, 889, 1071" href=""/>
          <area id="majorstuen" alt="Majorstuen" onTouchEnd={this.clickThis} onClick={this.clickThis} className="poly" shape="poly" coords="695, 968, 695, 964, 789, 870, 794, 870, 807, 884, 807, 886, 713, 981, 708, 981" href=""/>

        </map>

      </div>
    )
  }
}

export default App
