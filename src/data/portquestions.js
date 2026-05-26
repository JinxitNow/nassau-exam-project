// src/data/portQuestions.js

// Første spørgsmål (fælles for alle)
export const FIRST_QUESTION = {
  id: "porttype",
  question: "Hvilken type og størrelse port har du brug for?",
  options: [
    {
      label: "GARAGEPORT <br>2-5 m i bredden og 1,83-3 m i højden",
      value: "garage_standard"
    },
    {
      label:
        "GARAGEPORT <br>under 1 m eller over 6 m i bredde og under 1,83 m eller over 3 m i højde",
      value: "garage_special"
    },
    {
      label: "LEDHEJSEPORT / INDUSTRIPORT <br>2-6 m i bredden og 2-5 m i højden",
      value: "ledhejseport"
    },
    {
      label:
        "LAVENERGIPORT <br>2-6 m i bredden og 2,95-5 m i højden",
      value: "lavenergiport"
    },
    {
      label:
        "HURTIGPORT <br>inkl. Dynaco Cleanroom, fryserumsport eller kølerumsport",
      value: "hurtigport"
    }
  ]
}

// FLOW pr. porttype
export const PORT_FLOWS = {
  garage_standard: [
  {
    id: "design",
    question: "Hvilket design foretrækker du?",
    options: [
      { label: "Classic: Stucco-struktur og mulighed for at vælge mellem 11 farver", value: "classic" },
      { label: "Softline: Granit/Sablé-struktur og mulighed for at vælge mellem 3 farver", value: "softline" },
      { label: "Woodgrain: Imiteret træ-struktur og mulighed for at vælge mellem 2 farver.", value: "woodgrain" }
    ]
  },

  {
    id: "vinduer",
    question: "Skal der være vindue(r) i porten?",
    image: "/img/quiz-vinduer.svg",
    options: [
      { label: "Ja tak", value: true },
      { label: "Nej tak", value: false }
    ]
  },

  {
    id: "doer",
    question: "Skal der dør i porten eller ved siden af porten?",
     image: "/img/quiz-doer.svg",
    options: [
      {
        label: "Ja tak",
        value: "ja",
        end: true,
        resultKey: "garage_standard_doer_ja" // Quiz afsluttes her
      },
      { label: "Nej tak", value: "nej" }
    ]
  },

  {
    id: "smart",
    question: "Ønsker du smartudstyr (Ismartgate, SmartPhone connect Stick) til porten?",
     image: "/img/quiz-smart.svg",
    options: [
      { label: "Ja tak", value: true },
      { label: "Nej tak", value: false }
    ]
  },

  {
    id: "montage",
    question: "Hvem skal montere porten?",
    options: [
      {
        label: "Nassau skal montere for mig",
        value: "nassau"
      },
      {
        label: "Det vil jeg gerne selv",
        value: "selv"
      }
    ]
  },

  {
    id: "plads",
    question: "Hvor meget plads har du til montering af porten?",
     image: "/img/quiz-opmaaling.svg",
    options: [
      {
        label: "H<2,33 m: <br> Overhøjde min. 120 mm ved portbredde på 2-3 m. <br> eller overhøjde min. 140 mm ved en portbredde på 3-5 m. <br> Der skal være min. 90 mm sideplads. <br>Rumdybde skal være min. 3,305m ved garagehøjde mellem 1,83-2,125mm, eller min. 3,555 ved garagehøjde mellem 2,126-2,33 m",
        value: "nrx",
        end: true,
        resultKey: "garage_standard_nrx"
      },
      {
        label: "H>2,33m: <br> Overhøjde min. 120 mm ved portbredde på 2-3 m. <br> Overhøjde min. 140 mm ved en portbredde på 3-5 m. <br> Der skal være min. 100 mm sideplads. <br>Rumdybde skal være min. 3,305m ved garagehøjde mellem 1,83-2,125mm, eller min. 3,555 ved garagehøjde mellem 2,126-2,33 m",
        value: "nrt",
        end: true,
        resultKey: "garage_standard_nrt"
      }
    ]
  }
],
  garage_special: [
    {
      id: "design",
      question: "Hvilket design foretrækker du?",
      options: [
        {
          label: "Panorama med aflange vinduessektioner",
          value: "panorama"
        },
        {
          label: "Kombination af glas/fyldninger",
          value: "glas_fyldning"
        },
        { label: "Andet", value: "andet" }
      ]
    },
    {
      id: "vinduer",
      question: "Skal der være vindue(r) i porten?",
      image: "/img/quiz-vinduer.svg",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "doer",
      question: "Skal der dør i porten eller ved siden af porten?",
      image: "/img/quiz-doer.svg",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "smart",
      question:
        "Ønsker du smartudstyr (Ismartgate, SmartPhone connect Stick) til porten?",
        image: "/img/quiz-smart.svg",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "montage",
      question: "Hvem skal montere porten?",
      options: [
        {
          label:
            "Nassau skal montere",
          value: "nassau",
          end: true,
          resultKey: "garage_special_montage_nassau"
        },
        {
          label:
            "Det vil jeg gerne selv",
          value: "selv",
          end: true,
          resultKey: "garage_special_montage_selv"
        }
      ]
    }
  ],

  ledhejseport: [
    {
      id: "design",
      question: "Hvilket design foretrækker du?",
      options: [
        { label: "Standard port med fokus på holdbarhed", value: "standard" },
        {
          label: "Panorama med aflange vinduessektioner",
          value: "panorama"
        },
        {
          label: "Kombination af glas/fyldninger",
          value: "glas_fyldning"
        }
      ]
    },
    {
      id: "vinduer",
      question: "Skal der være vindue(r) i porten?",
      image: "/img/quiz-vinduer.svg",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "doer",
      question: "Skal der dør i porten eller ved siden af porten?",
      image: "/img/quiz-doer.svg",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "motor",
      question: "Ønsker du motor inkl. el-betjening til porten?",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "taghaeldning",
      question: "Skal skinner følge taghældningen?",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "u_vaerdi",
      question: "Har u-værdien stor betydning?",
      image: "/img/quiz-isolering.svg",
      options: [
        {
          label: "Ja",
          value: "ja",
          end: true,
          resultKey: "ledhejseport_u_ja"
        },
        { label: "Nej", value: "nej" }
      ]
    },
    {
      id: "montage",
      question: "Hvem skal montere porten?",
      options: [
        {
          label:
            "Nassau skal montere",
          value: "nassau",
          end: true,
          resultKey: "ledhejseport_montage_nassau"
        },
        {
          label:
            "Det vil jeg gerne selv",
          value: "selv",
          end: true,
          resultKey: "ledhejseport_montage_selv"
        }
      ]
    }
  ],

  lavenergiport: [
    {
      id: "design",
      question: "Hvilket design foretrækker du?",
      image: "/img/quiz-isolering.svg",
      options: [
        { label: "Standard port med lav u-værdi", value: "standard" },
        {
          label: "Lav u-værdi + hurtig åbne/lukke",
          value: "hurtig"
        },
        { label: "Ruder + lav u-værdi", value: "ruder" }
      ]
    },
    {
      id: "vinduer",
      question: "Skal der være vinduer i porten?",
      image: "/img/quiz-vinduer.svg",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "doer",
      question: "Skal der dør i porten eller ved siden af porten?",
      image: "/img/quiz-doer.svg",
      options: [
        {
          label:
            "Ja tak",
          value: "ja",
          end: true,
          resultKey: "lavenergi_doer_ja"
        },
        { label: "Nej tak", value: "nej" }
      ]
    },
    {
      id: "motor",
      question: "Ønsker du motor inkl. el-betjening til porten?",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "taghaeldning",
      question: "Skal skinner følge taghældningen?",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "plads",
      question: "Er der nok plads til montering af porten?",
      image: "/img/quiz-Opmaaling.svg",
      options: [
        {
          label: "Ja, der er min. 50 cm i overhøjde",
          value: "min50"
        },
        {
          label:
            "Ja, der er mere end 3 m i overhøjde",
          value: "over3m",
          end: true,
          resultKey: "lavenergi_plads_over3m"
        },
        {
          label:
            "Nej, der er mindre end 50 cm i overhøjde",
          value: "under50",
          end: true,
          resultKey: "lavenergi_plads_under50"
        }
      ]
    },
    {
      id: "montage",
      question: "Hvem skal montere porten?",
      options: [
        {
          label:
            "Nassau skal montere",
          value: "nassau",
          end: true,
          resultKey: "lavenergi_montage_nassau"
        },
        {
          label:
            "Det vil jeg gerne selv",
          value: "selv",
          end: true,
          resultKey: "lavenergi_montage_selv"
        }
      ]
    }
  ],

  hurtigport: [
    {
      id: "design",
      question: "Hvilket design foretrækker du?",
      options: [
        { label: "Rulleport med PVC-dug", value: "pvc" },
        { label: "Standard alu-port med/uden ruder", value: "alu" }
      ]
    },
    {
      id: "vinduer",
      question: "Skal der være vinduer i porten?",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "doer",
      question: "Skal der dør i porten eller ved siden af porten?",
      options: [
        {
          label:
            "Ja tak",
          value: "ja",
          end: true,
          resultKey: "hurtig_doer_ja"
        },
        { label: "Nej tak", value: "nej" }
      ]
    },
    {
      id: "automation",
      question: "Ønsker du en automatiseringsløsning til porten?",
      image: "/img/quiz-automatik.svg",
      options: [
        { label: "Ja tak", value: true },
        { label: "Nej tak", value: false }
      ]
    },
    {
      id: "montage",
      question: "Hvem skal montere porten?",
      options: [
        {
          label:
            "Nassau skal montere",
          value: "nassau",
          end: true,
          resultKey: "hurtig_montage_nassau"
        },
        {
          label:
            "Det vil jeg gerne selv",
          value: "selv",
          end: true,
          resultKey: "hurtig_montage_selv"
        }
      ]
    }
  ]
}

