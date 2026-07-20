export type Locale = "en" | "zh";

export const site = {
  en: {
    name: "Fuma Jiang",
    title: "Fuma Jiang — A Salon for Deep Questions",
    description: "A personal site about intelligence, intimacy, and places that change us.",
  },
  zh: {
    name: "Fuma Jiang",
    title: "Fuma Jiang — 问世之所",
    description: "关于智识、亲密与山川的个人札记。",
  },
} as const;

export const routes = {
  en: { home: "/", thinking: "/thinking/", fieldNotes: "/field-notes/", salon: "/salon/" },
  zh: { home: "/zh/", thinking: "/zh/thinking/", fieldNotes: "/zh/field-notes/", salon: "/zh/salon/" },
} as const;

export const copy = {
  en: {
    nav: [
      ["Thinking", "thinking"],
      ["Field notes", "fieldNotes"],
      ["The salon", "salon"],
    ],
    languageLabel: "中文",
    languageHref: "/zh/",
    hero: {
      eyebrow: "01 — personal fieldwork",
      title: "Building with <em>machines.</em><br />Living with questions.",
      lede: "I’m interested in intelligence, intimacy, and the places that change us.",
      statusLabel: "Yosemite / 35mm film",
      status: "A place that makes the scale of a question visible.",
    },
    rooms: [
      ["01", "Thinking", "Mathematics, machine learning, privacy, and the structures beneath the systems we trust.", "thinking"],
      ["02", "Field notes", "Solo roads, mountain weather, film grain, and the small evidence of a life in motion.", "fieldNotes"],
      ["03", "The salon", "Books, long dinners, chosen family, and questions worth staying with.", "salon"],
    ],
    question: {
      eyebrow: "A question garden / no. 07",
      title: "How do we build intelligence <span>without losing intimacy?</span>",
      label: "A question to carry",
      text: "Not a claim, not a brand statement. Just a question that belongs beside research, friendship, and the future we are making.",
    },
    field: { eyebrow: "02 — traces of a moving life", title: "Field notes", archive: "An archive, not a feed", aside: "A small collection of places that altered the scale of a question." },
    salon: {
      eyebrow: "03 — a room for conversation",
      title: "The salon",
      quote: "“Time changes things. We pay the price for everything that can turn: <em>food, shelter, souls.</em>”",
      source: "李翊云 / adapted from the text shared by Fuma",
      label: "Reading room",
      aside: "For the sentences that stay, and the conversations that make a person less alone.",
    },
    footer: "Leave with a better question.",
    film: { aria: "Film photographs from Patagonia", title: "The distances we keep.", text: "35mm frames from the road / Patagonia<br />not a feed, an afterimage" },
  },
  zh: {
    nav: [
      ["思索", "thinking"],
      ["行迹", "fieldNotes"],
      ["会客之室", "salon"],
    ],
    languageLabel: "EN",
    languageHref: "/",
    hero: {
      eyebrow: "其一 — 私人行旅",
      title: "造物以观世。<br /><em>行远以观己。</em>",
      lede: "问智识、亲密与山川。",
      statusLabel: "优胜美地 / 35 毫米胶片",
      status: "山川使问题显形。",
    },
    rooms: [
      ["01", "思索", "数理、机器与隐私。", "thinking"],
      ["02", "行迹", "独行、山色与胶片。", "fieldNotes"],
      ["03", "会客之室", "书页、长桌与未竟之问。", "salon"],
    ],
    question: {
      eyebrow: "问圃 / 第七问",
      title: "机器愈明，<span>人仍可相亲乎？</span>",
      label: "可携之一问",
      text: "不答，只随身携带。",
    },
    field: { eyebrow: "其二 — 流动的遗迹", title: "行迹", archive: "存档，非信息流", aside: "地点，改易问题的尺度。" },
    salon: {
      eyebrow: "其三 — 言谈之室",
      title: "会客之室",
      quote: "“凡可变易之物，皆须付出代价：<em>食物、梁木、灵魂。</em>”",
      source: "李翊云 / 据 Fuma 所分享的文字节译",
      label: "读书之室",
      aside: "留给不散的句子与长谈。",
    },
    footer: "携一问去。",
    film: { aria: "巴塔哥尼亚的胶片照片", title: "人所保留的远方。", text: "途中之 35 毫米影格 / 巴塔哥尼亚<br />非信息流，只作余像" },
  },
} as const;

