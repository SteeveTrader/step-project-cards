
import instance from "./instance.js";

export const fetchData = async () => {  
  try {

    return await instance.get("/");
  } catch(err) {
    console.log('Error', err);
}

};










// export const fetchData = async () => {
//   try {
//     const response = await instance.get("/");

//     if (response.data.length === 0) {
//       const container = document.querySelector('.reserwation');
//       const div = document.createElement('div');
//       div.classList.add('message');
//       div.innerText = "Не має визитів";
//       container.append(div);

//       return await instance.get("/");
//     } else {
//       console.log("все ок");
//       return response;
//     }
//   } catch (err) {
//     console.log('Error', err);
//   }
// };
