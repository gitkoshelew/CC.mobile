import {Color} from '@theme/colors';

const initialColors = [
  Color.LightGreen,
  Color.Violet,
  Color.LightSeagreen,
  Color.LightSalmon,
  Color.Lightpink,
  Color.Blue,
  Color.BlueLight,
];

export const getRandomColors = () => {
  return initialColors
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);
};
