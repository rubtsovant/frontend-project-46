import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (filePath) => {
  const dirName = process.cwd(filePath);
  const fullPath = path.resolve(dirName, filePath);
  return fs.readFileSync(fullPath, 'utf-8');
}

const getExtension = (filePath) => filePath.split('.').at(-1);

const parsers = (file, format) => {
  if (format !== 'json') {
    return JSON.parse(file);
  }
  return JSON.parse(file);
}

const getDiffObject = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const result = {};

  const symb = {
    added: '+ ',
    deleted: '- ',
    unchanged: '  ',
  };

  for (const key of keys) {
    if(!Object.hasOwn(data1, key)) {
      result[symb.added + key] = data2[key];
    } else if (!Object.hasOwn(data2, key)) {
      result[symb.deleted + key] = data1[key];
    } else if (data1[key] !== data2[key]) {
      result[symb.deleted + key] = data1[key];
      result[symb.added + key] = data2[key];
    } else {
      result[symb.unchanged + key] = data1[key];
    }
  }
  return result;
  
}

export { readFile, getExtension, parsers, getDiffObject };