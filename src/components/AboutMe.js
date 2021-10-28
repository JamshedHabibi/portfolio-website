import React, { Component } from 'react';
import './AboutMe.css';
import { ProjectConsumer } from '../Context';
import CSS from '../img/CSS.png';
import Skills from './Skills';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="section2">
        <div className="aboutMe">
          <div className="pb-3">
            <h1 className="aboutMeTitle" id="aboutMeTitle">
              About Me
            </h1>
          </div>
          <div className="description container-fluid pt-md-4">
            <div className="row mt-5">
              <div className="col-12 col-md-10 mx-auto pb-md-3 text-center">
                <p>
                  My name is Jamshed Habibi. I’ve been building websites professionally for close to 2 years,
                  specialising in front-end development and utilising technologies such as React, Gatsby, TypeScript,
                  JavaScript, CSS-in-JS, and many others.
                  <br />
                  <br />
                  I have experience in test driven development, using Jest, and I am comfortable with Agile development
                  practises, having received Certified Scrum Product Owner (CSPO) Certification.
                  <br />
                  <br />
                  <br />
                  <strong>My skills include: </strong>
                </p>
              </div>
              <div className="skills col-12 col-md-10 mx-auto pt-xl-5 text-center">
                <ProjectConsumer>
                  {context => {
                    return context.skillSet.map(skill => {
                      return <Skills key={skill.id} img={skill.img} />;
                    });
                  }}
                </ProjectConsumer>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>

        <ProjectConsumer>
          {value => {
            return (
              <div className="arrow-container2">
                <i
                  className="arrowBtn2 fas fa-chevron-down"
                  onClick={() => {
                    value.arrowScroll('.Portfolio', 100);
                  }}
                ></i>
              </div>
            );
          }}
        </ProjectConsumer>
      </div>
    );
  }
}
