import React, { Component } from 'react';
import '../styles/_avatarcomponent.scss';
import Avatar from "../images/avatar3.jpg";
import AvatarSvg from "./AvatarSvg";

export default class AvatarComponent extends Component {
    render() {
        var avatarStyle = {
            backgroundImage: 'url(' + Avatar + ')',
        };
        return (

            <div id="avatar-container">
                <div className="svg-container">
                    {/*<AvatarSvg avatarStyle={avatarStyle}/>*/}
                </div>
                <div className={
                     'shape'
                } >
                    <div className="avatar" style={avatarStyle} >
                    </div>
                </div>


            </div>
        )
    }
}

