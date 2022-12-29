import React from 'react'
import { NavLink } from 'react-router-dom'
 const Navbar= (props) => {
   const sources = ["", "business", "entertainment", "general", "health", "science", "sports", "technology"];

    return (
        <nav className={`navbar fixed-top navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand mb-0 h1 " aria-current="page" to="/">Project 2</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        {
                            sources.map((elem, index) => {
                                return elem !== "" ? <li key={index} className="nav-item"><NavLink className="nav-link " aria-current="page" to={`/${elem}`}>{elem.charAt(0).toUpperCase() + elem.slice(1)}</NavLink></li> : <li key={index} className="nav-item"><NavLink className="nav-link " aria-current="page" to={`/${elem}`}>Home</NavLink></li>
                            })
                        }
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggle} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;