/**
 * Created by admin on 6/28/17.
 */
import React, {Component} from 'react';
import $ from 'jquery';

class Loading extends Component{


    move() {
        let elem = document.getElementById("myBar");
        setTimeout(function () {
            let width = 1;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    $('.loading').addClass('offloading');
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }
        },250);
    }

    componentDidMount(){
        this.move();
    }

    render(){
        return(
            <div className="container loadingPage">
                <div className="loading">
                    <h2 className="title">
                        <div id="myProgress">
                            <div id="myBar"></div>
                        </div>
                    </h2>
                    <div className="subtitle">Thinking !</div>
                </div>
            </div>
        );
    }
}

export default Loading;