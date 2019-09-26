const buttonsTemplate = [
  {
    isFilled: true,
    image: "check-white",
    text: "Синхронизовано"
  },
  {
    image: "check",
    text: "Инфа"
  },
  {
    image: "check",
    text: "Прайс"
  },
  {
    image: "check",
    text: "Фото"
  },
  {
    image: "check",
    text: "Акции"
  }
];

const cards = {
  Google: {
    header: {
      title: "Google",
      info: ["все 30 заведений настроены"]
    },
    rating: 5,
    state: "purple",
    review: 4,
    reply: 3,
    update: 2,
    buttons: buttonsTemplate
  },
  "2gis": {
    header: {
      title: "2Gis",
      info: ["все 30 заведений настроены"]
    },
    rating: 2,
    state: "purple",
    review: 1,
    reply: 0,
    update: 0,
    buttons: buttonsTemplate
  },
  Rambler: {
    header: {
      title: "Rambler",
      info: ["все 30 заведений настроены"]
    },
    rating: 3,
    state: "orange",
    review: 2,
    reply: 1,
    update: 0,
    buttons: buttonsTemplate
  },
  Yandex: {
    header: {
      title: "Yandex",
      info: ["все 30 заведений настроены"]
    },
    rating: 4,
    state: "gray",
    review: 3,
    reply: 2,
    update: 1,
    buttons: buttonsTemplate
  },
  Waze: {
    header: {
      title: "Waze",
      info: ["все 30 заведений настроены"]
    },
    rating: 1,
    state: "gray",
    review: 0,
    reply: 0,
    update: 0,
    buttons: buttonsTemplate
  },
  Flad: {
    header: {
      title: "Flad",
      info: ["30 заведений", "4 настроено", "20 в поиске"]
    },
    footer: {
      disabled: true,
      text: "Портал без рейтинга"
    },
    rating: 0,
    state: "purple",
    buttons: [
      {
        image: "reload",
        text: "Создаём 3 страницы"
      },
      {
        image: "check",
        text: "Инфа"
      },
      {
        image: "check",
        text: "Прайс"
      },
      {
        image: "check",
        text: "Фото"
      },
      {
        image: "check",
        text: "Акции"
      }
    ],
    isWarning: true
  },
  "2Gis (old)": {
    header: {
      title: "2Gis (old)"
    },
    footer: {
      disabled: true,
      text: "Поиск заведений: 15 из 78..."
    },
    rating: 0,
    state: "gray",
    buttons: [
      {
        image: "reload",
        text: "Создаём 3 страницы"
      }
    ],
    isWarning: true
  },
  Yell: {
    header: {
      title: "Yell"
    },
    rating: 0,
    footer: {
      disabled: true,
      text: "Площадка отключена"
    },
    state: "gray"
  }
};

const jsonData = [
  { title: "Google" },
  { title: "Yandex" },
  { title: "Rambler" },
  { title: "2gis" },
  { title: "Waze" }
];

export { cards, jsonData };
