function Footer() {
  return (
    <div className="p-6 mt-1 flex justify-between items-center max-w-2xl mx-auto">
      <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Previous Step
      </button>
      <button
        className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center ${'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
      >
        Continue to Next Step
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Footer;
