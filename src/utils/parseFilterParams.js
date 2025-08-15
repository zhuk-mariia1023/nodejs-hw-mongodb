const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const allowedTypes = ['work', 'home', 'personal'];
  if (allowedTypes.includes(type)) {
    return type;
  }
};

const parseBoolean = (value) => {
  if (typeof value !== 'string') return;

  if (value.toLowerCase() === 'true') return true;
  if (value.toLowerCase() === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseContactType(type);
  const parsedIsFavourite = parseBoolean(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
