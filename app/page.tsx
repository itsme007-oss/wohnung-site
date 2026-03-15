export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">

		<video
		  autoPlay
		  muted
		  loop
		  className="absolute w-full h-full object-cover"
		>
		  <source src="/wohnung/10_kueche_vid.mp4" type="video/mp4" />
		</video>

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

      {/* FAKTEN */}
      <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-3xl shadow-xl p-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">Wohnfläche</p>
            <p className="text-2xl font-bold">75 m²</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Zimmer</p>
            <p className="text-2xl font-bold">2</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Kaltmiete</p>
            <p className="text-2xl font-bold">850 €</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Nebenkosten</p>
            <p className="text-2xl font-bold">250 €</p>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Über die Wohnung
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Diese moderne 2‑Zimmer‑Wohnung liegt in einer angenehm, ruhigen Wohngegend 
		  in fußläufiger Nähe zum Klinikum Lüdenschedi Hellersen und
		  überzeugt durch einen hellen, modernen Wohnbereich mit viel Tageslicht.
		  
		  Die Wohnung ist mit einer hochwertigen Einbauküche ausgestattet
		  und verfügt über ein modernes Duschbad im nordischen Stil.

		  Der sonnige Balkon bietet einen schönen Blick ins Bremecketal 
		  – ideal, um den Morgen bei einem entspannten Frühstück zu genießen.

		  Zur weiteren Ausstattung gehören eine moderne Türsprechanlage von Metzler
		  mit Außenkameras sowie eine Garage mit elektrischem Toröffner. 
		  Zusätzlich stehen zwei große, beheizte Abstellräume im Dachgeschoss zur Verfügung.
		  
        </p>

      </section>


    </main>
  );
}