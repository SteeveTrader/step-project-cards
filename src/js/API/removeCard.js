import { urlCards, TOKEN } from "./variables.js";

// видалення усіх карток
export async function deleteAllCards() {
  try {
    const response = await axios.get(urlCards, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    });

    const cards = response.data;

    for (const card of cards) {
      try {
        await axios.delete(`${urlCards}/${card.id}`, {
          headers: {
            'Authorization': `Bearer ${TOKEN}`
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    location.reload();

  } catch (error) {
    console.log(error);
  }
}


// delete one card не видаляти!!!! робочий код!!!!

// function deleteCard(id) {
//   return axios.delete(`${urlCards}/${id}`, {
//     headers: {
//       'Authorization': `Bearer ${TOKEN}`
//     },
//   }).then(response => {
//     if (response.status === 200) {
//       return id;
//     } else {
//       alert(`Елемента з таким ID не існує`);
//     }
//   }).catch(error => {
//     console.log(error);
//     alert(`Сталася помилка при видаленні карточки`);
//   });
// }

// deleteCard(176244);