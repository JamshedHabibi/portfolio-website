import React, { Component } from 'react'
import {projectData, skills} from './data.js'
import $ from 'jquery'

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state = {
        projects: [],
        navbarOpen: true,
        skillSet: skills
    
    }

    componentDidMount() {
        this.setProjects();
    }

    setProjects = () => {
        let tempProjects = []
        projectData.map(project => {
            const singleProject = {...project}
            tempProjects = [...tempProjects, singleProject]
        })
        this.setState(() => { 
            return {
                projects: tempProjects
            }
        })
    }

    arrowScroll = (newSection, int) => {
        $('html, body').animate({
            scrollTop: $(newSection).offset().top - int
            }, 1000)
        }

    render() {
        return (
            <ProjectContext.Provider
                value = {{
                    ...this.state,
                    setProjects: this.setProjects,
                    arrowScroll: this.arrowScroll,
                }}>
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export {ProjectConsumer, ProjectProvider};