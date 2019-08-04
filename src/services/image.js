import axios from 'axios';

async function image(imageURL) {
  const response = await axios.get(imageURL);
  return response;
}

export default image;
