"use client";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bei Interesse an der Wohnung oder bei Fragen zu Besichtigung,
            Mietkonditionen und Ausstattung freue ich mich über deine
            Nachricht oder deinen Anruf.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div className="space-y-8">
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
              <div className="text-sm text-gray-500 mb-2">Besonderer Vorteil</div>
              <div className="text-2xl font-semibold mb-4">
                Ideal für Klinikpersonal
              </div>
              <p className="text-gray-600 leading-7">
                Durch die fußläufige Nähe von etwa 5 Minuten zum Klinikum
                Hellersen eignet sich die Wohnung besonders für
                Mitarbeiterinnen und Mitarbeiter des Klinikums.
              </p>
            </section>

            <section className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <img
                src="/wohnung/0_balkon1_blick-tal.jpg"
                alt="Balkonblick"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-sm text-gray-500 mb-2">Wohnlage</div>
                <div className="text-2xl font-semibold mb-4">
                  Ruhig wohnen mit Blick ins Grüne
                </div>
                <p className="text-gray-600 leading-8">
                  Die Wohnung verbindet eine ruhige Lage mit Waldnähe und sehr
                  kurzen Wegen zum Klinikum Hellersen. Damit ist sie ideal für
                  alle, die entspannt wohnen und trotzdem schnell am Arbeitsort
                  sein möchten.
                </p>
              </div>
            </section>
          </div>

          <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Nachricht senden</h2>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Dein Name"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="deine@email.de"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="telefon"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Telefonnummer
                </label>
                <input
                  id="telefon"
                  name="telefon"
                  type="text"
                  placeholder="Optional"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="nachricht"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nachricht
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={7}
                  placeholder="Ich interessiere mich für die Wohnung und hätte gerne weitere Informationen."
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition"
              >
                Nachricht senden
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-5 leading-6">
              Das Formular ist aktuell als Layout vorbereitet. Falls du möchtest,
              kann ich dir im nächsten Schritt auch noch die echte
              Formularfunktion per E-Mail-Versand einbauen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}