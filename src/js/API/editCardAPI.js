import instance from "./instance.js";

const editCardAPI = async (id, body) => {
  try {
    
    return await instance.put(`/${id}`, body);
  } catch (err) {
    console.log('Error', err);
  }
};

export default editCardAPI;