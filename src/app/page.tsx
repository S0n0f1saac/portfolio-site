export default function Home() {
  return (
    <main className="min-h-screen px-8 py-16 space-y-24">
      <section id="hero" className="text-center">
        <h1 className="text-4xl font-bold">Jacob Farrington</h1>
        <p className="text-xl mt-2 text-gray-600">Data Scientist</p>
      </section>

      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        {/* Add project cards here */}
      </section>

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email me at jacobfarrington@my.unt.edu</p>
      </section>
    </main>
  )
}
