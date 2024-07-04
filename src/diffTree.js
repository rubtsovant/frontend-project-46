import _ from 'lodash';

const makeDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const resultObj = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (!Object.hasOwn(data1, key)) {
      return { key, value: value2, type: 'added' };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value: value1, type: 'deleted' };
    }
    if (data1[key] === data2[key]) {
      return { key, value: value1, type: 'unchanged' };
    }
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return { key, value: makeDiff(value1, value2), type: 'hasChild' };
    }
    return {
      key, oldValue: value1, value: value2, type: 'changed',
    };
  });
  return resultObj;
};

export default makeDiff;
