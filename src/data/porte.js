export const porte = [
  {
    id: "classic",
    navn: "Garageport Classic",
    type: "garage",
    regler: {
      portstoerrelse: { minBredde: 2000, maxBredde: 5000, minHoede: 1830, maxHoede: 2230 },
      friplads: { overhøjde: 120, side: 90 }, 
      doer: true,
      vinduer: true,
      isolering: true, // 44 mm alu-sektioner med høj isolering
      uværdi: 0.5,
      hastighed: "normal",
      design: ["stucco struktur", "vandrette linjer"],
      sikkerhed: true,
      smart: true
    }
  },

  {
    id: "softline",
    navn: "Garageport Softline",
    type: "garage",
    regler: {
      portstoerrelse: { minBredde: 2000, maxBredde: 5000, minHoede: 1830, maxHoede: 2230 },
      friplads: { overhøjde: 120, side: 90 },
      doer: true,
      vinduer: true,
      isolering: true,
      uværdi: 0.5,
      hastighed: "normal",
      design: ["glat overflade", "vandrette linjer", "eksklusivt look"],
      sikkerhed: true,
      smart: true
    }
  },

  {
    id: "woodgrain",
    navn: "Garageport Woodgrain",
    type: "garage",
    regler: {
      portstoerrelse: { minBredde: 2000, maxBredde: 5000, minHoede: 1830, maxHoede: 2230 },
      friplads: { overhøjde: 120, side: 90 },
      doer: true,
      vinduer: true,
      isolering: true,
      uværdi: 0.5,
      hastighed: "normal",
      design: ["træstruktur", "vandrette linjer"],
      sikkerhed: true,
      smart: true
    }
  },

  {
    id: "special",
    navn: "Garageporte Special",
    type: "garage",
    regler: {
      portstoerrelse: "custom",
      friplads: "afhænger af løsning",
      doer: true,
      vinduer: true,
      isolering: true,
      uværdi: 0.5,
      hastighed: "normal",
      design: ["specialdesign"],
      sikkerhed: true,
      smart: true
    }
  },

  // INDUSTRIPORTE – 9000-serien
  {
    id: "9000F",
    navn: "Ledhejseport 9000F",
    type: "industri",
    regler: {
      portstoerrelse: "variabel",
      friplads: "variabel",
      doer: true,
      vinduer: true,
      isolering: true,
      uværdi: "høj isolering",
      hastighed: "normal",
      design: ["standard skumlinje"],
      sikkerhed: true,
      smart: true
    }
  },

  {
    id: "9000G",
    navn: "Ledhejseport 9000G",
    type: "industri",
    regler: {
      portstoerrelse: "variabel",
      friplads: "variabel",
      doer: false,
      vinduer: "fuld glasfacade",
      isolering: false,
      uværdi: "lavere pga. glas",
      hastighed: "normal",
      design: ["glasfacade"],
      sikkerhed: true,
      smart: true
    }
  },

  {
    id: "9000M",
    navn: "Ledhejseport 9000M",
    type: "industri",
    regler: {
      portstoerrelse: "variabel",
      friplads: "variabel",
      doer: true,
      vinduer: true,
      isolering: true,
      uværdi: "mellem",
      hastighed: "normal",
      design: ["mix af glas og isolering"],
      sikkerhed: true,
      smart: true
    }
  },

  {
    id: "9000P",
    navn: "Ledhejseport 9000P+E",
    type: "industri",
    regler: {
      portstoerrelse: "variabel",
      friplads: "variabel",
      doer: true,
      vinduer: "panorama",
      isolering: true,
      uværdi: "høj",
      hastighed: "normal",
      design: ["panoramavinduer"],
      sikkerhed: true,
      smart: true
    }
  },

  // 8000-serien
  {
    id: "8000",
    navn: "Ledhejseport / Lavenergiport 8000",
    type: "industri",
    regler: {
      portstoerrelse: "variabel",
      friplads: "variabel",
      doer: true,
      vinduer: true,
      isolering: true,
      uværdi: "meget høj",
      hastighed: "normal",
      design: ["lavenergi"],
      sikkerhed: true,
      smart: true
    }
  },

  {
    id: "8000Speed",
    navn: "Ledhejseport / Lavenergiport / Hurtigport 8000Speed",
    type: "industri",
    regler: {
      portstoerrelse: "variabel",
      friplads: "variabel",
      doer: true,
      vinduer: true,
      isolering: true,
      uværdi: "meget høj",
      hastighed: "hurtig", // åbner 4x hurtigere, lukker 2x hurtigere
      design: ["lavenergi", "hurtigport"],
      sikkerhed: true,
      smart: true
    }
  },

  {
    id: "9000MI",
    navn: "Lavenergiport 9000MI",
    type: "industri",
    regler: {
      portstoerrelse: "variabel",
      friplads: "variabel",
      doer: true,
      vinduer: true,
      isolering: true,
      uværdi: "ekstremt høj",
      hastighed: "normal",
      design: ["maksimal isolering"],
      sikkerhed: true,
      smart: true
    }
  },

  // HURTIGPORTE
  {
    id: "cleanroom",
    navn: "Hurtigport Cleanroom",
    type: "hurtigport",
    regler: {
      portstoerrelse: "variabel",
      friplads: "variabel",
      doer: false,
      vinduer: true,
      isolering: false,
      uværdi: "ikke relevant",
      hastighed: "meget hurtig",
      design: ["cleanroom"],
      sikkerhed: true,
      smart: true
    }
  },

  {
    id: "4000Sprint",
    navn: "Hurtigport 4000Sprint",
    type: "hurtigport",
    regler: {
      portstoerrelse: "variabel",
      friplads: "variabel",
      doer: false,
      vinduer: true,
      isolering: false,
      uværdi: "ikke relevant",
      hastighed: "meget hurtig",
      design: ["hurtigport"],
      sikkerhed: true,
      smart: true
    }
  }
]
