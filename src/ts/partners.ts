export const partnerInfos = {
  ripstopbytheroll: {
    label: "Ripstop by the Roll",
    link: "https://ripstopbytheroll.com/?rfsn=4608557.2d546b9",
    linkFn: (product: string) =>
      `https://ripstopbytheroll.com/products/${product}?rfsn=4608557.2d546b9`,
    image: import("@/images/shared/partners/200/RBTR.webp"),
  },
  discoveryfabrics: {
    label: "Discovery Fabrics",
    link: "https://r.efer.me/6619983774018",
    image: import("@/images/shared/partners/200/discoveryfabrics.webp"),
  },
  mozetsupplies: {
    label: "Mozet Supplies",
    link: "https://mozetsupplies.ca/?ref=myog",
    image: import("@/images/shared/partners/200/mozet.webp"),
  },
  questoutfitters: {
    label: "Quest Outfitters",
    link: "https://www.questoutfitters.com/",
    linkFn: (product: string) => `https://www.questoutfitters.com/${product}`,
    image: import("@/images/shared/partners/200/questoutfitters.webp"),
  },
  adventurexpert: {
    label: "AdventurExpert",
    link: "https://www.adventurexpert.com/",
    image: import("@/images/shared/partners/200/adventurexpert.webp"),
    linkFn: (product: string) =>
      `https://www.adventurexpert.com/product/${product}/`,
  },
  wawak: {
    label: "Wawak",
    link: "https://www.wawak.com/",
    image: import("@/images/shared/partners/200/wawak.webp"),
  },
  therainshed: {
    label: "The Rainshed",
    link: "https://www.therainshed.com/",
    image: import("@/images/shared/partners/200/therainshed.webp"),
  },
  refasten: {
    label: "ReFasten.ca",
    image: import("@/images/shared/partners/200/refasten.webp"),
    link: "https://refasten.ca",
    linkFn: (product: string) =>
      `https://refasten.ca/collections/fabric/products/${product}/`,
  },
  amazon: {
    label: "Amazon.com",
    image: import("@/images/shared/partners/200/amazon.webp"),
    link: "https:amazon.com/",
    linkFn: (product: string) => `https://amzn.to/${product}`,
  },
} as Record<
  string,
  {
    label: string;
    link: string;
    image: any;
    linkFn?: (product: string) => string;
  }
>;
