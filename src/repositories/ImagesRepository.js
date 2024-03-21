import axios from 'axios';
export default class ImagesRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_IMAGES

    async getAll() {

        try {
            const response = await axios.get(this.uri) 
            const data = await response.json()
            return data.images
        } catch (error) {
            throw new Error('Ups!!! Something happened')
        }

    }
 
}