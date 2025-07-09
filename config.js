let topTitleDiv = '<h4 style="text-align: center;">GIS for Design Practices (A-69391) Instructors: Dare Brawley (dare.brawley@columbia.edu) and Mario Giampieri (mag2382@columbia.edu)</h4>';

let titleDiv =
  '<h1 style="text-align: center;">NYC Carbon Atlas : How do the building characteristics (age, land use, etc.) affect the carbon emissions in Manhattan?</h1>';

let bylineDiv = '<p style="text-align: center;">By Manas Bhatia | MS CDP 2024-25 | GSAPP</p>';

let descriptionDiv =
  '<p style="text-align: center;">This scrollytelling project visualizes energy usage and carbon emissions in NYC by zip codes and tax lots. The story explores how building characteristics contribute to energy use and therefore the net carbon emissions.</p>' +
  '<p style="text-align: center;">The project is made using the building information obtained from MapPLUTO (a NYC Department of City Planning geographic database) and NYC Building Energy and Water Data Disclosure for Local Law 84 (2023-Present).</p>' +
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let footerDiv =
  '<p>Data source: <a href="https://data.cityofnewyork.us/">NYC Open Data</a>.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a></p>';

let divChapter1 =
  "<h3>Energy Use (Grid Purchase kWh) by Zip Code</h3>" +
  "<p>Energy use data reveals significant disparities in consumption across NYC. The map highlights these differences, categorized by zip codes, with darker colors representing higher energy consumption. Energy Use by Type is a summary of the annual consumption of an individual type of energy (e.g. electricity or natural gas). </p>" +
  "<p>Click on a zip code to see detailed energy use information.</p>" +
  "<div class='legend'>" +
  "<h4>Legend</h4>" +
  "<ul>" +
  "<li><span style='background-color: #ffffff; width: 20px; height: 20px; display: inline-block;'></span> 0 (White)</li>" +
  "<li><span style='background-color: #fecc5c; width: 20px; height: 20px; display: inline-block;'></span> 0 - 680,679.03 (Light Yellow)</li>" +
  "<li><span style='background-color: #fd8d3c; width: 20px; height: 20px; display: inline-block;'></span> 680,679.03 - 2,010,885.08 (Orange)</li>" +
  "<li><span style='background-color: #f03b20; width: 20px; height: 20px; display: inline-block;'></span> 2,010,885.08 - 4,377,161.01 (Red)</li>" +
  "<li><span style='background-color: #bd0026; width: 20px; height: 20px; display: inline-block;'></span> 4,377,161.01 - 18,574,640.54 (Dark Red)</li>" +
  "</ul>" +
  "</div>";

let divChapter2 =
  "<h3>Energy Use (Grid Purchase kWh) in Manhattan</h3>" +
  "<p>This section focuses on energy use across Manhattan's zip codes. Observe how patterns differ compared to other boroughs, with certain areas consuming significantly more energy. We can compare two zip codes to get more insights - Upper East and Midtown. Let us zoom into Midtown and see what we can find.</p>" +
  "<p>Click on a zip code to see detailed information about energy use in Manhattan.</p>" +
  "<div class='legend'>" +
  "<h4>Legend</h4>" +
  "<ul>" +
  "<li><span style='background-color: #ffffb2; width: 20px; height: 20px; display: inline-block;'></span> 0 - 680,679.03 (Light Yellow)</li>" +
  "<li><span style='background-color: #fecc5c; width: 20px; height: 20px; display: inline-block;'></span> 680,679.03 - 2,010,885.08 (Yellow)</li>" +
  "<li><span style='background-color: #fd8d3c; width: 20px; height: 20px; display: inline-block;'></span> 2,010,885.08 - 4,377,161.01 (Orange)</li>" +
  "<li><span style='background-color: #f03b20; width: 20px; height: 20px; display: inline-block;'></span> 4,377,161.01 - 18,574,640.54 (Red)</li>" +
  "<li><span style='background-color: #bd0026; width: 20px; height: 20px; display: inline-block;'></span> 18,574,640.54+ (Dark Red)</li>" +
  "</ul>" +
  "</div>";

