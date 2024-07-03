const heartBtn = document.querySelector('.heart-btn');
const envelopeCard = document.querySelector('.envelope-card');

heartBtn.addEventListener('click', function() {
  envelopeCard.classList.toggle('hidden');
});