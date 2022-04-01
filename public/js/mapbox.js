/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoiamxha3JhcnkiLCJhIjoiY2wxM2lqeXB1MGdpYzNxcGRjMGZtM3RpayJ9.PAcy0AY8ms1neA-JByHH5w';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/jlakrary/cl14vya4d000j14phx3dwivva',
    scrollZoom: false,
    // style URL
    //center: [-74.5, 40], // starting position [lng, lat]
    //zoom: 10, // starting zoom
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    // create the popup
    const popup = new mapboxgl.Popup({ offset: 30 }).setHTML(
      `<p>Day : ${loc.day} ${loc.description}</p>`
    );
    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .setPopup(popup)
      .addTo(map);

    // Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};

// (function (fn) {
//   var d = document;
//   d.readyState == 'loading' ? d.addEventListener('DOMContentLoaded', fn) : fn();
// })(function () {});
