import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  return (
 <Link to={`https://www.google.com/maps/search/?api=1&query=${place.placeName}`}target='_blank'>

<div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
      <img src="/bg.jpg" alt="" 
      className='w-[130px] h-[130px] rounded-xl'
      />
      <div>
        <h2 className='font-bold text-lg'>{place.placeName}</h2>
        <p className='text-sm text-gray-600'>{place.placeDetails}</p>

      </div>
    </div>
 </Link>

  )
}

export default PlaceCardItem
