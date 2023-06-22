export default class Visit {
    constructor() {
        this.visitWrapper = document.createElement('div');
        this.doctorSelect = document.createElement('select');
        this.doctorSelect.name = 'doctor';
        this.doctorOptions = `
      <option value="cardiologist">Кардіолог</option>
      <option value="dentist">Стоматолог</option>
      <option value="therapist">Терапевт</option>
    `;
        this.purpose = document.createElement('input');
        this.description = document.createElement('input');
        this.name = document.createElement('input');
        this.urgency = document.createElement('div');
        this.select = document.createElement('select');
        this.select.name = 'urgency';
        this.selectOptions = `
      <option value="normal">Звичайна</option>
      <option value="high">Пріорітетна</option>
      <option value="low">Невідкладна</option>
    `;
        this.createBtn = document.createElement('button');
        this.cancelBtn = document.createElement('button');
        this.form = document.createElement('form');
    }

    createElements() {
        this.visitWrapper.classList.add('visit');

        this.doctorSelect.innerHTML = this.doctorOptions;
        this.doctorSelect.classList.add('visit-options');
        this.visitWrapper.insertAdjacentElement('afterbegin', this.doctorSelect);

        this.purpose.classList.add('visit-options');
        this.purpose.placeholder = 'Ціль';
        this.purpose.name = 'title';
        this.purpose.required = true;
        this.visitWrapper.insertAdjacentElement('beforeend', this.purpose);

        this.description.classList.add('visit-options');
        this.description.placeholder = 'Опис';
        this.description.name = 'description';
        this.description.required = true;
        this.visitWrapper.insertAdjacentElement('beforeend', this.description);

        this.name.classList.add('visit-options');
        this.name.placeholder = 'ПІБ';
        this.name.name = 'username';
        this.name.required = true;
        this.visitWrapper.insertAdjacentElement('beforeend', this.name);

        this.select.innerHTML = this.selectOptions;
        this.select.classList.add('visit-options');
        this.urgency.innerHTML = '<p>Терміновість візиту</p>';
        this.urgency.className = 'visit-urgency';

        this.urgency.append(this.select);

        this.visitWrapper.insertAdjacentElement('beforeend', this.urgency);

        this.createBtn.classList.add('visit-create-btn');
        this.createBtn.innerText = 'Створити';
        
        this.createBtn.addEventListener('click', () => {
            
            console.log("1");
            // const values = this.getValues();
            // console.log(values);
        });

        this.cancelBtn.classList.add('visit-cancel-btn');
        this.cancelBtn.innerText = 'Відміна';
        this.cancelBtn.addEventListener('click', () => {
            // Логіка
        });

        this.visitWrapper.appendChild(this.createBtn);
        this.visitWrapper.appendChild(this.cancelBtn);

        this.form.appendChild(this.visitWrapper);
    }

    render() {
        this.createElements();
        return this.form;
    }

    getValues() {
        const inputs = this.form.querySelectorAll('input');
        const body = {};

        inputs.forEach(input => {
            body[input.name] = input.value;
        });

        return body;
    }
}

const visit = new Visit();
document.getElementById('visitForm').appendChild(visit.render());
