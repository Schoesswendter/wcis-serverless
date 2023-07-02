'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World from AWS Lambda with NodeJS!',
    }),
  };
};

module.exports.jokes = async (event) => {
  const axios = require('axios'); const options = { method: 'GET', url: "https://official-joke-api.appspot.com/random_joke" }; 
  const response = await axios.request(options);
  return {
    statusCode: 200,
    body: {"setup": response.data.setup, "punchline": response.data.punchline}
  }
}
