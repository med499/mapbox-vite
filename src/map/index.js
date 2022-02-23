import mapbox from "mapbox-gl";

mapbox.accessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;

let map = null;

export function getMap() {
  return map;
}

export function initMap(
  container,
  style,
  center,
  zoom,
  controllers,
  sources,
  layers
) {
  map = new mapbox.Map({
    container,
    style,
    center,
    zoom,
  });
  controllers.forEach((controller) => {
    map.addControl(controller);
  });
  map.on("load", () => {
    Object.keys(sources).forEach((sourceKey) =>
      map.addSource(sourceKey, sources[sourceKey])
    );
    layers.forEach((layer) => map.addLayer(layer));
  });
  return map;
}
