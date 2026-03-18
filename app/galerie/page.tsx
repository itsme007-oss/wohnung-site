"use client";

import { useMemo, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  room: string;
  title: string;
  type?: "image" | "video";
  poster?: string;
};

const items: GalleryItem[] = [
  {
    src: "/wohnung/00_eingang.jpg",
    alt: "Eingang",
    room: "Eingang",
    title: "Eingang",
  },

  {
    src: "/wohnung/0_balkon_1.jpg",
    alt: "Balkon Ansicht 1",
    room: "Balkon",
    title: "Balkon 1",
  },
  {
    src: "/wohnung/0_balkon_2.jpg",
    alt: "Balkon Ansicht 2",
    room: "Balkon",
    title: "Balkon 2",
  },
  {
    src: "/wohnung/0_balkon1_blick-tal.jpg",
    alt: "Balkon Blick ins Tal",
    room: "Balkon",
    title: "Balkonblick ins Tal",
  },
  {
    src: "/wohnung/0_balkon2_markiese.jpg",
    alt: "Balkon mit Markise",
    room: "Balkon",
    title: "Balkon mit Markise",
  },
  {
    src: "/wohnung/0_balkon3_markiese2.jpg",
    alt: "Balkon mit Markise zweite Ansicht",
    room: "Balkon",
    title: "Balkon zweite Markisenansicht",
  },

  {
    src: "/wohnung/1_wz_1.jpg",
    alt: "Wohnzimmer 1",
    room: "Wohnzimmer",
    title: "Wohnzimmer 1",
  },
  {
    src: "/wohnung/1_wz_2.jpg",
    alt: "Wohnzimmer 2",
    room: "Wohnzimmer",
    title: "Wohnzimmer 2",
  },
  {
    src: "/wohnung/1_wz_3.jpg",
    alt: "Wohnzimmer 3",
    room: "Wohnzimmer",
    title: "Wohnzimmer 3",
  },
  {
    src: "/wohnung/1_wz_4.jpg",
    alt: "Wohnzimmer 4",
    room: "Wohnzimmer",
    title: "Wohnzimmer 4",
  },

  {
    src: "/wohnung/2_Flur_1_.jpg",
    alt: "Flur",
    room: "Flur",
    title: "Flur",
  },

  {
    src: "/wohnung/3_bad_1.jpg",
    alt: "Bad 1",
    room: "Bad",
    title: "Bad 1",
  },
  {
    src: "/wohnung/3_bad_2.jpg",
    alt: "Bad 2",
    room: "Bad",
    title: "Bad 2",
  },
  {
    src: "/wohnung/3_bad_3.jpg",
    alt: "Bad 3",
    room: "Bad",
    title: "Bad 3",
  },
  {
    src: "/wohnung/3_bad_7.jpg",
    alt: "Bad 4",
    room: "Bad",
    title: "Bad 4",
  },

  {
    src: "/wohnung/4_sz_1.jpg",
    alt: "Schlafzimmer 1",
    room: "Schlafzimmer",
    title: "Schlafzimmer 1",
  },
  {
    src: "/wohnung/4_sz_2.jpg",
    alt: "Schlafzimmer 2",
    room: "Schlafzimmer",
    title: "Schlafzimmer 2",
  },

  {
    src: "/wohnung/5_dg_flur.jpg",
    alt: "Dachgeschoss Flur",
    room: "Dachgeschoss",
    title: "DG Flur",
  },

  {
    src: "/wohnung/6_dg_room1_1.jpg",
    alt: "Dachgeschoss Raum 1 Ansicht 1",
    room: "Dachgeschoss",
    title: "DG Raum 1 - Ansicht 1",
  },
  {
    src: "/wohnung/6_dg_room1_2.jpg",
    alt: "Dachgeschoss Raum 1 Ansicht 2",
    room: "Dachgeschoss",
    title: "DG Raum 1 - Ansicht 2",
  },

  {
    src: "/wohnung/7_dg_wc_1.jpg",
    alt: "Dachgeschoss WC 1",
    room: "Dachgeschoss",
    title: "DG WC 1",
  },
  {
    src: "/wohnung/7_dg_wc_2.jpg",
    alt: "Dachgeschoss WC 2",
    room: "Dachgeschoss",
    title: "DG WC 2",
  },

  {
    src: "/wohnung/8_dg_room2_1.jpg",
    alt: "Dachgeschoss Raum 2 Ansicht 1",
    room: "Dachgeschoss",
    title: "DG Raum 2 - Ansicht 1",
  },
  {
    src: "/wohnung/8_dg_room2_2.jpg",
    alt: "Dachgeschoss Raum 2 Ansicht 2",
    room: "Dachgeschoss",
    title: "DG Raum 2 - Ansicht 2",
  },
  {
    src: "/wohnung/8_dg_room2_3.jpg",
    alt: "Dachgeschoss Raum 2 Ansicht 3",
    room: "Dachgeschoss",
    title: "DG Raum 2 - Ansicht 3",
  },

  {
    src: "/wohnung/9_metzler1_1.jpg",
    alt: "Türsprechanlage 1",
    room: "Technik",
    title: "Türsprechanlage 1",
  },
  {
    src: "/wohnung/9_metzler1_2.jpg",
    alt: "Türsprechanlage 2",
    room: "Technik",
    title: "Türsprechanlage 2",
  },
  {
    src: "/wohnung/9_metzler1_3.jpg",
    alt: "Türsprechanlage 3",
    room: "Technik",
    title: "Türsprechanlage 3",
  },
  {
    src: "/wohnung/9_metzler1_4.jpg",
    alt: "Türsprechanlage 4",
    room: "Technik",
    title: "Türsprechanlage 4",
  },
  {
    src: "/wohnung/9_metzler1_5.jpg",
    alt: "Türsprechanlage 5",
    room: "Technik",
    title: "Türsprechanlage 5",
  },

  {
    src: "/wohnung/10_kueche_1.jpg",
    alt: "Küche 1",
    room: "Küche",
    title: "Küche 1",
  },
  {
    src: "/wohnung/10_kueche_2.jpg",
    alt: "Küche 2",
    room: "Küche",
    title: "Küche 2",
  },
  {
    src: "/wohnung/10_kueche_3.jpg",
    alt: "Küche 3",
    room: "Küche",
    title: "Küche 3",
  },
  {
    src: "/wohnung/10_kueche_4.jpg",
    alt: "Küche 4",
    room: "Küche",
    title: "Küche 4",
  },
  {
    src: "/wohnung/10_kueche_5.jpg",
    alt: "Küche 5",
    room: "Küche",
    title: "Küche 5",
  },
  {
    src: "/wohnung/10_kueche_6.jpg",
    alt: "Küche 6",
    room: "Küche",
    title: "Küche 6",
  },
  {
    src: "/wohnung/10_kueche_7.jpg",
    alt: "Küche 7",
    room: "Küche",
    title: "Küche 7",
  },
  {
    src: "/wohnung/10_kueche_8.jpg",
    alt: "Küche 8",
    room: "Küche",
    title: "Küche 8",
  },
  {
    src: "/wohnung/10_kueche_9.jpg",
    alt: "Küche 9",
    room: "Küche",
    title: "Küche 9",
  },
  {
    src: "/wohnung/10_kueche_10.jpg",
    alt: "Küche 10",
    room: "Küche",
    title: "Küche 10",
  },
  {
    src: "/wohnung/10_kueche_11.jpg",
    alt: "Küche 11",
    room: "Küche",
    title: "Küche 11",
  },
  {
    src: "/wohnung/10_kueche_12.jpg",
    alt: "Küche 12",
    room: "Küche",
    title: "Küche 12",
  },
  {
    src: "/wohnung/10_kueche_13.jpg",
    alt: "Küche 13",
    room: "Küche",
    title: "Küche 13",
  },
  {
    src: "/wohnung/Rundgang_OG.wmv",
    alt: "Rundgang_OG",
    room: "Eingang",
    title: "Rundgang OG",
    type: "video",
    poster: "/wohnung/Grundriss_OG.png",
  },

  {
    src: "/wohnung/Grundriss_OG.png",
    alt: "Grundriss OG",
    room: "Grundriss",
    title: "Grundriss OG",
  },
  
   {
    src: "/wohnung/Grundriss_DG.png",
    alt: "Grundriss DG",
    room: "Grundriss",
    title: "Grundriss DG",
  }, 
 
  
  
  
  
  
];

