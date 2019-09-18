import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Web from '../pages/Web';
import Creative from '../pages/Creative';
import Inquire from '../pages/Inquire';

export default class ContentComponent extends Component {



    render() {
        return (
            <div className="content-inner">
                <Route exact path="/" component={Home} />
                <Route path="/web" component={Web} />
                <Route path="/creative" component={Creative} />
                <Route path="/inquire" component={Inquire} />
            </div>
        )
    }
}
