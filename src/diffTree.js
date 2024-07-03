import _ from 'lodash';

const getDiffObject = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2).sort();
  const result = {};

  const symbol = {
    added: '+ ',
    deleted: '- ',
    unchanged: '  ',
  };

  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result[symbol.added + key] = data2[key];
    } else if (!Object.hasOwn(data2, key)) {
      result[symbol.deleted + key] = data1[key];
    } else if (data1[key] !== data2[key]) {
      result[symbol.deleted + key] = data1[key];
      result[symbol.added + key] = data2[key];
    } else {
      result[symbol.unchanged + key] = data1[key];
    }
  }
  return result;
};

export default getDiffObject;
