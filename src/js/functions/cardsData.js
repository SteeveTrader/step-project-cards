import Modal from "../classes/Modal.js";
import CardHtml from "../classes/CardHtml.js";
import loginFunction from "../API/logInFunction.js";
import LoginForm from "../classes/LoginForm.js";
import { fetchData } from "../API/serverRequest.js";
import checkToken from "./checkToken.js";

let cloneArray;

export default async function loginButtonClick() {
  const form = new LoginForm("Log In");

  const confirmCallback = async (close) => {
    const body = form.getValues();

    const { data } = await loginFunction(body);
    localStorage.setItem("token", data);

    const { data: resp } = await fetchData();
    cloneArray = [...resp];

    cloneArray.forEach(el => {
      const { description, doctor, fullname, id, purpose, urgency } = el;
      let card = new CardHtml(purpose, description, urgency, fullname, doctor);
      card.render();
    });

    close();
    checkToken();
    console.log(cloneArray);
  };
  
  new Modal(form.getFormElement(), confirmCallback).render();
}
