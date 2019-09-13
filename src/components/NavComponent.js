import React, { Component } from 'react';
import '../styles/_navcomponent.scss';

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
              <a href="#">Inquire</a>
            </li>
          </ul>

        </div>
    )
  }
}
