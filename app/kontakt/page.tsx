export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">

        <img
		  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
		  alt="Wohnung"
		  className="absolute w-full h-full object-cover"
		/>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-bold mb-6">
            Moderne 2-Zimmer-Wohnung
          </h1>

          <p className="text-xl mb-8">
            75 m² · Balkon · Einbauküche · ruhige Lage
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full">
            ab sofort beziehbar
          </button>
        </div>

      </section>

      
	  
          {/* KONTAKT */}
      {/* KONTAKT */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besichtigung anfragen
          </h2>

          <p className="text-lg text-gray-600 mb-10">
            Wenn Sie Interesse an der Wohnung haben, senden Sie gerne eine Anfrage.
          </p>

          <form
		  
			  action="https://formspree.io/f/xjgagvvb"
			  method="POST"
			  className="bg-white rounded-2xl shadow-lg p-8 text-left space-y-6"
			>
			  <input type="hidden" name="_subject" value="Neue Wohnungsanfrage" />
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Telefon</label>
              <input
                type="tel"
                name="telefon"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                placeholder="+49 ..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-Mail</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                placeholder="ihre@email.de"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nachricht</label>
              <textarea
                name="nachricht"
                rows={5}
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                placeholder="Ich interessiere mich für die Wohnung und würde gerne einen Besichtigungstermin vereinbaren."
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}