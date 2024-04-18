import axios from 'axios';

export default class ImagesService {

  uri = import.meta.env.VITE_API_ENDPOINT_IMAGES;


  async getImagesByName(imageName) {
    try {
      const response = await axios.get(`${this.uri}/${imageName}`, {
        responseType: "blob",
      });

      const imageUrl = URL.createObjectURL(response.data);

      return imageUrl;
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
      return "default-image-url";
    }
  }
}
