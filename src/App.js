import React from 'react';
import './styles/_main.scss';

//components
import NavComponent from './components/NavComponent';
import ContentComponent from './components/ContentComponent';
import AvatarComponent from './components/AvatarComponent';

function App() {
    return (
        <div id="main-container" className="App">
            <div id="inner-container">
                <div id="sidebar">
                    <AvatarComponent/>
                    <NavComponent/>
                </div>
                <div id="content-wrap">
                    <ContentComponent/>

                </div>
            </div>
        </div>
    );
}

export default App;