// Resultattekster
export const RESULT_TEXTS = {
  garage_standard_doer_ja:
    "Vi kan desværre ikke montere en dør i en standard garageport. Prøv testen igen eller kontakt en port konsulent",
  garage_standard_nrx: "Vi vil anbefale en en standard NRX garageport.",
  garage_standard_nrt:
    "Kontakt en portkonsulent – En NRT garageport må ikke monteres af privatpersoner.",



  garage_special_montage_nassau:
    "Du kan vælge 9000F, 9000G eller lavenergiport 8000.",
  garage_special_montage_selv:
    "Privatpersoner må ikke selv montere specialporte.",

  ledhejseport_u_ja:
    "U-værdien har stor betydning – vi anbefaler en lavenergiport.",
  ledhejseport_montage_nassau:
    "Du kan vælge 9000F, 9000G, 9000M eller Panorama.",
  ledhejseport_montage_selv:
    "Kun erfarne portmontører må opsætte porte.",

  lavenergi_doer_ja:
    "Dør er ikke muligt ved lavenergiporte – kontakt en portkonsulent.",
  lavenergi_plads_over3m:
    "Kontakt en portkonsulent – overhøjde over 3 m kræver specialløsning.",
  lavenergi_plads_under50:
    "Min. overhøjde 50 cm kræves ved lavenergiporte.",
  lavenergi_montage_nassau:
    "Du kan vælge 8000, 8000 Speed eller 9000MI.",
  lavenergi_montage_selv:
    "Kun erfarne portmontører må opsætte porte.",

  hurtig_doer_ja:
    "Dør er ikke muligt ved hurtigporte – Prø testen igen elle kontakt en portkonsulent.",
  hurtig_montage_nassau:
    "Du kan vælge 4000 Sprint Interior, 4000 Sprint Exterior, 8000 Speed eller Dynaco rulleport.",
  hurtig_montage_selv:
    "Kun erfarne portmontører må opsætte porte."
}
