import { REGIONS_SOURCE } from "../sources";

export const regionsLayer = {
  id: "regions-layer",
  source: REGIONS_SOURCE,
  "source-layer": "regions",
  type: "fill",
  paint: {
    "fill-opacity": 0.3,
    "fill-color": "red",
    "fill-outline-color": "red",
  },
};
