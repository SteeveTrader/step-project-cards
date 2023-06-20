 export default class CardHtml {
    constructor(purpose, description, urgency, fullname, doctor) {
        this.purpose = purpose;
        this.description = description;
        this.urgency = urgency;
        this.fullname = fullname; 
        this.doctor = doctor;
        this.container = document.querySelector(".reserwation__container");
        this.cardContainer = document.createElement("div");
        this.cardDoctorContainer = document.createElement("div");
        this.card = document.createElement("div");
        this.editBtn = document.createElement("button");
        this.deleteBtn = document.createElement("button");
        this.showMorebtn = document.createElement("button");
        this.btnContainer = document.createElement("div");
    }

    createElement() {
        this.card.className = "reserwation__card";
        this.cardContainer.className = "reserwation__card-container";
        this.cardDoctorContainer.className = "reserwation__card-doctor";
        this.editBtn.className = "reserwation__edit-btn";
        this.deleteBtn.className = "reserwation__delete-btn";
        this.showMorebtn.classList.add("reserwation__show-info-btn","btn");
        this.btnContainer.className = "reserwation__btn-container";
        
        this.showMorebtn.innerText = "Show more";
        this.editBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
                d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" 
                fill="#132F54" />
        </svg>
        `;

        this.deleteBtn.innerHTML = `
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.28516 4.67285H7.93701V2.71387C7.93701 2.40951 8.03109 2.16878 8.21924 1.9917C8.41292 1.80908 8.67578 1.71777 9.00781 1.71777H12.9839C13.3159 1.71777 13.5788 1.80908 13.7725 1.9917C13.9661 2.16878 14.063 2.40951 14.063 2.71387V4.67285H15.7065V2.63086C15.7065 1.86165 15.4686 1.25846 14.9927 0.821289C14.5223 0.378581 13.8804 0.157227 13.0669 0.157227H8.9165C8.10303 0.157227 7.4611 0.378581 6.99072 0.821289C6.52035 1.25846 6.28516 1.86165 6.28516 2.63086V4.67285ZM1.396 5.71875H20.604C20.7977 5.71875 20.9609 5.65234 21.0938 5.51953C21.2266 5.38118 21.293 5.21794 21.293 5.02979C21.293 4.8361 21.2266 4.67285 21.0938 4.54004C20.9609 4.40169 20.7977 4.33252 20.604 4.33252H1.396C1.21338 4.33252 1.0529 4.40169 0.914551 4.54004C0.776204 4.67839 0.707031 4.84163 0.707031 5.02979C0.707031 5.21794 0.776204 5.38118 0.914551 5.51953C1.0529 5.65234 1.21338 5.71875 1.396 5.71875ZM18.9272 5.50293H3.08936L3.83643 21.6147C3.85303 22.0409 3.94987 22.4061 4.12695 22.7104C4.30957 23.0148 4.55859 23.2472 4.87402 23.4077C5.18945 23.5682 5.56022 23.6484 5.98633 23.6484H16.0303C16.4508 23.6484 16.8188 23.5682 17.1343 23.4077C17.4552 23.2472 17.7043 23.0148 17.8813 22.7104C18.064 22.4061 18.1636 22.0409 18.1802 21.6147L18.9272 5.50293ZM7.64648 20.5938C7.47493 20.5938 7.33659 20.5412 7.23145 20.436C7.1263 20.3364 7.07096 20.2036 7.06543 20.0376L6.7168 8.16748C6.7168 8.00146 6.76937 7.86865 6.87451 7.76904C6.97965 7.66943 7.12077 7.61963 7.29785 7.61963C7.46387 7.61963 7.59945 7.66943 7.70459 7.76904C7.81527 7.86312 7.87337 7.99316 7.87891 8.15918L8.21924 20.0376C8.22477 20.1981 8.17497 20.3309 8.06982 20.436C7.96468 20.5412 7.82357 20.5938 7.64648 20.5938ZM11.0083 20.5938C10.8312 20.5938 10.6873 20.5412 10.5767 20.436C10.466 20.3309 10.4106 20.1981 10.4106 20.0376V8.16748C10.4106 8.007 10.466 7.87695 10.5767 7.77734C10.6873 7.6722 10.8312 7.61963 11.0083 7.61963C11.1799 7.61963 11.321 7.6722 11.4316 7.77734C11.5423 7.87695 11.5977 8.007 11.5977 8.16748V20.0376C11.5977 20.1981 11.5423 20.3309 11.4316 20.436C11.321 20.5412 11.1799 20.5938 11.0083 20.5938ZM14.3618 20.5938C14.1847 20.5938 14.0436 20.5412 13.9385 20.436C13.8333 20.3364 13.7808 20.2036 13.7808 20.0376L14.1294 8.16748C14.1294 8.00146 14.1847 7.86865 14.2954 7.76904C14.4061 7.66943 14.5417 7.61963 14.7021 7.61963C14.8792 7.61963 15.0203 7.6722 15.1255 7.77734C15.2362 7.87695 15.2887 8.00977 15.2832 8.17578L14.9429 20.0459C14.9373 20.2119 14.882 20.3447 14.7769 20.4443C14.6717 20.5439 14.5334 20.5938 14.3618 20.5938Z"
            fill="#DF1922" />
        </svg>
        `;

        this.btnContainer.append(this.editBtn, this.deleteBtn);
        this.cardDoctorContainer.insertAdjacentHTML("afterbegin", `<h2>${this.doctor}</h2>`);
        this.cardDoctorContainer.append(this.btnContainer);
        this.card.append(this.cardDoctorContainer);
        this.card.insertAdjacentHTML("beforeend", `<p class="reserwation__card-patient-name">${this.fullname}</p>`);
        this.card.append(this.showMorebtn);
        this.cardContainer.append(this.card);
    }

    render() {
        this.createElement();
        this.container.append(this.cardContainer);
    }
 }



