// Create the map centered at New York State
const map = L.map('map').setView([42.7, -74], 7);

// Add a base map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define GeoJSON data for New York State counties
const countiesData = {
    "type": "FeatureCollection",
    "features": [
        // Add your GeoJSON features here
    ]
};

// Define population data for each county (example data)
const populationData = {
    "New York County": 1628706,  // Manhattan
    "Kings County": 2559903,     // Brooklyn
    "Bronx County": 1418207,     // Bronx
    "Queens County": 2253858,    // Queens
    "Richmond County": 476143    // Staten Island
    // Add more counties and population data as needed
};

// Function to style the counties based on population
function style(feature) {
    const population = populationData[feature.properties.name];
    return {
        fillColor: getColor(population),
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
}

// Function to get color based on population
function getColor(population) {
    return population > 2000000 ? '#800026' :
           population > 1500000 ? '#BD0026' :
           population > 1000000 ? '#E31A1C' :
           population > 500000 ? '#FC4E2A' :
           population > 250000 ? '#FD8D3C' :
           population > 100000 ? '#FEB24C' :
           population > 50000 ? '#FED976' :
                               '#FFEDA0';
}

// Add the GeoJSON layer with population-based styling
L.geoJSON(countiesData, { style: style }).addTo(map);
