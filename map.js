/* Define small screen breakpoints */
var smallMedia = window.matchMedia("(max-width: 600px)").matches;

/* Layer types and alignments */
var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};

/* Utility functions */
function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

// Function to update the north arrow rotation
function updateNorthArrow() {
  const bearing = map.getBearing();
  console.log("Current Bearing:", bearing); // Debugging line
  const northArrowIcon = document.getElementById("north-arrow-icon");
  if (northArrowIcon) {
    northArrowIcon.style.transform = `rotate(${-bearing}deg)`;
  }
}

/* Story setup */
var story = document.getElementById("story");
var features = document.createElement("div");
var header = document.createElement("div");
features.setAttribute("id", "features");

if (config.topTitle) {
  var topTitle = document.createElement("div");
  topTitle.innerHTML = config.topTitle;
  header.appendChild(topTitle);
}
if (config.title) {
  var titleText = document.createElement("div");
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}
if (config.subtitle) {
  var subtitleText = document.createElement("div");
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}
if (config.byline) {
  var bylineText = document.createElement("div");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}
if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

/* Add chapters */
config.chapters.forEach((record, idx) => {
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  chapter.classList.add("br3");
  chapter.innerHTML = record.chapterDiv;
  container.setAttribute("id", record.id);
  container.classList.add("step");
  if (idx === 0) {
    container.classList.add("active");
  }
  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

story.appendChild(features);

/* Add footer */
var footer = document.createElement("div");

if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

// Map initialization
mapboxgl.accessToken = config.accessToken;

var startingZoom = smallMedia
  ? config.chapters[0].location.zoomSmall
  : config.chapters[0].location.zoom;

var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
});

// Add layers and setup scroller
map.on("load", function () {

  // Update the north arrow on map load
updateNorthArrow();

// Update the north arrow whenever the map is moved or rotated
map.on("move", updateNorthArrow);
map.on("rotate", updateNorthArrow);


  // Layer for Chapter 1
  map.addLayer({
    id: "energyUseLayer",
    type: "fill",
    source: {
      type: "geojson",
      data: "data/energyusebyzipcodenew.geojson",
    },
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["number", ["get", "Values "], 0], // Default value as 0 if "Values" is null
        0, "#ffffff",
        680679.03, "#fecc5c",
        2010885.08, "#fd8d3c",
        4377161.01, "#f03b20",
        18574640.54, "#bd0026",
      ],
      "fill-opacity": 0.6,
    },
  });

  // Layer for Chapter 2
  map.addLayer({
    id: "manhattanEnergyLayer",
    type: "fill",
    source: {
      type: "geojson",
      data: "data/energyzipMN.geojson",
    },
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["number", ["get", "Values"], 0], // Default value as 0 if "Values" is null
        0, "#ffffb2",
        680679.03, "#fecc5c",
        2010885.08, "#fd8d3c",
        4377161.01, "#f03b20",
        18574640.54, "#bd0026",
      ],
      "fill-opacity": 0.4,
    },
  });

  // Layer for Chapter 3
  map.addLayer({
    id: "blockTaxLotLayer",
    type: "fill",
    source: {
      type: "geojson",
      data: "data/energyBblMN.geojson",
    },
    paint: {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["number", ["get", "basenergyfileFINAL_ElectricityCleanDF"], 0], // Default value as 0 if "Values" is null
        0, "#ffffff",
        2200125.60, "#fecc5c",
        9842167.60, "#fd8d3c",
        30380864.60, "#f03b20",
        144746407, "#bd0026",
      ],
      "fill-opacity": 1.0,
    },
  });


  map.on("click", "blockTaxLotLayer", function (e) {
    var properties = e.features[0].properties;
    var lot = properties["BBL"] || "N/A";
    var energyUse = properties["energy use file_real"] || "N/A";

    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        `<h1>Energy Use by Block and Tax Lot</h1>
        <p><strong>Block and Lot:</strong> ${lot}</p>
        <p><strong>Energy Use:</strong> ${energyUse}</p>`
      )
      .addTo(map);
  });

  // Added Layer for Chapter 4: Carbon Emissions
  map.addLayer({
    id: "carbonEmissionsLayer",
    type: "fill",
    source: {
      type: "geojson",
      data: "data/co2bblMN.geojson",
    },
    paint: {
      "fill-color": [
      "interpolate",
      ["linear"],
      ["number", ["get", "basenergyfileFINAL_NetCo2CleanDF"], 0], // Default value as 0 if "Values" is null
      -266.20, "#ffffff", // White for lowest values
      1142.30, "#3333ff", // Light blue
      3941.30, "#6666ff", // Moderate blue
      10196.90, "#9999ff", // Light violet
      34192.90, "#9400d3", // Very light violet
      67030.90, "#000000", // Black for highest values
    ],
    "fill-opacity": 1,
    },
  });

  map.on("click", "carbonEmissionsLayer", function (e) {
    var properties = e.features[0].properties;
    var lot = properties["BBL"] || "N/A";
    var co2Emissions = properties["CO2_Emissions"] || "N/A";

    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        `<h1>Carbon Emissions by Block and Tax Lot</h1>
        <p><strong>Block and Lot:</strong> ${lot}</p>
        <p><strong>CO2 Emissions:</strong> ${co2Emissions}</p>`
      )
      .addTo(map);
  });


  // layer for chapter 5

  map.addLayer({
    id: "landUseLayer",
    type: "fill",
    source: {
      type: "geojson",
      data: "data/landuseMN.geojson",
    },
    paint: {
      "fill-color": [
      "interpolate",
      ["linear"],
      ["number", ["get", "LandUseInt"], 0], // Default value as 0 if "Values" is null
      0.0, "#FFE5B4", // Pink for 0-4
      4.0, "#FFC0CB", // Pink for 4-7
      7.0, "#65358e", // Purple for 7-9
      9.0, "#66c2a5", // Green for 9-11
    ],
    "fill-opacity": 0.6,
    },
  });


  map.on("click", "landUseLayer", function (e) {
    var properties = e.features[0].properties;
    var block = properties["Block"] || "N/A";
    var landUse = properties["LandUseCategory"] || "N/A";
  
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        `<h1>Land Use by Block</h1>
        <p><strong>Block:</strong> ${block}</p>
        <p><strong>Land Use Category:</strong> ${landUse}</p>`
      )
      .addTo(map);
  });

  //3d buildings
