import PropertyDetailCard from "@/components/property/propert_detail_card";
import { ROUTES } from "@/lib/routes/routes";
import { supabaseServer } from "@/lib/supabaseServer";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { data: property, error } = await supabaseServer
    .from("properties")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !property) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link
          href={ROUTES.PROPERTIES.LIST}
          className="text-indigo-600 hover:text-indigo-500 flex items-center"
        >
          <svg
            className="h-5 w-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Properties
        </Link>
      </div>

      <PropertyDetailCard property={property} />
    </div>
  );
}