let divChapter3 =
  "<h3>Energy Use (Grid Purchase kWh) by Block and Tax Lot</h3>" +
  "<p>This section highlights energy consumption at a granular level using Block and Tax Lot data. Darker colors indicate higher energy usage.</p>" +
  "<p>Click on a Block and Tax Lot to see detailed energy use information.</p>" +
  "<div class='legend'>" +
  "<h4>Legend</h4>" +
  "<ul>" +
  "<li><span style='background-color: #ffffff; width: 20px; height: 20px; display: inline-block;'></span> 0 (White)</li>" +
  "<li><span style='background-color: #fecc5c; width: 20px; height: 20px; display: inline-block;'></span> 0 - 2,200,125.60 (Light Yellow)</li>" +
  "<li><span style='background-color: #fd8d3c; width: 20px; height: 20px; display: inline-block;'></span> 2,200,125.60 - 9,842,167.60 (Orange)</li>" +
  "<li><span style='background-color: #f03b20; width: 20px; height: 20px; display: inline-block;'></span> 9,842,167.60 - 30,380,864.60 (Red)</li>" +
  "<li><span style='background-color: #bd0026; width: 20px; height: 20px; display: inline-block;'></span> 30,380,864.60 - 144,746,407 (Dark Red)</li>" +
  "</ul>" +
  "</div>";

let divChapter4 =
  "<h3>Carbon Emissions by Block and Tax Lot</h3>" +
  "<p>This section highlights the carbon emissions (Net emissions per metric tons CO2) associated with each block and tax lot in Manhattan. Darker colors indicate higher emissions levels, providing insight into areas with greater environmental impact. Midtown seems to have high energy use and carbon emissions in certain blocks. Let look at the building characteristics in this area.</p>" +
  "<p>Click on a Block and Tax Lot to see detailed carbon emission data.</p>" +
  "<div class='legend'>" +
  "<h4>Legend</h4>" +
  "<ul>" +
  "<li><span style='background-color: #ffffff; width: 20px; height: 20px; display: inline-block;'></span> -266.20 (White)</li>" +
  "<li><span style='background-color: #3333ff; width: 20px; height: 20px; display: inline-block;'></span> 1142.30 (Light Blue)</li>" +
  "<li><span style='background-color: #6666ff; width: 20px; height: 20px; display: inline-block;'></span> 3941.30 (Moderate Blue)</li>" +
  "<li><span style='background-color: #9999ff; width: 20px; height: 20px; display: inline-block;'></span> 10196.90 (Light Violet)</li>" +
  "<li><span style='background-color: #9400d3; width: 20px; height: 20px; display: inline-block;'></span> 34192.90 (Very Light Violet)</li>" +
  "<li><span style='background-color: #000000; width: 20px; height: 20px; display: inline-block;'></span> 67030.90 (Black)</li>" +
  "</ul>" +
  "</div>";

let divChapter5 =
  "<h3>Land Use by Block</h3>" +
  "<p>This chapter highlights the land use categories for each block in Manhattan. Different colors represent various land use types, such as Residential, Commercial, and Mixed-Use. We can see that Midtown is mostly Commercial and Mix-Use buildings. That may explain the high energy use. Let's look at other factors.</p>" +
  "<p>Click on a block to see detailed land use information.</p>" +
  "<div class='legend'>" +
  "<h4>Legend</h4>" +
  "<ul>" +
  "<li><span style='background-color: #FFE5B4; width: 20px; height: 20px; display: inline-block;'></span> 0 - 4 (Category 1)</li>" +
  "<li><span style='background-color: #FFC0CB; width: 20px; height: 20px; display: inline-block;'></span> 4 - 7 (Category 2)</li>" +
  "<li><span style='background-color: #65358e; width: 20px; height: 20px; display: inline-block;'></span> 7 - 9 (Category 3)</li>" +
  "<li><span style='background-color: #66c2a5; width: 20px; height: 20px; display: inline-block;'></span> 9 - 11 (Category 4)</li>" +
  "</ul>" +
  "</div>" +
  "<div class='legend'>" +
  "<h4>Value Description</h4>" +
  "<ul>" +
  "<li>01 - One & Two Family Buildings</li>" +
  "<li>02 - Multi-Family Walk-Up Buildings</li>" +
  "<li>03 - Multi-Family Elevator Buildings</li>" +
  "<li>04 - Mixed Residential & Commercial Buildings</li>" +
  "<li>05 - Commercial & Office Buildings</li>" +
  "<li>06 - Industrial & Manufacturing</li>" +
  "<li>07 - Transportation & Utility</li>" +
  "<li>08 - Public Facilities & Institutions</li>" +
  "<li>09 - Open Space & Outdoor Recreation</li>" +
  "<li>10 - Parking Facilities</li>" +
  "<li>11 - Vacant Land</li>" +
  "</ul>" +
  "</div>";