// Add 3D Building Layer
map.addLayer({
  id: "building3DLayer",
  type: "fill-extrusion",
  source: {
    type: "geojson",
    data: "data/buildingheights.geojson", // Ensure the correct path to your GeoJSON
  },
  paint: {
    "fill-extrusion-color": [
      "interpolate",
      ["linear"],
      ["get", "BldgHeight"], // Use 'BldgHeights' for building heights
      0, "#e6f2ff", // Light blue for small buildings
      20, "#99ccff", // Medium blue for mid-height buildings
      50, "#3399ff", // Blue for taller buildings
      100, "#301934", // Darker blue for very tall buildings
    ],
    "fill-extrusion-height": ["get", "BldgHeight"], // Use height directly from GeoJSON
    "fill-extrusion-base": 0, // Ground level
    "fill-extrusion-opacity": 0.8,
  },
});

map.on("click", "building3DLayer", function (e) {
  var properties = e.features[0].properties;
  var height = properties["BldgHeight"] || "N/A";
  var block = properties["Block"] || "N/A";

  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(
      `<h1>Building Information</h1>
      <p><strong>Block:</strong> ${block}</p>
      <p><strong>Building Height:</strong> ${height} meters</p>`
    )
    .addTo(map);
});

// Add Building Age Layer
map.addLayer({
  id: "buildingAgeLayer",
  type: "fill",
  source: {
    type: "geojson",
    data: "data/BldgAge.geojson", // Ensure the correct path to your GeoJSON
  },
  paint: {
    "fill-color": [
      "interpolate",
      ["linear"],
      ["get", "Bldg_Age"], // Assuming 'BuildingAge' is the property name
      0, "#66c2a5", // Green for new buildings
      50, "#d4b9da", // Medium purple for 50 years
      100, "#df65b0", // Bright purple for 100 years
      150, "#ce1256", // Dark purple for 150+ years
    ],
    "fill-opacity": 1,
  },
});

map.on("click", "buildingAgeLayer", function (e) {
  var properties = e.features[0].properties;
  var age = properties["Bldg_Age"] || "N/A";
  var block = properties["Block"] || "N/A";

  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(
      `<h1>Building Age Information</h1>
      <p><strong>Block:</strong> ${block}</p>
      <p><strong>Building Age:</strong> ${age} years</p>`
    )
    .addTo(map);
});

