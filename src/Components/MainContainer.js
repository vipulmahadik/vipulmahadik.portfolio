/**
 * Created by admin on 6/28/17.
 */
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Loading from './Loading';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Particles from 'react-particles-js';
import config from './particlesjs-config';

import $ from 'jquery';

class MainContainer extends Component {

    constructor(){
        super();
        this.state = {
            page: <Home/>,
            pageValue: 'home'
        }
    }

    changePage(str,tar){
        console.log(str);
        if (this.state.pageValue !== str){
            let config = {};
            switch (str){
                case 'home':
                    config = {
                        page: <Home key={str} changeP={this.changePage.bind(this,'contact')}/>,
                        pageValue: 'home'
                    };break;
                case 'about':
                    config = {
                        page: <About key={str}/>,
                        pageValue: 'about'
                    }; break;
                case 'skills':
                    config = {
                        page: <Skills key={str}/>,
                        pageValue: 'skills'
                    };break;
                case 'projects':
                    config = {
                        page: <Projects key={str}/>,
                        pageValue: 'projects'
                    };break;
                case 'contact':
                    config = {
                        page: <Contact key={str}/>,
                        pageValue: 'contact'
                    }; break;
                default:
            }
            $('.is-active').removeClass('is-active');
            $('#'+str).addClass('is-active');

            this.setState({
                page: <Loading/>,
                pageValue: 'loading'
            }, function(){
                let c = config;
                console.log(c);
                setTimeout(function () {
                    this.setState(c);
                }.bind(this,c),1500);
            }.bind(this,config));

        }
    }


    componentDidMount(){
        $('#home').addClass('is-active');
    }

    render(){
        return (
            <div className="columns is-mobile is-gapless sidebar">
                <div className="column is-1">
                    <aside className="menu">
                        <ul className="menu-list">
                            <li><a href="javascript:void(0)" id="home" className="item" onClick={this.changePage.bind(this,'home')}><i className="fa fa-home" id="a"/><span className="item_text item_text_right" id="b">Home</span></a></li>
                            <li><a href="javascript:void(0)" id="about" className="item" onClick={this.changePage.bind(this,'about')}><i className="fa fa-user-secret" id="a"/><span className="item_text item_text_right" id="b">About</span></a></li>
                            <li><a href="javascript:void(0)" id="skills" className="item" onClick={this.changePage.bind(this,'skills')}><i className="fa fa-code" id="a"/><span className="item_text item_text_right" id="b">Skills</span></a></li>
                            <li><a href="javascript:void(0)" id="projects" className="item" onClick={this.changePage.bind(this,'projects')}><i className="fa fa-picture-o" id="a"/><span className="item_text item_text_right" id="b">Projects</span></a></li>
                            <li><a href="javascript:void(0)" id="contact" className="item" onClick={this.changePage.bind(this,'contact')}><i className="fa fa-envelope" id="a"/><span className="item_text item_text_right" id="b">Contact</span></a></li>
                        </ul>
                    </aside>
                </div>
                <div className="column is-11">
                    {this.state.pageValue==='home'?
                        (<a href="https://github.com/vipulmahadik" target="_blank">
                            <img className="github" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" /></a>)
                        :(<span></span>)}

                    <div className={this.state.pageValue == 'home' ? "content  overflow-hidden" : "content" }>
                        <span className="code">&lt;html&gt;</span><br/>
                        <span className="code">&lt;body&gt;</span><br/>
                            {this.state.page}
                        <span className="code">&lt;body/&gt;</span><br/>
                        <span className="code">&lt;html/&gt;</span><br/>
                    </div>
                    <Particles width="90vw" height="90vh" params={config} />
                </div>
                <span className="my-logo">&lt;Vipul/&gt;</span>
            </div>
        );
    }
}

export default MainContainer;