export const pageCopy = {
  en: {
    thinking: { eyebrow: "01 / working notes", title: "Thinking", intro: "A line of inquiry from machines made in adolescence to the systems people are asked to trust.", sections: [["Foundations", "Robotics first made abstraction tangible. Mathematics later taught me to linger with structure, proof, and the pleasure of an exact question."], ["Trust", "Information security and privacy made the human stake of a technical system impossible to ignore. What is safe enough to be entrusted with a life?"], ["Intelligence", "I have written across LLM training and privacy. I remain interested in what intelligence should preserve, not only what it can optimize."]] },
    fieldNotes: { eyebrow: "02 / an archive of movement", title: "Field notes", intro: "Not an itinerary. A collection of places, weather, and gatherings that returned a question in another shape.", sections: [["Mountain weather", "In the mountains, the self grows smaller without becoming less real. Film keeps the grain of that adjustment."], ["Living together", "Coliving taught me that intimacy can be architectural: a dinner, a borrowed room, a conversation allowed to continue after midnight."]] },
    salon: { eyebrow: "03 / a room kept open", title: "The salon", intro: "A reading room for language that persists, and for the deep connections that make a life more inhabitable.", sections: [["Books", "Classical literature and philosophy: not answers, but instruments for making a question more exact."], ["Long tables", "A salon begins whenever people decide that attention is worth giving without an agenda."], ["Sentences that remain", "Some sentences live with us long after their context has faded. This room is for keeping them near."]] },
  },
  zh: {
    fieldNotes: { eyebrow: "其二 / 行旅存档", title: "行迹", intro: "地点与相逢，使旧问换了形状。", sections: [["山中天气", "入山，方知自身之小。"], ["与人共居", "一顿饭，亦可筑起亲密。"]] },
  },
} as const;

export type FieldNote = {
  image: string;
  alt: string;
  place: string;
  placeZh: string;
  caption: string;
  captionZh: string;
  source: string;
  sourceZh: string;
  href: string;
  gallery?: { image: string; alt: string }[];
};

