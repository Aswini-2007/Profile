// ---- 3-line menu (phone) ----
const burger = document.getElementById('burger');
const navlinks = document.getElementById('navlinks');

burger.addEventListener('click', () => {
  const open = navlinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

navlinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navlinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ---- Education click-to-reveal modal ----
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
function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

// ---- Certificate click-to-open full image ----
const certificateCards = document.querySelectorAll('.certificate-card');
const certificateModal = document.getElementById('certificateModal');
const fullCertificate = document.getElementById('fullCertificate');
const modalCaption = document.getElementById('modalCaption');

certificateCards.forEach(card => {
  card.addEventListener('click', function (e) {
    e.preventDefault();
    fullCertificate.src = card.getAttribute('href');
    modalCaption.textContent = card.querySelector('h2').textContent.replace('\n', ' ') + ' — ' + (card.dataset.issuer || '');
    certificateModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});
function closeCertificate() {
  certificateModal.style.display = 'none';
  fullCertificate.src = '';
  document.body.style.overflow = '';
}
certificateModal.addEventListener('click', e => { if (e.target === certificateModal) closeCertificate(); });

// ---- Escape key closes whichever popup is open ----
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeCertificate(); }
});

// ---- Search filter ----
const searchInput = document.getElementById('searchInput');
const searchMeta = document.getElementById('searchMeta');
const cards = Array.from(document.querySelectorAll('#certificateGrid .certificate-card'));

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  let shown = 0;
  cards.forEach(card => {
    const match = card.dataset.search.includes(q);
    card.classList.toggle('hidden', !match);
    if (match) shown++;
  });
  searchMeta.textContent = q
    ? `Showing ${shown} of ${cards.length} certificates`
    : `Showing all ${cards.length} certificates`;
  if (q) document.getElementById('certificates').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
