const steps = [
  { id: 1, name: 'Postcode' },
  { id: 2, name: 'Waste Type' },
  { id: 3, name: 'Select Skip' },
  { id: 4, name: 'Permit Check' },
  { id: 5, name: 'Choose Date' },
  { id: 6, name: 'Payment' },
];

function Steps() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Progress">
          <ol role="list" className="flex items-center justify-center">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={`relative flex-1 ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-12' : ''}`}
              >
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className={`h-0.5 w-full ${step.id <= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                </div>
                <div
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                    step.id < 3
                      ? 'bg-blue-600 border-blue-600'
                      : step.id === 3
                        ? 'border-blue-600 bg-white'
                        : 'border-gray-300 bg-white'
                  } mx-auto`}
                >
                  {step.id < 3 ? (
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${step.id === 3 ? 'bg-blue-600' : 'bg-transparent'}`}
                    />
                  )}
                  <span className="sr-only">{step.name}</span>
                </div>
                <div className="mt-4 text-center">
                  <span
                    className={`text-sm font-medium ${step.id === 3 ? 'text-blue-600' : 'text-gray-500'}`}
                  >
                    {step.name}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Steps;