map.addLayer({
  id: "glassLayer",
  type: "fill",
  source: {
    type: "geojson",
    data: "data/bldgmaterials.geojson", // Ensure the correct path to your GeoJSON
  },
  paint: {
    "fill-color": [
      "interpolate",
      ["linear"],
      ["number", ["get", "Glass"], 0], // Ensure default to 0 for null values
      0, "#FFFFFF", // White for the lowest value
      942166786.18, "#DCEEFF", // Light blue
      4445454478.55, "#A1C4FF", // Sky blue
      14257920726.62, "#4A90E2", // Medium blue
      46194747729, "#00008B", // Dark blue for the highest value
    ],
    "fill-opacity": 0.8,
  },
});


map.addLayer({
  id: "concreteLayer",
  type: "fill",
  source: {
    type: "geojson",
    data: "data/bldgmaterials.geojson", // Adjust the file path
  },
  paint: {
    "fill-color": [
      "interpolate",
      ["linear"],
      ["get", "Concrete"], // Assuming 'Concrete' is the property name
      0, "#a1d99b", // Light green for values 0 - 907837114.70
      907837114.70, "#74c476", // Medium green for 907837114.70 - 4209144241.94
      4209144241.94, "#31a354", // Dark green for 4209144241.94 - 13274576896.26
      13274576896.26, "#006d2c", // Very dark green for 13274576896.26 - 46194747729.27
    ],
    "fill-opacity": 1,
  },
});

// Layer for Brick
map.addLayer({
  id: "brickLayer",
  type: "fill",
  source: {
    type: "geojson",
    data: "data/bldgmaterials.geojson", // Adjust the file path
  },
  paint: {
    "fill-color": [
      "interpolate",
      ["linear"],
      ["get", "Brick"], // Assuming 'Brick' is the property name
      0, "#f4a582", // Light salmon for values 0 - 8738085.94
      8738085.94, "#d6604d", // Light reddish-brown for 8738085.94 - 15507024.51
      15507024.51, "#b2182b", // Deep reddish-brown for 15507024.51 - 32545111.12
      32545111.12, "#67001f", // Dark maroon for 32545111.12 - 38495623107.73
    ],
    "fill-opacity": 1,
  },
});

