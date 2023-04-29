import axios from 'axios';

const KEY_API =  '35879532-6dafaab3c006917cb9578f9fc';
const URL = 'https://pixabay.com/api/';


export default async function PixabayAPI(value) {
    const options = [
        `key=${KEY_API}`,
        'image_type=photo',
        'orientation=horizontal',
        'safesearch=true',
        `q=${value}`
    ];
    
    try {
      const response = await axios.get(`${URL}?${options.join('&')}`);
      console.log(response);
      return response.data;
    } catch (error) {
        console.log(error);
      throw Error (error.status);
    }
  }
