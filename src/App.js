import React, {Component} from 'react'
import './App.css'

class App extends Component {

  clickThis(e) {

    //TODO=" retain scroll position on reload"
    //e.preventDefault()
    console.log(e.target.id)
    e.target.style.fill = "red"
    document.e.target.id.focus()

  }

  loadData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(response, e) {

      console.log(response)

      if (xhttp.readyState === 4 && xhttp.status === 200) {
        console.log(xhttp.responseText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  getInfo(url) {
    console.log('wat')
    return fetch(url).then((response) => response.json()).then((responseJson) => {

console.log(url)
console.log(responseJson)



      return responseJson.movies;
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {

    this.getInfo('http://reisapi.ruter.no/Line/GetLinesRuterExtended?ruterOperatedOnly=true')

    return (
      <div onClick={this.test} className="App"></div>
    )
  }
}

export default App
