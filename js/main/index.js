const typicalLayoutImage = document.querySelector('#typical-layout-image');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const closeBtn = document.querySelector('#close-modal-btn');

typicalLayoutImage.addEventListener('click', () => {

    modal.classList.add('opened')
    overlay.classList.add('opened')

    console.log(123);
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('opened')
    overlay.classList.remove('opened')
})