import React from 'react'

const NewsItem = (props) => {

  let { title, discription, urlForBtn, urlToImage, mode, publishedAt, author, source } = props;
  return (

    <div className="card ">
      <div style={{ position: 'absolute', right: "0" }}>
        <span className="  badge rounded-pill bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>

      <img className="card-img-top" src={urlToImage ? urlToImage : "https://cdn.punchng.com/wp-content/uploads/2022/11/16195754/abuja-area.jpg"} alt="..." style={{ height: "200px" }} />
      <div className="card-body" style={{ color: mode === "light" ? "black" : "white", backgroundColor: mode === "light" ? "white" : "rgb(41 20 80)" }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{discription}</p>
        <a href={urlForBtn} className={`btn btn-outline-${mode === "light" ? "dark" : "light"}`}>Read More</a>
        <p className='card-text'><small className='text-muted'>{`by ${author ? author : "unknown"} on ${new Date(publishedAt).toGMTString()}`}</small></p>
      </div>
    </div>

  )
}

export default NewsItem 