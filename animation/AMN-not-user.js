// fetchAnimationData.js
import axios from 'axios';

const AMNnotuser = async () => {
  try {
    const response = await axios.get('https://lottie.host/c823dce1-49ea-49b2-b5ae-75227a8a3479/6sc3codXlN.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching animation data:', error);
    return null;
  }
};

export default AMNnotuser;