const categories = [
  "Alle",
  "Eingang",
  "Balkon",
  "Wohnzimmer",
  "Flur",
  "Bad",
  "Schlafzimmer",
  "Dachgeschoss",
  "Küche",
  "Technik",
  "Grundriss",
];

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Alle") return items;
    return items.filter((item) => item.room === activeCategory);
  }, [activeCategory]);

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Galerie</h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Wähle einen Bereich aus, um dir gezielt die Bilder und Videos der
          Wohnung anzusehen.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 rounded-full transition ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">{activeCategory}</h2>
          <p className="text-gray-600">
            {filteredItems.length} Eintrag
            {filteredItems.length === 1 ? "" : "e"} angezeigt
          </p>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <button
                key={item.src}
                onClick={() => openLightbox(index)}
                className="group text-left rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  {item.type === "video" ? (
                    <>
                      <video
                        className="w-full h-full object-cover"
                        poster={item.poster}
                        muted
                        playsInline
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-2xl">
                          ▶
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
                    />
                  )}
                </div>

                <div className="p-5">
                  <div className="text-sm text-gray-500 mb-1">{item.room}</div>
                  <div className="text-lg font-semibold">{item.title}</div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-16">
            Für diesen Bereich sind aktuell keine Bilder vorhanden.
          </div>
        )}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full"
            >
              Schließen
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={showPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/25 text-white w-12 h-12 rounded-full text-2xl"
                >
                  ‹
                </button>

                <button
                  onClick={showNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/25 text-white w-12 h-12 rounded-full text-2xl"
                >
                  ›
                </button>
              </>
            )}

            <div className="rounded-3xl overflow-hidden bg-white shadow-2xl">
              <div className="bg-black">
                {selectedItem.type === "video" ? (
                  <video
                    className="w-full max-h-[78vh] object-contain mx-auto"
                    controls
                    autoPlay
                    playsInline
                  >
                    <source src={selectedItem.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full max-h-[78vh] object-contain mx-auto"
                  />
                )}
              </div>

              <div className="p-5 bg-white">
                <div className="text-sm text-gray-500 mb-1">
                  {selectedItem.room}
                </div>
                <div className="text-xl font-semibold">
                  {selectedItem.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}