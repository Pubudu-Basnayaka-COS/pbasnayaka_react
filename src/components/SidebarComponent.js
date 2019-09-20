import React, { Component } from 'react';
import '../styles/_main.scss';
import AvatarComponent from './AvatarComponent';
import NavComponent from './NavComponent';


export default class SidebarComponent extends Component {

    constructor () {
        super()

        this.state = {
            hover: false
        }

        this.updateHoverState = this.updateHoverState.bind(this)
    }


    updateHoverState (hover) {
        console.log('setting');
        this.setState({ hover: hover })
    }

    render() {
        return (
            <div id="sidebar-container">
                <div id="sidebar">
                    <div className="sidebar-top">
                        <AvatarComponent hover={this.state.hover} />
                    </div>
                    <div className="sidebar-bottom">
                        <NavComponent updateHoverState={this.updateHoverState}/>

                    </div>
                </div>
            </div>
        )
    }
}
