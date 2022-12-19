import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  constructor(){
    super()
    
    this.state = {
      mode:"light"
    }
  }
  modeToggler=()=>{
    console.log(this.state.mode)
    if(this.state.mode==='light'){
    document.body.style.backgroundColor="#150b28";
    this.setState({mode:"dark"});
    }else{
    document.body.style.backgroundColor="white";
    this.setState({mode:"light"});

    }
  }
  render() {
    return (
      <>
      <Navbar mode={this.state.mode} toggle={this.modeToggler}/>
      <News mode={this.state.mode} pageSize={5} country={"in"} category={"health"}/>
      </>
    )
  }
}


