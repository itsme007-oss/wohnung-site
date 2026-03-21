"use client";

import { FormEvent, useState } from "react";

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mreyvabv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Vielen Dank. Deine Nachricht wurde erfolgreich gesendet.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message:
            result?.errors?.[0]?.message ||
            "Die Nachricht konnte leider nicht gesendet werden.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
              <div className="text-sm text-gray-500 mb-2">
                Besonderer Vorteil
              </div>
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

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Neue Anfrage zur Wohnung" />
              <input type="hidden" name="_language" value="de" />

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
                  required
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
                  required
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
                  required
                  placeholder="Ich interessiere mich für die Wohnung und hätte gerne weitere Informationen."
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition disabled:opacity-60"
              >
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </button>
            </form>

            {status.type && (
              <div
                className={`mt-5 rounded-2xl px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}