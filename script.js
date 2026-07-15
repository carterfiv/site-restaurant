const discoverBtn = document.getElementById('discoverBtn');

if (discoverBtn) {
  discoverBtn.addEventListener('click', () => {
    alert('Bienvenue à Mon Restaurant ! Explorez notre menu et réservez votre table.');
  });
}

// NAV responsive (mobile)
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  const setExpanded = (expanded) => {
    siteNav.classList.toggle('open', expanded);
    navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  };

  setExpanded(false);

  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.contains('open');
    setExpanded(!isOpen);
  });

  // Fermer le menu après un clic sur un lien (mobile)
  siteNav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 768) setExpanded(false);
    });
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

// Fermer au clavier (Escape) - utile sur mobile avec clavier externe
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
    closeModal();
  }
});