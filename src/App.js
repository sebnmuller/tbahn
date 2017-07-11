import React, {Component} from 'react'
import './App.css'

class App extends Component {

  getData(url) {

    return fetch(url).then(response => response.json()).then(responseJson =>
       responseJson.filter(({Transportation}) => Transportation === 8)
        .map(({Stops}) => Stops)
    )
  }

  render() {

    var lines = this.getData('http://reisapi.ruter.no/Line/GetLinesRuterExtended?ruterOperatedOnly=true')

    var test = lines.then(function(result) {
      result.map(line => {
        return line.map(({Name}) => {
          console.log(Name.replace('[T-bane]', '').trim())
        })
      })
    })

    return (

      <div></div>
    )
  }
}

export default App
