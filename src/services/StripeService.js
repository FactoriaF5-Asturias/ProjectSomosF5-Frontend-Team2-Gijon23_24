import axios from "axios";

export default class StripeService {

    uri = import.meta.env.VITE_APP_API_PAYMENTS

    async post(paymentRequest) {

        let config = {
            maxBodyLength: Infinity,
            headers: { 
              'Content-Type': 'application/json'
            },
            withCredentials: true
          };

        try {
            const response = await axios.post(this.uri, paymentRequest, config)
            const status = response.status
            console.log(status);
            return response.data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }
}