import React, {Component} from 'react';
import '../styles/_navcomponent.scss';
import axios from 'axios';


export default class CreativeWorkComponent extends Component {
    state = {
        creativework: []
    }
    componentDidMount() {
        axios.get(`https://pbasnayaka.com/jsonapi/node/creative_work?include=field_creative_thumbnail`)
            .then(res => {
                const data = res.data.data;
                const included = res.data.included;
                console.log(data)
                console.log(included)
                this.setState({ creativework : data });
            })
    }

    render() {
        return (
            <div>
                {this.state.creativework.map((work_item) => (
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{work_item.attributes.title}</h3>

                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