export const fieldNotes: FieldNote[] = [
  {
    image: "/images/field-notes/havasu-falls.jpg",
    alt: "Fuma sitting beside turquoise water and red canyon rock at Havasupai",
    place: "Havasupai, Arizona",
    placeZh: "哈瓦苏派，亚利桑那",
    caption: "When I am not I, I am wind usually. Sorting yesterdays by the color of turquoise and the legend of red rocks.",
    captionZh: "红岩与碧水，风过。",
    source: "Instagram / April 2026",
    sourceZh: "Instagram / 2026 年 4 月",
    href: "https://www.instagram.com/samaritanhu/p/DXX3b8Hj6WY/",
  },
  {
    image: "/images/field-notes/thriving-mushrooms-week-one.jpg",
    alt: "Members of the Thriving Mushrooms coliving community gathered inside a Noe Valley home",
    place: "Noe Valley, San Francisco",
    placeZh: "诺伊谷，旧金山",
    caption: "First week is done — spreading love and support for each other.",
    captionZh: "第一周：爱意与扶持。",
    source: "Thriving Mushrooms / September 2024",
    sourceZh: "Thriving Mushrooms / 2024 年 9 月",
    href: "https://www.instagram.com/p/C_uGD44pPFC/?img_index=1",
  },
  {
    image: "/images/field-notes/mt-whitney.jpg",
    alt: "Fuma sitting on the summit of Mt. Whitney with the Sierra Nevada behind her",
    place: "Mt. Whitney, California",
    placeZh: "惠特尼峰，加州",
    caption: "From starlight at 1 a.m., through sunrise, to sunset on the way down — perhaps this is the deepest romance of the mountains.",
    captionZh: "凌晨一时从星空出发，走过日出，至下山时的日落；或许是户外人最大的浪漫。",
    source: "Instagram / July 3, 2026",
    sourceZh: "Instagram / 2026 年 7 月 3 日",
    href: "https://www.instagram.com/samaritanhu/",
  },
  {
    image: "/images/field-notes/36-hours-living-lab.jpg",
    alt: "Friends gathered in a living room during a 36-hour living laboratory",
    place: "36-hour living laboratory",
    placeZh: "三十六小时生活实验室",
    caption: "Ten people, thirty possible activities, eight carried out: a tiny community lived half a metre above the ground.",
    captionZh: "十人想出三十种活动，三十六小时完成八项；一座离地半米的微型乌托邦。",
    source: "Personal archive / June 23, 2025",
    sourceZh: "个人存档 / 2025 年 6 月 23 日",
    href: "https://www.instagram.com/p/DLTx84SOLCb/?img_index=1",
    gallery: [
      { image: "/images/field-notes/36-hours-drawings.jpg", alt: "Drawings made during the 36-hour living laboratory" },
      { image: "/images/field-notes/36-hours-kitchen.jpg", alt: "Cooking and gathering during the 36-hour living laboratory" },
    ],
  },
  {
    image: "/images/field-notes/half-dome.jpg",
    alt: "Fuma standing on Half Dome above Yosemite Valley",
    place: "Half Dome, Yosemite",
    placeZh: "半圆顶，优胜美地",
    caption: "Ten hours, 21 miles, and the cables: life is an adventure — let’s go.",
    captionZh: "十小时，二十一英里，走过缆绳；人生是冒险，出发吧。",
    source: "Instagram / June 2025",
    sourceZh: "Instagram / 2025 年 6 月",
    href: "https://www.instagram.com/samaritanhu/",
  },
  {
    image: "/images/field-notes/mooncake-workshop.jpg",
    alt: "Friends making moon cakes together at a Thriving Mushrooms gathering",
    place: "Thriving Mushrooms",
    placeZh: "蘑菇小屋",
    caption: "Mushrooms love making moon cakes.",
    captionZh: "蘑菇小屋，学做冰皮月饼。",
    source: "Thriving Mushrooms / August 2024",
    sourceZh: "Thriving Mushrooms / 2024 年 8 月",
    href: "https://www.instagram.com/p/C-4hpRLRw0b/?img_index=1",
  },
  {
    image: "/images/field-notes/sequoia-after-defcon.jpg",
    alt: "Fuma overlooking the mountains at Sequoia National Park",
    place: "DEF CON → Sequoia",
    placeZh: "DEF CON → 红杉国家公园",
    caption: "From a security conference to a high ridge: a useful change of scale.",
    captionZh: "从安全大会到高岭，换一种尺度。",
    source: "Personal archive / September 2024",
    sourceZh: "个人存档 / 2024 年 9 月",
    href: "https://www.instagram.com/samaritanhu/",
    gallery: [
      { image: "/images/field-notes/defcon-tacos.jpg", alt: "A meal after DEF CON" },
    ],
  },
  {
    image: "/images/field-notes/patagonia-torres.jpg",
    alt: "Fuma beside the Torres del Paine towers in Patagonia",
    place: "Torres del Paine, Patagonia",
    placeZh: "百内国家公园，巴塔哥尼亚",
    caption: "The trail has no progress bar. Each step asks to be lived while it is happening.",
    captionZh: "人生没有进度条；每一步都要在当下走完。",
    source: "Personal archive / December 2024",
    sourceZh: "个人存档 / 2024 年 12 月",
    href: "https://www.instagram.com/samaritanhu/",
    gallery: [
      { image: "/images/field-notes/patagonia-trail.jpg", alt: "A hiker on the Patagonia trail" },
      { image: "/images/field-notes/patagonia-glacier.jpg", alt: "A glacier in Patagonia" },
    ],
  },
  {
    image: "/images/field-notes/peru-solo-travel.jpg",
    alt: "Solo travellers gathered on a dune buggy in Huacachina, Peru",
    place: "Huacachina, Peru",
    placeZh: "瓦卡奇纳，秘鲁",
    caption: "Different accents, familiar worries. First we are people; only then are we from somewhere.",
    captionZh: "口音各异，烦恼相似；我们先是人，才有国别。",
    source: "Personal archive / July 2024",
    sourceZh: "个人存档 / 2024 年 7 月",
    href: "https://www.instagram.com/samaritanhu/",
  },
  {
    image: "/images/field-notes/seattle-rainier.jpg",
    alt: "Mount Rainier seen above the forest outside Seattle",
    place: "Seattle, Washington",
    placeZh: "西雅图，华盛顿州",
    caption: "A short summer dream: long daylight, forests, mountains, and a very good post-hike burger.",
    captionZh: "夏时梦短，日暖昼长；森林、山与练后汉堡。",
    source: "Personal archive / summer",
    sourceZh: "个人存档 / 夏日",
    href: "https://www.instagram.com/samaritanhu/",
    gallery: [
      { image: "/images/field-notes/seattle-forest.jpg", alt: "A forest trail outside Seattle" },
      { image: "/images/field-notes/seattle-waterfront.jpg", alt: "Seattle waterfront at night" },
    ],
  },
  {
    image: "/images/field-notes/burning-man-black-rock.jpg",
    alt: "Fuma at Black Rock City with goggles and a desert camp behind her",
    place: "Black Rock City, Nevada",
    placeZh: "黑石城，内华达",
    caption: "A new coordinate: 6:30 and ∞ F. Put down expectations; learn what the desert reflects back.",
    captionZh: "新的坐标：6:30 与 ∞ F。放下期待，看看沙漠映回什么。",
    source: "Personal archive / August 31, 2025",
    sourceZh: "个人存档 / 2025 年 8 月 31 日",
    href: "https://www.instagram.com/samaritanhu/",
  },
  {
    image: "/images/field-notes/flight-stickers.jpg",
    alt: "A boarding pass covered in colorful stickers held inside an airplane galley",
    place: "Over the Pacific",
    placeZh: "太平洋上空",
    caption: "A long-haul pause: stickers on a boarding pass and a small friendship at 30,000 feet.",
    captionZh: "长途飞行的间隙：在登机牌上贴贴纸，也在三万英尺处相识。",
    source: "Personal archive / April 10, 2025",
    sourceZh: "个人存档 / 2025 年 4 月 10 日",
    href: "https://www.instagram.com/samaritanhu/",
    gallery: [
      { image: "/images/field-notes/flight-cabin.jpg", alt: "Fuma with a flight attendant in the aircraft galley" },
    ],
  },
] as const;

export const travelFrames = [
  { image: "/images/film/mountain-trail.jpg", alt: "Fuma holding hiking poles in a mountain valley" },
  { image: "/images/film/sierras-lake.jpg", alt: "A blue alpine lake in the Sierra Nevada" },
  { image: "/images/film/patagonia-tents.jpg", alt: "Yellow tents beneath mountains in Patagonia" },
  { image: "/images/film/beijing-lake.jpg", alt: "A boat passing beneath trees on a lake in Beijing" },
] as const;
