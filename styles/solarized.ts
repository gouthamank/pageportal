const solarizedPalette = {
  backgrounds: {
    base03: '#002b36',
    base02: '#073642',
    base3: '#fdf6e3',
    base2: '#eee8d5',
  },
  content: {
    base0: '#839496',
    base1: '#93a1a1',
    base00: '#657b83',
    base01: '#586e75',
  },
  accents: {
    yellow: '#b58900',
    orange: '#cb4b16',
    red: '#dc322f',
    magenta: '#d33682',
    violet: '#6c71c4',
    blue: '#268bd2',
    cyan: '#2aa198',
    green: '#859900',
  },
};

const solarized = {
  light: {
    backgroundSoft: solarizedPalette.backgrounds.base3,
    backgroundHard: solarizedPalette.backgrounds.base2,
    contentSoft: solarizedPalette.content.base0,
    contentHard: solarizedPalette.content.base1,
    accents: solarizedPalette.accents,
  },
  dark: {
    backgroundSoft: solarizedPalette.backgrounds.base03,
    backgroundHard: solarizedPalette.backgrounds.base02,
    contentSoft: solarizedPalette.content.base00,
    contentHard: solarizedPalette.content.base01,
    accents: solarizedPalette.accents,
  },
};

export default solarized;
