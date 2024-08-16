import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#7C00FE]">
          Embark on Your AI-Powered Journey:{" "}
        </span>
        Tailored Itineraries Just for You
      </h1>
      <p className="text-xl text-[#F5004F] text-center">
        Your dedicated travel planner and curator, crafting personalized trips
        to fit your preferences, schedule, and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started Here</Button>
      </Link>
    </div>
  );
}

export default Hero;
