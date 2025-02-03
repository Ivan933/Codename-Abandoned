TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 134,
  "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
  "class": "Panorama",
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 132,
  "hfov": 360,
  "label": "Entrance",
  "audios": [
   {
    "class": "PanoramaAudio",
    "data": {
     "label": "ES_Castle Haunted"
    },
    "id": "audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.ogg",
     "mp3Url": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.mp3"
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
      "enabledInCardboard": true,
      "autoplay": true,
      "video": {
       "class": "VideoResource",
       "height": 480,
       "width": 854,
       "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C",
      "loop": true,
      "rotationX": 6.05,
      "roll": -2.59,
      "rotationY": -11.11,
      "chromaColor": "#28C034",
      "pitch": -8.36,
      "chromaThreshold": 0.24,
      "videoVisibleOnStop": false,
      "yaw": 82.05,
      "hfov": 31.49,
      "data": {
       "label": "Video"
      },
      "useHandCursor": true,
      "vfov": 26.38,
      "blending": 0.08,
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
      "chromaSmoothing": 0.1
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
      "enabledInCardboard": true,
      "id": "overlay_4488E140_4A70_EF6A_4183_1301795CB82C",
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
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      }
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_5A65D056_4A70_ED16_41A0_FC863A38AC38",
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
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      }
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
  "buttonCardboardView": "this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 132,
   "yaw": 1.63,
   "pitch": 9.95
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 133,
  "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
  "class": "Panorama",
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
     "class": "Panorama",
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
     "audios": [
      {
       "class": "PanoramaAudio",
       "data": {
        "label": "ES_Ghosting"
       },
       "id": "audio_F948C705_EDCD_812B_4196_200730E06FB8",
       "audio": {
        "class": "AudioResource",
        "oggUrl": "media/audio_F948C705_EDCD_812B_4196_200730E06FB8.ogg",
        "mp3Url": "media/audio_F948C705_EDCD_812B_4196_200730E06FB8.mp3"
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
         "enabledInCardboard": true,
         "id": "overlay_F86FD138_EDCD_8159_41E2_9EB3FCB3B587",
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
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "useHandCursor": true,
         "data": {
          "label": "Polygon"
         }
        },
        {
         "enabledInCardboard": true,
         "autoplay": false,
         "video": {
          "class": "VideoResource",
          "height": 1280,
          "width": 720,
          "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4"
         },
         "class": "VideoPanoramaOverlay",
         "id": "overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F",
         "loop": true,
         "rotationX": 3.96,
         "roll": -1.16,
         "chromaColor": "#28C034",
         "pitch": -9.06,
         "chromaThreshold": 0.28,
         "videoVisibleOnStop": true,
         "yaw": 50.6,
         "rotationY": -6.13,
         "hfov": 23.51,
         "data": {
          "label": "Video"
         },
         "useHandCursor": true,
         "vfov": 52.48,
         "blending": 0.26,
         "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_31BAA71A_218A_82B5_41BC_115D5330062C); this.overlay_5CFDAA7C_499D_C682_41CC_71AC29719C8F.play()",
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
         "chromaSmoothing": 0.03
        },
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_5871DA47_4A90_7D76_41C0_057CFAEE46B7",
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
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A, this.camera_DA11AE15_CBFA_9557_419C_2C8D42C12ED4); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "rollOverDisplay": false,
         "useHandCursor": true,
         "data": {
          "label": "Polygon"
         }
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
  "audios": [
   {
    "class": "PanoramaAudio",
    "data": {
     "label": "ES_Dark Element 4"
    },
    "id": "audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.ogg",
     "mp3Url": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.mp3"
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
      "autoplay": false,
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC",
      "loop": false,
      "rotationX": 8.05,
      "roll": 2.67,
      "chromaColor": "#28C034",
      "pitch": -7.57,
      "chromaThreshold": 0.22,
      "videoVisibleOnStop": false,
      "yaw": -164.61,
      "rotationY": -4.93,
      "hfov": 18.88,
      "data": {
       "label": "Video"
      },
      "useHandCursor": true,
      "vfov": 33.31,
      "blending": 0,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_2C868FAC_217A_81ED_41C0_A8FBB0843AE9); this.overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC.play()",
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
      "chromaSmoothing": 0
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_5BD221A9_4A70_2F3B_417E_28D1D33151AF",
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
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E, this.camera_D9E47E24_CBFA_9575_41D1_F74EBDB10B65); this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      }
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_596710E9_4A90_2D3A_41C8_31F8E5DCEB1F",
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
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      }
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_FF693958_F239_495F_41E5_9CBEA4C6AE3C",
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
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      }
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
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 129,
   "yaw": 31.13,
   "pitch": -15.45
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
  "class": "Panorama",
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
  "vfov": 180,
  "partial": false,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "Right Hallway",
  "audios": [
   {
    "class": "PanoramaAudio",
    "data": {
     "label": "ES_Heartbeat Slow"
    },
    "id": "audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.ogg",
     "mp3Url": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.mp3"
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
      "autoplay": true,
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F",
      "loop": true,
      "rotationX": 31.76,
      "roll": -14.8,
      "rotationY": -24.56,
      "chromaColor": "#28C034",
      "pitch": -26.98,
      "chromaThreshold": 0.31,
      "videoVisibleOnStop": false,
      "yaw": 10.52,
      "hfov": 23.08,
      "data": {
       "label": "Video"
      },
      "useHandCursor": true,
      "vfov": 48.94,
      "blending": 0.07,
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
      "chromaSmoothing": 0.78
     },
     {
      "enabledInCardboard": true,
      "autoplay": true,
      "video": {
       "class": "VideoResource",
       "height": 720,
       "width": 1280,
       "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE",
      "loop": true,
      "rotationX": 5.23,
      "roll": 0.64,
      "chromaColor": "#28C034",
      "pitch": 5.18,
      "chromaThreshold": 0.14,
      "videoVisibleOnStop": false,
      "yaw": -40.31,
      "rotationY": -5.12,
      "hfov": 12.07,
      "data": {
       "label": "Video"
      },
      "useHandCursor": true,
      "vfov": 14.55,
      "blending": 0,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_2F4764DE_217A_87AD_41B6_8D0463188316)",
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
      "chromaSmoothing": 0.06
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
      "autoplay": false,
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_107D7FD3_1E32_BE64_4171_11A206EF3984",
      "loop": false,
      "rotationX": 12.43,
      "roll": -4.59,
      "chromaColor": "#28C034",
      "pitch": -14.63,
      "chromaThreshold": 0.24,
      "videoVisibleOnStop": false,
      "yaw": 127.72,
      "rotationY": -10.67,
      "hfov": 24.23,
      "data": {
       "label": "Video"
      },
      "useHandCursor": true,
      "vfov": 38.22,
      "blending": 0,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_2FC3DF71_2203_25B1_41A4_646DBD899EB0); this.overlay_107D7FD3_1E32_BE64_4171_11A206EF3984.play()",
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
      "chromaSmoothing": 0
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_5B04C75A_4A70_D319_41BE_BEBD6317C3FB",
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
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      }
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_FE2F1DEC_F24B_B7AB_41D6_59AF31B58A0B",
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
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      },
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
      "enabledInCardboard": true,
      "id": "overlay_FF27A2DC_F285_92D1_41E2_6D70DF6C31D6",
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
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_31BC39CA_21ED_273B_41B6_A8442F4CB200, {'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverIconLineWidth':5,'borderColor':'#000000','backgroundOpacity':0.3,'pressedBorderSize':0,'rollOverBorderSize':0,'paddingRight':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'paddingLeft':5,'iconColor':'#000000','iconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'paddingBottom':5,'backgroundColorDirection':'vertical','paddingTop':5,'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0}) } else { this.showPopupMedia(this.window_C1F87F4A_CBDE_933D_41E1_40738A31211E, this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778, this.PlayList_C6AA3B2E_CBEA_B375_41D7_AEF1310DEEB4, '80%', '80%', true, true); this.PlayList_C6AA3B2E_CBEA_B375_41D7_AEF1310DEEB4.set('selectedIndex', 0); ; this.viewer_uidC6A3DB20_CBEA_B36D_41D5_F21A56AB16D6VideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      }
     },
     {
      "rotationZ": 0,
      "showEasing": "cubic_in",
      "yaw": 82.19,
      "hfov": 5.43,
      "hideDuration": 500,
      "autoplay": true,
      "popupMaxHeight": "80%",
      "hideEasing": "cubic_out",
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 638,
       "mp4Url": "media/video_311E7C9D_21ED_5D59_41B7_CD80598E3778.mp4"
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "80%",
      "id": "popup_31BC39CA_21ED_273B_41B6_A8442F4CB200",
      "loop": false,
      "showDuration": 500,
      "rotationX": 0,
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
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.98,
   "pitch": -8.85
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_in",
     "yawSpeed": 10.61
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "easing": "linear",
     "yawSpeed": 10.61
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_out",
     "yawSpeed": 10.61
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E",
 {
  "class": "PanoramaCamera",
  "id": "panorama_E76534D0_EDB5_872A_41CC_0054A6588B4E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 135,
   "yaw": -177.38,
   "pitch": -3.98
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_FF66E78E_EDDC_8136_41EA_4F751DDC3DAE"
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfovMax": 142,
  "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
  "class": "Panorama",
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "Second floor right hallway",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "autoplay": false,
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A",
      "loop": false,
      "rotationX": 27.78,
      "roll": 6.14,
      "chromaColor": "#28C034",
      "pitch": -30.73,
      "chromaThreshold": 0.19,
      "videoVisibleOnStop": false,
      "yaw": -78.35,
      "rotationY": 4.18,
      "hfov": 38.75,
      "data": {
       "label": "Video"
      },
      "useHandCursor": true,
      "vfov": 74.36,
      "blending": 0,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_2E5196CF_218A_83AB_41B6_B31C1C527350); this.overlay_51EB61E8_499E_C582_41B6_3662F2DDE86A.play()",
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
      "chromaSmoothing": 0.06
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
      "enabledInCardboard": true,
      "id": "overlay_5B4CE40A_4A70_74FE_41C1_95BC8C081B22",
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
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "data": {
       "label": "Polygon"
      }
     },
     {
      "enabledInCardboard": true,
      "autoplay": false,
      "video": {
       "class": "VideoResource",
       "height": 720,
       "width": 1280,
       "mp4Url": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_8898042C_8783_C18B_41DA_5A18267B6637",
      "loop": false,
      "rotationX": 9.62,
      "roll": 3.43,
      "chromaColor": "#28C034",
      "pitch": -13.42,
      "chromaThreshold": 0.28,
      "videoVisibleOnStop": false,
      "yaw": -169.38,
      "rotationY": 5.52,
      "hfov": 23.72,
      "data": {
       "label": "Video"
      },
      "useHandCursor": true,
      "vfov": 27.01,
      "blending": 0.16,
      "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_2EA78B72_218E_817A_41A8_FB4F02FFCB5D); if(this.overlay_8898042C_8783_C18B_41DA_5A18267B6637.get('state') != 'playing'){ this.overlay_8898042C_8783_C18B_41DA_5A18267B6637.play(); } else { this.overlay_8898042C_8783_C18B_41DA_5A18267B6637.stop(); }",
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
      "chromaSmoothing": 0
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
  "id": "panorama_54A2548E_49B2_C39E_41C6_738BED4A91AF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 135,
   "yaw": 93.37,
   "pitch": -1.67
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
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
  "thumbnailUrl": "media/video_311E7C9D_21ED_5D59_41B7_CD80598E3778_t.jpg",
  "label": "look behind you",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "width": 638,
   "mp4Url": "media/video_311E7C9D_21ED_5D59_41B7_CD80598E3778.mp4"
  },
  "class": "Video",
  "width": 638,
  "id": "video_311E7C9D_21ED_5D59_41B7_CD80598E3778",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "PlayList_C6AA3B2E_CBEA_B375_41D7_AEF1310DEEB4",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC6A3DB20_CBEA_B36D_41D5_F21A56AB16D6VideoPlayer)",
    "media": "this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778",
    "player": {
     "class": "VideoPlayer",
     "viewerArea": {
      "toolTipShadowOpacity": 1,
      "progressBarBorderColor": "#000000",
      "toolTipFontColor": "#606060",
      "propagateClick": false,
      "playbackBarHeadBorderRadius": 0,
      "class": "ViewerArea",
      "playbackBarProgressBorderSize": 0,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "progressBarBorderRadius": 0,
      "toolTipFontFamily": "Arial",
      "progressOpacity": 1,
      "playbackBarBottom": 0,
      "toolTipPaddingRight": 6,
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadShadowColor": "#000000",
      "progressBorderColor": "#000000",
      "playbackBarHeadOpacity": 1,
      "toolTipTextShadowOpacity": 0,
      "paddingBottom": 0,
      "toolTipPaddingBottom": 4,
      "shadow": false,
      "playbackBarHeadShadow": true,
      "borderRadius": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "transitionMode": "blending",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBorderRadius": 0,
      "progressBackgroundOpacity": 1,
      "minWidth": 100,
      "progressBottom": 2,
      "playbackBarOpacity": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressBarOpacity": 0.82,
      "progressBorderSize": 0,
      "playbackBarProgressBorderColor": "#000000",
      "paddingLeft": 0,
      "progressHeight": 10,
      "toolTipShadowBlurRadius": 3,
      "progressBorderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeight": 10,
      "toolTipOpacity": 1,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingTop": 4,
      "playbackBarHeadWidth": 6,
      "progressLeft": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "minHeight": 50,
      "playbackBarBackgroundColorDirection": "vertical",
      "toolTipShadowColor": "#333333",
      "toolTipBorderColor": "#767676",
      "width": "100%",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "height": "100%",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowVerticalLength": 0,
      "playbackBarBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarLeft": 0,
      "playbackBarRight": 0,
      "toolTipShadowSpread": 0,
      "toolTipBorderRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "borderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "transitionDuration": 500,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBorderColor": "#FFFFFF",
      "id": "viewer_uidDA38BDF4_CBFA_96D5_41E0_C83C8C6467D5",
      "progressBarBorderSize": 0,
      "toolTipBorderSize": 1,
      "progressBackgroundColorDirection": "vertical",
      "toolTipFontWeight": "normal",
      "playbackBarHeadHeight": 15,
      "toolTipPaddingLeft": 6,
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "toolTipDisplayTime": 600,
      "paddingTop": 0
     },
     "displayPlaybackBar": true,
     "id": "viewer_uidC6A3DB20_CBEA_B36D_41D5_F21A56AB16D6VideoPlayer"
    },
    "start": "this.viewer_uidC6A3DB20_CBEA_B36D_41D5_F21A56AB16D6VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_C6AA3B2E_CBEA_B375_41D7_AEF1310DEEB4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_C6AA3B2E_CBEA_B375_41D7_AEF1310DEEB4, 0, this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82_t.jpg",
  "label": "4",
  "video": {
   "class": "VideoResource",
   "height": 680,
   "width": 1358,
   "mp4Url": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82.mp4"
  },
  "class": "Video",
  "width": 3168,
  "id": "video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
  "loop": false,
  "height": 1584,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer"
 },
 {
  "class": "PlayList",
  "id": "playList_DA36CDF6_CBFA_96D5_41E6_696CF0AAD653",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA36CDF6_CBFA_96D5_41E6_696CF0AAD653, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA36CDF6_CBFA_96D5_41E6_696CF0AAD653, 0, this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E_t.jpg",
  "label": "videoplayback",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "width": 640,
   "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
  },
  "class": "Video",
  "width": 640,
  "id": "video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA361DF6_CBFA_96D5_41E7_9220EFFD6EFE",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA361DF6_CBFA_96D5_41E7_9220EFFD6EFE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA361DF6_CBFA_96D5_41E7_9220EFFD6EFE, 0, this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313_t.jpg",
  "label": "Untitled Project",
  "video": {
   "class": "VideoResource",
   "height": 480,
   "width": 854,
   "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4"
  },
  "class": "Video",
  "width": 854,
  "id": "video_C4225EF6_CA0B_C018_41B7_D6667882B313",
  "loop": false,
  "height": 480,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA366DF6_CBFA_96D5_41CE_E964AC3C04EA",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C4225EF6_CA0B_C018_41B7_D6667882B313",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA366DF6_CBFA_96D5_41CE_E964AC3C04EA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA366DF6_CBFA_96D5_41CE_E964AC3C04EA, 0, this.video_C4225EF6_CA0B_C018_41B7_D6667882B313)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB_t.jpg",
  "label": "videoplayback (3)",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "width": 640,
   "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4"
  },
  "class": "Video",
  "width": 640,
  "id": "video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA359DF6_CBFA_96D5_41B5_76E85E252F52",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA359DF6_CBFA_96D5_41B5_76E85E252F52, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA359DF6_CBFA_96D5_41B5_76E85E252F52, 0, this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E_t.jpg",
  "label": "1",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4"
  },
  "class": "Video",
  "width": 1280,
  "id": "video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA35FDF6_CBFA_96D5_41E8_E7641778011C",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA35FDF6_CBFA_96D5_41E8_E7641778011C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA35FDF6_CBFA_96D5_41E8_E7641778011C, 0, this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6_t.jpg",
  "label": "videoplayback (2)",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6.mp4"
  },
  "class": "Video",
  "width": 1280,
  "id": "video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA353DF6_CBFA_96D5_41E6_F85412FFBCA3",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA353DF6_CBFA_96D5_41E6_F85412FFBCA3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA353DF6_CBFA_96D5_41E6_F85412FFBCA3, 0, this.video_E2F13592_EDCC_812E_41D1_EB73BD4C0DF6)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F_t.jpg",
  "label": "videoplayback (5)",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_F856A78F_EDB3_8137_41E4_D12E3F83119F.mp4"
  },
  "class": "Video",
  "width": 1280,
  "id": "video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA355DF6_CBFA_96D5_41E6_9D54439B6902",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA355DF6_CBFA_96D5_41E6_9D54439B6902, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA355DF6_CBFA_96D5_41E6_9D54439B6902, 0, this.video_F856A78F_EDB3_8137_41E4_D12E3F83119F)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE_t.jpg",
  "label": "Manos",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE.mp4"
  },
  "class": "Video",
  "width": 1280,
  "id": "video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA34ADF6_CBFA_96D5_41D2_8868FB9203BE",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA34ADF6_CBFA_96D5_41D2_8868FB9203BE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA34ADF6_CBFA_96D5_41D2_8868FB9203BE, 0, this.video_5DE7EA7A_49BE_C686_41D2_11B76423BEDE)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897_t.jpg",
  "label": "mano 2",
  "video": {
   "class": "VideoResource",
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_5E693D5C_49B2_4282_41D2_4434DC45E897.mp4"
  },
  "class": "Video",
  "width": 1280,
  "id": "video_5E693D5C_49B2_4282_41D2_4434DC45E897",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA34EDF7_CBFA_96D3_41E0_8DDB1111499A",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_5E693D5C_49B2_4282_41D2_4434DC45E897",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA34EDF7_CBFA_96D3_41E0_8DDB1111499A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA34EDF7_CBFA_96D3_41E0_8DDB1111499A, 0, this.video_5E693D5C_49B2_4282_41D2_4434DC45E897)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB_t.jpg",
  "label": "manos 3",
  "video": {
   "class": "VideoResource",
   "height": 1280,
   "width": 720,
   "mp4Url": "media/video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB.mp4"
  },
  "class": "Video",
  "width": 720,
  "id": "video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
  "loop": false,
  "height": 1280,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA343DF7_CBFA_96D3_41CB_FD906952766D",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA343DF7_CBFA_96D3_41CB_FD906952766D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA343DF7_CBFA_96D3_41CB_FD906952766D, 0, this.video_5DDEC34F_499D_C69E_41CA_866D0C0D77BB)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/video_97B394C5_86FB_3633_41D6_51543E121940_t.jpg",
  "label": "Don't look back",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "width": 638,
   "mp4Url": "media/video_97B394C5_86FB_3633_41D6_51543E121940.mp4"
  },
  "class": "Video",
  "width": 638,
  "id": "video_97B394C5_86FB_3633_41D6_51543E121940",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DA347DF7_CBFA_96D3_41D5_671BD854B987",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_97B394C5_86FB_3633_41D6_51543E121940",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA347DF7_CBFA_96D3_41D5_671BD854B987, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA347DF7_CBFA_96D3_41D5_671BD854B987, 0, this.video_97B394C5_86FB_3633_41D6_51543E121940)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_DA346DF7_CBFA_96D3_41E7_3F0B8F26D9D5",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DA346DF7_CBFA_96D3_41E7_3F0B8F26D9D5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DA346DF7_CBFA_96D3_41E7_3F0B8F26D9D5, 0, this.video_311E7C9D_21ED_5D59_41B7_CD80598E3778)"
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
  "data": {
   "label": "p_dWpZ2F6"
  },
  "id": "audio_2C868FAC_217A_81ED_41C0_A8FBB0843AE9",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2C868FAC_217A_81ED_41C0_A8FBB0843AE9.ogg",
   "mp3Url": "media/audio_2C868FAC_217A_81ED_41C0_A8FBB0843AE9.mp3"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "data": {
   "label": "2b888e6e-7c81-4ad2-9fa1-bfb34fda8f01-1659064951379"
  },
  "id": "audio_2F4764DE_217A_87AD_41B6_8D0463188316",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2F4764DE_217A_87AD_41B6_8D0463188316.ogg",
   "mp3Url": "media/audio_2F4764DE_217A_87AD_41B6_8D0463188316.mp3"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "data": {
   "label": "laugh"
  },
  "id": "audio_2FC3DF71_2203_25B1_41A4_646DBD899EB0",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2FC3DF71_2203_25B1_41A4_646DBD899EB0.ogg",
   "mp3Url": "media/audio_2FC3DF71_2203_25B1_41A4_646DBD899EB0.mp3"
  },
  "autoplay": true
 },
 {
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titlePaddingLeft": 5,
  "propagateClick": false,
  "closeButtonRollOverIconColor": "#666666",
  "class": "Window",
  "closeButtonRollOverBorderSize": 0,
  "backgroundColor": [],
  "gap": 10,
  "headerPaddingTop": 10,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "modal": true,
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "closeButtonPressedIconColor": "#888888",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonIconLineWidth": 5,
  "paddingBottom": 0,
  "shadow": true,
  "verticalAlign": "middle",
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundOpacity": 1,
  "shadowVerticalLength": 0,
  "scrollBarVisible": "rollOver",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerPaddingRight": 0,
  "layout": "vertical",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontSize": 14,
  "bodyBackgroundOpacity": 0,
  "horizontalAlign": "center",
  "minWidth": 20,
  "shadowColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "headerVerticalAlign": "middle",
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingLeft": 0,
  "closeButtonPaddingLeft": 5,
  "backgroundColorRatios": [],
  "contentOpaque": false,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPaddingRight": 5,
  "headerPaddingBottom": 5,
  "titlePaddingRight": 5,
  "closeButtonBorderSize": 0,
  "headerBackgroundOpacity": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundOpacity": 0,
  "children": [
   "this.viewer_uidDA38BDF4_CBFA_96D5_41E0_C83C8C6467D5"
  ],
  "footerHeight": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonIconColor": "#000000",
  "scrollBarColor": "#000000",
  "minHeight": 20,
  "scrollBarMargin": 2,
  "closeButtonRollOverBorderColor": "#000000",
  "titlePaddingTop": 5,
  "shadowHorizontalLength": 3,
  "titlePaddingBottom": 5,
  "scrollBarOpacity": 0.5,
  "creationPolicy": "delayed",
  "bodyPaddingBottom": 0,
  "closeButtonPaddingBottom": 5,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowSpread": 1,
  "closeButtonIconWidth": 20,
  "titleFontFamily": "Arial",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingLeft": 0,
  "bodyPaddingTop": 0,
  "shadowBlurRadius": 6,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPaddingTop": 5,
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "headerPaddingLeft": 10,
  "bodyPaddingRight": 0,
  "close": "this.PlayList_C6AA3B2E_CBEA_B375_41D7_AEF1310DEEB4.set('selectedIndex', -1);",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "closeButtonBackgroundOpacity": 0.3,
  "paddingRight": 0,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "id": "window_C1F87F4A_CBDE_933D_41E1_40738A31211E",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "data": {
   "name": "Window369"
  },
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "overflow": "scroll",
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "closeButtonPressedBorderColor": "#000000",
  "shadowOpacity": 0.5,
  "paddingTop": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ]
 },
 "this.popup_31BC39CA_21ED_273B_41B6_A8442F4CB200",
 {
  "class": "MediaAudio",
  "data": {
   "label": "ES_Piano Ghostly"
  },
  "id": "audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265.ogg",
   "mp3Url": "media/audio_FC9BD9F3_EDF4_80EE_41E1_83C9A304E265.mp3"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "data": {
   "label": "efecto 28"
  },
  "id": "audio_31BAA71A_218A_82B5_41BC_115D5330062C",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_31BAA71A_218A_82B5_41BC_115D5330062C.ogg",
   "mp3Url": "media/audio_31BAA71A_218A_82B5_41BC_115D5330062C.mp3"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "data": {
   "label": "efecto 31"
  },
  "id": "audio_2E5196CF_218A_83AB_41B6_B31C1C527350",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2E5196CF_218A_83AB_41B6_B31C1C527350.ogg",
   "mp3Url": "media/audio_2E5196CF_218A_83AB_41B6_B31C1C527350.mp3"
  },
  "autoplay": true
 },
 {
  "class": "MediaAudio",
  "data": {
   "label": "efecto 28"
  },
  "id": "audio_2EA78B72_218E_817A_41A8_FB4F02FFCB5D",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_2EA78B72_218E_817A_41A8_FB4F02FFCB5D.ogg",
   "mp3Url": "media/audio_2EA78B72_218E_817A_41A8_FB4F02FFCB5D.mp3"
  },
  "autoplay": true
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_DA11AE15_CBFA_9557_419C_2C8D42C12ED4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 129,
   "yaw": 82.54,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D9E47E24_CBFA_9575_41D1_F74EBDB10B65",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 135,
   "yaw": 78.93,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_D9E46E24_CBFA_9575_41E4_0323B526E5B3"
  },
  "automaticZoomSpeed": 10
 },
 "this.audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
 "this.audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
 "this.audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
 "this.audio_F948C705_EDCD_812B_4196_200730E06FB8"
], "children": [
 {
  "toolTipShadowOpacity": 1,
  "progressBarBorderColor": "#000000",
  "toolTipFontColor": "#606060",
  "propagateClick": false,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "playbackBarProgressBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBorderRadius": 0,
  "toolTipFontFamily": "Arial",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "toolTipPaddingRight": 6,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "paddingBottom": 0,
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "playbackBarHeadShadow": true,
  "borderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "transitionMode": "blending",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBorderRadius": 0,
  "progressBackgroundOpacity": 0.7,
  "minWidth": 100,
  "progressBottom": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarOpacity": 0.82,
  "progressBorderSize": 0,
  "playbackBarProgressBorderColor": "#000000",
  "paddingLeft": 0,
  "progressHeight": 10,
  "toolTipShadowBlurRadius": 3,
  "progressBorderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeight": 10,
  "toolTipOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarHeadWidth": 6,
  "progressLeft": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "minHeight": 50,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipShadowColor": "#333333",
  "toolTipBorderColor": "#767676",
  "width": "100%",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "height": "100%",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "borderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarBorderColor": "#FFFFFF",
  "id": "MainViewer",
  "progressBarBorderSize": 0,
  "toolTipBorderSize": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "playbackBarHeadHeight": 15,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipFontStyle": "normal",
  "toolTipDisplayTime": 600,
  "paddingTop": 0
 },
 {
  "paddingTop": 0,
  "data": {
   "name": "IconButton12329"
  },
  "propagateClick": false,
  "minHeight": 1,
  "class": "IconButton",
  "right": "1.1%",
  "width": 70,
  "height": 70,
  "mode": "push",
  "transparencyActive": false,
  "paddingBottom": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "cursor": "hand",
  "paddingRight": 0,
  "bottom": "5.11%",
  "id": "IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5",
  "horizontalAlign": "center",
  "minWidth": 1,
  "paddingLeft": 0,
  "maxWidth": 70,
  "maxHeight": 70,
  "iconURL": "skin/IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5.png"
 },
 {
  "toolTipShadowOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "paddingTop": 0,
  "data": {
   "name": "IconButton1493"
  },
  "propagateClick": false,
  "minHeight": 1,
  "class": "IconButton",
  "right": "1.1%",
  "toolTipBorderColor": "#767676",
  "width": 56,
  "height": 34,
  "mode": "toggle",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "transparencyActive": true,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontFamily": "Arial",
  "toolTip": "Fullscreen",
  "toolTipPaddingBottom": 4,
  "toolTipTextShadowOpacity": 0,
  "paddingBottom": 0,
  "toolTipShadowSpread": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "toolTipBorderRadius": 3,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "top": "3.15%",
  "cursor": "hand",
  "paddingRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowBlurRadius": 3,
  "id": "IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
  "horizontalAlign": "center",
  "minWidth": 1,
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "maxWidth": 128,
  "maxHeight": 128,
  "toolTipBorderSize": 1,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "iconURL": "skin/IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C.png",
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipDisplayTime": 600,
  "toolTipPaddingTop": 4,
  "toolTipFontColor": "#606060"
 },
 {
  "shadowVerticalLength": 0,
  "propagateClick": false,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "scrollBarMargin": 2,
  "class": "HTMLText",
  "right": "6.42%",
  "shadowHorizontalLength": 3,
  "scrollBarOpacity": 0.5,
  "width": "81.322%",
  "rollOver": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, true, 0, this.effect_5115228D_49B2_479D_41C5_A5B943A758AD, 'showEffect', false); this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_56FB6E17_49B2_3E8E_41CF_6E6977823125, 'hideEffect', false)",
  "height": "30.242%",
  "shadowSpread": 1,
  "paddingBottom": 10,
  "shadowBlurRadius": 6,
  "shadow": true,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "borderSize": 3,
  "scrollBarVisible": "rollOver",
  "paddingTop": 10,
  "top": "30.5%",
  "paddingRight": 10,
  "visible": false,
  "id": "HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:75px;font-family:'GrindAndDeath_Demo';\"><B>Horror in Annenkirche</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "borderColor": "#000000",
  "minWidth": 1,
  "shadowColor": "#FFFFFF",
  "paddingLeft": 10,
  "scrollBarWidth": 10,
  "data": {
   "name": "T\u00edtulo"
  },
  "shadowOpacity": 0
 },
 {
  "right": "33.31%",
  "propagateClick": false,
  "minHeight": 1,
  "class": "Label",
  "fontColor": "#000000",
  "width": "31.856%",
  "rollOver": "this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, true, 0, this.effect_5ECE4DD9_4992_FD82_4197_C5FD6F74E5A1, 'showEffect', false)",
  "paddingTop": 0,
  "textShadowOpacity": 0.7,
  "height": "14.113%",
  "textShadowVerticalLength": 1,
  "fontFamily": "Redsniper Classic",
  "fontSize": 22,
  "fontStyle": "normal",
  "text": "CHOOSE YOUR DESTINY",
  "paddingBottom": 0,
  "click": "this.setComponentVisibility(this.HTMLText_FEE0081A_EDB4_8F59_41D8_EB0497322D47, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false); this.setComponentVisibility(this.Label_5BB62D95_497E_3D82_41CA_ED3237F26477, false, 0, this.effect_51BD5670_4992_4E82_41A0_BE9B07ACCE4F, 'hideEffect', false)",
  "shadow": false,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "textShadowHorizontalLength": 1,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "fontWeight": "normal",
  "paddingRight": 0,
  "visible": false,
  "textDecoration": "none",
  "bottom": "37.85%",
  "textShadowBlurRadius": 3,
  "id": "Label_5BB62D95_497E_3D82_41CA_ED3237F26477",
  "horizontalAlign": "center",
  "minWidth": 1,
  "paddingLeft": 0,
  "textShadowColor": "#CCCCCC",
  "data": {
   "name": "Label4564"
  }
 },
 {
  "propagateClick": false,
  "minHeight": 1,
  "class": "WebFrame",
  "backgroundColor": [
   "#FFFFFF"
  ],
  "width": "15.699%",
  "paddingTop": 0,
  "height": "26.882%",
  "paddingBottom": 0,
  "click": "eval('<!-- Add this inside the 3D Vista custom HTML section for the loading screen --><div id=\"wallet-connect-container\" style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;\">    <button id=\"wallet-connect-btn\" style=\"padding: 10px 20px; font-size: 16px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;\">        Connect Wallet    </button></div><!-- Include Ethers.js library --><script src=\"https://cdn.jsdelivr.net/npm/ethers@5.0.0/dist/ethers.min.js\"></script><script>// Wait for the page to loadwindow.addEventListener(\\'load\\', function () {    const connectButton = document.getElementById(\\'wallet-connect-btn\\');    // Check if MetaMask is available    if (typeof window.ethereum !== \\'undefined\\') {        const provider = new ethers.providers.Web3Provider(window.ethereum);        connectButton.addEventListener(\\'click\\', async function () {            try {                // Request account access                await provider.send(\"eth_requestAccounts\", []);                // Get the connected account                const signer = provider.getSigner();                const account = await signer.getAddress();                console.log(\"Connected wallet address:\", account);                // Hide the wallet connect button                document.getElementById(\\'wallet-connect-container\\').style.display = \\'none\\';                // Trigger tour to start after successful wallet connection                startTour();            } catch (error) {                console.error(\"Connection failed:\", error);            }        });    } else {        connectButton.innerHTML = \"MetaMask is not installed\";    }});// Function to start the 3D Vista tourfunction startTour() {    // Code to start the 3D Vista tour (this depends on your setup)    // Example: if you have a method to programmatically start the tour    window.triggerTourStart(); // Replace with your specific start function}</script>');",
  "shadow": false,
  "insetBorder": false,
  "borderRadius": 0,
  "backgroundOpacity": 1,
  "borderSize": 0,
  "scrollEnabled": true,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "visible": false,
  "bottom": "17.69%",
  "id": "WebFrame_CCDC108A_C26D_0739_41D2_59C71F294CD9",
  "minWidth": 1,
  "paddingLeft": 0,
  "data": {
   "name": "WebFrame5775"
  },
  "backgroundColorRatios": [
   0
  ],
  "right": "41.68%"
 },
 {
  "paddingTop": 0,
  "propagateClick": false,
  "minHeight": 0,
  "class": "UIComponent",
  "right": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundOpacity": 0.55,
  "borderSize": 0,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "visible": false,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "minWidth": 0,
  "paddingLeft": 0,
  "data": {
   "name": "UIComponent6166"
  },
  "backgroundColorRatios": [
   0
  ],
  "left": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  }
 },
 {
  "paddingTop": 0,
  "propagateClick": false,
  "minHeight": 0,
  "class": "ZoomImage",
  "right": 0,
  "backgroundColor": [],
  "paddingBottom": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundOpacity": 1,
  "borderSize": 0,
  "top": 0,
  "backgroundColorDirection": "vertical",
  "paddingRight": 0,
  "visible": false,
  "scaleMode": "custom",
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "minWidth": 0,
  "paddingLeft": 0,
  "data": {
   "name": "ZoomImage6167"
  },
  "backgroundColorRatios": [],
  "left": 0
 },
 {
  "label": "",
  "paddingTop": 5,
  "propagateClick": false,
  "minHeight": 0,
  "class": "CloseButton",
  "right": 10,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "gap": 5,
  "mode": "push",
  "fontColor": "#FFFFFF",
  "fontFamily": "Arial",
  "shadowSpread": 1,
  "fontSize": 12,
  "fontStyle": "normal",
  "iconWidth": 20,
  "paddingBottom": 5,
  "shadowBlurRadius": 6,
  "shadow": false,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "backgroundOpacity": 0.3,
  "borderSize": 0,
  "iconHeight": 20,
  "rollOverIconColor": "#666666",
  "layout": "horizontal",
  "top": 10,
  "fontWeight": "normal",
  "backgroundColorDirection": "vertical",
  "cursor": "hand",
  "paddingRight": 5,
  "visible": false,
  "textDecoration": "none",
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "pressedIconColor": "#888888",
  "horizontalAlign": "center",
  "minWidth": 0,
  "paddingLeft": 5,
  "iconColor": "#000000",
  "shadowColor": "#000000",
  "iconLineWidth": 5,
  "data": {
   "name": "CloseButton6168"
  },
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "iconBeforeLabel": true
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F272F6E8_E2C8_E992_41E3_87CFC748B0A5], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "scrollBarMargin": 2,
 "class": "Player",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "overflow": "visible",
 "height": "100%",
 "creationPolicy": "delayed",
 "paddingBottom": 0,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); }
 },
 "shadow": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "click": "eval('parent.connectWallet();');",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "vrPolyfillScale": 1,
 "mobileMipmappingEnabled": true,
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_F3C2539D_E2C9_2FB3_41C7_36CD4EB13B8C",
 "minWidth": 20,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "data": {
  "name": "Player536"
 },
 "contentOpaque": false,
 "desktopMipmappingEnabled": true,
 "mouseWheelEnabled": true
})