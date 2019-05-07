import React, { Component } from 'react';

class AddNinjaForm extends Component{
  state = {
    name: null,
    email: null,
    age: null,
  }

  handleChange = (e) => {    
    this.setState({
      [e.target.id] : e.target.value,
    })
  }
  
  habdleSubmit = (e) => {
    e.preventDefault();    
    console.log(this.props);
    this.props.addNinja(this.state);
  }

  render(){
    return(
      <form onSubmit={this.habdleSubmit}>
        <div className="ninja-form">
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" onChange={this.handleChange}/>        

          <label htmlFor="email">Email: </label>
          <input id="email" type="text" onChange={this.handleChange} />

          <label htmlFor="age">Age: </label>
          <input id="age" type="number" onChange={this.handleChange} />

          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export default AddNinjaForm;