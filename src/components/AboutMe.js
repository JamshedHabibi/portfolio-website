import React, { Component } from 'react'
import './AboutMe.css'
import {ProjectConsumer} from '../Context'
import CSS from '../img/CSS.png'
import Skills from './Skills'

export default class AboutMe extends Component {
    render() {
        return (
            <div className='section2'>
                <div className='aboutMe'>
                    <div className='pb-3'>
                        <h1 className='aboutMeTitle' id='aboutMeTitle'>About Me</h1>
                    </div>
                    <div className='description container-fluid pt-md-4'>
                        <div className='row mt-5'>
                            <div className='col-12 col-md-10 mx-auto pb-md-3 text-center'>
                                <p>
                                    My name is Jamshed Habibi. I graduated from University in July 2019, 
                                    with a BEng Mechanical Engineering First Class Honours degree. 
                                    <br/><br/>
                                    During that time, I have discovered a massive interest in technology 
                                    and since leaving University, I began to teach myself how to programme, 
                                    spending countless hours learning, creating and debugging my projects.
                                    <br/><br/>
                                    Teaching myself how to programme has been an incredible experience so far. I believe I have
                                    found my niche. I enjoy the problem solving aspect massively and I am very eager to continue
                                    learning and mastering the craft. 
                                    I am a strong believer in that I can learn anything if I put my mind to it.
                                    <br/><br/>
                                    <strong>My skills include: </strong> 
                                    

                                </p>
                            </div>
                            <div className='skills col-12 col-md-10 mx-auto pt-xl-5 text-center'>
                            <ProjectConsumer>
                                {context => {
                                    return context.skillSet.map(skill => {
                                        return <Skills key={skill.id} img={skill.img} />
                                    })
                                }}
                                
                            </ProjectConsumer>
                            </div>
                        </div>
                            <br/><br/><br/>
                        </div>
                    
                    </div>
                
                        <ProjectConsumer>
                        {value => {
                            return <div className='arrow-container2'>
                                        
                                        <i  
                                        className="arrowBtn2 fas fa-chevron-down"
                                        onClick={() => {value.arrowScroll2('.Portfolio')}}></i>
                                        
                                    </div>
                            }}
                        </ProjectConsumer>
                
            </div>
        )
    }
}
