import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title,discription,urlForBtn,urlToImage,mode } = this.props;
        return (

            <div className="card " style={{width: "20rem"}}>
            <img  className="card-img-top" src={urlToImage?urlToImage:"https://cdn.punchng.com/wp-content/uploads/2022/11/16195754/abuja-area.jpg"} alt="..." style={{height:"200px"}} />
            <div className="card-body" style={{color:mode==="light"?"black":"white",backgroundColor:mode==="light"?"white":"rgb(41 20 80)"}}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{discription}</p>
              <a href={urlForBtn}  className={`btn btn-outline-${mode==="light"?"dark":"light"}`}>Read More</a>
            </div>
          </div>
        
          )
    }
}
