import _ from 'lodash';

const getDiffObject = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2).sort();

  const symbol = {
    added: '+ ',
    deleted: '- ',
    unchanged: '  ',
  };

  const resultObj = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return { [symbol.added + key]: data2[key] };
    }
    if (!Object.hasOwn(data2, key)) {
      return { [symbol.deleted + key]: data1[key] };
    }
    if (data1[key] !== data2[key]) {
      return { [symbol.deleted + key]: data1[key],
        [symbol.added + key]: data2[key] };
    }
    // if (data1[key] === data2[key]) {
    return { [symbol.unchanged + key]: data1[key] };
  });
  return resultObj;
};

export default getDiffObject;
