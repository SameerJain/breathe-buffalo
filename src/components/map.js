import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

// define constants
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
    let _googleMap = null
    const [locationInfo, setLocationInfo] = useState(null)

    const [heatMapData] = useState({
        positions: [
            {lat: 43, lng: -78.79},
        ],
        options: {
            radius: 50,
            opacity: 0.6,
        }
    });

    // dynamically add points to heatmap layer
    // looks bad, but works, not sure if there is a better way to do so
    // had tried using the useState for heatMapData
    // but looks like GoogleMapReact's heatmap property does not cause re-rendering for updates
    setTimeout(() => {
        if (_googleMap) {
            // eslint-disable-next-line
            const point = new google.maps.LatLng(45, -78.79)
            // eslint-disable-next-line
            _googleMap.heatmap.data.push(point)
        }
    }, 5000)

    const markers = eventData
        .filter((ev) => ev.categories[0].id === NATURAL_EVENT_WILDFIRE) // filter out null items to improve performance
        .map((ev, index) => {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        })

    return (
        <div className="map">
            <GoogleMapReact
                ref={(el) => {
                    _googleMap = el
                }}
                bootstrapURLKeys={{ key: 'AIzaSyCWz4WRu4JI39T9MjT8xvJISAeFAvp-k3U' }}
                defaultCenter={center}
                defaultZoom={zoom}
                heatmapLibrary={true}
                heatmap={heatMapData}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 37.216335,
        lng: -100.211
    },
    zoom: 5.4
}

export default Map
