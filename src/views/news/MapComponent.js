import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
// import { Router } from 'react-router';

const violentCrimeIcon = new Icon({
  iconUrl: require('./personalCrime2.png'),
  iconSize: [38, 38]
});
const otherCrimeIcon = new Icon({
  iconUrl: require('./violentCrime2.png'),
  iconSize: [38, 38]
});
const personalCrimeIcon = new Icon({
  iconUrl: require('./otherCrime2.png'),
  iconSize: [38, 38]
});
const propertyCrimeIcon = new Icon({
  iconUrl: require('./propertyCrime2.png'),
  iconSize: [38, 38]
});

const center = [54.21133309402026, -2.830688497073126];

const MapComponent = () => {
  const [crimeData, setCrimeData] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:7000/locations`).then((res) => {
      console.log(res.data.minedlinks);
      setCrimeData(res.data.minedlinks);
    });
  }, []);
  return (
    <div>
      <p>Live Crime</p>
      <h2>Crime Map</h2>
      <div>
        <MapContainer center={center} zoom={5} scrollWheelZoom={false} style={{ width: '100%', height: '400px' }}>
          <TileLayer
            url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=FwNOKzxYb9NnS1CG9U9F7QdeDCRBQWclv6UABZXtfSB71oZcsrZgJqhhSYlMGfYI"
            attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {crimeData.map((marker) => (
            <Marker
              position={[marker.latitude, marker.longitude]}
              icon={
                marker.crime === 'VIOLENT CRIMES'
                  ? violentCrimeIcon
                  : marker.crime === 'PROPERTY CRIMES'
                  ? propertyCrimeIcon
                  : marker.crime === 'PERSONAL CRIMES'
                  ? personalCrimeIcon
                  : otherCrimeIcon
              }
              key={marker.id}
            >
              <Popup>{marker.headline}</Popup>
            </Marker>
          ))}
        </MapContainer>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <p>
            <img src={require('./personalCrime3.png')} height="30px" width="30px" alt="violent crime icon" /> Violent Crime
          </p>
          <p>
            <img src={require('./violentCrime3.png')} height="30px" width="30px" alt="property crime icon" /> Property Crime
          </p>
          <p>
            <img src={require('./propertyCrime3.png')} height="30px" width="30px" alt="personal crime icon" /> Personal Crime
          </p>
          <p>
            <img src={require('./otherCrime3.png')} height="30px" width="30px" alt="other crime icon" /> Other Crime
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
// /FFDE20
