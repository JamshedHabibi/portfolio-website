import React, { Component } from 'react'
import './Projects.css'

export default class Projects extends Component {
    render() {
        const {img, name, id, link, github, react, bootstrap, js, css} = this.props.project;
        return (
            <div className='col-8 col-md-6 col-lg-4 mx-auto p-3'>
                    <div className='card'>
                        <div className='portfolio-img img-container'>
                            <img 
                            className='img-thumbnail' 
                            src={img} alt='portfolio project'/>
                        </div>

                        <div className='hover-details'>
                            <div className='project-title text-center'>
                                <p>{name}</p>
                            </div>

                            <div className='projectURL'>
                                <a href={link} target='_blank'>
                                <i className="px-2 fas fa-search"></i>
                                </a>
                                <a href={github} target='_blank'>
                                    <i className="px-2 fab fa-github"></i>
                                </a>
                            </div>

                
                            <p className='f1 pb-4'>{react} {js}</p>
                            <p className='f2'>{bootstrap} {css}</p>    
                        </div>
                    </div>
                    
            </div>
        )
    }
}
