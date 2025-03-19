import VenueDetail from "@/components/VenueDetail";

export default function VenuePage({ params }: { params: { vid?: string } }) {
  if (!params.vid) {
    return <h1>Venue not found</h1>;
  }
  return <VenueDetail vid={params.vid} />;
}
