export default function cardFilter() {


  const array = [
    {
      id: 1,
      doctor: 'therapist',
      visitIssue: 'Проблеми is залозою',
      visitDiscription: 'Болить горло, підвищена температура',
      visitPriority: 'Терміновий',
      fullName: 'Олексій Петров',
      bloodPreasure: '120/80',
      bodyIndex: '22',
      history: 'Немає',
      age: '42',
      lastVisit: '2023-06-20',
    },
    {
      id: 2,
      doctor: 'cardiologist',
      visitIssue: 'Біль у грудях',
      visitDiscription: 'Болісне відчуття у серцевій області',
      visitPriority: 'Невідкладний',
      fullName: 'Марина Сидоренко',
      bloodPreasure: '130/90',
      bodyIndex: '25',
      history: 'Артеріальна гіпертензія',
      age: '57',
      lastVisit: '2023-06-18',
    },
    {
      id: 3,
      doctor: 'dantist',
      visitIssue: 'Зубний камінь',
      visitDiscription: 'Наявність відкладень на зубах',
      visitPriority: 'Звичайний',
      fullName: 'Олег Іванов',
      bloodPreasure: '110/70',
      bodyIndex: '24',
      history: 'Карієс',
      age: '35',
      lastVisit: '2023-05-15',
    },
    {
      id: 4,
      doctor: 'therapist',
      visitIssue: 'Передача аналізів',
      visitDiscription: 'Здача загального аналізу крові',
      visitPriority: 'Звичайний',
      fullName: 'Марія Новак',
      bloodPreasure: '120/80',
      bodyIndex: '22',
      history: 'Немає',
      age: '29',
      lastVisit: '2023-06-10',
    },
    {
      id: 5,
      doctor: 'cardiologist',
      visitIssue: 'Контроль артеріального тиску',
      visitDiscription: 'Перевірка показників АТ і ведення журналу',
      visitPriority: 'Звичайний',
      fullName: 'Ольга Коваль',
      bloodPreasure: '130/80',
      bodyIndex: '26',
      history: 'Артеріальна гіпертензія',
      age: '48',
      lastVisit: '2023-06-15',
    },
    {
      id: 6,
      doctor: 'therapist',
      visitIssue: 'Профілактичний огляд',
      visitDiscription: 'Плановий огляд з метою профілактики захворювань',
      visitPriority: 'Звичайний',
      fullName: 'Ігор Савченко',
      bloodPreasure: '120/70',
      bodyIndex: '23',
      history: 'Немає',
      age: '36',
      lastVisit: '2023-04-25',
    },
    {
      id: 7,
      doctor: 'dantist',
      visitIssue: 'Лікування карієсу',
      visitDiscription: 'Потрібне лікування та заповнення каріозних порожнин',
      visitPriority: 'Терміновий',
      fullName: 'Анна Литвин',
      bloodPreasure: '110/70',
      bodyIndex: '24',
      history: 'Карієс',
      age: '31',
      lastVisit: '2023-06-22',
    },
    {
      id: 8,
      doctor: 'cardiologist',
      visitIssue: 'Перевірка функції серця',
      visitDiscription: 'ЕКГ та перевірка стану серця',
      visitPriority: 'Терміновий',
      fullName: 'Василь Лещенко',
      bloodPreasure: '130/90',
      bodyIndex: '27',
      history: 'Артеріальна гіпертензія',
      age: '52',
      lastVisit: '2023-06-21',
    },
    {
      id: 9,
      doctor: 'therapist',
      visitIssue: 'Огляд після захворювання',
      visitDiscription: 'Контрольний огляд після перенесеної хвороби',
      visitPriority: 'Звичайний',
      fullName: 'Тетяна Шевченко',
      bloodPreasure: '120/80',
      bodyIndex: '25',
      history: 'Респіраторна інфекція',
      age: '43',
      lastVisit: '2023-06-12',
    },
    {
      id: 10,
      doctor: 'dantist',
      visitIssue: 'Планове чищення зубів',
      visitDiscription: 'Необхідно провести планову гігієну ротової порожнини',
      visitPriority: 'Звичайний',
      fullName: 'Олена Мельник',
      bloodPreasure: '110/70',
      bodyIndex: '24',
      history: 'Немає',
      age: '27',
      lastVisit: '2023-06-23',
    },
  ];

  const searchBtn = document.querySelector('.filterBtn');
  searchBtn.addEventListener('click', filterArray);

  function filterArray() {
    const doctor = document.getElementById('doctor').value;
    const fullName = document.getElementById('fullName').value.trim().toLowerCase();
    const visitPriority = document.getElementById('visitPriority').value;
    const visitDiscription = document.getElementById('visitDiscription').value.trim().toLowerCase();

    const filteredArray = array.filter(item => {
      if (doctor && item.doctor !== doctor) {
        return false;
      }
      if (fullName && !item.fullName.toLowerCase().includes(fullName)) {
        return false;
      }
      if (visitPriority && item.visitPriority !== visitPriority) {
        return false;
      }
      if (visitDiscription && !item.visitDiscription.toLowerCase().includes(visitDiscription)) {
        return false;
      }
      return true;
    });

    displayResults(filteredArray);

  }

  class FilterCard {
    constructor(item) {
      this.cardContainer = document.createElement('div');
      this.doctor = document.createElement('p');
      this.fullName = document.createElement('p');
      this.visitIssue = document.createElement('p');
      this.visitDiscription = document.createElement('p');
      this.visitPriority = document.createElement('p');
      this.bloodPreasure = document.createElement('p');
      this.bodyIndex = document.createElement('p');
      this.history = document.createElement('p');
      this.age = document.createElement('p');
      this.lastVisit = document.createElement('p');
      this.item = item;

    }

    createElements() {
      this.cardContainer.classList.add('cardContainer');

      this.doctor.innerText = `Доктор: ${this.item.doctor}`;
      this.visitIssue.innerText = `Ціль візиту: ${this.item.visitIssue}`;
      this.visitDiscription.innerText = `Опис візиту: ${this.item.visitDiscription}`;
      this.visitPriority.innerText = `Пріоритетність візиту: ${this.item.visitPriority}`;
      this.fullName.innerText = `Ім'я пацієнта: ${this.item.fullName}`;
      this.bloodPreasure.innerText = `Тиск: ${this.item.bloodPreasure}`;
      this.bodyIndex.innerText = `Індекс маси тіла: ${this.item.bodyIndex}`;
      this.history.innerText = `Історія хвороби: ${this.item.history}`;
      this.age.innerText = `Вік пацієнта: ${this.item.age}`;
      this.lastVisit.innerText = `Дата останнього візиту: ${this.item.lastVisit}`;

      this.cardContainer.append(this.doctor);
      this.cardContainer.append(this.fullName);
      this.cardContainer.append(this.visitIssue);
      this.cardContainer.append(this.visitDiscription);
      this.cardContainer.append(this.visitPriority);
      this.cardContainer.append(this.bloodPreasure);
      this.cardContainer.append(this.bodyIndex);
      this.cardContainer.append(this.history);
      this.cardContainer.append(this.age);
      this.cardContainer.append(this.lastVisit);

      const cardsBody = document.querySelector('.cardsWrapper');
      cardsBody.append(this.cardContainer);
    }

    render() {
      this.createElements();
    }
  }

  function displayResults(filteredArray) {
    const cardsBody = document.querySelector('.cardsWrapper');
    cardsBody.innerHTML = '';

    filteredArray.forEach(item => {
      const filterCard = new FilterCard(item);
      filterCard.render();
    });
  }

}

