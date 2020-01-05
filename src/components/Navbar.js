import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { ProjectConsumer } from '../Context';
import $ from 'jquery';

export default class Navbar extends Component {
    state = {
        flag: 0,
    }

    componentDidMount() {
        this.navbarScroll()
        if (window.innerWidth > 800) {
            this.navToggle()
        }
        this.mobileCompatibility()
    }

    mobileCompatibility = () => {
        var x = window.innerWidth;
        for (x =0; x < 800; x++) {
        if (document.getElementById('nav-links').classList.contains('active')) {
            document.getElementById('navbar').style.zIndex = '1000';
            document.getElementById('nav-btn').style.zIndex = '1001';
        } else {
            document.getElementById('navbar').style.zIndex = '-1001';
        }
    }
    }
    
    navToggle = () => {
        if (this.state.flag == 0) {
        document.getElementById('nav-links').classList.add('active');
        document.getElementById('nav-btn').style.color = 'rgb(84, 163, 57)';
        this.head();
        this.mobileCompatibility();
        this.setState({flag: 1});
        } else {
        document.getElementById('nav-links').classList.remove('active');
        document.getElementById('nav-btn').style.color = 'rgb(77, 73, 73)';
        this.head();
        this.mobileCompatibility();
        this.setState({flag: 0});
        }
    };
    
    head = () => {
        var header = document.getElementById('header');
        if (this.state.flag == 1) {
            header.style.background = 'none';
        } else if (this.state.flag == 0 & window.pageYOffset == 0) {
            header.style.background = 'none';
        } else {
            header.style.background = 'rgb(243, 243, 243)';
        }
    }
        
    navbarScroll = () => {
        window.onscroll = () => {
        var scroll = window.pageYOffset;
        var header = document.getElementById('header');
        if (scroll > header.offsetTop && this.state.flag == 1) {
            header.style.background = 'rgb(243, 243, 243)';
        }  else {
            header.style.background = 'none';
        }
    }
}
    render() {        
    return (
        <div className='header' id='header'>
            <div className='header-cont'>
                <div className="home">
                    <h3><i 
                    onClick={() => {
                        $('html, body').animate({
                            scrollTop: 0
                        }, 1000)
                        }} className="fas fa-home"></i></h3>
                </div>
                    <nav className='navbar' id='navbar'>
                        <ul className='nav-links' id='nav-links'>
                            <li onClick={() => {
                                if (window.innerWidth < 800) {
                                    this.navToggle();
                                    $('html, body').animate({
                                        scrollTop: 0
                                    }, 1000)
                                } else {
                                    $('html, body').animate({
                                        scrollTop: 0
                                    }, 1000)
                                }
                                }}>Home</li>
                            <li onClick={() => {
                                if (window.innerWidth < 800) {
                                    this.navToggle();
                                    $('html, body').animate({
                                        scrollTop: 745
                                    }, 1000)
                                } else {
                                $('html, body').animate({
                                    scrollTop: 700
                                }, 1000)
                                }
                                }}>About Me</li>
                            <li onClick={() => {
                                if (window.innerWidth < 800) {
                                    this.navToggle();
                                    $('html, body').animate({
                                        scrollTop: 1530
                                    }, 1000)
                                } else {
                                $('html, body').animate({
                                    scrollTop: 1420
                                }, 1000)
                                }
                                }}>Portfolio</li>
                            <li>
                                <a href='/Jamshed Habibi CV Website.pdf' target='_blank'>CV</a>
                            </li>
                            <li><a href="https://github.com/JamshedHabibi" target='_blank'><i class="fab fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/jamshed-habibi-9278a114b/" target='_blank'><i class="fab fa-linkedin"></i></a></li>
                            <li onClick={() => {
                                if (window.innerWidth < 800) {
                                    this.navToggle();
                                    $('html, body').animate({
                                        scrollTop: 2710
                                    }, 1000)
                                } else {
                                $('html, body').animate({
                                    scrollTop: 1950
                                }, 1000)
                            }
                                }}><i class="fas fa-paper-plane"></i></li>
                        </ul> 
                                    
                    </nav>
                    

                    <div>
                        <i className="fas fa-bars" id='nav-btn'
                        onClick={() => {this.navToggle()}}></i>
                    </div>
            </div>
        </div>
            )
    }
}