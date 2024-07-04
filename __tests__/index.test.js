import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';
import { readFile } from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('Stylish gendiff json', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile(getFixturePath('resultStylish.txt'));

  expect(genDiff(file1, file2)).toEqual(expected);
});

test('Stylish gendiff yml', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = readFile(getFixturePath('resultStylish.txt'));

  expect(genDiff(file1, file2)).toEqual(expected);
});

test('Plain gendiff json', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile(getFixturePath('resultPlain.txt'));

  expect(genDiff(file1, file2, 'plain')).toEqual(expected);
});

test('Plain gendiff yml', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = readFile(getFixturePath('resultPlain.txt'));

  expect(genDiff(file1, file2, 'plain')).toEqual(expected);
});

test('JSON gendiff json', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile(getFixturePath('resultJSON.txt'));

  expect(genDiff(file1, file2, 'json')).toEqual(expected);
});

test('YML gendiff yml', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = readFile(getFixturePath('resultJSON.txt'));

  expect(genDiff(file1, file2, 'json')).toEqual(expected);
});

test('Wrong format gendiff', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = false;

  expect(genDiff(file1, file2, 'txt')).toEqual(expected);
});
