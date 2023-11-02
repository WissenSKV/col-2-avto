
//Send авторизируйся
document.querySelector('.button1').addEventListener('click', function() {

  const modal = document.createElement('div');
  modal.className = 'modall';


  const modalContent = document.createElement('div');
  modalContent.className = 'modall-content';
  modalContent.innerHTML = '<p>LOG IN!</p>';


  const modalButton = document.createElement('button');
  modalButton.className = 'modall-button';
  modalButton.textContent = 'OK';


  modalContent.appendChild(modalButton);


  modal.appendChild(modalContent);


  document.body.appendChild(modal);


  modal.style.display = 'block';


  modalButton.addEventListener('click', function() {

    modal.style.display = 'none';
  });
  modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
});




// RU и EN
document.addEventListener('DOMContentLoaded', (event) => {
    const languageButtons = document.querySelectorAll('.language-button');

    languageButtons.forEach(button => {
      button.addEventListener('click', () => {
        languageButtons.forEach(b => {
          b.classList.remove('active');
          b.classList.add('inactive');
        });
        button.classList.remove('inactive');
        button.classList.add('active');
      });
    });
});


//slides
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000);