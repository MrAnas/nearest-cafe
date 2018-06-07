import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const AnyReactComponent = ({ text }) => <div>{ text }</div>;


class Map extends Component {
 constructor(){
   super();
   this.state = {
     map: null
   }
 }

 
 
 mapMoved(map){
   this.props.onLocationChange(this.state.map.getCenter().lat(),this.state.map.getCenter().lng());
 }

 zoomChanged(map){
   console.log("Zoom Changed to: ", JSON.stringify(this.state.map.getZoom()));
 }

 mapLoaded(map){
  // console.log("Map New Center: ", )

  if(this.state.map != null)
    return

  this.setState({map})
 }
  render(){
  return(

  <GoogleMap
  ref={this.mapLoaded.bind(this)}
  onDragEnd={this.mapMoved.bind(this)}
  onZoomChanged={this.zoomChanged.bind(this)}
    defaultZoom={this.props.zoom}
    defaultCenter={this.props.center}
  >
    {this.props.isMarkerShown && <Marker position={this.props.center} />}
  </GoogleMap>
)}
}


export default withGoogleMap(Map)