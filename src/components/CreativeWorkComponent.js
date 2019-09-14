import React, {Component} from 'react';
import '../styles/_navcomponent.scss';
import axios from 'axios';


export default class CreativeWorkComponent extends Component {
    componentDidMount() {
        axios.get(`https://pbasnayaka.com/jsonapi/node/creative_work`)
            .then(res => {
                const data = res.data;
                console.log(data)
               // this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
                Creative Work Component stuff
            </div>
        )
    }
}
