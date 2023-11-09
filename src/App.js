import { useState, useEffect } from 'react'
import Map from './components/map'
import Loader from './components/loader.js'
import Header from './components/header.js'


// This is the main component for out application
// This component will render other components

function App() {
  

  const [eventData,setEventData] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect (() =>{
    const fetchEvents = async ()=> {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json() //we are only interested in a specific array 
    
      setEventData(events);
      setLoading(false); // now we are done loading
    }
      fetchEvents();
    // console.log(eventData); debuging 
  },[]); // in react dev tools we will see the array of the corresponding data 

  // we want to have some sort of loader when fetching the data 
  return (
    <div> {/*className is for react as we are in the npx style*/}
    
    {!loading ?
      <Map eventData={eventData} /> : <Loader />}
      <Header />
    </div>      
  );
}

export default App;
