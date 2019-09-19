import React, {Component} from 'react';
import '../styles/_creativecomponent.scss';
import axios from 'axios';
import CreativeCard from './CreativeCard';
import TransitionModal from './TransitionModal';




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

                this.setState({creativework: data});
            })
    }


    render() {

        function setHtml(work_item){
            console.log('work item');
            console.log(work_item);
            var html;
            //TODO better error checking to see if these are set?
            html = work_item.attributes.body != null ? work_item.attributes.body.processed : '';
            return {__html: html};
        }

        return (
            <div>
                {this.state.creativework.map((work_item, i) => (
                    <div className="creative-card" key={i}>
                        <div className="card-body">

                            <div className="img-part">
                                <CreativeCard imageUrl={work_item.relationships.field_creative_thumbnail.data[0].meta.imageDerivatives.links.style_web_work_thumbnail.href}
                                              altText={work_item.relationships.field_creative_thumbnail.data[0].meta.alt}/>

                                {/*<img*/}
                                {/*src={work_item.relationships.field_creative_thumbnail.data[0].meta.imageDerivatives.links.style_web_work_thumbnail.href}*/}
                                {/*alt={work_item.relationships.field_creative_thumbnail.data[0].meta.alt}/>*/}
                            </div>
                            <div className="desc-part">
                                <h3 className="card-title">{work_item.attributes.title}</h3>
                                <div className="card-body" dangerouslySetInnerHTML={setHtml(work_item)}></div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
