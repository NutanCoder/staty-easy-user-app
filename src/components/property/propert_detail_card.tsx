import clsx from "clsx";

export default function PropertyDetailCard(props: any) {
  const { property, defaultImageUrl } = props;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-700 border-green-500";
      case "sold":
        return "bg-red-100 text-red-700 border-red-500";
      case "rented":
        return "bg-yellow-100 text-yellow-700 border-yellow-500";
      default:
        return "bg-gray-200 text-gray-700 border-gray-400";
    }
  };

  return (
    <div className="rounded-lg shadow overflow-hidden bg-white">
      {/* Image + Buttons */}
      <img
        src={property.imageUrl || defaultImageUrl}
        alt={property.title}
        className="w-full h-[400px] object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1 className="text-2xl font-bold">{property.title}</h1>
          <span
            className={clsx(
              "text-sm font-semibold px-3 py-1 rounded-full border",
              getStatusStyle(property.status)
            )}
          >
            {property.status}
          </span>
        </div>

        <p className="text-gray-700 mb-4">{property.description}</p>

        <hr className="my-4" />

        {/* Location Details */}
        <h2 className="text-lg font-semibold mb-2">Location Details</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-base">
              {property.address_line1}
              {property.address_line2 && (
                <>
                  <br />
                  {property.address_line2}
                </>
              )}
            </p>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-base">
              {property.city}, {property.state} {property.postal_code}
              <br />
              {property.country}
            </p>
          </div>
        </div>

        {/* Amenities */}
        {property.amenities && property.amenities.length > 0 && (
          <>
            <hr className="my-4" />
            <h2 className="text-lg font-semibold mb-2">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity: string) => (
                <span
                  key={amenity}
                  className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
