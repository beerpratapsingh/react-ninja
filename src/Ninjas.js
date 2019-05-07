import React, { Component } from 'react';

// class Ninjas extends Component {
  const Ninjas = ({ninjas, deleteNinja}) => {
  // render(){           
    // const { ninjas } = props;
    const ninjasList = ninjas.map((ninja)=>{
      if(ninja.age > 15){
        return (
          <div className="ninjas" key={ninja.id}>
            <p>Name : { ninja.name }</p>
            <p>Age : { ninja.age }</p>
            <p>Email : { ninja.email }</p>    
            <button onClick = { () => {deleteNinja(ninja.id)}}>X</button>
          </div>
        )
      }
    })    
    return (
      <div className="ninja-list">
        { ninjasList }
      </div>
    );
  // }
}

export default Ninjas;