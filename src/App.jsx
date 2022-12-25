import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  sources = ["", "business", "entertainment", "general", "health", "science", "sports", "technology"];
  apiKey=process.env.REACT_APP_NEWS_APP;
  constructor() {
    super()

    this.state = {
      mode: "light",
      progress: 10
    }
  }
  modeToggler = () => {
    console.log(this.state.mode)
    if (this.state.mode === 'light') {
      document.body.style.backgroundColor = "#150b28";
      this.setState({ mode: "dark" });
    } else {
      document.body.style.backgroundColor = "white";
      this.setState({ mode: "light" });

    }
  }

  setProgress = (prog) => {
    this.setState({ progress: prog })
  }
  render() {
    return (
      <>
        <Navbar mode={this.state.mode} toggle={this.modeToggler} />
        <LoadingBar color={this.state.mode==="light"?"black":"white"} progress={this.state.progress}/>
        <Routes>
          {
            this.sources.map((elem) => {
              return <Route
                path={`/${elem}`} key={elem}
                element={<News apiKey={this.apiKey} progress={this.setProgress} mode={this.state.mode} key={elem} pageSize={6} country={"in"} category={elem} />} />
            })
          }
        </Routes>
      </>
    )
  }
}


