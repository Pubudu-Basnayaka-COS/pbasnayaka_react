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
        let localstorage_creative = localStorage.getItem('creativework');

        if(localstorage_creative == null) {

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
                         if(i == this.state.creativework.length-1) {
                             console.log(i)

                             this.setState({ loading: false });
                         }
                     });
                    localStorage.setItem('creativework', JSON.stringify(data));

                })
        } else{

            this.setState({creativework: JSON.parse(localStorage.getItem('creativework'))});
        }
    }


    render() {
        // if(loading) { // if your component doesn't have to wait for an async action, remove this block
        //     return (<div>LOADING SCREEN</div>); // render null when app is not ready
        // }

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
                            <LazyLoad height={200} offset={300}>

                                <div className="img-part">

                                    <CreativeCard thumbnailUrl={work_item.relationships.field_creative_thumbnail.data[0].meta.imageDerivatives.links.style_web_work_thumbnail.href}
                                                  imageUrl={work_item.relationships.field_creative_picture.data[0].meta.imageDerivatives.links.largecreative.href}
                                                  preloadImageUrl={work_item.relationships.field_creative_picture.data[0].meta.imageDerivatives.links.preload.href}
                                                  altText={work_item.relationships.field_creative_thumbnail.data[0].meta.alt}/>

                                    {/*<img*/}
                                    {/*src={work_item.relationships.field_creative_thumbnail.data[0].meta.imageDerivatives.links.style_web_work_thumbnail.href}*/}
                                    {/*alt={work_item.relationships.field_creative_thumbnail.data[0].meta.alt}/>*/}
                                </div>   </LazyLoad>
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
