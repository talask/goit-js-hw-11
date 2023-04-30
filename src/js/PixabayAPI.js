import axios from 'axios';
import objToStr from './objToStr';

const KEY_API =  '35879532-6dafaab3c006917cb9578f9fc';
const URL = 'https://pixabay.com/api/';
export const options = {
  key: KEY_API,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
}

export default async function PixabayAPI(value, page) {
    options.q = value;
    options.page = page;
    const param = objToStr(options);
  
    try {
      const response = await axios.get(`${URL}?${param}`);
      
      return response.data;

    } catch (error) {
        
      throw Error (error.status);

    }
  }
