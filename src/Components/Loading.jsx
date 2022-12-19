import Fountain from './Fountain.gif'
import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-item-center'><img src={Fountain} alt="loading"/></div>
    )
  }
}
