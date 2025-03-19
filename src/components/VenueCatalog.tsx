"use client";

import React from "react";
import { getVenues } from "@/libs/getVenues";
import Card from "@/components/Card";

export default async function VenueCatalog() {
  const venuesData = await getVenues();
  return (
    <div className="venue-catalog">
      {venuesData.data.map((venue: any) => (
        <Card key={venue.id} place={venue.name} imgSrc={venue.picture} />
      ))}
    </div>
  );
}
