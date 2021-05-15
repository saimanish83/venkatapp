import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person.js';
import Manish  from "./Person/Button.js";
import Number from "./Person/Spread.js";
import Container from "./Person/container.js";
import Slider from './Person/conditions.js';
import ReactDOM from 'react-dom';

  const Car = (props) => {
    const [personsState , setPersonsState] = useState({
      nameofcontainer : [ 
        {name:"manish"},
        {name:"vardhan"},
        {name:"cruse"}
    
      ]
    });
    console.log(personsState);
    const switchHandler = () => {
      
      setPersonsState( {
        nameofcontainer : [ 
          {name:"manish sagar"},
          {name:"vardhan"},
          {name:"cruse vavilala"}
      
        ]
      } );
     }
    return (
      <div className = 'App'>
        {/* this is header */}
        <Person  />
        {/* this is header */}
      <button onClick = {switchHandler} style= {{  backgroundColor: "lightblue", border: "none",color: "white",padding: "15px 32px",textAlign: "center",textDecoration: "none",display: "inline-block",fontSize: "16px",margin:"10px 20px  0px 40px "}}>switch containers</button>
      {/* <button onClick = {this.state.nameofcontainers}>unswitchcontainers</button> */}
        {/* this is block */}     
      <Container name= {personsState.nameofcontainer[0].name} >this is slider part</Container>
      <Container name= {personsState.nameofcontainer[1].name}>this is slider part</Container>
      <Container name = {personsState.nameofcontainer[2].name}>this is slider part</Container>
        {/* this is block */}


        {/* this is footer */} 
      <Manish />
        {/* this is footer */}
      </div>
    );
  
}

export default Car;


 
 