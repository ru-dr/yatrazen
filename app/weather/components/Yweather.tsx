"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@nextui-org/react";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsWind,
  BsThermometer,
} from "react-icons/bs";
import { TbTemperatureCelsius } from "react-icons/tb";

// b2319354382f61fb8056a07f2d6cb2bc
const APIkey = "b2319354382f61fb8056a07f2d6cb2bc";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  dt: number;
  main: {
    temp: any;
    feels_like: any;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: any;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>("Mumbai"); // default location
  const [inputValue, setInputValue] = useState<string>(""); // input value
  const [animate, setAnimate] = useState<boolean>(false); // animation
  const [loading, setLoading] = useState<boolean>(false); // loading

  // This function sets the value of the input field to the value of the event.
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue !== "") {
      setLocation(inputValue);
    }

    const input = document.querySelector("input");

    if (input && input.value === "") {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
    if (input) {
      input.value = "";
    }
  };

  // fetch the data
  useEffect(() => {
    // set the loading to true
    setLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;

    axios.get(url).then((response) => {
      setTimeout(() => {
        // set the data after 1.5 seconds
        setData(response.data);
        setLoading(true);
      }, 1500);
      setData(response.data);
    });
  }, [location]);

  // console.log(data);
  // if data is false show loading
  if (!data) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="h-[80vh] justify-around flex items-center">
          <Spinner size="md" />
        </div>
      </div>
    );
  }

  let icon;
  switch (data.weather[0].main) {
    case "Clear":
      icon = <IoMdSunny />;
      break;
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Rain":
      icon = <IoMdRainy />;
      break;
    case "Snow":
      icon = <IoMdSnow />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill />;
      break;
    default:
      icon = <IoMdSunny />;
  }

  const date = new Date(data.dt * 1000);

  return (
    <div className="flex flex-col items-center justify-center h-full pt-10">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`${
          animate ? "animate-spin" : "animate-none"
        } h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8`}
      >
        <div className="h-full relative flex items-center justify-between p-2">
          <input
            onChange={(e) => handleInputValue(e)}
            className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
            type="text"
            placeholder="Search by City or Country"
          />
          <button
            type="submit"
            className="bg-[#00bfff] w-20 h-12 rounded-full flex items-center justify-center hover:bg-cyan-700"
          >
            <IoMdSearch className="text-2xl text-white" />
          </button>
        </div>
      </form>
      {/* card */}
      <div className="w-full max-w-[450px] bg-black/60 min-h-fit text-white backdrop-blur-[32px] rounded-[16px] py-8 px-6">
        <div>
          {/* card top */}
          <div className="flex items-center gap-x-5 rounded-lg">
            <div className="text-[87px]">{icon}</div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold">
                {data.name}, {data.sys.country}
              </div>
              <div className="text-sm">{date.toLocaleDateString()}</div>
            </div>
          </div>
          {/* card body */}
          <div className="my-20">
            <div className="flex justify-center items-center">
              <div className="text-[144px] max-sm:text-[80px] leading-none font-light">
                {parseInt(data.main.temp)}
              </div>
              {/* celcius icon */}
              <div className="text-4xl">
                <TbTemperatureCelsius />
              </div>
            </div>
            {/* weather discription*/}
            <div className="capitalize text-center">
              {data.weather[0].description}
            </div>
          </div>
          {/* card bottom */}
          <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
            <div className="flex gap-x-6 flex-col items-center gap-y-2">
              <div className="flex justify-between">
                <div className="flex gap-y-1 max-sm:flex-col max-sm:items-center w-96 justify-between">
                  <div className="flex items-center gap-x-2">
                    {/* icon */}
                    <div className="text-[20px]">
                      <BsEye />
                    </div>
                    <div>
                      Visibility{" "}
                      <span className="ml-2">{data.visibility / 1000} Km</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {/* icon */}
                    <div className="text-[20px]">
                      <BsThermometer />
                    </div>
                    <div className="flex">
                      Feels Like{" "}
                      <div className="flex ml-2">
                        {parseInt(data.main.feels_like)}
                        <TbTemperatureCelsius />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-y-2 max-sm:flex-col max-sm:items-center w-96 justify-between">
                  <div className="flex items-center gap-x-2">
                    {/* icon */}
                    <div className="text-[20px]">
                      <BsWater />
                    </div>
                    <div>
                      Humidity
                      <span className="ml-2">{data.main.humidity} %</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    {/* icon */}
                    <div className="text-[20px]">
                      <BsWind />
                    </div>
                    <div>
                      Wind
                      <span className="ml-2">
                        {`${Math.floor(data.wind.speed * 3.6)} Km/H`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
