import Form from "./form.js";

export default class VisitForm extends Form {
    constructor(title) {
        super(title);
        this.select = document.createElement('select');
        this.additionalInputs = document.createElement('div');
    }

    createElement() {
        super.createElement();
        this.select.setAttribute("name", "doctor");
        const options = `
                <option value="" selected="">Chose a doctor</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="dantist">Dantist</option>
                <option value="therapist">Therapist</option>
        `;

        this.select.innerHTML =  options;

        const visitInpputs = `
        <form class="mainVisitInfo">
            <h4> Patient info </h4>
            
            <input type="text" required name="purpose" placeholder="Purpose">
            
            <input type="text" required name="description" placeholder="Description">
            
            <select name="urgency" required id="urgency">
                <option value="">Urgency of Visit</option>
                <option value="normal">Normal</option>
                <option value="priority">Priority</option>
                <option value="urgent">Urgent</option>
            </select>
            
            <input type="text" required name="fullname" placeholder="Full Name">

        `;
        this.form.insertAdjacentHTML('beforeend', visitInpputs);
        this.form.append(this.select);
    }

    renderVisit() {
        this.createElement();
        document.querySelector(".reserwation").append(this.form);
    }

}

// new VisitForm("Create Visit").render();

{
    /* <div class="mainVisitInfo">
            <h3> Дані пацієнта </h3>
        <input type="text" placeholder="Ціль візиту">
        <input type="text" placeholder="Короткий опис візиту">
        <select name="urgencySelector" id="urgency">
                    <option value="">Оберіть терміновість візиту</option>
                    <option value="">Звичайна</option>
                    <option value="">Пріоритетна</option>
                    <option value="">Невідкладна</option>
                </select>
        <input type="text" placeholder="П.І.Б">
    </div> */
}


{
    /* <form class="login-form"><select>
                <option value="" selected="">Оберіть лікаря</option>
                <option value="cardiologist">Кардіолог</option>
                <option value="dantist">Стоматолог</option>
                <option value="therapist">Терапевт</option>
            </select><div></div></form> */
}

{
    /* <div>
            <h5>Введіть додаткові дані</h5>
            
              <input type="text" placeholder="Звичайний тиск xxx/xx" name="preasure" id="preasure">
              <input type="number" placeholder="Індекс маси тіла" name="bodyIndex" id="bodyIndex">
              <input type="text" placeholder="Перенесені захворювання ССС" name="hystory" id="hystory">
              <input type="number" placeholder="Вік" name="age" id="age">
            
            </div> */
}


{
    /* <div>
            <h5>Введіть додаткові дані</h5>
            <h5>Дата останнього візиту</h5>
            
            <input type="date" placeholder="Останній візит" name="lastVisit" id="lastVisit">
            
            </div> */
}

{
    /* <div>
            <h5>Введіть додаткові дані</h5>
            
            
              <input type="number" placeholder="Вік пацієнта" name="age" id="age">
            
            </div> */
}