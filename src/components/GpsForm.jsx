import React, { useState, useEffect } from 'react';

const GpsForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    recipeName: "",
    ingredients: "",
    steps: "", // This will hold the coordinates
    calories: "",
    imageUrl: "",
  });

  // State for GPS position
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  // Standard handler for controlled inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. useEffect to get the GPS position
  useEffect(() => {
    // Check for browser support
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const success = (pos) => {
      // Set the position state
      setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      setError(null);
    };

    const errorCallback = (err) => {
      setError(`Error retrieving location: ${err.message}`);
    };

    // Attempt to get the current position
    navigator.geolocation.getCurrentPosition(success, errorCallback);
  }, []); // Run only once on mount

  // 2. useEffect to update the form field when 'position' is ready
  useEffect(() => {
    if (position) {
      const coordStr = `${position.latitude},${position.longitude}`;

      // Update the 'steps' field in formData with the coordinates
      setFormData(prevData => ({
        ...prevData,
        steps: coordStr,
      }));
      
      // Optional: Remove the temporary 'position' state to prevent
      // a potential second update, though it's usually fine.
      // setPosition(null); 
    }
  }, [position]); // Run whenever the 'position' state changes

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Data:", formData); 
    // Add validation here if formData.steps is still "0,0" or empty

    fetch("https://v554zq-8080.csb.app/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => alert("Customer added!"))
      .catch((error) => console.error("Error adding Customer:", error));
  };
  
  // Determine the display value for the coordinate field placeholder/text
  const coordinateDisplay = position 
    ? `Latitude: ${position.latitude}, Longitude: ${position.longitude}` 
    : error || "Getting location...";
  
  // Determine the default value for the steps textarea
  const stepsValue = formData.steps || (position ? `${position.latitude},${position.longitude}` : "0,0");


  return (
    <div>
      <div>
        {/* Display location status above the form */}
        <p>Location Status: {coordinateDisplay}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* ... (other fields) ... */}
        <input
          type="text"
          name="recipeName"
          value={formData.recipeName}
          onChange={handleChange}
          placeholder="Customer Name"
          required
        />
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        
        {/* THE COORDINATE TEXTAREA */}
        <textarea
          name="steps"
          // We use the value from the state, which is set by the useEffect hook
          value={formData.steps} 
          onChange={handleChange}
          placeholder="GEOCOORDINATES (Will auto-fill)"
          required
        />
        
        {/* ... (other fields) ... */}
        <input
          type="text"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default GpsForm;