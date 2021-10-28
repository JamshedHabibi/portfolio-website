import React, { Component } from 'react';
import styled from 'styled-components';
import './TitlePage.css';
import $ from 'jquery';
import { ProjectConsumer } from '../Context';

export default class TitlePage extends Component {
  render() {
    return (
      <Title className="background">
        <Name className="container">
          <div className="row">
            <h1 className="name text-center mx-auto d-none d-sm-block">JAMSHED HABIBI</h1>
            <h1 className="name text-center mx-auto d-block d-sm-none">J.HABIBI</h1>
          </div>
          <div className="row">
            <p className="subName text-center mx-auto">FRONT-END SOFTWARE DEVELOPER</p>
          </div>
        </Name>

        <ProjectConsumer>
          {value => {
            return (
              <div className="arrow-container1">
                <i
                  className="arrowBtn1 fas fa-chevron-down"
                  onClick={() => {
                    value.arrowScroll('.section2', window.innerWidth <= 800 ? 30 : 45);
                  }}
                ></i>
              </div>
            );
          }}
        </ProjectConsumer>
      </Title>
    );
  }
}

const Title = styled.div`
  z-index: -1;
`;

const Name = styled.div`
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
