const apiSpecPath = require.resolve('backend/todo-api.yaml');

/** @type {import('@hey-api/openapi-ts').UserConfig} */
module.exports = {
  client: '@hey-api/client-fetch',
  input: apiSpecPath,
  output: 'src/generated/client',
};
