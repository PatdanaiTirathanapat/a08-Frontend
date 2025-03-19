import { Suspense } from "react";
import VenueCatalog from "@/components/VenueCatalog";
import LinearProgress from "@mui/material/LinearProgress";

export default function VenuePage() {
  return (
    <div>
      <h1>Venue List</h1>
      <Suspense fallback={<LinearProgress />}>
        <VenueCatalog />
      </Suspense>
    </div>
  );
}
