import axios from 'axios';


const {REACT_APP_BASE_URL} = process.env; 

export const getdivinglist = async () => {
  try {
    const response = await axios.get(`${REACT_APP_BASE_URL}diving/laravel2/api/V1/site/home?site=all`);
    
    return response.data;
  } catch (error) {
    
    throw error;
  }
};