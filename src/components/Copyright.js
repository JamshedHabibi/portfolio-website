import React, { Component } from 'react'
import styled from 'styled-components'

export default class Copyright extends Component {
    render() {
        return (
            <CopyrightStyling>
                <p className='text mt-5 text-center'>
                <i className="mr-2 far fa-copyright"></i>JAMSHED HABIBI 2019
                </p>
                <p className='subtext mt-5 text-center'>Created with React, Bootstrap, JQuery & CSS</p>
            </CopyrightStyling>
        )
    }
}

const CopyrightStyling = styled.div`

position: relative;
height: 10vh;

.text {
    letter-spacing: 0.4em;
    white-space: nowrap;
    font-size: 0.8em;
    position: absolute;
    top: 70% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    padding-bottom: 3vh;
}

.subtext {
    font-size: 0.65em;
    position: absolute;
    top: 95% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    padding-bottom: 1vh;
    font-style: italic;
`