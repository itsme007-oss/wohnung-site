"use client";

const highlights = [
  "Ca. 5 Minuten Fußweg (Tür zu Tür) zum Klinikum Hellersen",
  "Ruhige Lage direkt am angrenzenden Waldgebiet",
  "Balkon mit schönem Ausblick",
  "Einbauküche vorhanden",
  "Garage / Stellplatz verfügbar",
  "Ideal für zeitlich begrenzten Wohnbedarf",
];

const features = [
  "2 Zimmer plus 2 zusätzliche DG-Zimmer",
  "Tageslichtbad",
  "Großzügiger, lichtdurchfluteter Schnitt",
  "kleiner Flur",
  "Gepflegtes Mehrfamilienhaus",
  "Gehobene Qualität / modernisiert",
];

const locationPoints = [
  "Nur ca. 5 Minuten Fußweg (Tür zu Tür) zum Klinikum Hellersen",
  "Ruhige Wohnlage mit Nähe zum Waldgebiet",
  "Besonders geeignet für Beschäftigte im Klinikum Hellersen",
  "Ideal für Personen mit zeitlich begrenztem Wohnbedarf",
];

function InfoRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="grid grid-cols-[160px_1fr] gap-4 py-3 border-b border-gray-100">
      <div className="text-gray-500">{label}</div>
      <div className={strong ? "font-semibold text-gray-900" : "text-gray-900"}>
        {value}
      </div>
    </div>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      {children}
    </section>
  );
}

