import React, {Component} from 'react';
import '../styles/_navcomponent.scss';
import axios from 'axios';


export default class CreativeWorkComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            creativework: [],
        }

    }

    componentDidMount() {
        let me = this;
        axios.get(`https://pbasnayaka.com/jsonapi/node/creative_work?include=field_creative_thumbnail`)
            .then(res => {
                const data = res.data.data;

                //first generate thumbnail links

                this.setState({ creativework : data });
            })
    }

    render() {
        return (
            <div>
                {this.state.creativework.map((work_item, i) => (
                    <div className="card" key={i}>
                        <div className="card-body" >
                            <h3 className="card-title">{work_item.attributes.title}</h3>
                            <img src={work_item.relationships.field_creative_thumbnail.data[0].meta.imageDerivatives.links.style_web_work_thumbnail.href}
                                 alt={work_item.relationships.field_creative_thumbnail.data[0].meta.alt}/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
