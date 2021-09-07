var simplemaps_statemap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "https://simplemaps.com",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "yes",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: "5",
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: false,
    manual_zoom: "yes",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    "06001": {
      name: "Alameda"
    },
    "06003": {
      name: "Alpine"
    },
    "06005": {
      name: "Amador"
    },
    "06007": {
      name: "Butte"
    },
    "06009": {
      name: "Calaveras"
    },
    "06011": {
      name: "Colusa"
    },
    "06013": {
      name: "Contra Costa"
    },
    "06015": {
      name: "Del Norte"
    },
    "06017": {
      name: "El Dorado"
    },
    "06019": {
      name: "Fresno"
    },
    "06021": {
      name: "Glenn"
    },
    "06023": {
      name: "Humboldt"
    },
    "06025": {
      name: "Imperial"
    },
    "06027": {
      name: "Inyo"
    },
    "06029": {
      name: "Kern"
    },
    "06031": {
      name: "Kings"
    },
    "06033": {
      name: "Lake"
    },
    "06035": {
      name: "Lassen"
    },
    "06037": {
      name: "Los Angeles"
    },
    "06039": {
      name: "Madera"
    },
    "06041": {
      name: "Marin"
    },
    "06043": {
      name: "Mariposa"
    },
    "06045": {
      name: "Mendocino"
    },
    "06047": {
      name: "Merced"
    },
    "06049": {
      name: "Modoc"
    },
    "06051": {
      name: "Mono"
    },
    "06053": {
      name: "Monterey"
    },
    "06055": {
      name: "Napa"
    },
    "06057": {
      name: "Nevada"
    },
    "06059": {
      name: "Orange"
    },
    "06061": {
      name: "Placer"
    },
    "06063": {
      name: "Plumas"
    },
    "06065": {
      name: "Riverside"
    },
    "06067": {
      name: "Sacramento"
    },
    "06069": {
      name: "San Benito"
    },
    "06071": {
      name: "San Bernardino"
    },
    "06073": {
      name: "San Diego"
    },
    "06075": {
      name: "San Francisco"
    },
    "06077": {
      name: "San Joaquin"
    },
    "06079": {
      name: "San Luis Obispo"
    },
    "06081": {
      name: "San Mateo"
    },
    "06083": {
      name: "Santa Barbara"
    },
    "06085": {
      name: "Santa Clara"
    },
    "06087": {
      name: "Santa Cruz",
      inactive: "no",
      zoomable: "yes",
      color: "red",
      hover_color: "maroon"
    },
    "06089": {
      name: "Shasta"
    },
    "06091": {
      name: "Sierra"
    },
    "06093": {
      name: "Siskiyou"
    },
    "06095": {
      name: "Solano"
    },
    "06097": {
      name: "Sonoma"
    },
    "06099": {
      name: "Stanislaus"
    },
    "06101": {
      name: "Sutter"
    },
    "06103": {
      name: "Tehama"
    },
    "06105": {
      name: "Trinity"
    },
    "06107": {
      name: "Tulare"
    },
    "06109": {
      name: "Tuolumne"
    },
    "06111": {
      name: "Ventura"
    },
    "06113": {
      name: "Yolo"
    },
    "06115": {
      name: "Yuba"
    }
  },
  locations: {
    "0": {
      lat: 36.96,
      lng: -122.02,
      name: "21 Municipal Wharf, Santa Cruz, CA 95060",
      description: "Cowell's Beach"
    },
    "1": {
      lat: 36.96,
      lng: -121.984,
      name: "E Cliff Dr, Santa Cruz, CA 95062",
      description: "Pleasure Point"
    },
    "2": {
      lat: 36.975,
      lng: -121.954,
      name: "Capitola",
      description: "Capitola"
    }
  },
  labels: {
    "0": {
      name: "Beach"
    },
    "1": {
      x: 276.8,
      y: 579.7,
      parent_type: "location"
    },
    "2": {
      name: "Cowell Beach",
      x: 3241.5,
      y: -45.3,
      parent_type: "location",
      parent_id: "1"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};