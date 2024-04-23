import axios from 'axios';
export default class ProductsRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_PRODUCTS

    async getAll() {

        try {
            const response = await axios.get(this.uri) 
            const data = await response.json()
            return data.product
        } catch (error) {
            throw new Error('Ups!!! Something happened')
        }

    }
 
}