export default function DatenPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <div className="inline-flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full bg-gray-200 text-sm font-medium">
                  Balkon
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-200 text-sm font-medium">
                  Einbauküche
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-200 text-sm font-medium">
                  Garage
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-200 text-sm font-medium">
                  Waldnähe
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Alle Daten zur Wohnung
              </h1>

              <p className="text-lg text-gray-600 max-w-3xl mb-8 leading-relaxed">
                Moderne Etagenwohnung mit Balkon, Einbauküche und zusätzlicher
                Nutzfläche im Dachgeschoss. Besonders attraktiv ist die ruhige
                Lage mit direkter Nähe zum Waldgebiet sowie die fußläufige
                Erreichbarkeit des Klinikums Hellersen in nur etwa 5 Minuten –
                tatsächlich Tür zu Tür bis zum Hauptgebäude.
              </p>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white border border-gray-200 px-4 py-3 shadow-sm"
                  >
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                <img
                  src="/wohnung/0_balkon1_blick-tal.jpg"
                  alt="Balkonblick"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">Besonderer Vorteil</div>
                  <div className="text-lg font-semibold">
                    Balkon mit ruhigem Blick ins Grüne
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                  <img
                    src="/wohnung/10_kueche_2.jpg"
                    alt="Einbauküche"
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3 text-sm font-medium">Einbauküche</div>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                  <img
                    src="/wohnung/1_wz_1.jpg"
                    alt="Wohnzimmer"
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3 text-sm font-medium">Heller Wohnbereich</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid xl:grid-cols-2 gap-8 mb-8">
          <SectionCard title="Eckdaten">
            <InfoRow label="Typ" value="Etagenwohnung" />
            <InfoRow label="Etage" value="2 von 2" strong />
            <InfoRow label="Zimmer" value="2 (+ 2 DG Zimmer)" strong />
            <InfoRow label="Schlafzimmer" value="1" />
            <InfoRow label="Badezimmer" value="1" />
            <InfoRow label="Wohnfläche ca." value="71,5 qm" strong />
            <InfoRow label="Nutzfläche ca." value="71,5 qm" strong />
            <InfoRow label="Bezugsfrei ab" value="ab sofort" />
            <InfoRow label="Mietdauer" value="befristet für ca. 2 Jahre" strong />
            <InfoRow label="Haustiere" value="Nach Vereinbarung" />
            <InfoRow label="Garage / Stellplatz" value="1 Garage" />
          </SectionCard>

          <SectionCard title="Kosten">
            <InfoRow label="Kaltmiete" value="850 EUR" strong />
            <InfoRow label="Nebenkosten" value="280 EUR" strong />
            <InfoRow label="Heizkosten" value="in Nebenkosten enthalten" />
            <InfoRow label="Gesamtmiete" value="1130 EUR" strong />
            <InfoRow label="Kaution" value="3 KM (2250 EUR)" strong />
            <InfoRow label="Garage / Stellplatz" value="50 €" />
          </SectionCard>
        </div>

        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-8 mb-8">
          <SectionCard title="Bausubstanz & Energieausweis">
            <InfoRow label="Baujahr" value="1938" strong />
            <InfoRow label="Modernisierung / Sanierung" value="zuletzt 2026" strong />
            <InfoRow label="Ausstattung" value="gehobene Qualität" strong />
            <InfoRow label="Heizungsart" value="Gaszentralheizung" strong />
            <InfoRow label="Wesentliche Energieträger" value="Gas" />
            <InfoRow label="Energieausweis" value="liegt vor" />
            <InfoRow label="Energieausweistyp" value="Bedarfsausweis" />
            <InfoRow label="Endenergiebedarf" value="217 kWh/(m²*a)" />
            <InfoRow label="Effizienzklasse" value="G" strong />
          </SectionCard>

          <SectionCard title="Warum diese Wohnung interessant ist">
            <div className="grid gap-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-gray-50 border border-gray-200 px-4 py-4"
                >
                  <div className="font-medium">{item}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="grid xl:grid-cols-[1fr_420px] gap-8 mb-8">
          <SectionCard title="Objektbeschreibung">
            <div className="space-y-6 text-lg leading-8 text-gray-700">
              <p>
                Die Wohnung befindet sich im Obergeschoss eines gepflegten
                Zweifamilienhauses und überzeugt durch einen großzügigen,
                lichtdurchfluteten Grundriss. Der Wohnbereich wirkt offen und
                freundlich, während der Balkon einen schönen Ausblick ins Grüne
                bietet.
              </p>

              <p>
                Besonders attraktiv ist die Kombination aus klassischer Wohnung
                und zusätzlicher Nutzfläche im Dachgeschoss. Dadurch ergeben
                sich flexible Nutzungsmöglichkeiten, etwa für Homeoffice,
                Gästezimmer, Hobbyraum oder zusätzlichen Stauraum.
              </p>

              <p>
                Die vorhandene Einbauküche, die ruhige Lage und die Nähe zur
                Natur machen die Wohnung besonders angenehm für alle, die
                entspannt wohnen und dennoch kurze Wege haben möchten.
              </p>

              <p>
                Die Wohnung wird aus beruflichen Gründen befristet für ca. 2
                Jahre vermietet und im Anschluss selbst genutzt. Sie eignet sich
                daher besonders für Personen mit zeitlich begrenztem Wohnbedarf
                – zum Beispiel im Rahmen eines beruflichen Einsatzes, einer
                Ausbildung oder einer Übergangsphase.
              </p>
            </div>
          </SectionCard>

          <div className="grid gap-6">
            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-200 bg-white">
              <img
                src="/wohnung/10_kueche_1.jpg"
                alt="Küche"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="text-sm text-gray-500 mb-1">Ausstattung</div>
                <div className="text-xl font-semibold">Moderne Einbauküche</div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-200 bg-white">
              <img
                src="/wohnung/0_balkon2_markiese.jpg"
                alt="Balkon"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="text-sm text-gray-500 mb-1">Wohnqualität</div>
                <div className="text-xl font-semibold">Ruhiger Balkonbereich</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <SectionCard title="Grundrisse">
            <p className="text-lg text-gray-600 leading-8 mb-8">
              Hier findest du beide Grundrisse der Wohnung getrennt nach
              Obergeschoss und Dachgeschoss.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <div className="bg-gray-50 border-b border-gray-200 px-5 py-4">
                  <div className="text-sm text-gray-500 mb-1">Grundriss</div>
                  <div className="text-xl font-semibold">Obergeschoss</div>
                </div>
                <div className="p-5">
                  <img
                    src="/wohnung/Grundriss_OG.png"
                    alt="Grundriss Obergeschoss"
                    className="w-full h-auto object-contain bg-white rounded-2xl"
                  />
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <div className="bg-gray-50 border-b border-gray-200 px-5 py-4">
                  <div className="text-sm text-gray-500 mb-1">Grundriss</div>
                  <div className="text-xl font-semibold">Dachgeschoss</div>
                </div>
                <div className="p-5">
                  <img
                    src="/wohnung/Grundriss_DG.png"
                    alt="Grundriss Dachgeschoss"
                    className="w-full h-auto object-contain bg-white rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-8">
          <SectionCard title="Lage">
            <div className="space-y-5 text-lg leading-8 text-gray-700">
              <p>
                Ein großer Vorteil dieser Wohnung ist die fußläufige Nähe zum
                <span className="font-semibold text-gray-900">
                  {" "}Klinikum Hellersen
                </span>
                . Der Weg dorthin beträgt nur etwa{" "}
                <span className="font-semibold text-gray-900">5 Minuten</span> –
                und das tatsächlich von Tür zu Tür bis zum Hauptgebäude.
              </p>

              <p>
                Damit eignet sich die Wohnung besonders gut für Beschäftigte im
                Umfeld des Klinikums Hellersen, zum Beispiel für
                Assistenzärzte, PJ-Studierende oder Pflegekräfte, die kurze Wege
                schätzen und gleichzeitig ruhig wohnen möchten. Auch die
                unmittelbare Nähe zum angrenzenden Waldgebiet spricht für eine
                hohe Wohnqualität.
              </p>

              <p>
                Insgesamt verbindet die Lage naturnahes Wohnen, Ruhe und eine
                sehr praktische Erreichbarkeit wichtiger Ziele im Alltag. Durch
                die befristete Mietdauer ist die Wohnung zudem besonders
                interessant für Menschen in einer beruflichen oder privaten
                Übergangsphase.
              </p>
            </div>
          </SectionCard>

          <SectionCard title="Lagevorteile auf einen Blick">
            <div className="grid gap-4 mb-6">
              {locationPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-gray-50 border border-gray-200 px-4 py-4"
                >
                  <div className="font-medium">{item}</div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden border border-gray-200">
              <img
                src="/wohnung/0_balkon1_blick-tal.jpg"
                alt="Lage und Ausblick"
                className="w-full h-64 object-cover"
              />
            </div>
          </SectionCard>
        </div>
      </section>
    </main>
  );
}