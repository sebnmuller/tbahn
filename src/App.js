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

  render() {
    return (
      <div className="App">
      
      </div>
    )
  }
}

export default App
