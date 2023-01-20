type dataType = {
  option: string;
}[];

export const getOptionsObjectToString = (data: dataType) => {
  return data.map(el => el.option);
};
