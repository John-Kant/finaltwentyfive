import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import data from './assets/data.json'
import Markers from './VenueMarkers'

const MapView = () => {
  const [myState, setMyState] = React.useState({
    currentLocation: { lat: 14.716677, lng: -17.467686 },
    zoom: 12,
  })
  const { currentLocation, zoom } = myState
  return (
    <div style={{ width: '73vw', height: '100vh' }}>
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Markers venues={data.venues} />
      </Map>
    </div>
  )
}
// }

export default MapView
