"use client";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bei Interesse an der Wohnung oder bei Fragen zu Besichtigung,
            Mietkonditionen und Ausstattung freue ich mich über deine
            Kontaktaufnahme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
            <div className="text-sm text-gray-500 mb-2">Telefon</div>
            <div className="text-3xl font-bold mb-4">
              ☎ 02351 / 87 99 814
            </div>
            <p className="text-gray-600 leading-7">
              Gerne telefonisch melden, um weitere Informationen zu erhalten
              oder einen Besichtigungstermin abzustimmen.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
            <div className="text-sm text-gray-500 mb-2">Hinweis</div>
            <div className="text-2xl font-semibold mb-4">
              Ideal für Klinikpersonal
            </div>
            <p className="text-gray-600 leading-7">
              Durch die fußläufige Nähe von etwa 5 Minuten zum Klinikum
              Hellersen eignet sich die Wohnung besonders für Mitarbeiterinnen
              und Mitarbeiter des Klinikums.
            </p>
          </section>
        </div>

        <div className="mt-8 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <img
            src="/wohnung/0_balkon1_blick-tal.jpg"
            alt="Balkonblick"
            className="w-full h-72 object-cover"
          />
          <div className="p-8">
            <div className="text-sm text-gray-500 mb-2">Wohnlage</div>
            <div className="text-2xl font-semibold mb-4">
              Ruhig wohnen mit Blick ins Grüne
            </div>
            <p className="text-gray-600 leading-8">
              Die Wohnung verbindet eine ruhige Lage mit Waldnähe und sehr
              kurzen Wegen zum Klinikum Hellersen. Damit ist sie ideal für alle,
              die entspannt wohnen und trotzdem schnell am Arbeitsort sein
              möchten.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}