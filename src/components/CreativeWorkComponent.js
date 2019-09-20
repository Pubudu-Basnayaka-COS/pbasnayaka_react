import React, {Component} from 'react';
import '../styles/_creativecomponent.scss';
import axios from 'axios';
import CreativeCard from './CreativeCard';
import LazyLoad from 'react-lazyload';




export default class CreativeWorkComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            creativework: [],
        }

    }

    componentDidMount() {
        let me = this;
        axios.get(`https://pbasnayaka.com/jsonapi/node/creative_work`)
            .then(res => {
                const data = res.data.data;

                //first generate thumbnail links
                console.log(data)
                this.setState({creativework: data});

                //preload fullsize image using the preload style(smaller version)
                this.state.creativework.map((work_item, i) => {
                    console.log(work_item)
                    const img = new Image();
                    img.src = work_item.relationships.field_creative_picture.data[0].meta.imageDerivatives.links.preload.href;
                });



            })
    }


    render() {

        function setHtml(work_item){
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
                                <LazyLoad height={200} offset={100}>

                                    <CreativeCard thumbnailUrl={work_item.relationships.field_creative_thumbnail.data[0].meta.imageDerivatives.links.style_web_work_thumbnail.href}
                                                  imageUrl={work_item.relationships.field_creative_picture.data[0].meta.imageDerivatives.links.largecreative.href}
                                                  preloadImageUrl={work_item.relationships.field_creative_picture.data[0].meta.imageDerivatives.links.preload.href}
                                                  altText={work_item.relationships.field_creative_thumbnail.data[0].meta.alt}/>
                                </LazyLoad>
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
