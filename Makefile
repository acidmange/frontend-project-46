install:
	npm i
	npm link

lint:
	@npx eslint .

test:
	npm test

test-watch:
	npm run test-watch