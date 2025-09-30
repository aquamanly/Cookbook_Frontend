import React from 'react';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';

function MapDisplay({ latitude, longitude }) {
  if (!latitude || !longitude) return null;

  const position = { lat: latitude, lng: longitude };

  return (
    <APIProvider apiKey={'AIzaSyBsv6-F6ymEOpJ6jdB6OIxCiX8tas2G6Y8'}>
      <Map defaultCenter={position} defaultZoom={15} mapId="60ca79f9e23e177f83059793">
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  );
}

export default MapDisplay;