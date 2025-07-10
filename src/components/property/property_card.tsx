import Link from "next/link";
import { useMemo } from "react";

export function PropertyCard({ property }: any) {
  const randomBgUrl = useMemo(
    () =>
      `https://picsum.photos/1600/900?random=${Math.floor(
        Math.random() * 1000
      )}`,
    []
  );

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-700";
      case "sold":
        return "bg-red-100 text-red-700";
      case "rented":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <Link
      href={`/properties/${property.id}`}
      className="no-underline text-inherit h-full shadow"
    >
      <div className="rounded  hover:shadow-lg transition duration-200 overflow-hidden cursor-pointer">
        <img
          src={property.imageUrl || randomBgUrl}
          alt={property.title}
          className={`w-full h-72 object-cover`}
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold">{property.title}</h2>
            <span
              className={`text-xs px-2 py-1 rounded ${getStatusStyles(
                property.status
              )}`}
            >
              {property.status.charAt(0).toUpperCase() +
                property.status.slice(1)}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-1">
            <span className="mr-1">📍</span>
            {property.location}
          </div>

          <p className="text-sm text-gray-600 mb-2">
            🏠 {property.address_line1}
            {property.address_line2 && `, ${property.address_line2}`}
            <br />
            {property.city}, {property.state} {property.postal_code}
          </p>
        </div>
      </div>
    </Link>
  );
}
