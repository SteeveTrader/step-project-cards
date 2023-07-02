// import CardHtml from "../classes/cardHtml.js";
import deleteCard from '../functions/removeCard.js';
import cardEditor from '../functions/cardEditor.js';
import array from "../API/testArray.js";
export default function cardFilter() {


  // const array = [
  //   {
  //     id: 1,
  //     doctor: 'therapist',
  //     purpose: 'Проблеми is залозою',
  //     description: 'Болить горло, підвищена температура',
  //     urgency: 'Терміновий',
  //     fullName: 'Олексій Петров',
  //     pressure: '120/80',
  //     bodyIndex: '22',
  //     disease: 'Немає',
  //     age: '42',
  //     date: '2023-06-20',
  //   },
  //   {
  //     id: 2,
  //     doctor: 'cardiologist',
  //     purpose: 'Біль у грудях',
  //     description: 'Болісне відчуття у серцевій області',
  //     urgency: 'Невідкладний',
  //     fullName: 'Марина Сидоренко',
  //     pressure: '130/90',
  //     bodyIndex: '25',
  //     disease: 'Артеріальна гіпертензія',
  //     age: '57',
  //     date: '2023-06-18',
  //   },
  //   {
  //     id: 3,
  //     doctor: 'dantist',
  //     purpose: 'Зубний камінь',
  //     description: 'Наявність відкладень на зубах',
  //     urgency: 'Звичайний',
  //     fullName: 'Олег Іванов',
  //     pressure: '110/70',
  //     bodyIndex: '24',
  //     disease: 'Карієс',
  //     age: '35',
  //     date: '2023-05-15',
  //   },
  //   {
  //     id: 4,
  //     doctor: 'therapist',
  //     purpose: 'Передача аналізів',
  //     description: 'Здача загального аналізу крові',
  //     urgency: 'Звичайний',
  //     fullName: 'Марія Новак',
  //     pressure: '120/80',
  //     bodyIndex: '22',
  //     disease: 'Немає',
  //     age: '29',
  //     date: '2023-06-10',
  //   },
  //   {
  //     id: 5,
  //     doctor: 'cardiologist',
  //     purpose: 'Контроль артеріального тиску',
  //     description: 'Перевірка показників АТ і ведення журналу',
  //     urgency: 'Звичайний',
  //     fullName: 'Ольга Коваль',
  //     pressure: '130/80',
  //     bodyIndex: '26',
  //     disease: 'Артеріальна гіпертензія',
  //     age: '48',
  //     date: '2023-06-15',
  //   },
  //   {
  //     id: 6,
  //     doctor: 'therapist',
  //     purpose: 'Профілактичний огляд',
  //     description: 'Плановий огляд з метою профілактики захворювань',
  //     urgency: 'Звичайний',
  //     fullName: 'Ігор Савченко',
  //     pressure: '120/70',
  //     bodyIndex: '23',
  //     disease: 'Немає',
  //     age: '36',
  //     date: '2023-04-25',
  //   },
  //   {
  //     id: 7,
  //     doctor: 'dantist',
  //     purpose: 'Лікування карієсу',
  //     description: 'Потрібне лікування та заповнення каріозних порожнин',
  //     urgency: 'Терміновий',
  //     fullName: 'Анна Литвин',
  //     pressure: '110/70',
  //     bodyIndex: '24',
  //     disease: 'Карієс',
  //     age: '31',
  //     date: '2023-06-22',
  //   },
  //   {
  //     id: 8,
  //     doctor: 'cardiologist',
  //     purpose: 'Перевірка функції серця',
  //     description: 'ЕКГ та перевірка стану серця',
  //     urgency: 'Терміновий',
  //     fullName: 'Василь Лещенко',
  //     pressure: '130/90',
  //     bodyIndex: '27',
  //     disease: 'Артеріальна гіпертензія',
  //     age: '52',
  //     date: '2023-06-21',
  //   },
  //   {
  //     id: 9,
  //     doctor: 'therapist',
  //     purpose: 'Огляд після захворювання',
  //     description: 'Контрольний огляд після перенесеної хвороби',
  //     urgency: 'Звичайний',
  //     fullName: 'Тетяна Шевченко',
  //     pressure: '120/80',
  //     bodyIndex: '25',
  //     disease: 'Респіраторна інфекція',
  //     age: '43',
  //     date: '2023-06-12',
  //   },
  //   {
  //     id: 10,
  //     doctor: 'cardiologist',
  //     purpose: 'Планове чищення зубів',
  //     description: 'Необхідно провести планову гігієну ротової порожнини',
  //     urgency: 'Звичайний',
  //     fullName: 'Олена Мельник',
  //     pressure: '110/70',
  //     bodyIndex: '24',
  //     disease: 'Немає',
  //     age: '27',
  //     date: '2023-06-23',
  //   },
  // ];

  const searchBtn = document.querySelector('.filterBtn');
  searchBtn.addEventListener('click', filterArray);

  function filterArray(event) {
    event.preventDefault();
    const doctor = document.getElementById('doctorFilter').value;
    const fullName = document.getElementById('fullNameFilter').value.trim().toLowerCase();
    const urgency = document.getElementById('urgencyFilter').value;
    const description = document.getElementById('description').value.trim().toLowerCase();

    const filteredArray = array.filter(item => {
      if (doctor && item.doctor !== doctor) {
        return false;
      }
      if (fullName && !item.fullName.toLowerCase().includes(fullName)) {
        return false;
      }
      if (urgency && item.urgency !== urgency) {
        return false;
      }
      if (description && !item.description.toLowerCase().includes(description)) {
        return false;
      }
      return true;
    });

    displayResults(filteredArray);
    deleteCard(filteredArray);
    cardEditor(array);
  }

  function displayResults(filteredArray) {
    const cardsBody = document.querySelectorAll('.reserwation__card-container');
    cardsBody.forEach(elem => elem.remove())
    console.log(filteredArray);
    filteredArray.forEach(({ purpose, description, urgency, fullName, doctor, id }) => {
      const filterCard = new CardHtml(purpose, description, urgency, fullName, doctor, id);
      filterCard.createElement();
      filterCard.render();
    });
  }

}



