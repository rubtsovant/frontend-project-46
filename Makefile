install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

make lint:
	npx eslint .

start:
	gendiff __fixtures__/file1.json __fixtures__/file2.json

test:
	npx jest

test-coverage:
	npx jest --coverage