import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes,Route } from 'react-router-dom';

export default class App extends Component {
sources=["","business","entertainment","general","health","science","sports","technology"];
  constructor(){
    super()
    
    this.state = {
      mode:"light"
    }
  }
  modeToggler=()=>{
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
      
      <Routes>
        {
          this.sources.map((elem,index)=>{
         return   <Route path={`/${elem}`} key={index} element={<News   mode={this.state.mode} pageSize={5} country={"in"} category={elem}/>}/>
          })
        }
      </Routes>
      </>
    )
  }
}


