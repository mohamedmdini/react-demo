import React,{Component, useState} from "react";
import './App.css';
import chris from './components/image/chris.jpg';
import Counter from "./components/Counter";
import { render } from "@testing-library/react";

class App extends Component{
  constructor(){
    super();
    this.state={
      data: "chiris bumstead is a Bodybuilder he lives in canada with his own family he is sponsored by three companies tha s why he has won 4 competitions in roll he is 27 years old he was born in 2 february 1995 he is a classic physique divsion and now he is on the move to 212 division"
      
    }
    
  }
  updateData(){
    this.setState({data:"correcte this is chris's profile"})
    alert('no its not chriss profile click ok to head it into the profil ')
  
  }
  render(){
    return(
      <div className="App">
        <img src={chris} alt="chris bumstead" /> 

        <h1>{this.state.data}</h1>
        <button onClick={()=>this.updateData()}> The StatE of the ProfilE </button>
        
      </div>
    
      )
    
  }
  

  
  
  
  
}












export default App ;


  
  
  
  
  
  
  