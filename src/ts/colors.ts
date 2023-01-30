// Challenge Colors
const mainColors = [
  "#3d3846", //--learnmyog-purple: #3d3846ff
  "#312744", //--dark-purple: #312744ff
  "#133653", //--prussian-blue: #133653ff
  "#2a3d37", //--green-mountain: #2a3d37ff
  "#433818", //--army-olive: #433818ff
  "#375466", //--blue-wave: #375466ff;
];

const accentColors = [
  "#1874dd", //--bright-navy-blue: #1874ddff
  "#019aa5", //--viridian-green: #019aa5ff
  "#e76f51", // earthy orange
  "#b063aa", //--pearly-purple: #b063aaff
  "#d0046f", //--magenta-dye: #d0046fff
  "#a0743c", //--coyote-brown: #a0743cff
];

export function getColors() {
  let primary = mainColors[randomNumberInList(mainColors)];
  let secondary = accentColors[randomNumberInList(accentColors)];

  return {
    banner: primary,
    overlay: hexToRGB(primary, 0.4),
    spotlight: secondary,
  };
}

function randomNumberInList(list: string[]) {
  return Math.floor(Math.random() * list.length);
}

function hexToRGB(hex: string, alpha = 1) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${[r, g, b, alpha].join(", ")})`;
}
