export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A Sole Traveler in exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "Couple",
    desc: "A romantic getaway for two",
    icon: "🥂",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A fun trip with the whole family",
    icon: "👨‍👩‍👦",
    people: "3+",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Keep costs on the average side",
    icon: "👍",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "A balanced budget with comfort",
    icon: "🤞",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Experience premium travel with all comforts",
    icon: "👌",
  },
];

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveller} with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.'