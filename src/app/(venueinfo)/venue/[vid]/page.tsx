"use client";
import { useParams } from "next/navigation";

const venueDetails: Record<string, { name: string; image: string }> = {
  "001": { name: "The Bloom Pavilion", image: "/img/bloom.jpg" },
  "002": { name: "Spark Space", image: "/img/spark.jpg" },
  "003": { name: "The Grand Table", image: "/img/grand.jpg" },
};


export default function VenueDetail({ params }: { params?: { vid?: string } }) {
  const routeParams = useParams(); 
  const vid = params?.vid ?? (routeParams?.vid as string | undefined);

  if (!vid || !venueDetails[vid]) {
    return <h1>Venue not found</h1>;
  }

  const venue = venueDetails[vid];

  return (
    <div>
      <h1>{venue.name}</h1>
      <img src={venue.image} alt={venue.name} />
    </div>
  );
}
