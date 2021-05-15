import React from 'react';
import './Css/App.css';
import Person from './Person/Person.js';
import Manish  from "./Person/Button.js";
import Number from "./Person/Spread.js";
import Container from "./Person/container.js";
import Slider from './Person/conditions.js';
import ReactDOM from 'react-dom';
class Car extends React.Component {
 state = {
  nameofcontainer : [ 
    {id : "fdljdsn11",name:"Venkat"},
    {id : "xjdsj44",name:"vardhan"},
    {id : "vdv32",name:"cruse"}

  ],
  showState: false
 }
//  switchHandler = (newName) => {
//   // console.log('was clicked'); 
//   this.setState( {
//     nameofcontainer : [ 
//       {name: newName },
//       {name:"vardhan"},
//       {name:"cruse vavilala"}

  
//     ]
//   } )
//  }
deleteHandler = (index) => {
  //const nameofcontainer = this.state.nameofcontainer.slice();
 const nameofcontainer= [...this.state.nameofcontainer]
  nameofcontainer.splice(index ,1);
  this.setState({nameofcontainer : nameofcontainer});
}
 nameChangeHandler1 = (event,id) => {
    const nameofcontIndex = this.state.nameofcon.find(nameof => {
      return nameof.id === id;
    });
    const nameof = this.state.
  this.setState( {  
    nameofcontainer : [ 
      {name:event.target.value},
      {name: "cruse"},
      {name:"sai"}
  
    ]
  } )
 }

 toggleHandler= () => {
    const show = this.setState.showState;
    this.setState({showState : !show});
    this.myFunction();
  //   confirm("Press a button!");fi
  // myFunction(); 
 }

 myFunction() {
  var person = prompt("Please enter your name");
  if(person = undefined) {
    console.log("hi manish");
  }
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + " your Components are";
  }
}
  render() {
    const style = {
      backgroundColor : "green",
      color: "white",
      font : "inherit",
    
      padding : "8px",
      cursor : "pointer",
      marginLeft: "650px",
      marginTop: "25px",
    };
    const id_style = {
        textAlign: "center"
    };
    let slider = null;
    if(this.state.showState ) {
      slider = (
        <div>
        {this.state.nameofcontainer.map((nameofcon,index)=> {
          return <Container name = {nameofcon.name} click = {() => this.deleteHandler(index)} key = {nameofcon.id}
          changed = {()=>this.nameChangeHandler1(nameofcon)}>
            Hi slider </Container>  
        }
          )}
        
        </div> 
      );
      style.backgroundColor='red';   
    } 
    const classes = [];
    
    if(this.state.nameofcontainer.length<=2){
      classes.push('red');
    }
    if(this.state.nameofcontainer.length<=1){
      classes.push('blod');
    }
    var firstColStyle = { textAlign: 'center' }
    return (
      <div className = 'App'>
        {/* this is header */}
        <Person/>
        <p  className = {classes.join(' ')} style={firstColStyle}>this is react app</p>
        {/* this is header */}
        <p id = "demo" style = {id_style}></p> 
      <button style={style} onClick = {this.toggleHandler }>toggle  containers</button>
          {slider}
            <Manish> </Manish>
      </div>
    );
  }
}

export default Car;

