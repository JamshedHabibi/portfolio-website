import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        const {img} = this.props;
        return (
            
                <img className='skills px-5 py-2' src={img} style={{width: 150}} alt='skill'/>
            
            
        )
    }
}
