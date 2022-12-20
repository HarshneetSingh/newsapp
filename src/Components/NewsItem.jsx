import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, discription, urlForBtn, urlToImage, mode, publishedAt, author,source } = this.props;
    return (

      <div className="card " style={{ width: "20rem" }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img className="card-img-top" src={urlToImage ? urlToImage : "https://cdn.punchng.com/wp-content/uploads/2022/11/16195754/abuja-area.jpg"} alt="..." style={{ height: "200px" }} />
        <div className="card-body" style={{ color: mode === "light" ? "black" : "white", backgroundColor: mode === "light" ? "white" : "rgb(41 20 80)" }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a href={urlForBtn} className={`btn btn-outline-${mode === "light" ? "dark" : "light"}`}>Read More</a>
          <p className='card-text'><small className='text-muted'>{`by ${author?author:"unknown"} on ${new Date(publishedAt).toGMTString()}`}</small></p>
        </div>
      </div>

    )
  }
}
