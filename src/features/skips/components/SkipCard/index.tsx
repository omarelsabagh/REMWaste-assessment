import type { Skip } from '../../api/skipsService';

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full ${
        isSelected ? 'ring-2 ring-blue-500 ring-offset-4' : ''
      }`}
    >
      {skip.imageUrl && (
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={skip.imageUrl}
            alt={`${skip.size} yard skip`}
            className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{skip.size} Yard Skip</h2>
        <div className="space-y-3 flex-grow">
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Hire Period: {skip.hire_period_days} days</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Postcode: {skip.postcode}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span>Area: {skip.area || 'N/A'}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {skip.allowed_on_road && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Road Allowed
              </span>
            )}
            {skip.allows_heavy_waste && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Heavy Waste
              </span>
            )}
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                £{skip.price_before_vat.toFixed(2)}
                <span className="text-sm text-gray-500 ml-1">+ VAT</span>
              </p>
              <p className="text-sm text-gray-500">
                Total with VAT: £{(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)}
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelect(skip)}
            className={`w-full mt-4 py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] ${
              isSelected
                ? 'bg-blue-100 text-blue-800 hover:bg-blue-200 border-2 border-blue-500'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {isSelected ? 'Selected' : 'Select Skip'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkipCard;
