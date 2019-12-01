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

    arrowScroll1 = (newSection) => {
        $('html, body').animate({
            scrollTop: $(newSection).offset().top - 45
            }, 1000)
        }
    
        arrowScroll2 = (newSection) => {
            $('html, body').animate({
                scrollTop: $(newSection).offset().top - 100
                }, 1000)
            }
            arrowScroll3 = (newSection) => {
                $('html, body').animate({
                    scrollTop: $(newSection).offset().top - 45
                    }, 1000)
                }

    render() {
        return (
            <ProjectContext.Provider
                value = {{
                    ...this.state,
                    setProjects: this.setProjects,
                    arrowScroll1: this.arrowScroll1,
                    arrowScroll2: this.arrowScroll2,
                    arrowScroll3: this.arrowScroll3,
                }}>
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export {ProjectConsumer, ProjectProvider};