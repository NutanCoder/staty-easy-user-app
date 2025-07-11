import Link from 'next/link';

interface Contact {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  rating: number;
  properties: number;
  responseTime: string;
}

interface FavoriteContactsProps {
  contacts: Contact[];
}

export default function FavoriteContacts({ contacts }: FavoriteContactsProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Favorite Agents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition duration-150"
            >
              <div className="flex-shrink-0">
                <img
                  src={contact.imageUrl}
                  alt={contact.name}
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/chat/${contact.id}`}
                  className="text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  {contact.name}
                </Link>
                <p className="text-sm text-gray-500">{contact.role}</p>
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < contact.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.585l-6.327 3.323 1.209-7.037L.172 7.282l7.046-1.024L10 0l2.782 6.258 7.046 1.024-4.71 4.589 1.209 7.037L10 15.585z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">
                    {contact.properties} properties • {contact.responseTime} response
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 