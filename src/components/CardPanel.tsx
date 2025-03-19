"use client";
import React, { useReducer } from "react";
import Link from "next/link";
import Card from "./Card";

interface RatingMap {
  [key: string]: number;
}

type Action =
  | { type: "SET_RATING"; place: string; rating: number }
  | { type: "REMOVE_PLACE"; place: string };

const ratingReducer = (state: RatingMap, action: Action): RatingMap => {
  switch (action.type) {
    case "SET_RATING":
      return { ...state, [action.place]: action.rating };
    case "REMOVE_PLACE":
      const newState = { ...state };
      delete newState[action.place];
      return newState;
    default:
      return state;
  }
};

const venueData = [
  { vid: "001", name: "The Bloom Pavilion", img: "/img/bloom.jpg" },
  { vid: "002", name: "Spark Space", img: "/img/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", img: "/img/grandtable.jpg" },
];

const initialRatings: RatingMap = venueData.reduce((acc, venue) => {
  acc[venue.name] = 0;
  return acc;
}, {} as RatingMap);

const CardPanel: React.FC = () => {
  const [ratings, dispatch] = useReducer(ratingReducer, initialRatings);

  return (
    <div>
      <div className="flex justify-center mt-5 space-x-4">
        {venueData.map((venue) => (
          <Link key={venue.vid} href={`/venueinfo/venue/${venue.vid}`}>
            <div className="cursor-pointer">
              <Card
                place={venue.name}
                imgSrc={venue.img}
                rating={ratings[venue.name]}
                onRatingChange={(rating) =>
                  dispatch({ type: "SET_RATING", place: venue.name, rating })
                }
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5">
        {Object.entries(ratings).map(([place, rating]) => (
          <div
            key={place}
            data-testid={place}
            className="cursor-pointer"
            onClick={() => dispatch({ type: "REMOVE_PLACE", place })}
          >
            {place} Rating: {rating}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPanel;
