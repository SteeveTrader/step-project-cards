

const checkBtn = document.querySelector('.checkArray');
const container = document.querySelector('.container');
checkBtn.addEventListener("click", fetchData)

// const token = "62100f06-2add-4b7b-920e-8f92e4e73826";

async function fetchData() {
  try {
    const response = await axios.get('https://ajax.test-danit.com/api/v2/cards', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const cardsArray = response.data;
    console.log(cardsArray);
    if (cardsArray.length == 0) {
      renderEmptyArray()
    } else {
      renderArray(cardsArray)
    };



  } catch (error) {
    if (error.response) {
      alert(error.cardsArray);
    } else {
      alert(error.message);
    }
  }
}

renderEmptyArray = () => {
  const notificationEmptyArray = document.createElement('div');
  notificationEmptyArray.innerText = "No items have been added"
  notificationEmptyArray.classList.add('.notificationEmptyArray');
  container.append(notificationEmptyArray);
};

renderArray = (cardsArray) => {

}