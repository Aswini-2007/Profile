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