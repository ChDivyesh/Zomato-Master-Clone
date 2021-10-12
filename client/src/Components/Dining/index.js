import React, { useState, useEffect } from "react";
// components
import DiningCarousal from "./DiningCarousal";
import RestaurantCard from "../RestaurantCard";


const Dining = () => {
  const [restaurantList1, setRestaurantList] = useState([
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26f90bcacb3caeb175479a90e1eddb2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "Samosa Party",
      cuisine: ["Street Food", "Beverages", "Tea"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456-3",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26f90bcacb3caeb175479a90e1eddb2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "Samosa Party",
      cuisine: ["Street Food", "Beverages", "Tea"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
    {
      _id: "123456-2",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name: "Al-Bek",
      cuisine: ["Mughlai", "Arabian", "North Indian", "Chinese", "Seafood"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 47,
      restaurantReviewValue: 4.1,
    },
  ]);
    return (
        <>
          <DiningCarousal />
          <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Dine-Out Restaurants in Vijay Nagar
      </h1>
      <div className="flex justify-between flex-wrap">
        {restaurantList1.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
</>

        
      );
};


export default Dining;