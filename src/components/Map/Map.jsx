import React, {useEffect, useRef} from "react"
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import './Map.scss'

export const drawRoute = (map, coordinates) => {
  map.flyTo({
    center: coordinates[0],
    zoom: 15
  });

  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "#ffc617",
      "line-width": 8
    }
  });
};

const Map = ({route}) => {

  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(()=>{
    mapboxgl.accessToken = 'pk.eyJ1IjoidGVxdXppayIsImEiOiJjbGF4ejlxcngwYWo3M25tc2tvMmVzM3gyIn0.tOX-ZCmahE1ZizTwe4kvoA'
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [30.3056504, 59.9429126],
      zoom: 10,
      controls: []
      })
      return ()=>{
        map.current.remove()
      }
  }, [])

  useEffect(() => {
      if (route.length) {
        drawRoute(map.current, route)
      } if (route.length === 1) {
        map.current.removeLayer('route')
      }
    }, [route])

    function cl() {
      if(!route.length) {
        map.current.removeLayer('route') ///Создал и повесил на Map чтобы убедиться что рабтает по клику
      }
    }

  return (
    <>
      <div className="Map" onClick={() => cl()}>
        <div className="Map-app" ref={mapContainer}></div>
      </div>
    </>
  )
}

export default connect(
  (state) => ({route: state.addressReducer.route}),
  undefined
)(Map)