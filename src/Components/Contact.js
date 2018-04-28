/**
 * Created by admin on 6/28/17.
 */
import React, { Component } from 'react';
import $ from 'jquery';
import {Feedback} from './FirebaseUrl';

class Contact extends Component {


    constructor(){
        super();
        this.state = {
            notsubmitted:true
        }
    }

    handleInput(type,e){
        let inp;
        if (type!=="message")
            inp = e.target.value;
        switch (type){
            case "name":
                if(inp.trim()===""){
                    $('#name').addClass('is-danger');
                    this.setState({
                        nameMsg:"Invalid Name"
                    })
                }else{
                    $('#name').removeClass('is-danger');
                    this.setState({
                        nameMsg:""
                    })
                }
                break;
            case "email":
                let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if(regex.test(inp) || inp.trim()===""){
                    this.setState({
                        emailMsg:""
                    })
                }else{
                    this.setState({
                        emailMsg:"Invalid Email"
                    })
                }
                break;
            case "phone":
                let phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                if(phone.test(inp)|| inp.trim()===""){
                    this.setState({
                        phoneMsg:""
                    })
                }else{
                    this.setState({
                        phoneMsg:"Invalid Phone"
                    })
                }
                break;
            case "message":
                let mess = $('#message').val().trim();
                if(mess===""){
                    $('#message').addClass('is-danger');
                    this.setState({
                        messageMsg:"Message can't be empty !"
                    })
                }else{
                    $('#message').removeClass('is-danger');
                    this.setState({
                        messageMsg:""
                    })
                }
                break;
            default:
        }
    }



    handleForm(e){
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let phone = $('#phone').val().trim();
        let msg = $('#message').val();
        let currentdate = new Date();
        let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        let data = {
            name: name,
            email: email,
            phone: phone,
            message: msg,
            postedOn: datetime
        };
        if(this.state.nameMsg==="" && this.state.messageMsg===""){
            $.post({
                url:Feedback,
                dataType: 'json',
                data:JSON.stringify(data),
                success: (res)=>{
                    console.log("Done");
                    this.setState({
                        notsubmitted:false
                    })
                },
                error: (err, xhr, status)=>{
                    console.log(err);
                }
            })
        }else{
            alert("Cannot submit without name and message");
        }
        return false;
    }

    render(){
        return(
            <div className="contact">
                <div className="title">Contact</div>
                <span className="code">&lt;form action="submit_to_vipul.php"&gt;</span>
                <form onSubmit={this.handleForm.bind(this)} action="javascript:void(0)">
                    <div className="columns is-mobile is-tablet is-multiline">
                        <div className="column is-6-desktop is-12-mobile is-6-tablet">
                            {this.state.notsubmitted ?
                                (<div>
                                        <div className="field">
                                            <div className="control">
                                                <input onChange={this.handleInput.bind(this,'name')} className="input" id="name" type="text" name="name" placeholder="Your name !"/>
                                                <p className="help is-danger">{this.state.nameMsg}</p>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <input onChange={this.handleInput.bind(this,'email')} className="input" id="email" type="email" name="email" placeholder="Drop in your email id here, its optional BTW!"/>
                                                <p className="help is-danger">{this.state.emailMsg}</p>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <input onChange={this.handleInput.bind(this,'phone')} className="input" id="phone" type="text" name="phone" placeholder="Your number, again optional."/>
                                                <p className="help is-danger">{this.state.phoneMsg}</p>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <textarea onChange={this.handleInput.bind(this,'message')} className="textarea" name="message" id="message" placeholder="Any message for me ?"/>
                                                <p className="help is-danger">{this.state.messageMsg}</p>
                                            </div>
                                        </div>
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <input type="submit" value="submit" className="button is-primary"/>
                                            </div>
                                        </div>
                                    </div>):
                                (<div>
                                    <div className="notification is-primary">
                                        <button className="delete"></button>
                                        Thank you for your response! <br/>
                                        I will get back in touch with you.
                                    </div>
                                </div>)}
                            <span className="code">&lt;form/&gt;</span>
                        </div>
                        <div className="column is-6-desktop is-12-mobile is-6-tablet">
                            <span className="code">&lt;Maps&gt;</span><br/>
                            <iframe title="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5556369995697!2d-97.12304458529297!3d32.72443368098791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d16b4217a43%3A0x375f6f6a674818bb!2s927+Benge+Dr%2C+Arlington%2C+TX+76013!5e0!3m2!1sen!2sus!4v1498866305712" ></iframe>
                            <span className="code">&lt;/Maps&gt;</span><br/>
                        </div>
                    </div>
                  </form>
                <span className="info-box">
                    <i className="fa fa-phone-square vip"><p className="contact-text">+1 (817)-271-6982</p></i><br/>
                        <i className="fa fa-envelope-square vip"><p className="contact-text">vipul.mahadik@gmail.com</p></i><br/>
                    <a href="http://fb.com/vipulmahadik" target="_blank" className="fa fa-facebook-square vip"/>
                    <a href="http://linkedin.com/in/vipulkumarmahadik" target="_blank" className="fa fa-linkedin-square vip"/>
                    <a href="http://github.com/vipulmahadik" target="_blank" className="fa fa-github-square vip"/>
                </span>
            </div>
        )
    }
}

export default Contact