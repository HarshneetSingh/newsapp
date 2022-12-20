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
      
      <Routes>
        {
          this.sources.map((elem)=>{
         return   <Route path={`/${elem}`} element={<News  key={elem} mode={this.state.mode} pageSize={5} country={"in"} category={elem}/>}/>
          })
        }
        {/* <Route exact path='/home' element={<News  key={""} mode={this.state.mode} pageSize={5} country={"in"} category={""}/>}/>
        <Route exact path='/business' element={<News key={""} mode={this.state.mode} pageSize={5} country={"in"} category={"business"}/>}/>
        <Route exact path='/entertainment' element={<News key={""} mode={this.state.mode} pageSize={5} country={"in"} category={"entertainment"}/>}/>
        <Route exact path='/general' element={<News key={""} mode={this.state.mode} pageSize={5} country={"in"} category={"general"}/>}/>
        <Route exact path='/health' element={<News key={""} mode={this.state.mode} pageSize={5} country={"in"} category={"health"}/>}/>
        <Route exact path='/science' element={<News key={""} mode={this.state.mode} pageSize={5} country={"in"} category={"science"}/>}/>
        <Route exact path='/sports' element={<News key={""} mode={this.state.mode} pageSize={5} country={"in"} category={"sports"}/>}/>
        <Route exact path='/technology' element={<News key={""} mode={this.state.mode} pageSize={5} country={"in"} category={"technology"}/>}/> */}
      </Routes>
      </>
    )
  }
}


