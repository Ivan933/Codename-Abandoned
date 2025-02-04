TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 134,
  "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 132,
  "hfov": 360,
  "label": "Entrance",
  "class": "Panorama",
  "audios": [
   {
    "class": "PanoramaAudio",
    "id": "audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.ogg",
     "mp3Url": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.mp3"
    },
    "data": {
     "label": "ES_Castle Haunted"
    },
    "autoplay": true
   }
  ],
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
    "overlays": [
     {
      "blending": 0.08,
      "autoplay": true,
      "chromaSmoothing": 0.1,
      "id": "overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C",
      "loop": true,
      "video": {
       "class": "VideoResource",
       "height": 480,
       "width": 854,
       "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4"
      },
      "rotationX": 6.05,
      "chromaColor": "#28C034",
      "rotationY": -11.11,
      "pitch": -8.36,
      "roll": -2.59,
      "yaw": 82.05,
      "hfov": 31.49,
      "data": {
       "label": "Video"
      },
      "chromaThreshold": 0.24,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 2,
         "width": 2,
         "url": "media/overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C_t.png"
        }
       ]
      },
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "vfov": 26.38,
      "click": "eval('function addGhostHotspot() {    if (!window.tdvplayer) return;    let hotspot = new TDV.Hotspot(\"ghostHotspot\");    hotspot.setPosition(10, 0, -20); // Ajusta la posición para coincidir con el GIF    hotspot.setSize(5, 5); // Ajusta el tamaño    hotspot.setStyle({ opacity: 0 }); // Lo hace invisible    hotspot.onClick(interactWithGhost); // Llama a la función de IA    tdvplayer.addHotspot(hotspot);}function interactWithGhost() {    alert(\"👻 ¡El fantasma te habla!\"); // Aquí se integraría la IA}// Esperar a que el tour cargue y luego agregar el hotspotwindow.tdvplayer?.bind(\"tourLoaded\", addGhostHotspot);');",
      "videoVisibleOnStop": false
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0",
      "inertia": false,
      "hfov": 45.6,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "rotate": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_4488E140_4A70_EF6A_4183_1301795CB82C",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 87.85,
        "yaw": 62.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 159,
           "width": 200,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_5_1_0_map.gif"
          }
         ]
        },
        "pitch": 24.93
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_5A65D056_4A70_ED16_41A0_FC863A38AC38",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 79.24,
        "yaw": -54.22,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 122,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_6_1_0_map.gif"
          }
         ]
        },
        "pitch": 13.46
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 392,
       "width": 785,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_lq.jpeg",
       "grayscale": true
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "buttonCardboardView": "this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 132,
   "yaw": 1.63,
   "pitch": 9.95
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMax": 133,
  "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "Left Stairs",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -101.07,
    "yaw": -97.46,
    "panorama": {
     "hfovMax": 140,
     "thumbnailUrl": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_t.jpg",
     "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
     "partial": false,
     "vfov": 180,
     "pitch": 0,
     "hfovMin": 60,
     "hfov": 360,
     "label": "Second floor left hallway",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -97.46,
       "yaw": -101.07,
       "panorama": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
       "distance": 1
      }
     ],
     "class": "Panorama",
     "audios": [
      {
       "class": "PanoramaAudio",
       "id": "audio_F948C705_EDCD_812B_4196_200730E06FB8",
       "audio": {
        "class": "AudioResource",
        "oggUrl": "media/audio_F948C705_EDCD_812B_4196_200730E06FB8.ogg",
        "mp3Url": "media/audio_F948C705_EDCD_812B_4196_200730E06FB8.mp3"
       },
       "data": {
        "label": "ES_Ghosting"
       },
       "autoplay": true
      }
     ],
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_t.jpg",
       "overlays": [
        {
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_tcap0",
         "inertia": false,
         "hfov": 45.6,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "rotate": false
        },
        {
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Polygon"
         },
         "id": "overlay_F86FD138_EDCD_8159_41E2_9EB3FCB3B587",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 43.78,
           "yaw": -14.59,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 184,
              "width": 200,
              "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_0_HS_1_1_0_map.gif"
             }
            ]
           },
           "pitch": -34.01
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "blending": 0.26,
         "autoplay": false,
         "chromaSmoothing": 0.03,
         "id": "overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F",
         "loop": true,
         "video": {
          "class": "VideoResource",
          "height": 1280,
          "width": 720,
          "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4"
         },
         "rotationX": 3.96,
         "chromaColor": "#28C034",
         "rotationY": -6.13,
         "pitch": -9.06,
         "roll": -1.16,
         "yaw": 50.6,
         "hfov": 23.51,
         "data": {
          "label": "Video"
         },
         "chromaThreshold": 0.28,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 1280,
            "width": 720,
            "url": "media/overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F_t.png"
           }
          ]
         },
         "useHandCursor": true,
         "class": "VideoPanoramaOverlay",
         "vfov": 52.48,
         "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_31BAA71A_218A_82B5_41BC_115D5330062C); this.overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F.play()",
         "videoVisibleOnStop": true
        },
        {
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Polygon"
         },
         "id": "overlay_5871DA47_4A90_7D76_41C0_057CFAEE46B7",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A, this.camera_C2F93DD9_D2F3_B4A8_41D1_11877572C42C); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 76.88,
           "yaw": -101.07,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 94,
              "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_0_HS_5_1_0_map.gif"
             }
            ]
           },
           "pitch": 0.94
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2880,
          "width": 5760,
          "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 392,
          "width": 785,
          "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_lq.jpeg",
          "grayscale": true
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E.jpeg"
         }
        ]
       }
      }
     ]
    },
    "distance": 1
   }
  ],
  "class": "Panorama",
  "audios": [
   {
    "class": "PanoramaAudio",
    "id": "audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.ogg",
     "mp3Url": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.mp3"
    },
    "data": {
     "label": "ES_Dark Element 4"
    },
    "autoplay": true
   }
  ],
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "blending": 0,
      "autoplay": false,
      "chromaSmoothing": 0,
      "id": "overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC",
      "loop": false,
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "rotationX": 8.05,
      "chromaColor": "#28C034",
      "rotationY": -4.93,
      "pitch": -7.57,
      "roll": 2.67,
      "yaw": -164.61,
      "hfov": 18.88,
      "data": {
       "label": "Video"
      },
      "chromaThreshold": 0.22,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 360,
         "width": 640,
         "url": "media/overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC_t.png"
        }
       ]
      },
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "vfov": 33.31,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_2C868FAC_217A_81ED_41C0_A8FBB0843AE9); this.overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC.play()",
      "videoVisibleOnStop": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_5BD221A9_4A70_2F3B_417E_28D1D33151AF",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E, this.camera_C2F47DCB_D2F3_B4A8_41CD_0C1A13691394); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 30.73,
        "yaw": -97.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 104,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_6_1_0_map.gif"
          }
         ]
        },
        "pitch": 6.61
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_596710E9_4A90_2D3A_41C8_31F8E5DCEB1F",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 50.7,
        "yaw": 81.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 152,
           "width": 200,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_7_1_0_map.gif"
          }
         ]
        },
        "pitch": -46.71
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_FF693958_F239_495F_41E5_9CBEA4C6AE3C",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 23.64,
        "yaw": 70.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 158,
           "width": 191,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_8_1_0_map.gif"
          }
         ]
        },
        "pitch": -23.94
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 392,
       "width": 785,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_lq.jpeg",
       "grayscale": true
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 129,
   "yaw": 31.13,
   "pitch": -15.45
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
  "vfov": 180,
  "partial": false,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "Right Hallway",
  "class": "Panorama",
  "audios": [
   {
    "class": "PanoramaAudio",
    "id": "audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.ogg",
     "mp3Url": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.mp3"
    },
    "data": {
     "label": "ES_Heartbeat Slow"
    },
    "autoplay": true
   }
  ],
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "blending": 0.07,
      "autoplay": true,
      "chromaSmoothing": 0.78,
      "id": "overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F",
      "loop": true,
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4"
      },
      "rotationX": 31.76,
      "chromaColor": "#28C034",
      "rotationY": -24.56,
      "vfov": 48.94,
      "pitch": -26.98,
      "roll": -14.8,
      "yaw": 10.52,
      "hfov": 23.08,
      "data": {
       "label": "Video"
      },
      "chromaThreshold": 0.31,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 2,
         "width": 2,
         "url": "media/overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F_t.png"
        }
       ]
      },
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "videoVisibleOnStop": false
     },
     {
      "enabledInCardboard": true,
      "blending": 0,
      "autoplay": true,
      "chromaSmoothing": 0.06,
      "id": "overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE",
      "loop": true,
      "video": {
       "class": "VideoResource",
       "height": 720,
       "width": 1280,
       "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4"
      },
      "rotationX": 5.23,
      "chromaColor": "#28C034",
      "rotationY": -5.12,
      "pitch": 5.18,
      "roll": 0.64,
      "yaw": -40.31,
      "hfov": 12.07,
      "data": {
       "label": "Video"
      },
      "chromaThreshold": 0.14,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 720,
         "width": 1280,
         "url": "media/overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE_t.png"
        }
       ]
      },
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "vfov": 14.55,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_2F4764DE_217A_87AD_41B6_8D0463188316)",
      "videoVisibleOnStop": false
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_tcap0",
      "inertia": false,
      "hfov": 45.6,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "rotate": false
     },
     {
      "enabledInCardboard": true,
      "blending": 0,
      "autoplay": false,
      "chromaSmoothing": 0,
      "id": "overlay_107D7FD3_1E32_BE64_4171_11A206EF3984",
      "loop": false,
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "rotationX": 12.43,
      "chromaColor": "#28C034",
      "rotationY": -10.67,
      "pitch": -14.63,
      "roll": -4.59,
      "yaw": 127.72,
      "hfov": 24.23,
      "data": {
       "label": "Video"
      },
      "chromaThreshold": 0.24,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 360,
         "width": 640,
         "url": "media/overlay_107D7FD3_1E32_BE64_4171_11A206EF3984_t.png"
        }
       ]
      },
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "vfov": 38.22,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_2FC3DF71_2203_25B1_41A4_646DBD899EB0); this.overlay_107D7FD3_1E32_BE64_4171_11A206EF3984.play()",
      "videoVisibleOnStop": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_5B04C75A_4A70_D319_41BE_BEBD6317C3FB",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.57,
        "yaw": -22.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 38,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -6.26
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_FE2F1DEC_F24B_B7AB_41D6_59AF31B58A0B",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.28,
        "yaw": 82.49,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 39,
           "width": 42,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "pitch": 8.2
       }
      ],
      "items": [
       {
        "roll": 0,
        "yaw": 82.49,
        "hfov": 5.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 79,
           "width": 84,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 8.2
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_FF27A2DC_F285_92D1_41E2_6D70DF6C31D6",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_31BC39CA_21ED_273B_41B6_A8442F4CB200, {'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','pressedIconColor':'#888888','paddingRight':5,'iconColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconWidth':20,'pressedBorderColor':'#000000','pressedIconLineWidth':5,'pressedIconHeight':20,'paddingLeft':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverIconColor':'#666666','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'iconWidth':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingBottom':5,'rollOverIconLineWidth':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'rollOverIconHeight':20,'borderSize':0}) } else { this.showPopupMedia(this.window_D8C77494_D2F3_B4B8_41EA_0DB5C8D7C2B9, this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778, this.PlayList_DD54D099_D2F1_ECA8_41D4_283B460B67BA, '80%', '80%', true, true); this.PlayList_DD54D099_D2F1_ECA8_41D4_283B460B67BA.set('selectedIndex', 0); ; this.viewer_uidDD666080_D2F1_EC9D_41C4_FD3F1D427F9CVideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.87,
        "yaw": 82.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 46,
           "width": 46,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": 8.49
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "yaw": 82.19,
      "hfov": 5.43,
      "showDuration": 500,
      "popupMaxWidth": "80%",
      "autoplay": true,
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 638,
       "mp4Url": "media/video_311E7C9D_21ED_5D59_41B7_CD80598E3778.mp4"
      },
      "class": "PopupPanoramaOverlay",
      "id": "popup_31BC39CA_21ED_273B_41B6_A8442F4CB200",
      "loop": false,
      "popupMaxHeight": "80%",
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "hideEasing": "cubic_out",
      "rotationY": 0,
      "pitch": 8.49
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 392,
       "width": 785,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_lq.jpeg",
       "grayscale": true
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.98,
   "pitch": -8.85
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "yawDelta": -18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "yawDelta": -323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "yawDelta": -18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 135,
   "yaw": -177.38,
   "pitch": -3.98
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_FF66E78E_EDDC_8136_41EA_4F751DDC3DAE",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMax": 142,
  "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "Second floor right hallway",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "blending": 0,
      "autoplay": false,
      "chromaSmoothing": 0.06,
      "id": "overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A",
      "loop": false,
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "rotationX": 27.78,
      "chromaColor": "#28C034",
      "rotationY": 4.18,
      "pitch": -30.73,
      "roll": 6.14,
      "yaw": -78.35,
      "hfov": 38.75,
      "data": {
       "label": "Video"
      },
      "chromaThreshold": 0.19,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 360,
         "width": 640,
         "url": "media/overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A_t.png"
        }
       ]
      },
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "vfov": 74.36,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_2E5196CF_218A_83AB_41B6_B31C1C527350); this.overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A.play()",
      "videoVisibleOnStop": false
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_tcap0",
      "inertia": false,
      "hfov": 45.6,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "rotate": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_5B4CE40A_4A70_74FE_41C1_95BC8C081B22",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 35.3,
        "yaw": 81.16,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 134,
           "width": 200,
           "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -25.31
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "blending": 0.16,
      "autoplay": false,
      "chromaSmoothing": 0,
      "id": "overlay_8898042C_8783_C18B_41DA_5A18267B6637",
      "loop": false,
      "video": {
       "class": "VideoResource",
       "height": 720,
       "width": 1280,
       "mp4Url": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE.mp4"
      },
      "rotationX": 9.62,
      "chromaColor": "#28C034",
      "rotationY": 5.52,
      "pitch": -13.42,
      "roll": 3.43,
      "yaw": -169.38,
      "hfov": 23.72,
      "data": {
       "label": "Video"
      },
      "chromaThreshold": 0.28,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 2,
         "width": 2,
         "url": "media/overlay_8898042C_8783_C18B_41DA_5A18267B6637_t.png"
        }
       ]
      },
      "useHandCursor": true,
      "class": "VideoPanoramaOverlay",
      "vfov": 27.01,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_2EA78B72_218E_817A_41A8_FB4F02FFCB5D); if(this.overlay_8898042C_8783_C18B_41DA_5A18267B6637.get('state') != 'playing'){ this.overlay_8898042C_8783_C18B_41DA_5A18267B6637.play(); } else { this.overlay_8898042C_8783_C18B_41DA_5A18267B6637.stop(); }",
      "videoVisibleOnStop": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 392,
       "width": 785,
       "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_lq.jpeg",
       "grayscale": true
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 135,
   "yaw": 93.37,
   "pitch": -1.67
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
    "camera": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
    "camera": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
    "camera": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
    "camera": "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF",
    "camera": "this.panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "label": "look behind you",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "width": 638,
   "mp4Url": "media/video_311E7C9D_21ED_5D59_41B7_CD80598E3778.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_311E7C9D_21ED_5D59_41B7_CD80598E3778_t.jpg",
  "id": "video_311E7C9D_21ED_5D59_41B7_CD80598E3778",
  "loop": false,
  "height": 360,
  "width": 638,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_DD54D099_D2F1_ECA8_41D4_283B460B67BA",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidDD666080_D2F1_EC9D_41C4_FD3F1D427F9CVideoPlayer)",
    "media": "this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778",
    "player": {
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "id": "viewer_uidDD666080_D2F1_EC9D_41C4_FD3F1D427F9CVideoPlayer",
     "viewerArea": {
      "toolTipShadowOpacity": 1,
      "propagateClick": false,
      "progressOpacity": 1,
      "paddingTop": 0,
      "progressRight": 0,
      "progressBorderColor": "#000000",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "toolTipPaddingBottom": 4,
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "playbackBarHeadBorderSize": 0,
      "paddingBottom": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "shadow": false,
      "transitionMode": "blending",
      "progressBackgroundOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarBorderRadius": 0,
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarOpacity": 0.82,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressBottom": 2,
      "minWidth": 100,
      "playbackBarProgressBorderColor": "#000000",
      "progressBorderSize": 0,
      "playbackBarHeight": 10,
      "progressBorderRadius": 0,
      "toolTipShadowBlurRadius": 3,
      "progressHeight": 10,
      "paddingLeft": 0,
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "class": "ViewerArea",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressLeft": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressOpacity": 1,
      "toolTipPaddingTop": 4,
      "toolTipShadowColor": "#333333",
      "toolTipBorderColor": "#767676",
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipOpacity": 1,
      "playbackBarBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarLeft": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "width": "100%",
      "playbackBarRight": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBorderSize": 0,
      "toolTipShadowSpread": 0,
      "height": "100%",
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarProgressBorderRadius": 0,
      "toolTipShadowVerticalLength": 0,
      "borderSize": 0,
      "transitionDuration": 500,
      "toolTipBorderSize": 1,
      "paddingRight": 0,
      "id": "viewer_uidDD1E5DAA_D2F3_B4E8_41D4_E53481C617D7",
      "progressBackgroundColorDirection": "vertical",
      "playbackBarHeadHeight": 15,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipPaddingLeft": 6,
      "toolTipFontColor": "#606060",
      "toolTipDisplayTime": 600,
      "progressBarBorderColor": "#000000",
      "toolTipFontSize": 12,
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadBorderRadius": 0,
      "minHeight": 50,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipPaddingRight": 6,
      "playbackBarBottom": 0,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "progressBarBorderRadius": 0,
      "toolTipFontFamily": "Arial"
     }
    },
    "start": "this.viewer_uidDD666080_D2F1_EC9D_41C4_FD3F1D427F9CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_DD54D099_D2F1_ECA8_41D4_283B460B67BA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_DD54D099_D2F1_ECA8_41D4_283B460B67BA, 0, this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778)"
   }
  ]
 },
 {
  "label": "4",
  "video": {
   "class": "VideoResource",
   "height": 680,
   "width": 1358,
   "mp4Url": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82_t.jpg",
  "id": "video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
  "loop": false,
  "height": 1584,
  "width": 3168,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PlayList",
  "id": "playList_DD198DAC_D2F3_B4E8_41E0_7011A43DD4D0",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD198DAC_D2F3_B4E8_41E0_7011A43DD4D0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD198DAC_D2F3_B4E8_41E0_7011A43DD4D0, 0, this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82)"
   }
  ]
 },
 {
  "label": "videoplayback",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "width": 640,
   "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E_t.jpg",
  "id": "video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
  "loop": false,
  "height": 360,
  "width": 640,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD186DAC_D2F3_B4E8_41D5_600FEB8E3EC6",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD186DAC_D2F3_B4E8_41D5_600FEB8E3EC6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD186DAC_D2F3_B4E8_41D5_600FEB8E3EC6, 0, this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E)"
   }
  ]
 },
 {
  "label": "Untitled Project",
  "video": {
   "class": "VideoResource",
   "height": 480,
   "width": 854,
   "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313_t.jpg",
  "id": "video_C4225EF6_CA0B_C018_41B7_D6667882B313",
  "loop": false,
  "height": 480,
  "width": 854,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD187DAC_D2F3_B4E8_41E4_88B764A7A6B8",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C4225EF6_CA0B_C018_41B7_D6667882B313",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD187DAC_D2F3_B4E8_41E4_88B764A7A6B8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD187DAC_D2F3_B4E8_41E4_88B764A7A6B8, 0, this.video_C4225EF6_CA0B_C018_41B7_D6667882B313)"
   }
  ]
 },
 {
  "label": "videoplayback (3)",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "width": 640,
   "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB_t.jpg",
  "id": "video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
  "loop": false,
  "height": 360,
  "width": 640,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD183DAC_D2F3_B4E8_41D0_8A2000AFF34E",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD183DAC_D2F3_B4E8_41D0_8A2000AFF34E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD183DAC_D2F3_B4E8_41D0_8A2000AFF34E, 0, this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB)"
   }
  ]
 },
 {
  "label": "1",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E_t.jpg",
  "id": "video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
  "loop": false,
  "height": 720,
  "width": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD181DAC_D2F3_B4E8_41CA_A68E48AF5A6E",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD181DAC_D2F3_B4E8_41CA_A68E48AF5A6E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD181DAC_D2F3_B4E8_41CA_A68E48AF5A6E, 0, this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E)"
   }
  ]
 },
 {
  "label": "videoplayback (2)",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6_t.jpg",
  "id": "video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
  "loop": false,
  "height": 720,
  "width": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD18EDAC_D2F3_B4E8_41C5_CB2FA054F61B",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD18EDAC_D2F3_B4E8_41C5_CB2FA054F61B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD18EDAC_D2F3_B4E8_41C5_CB2FA054F61B, 0, this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6)"
   }
  ]
 },
 {
  "label": "videoplayback (5)",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F_t.jpg",
  "id": "video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
  "loop": false,
  "height": 720,
  "width": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD18CDAD_D2F3_B4E8_41E4_63F710BD1CD2",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD18CDAD_D2F3_B4E8_41E4_63F710BD1CD2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD18CDAD_D2F3_B4E8_41E4_63F710BD1CD2, 0, this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F)"
   }
  ]
 },
 {
  "label": "Manos",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE_t.jpg",
  "id": "video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
  "loop": false,
  "height": 720,
  "width": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD18ADAD_D2F3_B4E8_41C2_D327C6796B7B",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD18ADAD_D2F3_B4E8_41C2_D327C6796B7B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD18ADAD_D2F3_B4E8_41C2_D327C6796B7B, 0, this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE)"
   }
  ]
 },
 {
  "label": "mano 2",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897_t.jpg",
  "id": "video_5E693D5C_49B2_4282_41D2_4434DC45E897",
  "loop": false,
  "height": 720,
  "width": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD18BDAD_D2F3_B4E8_41D3_717D5864BD87",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_5E693D5C_49B2_4282_41D2_4434DC45E897",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD18BDAD_D2F3_B4E8_41D3_717D5864BD87, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD18BDAD_D2F3_B4E8_41D3_717D5864BD87, 0, this.video_5E693D5C_49B2_4282_41D2_4434DC45E897)"
   }
  ]
 },
 {
  "label": "manos 3",
  "video": {
   "class": "VideoResource",
   "height": 1280,
   "width": 720,
   "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB_t.jpg",
  "id": "video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
  "loop": false,
  "height": 1280,
  "width": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD189DAD_D2F3_B4E8_41E0_591526FD9502",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD189DAD_D2F3_B4E8_41E0_591526FD9502, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD189DAD_D2F3_B4E8_41E0_591526FD9502, 0, this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB)"
   }
  ]
 },
 {
  "label": "Don't look back",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "width": 638,
   "mp4Url": "media/video_97B394C5_86FB_3633_41D6_51543E121940.mp4"
  },
  "class": "Video",
  "thumbnailUrl": "media/video_97B394C5_86FB_3633_41D6_51543E121940_t.jpg",
  "id": "video_97B394C5_86FB_3633_41D6_51543E121940",
  "loop": false,
  "height": 360,
  "width": 638,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DD1B7DAD_D2F3_B4E8_41E3_7FC421875EF9",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_97B394C5_86FB_3633_41D6_51543E121940",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD1B7DAD_D2F3_B4E8_41E3_7FC421875EF9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD1B7DAD_D2F3_B4E8_41E3_7FC421875EF9, 0, this.video_97B394C5_86FB_3633_41D6_51543E121940)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_DD1B5DAD_D2F3_B4E8_41E7_BA81E9E1B13D",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DD1B5DAD_D2F3_B4E8_41E7_BA81E9E1B13D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DD1B5DAD_D2F3_B4E8_41E7_BA81E9E1B13D, 0, this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778)"
   }
  ]
 },
 {
  "class": "FadeOutEffect",
  "duration": 3000,
  "id": "effect_56FB6E17_49B2_3E8E_41CF_6E6977823125",
  "easing": "linear"
 },
 {
  "class": "FadeInEffect",
  "duration": 500,
  "id": "effect_5115228D_49B2_479D_41C5_A5B943A758AD",
  "easing": "quad_in"
 },
 {
  "class": "FadeOutEffect",
  "duration": 0,
  "id": "effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F",
  "easing": "linear"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_5ECE4DD9_4992_FD82_4197_C5FD6F74E5A1",
  "easing": "quad_in"
 },
 {
  "class": "MediaAudio",
  "id": "audio_2C868FAC_217A_81ED_41C0_A8FBB0843AE9",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2C868FAC_217A_81ED_41C0_A8FBB0843AE9.ogg",
   "mp3Url": "media/audio_2C868FAC_217A_81ED_41C0_A8FBB0843AE9.mp3"
  },
  "data": {
   "label": "p_dWpZ2F6"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "id": "audio_2F4764DE_217A_87AD_41B6_8D0463188316",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2F4764DE_217A_87AD_41B6_8D0463188316.ogg",
   "mp3Url": "media/audio_2F4764DE_217A_87AD_41B6_8D0463188316.mp3"
  },
  "data": {
   "label": "2b888e6e-7c81-4ad2-9fa1-bfb34fda8f01-1659064951379"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "id": "audio_2FC3DF71_2203_25B1_41A4_646DBD899EB0",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2FC3DF71_2203_25B1_41A4_646DBD899EB0.ogg",
   "mp3Url": "media/audio_2FC3DF71_2203_25B1_41A4_646DBD899EB0.mp3"
  },
  "data": {
   "label": "laugh"
  },
  "autoplay": true
 },
 {
  "titlePaddingLeft": 5,
  "headerBackgroundColorDirection": "vertical",
  "backgroundColor": [],
  "veilColorRatios": [
   0,
   1
  ],
  "footerHeight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "creationPolicy": "delayed",
  "closeButtonPressedIconColor": "#888888",
  "modal": true,
  "gap": 10,
  "closeButtonBorderRadius": 0,
  "borderRadius": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "veilOpacity": 0.4,
  "headerPaddingRight": 0,
  "bodyPaddingLeft": 0,
  "backgroundOpacity": 1,
  "headerPaddingTop": 10,
  "paddingBottom": 0,
  "closeButtonIconColor": "#000000",
  "verticalAlign": "middle",
  "bodyBackgroundOpacity": 0,
  "shadow": true,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "bodyPaddingRight": 0,
  "horizontalAlign": "center",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontSize": 14,
  "minWidth": 20,
  "closeButtonPressedIconLineWidth": 5,
  "backgroundColorRatios": [],
  "shadowColor": "#000000",
  "footerBackgroundOpacity": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonPaddingLeft": 5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundOpacity": 0.3,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingRight": 5,
  "class": "Window",
  "paddingLeft": 0,
  "children": [
   "this.viewer_uidDD1E5DAA_D2F3_B4E8_41D4_E53481C617D7"
  ],
  "headerBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "scrollBarColor": "#000000",
  "closeButtonPaddingRight": 5,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBorderColor": "#000000",
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "layout": "vertical",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "shadowSpread": 1,
  "closeButtonPaddingTop": 5,
  "headerPaddingLeft": 10,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderSize": 0,
  "shadowBlurRadius": 6,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonRollOverBorderSize": 0,
  "titleFontFamily": "Arial",
  "overflow": "scroll",
  "headerVerticalAlign": "middle",
  "closeButtonBorderColor": "#000000",
  "borderSize": 0,
  "headerPaddingBottom": 5,
  "backgroundColorDirection": "vertical",
  "closeButtonIconLineWidth": 5,
  "close": "this.PlayList_DD54D099_D2F1_ECA8_41D4_283B460B67BA.set('selectedIndex', -1);",
  "titlePaddingTop": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "paddingRight": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingBottom": 5,
  "id": "window_D8C77494_D2F3_B4B8_41EA_0DB5C8D7C2B9",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "shadowOpacity": 0.5,
  "closeButtonPressedBorderColor": "#000000",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "data": {
   "name": "Window339"
  },
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingBottom": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "minHeight": 20,
  "shadowHorizontalLength": 3,
  "closeButtonIconWidth": 20,
  "propagateClick": false,
  "paddingTop": 0
 },
 "this.popup_31BC39CA_21ED_273B_41B6_A8442F4CB200",
 {
  "class": "MediaAudio",
  "id": "audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265.ogg",
   "mp3Url": "media/audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265.mp3"
  },
  "data": {
   "label": "ES_Piano Ghostly"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "id": "audio_31BAA71A_218A_82B5_41BC_115D5330062C",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_31BAA71A_218A_82B5_41BC_115D5330062C.ogg",
   "mp3Url": "media/audio_31BAA71A_218A_82B5_41BC_115D5330062C.mp3"
  },
  "data": {
   "label": "efecto 28"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "id": "audio_2E5196CF_218A_83AB_41B6_B31C1C527350",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2E5196CF_218A_83AB_41B6_B31C1C527350.ogg",
   "mp3Url": "media/audio_2E5196CF_218A_83AB_41B6_B31C1C527350.mp3"
  },
  "data": {
   "label": "efecto 31"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "id": "audio_2EA78B72_218E_817A_41A8_FB4F02FFCB5D",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2EA78B72_218E_817A_41A8_FB4F02FFCB5D.ogg",
   "mp3Url": "media/audio_2EA78B72_218E_817A_41A8_FB4F02FFCB5D.mp3"
  },
  "data": {
   "label": "efecto 28"
  },
  "autoplay": true
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_C2F47DCB_D2F3_B4A8_41CD_0C1A13691394",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 135,
   "yaw": 78.93,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": -18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_C2F44DCB_D2F3_B4A8_41E6_C94B931D7749",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_C2F93DD9_D2F3_B4A8_41D1_11877572C42C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 129,
   "yaw": 82.54,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 "this.audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
 "this.audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
 "this.audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
 "this.audio_F948C705_EDCD_812B_4196_200730E06FB8"
], "children": [
 {
  "toolTipShadowOpacity": 1,
  "propagateClick": false,
  "progressOpacity": 1,
  "paddingTop": 0,
  "progressRight": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipPaddingBottom": 4,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "shadow": false,
  "transitionMode": "blending",
  "progressBackgroundOpacity": 0.7,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 0.82,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBottom": 0,
  "minWidth": 100,
  "playbackBarProgressBorderColor": "#000000",
  "progressBorderSize": 0,
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "progressHeight": 10,
  "paddingLeft": 0,
  "playbackBarHeadWidth": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "class": "ViewerArea",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressLeft": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "width": "100%",
  "playbackBarRight": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "height": "100%",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "transitionDuration": 500,
  "toolTipBorderSize": 1,
  "paddingRight": 0,
  "id": "MainViewer",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadHeight": 15,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "toolTipFontColor": "#606060",
  "toolTipDisplayTime": 600,
  "progressBarBorderColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "minHeight": 50,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarBottom": 5,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderRadius": 0,
  "toolTipFontFamily": "Arial"
 },
 {
  "class": "IconButton",
  "transparencyActive": false,
  "mode": "push",
  "width": 70,
  "height": 70,
  "maxHeight": 70,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "borderSize": 0,
  "cursor": "hand",
  "paddingRight": 0,
  "bottom": "5.11%",
  "id": "IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "maxWidth": 70,
  "minWidth": 1,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "iconURL": "skin/IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5.png",
  "data": {
   "name": "IconButton12329"
  },
  "minHeight": 1,
  "propagateClick": false,
  "right": "1.1%",
  "paddingTop": 0
 },
 {
  "toolTipBorderColor": "#767676",
  "class": "IconButton",
  "transparencyActive": true,
  "mode": "toggle",
  "width": 56,
  "height": 34,
  "maxHeight": 128,
  "toolTipPaddingBottom": 4,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipBorderRadius": 3,
  "toolTip": "Fullscreen",
  "backgroundOpacity": 0,
  "toolTipShadowVerticalLength": 0,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "toolTipBackgroundColor": "#F6F6F6",
  "borderSize": 0,
  "top": "3.15%",
  "cursor": "hand",
  "paddingRight": 0,
  "toolTipBorderSize": 1,
  "toolTipTextShadowBlurRadius": 3,
  "id": "IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
  "maxWidth": 128,
  "minWidth": 1,
  "horizontalAlign": "center",
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontColor": "#606060",
  "iconURL": "skin/IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C.png",
  "toolTipDisplayTime": 600,
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 0,
  "toolTipPaddingRight": 6,
  "data": {
   "name": "IconButton1493"
  },
  "toolTipTextShadowColor": "#000000",
  "minHeight": 1,
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 1,
  "toolTipFontSize": 12,
  "toolTipShadowOpacity": 1,
  "propagateClick": false,
  "right": "1.1%",
  "paddingTop": 0
 },
 {
  "scrollBarColor": "#000000",
  "class": "HTMLText",
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "81.322%",
  "shadowSpread": 1,
  "rollOver": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, true, 0, this.effect_5115228D_49B2_479D_41C5_A5B943A758AD, 'showEffect', false); this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_56FB6E17_49B2_3E8E_41CF_6E6977823125, 'hideEffect', false)",
  "shadowVerticalLength": 0,
  "shadowBlurRadius": 6,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "height": "30.242%",
  "paddingBottom": 10,
  "shadow": true,
  "borderSize": 3,
  "scrollBarVisible": "rollOver",
  "top": "30.5%",
  "paddingRight": 10,
  "visible": false,
  "borderColor": "#000000",
  "id": "HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47",
  "minWidth": 1,
  "shadowColor": "#FFFFFF",
  "shadowOpacity": 0,
  "paddingLeft": 10,
  "data": {
   "name": "T\u00edtulo"
  },
  "scrollBarWidth": 10,
  "shadowHorizontalLength": 3,
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:75px;font-family:'GrindAndDeath_Demo';\"><B>Horror in Annenkirche</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "minHeight": 1,
  "propagateClick": false,
  "right": "6.42%",
  "paddingTop": 10
 },
 {
  "class": "Label",
  "textShadowOpacity": 0.7,
  "fontSize": 22,
  "width": "31.856%",
  "rollOver": "this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, true, 0, this.effect_5ECE4DD9_4992_FD82_4197_C5FD6F74E5A1, 'showEffect', false)",
  "height": "14.113%",
  "textDecoration": "none",
  "borderRadius": 0,
  "fontFamily": "Redsniper Classic",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "fontStyle": "normal",
  "shadow": false,
  "verticalAlign": "middle",
  "textShadowHorizontalLength": 1,
  "horizontalAlign": "center",
  "borderSize": 0,
  "fontWeight": "normal",
  "textShadowVerticalLength": 1,
  "visible": false,
  "click": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false); this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false)",
  "paddingRight": 0,
  "bottom": "37.85%",
  "id": "Label_5BB62D95_497E_3D82_41CA_ED3237F26477",
  "minWidth": 1,
  "data": {
   "name": "Label4564"
  },
  "text": "CHOOSE YOUR DESTINY",
  "fontColor": "#000000",
  "paddingLeft": 0,
  "textShadowColor": "#CCCCCC",
  "textShadowBlurRadius": 3,
  "right": "33.31%",
  "propagateClick": false,
  "minHeight": 1,
  "paddingTop": 0
 },
 {
  "backgroundColor": [
   "#FFFFFF"
  ],
  "width": "15.699%",
  "height": "26.882%",
  "class": "WebFrame",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "insetBorder": false,
  "paddingBottom": 0,
  "click": "eval('<!-- Add this inside the 3D Vista custom HTML section for the loading screen --><div id=\"wallet-connect-container\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;\">    <button id=\"wallet-connect-btn\" style=\"padding: 10px 20px; font-size: 16px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;\">        Connect Wallet    </button></div><!-- Include Ethers.js library --><script src=\"https://cdn.jsdelivr.net/npm/ethers@5.0.0/dist/ethers.min.js\"></script><script>// Wait for the page to loadwindow.addEventListener(\\'load\\', function () {    const connectButton = document.getElementById(\\'wallet-connect-btn\\');    // Check if MetaMask is available    if (typeof window.ethereum !== \\'undefined\\') {        const provider = new ethers.providers.Web3Provider(window.ethereum);        connectButton.addEventListener(\\'click\\', async function () {            try {                // Request account access                await provider.send(\"eth_requestAccounts\", []);                // Get the connected account                const signer = provider.getSigner();                const account = await signer.getAddress();                console.log(\"Connected wallet address:\", account);                // Hide the wallet connect button                document.getElementById(\\'wallet-connect-container\\').style.display = \\'none\\';                // Trigger tour to start after successful wallet connection                startTour();            } catch (error) {                console.error(\"Connection failed:\", error);            }        });    } else {        connectButton.innerHTML = \"MetaMask is not installed\";    }});// Function to start the 3D Vista tourfunction startTour() {    // Code to start the 3D Vista tour (this depends on your setup)    // Example: if you have a method to programmatically start the tour    window.triggerTourStart(); // Replace with your specific start function}</script>');",
  "backgroundOpacity": 1,
  "shadow": false,
  "borderSize": 0,
  "scrollEnabled": true,
  "paddingRight": 0,
  "visible": false,
  "bottom": "17.69%",
  "id": "WebFrame_CCDC108A_C26D_0739_41D2_59C71F294CD9",
  "minWidth": 1,
  "data": {
   "name": "WebFrame5775"
  },
  "backgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "minHeight": 1,
  "propagateClick": false,
  "right": "41.68%",
  "paddingTop": 0
 },
 {
  "backgroundColor": [
   "#000000"
  ],
  "class": "UIComponent",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "backgroundOpacity": 0.55,
  "shadow": false,
  "borderSize": 0,
  "top": 0,
  "paddingRight": 0,
  "visible": false,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "minWidth": 0,
  "data": {
   "name": "UIComponent2683"
  },
  "backgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "left": 0,
  "minHeight": 0,
  "propagateClick": false,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "right": 0,
  "paddingTop": 0
 },
 {
  "backgroundColor": [],
  "class": "ZoomImage",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "backgroundOpacity": 1,
  "shadow": false,
  "scaleMode": "custom",
  "borderSize": 0,
  "top": 0,
  "paddingRight": 0,
  "visible": false,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "minWidth": 0,
  "data": {
   "name": "ZoomImage2684"
  },
  "backgroundColorRatios": [],
  "paddingLeft": 0,
  "left": 0,
  "minHeight": 0,
  "propagateClick": false,
  "right": 0,
  "paddingTop": 0
 },
 {
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "horizontal",
  "pressedIconColor": "#888888",
  "fontSize": 12,
  "mode": "push",
  "shadowSpread": 1,
  "gap": 5,
  "rollOverIconColor": "#666666",
  "textDecoration": "none",
  "class": "CloseButton",
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "fontFamily": "Arial",
  "iconWidth": 20,
  "backgroundColorDirection": "vertical",
  "iconLineWidth": 5,
  "iconBeforeLabel": true,
  "paddingBottom": 5,
  "fontStyle": "normal",
  "backgroundOpacity": 0.3,
  "shadow": false,
  "verticalAlign": "middle",
  "borderSize": 0,
  "iconHeight": 20,
  "top": 10,
  "fontWeight": "normal",
  "cursor": "hand",
  "visible": false,
  "paddingRight": 5,
  "id": "closeButtonPopupPanorama",
  "minWidth": 0,
  "data": {
   "name": "CloseButton2685"
  },
  "horizontalAlign": "center",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "fontColor": "#FFFFFF",
  "paddingLeft": 5,
  "label": "",
  "borderColor": "#000000",
  "iconColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "right": 10,
  "propagateClick": false,
  "minHeight": 0,
  "paddingTop": 5
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 1,
 "mobileMipmappingEnabled": true,
 "creationPolicy": "delayed",
 "desktopMipmappingEnabled": true,
 "layout": "absolute",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "height": "100%",
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "shadow": false,
 "verticalAlign": "top",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "buttonToggleFullscreen": "this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
 "id": "rootPlayer",
 "minWidth": 20,
 "data": {
  "name": "Player536"
 },
 "horizontalAlign": "left",
 "contentOpaque": false,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 20,
 "propagateClick": false,
 "paddingTop": 0
})