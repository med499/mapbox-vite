import { initMap } from "./map";
import controllers from "./map/map-controllers";
import layers from "./map/layers";
import { sources } from "./map/sources";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style.css";

const map = initMap(
  "map",
  "mapbox://styles/mapbox/streets-v11",
  [2.894, 46.484],
  5,
  controllers,
  sources,
  layers
);
