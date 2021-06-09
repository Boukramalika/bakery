import React from 'react'
import Add from "./components/Add.jsx"
import Liste from "./components/Liste.jsx"
import Pay from "./components/Pay.jsx"
import Onglet from "./components/Onglet"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTab: "add",
      items: []
    }

  }
  buttonClick = (e) => {
    console.log(e.target.name)
  }

  render() {
    return (
      <div className="App">

        <Onglet
          isSelected={this.state.activeTab === 'Add'}
          onClick={() => this.setState({ activeTab: 'Add' })} >
          Add
          </Onglet>

        <Onglet
          isSelected={this.state.activeTab === 'Liste'}
          onClick={() => this.setState({ activeTab: 'Liste' })} >
          Liste
          </Onglet>

        <Onglet
          isSelected={this.state.activeTab === 'Pay'}
          onClick={() => this.setState({ activeTab: 'Pay' })} >
          Pay
          </Onglet>

        {this.state.activeTab === 'Add' && <Add />}

      </div>
    )
  }
}

export default App;
