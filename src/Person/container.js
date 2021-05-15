import React from 'react';
import './Person.css';
const container = (props) => {

    return (
        <div className = "Person" style={{height:"200px",width:"100%"}}> 
            <h1>block  </h1>
    <p onClick ={props.click}>my name is {props.name}</p>
    <p>{props.children}</p>
   
         </div>
        
    );
};
export default container;