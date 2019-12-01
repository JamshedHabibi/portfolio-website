import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className='section4'>
                <div className='contact-background'></div>
                <div className='contact-container container'>
                    <div className='row text-center'>
                        <div className='col-6'>
                            <div className='contactpageTitle'>
                                <h4><strong>Want to get in contact?</strong></h4>
                            </div>
                            <div className='contact'>
                                <p>Email me and we can talk</p>
                            </div>
                            <button className='contactBtn mt-3' type="submit">
                                <a href='mailto:jamshed.habibi100@gmail.com?subject='>Lets talk</a>
                            </button>
                        </div>

                        <div className='contactImg col-6'>
                            <i class="fas fa-comments"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
