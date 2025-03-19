"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getVenue } from "@/libs/getVenue";

export default function VenueDetail() {
  const { vid } = useParams();
  const [venue, setVenue] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (vid) {
      getVenue(vid as string)
        .then((data) => {
          setVenue(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [vid]);

  if (loading) return <h1>Loading...</h1>;
  if (!venue) return <h1>Venue not found</h1>;

  return (
    <div>
      <h1>{venue.name}</h1>
      <img src={venue.picture} alt={venue.name} />
      <p>{venue.address}, {venue.district}, {venue.province} {venue.postalcode}</p>
      <p>Daily Rate: {venue.dailyrate} THB</p>
    </div>
  );
}
