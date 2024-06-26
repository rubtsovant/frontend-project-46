import { readFile, getExtension, parsers } from './utils.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const file1Extension = getExtension(filepath1);
  const file2Extension = getExtension(filepath2);
  const parseFile1 = parsers(file1, file1Extension);
  const parseFile2 = parsers(file2, file2Extension);
  console.log(parseFile1);
  console.log(parseFile2);
};

export { genDiff };