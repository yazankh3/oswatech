// import Map from 'react-map-gl';
import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="rent-map-wraper">
      <iframe
        width="100%"
        height="770"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=%D8%B3%D8%A7%D8%AD%D8%A9%20%D8%A7%D9%84%D9%85%D9%8A%D8%B3%D8%A7%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default Map;
