import React, { Component } from 'react';

export default class NavComponent extends Component {
  render() {
    return (
        <div className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Web</a>
            </li>
            <li>
              <a href="#">Creative</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

        </div>
    )
  }
}
