import { PropertyCard } from "../property/property_card";

interface Property {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  viewedAt: string;
}

interface RecentlyViewedProps {
  properties: Property[];
}

export default function RecentlyViewed({ properties }: RecentlyViewedProps) {
  return (
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recently Viewed</h2>
        <div className="grid grid-cols-2 gap-4">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              defaultImageUrl={property.imageUrl}
            />
          ))}
        </div>
      </div>
  );
} 