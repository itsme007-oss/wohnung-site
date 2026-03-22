"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    pannellum?: {
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
            }
          >;
        }
      ) => {
        loadScene: (sceneId: string) => void;
      };
    };
  }
}

type SceneConfig = {
  title: string;
  type: string;
  panorama: string;
};

type RoomGroup = {
  id: string;
  label: string;
  firstScene: string;
  scenes: Array<{
    id: string;
    label: string;
    preview: string;
  }>;
};

const roomGroups: RoomGroup[] = [
  {
    id: "flur",
    label: "Flur",
    firstScene: "flur_1",
    scenes: [
      {
        id: "flur_1",
        label: "Flur",
        preview: "/360/0_flur.jpg",
      },
    ],
  },
  {
    id: "wohnzimmer",
    label: "Wohnzimmer",
    firstScene: "wohnzimmer_1",
    scenes: [
      {
        id: "wohnzimmer_1",
        label: "Wohnzimmer",
        preview: "/360/0_wz.jpg",
      },
    ],
  },
  {
    id: "kueche",
    label: "Küche",
    firstScene: "kueche_1",
    scenes: [
      {
        id: "kueche_1",
        label: "Küche - Ansicht 1",
        preview: "/360/0_k.jpg",
      },
      {
        id: "kueche_2",
        label: "Küche - Ansicht 2",
        preview: "/360/0_k1a.jpg",
      },
    ],
  },
  {
    id: "schlafzimmer",
    label: "Schlafzimmer",
    firstScene: "sz_1",
    scenes: [
      {
        id: "sz_1",
        label: "Schlafzimmer",
        preview: "/360/0_sz.jpg",
      },
    ],
  },
  {
    id: "bad",
    label: "Bad",
    firstScene: "dusche_1",
    scenes: [
      {
        id: "dusche_1",
        label: "Bad",
        preview: "/360/0_bad.jpg",
      },
    ],
  },
  {
    id: "balkon",
    label: "Balkon",
    firstScene: "balkon_1",
    scenes: [
      {
        id: "balkon_1",
        label: "Balkon - Nacht",
        preview: "/360/balkon_1.jpg",
      },
      {
        id: "balkon_2",
        label: "Balkon - Tag",
        preview: "/360/0_balkon.jpg",
      },
    ],
  },
  {
    id: "dg-treppe",
    label: "DG Treppe",
    firstScene: "dg_treppe",
    scenes: [
      {
        id: "dg_treppe",
        label: "DG Treppe",
        preview: "/360/0_dg_treppe.jpg",
      },
    ],
  },
  {
    id: "dg-flur",
    label: "DG Flur",
    firstScene: "dg_flur",
    scenes: [
      {
        id: "dg_flur",
        label: "DG Flur",
        preview: "/360/0_dg_flur.jpg",
      },
    ],
  },
  {
    id: "dg-room1",
    label: "DG Zimmer 1",
    firstScene: "dg_room1",
    scenes: [
      {
        id: "dg_room1",
        label: "DG Zimmer - Ansicht 1",
        preview: "/360/0_dg_z1.jpg",
      },
      {
        id: "dg_room1_a",
        label: "DG Zimmer - Ansicht 2",
        preview: "/360/0_dg_z1a.jpg",
      },
    ],
  },
  {
    id: "dg-room2",
    label: "DG Zimmer 2",
    firstScene: "dg_room2",
    scenes: [
      {
        id: "dg_room2",
        label: "DG Zimmer 2 - Ansicht 1",
        preview: "/360/0_dg_z2.jpg",
      },
      {
        id: "dg_room2_a",
        label: "DG Zimmer 2 - Ansicht 2",
        preview: "/360/0_dg_z2a.jpg",
      },
    ],
  },
  {
    id: "dg-wc",
    label: "DG WC",
    firstScene: "dg_wc",
    scenes: [
      {
        id: "dg_wc",
        label: "DG WC",
        preview: "/360/0_dg_wc.jpg",
      },
    ],
  },
];

