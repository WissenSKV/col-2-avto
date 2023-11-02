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


//plus показ
const openModalButton = document.getElementById('openModalButton');
openModalButton.addEventListener('click', () => {
  showModal(
    '../images/diagnostic.webp',
    'ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH'
  );
});


const openModalButton1 = document.getElementById('openModalButton1');
openModalButton1.addEventListener('click', () => {
  showModal(
    '../images/tires.webp',
    'ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH'
  );
});


const openModalButton2 = document.getElementById('openModalButton2');
openModalButton2.addEventListener('click', () => {
  showModal(
    '../images/engine.webp',
    'ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH'
  );
});

const modal = document.getElementById('modal');
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});


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







//show more
$(document).ready(function() {
  $("#showMoreButton").click(function() {
    $("#modal1").fadeIn();
  });

  $("#modal1").click(function(event) {
    if ($(event.target).is("#modal1") || !$(event.target).closest("img").length) {
      $("#modal1").fadeOut();
    }
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






