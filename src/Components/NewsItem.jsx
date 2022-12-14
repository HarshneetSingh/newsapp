import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title,discription } = this.props;
        return (

            <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{discription}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        
          )
    }
}
