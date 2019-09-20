import React from 'react';
import './styles/_main.scss';

//components
import NavComponent from './components/NavComponent';
import ContentComponent from './components/ContentComponent';
import SidebarComponent from './components/SidebarComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

    return (
        <Router>
            <div id="main-container" className="App">
                <div id="inner-container">
                    <SidebarComponent/>
                    <div id="sidebar-padding">

                    </div>
                    <div id="content-wrap">
                        <ContentComponent/>

                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
