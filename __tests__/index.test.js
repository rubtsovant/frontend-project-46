import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';
import { readFile } from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('JSON gendiff', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile(getFixturePath('result.txt'));

  expect(genDiff(file1, file2)).toEqual(expected);
});

test('YML gendiff', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = readFile(getFixturePath('result.txt'));

  expect(genDiff(file1, file2)).toEqual(expected);
});

test('Wrong format gendiff', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = readFile(getFixturePath('result.txt'));

  expect(genDiff(file1, file2, 'txt')).toEqual(false);
});
