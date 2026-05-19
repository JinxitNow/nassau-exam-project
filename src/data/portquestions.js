export const quizQuestions = [
  {
    id: 1,
    question: "Hvilken størrelse port har du brug for?",
    key: "portstoerrelse",
    image: "/public/img/question1.webp",
        options: [
      { label: "Op til 2500 x 2100 mm", value: "small" },
      { label: "2500–4000 x 2100–3000 mm", value: "medium" },
      { label: "Over 4000 x 3000 mm", value: "large" }
    ]
  },

  {
    id: 2,
    question: "Hvor meget friplads har du over porthullet?",
    key: "overhoejde",
    image: "/public/img/question2.webp",
    options: [
      { label: "Under 120 mm", value: "low" },
      { label: "120–200 mm", value: "normal" },
      { label: "Over 200 mm", value: "high" }
    ]
  },

  {
    id: 3,
    question: "Skal der være en indbygget dør i porten?",
    key: "doer",
    image: "/public/img/question3.webp",
    options: [
      { label: "Ja", value: true },
      { label: "Nej", value: false }
    ]
  },

  {
    id: 4,
    question: "Skal der være vinduer i porten?",
    key: "vinduer",
    image: "/img/quiz/porttype.webp",   // ⭐ NYT
    options: [
      { label: "Ja", value: true },
      { label: "Nej", value: false }
    ]
  },

  {
    id: 5,
    question: "Har isolering betydning for dig?",
    key: "isolering",
    image: "/img/quiz/porttype.webp",   // ⭐ NYT
    options: [
      { label: "Ja, høj isolering er vigtig", value: true },
      { label: "Nej, isolering er ikke vigtigt", value: false }
    ]
  },

  {
    id: 6,
    question: "Hvor vigtig er hastigheden for åbning/lukning?",
    key: "hastighed",
    image: "/img/quiz/porttype.webp",   // ⭐ NYT
    options: [
      { label: "Normal hastighed er fint", value: "normal" },
      { label: "Hurtig åbning/lukning er vigtig", value: "hurtig" },
      { label: "Meget hurtig (hurtigport)", value: "meget hurtig" }
    ]
  },

  {
    id: 7,
    question: "Hvilket design foretrækker du?",
    key: "design",
    image: "/img/quiz/porttype.webp",   // ⭐ NYT
    options: [
      { label: "Glat overflade", value: "glat" },
      { label: "Træstruktur", value: "træ" },
      { label: "Panoramavinduer", value: "panorama" },
      { label: "Glasfacade", value: "glas" },
      { label: "Standard industri-look", value: "industri" }
    ]
  },

  {
    id: 8,
    question: "Er sikkerhedsniveauet vigtigt for dig?",
    key: "sikkerhed",
    image: "/img/quiz/porttype.webp",   // ⭐ NYT
    options: [
      { label: "Ja, høj sikkerhed er vigtig", value: true },
      { label: "Nej, standard sikkerhed er fint", value: false }
    ]
  },

  {
    id: 9,
    question: "Ønsker du smart-styring (fx app, automatik, IoT)?",
    key: "smart",
    image: "/img/quiz/porttype.webp",
    options: [
      { label: "Ja", value: true },
      { label: "Nej", value: false }
    ]
  }
]
