import fs from 'fs';
import path from 'path';

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

export { readFile, getExtension, parsers };