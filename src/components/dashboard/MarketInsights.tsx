interface MarketTrend {
  area: string;
  priceChange: number;
  averagePrice: number;
  listingsDelta: number;
  daysOnMarket: number;
}

interface MarketInsightsProps {
  trends: MarketTrend[];
}

export default function MarketInsights({ trends }: MarketInsightsProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Market Insights</h2>
        <div className="space-y-6">
          {trends.map((trend) => (
            <div key={trend.area} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">{trend.area}</h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    trend.priceChange >= 0
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {trend.priceChange >= 0 ? '+' : ''}
                  {trend.priceChange}%
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Avg. Price</p>
                  <p className="font-medium text-gray-900">
                    ${trend.averagePrice.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">New Listings</p>
                  <p className="font-medium text-gray-900">
                    {trend.listingsDelta >= 0 ? '+' : ''}
                    {trend.listingsDelta}%
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Days on Market</p>
                  <p className="font-medium text-gray-900">{trend.daysOnMarket} days</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 