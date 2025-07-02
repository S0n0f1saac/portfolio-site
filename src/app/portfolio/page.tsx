export default function Portfolio() {
  return (
    <main className="min-h-screen px-6 py-16 bg-white text-gray-900">
      <div className="pt-24">
        <h1 className="text-4xl font-bold text-center mb-12">Portfolio</h1>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ProjectCard
            title="MatchMetrics"
            description="Dashboard for delivering soccer stats to youth clubs."
          />
          <ProjectCard
            title="Find Your Football Twin"
            description="Tool to compare users to pro players based on stats."
          />
          <ProjectCard
            title="Urban Sprawl in 3 Cities"
            description="Geospatial visualizations showing city growth over time."
          />
        </div>
      </div>
    </main>
  );
}

function ProjectCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

