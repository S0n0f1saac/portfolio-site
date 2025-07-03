export default function CitySprawl() {
  return (
    <main className="min-h-screen px-6 py-16 bg-white text-gray-900">
      <div className="pt-24 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Urban Sprawl</h1>
        <p className="text-lg text-gray-700 mb-4">
          This project explores urban expansion using nighttime satellite imagery. It visualizes city growth over time using simplified, visually appealing maps powered by the Google Earth Engine.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The goal was to reflect the pace and patterns of sprawl using light intensity as a proxy, avoiding the complexity of traditional Landsat data.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The final product includes animated maps and summary stats to clearly communicate urbanization trends.
        </p>
      </div>
    </main>
  );
}
