import { urlCards, TOKEN } from "./variables.js";

// Видалення усіх карток
export async function deleteAllCards() {
  try {
    // Отримуємо список всіх карточок
    const response = await axios.get(urlCards, {
      headers: {
        'Authorization': Bearer ${localStorage.getItem('tokenKey')}
      }
    });

    const cards = response.data;

    for (const card of cards) {
      await axios.delete(${urlCards}/${card.id}, {
        headers: {
          'Authorization': Bearer ${TOKEN}
        }
      });
    }
    location.reload()

  } catch (error) {
    console.log(error);
  }
}
