"use client";

import { useState } from "react";

const images = [
  { src: "/wohnung/00_eingang.jpg", alt: "Eingang" },
  { src: "/wohnung/0_balkon1_blick-tal.jpg", alt: "Balkonblick" },
  { src: "/wohnung/0_balkon2_markiese.jpg", alt: "Balkon Markise" },
  { src: "/wohnung/0_balkon3_markiese2.jpg", alt: "Balkon Markise 2" },
  { src: "/wohnung/1_wz1_links.jpg", alt: "Wohnzimmer links" },
  { src: "/wohnung/1_wz2_rechts.jpg", alt: "Wohnzimmer rechts" },
  { src: "/wohnung/2_flur_1.jpg", alt: "Flur" },
  { src: "/wohnung/3_bad_1.jpg", alt: "Bad" },
  { src: "/wohnung/3_bad_2.jpg", alt: "Bad" },
  { src: "/wohnung/3_bad_3.jpg", alt: "Bad" },
  { src: "/wohnung/3_bad_4.jpg", alt: "Bad" },
  { src: "/wohnung/4_sz_1.jpg", alt: "Schlafzimmer" },
  { src: "/wohnung/4_sz_2.jpg", alt: "Schlafzimmer" },
  { src: "/wohnung/4_sz_3.jpg", alt: "Schlafzimmer" },
  { src: "/wohnung/5_dg_flur.jpg", alt: "DG Flur" },
  { src: "/wohnung/6_dg_room1_1.jpg", alt: "DG Zimmer" },
  { src: "/wohnung/6_dg_room1_2.jpg", alt: "DG Zimmer" },
  { src: "/wohnung/7_dg_wc_1.jpg", alt: "DG WC" },
  { src: "/wohnung/7_dg_wc_2.jpg", alt: "DG WC" },
  { src: "/wohnung/8_dg_room2_1.jpg", alt: "DG Zimmer 2" },
  { src: "/wohnung/8_dg_room2_2.jpg", alt: "DG Zimmer 2" },
  { src: "/wohnung/8_dg_room2_3.jpg", alt: "DG Zimmer 2" },
  { src: "/wohnung/9_metzler1_1.jpg", alt: "Metzler" },
  { src: "/wohnung/9_metzler1_2.jpg", alt: "Metzler" },
  { src: "/wohnung/9_metzler1_3.jpg", alt: "Metzler" },
  { src: "/wohnung/9_metzler1_4.jpg", alt: "Metzler" },
  { src: "/wohnung/9_metzler1_5.jpg", alt: "Metzler" },
  { src: "/wohnung/10_kueche_1.jpg", alt: "Küche" },
  { src: "/wohnung/10_kueche_2.jpg", alt: "Küche" },
  { src: "/wohnung/10_kueche_3.jpg", alt: "Küche" }
];

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Galerie der Wohnung
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Klicke auf ein Bild, um es vergrößert anzuzeigen.
        </p>
		
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">
            Video der Wohnung
          </h2>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <video
              controls
              className="w-full h-auto bg-black"
            >
              <source src="/wohnung/10_kueche_vid.mp4" type="video/mp4" />
              Dein Browser unterstützt dieses Video nicht.
            </video>
          </div>
        </div>
		        <div className="mb-14">
          <h2 className="text-2xl font-bold text-center mb-6">
            Grundriss
          </h2>

          <div className="max-w-4xl mx-auto">
            <img
              src="/wohnung/grundriss.jpg"
              alt="Grundriss der Wohnung"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(image.src)}
              className="text-left"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover rounded-2xl hover:scale-[1.02] transition"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage}
              alt="Vergrößerte Ansicht"
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}