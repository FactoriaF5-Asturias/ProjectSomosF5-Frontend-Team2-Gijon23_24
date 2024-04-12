import axios from 'axios';

export default class ProductsService {
  
uri = import.meta.env.VITE_API_ENDPOINT_PRODUCTS;

async getProducts() {
    try {
      const response = await axios.get(`${this.uri}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los productos: ' + error);
    }
  }
}


export async function fetchProductsByCategory(category) {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/products/getManyByCategoryName?categoryName=${category}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
