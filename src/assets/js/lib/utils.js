export const deepClone = target => {
  const rfdc = require('rfdc')();
  return rfdc(target);
};
