import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWhheWRlbiIsImEiOiJjamtudXU3dTMyaXI4M2twamR6OHI0dGJyIn0.y9FKmB9XVwKGDFH8j1fcsQ';

class Map extends React.Component {

  componentDidMount() {
    const lngLat = this.props.center.slice().reverse();
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: lngLat,
      zoom: this.props.zoom
    });

    this.marker = new mapboxgl.Marker()
      .setLngLat(lngLat)
      .addTo(this.map);
  }

  componentDidUpdate() {
    const lngLat = this.props.center.slice().reverse();
    this.map.setCenter(lngLat).setZoom(this.props.zoom);
    this.marker.setLngLat(lngLat);
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className="map" />
    );
  }
}

export default Map;
