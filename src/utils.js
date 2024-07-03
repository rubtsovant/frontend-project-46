import { cwd } from 'process';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const readFile = (filePath) => {
  const currentDir = cwd();
  const fullPath = resolve(currentDir, filePath);
  return readFileSync(fullPath, 'utf-8');
};

const getExtension = (filePath) => filePath.split('.').at(-1);

const parsers = (file, format) => {
  if (format !== 'json') {
    return JSON.parse(file);
  }
  return JSON.parse(file);
};

export { readFile, getExtension, parsers };
