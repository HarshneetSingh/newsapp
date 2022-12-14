import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class news extends Component {
    render() {
        return (

            <div className="container my-4">
                <h1>Top news - by missispieee</h1>
                <div className=''></div>
                <div className='row'>
                    <div className="col-md-4">
                        <NewsItem title="card1" discription="WASSUP" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="card1" discription="WASSUP" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="card1" discription="WASSUP" />
                    </div>
                </div>
            </div>
        )
    }
}
