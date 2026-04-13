export const getPrimaryColor = (isOdd: boolean) => {
  return isOdd ? "text-white" : "text-text-dark";
};

export const getSecondaryColor = (isOdd: boolean) => {
  return isOdd ? "text-slate-200" : "text-slate-400";
};

export const getTertiaryColor = (isOdd: boolean) => {
  return isOdd ? "text-white" : "text-dark";
};

export const getReadMoreColor = (isOdd: boolean) => {
  return isOdd ? "text-blue-300" : "text-blue-500";
};
