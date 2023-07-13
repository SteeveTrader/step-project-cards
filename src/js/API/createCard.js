import instance from "./instance.js";

const createCardAPI = async (body) => {
  try{
      return await instance.post('/', body);
      
  } catch(err) {
      console.log('Error', err);
  }
  
};

export default createCardAPI;
