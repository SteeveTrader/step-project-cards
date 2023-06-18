
export default class Modal {
    constructor() {
        this.modalWindow = document.createElement('div');
        this.modalBackground = document.createElement('div');
        this.modalContainer = document.createElement('div');
        this.modalCloseBtn = document.createElement('button');
        this.modalContentWrapper = document.createElement('div');
        this.modalBtnWrapper = document.createElement('div');
        this.modalBtnOk = document.createElement('button');
        this.modalBtnCancel = document.createElement('button');
    }
  
    createElements() {
        this.modalWindow.classList.add('modal');
        this.modalBackground.classList.add('modal__background');
        this.modalContainer.classList.add('modal__container');
        this.modalCloseBtn.classList.add('modal__close');
        this.modalContentWrapper.classList.add('modal__content-wrapper');
        this.modalBtnWrapper.classList.add('modal__button-wrapper');
        this.modalCloseBtn.innerHTML = 'Confirm';
    
        this.modalBtnOk.innerText = 'OK';
        this.modalBtnOk.classList.add('modal__btn-ok');

        this.modalBtnCancel.innerText = 'Cancel';
        this.modalBtnCancel.classList.add('modal__btn-cancel');
        this.modalBtnCancel.addEventListener('click', () => this.close());
    
        this.modalCloseBtn.addEventListener('click', () => this.close());
        this.modalBackground.addEventListener('click', () => this.close());
    
        this.modalContainer.append(this.modalCloseBtn);
        this.modalContainer.append(this.modalContentWrapper);
        this.modalContainer.append(this.modalBtnWrapper);
        this.modalWindow.append(this.modalBackground);
        this.modalWindow.append(this.modalContainer);
        this.modalBtnWrapper.append(this.modalBtnOk);
        this.modalBtnWrapper.append(this.modalBtnCancel);
    }
  
    close() {
      this.modalWindow.remove();
    }
  
    render() {
      this.createElements();
      return this.modalWindow;
    }
  }
  