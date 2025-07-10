import { PropertyCard } from "@/components/property/property_card";
import { supabaseClient } from "@/lib/supabaseClient";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Flats List | Stay Easy",
};

async function Page() {
  const { data, error } = await supabaseClient.from("properties").select();
  return (
    <div className="container mx-auto max-w-4xl my-4">
      <div className="grid grid-cols-2 gap-2">
        {data?.map((property) => {
          return <PropertyCard key={property.id} property={property} />;
        })}
      </div>
    </div>
  );
}

export default Page;
