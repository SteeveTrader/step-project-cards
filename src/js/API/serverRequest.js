import instance from "./instance.js";

const fetchData = async () => {
  try {

    return await instance.get("/");
  } catch (err) {
    console.log('Error', err);
  }

};

export default fetchData;