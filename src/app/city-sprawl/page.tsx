"use client";

export default function CitySprawlLanding() {
  return (
    <main
      className="min-h-screen px-6 py-16 text-gray-200"
      style={{ backgroundColor: "rgb(26, 26, 26)" }}
    >
      <div className="pt-24 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          City Lights 2030: Forecasting U.S. Urban Expansion
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          A predictive analysis on the future of urbanization across the US
        </p>

        <div className="mb-10">
          <a
            href="/documents/city-sprawl-summary.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-200 transition"
          >
            View full Research Report (PDF)
          </a>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/city-sprawl/texas"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition"
          >
            Select State
          </a>
        </div>
      </div>
    </main>
  );
}

