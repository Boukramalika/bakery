import React from 'react'
import './App.css'
import Onglet from "./components/Onglet.jsx"
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      activeTab: 'add',
      items: [],
    }
  }
  onClick = (e) => {
    this.setState({ selectedTab: e.target.name })
  }
  addItem =(name,price)=>{
    let item = {};
    item.name = name;
    item.price = price;
    this.setState.item.push(item);
    console.log(this.state.item);
  }
  render () {
    return (
      <div className="container">
        <Onglet 
        isSelected={this.state.activeTab === "add"} 
        onClick={()=> this.setState({activeTab:"add"})}>
          Add
        </Onglet>
        <Onglet 
        isSelected={this.state.activeTab === "list"} 
        onClick={()=> this.setState({activeTab:"list"})}>
          List
        </Onglet>
        <Onglet 
        isSelected={this.state.activeTab === "pay"} 
        onClick={()=> this.setState({activeTab:"pay"})}>
          Pay
        </Onglet>
        <br/>
        {this.state.activeTab === 'add' && <Add addItem={this.addItem}/>}
        {this.state.activeTab === 'list' && <List/>}
        {this.state.activeTab === 'pay' && <Pay/>}
      </div>
    )
  }
}
export default App
