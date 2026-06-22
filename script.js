const discoverBtn = document.getElementById('discoverBtn');

if (discoverBtn) {
  discoverBtn.addEventListener('click', () => {
    alert('Bienvenue à Mon Restaurant ! Explorez notre menu et réservez votre table.');
  });
}

const galleryImages = document.querySelectorAll('.gallery-item img');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageModalClose = document.getElementById('imageModalClose');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    imageModal.classList.add('active');
  });
});

const closeModal = () => {
  imageModal.classList.remove('active');
};

if (imageModalClose) {
  imageModalClose.addEventListener('click', closeModal);
}

if (imageModal) {
  imageModal.addEventListener('click', (event) => {
    if (event.target === imageModal) {
      closeModal();
    }
  });
}
