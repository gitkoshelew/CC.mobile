type getOptionsPropsType = optionsType | string[];
export type optionsType = {option: string}[];

export const transformFormatOptions = (options: getOptionsPropsType) => {
  return typeof options[0] === 'object'
    ? options.map(el => typeof el === 'object' && el.option)
    : options.map(el => ({option: el}));
};
