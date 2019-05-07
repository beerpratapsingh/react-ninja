import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddNinjaForm from './AddNinjaForm';

class App extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      name: 'Harsh Singh',
//      email: 'test@test.com',
//      address: 'test address'
//    }
//  }  
 state = {
   ninjas : [
     {name: 'John', age: 30, email: 'john@test.com', id: 1},
     {name: 'Ryan', age: 27, email: 'ryan@test.com', id: 2},
     {name: 'Sam', age: 25, email: 'sam@test.com', id: 3},
   ]
 } 

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas : ninjas
    })
  }

  deleteNinja = (id) => {
    console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas : ninjas
    })
    
  }

  render() {     
    // setTimeout(() => {
    //   this.setState({
    //     name: 'New Name'
    //   });
    // }, 20000);
    return (
      <div className="App">
        <h1>Welcome to Ninja</h1>
        <p>Welcome :)</p>
        {/* <Ninjas name={this.state.name} email={this.state.email} address={this.state.address} />         */}
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} /> 
        <AddNinjaForm addNinja={this.addNinja}/>                    
      </div>
    );
  }
}

export default App;
