
import React, { Component } from 'react'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'

export default class Box extends Component {
    render(){
        return(
    <div>
    <InfoBox>
    <div style={{ backgroundColor: `#fff`, opacity: 0.75, padding: `12px 20px` }}>
        <div style={{ fontSize: `10px`, color: `#000` }}>
            <p>{this.props.cafe.venue.name}</p>
            <p>Type: {this.props.cafe.venue.categories[0].name}</p>
        </div>
    </div>
    </InfoBox>
    </div>
        )
    }
}