export const omitObjectProperties = (object: object, ...props: string[]) => {
  const result = {...object};
  props.forEach(function (prop) {
    delete result[prop as keyof object];
  });
  return result;
};
