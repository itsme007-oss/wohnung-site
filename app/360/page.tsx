"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    pannellum: {
      viewer: (
        elementId: string,
        config: {
          default?: {
            firstScene?: string;
            sceneFadeDuration?: number;
          };
          scenes: Record<
            string,
            {
              title: string;
              type: string;
              panorama: string;
              hotSpots?: Array<{
                pitch: number;
                yaw: number;
                type: string;
                text: string;
                sceneId: string;
              }>;
            }
          >;
        }
      ) => {
        loadScene: (sceneId: string) => void;
      };
    };
  }
}

export default function PanoramaPage() {
  useEffect(() => {
    const initViewer = () => {
      const viewerElement = document.getElementById("panorama");
      if (!viewerElement) return;
      if (!window.pannellum) return;

      viewerElement.innerHTML = "";

      const viewer = window.pannellum.viewer("panorama", {
        default: {
          firstScene: "flur_1",
          sceneFadeDuration: 1000,
        },
        scenes: {
          eingang_1: {
            title: "Eingang",
            type: "equirectangular",
            panorama: "/360/eingang_1.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 50,
                type: "scene",
                text: "Zum Flur",
                sceneId: "flur_1",
              },
            ],
          },

          flur_1: {
            title: "Flur 1",
            type: "equirectangular",
            panorama: "/360/flur_1.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 30,
                type: "scene",
                text: "Zum Wohnzimmer",
                sceneId: "wohnzimmer_1",
              },
              {
                pitch: 0,
                yaw: -40,
                type: "scene",
                text: "Zum Schlafzimmer",
                sceneId: "sz_1",
              },
              {
                pitch: -2,
                yaw: 140,
                type: "scene",
                text: "Zum Eingang",
                sceneId: "eingang_1",
              },
              {
                pitch: 0,
                yaw: 95,
                type: "scene",
                text: "Weiter im Flur",
                sceneId: "flur_2",
              },
              {
                pitch: -4,
                yaw: -120,
                type: "scene",
                text: "Zur DG Treppe",
                sceneId: "dg_treppe",
              },
            ],
          },

          flur_2: {
            title: "Flur 2",
            type: "equirectangular",
            panorama: "/360/flur_2.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 140,
                type: "scene",
                text: "Zurück Flur",
                sceneId: "flur_1",
              },
            ],
          },

          wohnzimmer_1: {
            title: "Wohnzimmer 1",
            type: "equirectangular",
            panorama: "/360/wohnzimmer_1.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 50,
                type: "scene",
                text: "Weiter Wohnzimmer",
                sceneId: "wohnzimmer_2",
              },
              {
                pitch: 0,
                yaw: -60,
                type: "scene",
                text: "Zur Küche",
                sceneId: "kueche_1",
              },
              {
                pitch: 0,
                yaw: 150,
                type: "scene",
                text: "Zum Flur",
                sceneId: "flur_1",
              },
            ],
          },

          wohnzimmer_2: {
            title: "Wohnzimmer 2",
            type: "equirectangular",
            panorama: "/360/wohnzimmer_2.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: -30,
                type: "scene",
                text: "Zum Balkon",
                sceneId: "balkon_1",
              },
              {
                pitch: 0,
                yaw: 120,
                type: "scene",
                text: "Zurück Wohnzimmer",
                sceneId: "wohnzimmer_1",
              },
            ],
          },

          kueche_1: {
            title: "Küche 1",
            type: "equirectangular",
            panorama: "/360/kueche_1.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 90,
                type: "scene",
                text: "Zurück Wohnzimmer",
                sceneId: "wohnzimmer_1",
              },
              {
                pitch: 0,
                yaw: 20,
                type: "scene",
                text: "Weiter Küche",
                sceneId: "kueche_2",
              },
            ],
          },

          kueche_2: {
            title: "Küche 2",
            type: "equirectangular",
            panorama: "/360/kueche_2.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 130,
                type: "scene",
                text: "Zurück Küche",
                sceneId: "kueche_1",
              },
              {
                pitch: 0,
                yaw: 20,
                type: "scene",
                text: "Weiter Küche",
                sceneId: "kueche_3",
              },
            ],
          },

          kueche_3: {
            title: "Küche 3",
            type: "equirectangular",
            panorama: "/360/kueche_3.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 120,
                type: "scene",
                text: "Zurück Küche",
                sceneId: "kueche_2",
              },
            ],
          },

          sz_1: {
            title: "Schlafzimmer 1",
            type: "equirectangular",
            panorama: "/360/sz_1.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 40,
                type: "scene",
                text: "Weiter Schlafzimmer",
                sceneId: "sz_2",
              },
              {
                pitch: 0,
                yaw: 120,
                type: "scene",
                text: "Zum Flur",
                sceneId: "flur_1",
              },
            ],
          },

          sz_2: {
            title: "Schlafzimmer 2",
            type: "equirectangular",
            panorama: "/360/sz_2.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 130,
                type: "scene",
                text: "Zurück Schlafzimmer",
                sceneId: "sz_1",
              },
            ],
          },

          balkon_1: {
            title: "Balkon 1",
            type: "equirectangular",
            panorama: "/360/balkon_1.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 30,
                type: "scene",
                text: "Weiter Balkon",
                sceneId: "balkon_2",
              },
              {
                pitch: 0,
                yaw: 110,
                type: "scene",
                text: "Ins Wohnzimmer",
                sceneId: "wohnzimmer_2",
              },
            ],
          },

          balkon_2: {
            title: "Balkon 2",
            type: "equirectangular",
            panorama: "/360/balkon_2.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 140,
                type: "scene",
                text: "Zurück Balkon",
                sceneId: "balkon_1",
              },
            ],
          },

          dg_treppe: {
            title: "DG Treppe",
            type: "equirectangular",
            panorama: "/360/dg_treppe.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 120,
                type: "scene",
                text: "Zum Flur",
                sceneId: "flur_1",
              },
              {
                pitch: 0,
                yaw: 20,
                type: "scene",
                text: "DG Flur",
                sceneId: "dg_flur",
              },
            ],
          },

          dg_flur: {
            title: "DG Flur",
            type: "equirectangular",
            panorama: "/360/dg_flur.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 30,
                type: "scene",
                text: "DG Room 1",
                sceneId: "dg_room1",
              },
              {
                pitch: 0,
                yaw: -40,
                type: "scene",
                text: "DG Room 2",
                sceneId: "dg_room2",
              },
              {
                pitch: 0,
                yaw: 140,
                type: "scene",
                text: "Zur DG Treppe",
                sceneId: "dg_treppe",
              },
            ],
          },

          dg_room1: {
            title: "DG Room 1",
            type: "equirectangular",
            panorama: "/360/dg_room1.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 30,
                type: "scene",
                text: "Weiter DG Room 1",
                sceneId: "dg_room1a",
              },
              {
                pitch: 0,
                yaw: 130,
                type: "scene",
                text: "Zum DG Flur",
                sceneId: "dg_flur",
              },
            ],
          },

          dg_room1a: {
            title: "DG Room 1a",
            type: "equirectangular",
            panorama: "/360/dg_room1a.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 140,
                type: "scene",
                text: "Zurück DG Room 1",
                sceneId: "dg_room1",
              },
            ],
          },

          dg_room2: {
            title: "DG Room 2",
            type: "equirectangular",
            panorama: "/360/dg_room2.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 30,
                type: "scene",
                text: "Weiter DG Room 2",
                sceneId: "dg_room2a",
              },
              {
                pitch: 0,
                yaw: 130,
                type: "scene",
                text: "Zum DG Flur",
                sceneId: "dg_flur",
              },
            ],
          },

          dg_room2a: {
            title: "DG Room 2a",
            type: "equirectangular",
            panorama: "/360/dg_room2a.jpg",
            hotSpots: [
              {
                pitch: 0,
                yaw: 140,
                type: "scene",
                text: "Zurück DG Room 2",
                sceneId: "dg_room2",
              },
            ],
          },
        },
      });

      const buttons = document.querySelectorAll("[data-scene]");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const scene = button.getAttribute("data-scene");
          if (scene) viewer.loadScene(scene);
        });
      });
    };

    const timer = setTimeout(initViewer, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
        strategy="afterInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
      />

      <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">
            360° Rundgang
          </h1>

          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Klicke auf Hotspots im Bild oder nutze die Raum-Navigation unterhalb des Rundgangs.
          </p>

          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            <div id="panorama" style={{ width: "100%", height: "520px" }} />
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <h2 className="text-xl font-semibold mb-4">Raum-Navigation</h2>

            <div className="flex flex-wrap gap-3">
              <button data-scene="eingang_1" className="px-4 py-2 rounded-full bg-black text-white">Eingang</button>
              <button data-scene="flur_1" className="px-4 py-2 rounded-full bg-black text-white">Flur</button>
              <button data-scene="wohnzimmer_1" className="px-4 py-2 rounded-full bg-black text-white">Wohnzimmer</button>
              <button data-scene="kueche_1" className="px-4 py-2 rounded-full bg-black text-white">Küche</button>
              <button data-scene="sz_1" className="px-4 py-2 rounded-full bg-black text-white">Schlafzimmer</button>
              <button data-scene="balkon_1" className="px-4 py-2 rounded-full bg-black text-white">Balkon</button>
              <button data-scene="dg_treppe" className="px-4 py-2 rounded-full bg-black text-white">DG Treppe</button>
              <button data-scene="dg_flur" className="px-4 py-2 rounded-full bg-black text-white">DG Flur</button>
              <button data-scene="dg_room1" className="px-4 py-2 rounded-full bg-black text-white">DG Room 1</button>
              <button data-scene="dg_room2" className="px-4 py-2 rounded-full bg-black text-white">DG Room 2</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}