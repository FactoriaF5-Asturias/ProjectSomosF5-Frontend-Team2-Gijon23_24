import axios from 'axios';

export default class ProductsService {
 uri = import.meta.env.VITE_API_ENDPOINT_PRODUCTS;

 async getProducts() {
    try {
      const response = await axios.get(this.uri);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los productos: ' + error);
    }
 }
}