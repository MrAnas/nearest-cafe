import React, { Component } from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Box from './marker'



class Map extends Component {
 constructor(){
   super();
   this.state = {
     map: null,
     activeMarker: null,
     isOpen: false
   }
 }

 
 
 mapMoved(map){
   this.props.onLocationChange(this.state.map.getCenter().lat(),this.state.map.getCenter().lng());
 }

 zoomChanged(map){
   console.log("Zoom Changed to: ", JSON.stringify(this.state.map.getZoom()));
 }

 onToggleOpen(marker){
  //  console.log(marker.latLng.lat())
   let clickedMarker = this.props.markers.filter((cafe) => cafe.venue.location.lat == Number(marker.latLng.lat()))
   if(this.state.isOpen){
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      activeMarker: null
    }));
   }else{
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      activeMarker: clickedMarker
    }));
   }
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
  { this.props.markers.map(cafe =>(
    <Marker onClick={this.onToggleOpen.bind(this)} key={cafe.venue.id} position={{lat:cafe.venue.location.lat, lng: cafe.venue.location.lng}} >
    {this.state.activeMarker && this.state.activeMarker[0].venue.id === cafe.venue.id && this.state.isOpen && 
      <Box cafe={cafe}/>
    }
    </Marker>
  ))}
  </GoogleMap>
)}
}


export default withScriptjs(withGoogleMap(Map))