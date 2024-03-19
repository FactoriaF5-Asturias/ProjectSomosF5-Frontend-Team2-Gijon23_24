
import axios from 'axios';

export default class ImagesService {
 uri = import.meta.env.VITE_API_ENDPOINT_IMAGES;

 async getImages() {
    try {
      const response = await axios.get(this.uri);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los productos: ' + error);
    }
 }
}