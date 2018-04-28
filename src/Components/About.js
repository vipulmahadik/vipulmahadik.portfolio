/**
 * Created by admin on 6/28/17.
 */

import React, { Component } from 'react';

class About extends Component {

    computeLists(){
        let points = [
            "Build web applications for clients using PHP, Python, Bootstrap3, HTML5, CSS3 and MySQL Server.",
            "Responsible for full-stack development using JavaScript, jQuery, AJAX, and RESTful APIs.",
            "Enhancing and resolving bugs for existing web applications.",
            "Developed web applications using Wordpress as Content Management System."
        ];

        let lis = points.map((p,i)=>{
            return (
                <li key={i}>{p}</li>
            );
        });
        return lis;

    }

    render(){
        return (
            <div className="about">
                <div className="title ">Work Experience</div>
                <div className="columns">
                    <div className="column is-12">
                        <p className="subtitle"><strong>Software Engineer (Web)</strong> - <span className="subtitle">Ninja Online Services</span></p>
                        <ul>{this.computeLists()}
                        </ul>

                    </div>
                </div>

                <div className="columns">
                    <div className="column is-12">
                        <span className="title">Education</span>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-6">
                        <h2>Masters of Science</h2>
                        <table className=" table is-narrow">
                            <tbody>
                            <tr><td><strong>University:</strong></td><td>The University of Texas at Arlington</td></tr>
                            <tr>
                                <td><strong>Location</strong></td>
                                <td>Arlington, TX, USA.</td>
                            </tr>
                            <tr>
                                <td><strong>Graduation Date:</strong></td>
                                <td>May 2017</td>
                            </tr>
                            <tr>
                                <td><strong>GPA:</strong></td>
                                <td>3.83</td>
                            </tr>
                            <tr><td><strong>Majors</strong></td><td>Computer Science</td></tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="column is-6">
                        <h2>Bachelors of Engineering</h2>
                        <table className=" table is-narrow">
                            <tbody>
                            <tr><td><strong>University:</strong></td><td>The University of Mumbai</td></tr>
                            <tr>
                                <td><strong>Location</strong></td>
                                <td>Mumbai, MH, India.</td>
                            </tr>
                            <tr>
                                <td><strong>Graduation Date:</strong></td>
                                <td>May 2015</td>
                            </tr>
                            <tr>
                                <td><strong>Percentage:</strong></td>
                                <td>62%</td>
                            </tr>
                            <tr><td><strong>Majors</strong></td><td>Computer Engineering</td></tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;