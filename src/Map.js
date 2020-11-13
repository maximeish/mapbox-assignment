import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapWrapper = () => {
  return (
    <Map center={[-1.9297648, 29.9871576]} zoom={12}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
};

export default MapWrapper;
