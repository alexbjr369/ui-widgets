const dialog = document.querySelector('#tp-dialog')!;
const overlay = document.querySelector('#tp-overlay')!;
const btnCloseModal = document.querySelector('#tp-dialog-close')!;
const btnsOpenModal = document.querySelectorAll('.tp-dialog-button')!;

const open = function () {
  dialog.classList.remove('tp-hidden');
  overlay.classList.remove('tp-hidden');
};

const close = function () {
  dialog.classList.add('tp-hidden');
  overlay.classList.add('tp-hidden');
};

btnCloseModal.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !dialog.classList.contains('tp-hidden')) {
    close();
  }
});

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', open);
}

class Dialog {
  private element = 
  constructor(el: HTMLElement) {

  }
}
