
export default class Visit {
    constructor() {
        this.visitWrapper = document.createElement('div');
        this.purpose = document.createElement('input');
        this.description = document.createElement('input');
        this.name = document.createElement('input');
        this.urgency = document.createElement('div');        
        this.select = document.createElement('select');
        this.select.name = 'urgency';  
        this.selectOptions = `
        <option value = "normal">Normal</option>
        <option value = "high">High</option>
        <option value = "low">Low</option>
        `;
    }
    
    createElements() {
        this.visitWrapper.classList.add('visit');

        this.purpose.classList.add('visit-options');
        this.purpose.placeholder = 'Ціль';
        this.purpose.name = 'title';
        this.purpose.required = true;
        this.visitWrapper.insertAdjacentElement('afterbegin', this.purpose);

        this.description.classList.add('visit-options');
        this.description.placeholder = 'Опис';
        this.description.name = 'description';
        this.description.required = true;
        this.visitWrapper.insertAdjacentElement('afterbegin', this.description);

        this.name.classList.add('visit-options');
        this.name.placeholder = "Ім'я";
        this.name.name = 'username';
        this.name.required = true;
        this.visitWrapper.insertAdjacentElement('afterbegin', this.name);

        this.select.innerHTML = this.selectOptions;
        this.select.classList.add('visit-options');
        this.urgency.innerHTML= '<p>Терміновість візиту</p>';
        this.urgency.className = 'visit-urgency';
        
        this.urgency.append(this.select);
        
        this.visitWrapper.insertAdjacentElement('afterbegin', this.urgency);
    }

    render() {
        this.createElements();
        return this.visitWrapper;
    }
}