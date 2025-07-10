import PropertyDetailCard from "@/components/property/propert_detail_card";
import { supabaseClient } from "@/lib/supabaseClient";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { data, error } = await supabaseClient
    .from("properties")
    .select("title, description")
    .eq("id", params.id)
    .single();

  if (!data || error) {
    return {
      title: "Property Not Found",
      description: "No details found for this property.",
    };
  }

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  };
}

async function Page(props: any) {
  const randomBgUrl = `https://picsum.photos/1600/900?random=${Math.floor(
    Math.random() * 1000
  )}`;

  const { id } = props.params;
  const { data, error } = await supabaseClient
    .from("properties")
    .select()
    .eq("id", id);
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (data.length == 0) {
    return <h1>No Data Found</h1>;
  }
  const property = data[0];
  return (
    <div className="container mx-auto max-w-3xl my-4">
      <PropertyDetailCard property={property} defaultImageUrl={randomBgUrl} />
    </div>
  );
}

export default Page;
