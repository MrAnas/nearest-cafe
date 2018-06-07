import React, { Component } from 'react'
import {MyMapComponent} from '../custom'
import * as CafesAPI from '../custom/Cafes'
import './main.css'

export default class Theme extends React.Component {
state = {
		cafeList: [],
		map: {},
		lat: 24.7585194,
		lng: 46.6626282
}
componentWillMount(){

}

onLocationChange(lat,lng){
 this.setState({lat: lat,lng: lng});
 this.updateCafes();
}

updateCafes(){
	CafesAPI.getAll(this.state.lat,this.state.lng).then(res => {this.setState({
		cafeList:res.response.groups[0].items})
	}
)
}
componentDidMount(){
	
		CafesAPI.getAll(this.state.lat,this.state.lng).then(res => {this.setState({
			cafeList:res.response.groups[0].items})
	}
)
}
	render(){
	return (
		<div>
			<section id="sidebar">
				<div className="inner">
					<nav>
						<ul>
							{
								this.state.cafeList.map(cafe => console.log(cafe.venue.name))
								}
								
							{this.state.cafeList.map(cafe => (
								<li key={cafe.id}><a href="#">{cafe.venue.name}</a></li>
							))}
						</ul>
					</nav>
				</div>
			</section>

			<div id="wrapper">
				<MyMapComponent 
					isMarkerShown
					onLocationChange={this.onLocationChange.bind(this)}
					center={{lat:this.state.lat,lng:this.state.lng}}
					zoom={16}
                    containerElement={<div style={{height:100 + 'vh'}}/>}
                    mapElement={<div style={{height:100 + '%'}}/>}

                />
			</div>

			<footer id="footer" className="wrapper style1-alt">
				<div className="inner">
					<ul className="menu">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>
		</div>
	)
	}
}