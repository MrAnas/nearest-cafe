import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
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
  {this.props.markers.map(cafe =>(
    <Marker position={{lat:cafe.venue.location.lat, lng: cafe.venue.location.lng}} >
    <InfoBox>
    <div style={{ backgroundColor: `#aaa`, opacity: 0.75, padding: `12px 20px` }}>
        <div style={{ fontSize: `10px`, color: `#000` }}>
          <p>{cafe.venue.name}</p>
          <p>Type: {cafe.venue.categories[0].name}</p>
        </div>
      </div>
    </InfoBox>
    </Marker>
  ))}
  </GoogleMap>
)}
}


export default withGoogleMap(Map)