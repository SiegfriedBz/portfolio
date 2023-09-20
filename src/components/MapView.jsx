import { useState, useEffect, useRef, useCallback } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
// import MapPopup from './MapPopup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

const LOCATIONS = {
  paris: {
    latitude: 48.8566,
    longitude: 2.3522,
  },
  bouake: {
    latitude: 7.6936,
    longitude: -5.0301,
  },
  antananarivo: {
    latitude: -18.8792,
    longitude: 47.5079,
  },
  mauritius: {
    latitude: -20.3484,
    longitude: 57.5522,
    holidays: true,
  },
  lareunion: {
    latitude: -21.1151,
    longitude: 55.5364,
    holidays: true,
  },
  nyamey: {
    latitude: 13.5116,
    longitude: 2.1254,
  },
  bamako: {
    latitude: 12.6392,
    longitude: -8.0029,
  },
  cotonou: {
    latitude: 6.3703,
    longitude: 2.3912,
    holidays: true,
  },
  dakar: {
    latitude: 14.7167,
    longitude: -17.4677,
    holidays: true,
  },
  montpellier: {
    latitude: 43.6108,
    longitude: 3.8767,
  },
  vancouver: {
    latitude: 49.2827,
    longitude: -123.1207,
  },
  whistler: {
    latitude: 50.1163,
    longitude: -122.9574,
    holidays: true,
  },
  nanaymo: {
    latitude: 49.1659,
    longitude: -123.9401,
    holidays: true,
  },
  toulouse: {
    latitude: 43.6047,
    longitude: 1.4442,
  },
  paris: {
    latitude: 48.8566,
    longitude: 2.3522,
  },
  lausanne: {
    latitude: 46.5197,
    longitude: 6.6323,
  },
  rotkreuz: {
    latitude: 47.1667,
    longitude: 8.4667,
  },
  paris: {
    latitude: 48.8566,
    longitude: 2.3522,
  },
  zurich: {
    latitude: 47.3769,
    longitude: 8.5417,
  },
  canggu: {
    latitude: -8.6478,
    longitude: 115.1385,
    holidays: true,
  },
}

export default function MapView() {
  const mapRef = useRef(null)
  const [viewState, setViewState] = useState({
    ...LOCATIONS.canggu,
    zoom: 2,
  })

  const locationsArray = Object.keys(LOCATIONS)
  const [nextLocationIndex, setNextLocationIndex] = useState(0)

  const flyTo = useCallback((location) => {
    const { longitude, latitude } = LOCATIONS[location]
    mapRef?.current?.flyTo({
      center: [longitude, latitude],
      duration: 8000,
      zoom: 8,
      minZoom: 4,
    })
  }, [])

  const handleMove = useCallback(() => {
    flyTo(locationsArray[nextLocationIndex])
    setNextLocationIndex((prev) => {
      return prev === locationsArray.length - 1 ? 0 : prev + 1
    })
  }, [nextLocationIndex, locationsArray, flyTo])

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={MAPBOX_TOKEN}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      onLoad={handleMove}
      onMoveEnd={handleMove}
      style={{ width: 'auto', height: 700 }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
    >
      {/* {showPopup && (
        <Popup
          latitude={popup.latitude}
          longitude={popup.longitude}
          anchor='bottom'
          onClose={() => {
            setShowPopup(false)
          }}
          closeButton={false}
          offsetTop={-30}
        >
          <MapPopup popup={popup} isSurfTripsRoute={isSurfTripsRoute} />
        </Popup>
      )} */}

      {Object.entries(LOCATIONS).map(([location, values]) => {
        return (
          <div
            key={location}
            //   id={spot}
            //   onMouseEnter={() => handleSetPopup(spot)}
          >
            <Marker
              latitude={values.latitude}
              longitude={values.longitude}
              anchor='bottom'
            >
              <FontAwesomeIcon
                icon={faUmbrellaBeach}
                className={`me-3 text-4xl ${
                  values?.holidays ? 'text-sky-500' : 'text-amber-500'
                }`}
              />
            </Marker>
          </div>
        )
      })}
    </Map>
  )
}
