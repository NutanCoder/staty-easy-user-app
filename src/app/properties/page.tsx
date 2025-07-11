import { PropertyCard } from "@/components/property/property_card";
import { ROUTES } from "@/lib/routes/routes";
import { supabaseServer } from "@/lib/supabaseServer";
import Link from "next/link";

export const metadata = {
  title: "Properties | Staty Easy",
  description: "Browse through our collection of properties for rent and sale",
};

export default async function PropertiesPage() {
  const { data: properties, error } = await supabaseServer
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch properties");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
        <div className="flex gap-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">All Types</option>
            <option value="rent">For Rent</option>
            <option value="sale">For Sale</option>
            <option value="pg">PG/Co-living</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">Price Range</option>
            <option value="0-5000">₹0 - ₹5,000</option>
            <option value="5000-10000">₹5,000 - ₹10,000</option>
            <option value="10000-20000">₹10,000 - ₹20,000</option>
            <option value="20000+">₹20,000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={ROUTES.PROPERTIES.DETAIL(property.id)}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <PropertyCard property={property} />
          </Link>
        ))}
      </div>

      {properties.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
          <p className="mt-2 text-sm text-gray-500">
            Try adjusting your filters or check back later for new listings.
          </p>
        </div>
      )}
    </div>
  );
}
