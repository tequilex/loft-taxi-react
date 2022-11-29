import React, {useEffect, useRef} from "react"
import mapboxgl from "mapbox-gl";
import './Map.scss'

function Map() {

  const mapContainer = useRef(null)

  useEffect(()=>{
    mapboxgl.accessToken = 'pk.eyJ1IjoidGVxdXppayIsImEiOiJjbGF4ejlxcngwYWo3M25tc2tvMmVzM3gyIn0.tOX-ZCmahE1ZizTwe4kvoA'
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [30.3056504, 59.9429126],
      zoom: 10,
      controls: []
      })

      return ()=>{
        map.remove()
      }
  }, [])

  return (
    <>
      <div className="Map">
        <div className="Map-app" ref={mapContainer}></div>
      </div>
    </>
  )
}

export default Map