let divChapter6 =
  "<h3>3D Visualization of Building Heights</h3>" +
  "<p>Explore the height of buildings (in feet - assuming 10ft per floor) in this area. Taller buildings are displayed in darker shades of blue. Here we can also see that Midtown has taller buildings. Let's look at the building ages.</p>" +
  "<p>Click on a building to see its height.</p>" +
  "<div class='legend'>" +
  "<h4>Legend</h4>" +
  "<ul>" +
  "<li><span style='background-color: #e6f2ff; width: 20px; height: 20px; display: inline-block;'></span> 0 - 20 (Light Blue)</li>" +
  "<li><span style='background-color: #99ccff; width: 20px; height: 20px; display: inline-block;'></span> 20 - 50 (Medium Blue)</li>" +
  "<li><span style='background-color: #3399ff; width: 20px; height: 20px; display: inline-block;'></span> 50 - 100 (Blue)</li>" +
  "<li><span style='background-color: #301934; width: 20px; height: 20px; display: inline-block;'></span> 100+ (Darker Blue)</li>" +
  "</ul>" +
  "</div>";

let divChapter7 =
  "<h3>Building Age Visualization</h3>" +
  "<p>This chapter explores the ages of buildings in the area. Buildings are colored based on their age, with darker shades representing older buildings. Midtown seems to have much younger buildings. Let us now look at Upper East area.</p>" +
  "<p>Click on a building to see its age.</p>" +
  "<div class='legend'>" +
  "<h4>Legend</h4>" +
  "<ul>" +
  "<li><span style='background-color: #66c2a5; width: 20px; height: 20px; display: inline-block;'></span> 0 - 50 years (Green)</li>" +
  "<li><span style='background-color: #d4b9da; width: 20px; height: 20px; display: inline-block;'></span> 50 - 100 years (Medium Purple)</li>" +
  "<li><span style='background-color: #df65b0; width: 20px; height: 20px; display: inline-block;'></span> 100 - 150 years (Bright Purple)</li>" +
  "<li><span style='background-color: #ce1256; width: 20px; height: 20px; display: inline-block;'></span> 150+ years (Dark Purple)</li>" +
  "</ul>" +
  "</div>";


let divChapter8glass = `
  <h3>Glass Distribution</h3>
  <p>This layer highlights the distribution of glass used in buildings across Manhattan. Darker colors represent higher amounts of glass.</p>
  <div class="legend">
    <h4>Legend</h4>
    <ul>
      <li><span style="background-color: #FFFFFF; width: 20px; height: 20px; display: inline-block;"></span> 0 (White)</li>
      <li><span style="background-color: #DCEEFF; width: 20px; height: 20px; display: inline-block;"></span> 0 - 942,166,786.18 (Light Blue)</li>
      <li><span style="background-color: #A1C4FF; width: 20px; height: 20px; display: inline-block;"></span> 942,166,786.18 - 4,445,454,478.55 (Sky Blue)</li>
      <li><span style="background-color: #4A90E2; width: 20px; height: 20px; display: inline-block;"></span> 4,445,454,478.55 - 14,257,920,726.62 (Medium Blue)</li>
      <li><span style="background-color: #00008B; width: 20px; height: 20px; display: inline-block;"></span> 14,257,920,726.62 - 46,194,747,729 (Dark Blue)</li>
    </ul>
  </div>
`;

let divChapter8concrete = `
  <h3>Concrete Distribution</h3>
  <p>This layer visualizes the distribution of concrete used in buildings across Manhattan. Darker colors represent higher amounts of concrete.</p>
  <div class="legend">
    <h4>Legend</h4>
    <ul>
      <li><span style="background-color: #a1d99b; width: 20px; height: 20px; display: inline-block;"></span> 0 - 907,837,114.70 (Light Green)</li>
      <li><span style="background-color: #74c476; width: 20px; height: 20px; display: inline-block;"></span> 907,837,114.70 - 4,209,144,241.94 (Medium Green)</li>
      <li><span style="background-color: #31a354; width: 20px; height: 20px; display: inline-block;"></span> 4,209,144,241.94 - 13,274,576,896.26 (Dark Green)</li>
      <li><span style="background-color: #006d2c; width: 20px; height: 20px; display: inline-block;"></span> 13,274,576,896.26 - 46,194,747,729.27 (Very Dark Green)</li>
    </ul>
  </div>
`;


