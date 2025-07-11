import Link from 'next/link';

interface Viewing {
  id: string;
  propertyId: string;
  propertyTitle: string;
  propertyImage: string;
  date: string;
  time: string;
  agentName: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  location: string;
}

interface UpcomingViewingsProps {
  viewings: Viewing[];
}

export default function UpcomingViewings({ viewings }: UpcomingViewingsProps) {
  const getStatusColor = (status: Viewing['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Viewings</h2>
        <div className="space-y-4">
          {viewings.map((viewing) => (
            <div
              key={viewing.id}
              className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex-shrink-0 w-24 h-24">
                <img
                  src={viewing.propertyImage}
                  alt={viewing.propertyTitle}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={`/properties/${viewing.propertyId}`}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600"
                  >
                    {viewing.propertyTitle}
                  </Link>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      viewing.status
                    )}`}
                  >
                    {viewing.status.charAt(0).toUpperCase() + viewing.status.slice(1)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{viewing.location}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {viewing.date} at {viewing.time}
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  with {viewing.agentName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 