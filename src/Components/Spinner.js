import React, { Component } from 'react'
import spineer from './loader.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-5">
        <img src={spineer} alt="loading" />
      </div>
    )
  }
}
