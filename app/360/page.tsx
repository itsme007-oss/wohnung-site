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

type HotSpot = {
  pitch: number;
  yaw: number;
  type: string;
  text: string;
  sceneId: string;
};

type SceneConfig = {
  title: string;
  type: string;
  panorama: string;
  hotSpots?: HotSpot[];
};

type RoomGroup = {
  id: string;
  label: string;
  firstScene: string;
  scenes: Array<{
    id: string;
    label: string;
  }>;
};

const roomGroups: RoomGroup[] = [
  {
    id: "eingang",
    label: "Eingang",
    firstScene: "eingang_1",
    scenes: [{ id: "eingang_1", label: "Eingang" }],
  },
  {
    id: "flur",
    label: "Flur",
    firstScene: "flur_1",
    scenes: [{ id: "flur_1", label: "Flur" }],
  },
  {
    id: "wohnzimmer",
    label: "Wohnzimmer",
    firstScene: "wohnzimmer_1",
    scenes: [
      { id: "wohnzimmer_1", label: "Wohnzimmer 1" },
      { id: "wohnzimmer_2", label: "Wohnzimmer 2" },
    ],
  },
  {
    id: "kueche",
    label: "Küche",
    firstScene: "kueche_1",
    scenes: [
      { id: "kueche_1", label: "Küche 1" },
      { id: "kueche_2", label: "Küche 2" },
      { id: "kueche_3", label: "Küche 3" },
      { id: "kueche_4", label: "Küche 4" },
    ],
  },
  {
    id: "schlafzimmer",
    label: "Schlafzimmer",
    firstScene: "sz_1",
    scenes: [
      { id: "sz_1", label: "Schlafzimmer 1" },
      { id: "sz_2", label: "Schlafzimmer 2" },
    ],
  },
  {
    id: "bad",
    label: "Bad",
    firstScene: "dusche_1",
    scenes: [
      { id: "dusche_1", label: "Bad 1" },
      { id: "dusche_2", label: "Bad 2" },
      { id: "dusche_3", label: "Bad 3" },
    ],
  },
  {
    id: "balkon",
    label: "Balkon",
    firstScene: "balkon_1",
    scenes: [
      { id: "balkon_1", label: "Balkon 1" },
      { id: "balkon_2", label: "Balkon 2" },
    ],
  },
  {
    id: "dg-treppe",
    label: "DG Treppe",
    firstScene: "dg_treppe",
    scenes: [{ id: "dg_treppe", label: "DG Treppe" }],
  },
  {
    id: "dg-flur",
    label: "DG Flur",
    firstScene: "dg_flur",
    scenes: [{ id: "dg_flur", label: "DG Flur" }],
  },
  {
    id: "dg-room1",
    label: "DG Room 1",
    firstScene: "dg_room1",
    scenes: [
      { id: "dg_room1", label: "DG Room 1" },
      { id: "dg_room1_a", label: "DG Room 1A" },
    ],
  },
  {
    id: "dg-room2",
    label: "DG Room 2",
    firstScene: "dg_room2",
    scenes: [
      { id: "dg_room2", label: "DG Room 2" },
      { id: "dg_room2_a", label: "DG Room 2A" },
    ],
  },
];

