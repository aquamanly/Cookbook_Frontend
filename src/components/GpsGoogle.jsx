// In your React component
import React, { useState, useEffect } from 'react';

function LocationTracker() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const success = (pos) => {
      setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      setError(null);
    };

    const errorCallback = (err) => {
      setError(err.message);
    };

    // Get the current position once
    navigator.geolocation.getCurrentPosition(success, errorCallback);

    // Optionally, watch for changes in position
    // const watchId = navigator.geolocation.watchPosition(success, errorCallback);
    // return () => navigator.geolocation.clearWatch(watchId); // Cleanup on unmount
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {position ? (
        <p>
          Latitude: {position.latitude}, Longitude: {position.longitude}
        </p>
      ) : (
        <p>Getting location...</p>
      )}
    </div>
  );
}

export default LocationTracker;