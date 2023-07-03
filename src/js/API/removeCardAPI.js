

import instance from "./instance.js";

const removeCardAPI = async (id) => {
  try {
    
    return await instance.delete(`/${id}`);
  } catch (err) {
    console.log('Error', err);
  }
};

export default removeCardAPI;