const scenes: Record<string, SceneConfig> = {
  eingang_1: {
    title: "Eingang",
    type: "equirectangular",
    panorama: "/360/eingang_1.jpg",
    hotSpots: [
      {
        pitch: 0,
        yaw: 50,
        type: "scene",
        text: "Flur",
        sceneId: "flur_1",
      },
    ],
  },

  flur_1: {
    title: "Flur",
    type: "equirectangular",
    panorama: "/360/flur_1.jpg",
    hotSpots: [
      {
        pitch: 0,
        yaw: 30,
        type: "scene",
        text: "Wohnzimmer",
        sceneId: "wohnzimmer_1",
      },
      {
        pitch: 0,
        yaw: -40,
        type: "scene",
        text: "Schlafzimmer",
        sceneId: "sz_1",
      },
      {
        pitch: -2,
        yaw: 140,
        type: "scene",
        text: "Eingang",
        sceneId: "eingang_1",
      },
      {
        pitch: -4,
        yaw: -120,
        type: "scene",
        text: "DG Treppe",
        sceneId: "dg_treppe",
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
        text: "Wohnzimmer 2",
        sceneId: "wohnzimmer_2",
      },
      {
        pitch: 0,
        yaw: -60,
        type: "scene",
        text: "Küche",
        sceneId: "kueche_1",
      },
      {
        pitch: 0,
        yaw: 150,
        type: "scene",
        text: "Flur",
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
        text: "Balkon",
        sceneId: "balkon_1",
      },
      {
        pitch: 0,
        yaw: 120,
        type: "scene",
        text: "Wohnzimmer 1",
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
        text: "Wohnzimmer",
        sceneId: "wohnzimmer_1",
      },
      {
        pitch: 0,
        yaw: 20,
        type: "scene",
        text: "Küche 2",
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
        text: "Küche 1",
        sceneId: "kueche_1",
      },
      {
        pitch: 0,
        yaw: 20,
        type: "scene",
        text: "Küche 3",
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
        text: "Küche 2",
        sceneId: "kueche_2",
      },
      {
        pitch: 0,
        yaw: 20,
        type: "scene",
        text: "Küche 4",
        sceneId: "kueche_4",
      },
    ],
  },

  kueche_4: {
    title: "Küche 4",
    type: "equirectangular",
    panorama: "/360/kueche_4.jpg",
    hotSpots: [
      {
        pitch: 0,
        yaw: 130,
        type: "scene",
        text: "Küche 3",
        sceneId: "kueche_3",
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
        text: "Schlafzimmer 2",
        sceneId: "sz_2",
      },
      {
        pitch: 0,
        yaw: 120,
        type: "scene",
        text: "Flur",
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
        text: "Schlafzimmer 1",
        sceneId: "sz_1",
      },
    ],
  },

  dusche_1: {
    title: "Bad 1",
    type: "equirectangular",
    panorama: "/360/dusche_1.jpg",
    hotSpots: [
      {
        pitch: 0,
        yaw: 30,
        type: "scene",
        text: "Bad 2",
        sceneId: "dusche_2",
      },
    ],
  },

  dusche_2: {
    title: "Bad 2",
    type: "equirectangular",
    panorama: "/360/dusche_2.jpg",
    hotSpots: [
      {
        pitch: 0,
        yaw: 130,
        type: "scene",
        text: "Bad 1",
        sceneId: "dusche_1",
      },
      {
        pitch: 0,
        yaw: 20,
        type: "scene",
        text: "Bad 3",
        sceneId: "dusche_3",
      },
    ],
  },

  dusche_3: {
    title: "Bad 3",
    type: "equirectangular",
    panorama: "/360/dusche_3.jpg",
    hotSpots: [
      {
        pitch: 0,
        yaw: 140,
        type: "scene",
        text: "Bad 2",
        sceneId: "dusche_2",
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
        text: "Balkon 2",
        sceneId: "balkon_2",
      },
      {
        pitch: 0,
        yaw: 110,
        type: "scene",
        text: "Wohnzimmer",
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
        text: "Balkon 1",
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
        text: "Flur",
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
        text: "DG Treppe",
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
        text: "Room 1A",
        sceneId: "dg_room1_a",
      },
      {
        pitch: 0,
        yaw: 130,
        type: "scene",
        text: "DG Flur",
        sceneId: "dg_flur",
      },
    ],
  },

  dg_room1_a: {
    title: "DG Room 1A",
    type: "equirectangular",
    panorama: "/360/dg_room1_a.jpg",
    hotSpots: [
      {
        pitch: 0,
        yaw: 140,
        type: "scene",
        text: "Room 1",
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
        text: "Room 2A",
        sceneId: "dg_room2_a",
      },
      {
        pitch: 0,
        yaw: 130,
        type: "scene",
        text: "DG Flur",
        sceneId: "dg_flur",
      },
    ],
  },

  dg_room2_a: {
    title: "DG Room 2A",
    type: "equirectangular",
    panorama: "/360/dg_room2_a.jpg",
    hotSpots: [
      {
        pitch: 0,
        yaw: 140,
        type: "scene",
        text: "Room 2",
        sceneId: "dg_room2",
      },
    ],
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
            Wähle unten einen Raum. Links erscheinen die zugehörigen 360°-
            Ansichten des aktuell gewählten Raums.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-6 items-start">
            <aside className="bg-gray-50 rounded-2xl p-4 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">{activeRoom.label}</h2>

              <div className="flex flex-col gap-3">
                {activeRoom.scenes.map((scene) => {
                  const isActive = activeScene === scene.id;

                  return (
                    <button
                      key={scene.id}
                      onClick={() => loadScene(scene.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition ${
                        isActive
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-900 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {scene.label}
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