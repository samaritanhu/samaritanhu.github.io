export const site = {
  name: "Fuma Jiang",
  title: "Fuma Jiang — A Salon for Deep Questions",
  description: "A personal site about intelligence, intimacy, and places that change us.",
};

export const rooms = [
  {
    id: "thinking",
    index: "01",
    title: "Thinking",
    description: "Mathematics, machine learning, privacy, and the structures beneath the systems we trust.",
    href: "#question-garden",
  },
  {
    id: "field-notes",
    index: "02",
    title: "Field notes",
    description: "Solo roads, mountain weather, film grain, and the small evidence of a life in motion.",
    href: "#field-notes",
  },
  {
    id: "salon",
    index: "03",
    title: "The salon",
    description: "Books, long dinners, chosen family, and questions worth staying with.",
    href: "#salon",
  },
] as const;

export const fieldNotes = [
  {
    image: "/images/field-notes/havasu-falls.jpg",
    alt: "Fuma sitting beside turquoise water and red canyon rock at Havasupai",
    place: "Havasupai, Arizona",
    caption: "When I am not I, I am wind usually. Sorting yesterdays by the color of turquoise and the legend of red rocks.",
    source: "Instagram / April 2026",
    href: "https://www.instagram.com/samaritanhu/p/DXX3b8Hj6WY/",
  },
  {
    image: "/images/field-notes/thriving-mushrooms-week-one.jpg",
    alt: "Members of the Thriving Mushrooms coliving community gathered inside a Noe Valley home",
    place: "Noe Valley, San Francisco",
    caption: "First week is done — spreading love and support for each other.",
    source: "Thriving Mushrooms / September 2024",
    href: "https://www.instagram.com/p/C_uGD44pPFC/?img_index=1",
  },
] as const;
