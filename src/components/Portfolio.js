import React, { Component } from 'react';
import './Portfolio.css';
import { ProjectConsumer } from '../Context';
import Projects from './Projects';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="portfolioTitle pt-2">
          <h1>My Portfolio</h1>
        </div>

        <div className="portfolio-projects container pt-md-5 mt-5 pb-4">
          <div className="row py-5 mb-4">
            <ProjectConsumer>
              {context => {
                return context.projects.map(project => {
                  return <Projects key={project.id} project={project} />;
                });
              }}
            </ProjectConsumer>
          </div>
        </div>

        <ProjectConsumer>
          {value => {
            return (
              <div className="arrow-container3">
                <i
                  className="arrowBtn3 fas fa-chevron-down"
                  onClick={() => {
                    value.arrowScroll('.section4', 45);
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
