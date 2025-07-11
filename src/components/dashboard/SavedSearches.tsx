import { ROUTES } from "@/lib/routes/routes";
import Link from "next/link";

interface SavedSearch {
  id: string;
  name: string;
  criteria: {
    location: string;
    minPrice?: number;
    maxPrice?: number;
    propertyType?: string;
    bedrooms?: number;
  };
  alertEnabled: boolean;
  matchCount: number;
  lastChecked: string;
}

interface SavedSearchesProps {
  searches: SavedSearch[];
}

export default function SavedSearches({ searches }: SavedSearchesProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Saved Searches
          </h2>
          <Link
            href={ROUTES.HOME}
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            New search →
          </Link>
        </div>
        <div className="space-y-4">
          {searches.map((search) => (
            <div
              key={search.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition duration-150"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {search.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {search.criteria.location}
                    {search.criteria.minPrice &&
                      ` • $${search.criteria.minPrice.toLocaleString()}`}
                    {search.criteria.maxPrice &&
                      ` - $${search.criteria.maxPrice.toLocaleString()}`}
                    {search.criteria.propertyType &&
                      ` • ${search.criteria.propertyType}`}
                    {search.criteria.bedrooms &&
                      ` • ${search.criteria.bedrooms} bed`}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      search.alertEnabled ? "bg-blue-600" : "bg-gray-200"
                    }`}
                    role="switch"
                    aria-checked={search.alertEnabled}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        search.alertEnabled ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <p className="text-gray-500">
                  {search.matchCount} matches • Last checked{" "}
                  {search.lastChecked}
                </p>
                <Link
                  href={`${ROUTES.PROPERTIES}?${new URLSearchParams(
                    search.criteria as any
                  ).toString()}`}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  View results
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
