import './App.css';

import React ,{useState}from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
const App=() => {
  const sources = ["", "business", "entertainment", "general", "health", "science", "sports", "technology"];
  const apiKey=process.env.REACT_APP_NEWS_APP;
    const [mode, setMode] = useState("light")
    const [progress, setProgress] = useState(10)


  const modeToggler = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = "#150b28";
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");

    }
  }

  const setProg = (prog) => {
    setProgress(prog)
  }
    return (
      <>
        <Navbar mode={mode} toggle={modeToggler} />
        <LoadingBar color={mode==="light"?"black":"white"} progress={progress}/>
        <Routes>
          {
            sources.map((elem) => {
              return <Route
                path={`/${elem}`} key={elem}
                element={<News apiKey={apiKey} progress={setProg} mode={mode} key={elem} pageSize={6} country={"in"} category={elem} />} />
            })
          }
        </Routes>
      </>
    )
}


export default App