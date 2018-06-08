import React, { Component } from 'react'
import {MyMapComponent} from '../custom'
import * as CafesAPI from '../custom/Cafes'
import './main.css'

export default class Theme extends React.Component {
state = {
		cafeList: [],
		map: {},
		lat: 24.7585194,
		lng: 46.6626282,
		query: '',
		queryResult: []
}
updateQuery = (query) => {      
    if(query === ''){
        this.setState({query: ''});
    }else { 
        this.setState({query});
		this.SearchForLocation(query); 
	}
}

SearchForLocation = (query) =>{
    if(query == null ){
      this.setState(
        {queryResult: null}
    )}
    else {
		console.log("Hello")
      // Complexity of n^2
	let foundLocation = this.state.cafeList.filter((cafe) => cafe.venue.name.includes(query));
	console.log(foundLocation)
	
	
    this.setState(
      {queryResult: foundLocation}
  )
}
}
onLocationChange(lat,lng){
 this.setState({lat: lat,lng: lng});
 this.updateCafes();
}

updateCafes(){
	CafesAPI.getAll(this.state.lat,this.state.lng).then(res => {this.setState({
		cafeList:res.response.groups[0].items});
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
		let result = this.props.query;
	return (
		<div>
			<section id="sidebar">
				<div className="inner">
					<nav>
					<input type="text" 
                		   className="" 
                		   	placeholder="Search by Name" 
                			value={this.state.query}
                			onChange={(event) => this.updateQuery(event.target.value)} />
						
						<ul>
							{this.state.queryResult && this.state.query != '' && this.state.queryResult.map(cafe => (
								<li key={cafe.venue.id}><a href="#">{cafe.venue.name}</a></li>
							))}
								
							{this.state.query == '' && this.state.cafeList.map(cafe => (
								<li key={cafe.venue.id}><a href="#">{cafe.venue.name}</a></li>
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
					markers={this.state.cafeList}
                    containerElement={<div style={{height:100 + 'vh'}}/>}
					mapElement={<div style={{height:100 + '%'}}/>
				    
				}

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