import React, {Component} from 'react'
import './App.css'

class App extends Component {

  getData(url) {

    return fetch(url).then((response) => response.json()).then((responseJson) => {
      return responseJson.filter(function(line) {
        return line.Transportation === 8
      }).map((tbahnLine) => {
        return tbahnLine.Stops;
      })
    })
  }

  render() {

    var lines = this.getData('http://reisapi.ruter.no/Line/GetLinesRuterExtended?ruterOperatedOnly=true')

    var test = lines.then(function(result) {
      result.map((line) => {
        return line.map((stop) => {
          console.log(stop.Name.replace('[T-bane]', '').trim())
        })
      })
    })

    return (

      <div></div>
    )
  }
}

export default App
