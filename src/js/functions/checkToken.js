const checkToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
        const loginBtn = document.querySelector('.js-login-btn');
        const createElemBtn = document.querySelector('.js-create-elem-btn');

        loginBtn.style.display = 'none';
        createElemBtn.style.display = 'inline';

        // if localstorage token === true  => CardsData.forEach(el.......
        // Отримати з сервера і відмалювати всю інфу
    }
}

export default checkToken;
