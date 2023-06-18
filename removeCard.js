// Видалення усіх карток


// async function deleteAllCards() {
//   try {
//     // Отримуємо список всіх карточок
//     const response = await axios.get("https://ajax.test-danit.com/api/v2/cards", {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });

//     // Отримуємо масив карточок з відповіді
//     const cards = response.data;

//     // Проходимося по кожній карточці і видаляємо її
//     for (const card of cards) {
//       await axios.delete(`https://ajax.test-danit.com/api/v2/cards/${card.id}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//     }

//     console.log("Всі карточки видалені");
//   } catch (error) {
//     console.log(error);
//   }
// }

// deleteAllCards();

async function deleteCard() {
  try {
    const getArrForDelete = await axios.get("https://ajax.test-danit.com/api/v2/cards", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  } catch (error) {
    console.log(error);
  }
}