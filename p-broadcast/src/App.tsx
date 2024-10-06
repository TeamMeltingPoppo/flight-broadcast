import { useEffect } from 'react'
import './App.css'
// import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import InfoPanel from './components/InfoPanel';

function App() {

  useEffect(() => {
  }, []);

  return (
    <>
      <div className='view-area'>
        <div className='info'>
          <div className='map'>
            {/* <Map
              initialViewState={{
                longitude: 139.76711,
                latitude: 35.68074,
                zoom: 15
              }}
              style={{width: "100%"}}
              mapStyle="mapbox://styles/mapbox/streets-v12"
              mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
            ></Map> */}
          </div>
          <InfoPanel />
        </div>
        <div className='youtube'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/O5_3b2KCQSE?si=0fBk-nw5_NxXtSWR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe
            src="https://www.youtube.com/live_chat?v=O5_3b2KCQSE&embed_domain=localhost"
            width="560"
            height="320"
            title="YouTube Live Chat"
            frameBorder="0">
          </iframe>
        </div>
      </div>
    </>
  )
}

export default App
