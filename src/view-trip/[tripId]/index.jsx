import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';
function Viewtrip() {
  const {tripId} = useParams()
  const [trip,setTrip]=useState([])
  
    useEffect(()=>{
      tripId&&GetTripData();
    },[tripId])

    // Used to get Trip info. 
    const GetTripData = async()=>{
      const docRef = doc(db,'AITrips',tripId);
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()){
        console.log("Document: ",docSnap.data());
        setTrip(docSnap.data());
      }
      else {
        console.log("No Such Document ");
        toast('No trip Found!');
        
      }
    }
    return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
       {/* Information section  */}
       <InfoSection trip={trip} />
    {/* Recommende Hotels  */}

    <Hotels trip={trip}/>
    
    {/* Daily Plans  */}

    <PlacesToVisit trip={trip} />
    {/* Footer */}
    </div>
    )
}

export default Viewtrip
