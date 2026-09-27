const burger = document.getElementById('burger');
const navlinks = document.getElementById('navlinks');
burger.addEventListener('click', () => {
  const open = navlinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navlinks.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));

const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('#education .reveal-card').forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.modalTitle;
    modalMeta.textContent = card.dataset.modalMeta;
    modalBody.textContent = card.dataset.modalBody;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
function closeModal(){ modalOverlay.classList.remove('open'); document.body.style.overflow = ''; }
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) closeModal(); });

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxT = document.getElementById('lightboxT');
const lightboxI = document.getElementById('lightboxI');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('#certGrid .reveal-card').forEach(card => {
  card.addEventListener('click', () => {
    lightboxImg.src = card.dataset.full;
    lightboxImg.alt = card.dataset.title;
    lightboxT.textContent = card.dataset.title;
    lightboxI.textContent = card.dataset.issuer;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
function closeLightbox(){ lightbox.classList.remove('open'); document.body.style.overflow = ''; }
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){ closeLightbox(); closeModal(); }
});

const searchInput = document.getElementById('searchInput');
const searchMeta = document.getElementById('searchMeta');
const cards = Array.from(document.querySelectorAll('#certGrid .reveal-card'));
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const match = card.dataset.search.includes(q);
    card.classList.toggle('hidden', !match);
    if(match) shown++;
  });
  searchMeta.textContent = q ? `Showing ${shown} of ${cards.length} certificates` : `Showing all ${cards.length} certificates`;
  if(q) document.getElementById('certificates').scrollIntoView({behavior:'smooth', block:'start'});
});

// Grab all certificate cards and the modal elements
const certificateCards = document.querySelectorAll('.certificate-card');
const certificateModal = document.getElementById('certificateModal');
const fullCertificate = document.getElementById('fullCertificate');

// When a certificate card is clicked, open it inside the modal instead of a new tab
certificateCards.forEach(card => {
  card.addEventListener('click', function (e) {
    e.preventDefault(); // stop the <a> from opening the image in a new tab
    const fullImageUrl = card.getAttribute('href'); // the full-size certificate URL
    fullCertificate.src = fullImageUrl;
    certificateModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // lock background scroll while modal is open
  });
});

// Close button (referenced by your existing onclick="closeCertificate()")
function closeCertificate() {
  certificateModal.style.display = 'none';
  fullCertificate.src = '';
  document.body.style.overflow = '';
}

// Also close if the dark backdrop itself is clicked (outside the image)
certificateModal.addEventListener('click', function (e) {
  if (e.target === certificateModal) {
    closeCertificate();
  }
});

// Also close with the Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeCertificate();
  }
});
const burger = document.getElementById('burger');
const navlinks = document.getElementById('navlinks');

// Click the 3 lines: open/close the menu
burger.addEventListener('click', () => {
  const open = navlinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Click any link inside the menu: close it (the browser handles the scroll to #section)
navlinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navlinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});