const scenes: Record<string, SceneConfig> = {
  flur_1: {
    title: "Flur",
    type: "equirectangular",
    panorama: "/360/flur_1.jpg",
  },
  wohnzimmer_1: {
    title: "Wohnzimmer",
    type: "equirectangular",
    panorama: "/360/wohnzimmer_1.jpg",
  },
  kueche_1: {
    title: "Küche - Ansicht 1",
    type: "equirectangular",
    panorama: "/360/kueche_1.jpg",
  },
  kueche_2: {
    title: "Küche - Ansicht 2",
    type: "equirectangular",
    panorama: "/360/kueche_2.jpg",
  },
  sz_1: {
    title: "Schlafzimmer",
    type: "equirectangular",
    panorama: "/360/sz_1.jpg",
  },
  dusche_1: {
    title: "Bad",
    type: "equirectangular",
    panorama: "/360/dusche_1.jpg",
  },
  balkon_1: {
    title: "Balkon - Nacht",
    type: "equirectangular",
    panorama: "/360/balkon_1.jpg",
  },
  balkon_2: {
    title: "Balkon - Tag",
    type: "equirectangular",
    panorama: "/360/balkon_2.jpg",
  },
  dg_treppe: {
    title: "DG Treppe",
    type: "equirectangular",
    panorama: "/360/dg_treppe.jpg",
  },
  dg_flur: {
    title: "DG Flur",
    type: "equirectangular",
    panorama: "/360/dg_flur.jpg",
  },
  dg_room1: {
    title: "DG Zimmer 1 - Ansicht 1",
    type: "equirectangular",
    panorama: "/360/dg_room1.jpg",
  },
  dg_room1_a: {
    title: "DG Zimmer 1 - Ansicht 2",
    type: "equirectangular",
    panorama: "/360/dg_room1_a.jpg",
  },
  dg_room2: {
    title: "DG Zimmer 2 - Ansicht 1",
    type: "equirectangular",
    panorama: "/360/dg_room2.jpg",
  },
  dg_room2_a: {
    title: "DG Zimmer 2 - Ansicht 2",
    type: "equirectangular",
    panorama: "/360/dg_room2_a.jpg",
  },
  dg_wc: {
    title: "DG WC",
    type: "equirectangular",
    panorama: "/360/dg_wc.jpg",
  },
};

export default function PanoramaPage() {
  const viewerRef = useRef<{ loadScene: (sceneId: string) => void } | null>(
    null
  );

  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [activeRoom, setActiveRoom] = useState<RoomGroup>(
    roomGroups.find((room) => room.firstScene === "flur_1") ?? roomGroups[0]
  );
  const [activeScene, setActiveScene] = useState("flur_1");

  useEffect(() => {
    if (!scriptLoaded || !window.pannellum) return;

    const viewerElement = document.getElementById("panorama");
    if (!viewerElement) return;

    viewerElement.innerHTML = "";

    viewerRef.current = window.pannellum.viewer("panorama", {
      default: {
        firstScene: activeScene,
        sceneFadeDuration: 1000,
      },
      scenes,
    });
  }, [scriptLoaded]);

  const loadScene = (sceneId: string) => {
    if (!viewerRef.current) return;

    viewerRef.current.loadScene(sceneId);
    setActiveScene(sceneId);

    const foundRoom = roomGroups.find((room) =>
      room.scenes.some((scene) => scene.id === sceneId)
    );

    if (foundRoom) {
      setActiveRoom(foundRoom);
    }
  };

  const selectRoom = (room: RoomGroup) => {
    setActiveRoom(room);
    loadScene(room.firstScene);
  };

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
      />

      <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">
            360° Rundgang
          </h1>

          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Wähle unten einen Raum. Links daneben findest du die verfügbaren
            360°-Ansichten des aktuell gewählten Raums.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-6 items-start">
            <aside className="bg-gray-50 rounded-2xl p-4 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">{activeRoom.label}</h2>

              <div className="flex flex-col gap-4">
                {activeRoom.scenes.map((scene) => {
                  const isActive = activeScene === scene.id;

                  return (
                    <button
                      key={scene.id}
                      onClick={() => loadScene(scene.id)}
                      className={`w-full overflow-hidden rounded-2xl border text-left transition shadow-sm ${
                        isActive
                          ? "border-black ring-2 ring-black"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                        <img
                          src={scene.preview}
                          alt={scene.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`px-4 py-3 text-sm font-medium ${
                          isActive
                            ? "bg-black text-white"
                            : "bg-white text-gray-900"
                        }`}
                      >
                        {scene.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <div id="panorama" style={{ width: "100%", height: "520px" }} />
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Räume</h2>

            <div className="flex flex-wrap gap-3">
              {roomGroups.map((room) => {
                const isActive = activeRoom.id === room.id;

                return (
                  <button
                    key={room.id}
                    onClick={() => selectRoom(room)}
                    className={`px-4 py-2 rounded-full transition ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }`}
                  >
                    {room.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}