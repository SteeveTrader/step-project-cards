import Form from "./form.js";

export default class LoginForm extends Form {
    constructor(title) {
        super(title);
    }

    createElement() {
        super.createElement();
        const inputs = `
            <input type="text" name="email" placeholder="Your Email" id="email">
            <input type="password" name="password" placeholder="Your Password" id="password">
        `;
        this.form.insertAdjacentHTML('beforeend', inputs);
    }
}


