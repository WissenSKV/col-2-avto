// Функция для отображения модального окна
function showModal(imageSrc, text) {
  const modalImage = document.getElementById('modalImage');
  const textOverImage = document.getElementById('textOverImage');
  modal.style.display = 'block';
  modalImage.src = imageSrc;
  modalImage.style.width = '1000px';
  modalImage.style.height = '600px';
  textOverImage.innerText = text;
  textOverImage.style.fontSize = '40px';
  textOverImage.style.color = '#fff';
}

// Слушатели событий для всех кнопок
const modalButtons = [
  'openModalButton', 'openModalButton1', 'openModalButton2',
  'openModalButton3', 'openModalButton4', 'openModalButton5'
];

modalButtons.forEach(buttonId => {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', () => {
    let imageSrc, text;

    // Определяем изображение и текст в зависимости от ID кнопки
    if (buttonId === 'openModalButton' || buttonId === 'openModalButton3') {
      imageSrc = '../images/diagnostic.webp';
      text = 'ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH';
    } else if (buttonId === 'openModalButton1' || buttonId === 'openModalButton4') {
      imageSrc = '../images/tires.webp';
      text = 'ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH';
    } else if (buttonId === 'openModalButton2' || buttonId === 'openModalButton5') {
      imageSrc = '../images/engine.webp';
      text = 'ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH';
    }

    showModal(imageSrc, text);
  });
});

const modal = document.getElementById('modal');
modal.addEventListener('click', () => {
  modal.style.display = 'none';
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






//Slides
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










