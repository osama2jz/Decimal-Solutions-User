// IMPORTS
import React, { useCallback, useRef, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";


import Geocode from "react-geocode";

Geocode.setApiKey(process.env.React_App_GOOGLE_MAPS_API_KEY);
// OPTIONAL_PARAMS={LANG, REGION, LOCATION_TYPE, ENABLE_DEBUG}

// STYLES
const containerStyle = {
  border: "1px solid #CED4DA",
  borderRadius: 5,
  width: "100%",
  height: "664px",
};

// PLACES
const libraries = ["places"];

// COMPONENT
function MapComponent({ pinLocation, pinGeoLocation, pinAddress }) {
  // HOOKS
  const [marker, setMarker] = useState(pinLocation ? [pinLocation] : []);
  const [selected, setSelected] = useState(pinLocation ? pinLocation : null);
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.React_App_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [infoWindowDetails, setInfoWindowDetials] = useState(
    pinGeoLocation ? pinGeoLocation : null
  );

  // REF TO MAP
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // PANNING
  if (loadError) return "error in loading";
  if (!isLoaded) return "loading maps";

  // DEFAULT LOCATION
  var center = {
    lat: pinLocation ? pinLocation.lat : 30,
    lng: pinLocation ? pinLocation.lng : 70,
  };
  // OPTIONS
  var options = {
    disableDefaultUI: true,
    zoomControl: true,
    draggable: false,
  };

  Geocode.fromLatLng(30, 70).then(
    (response) => {
      const address = response.results[0].formatted_address;
      setInfoWindowDetials(address);
    },

    (error) => {
      console.error(error);
    }
  );
  return (
    <div style={{ position: "relative" }} className="h-[664px]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={options}
        onLoad={onMapLoad}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {console.log("GLOBAL MARKER", marker)}
        {marker
          ? marker.map((mark) => {
              console.log("marker", mark);
              return (
                <Marker
                  key={mark.time?.toISOString()}
                  position={{ lat: mark.lat, lng: mark.lng }}
                />
              );
            })
          : null}

        {selected ? (
          <InfoWindow position={{ lat: selected?.lat, lng: selected?.lng }}>
            <p>
              {" "}
              {infoWindowDetails
                ? infoWindowDetails
                : "This venue was added without a pin location"}
            </p>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default React.memo(MapComponent);
