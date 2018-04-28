/**
 * Created by admin on 6/28/17.
 */

import React, { Component } from 'react';
import $ from 'jquery';

class Home extends Component {

    wobble(){
        let  characters = "Hi,I am Vipul,Software Engineer".split("");

        $.each(characters, function (i, el) {
            if (el === " "){
                $('.name').append(" ");
            }else{
                $('.name').append("<span class='rubber'>" + el + "</span>");
                if (el === ","){
                    $('.name').append("<br/>");
                }
            }
        });


    }

    componentDidMount(){
        this.wobble();
    }

    sendClick(){
        this.props.changeP();
    }

    render(){
        return(
            <div className="section home">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half">
                            <span className="code">&lt;H1&gt;</span><br/>
                            <span className="name"></span>
                            <span className="code">&lt;H1/&gt;</span>
                            <div className="home-description">
                                Full Stack / Front End / Back End / PHP / Java
                            </div>
                            <div className="">
                                <button className=" button animated shake" onClick={this.sendClick.bind(this)}>Contact Me</button>
                            </div>
                        </div>
                        <div className="V is-hidden-mobile">
                            <div className="sideV">V</div>
                            <div className="sideV other">V</div>
                        </div>
                    </div>
                </div>
                <span className="simple">Simple</span>
            </div>
        )
    }
}
export default Home;