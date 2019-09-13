import React, { Component } from 'react';
import '../styles/_avatarcomponent.scss';
import Avatar from "../images/avatar1.jpg";

export default class AvatarComponent extends Component {
  render() {
    var avatarStyle = {
      backgroundImage: 'url(' + Avatar + ')',
    };
    return (
        <div id="avatar-container">
          <div className="avatar" style={avatarStyle} >

          </div>

        </div>
    )
  }
}

