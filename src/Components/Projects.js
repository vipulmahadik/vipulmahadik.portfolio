/**
 * Created by admin on 6/28/17.
 */
import React, { Component } from 'react';
import {Url} from './FirebaseUrl';
import $ from 'jquery';
import 'jquery-modal/jquery.modal';
import 'jquery-modal/jquery.modal.css';


class Projects extends Component {

    constructor(){
        super();
        this.state = {
            proj:"",
            menu_tags:"",
            modal:"dncsdj",
            imgClass:"is-128x128"
        }
    }

    getimg(src){
        return src;
    }

    getProjects(){
        let _w = $(window).width();
        if (_w<=720){
            this.setState({
                imgClass:"is-64x64"
            })
        }
        $.get({
            url: Url,
            dataType: 'json',
            success: (res)=>{
                let result = [];
                let tags = new Set();
                for(let key in res){
                    for(let v in res[key].tags){
                        if(res[key].tags[v]==null)
                            continue;
                        tags.add(res[key].tags[v]);
                    }
                    result.push(this.getCard(key,res[key]))
                }
                let tagsUI = [];
                tags.forEach((tag)=>{
                    tagsUI.push(
                        <a className="tag is-light" key={tag} id={tag} onClick={this.classChange.bind(this,tag)}>{tag}</a>
                    )
                });
                this.setState({
                    proj: result,
                    menu_tags:tagsUI,
                    response:res
                })
            },
            error: (xhr, status, err)=>{
                console.log(err);
            }
        })
    }

    getDescription(key,str){
        let selector = "#"+key;
        if($(selector).length === 0){
            let thistags = str['tags'];
            let temp = "";
            let github =function () {

                if(str.github_link)
                    return `<a href=`+str.github_link+` target="_blank" class="button is-small">
                                    <span class="icon is-small">
                                      <i class="fa fa-github"/>
                                    </span>
                        <span>GitHub</span>
                    </a>`;
                return `<span></span>`
            };

            let hosted = function () {
                if (str.hosted_link)
                    return `<a href=`+str.hosted_link+` target="_blank" class="button is-small">
                                        <span class="icon is-small">
                                          <i class="fa fa-mail-forward"/>
                                        </span>
                        <span>Demo</span>
                    </a>`;
                    return `<span></span>`
            };

            thistags.map((tag)=>{
                if(tag == null)
                    return;
                temp+= (`<span class="tag is-light">`+tag+`</span>`);
                return "";
            });
            let card = `<div>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src=`+this.getimg.call(this,str.logo)+` alt="Image"/>
                        </figure>
                    </div>
                    <div class="card-content">

                        <div class="content">
                                <p class="title is-4">`+str.title+`</p>
                            `+str.description+`.
                            <br/>
                                <small>`+temp+`</small><br/>    <div class="is-pulled-right">`+hosted()+` `+github()+` </div>
                        </div>
                    </div>
                </div>
            </div>`;
            $(card).appendTo("body").modal();
        } else{
            $(selector).modal();
        }
    }

    getCard(key,obj){
        return (
            <div key={key} className="column is-6-desktop is-6-tablet is-12-mobile is-fullwidth">
                <div className="box animated fadeIn">
                    <article className="media">
                        <div className="media-left">
                            <figure className={"image "+this.state.imgClass}>
                                <div onClick={this.getDescription.bind(this,key,obj)} className="cover">
                                    <i className="fa fa-search" />
                                </div>
                                <img src={this.getimg.call(this,obj.logo)} alt="Project dp"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content overflow-hidden">
                                <p>
                                    <strong className="project-title">{obj.title}</strong>
                                    <br/>
                                    {obj.description.substring(0,60)+"..."}
                                </p>
                            </div>
                            <div className="block">
                                {obj.description?
                                    (<a onClick={this.getDescription.bind(this,key,obj)} target="_blank" className="button is-small">
                                    <span className="icon is-small">
                                      <i className="fa fa-info"/>
                                    </span>
                                        <span>Info</span>
                                    </a>):
                                    (<span></span>)}
                                {obj.github_link?
                                    (<a href={obj.github_link} target="_blank" className="button is-small">
                                    <span className="icon is-small">
                                      <i className="fa fa-github"/>
                                    </span>
                                        <span>GitHub</span>
                                    </a>):
                                    (<span></span>)}
                                {obj.hosted_link?
                                    (<a href={obj.hosted_link} target="_blank" className="button is-small">
                                    <span className="icon is-small">
                                      <i className="fa fa-mail-forward"/>
                                    </span>
                                        <span>Demo</span>
                                    </a>):
                                    (<span></span>)}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }

    manipulateproject(tag){
        let res = this.state.response;
        let result = [];
        for(let key in res){
            if(tag === 'all'){
                result.push(this.getCard(key,res[key]));
            }
            else if(res[key]['tags'].indexOf(tag)>-1){
                result.push(this.getCard(key,res[key]));
            }
        }
        this.setState({
            proj: result
        })
    }

    classChange(tag){
        $('.projects .is-dark').removeClass('is-dark');
        $('#'+tag).removeClass('is-light').addClass('is-dark');
        this.setState({proj:""},this.manipulateproject.bind(this,tag));
    }

    componentWillMount(){
        this.getProjects();
    }

    render(){
        return(
            <div className="projects">
                <div className="title">Projects</div>
                <div className="columns">
                    <div className="column is-12">
                        <a className="tag is-dark" id="all" onClick={this.classChange.bind(this,'all')}>All</a>
                        {this.state.menu_tags}
                    </div>
                </div>
                <div className="columns is-multiline is-mobile">
                        {this.state.proj}
                </div>
            </div>
        );
    }
}

export default Projects