let divChapter8brick = `
  <h3>Brick Distribution</h3>
  <p>This layer shows the distribution of brick materials used in buildings. Darker colors represent higher amounts of brick.</p>
  <div class="legend">
    <h4>Legend</h4>
    <ul>
      <li><span style="background-color: #f4a582; width: 20px; height: 20px; display: inline-block;"></span> 0 - 8,738,085.94 (Light Salmon)</li>
      <li><span style="background-color: #d6604d; width: 20px; height: 20px; display: inline-block;"></span> 8,738,085.94 - 15,507,024.51 (Light Reddish-Brown)</li>
      <li><span style="background-color: #b2182b; width: 20px; height: 20px; display: inline-block;"></span> 15,507,024.51 - 32,545,111.12 (Deep Reddish-Brown)</li>
      <li><span style="background-color: #67001f; width: 20px; height: 20px; display: inline-block;"></span> 32,545,111.12+ (Dark Maroon)</li>
    </ul>
  </div>
`;

let divChapter8steel = `
  <h3>Steel Distribution</h3>
  <p>This layer displays the distribution of steel materials used in buildings across Manhattan. Darker colors represent higher amounts of steel.</p>
  <div class="legend">
    <h4>Legend</h4>
    <ul>
      <li><span style="background-color: #dadaeb; width: 20px; height: 20px; display: inline-block;"></span> 0 - 942,166,786.18 (Light Purple)</li>
      <li><span style="background-color: #bcbddc; width: 20px; height: 20px; display: inline-block;"></span> 942,166,786.18 - 4,445,454,478.55 (Medium-Light Purple)</li>
      <li><span style="background-color: #9e9ac8; width: 20px; height: 20px; display: inline-block;"></span> 4,445,454,478.55 - 14,257,920,726.62 (Medium-Dark Purple)</li>
      <li><span style="background-color: #6a51a3; width: 20px; height: 20px; display: inline-block;"></span> 14,257,920,726.62 - 46,194,747,729.27 (Dark Purple)</li>
    </ul>
  </div>
`;

let divChapter9 =
  '<h3 style="text-align: center;">Interactive 3D word Scatter Plot</h3>' +
  '<p style="text-align: center;">This chapter presents a 3D scatter plot showcasing the relationship between building age, energy use, and building height. Each point represents a building, color-coded by land use category.</p>' +
  '<p style="text-align: center;">Scroll down and interact with the plot to explore patterns and trends.</p>' +
  "<iframe class = \"iframe\" src = \"scatter_plot.html\" title = \"Something\" ></iframe>" +
  '<p style="text-align: center;"> The scatter plot reveals distinct relationships between building characteristics and energy use across Manhattan. Taller buildings, typically commercial and mixed-use, show higher energy consumption due to larger floor areas and operational demands, while shorter residential buildings exhibit moderate to low energy use. Older buildings present varied energy patterns, with some displaying inefficiencies linked to outdated systems and others benefiting from retrofits. Public facilities exhibit wide variability in energy use, likely driven by their diverse functions. These patterns highlight the impact of land use, height, and age on energy demand, offering insights for targeting energy efficiency improvements in specific building types and areas </p>';

