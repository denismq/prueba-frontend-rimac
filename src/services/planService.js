import axios from 'axios';

class planService {
  async getPlan() {
    const response = await axios.get(
      `https://rimac-front-end-challenge.netlify.app/api/plans.json`
    );
    return response;
  }
}
export default new planService();
