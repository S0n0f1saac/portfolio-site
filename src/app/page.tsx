export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-900">
      <Navbar />

      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Jacob Farrington</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl">
          Data Scientist and full stack developer.
        </p>
      </section>
    </main>
  );
}

function Navbar() {
  return (
    <nav className="absolute top-6 right-8 flex space-x-6 text-lg font-medium">
      <a href="#" className="hover:underline">Home</a>
      <a href="/resume.pdf" target="_blank" className="hover:underline">Resume</a>
      <a href="#portfolio" className="hover:underline">Portfolio</a>
      <a href="#contact" className="hover:underline">Contact me</a>
    </nav>
  );
}

