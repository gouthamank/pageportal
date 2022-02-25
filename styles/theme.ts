import solarizedColors from './solarized';

const light = {
  colors: solarizedColors.light,
};

const dark = {
  colors: solarizedColors.dark,
};

type AppTheme = {
  colors: {
    backgroundSoft: string;
    backgroundHard: string;
    contentSoft: string;
    contentHard: string;
    accents: { [name: string]: string };
  };
};

export const darkTheme: AppTheme = { ...dark };
export const lightTheme: AppTheme = { ...light };
