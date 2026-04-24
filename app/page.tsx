import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Image
        src="/wartung-wohnung.jpg"
        alt="Wohnungsanzeige wird aktualisiert"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-2xl rounded-[2rem] bg-white/90 p-10 text-center shadow-2xl backdrop-blur-md">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Wohnungsanzeige
          </p>

          <h1 className="mb-5 text-4xl font-semibold tracking-tight text-neutral-900">
            Diese Anzeige wird derzeit aktualisiert
          </h1>

          <p className="mx-auto max-w-lg text-lg leading-relaxed text-neutral-700">
            Wir überarbeiten aktuell die Informationen und Bilder zur Wohnung,
            damit Sie sich bald einen noch besseren Eindruck verschaffen können.
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-neutral-300" />

          <p className="mt-6 text-sm text-neutral-500">
            Bitte schauen Sie in Kürze wieder vorbei.
          </p>
        </div>
      </div>
    </main>
  );
}