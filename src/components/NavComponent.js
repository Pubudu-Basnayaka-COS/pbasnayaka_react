import React, { Component } from 'react';
import '../styles/_navcomponent.scss';
import { Link } from 'react-router-dom'


export default class NavComponent extends Component {
  render() {
    return (
        <div className="nav">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
             <Link to='/web'>Web</Link>
            </li>
            <li>
              <Link to='/creative'>Creative</Link>
            </li>
            <li>
             <Link to='/inquire'>Inquire</Link>
            </li>
          </ul>

        </div>
    )
  }
}