// Layer for Stone
map.addLayer({
  id: "steelLayer",
  type: "fill",
  source: {
    type: "geojson",
    data: "data/bldgmaterials.geojson", // Adjust the file path
  },
  paint: {
    "fill-color": [
      "interpolate",
      ["linear"],
      ["get", "Steel"], // Assuming 'Steel' is the property name
      0, "#dadaeb", // Light purple for values 0 - 942166786.18
      942166786.18, "#bcbddc", // Medium-light purple for 942166786.18 - 4445454478.55
      4445454478.55, "#9e9ac8", // Medium-dark purple for 4445454478.55 - 14257920726.62
      14257920726.62, "#6a51a3", // Dark purple for 14257920726.62 - 46194747729.27
    ],
    "fill-opacity": 1,
  },
});
// Update cursor on hover for better UX
map.on("mousemove", "buildingMaterialsLayer", () => {
  map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "buildingMaterialsLayer", () => {
  map.getCanvas().style.cursor = "";
});

// Popup logic
map.on("click", "buildingMaterialsLayer", (e) => {
  const properties = e.features[0].properties || {};

  const materialDetails = `
    <h3>Building Materials</h3>
    <p><strong>Concrete:</strong> ${properties.Concrete || 0}</p>
    <p><strong>Brick:</strong> ${properties.Brick || 0}</p>
    <p><strong>Glass:</strong> ${properties.Glass || 0}</p>
    <p><strong>Stone:</strong> ${properties.Stone || 0}</p>
  `;

  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(materialDetails)
    .addTo(map);
});





// Add Chapter 9: Interactive Scatter Plot

function showScatterPlot() {
  
}


// next part

  var scroller = scrollama();
  scroller
    .setup({
      step: ".step",
      offset: 0.75,
      progress: true,
    })
    .onStepEnter((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      let thisZoom = smallMedia
        ? chapter.location.zoomSmall
        : chapter.location.zoom;
      let thisLocation = {
        bearing: chapter.location.bearing,
        center: chapter.location.center,
        pitch: chapter.location.pitch,
        zoom: thisZoom,
      };
      map[chapter.mapAnimation || "flyTo"](thisLocation);

      // Handle chapter-specific logic
       // Enable relevant popups based on the active chapter

      
      switch (chapter.id) {
        case "energyUseMap": // First Chapter: Energy Use
          map.off("click", "carbonEmissionsLayer"); // Disable Carbon Emissions Popup
          map.off("click", "landUseLayer"); // Disable Land Use Popup
      
          map.on("click", "energyUseLayer", function (e) {
            var properties = e.features[0].properties;
            var zipCode = properties["ZCTA5CE00"] || "N/A";
            var energyUse = properties["energy use file_real"] || "N/A";

            new mapboxgl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(
                `<h1>Energy Use Information</h1>
                <p><strong>Zip Code:</strong> ${zipCode}</p>
                <p><strong>Energy Use:</strong> ${energyUse}</p>`
              )
              .addTo(map);
          });
          break;

        case "carbonEmissionsMap": // Carbon Emissions Chapter
          map.off("click", "energyUseLayer"); // Disable Energy Use Popup
          map.off("click", "landUseLayer"); // Disable Land Use Popup
      
          map.on("click", "carbonEmissionsLayer", function (e) {
            var properties = e.features[0].properties;
            var lot = properties["BBL"] || "N/A";
            var co2Emissions = properties["basenergyfileFINAL_NetCo2CleanDF"] || "N/A";

            new mapboxgl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(
                `<h1>Carbon Emissions by Block and Tax Lot</h1>
                <p><strong>Block and Lot:</strong> ${lot}</p>
                <p><strong>CO2 Emissions:</strong> ${co2Emissions.toFixed(2)}</p>`
              )
              .addTo(map);
          });
          break;

        case "landUseMap": // Land Use Chapter
          map.off("click", "energyUseLayer"); // Disable Energy Use Popup
          map.off("click", "carbonEmissionsLayer"); // Disable Carbon Emissions Popup
      
          map.on("click", "landUseLayer", function (e) {
            var properties = e.features[0].properties;
            var block = properties["Block"] || "N/A";
            var landUseValue = properties["LandUseInt"] || "N/A";

            new mapboxgl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(
                `<h1>Land Use by Block</h1>
                <p><strong>Block:</strong> ${block}</p>
                <p><strong>Land Use Value:</strong> ${landUseValue}</p>`
              )
              .addTo(map);
          });
          break;


        case "scatterPlotChapter": // Chapter 8: Scatter Plot
          showScatterPlot(); // Render scatter plot iframe dynamically
          break;
          
          

          default:
        // Disable all popups in other chapters
        map.off("click", "energyUseLayer");
        map.off("click", "carbonEmissionsLayer");
        map.off("click", "landUseLayer");
        break;
    }

    // Chapter 8 logic for scatter plot
    if (chapter.id === "scatterPlotChapter") {
      document.getElementById("map").style.display = "none";
      showScatterPlot();
    } else {
      document.getElementById("map").style.display = "block";
      const scatterContainer = document.getElementById(
        "scatter-plot-container"
      );
      if (scatterContainer) {
        scatterContainer.remove();
      }
      let thisZoom = smallMedia
        ? chapter.location.zoomSmall
        : chapter.location.zoom;
      map[chapter.mapAnimation || "flyTo"]({
        center: chapter.location.center,
        zoom: thisZoom,
        pitch: chapter.location.pitch,
        bearing: chapter.location.bearing,
      });
    }

    if (chapter.onChapterEnter.length > 0) {
      chapter.onChapterEnter.forEach(setLayerOpacity);
    }
  })


  
  .onStepExit((response) => {
    var chapter = config.chapters.find(
      (chap) => chap.id === response.element.id
    );
    response.element.classList.remove("active");

    if (chapter.id === "scatterPlotChapter") {
      const scatterContainer = document.getElementById("scatter-plot-container");
      if (scatterContainer) {
        scatterContainer.remove();
      }
    }

    if (chapter.onChapterExit.length > 0) {
      chapter.onChapterExit.forEach(setLayerOpacity);
    }
  });

window.addEventListener("resize", scroller.resize);
});
