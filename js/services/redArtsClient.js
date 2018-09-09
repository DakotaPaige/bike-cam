const axios = require('axios');

const BASE_URL = 'http://localhost:3000/v1';

async function getCyclistById(cyclistId) {
  let cyclist = await axios.get(`${BASE_URL}/cyclists/${cyclistId}`);
  return cyclist.data;
}

module.exports = {
  getCyclistById
};
