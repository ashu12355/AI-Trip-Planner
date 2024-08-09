import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from "@/constants/option";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { ChatSession } from "@google/generative-ai";
import { chatSession } from "@/service/AIModal";


function CreateTrip() {
  const [query, setQuery] = useState("");
  const [place, setPlace] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(formData); // Log the form data for debugging
  }, [formData]);

  const OnGenerateTrip = async () =>{
    if(formData?.noOfDays>5&&!formData?.location||!formData?.budget||!formData?.traveller)
      {
        toast("Kidly Enter All The Details.")
          return;
    }

    const FINAL_PROMPT = AI_PROMPT
    .replace('{location}',
    `${formData?.location?.address.name}, ${formData?.location?.address.state}, ${formData?.location?.address.country}`)
    .replace('{totalDays}',formData?.noOfDays)
    .replace('{traveller}',formData?.traveller)
    .replace('{budget}',formData?.budget)
    .replace('{totalDays}',formData?.noOfDays)
    console.log(FINAL_PROMPT);
    
      const result = await chatSession.sendMessage(FINAL_PROMPT)
      console.log(result?.response?.text());
      
    
  }


  const handleSearch = async (input) => {
    setQuery(input);
    if (input.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/autocomplete.php`,
        {
          params: {
            key: "pk.f0d9ce19f26adcf8c6a015822ff5796b",
            q: input,
            format: "json",
          },
        }
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const handleSelect = (suggestion) => {
    setPlace(suggestion);
    setQuery(suggestion.display_name);
    setSuggestions([]);
    handleInputChange("location", suggestion);
  };

 

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Share Your Travel Preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Provide some essential information, and our trip planner will create a personalized itinerary based on your choices.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your preferred destination?
          </h2>
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Type your destination"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {suggestions.length > 0 && (
            <ul className="border border-gray-300 mt-2 max-h-60 overflow-y-auto bg-white rounded-md">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(suggestion)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {suggestion.display_name}
                </li>
              ))}
            </ul>
          )}
          <div>
            <h2 className="text-xl my-3 font-medium">
              How many days do you plan to travel?
            </h2>
            <Input placeholder={"E.g. 3"} type="number" 
            onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
            />
          </div>
          {/* Budget Cards */}
          <div>
            <h2 className="text-xl my-3 font-medium">What is your budget range?</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={()=>handleInputChange('budget',item.title)}
                  className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg 
                    ${formData?.budget==item.title&&'shadow-lg border-black'}  `}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* Traveler Occupancy */}
          <div>
            <h2 className="text-xl my-3 font-medium">Who will you be traveling with?</h2>

            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelList.map((item, index) => (
                <div
                  key={index}
                  onClick={()=>handleInputChange('traveller',item.people)}
                  className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg 
                    ${formData?.traveller==item.people&&'shadow-lg border-black'}  `}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 justify-center flex">
          <Button onClick={OnGenerateTrip}>Generate Trip</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
