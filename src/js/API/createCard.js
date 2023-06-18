const createCardBtn = document.createElement('button');
createCardBtn.innerText = 'Create Card';
container.append(createCardBtn);
createCardBtn.addEventListener('click', createCard)

async function createCard() {
  try {
    let idCard;
    await axios.post("https://ajax.test-danit.com/api/v2/cards", {
      id: `${ idCard }`,
      doctor: 'Кардиолог',
      visitIssue: 'цель визита',
      visitDiscription: 'краткое описание визита',
      visitPrority: 'выпадающее поле - срочность',
      fullName: 'ФИО',
      bloodPreasure: 'обычное давление',
      bodyIndex: 'индекс массы тела',
      history: 'перенесенные заболевания сердечно-сосудистой системы',
      age: 23,
      lastVisit: 'дата последнего посещения',


    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    // беремо токен  з local.storage
    idCard = +1;
    console.log(idCard);


  } catch (error) {
    console.log(error);
  }

}