let divChapterAcknowledgments = `
  <h3>Acknowledgments and Data Sources</h3>
  <p>This project is made possible through the collaborative efforts of the Columbia University GIS team and with support from my mentors and peers. Special thanks to Dare Brawley, Mario Giampieri, and the MS CDP cohort for their guidance and feedback throughout the project.</p>
  <p><strong>Data Sources:</strong></p>
  <ul>
    <li>NYC Energy Use and Net Carbon Emissions Data: <a href="https://data.cityofnewyork.us/d/5zyy-y8am">NYC Building Energy and Water Data Disclosure for Local Law 84 (2023-Present)	</a></li>
    <li>Building Materials Dataset: Custom GeoJSON produced by student Hao Lee (MS CDP - 2024-25 | GSAPP) </li>
    <li>Building Information Data: <a href="https://www.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page">MAPPLUTO</a></li>
  </ul>
  <p>I am deeply grateful to everyone who contributed their time and expertise to make this project successful. Thank you for engaging with my story and exploring how design and GIS can help us tackle environmental challenges.</p>
  <p style="text-align: center;">Thank you!</p>
`;
  
    
var config = {
  style: "mapbox://styles/mb5327/cm2m8f5xb001u01phhcyr1xgw",
  accessToken: "pk.eyJ1IjoibWI1MzI3IiwiYSI6ImNsejY0NnQ1cjBmcW8ya29waDlwaTIxa3MifQ.L9_SqJiqej3tbr_P-YOCIQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "energyUseMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-73.9850, 40.75609],
        zoom: 9.5, // slightly less than the second page
        zoomSmall: 8.5, // slightly less than the second page
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "energyUseLayer",
          opacity: 0.4,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "energyUseLayer",
          opacity: 0,
          duration: 300,
        },
      ],
    },


    {
      id: "manhattanEnergyMap",
      alignment: "right",
      hidden: false,
      chapterDiv: divChapter2,
      location: {
        center: [-73.9850, 40.75609],
        zoom: 11,
        zoomSmall: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "manhattanEnergyLayer",
          opacity: 0.5,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "manhattanEnergyLayer",
          opacity: 0,
          duration: 300,
        },
      ],
    },


    {
      id: "blockTaxLotMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter3,
      location: {
        center: [-73.9850, 40.75609],
        zoom: 14,
        zoomSmall: 11,
        pitch: 30,
        bearing: -10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "blockTaxLotLayer",
          opacity: 0.6,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "blockTaxLotLayer",
          opacity: 0,
          duration: 300,
        },
      ],
    },


    {
      id: "carbonEmissionsMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter4,
      location: {
        center: [-73.9850, 40.75609],
        zoom: 14,
        zoomSmall: 11,
        pitch: 30,
        bearing: -10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "carbonEmissionsLayer",
          opacity: 0.6,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "carbonEmissionsLayer",
          opacity: 0,
          duration: 300,
        },
      ],
    },


    {
      id: "landUseMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter5,
      location: {
        center: [-73.9850, 40.75609], // Adjust as needed for focus on Manhattan
        zoom: 14,
        zoomSmall: 11,
        pitch: 30,
        bearing: -10,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "landUseLayer",
          opacity: 1.0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "landUseLayer",
          opacity: 0,
          duration: 300,
        },
      ],
    },


    {
      id: "building3DMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter6,
      location: {
        center: [-73.9850, 40.75609], // Adjust as needed
        zoom: 14,
        zoomSmall: 11,
        pitch: 60, // Tilt the map for 3D perspective
        bearing: -20,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "building3DLayer",
          opacity: 0.8,
        },
      ],
      onChapterExit: [
        {
          layer: "building3DLayer",
          opacity: 0,
        },
      ],
    },


    {
      id: "buildingAgeMap",
      alignment: "left", // Position the text to the right
      hidden: false,
      chapterDiv: divChapter7,
        
      location: {
        center: [-73.9850, 40.75609], // Adjust the center coordinates as needed
        zoom: 14,
        zoomSmall: 11,
        pitch: 30,
        bearing: -20,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "buildingAgeLayer",
          opacity: 0.8,
        },
      ],
      onChapterExit: [
        {
          layer: "buildingAgeLayer",
          opacity: 0,
        },
      ],
    },

    {
      id: "glassMap",
      alignment: "left", // Adjust as needed
      hidden: false,
      chapterDiv: divChapter8glass,
      location: {
        center: [-73.9850, 40.75609], // Adjust coordinates for focus
        zoom: 14,
        zoomSmall: 12,
        pitch: 30,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "glassLayer",
          opacity: 0.8,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "glassLayer",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "concreteMap",
      alignment: "left", // Adjust as needed
      hidden: false,
      chapterDiv: divChapter8concrete,
      location: {
        center: [-73.9850, 40.75609], // Adjust coordinates for focus
        zoom: 14,
        zoomSmall: 12,
        pitch: 30,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "concreteLayer",
          opacity: 0.8,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "concreteLayer",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    
    {
      id: "brickMap",
      alignment: "left", // Adjust as needed
      hidden: false,
      chapterDiv: divChapter8brick,
      location: {
        center: [-73.9850, 40.75609], // Adjust coordinates for focus
        zoom: 14,
        zoomSmall: 12,
        pitch: 30,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "brickLayer",
          opacity: 0.8,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "brickLayer",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    
    {
      id: "steelMap",
      alignment: "left", // Adjust as needed
      hidden: false,
      chapterDiv: divChapter8steel,
      location: {
        center: [-73.9850, 40.75609], // Adjust coordinates for focus
        zoom: 14,
        zoomSmall: 12,
        pitch: 30,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "steelLayer",
          opacity: 0.8,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "steelLayer",
          opacity: 0,
          duration: 300,
        },
      ],
    },




    {
      id: "scatterPlotChapter",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter9,
      location: {
        center: [-73.9850, 40.75609], // Adjust coordinates as needed
        zoom: 12,
        zoomSmall: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },


    {
      id: "acknowledgmentsChapter",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapterAcknowledgments,
      location: {
        center: [-73.9850, 40.75609], // Default view (optional)
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo", // Keep the map stable or adjust as needed
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [], // No layers to show for this chapter
      onChapterExit: [], // No layers to hide for this chapter
    },
    
    


  ],
};
