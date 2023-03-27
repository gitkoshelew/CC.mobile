enum Color {
  StrongDarkBlue = '#212C3F',
  DarkBlue = '#2D3E6B',
  Blue = '#4287f5',
  BlueLight = '#6B9DE9',
  VioletBlue = '#334679',
  VioletBluePurple = '#4D6793',
  DarkPurpleBlue = '#566488',
  Black = '#000000',
  White = '#FFFFFF',
  Red = '#E96B6B',
  Gray = '#EAEAEA',
  GrayLight = '#F0F0F0',
  GrayMedium = '#CCD2E3',
  GrayDark = '#6C6C6C',
  GrayStrongDark = '#49454F',
  Green = '#5fbb64',
  Semitransparent = 'rgba(255, 255, 255, 0.17)',
  Transparent = 'rgba(0,0,0,0.05)',
  TransparentBlack = '#00000019',
  GreenLight = '#acda87',
  Yellow = '#ffd606',
  Lightpink = '#ffb6c1',
  LightGreen = '#63ce63',
  Violet = '#ee82ee',
  LightSalmon = '#ffa07a',
  LightSeagreen = '#20b2aa',
}
export {Color};

export const BASE_THEME = {
  layout: Color.GrayLight,
  box: Color.GrayLight,
  block: Color.White,
  border: Color.Gray,
  questionTab: Color.Gray,
  activeQuestionTab: Color.White,
  textMainColor: Color.Black,
  textColor: Color.GrayDark,
  lateralBalls: Color.White,
  appSelect: Color.White,
  appSelectActive: Color.Gray,
  appButtonSecondary: Color.GrayLight,
};

export const DARK_THEME = {
  layout: Color.StrongDarkBlue,
  box: Color.VioletBluePurple,
  block: Color.VioletBlue,
  border: Color.DarkPurpleBlue,
  questionTab: Color.VioletBlue,
  activeQuestionTab: Color.DarkPurpleBlue,
  textMainColor: Color.White,
  textColor: Color.GrayDark,
  lateralBalls: Color.VioletBluePurple,
  appSelect: Color.VioletBlue,
  appSelectActive: Color.VioletBluePurple,
  appButtonSecondary: Color.BlueLight,
};

type BaseThemeType = typeof BASE_THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends BaseThemeType {}
}
