/**
 * Created by admin on 6/28/17.
 */
import React, { Component } from 'react';
import './circle.css';

class Skills extends Component {

    getSkillMeter(){
        let skills = {
            'Angular': '78%',
            'React': '85%',
            'Node': '65%',
            'Express': '70%',
            'PHP': '80%',
            'Java': '85%',
        };

        let result = [];
        for (let key in skills){
            result.push(

                <div key={key} className="column is-2 is-one-third-mobile">
                    <p className="subtitle has-text-centered">{key}</p>
                    <div className={"c100 p"+skills[key].substring(0,2)+" small pale gauge"}>
                        <span>{skills[key]}</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                </div>
            )
        }
        return result;
    }

    render(){
        return(
            <div className="skills">
                <div className="title">
                    Major Skills
                </div>
                <div className="columns is-multiline">
                    {this.getSkillMeter()}
                </div>
                <hr/>
                <div className="columns is-multiline">
                    <div className="column is-12">
                        <span className="title">
                            Also, Great knowledge about:
                        </span>
                    </div>
                    <div className="column is-half-desktop">
                        <table className="table is-narrow">
                            <tbody>
                            <tr>
                                <td><strong>Programming Languages</strong></td>
                                <td>Python, TypeScript, C/C++</td>
                            </tr>
                            <tr>
                                <td><strong>Operating Systems</strong></td>
                                <td>Mac OS, Windows family, Android, Ubuntu, Cent OS</td>
                            </tr>
                            <tr>
                                <td><strong>Methodologies</strong></td>
                                <td>Agile Development, Unified Process Model, Scrum Model, Waterfall Model.</td>
                            </tr>
                            <tr>
                                <td><strong>Web Technologies</strong></td>
                                <td>Javascript (ES6), HTML5, CSS3, Flask, jQuery, Ajax, Less, Sass/Scss, Gulp.</td>
                            </tr>
                            <tr>
                                <td><strong>Databases</strong></td>
                                <td>MySQL, MariaDB, MongoDB</td>
                            </tr>
                            <tr>
                                <td><strong>CMS</strong></td>
                                <td>Wordpress, Drupal, Magento</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;