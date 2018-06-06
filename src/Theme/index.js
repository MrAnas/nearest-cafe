import React, { Component } from 'react'
import {MyMapComponent} from '../custom'
import './main.css'

export default (props) => {

	return (
		<div>
			<section id="sidebar">
				<div className="inner">
					<nav>
						<ul>
							<li><a href="#intro">Welcome</a></li>
							<li><a href="#one">Who we are</a></li>
							<li><a href="#two">What we do</a></li>
							<li><a href="#three">Get in touch</a></li>
						</ul>
					</nav>
				</div>
			</section>

			<div id="wrapper">
				<MyMapComponent 
					isMarkerShown
					center={{lat:24.7051736,lng:46.8184831}}
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