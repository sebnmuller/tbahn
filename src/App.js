import React, {Component} from 'react'
import './App.css'

class App extends Component {

  contructor(props) {

    this.state = {
      stateStops: []
    }
  }

  componentDidMount() {
    var self = this
    var stops = this.getInfo('http://reisapi.ruter.no/Line/GetLinesRuterExtended?ruterOperatedOnly=true')

    self.setState({stateStops: stops})


  }

  getInfo(url) {

    return fetch(url).then((response) => response.json()).then((responseJson) => {
      return responseJson.filter(function(line) {
        return line.Transportation === 8
      }).map((tbahnLine) => {
        return tbahnLine.Stops;
      })
    })
  }

  render() {

    var stops = this.getInfo('http://reisapi.ruter.no/Line/GetLinesRuterExtended?ruterOperatedOnly=true')

    return (

      <div></div>
    )
  }
}

export default App
