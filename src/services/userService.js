import axios from 'axios';

class userService {
  async getUser() {
    const response = await axios.get(
      `https://rimac-front-end-challenge.netlify.app/api/user.json`
    );
    return response;
  }
}
export default new userService();
