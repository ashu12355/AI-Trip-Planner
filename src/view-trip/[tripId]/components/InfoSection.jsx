import React from "react";
import { Button } from "@/components/ui/button";
import { FaShareAlt } from "react-icons/fa";
function InfoSection({trip}){
    return (
        <div>
              <img src="/bg.jpg" alt="" className='h-[340px] w-full object-cover rounded-xl' />

             <div className="flex justify-between items-center">
             <div className="my-5 flex flex-col gap-2">
             
             <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.display_name} </h2>
             <div className="flex gap-5">
                 <h2 className="px-3 p-1 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg">🗓️ {trip.userSelection?.noOfDays} Day </h2>
                 <h2 className="px-3 p-1 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg">💸 {trip.userSelection?.budget} Budget</h2>
                 <h2 className="px-3 p-1 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg">🥂 No. of Traveller: {trip.userSelection?.traveller}</h2>
             </div>
             
           </div>
           <Button > <FaShareAlt /> </Button>
             </div>
        </div>
    )
}
export default InfoSection