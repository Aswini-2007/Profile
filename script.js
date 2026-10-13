<!-- JAVASCRIPT LOGIC -->
	<script>
		document.addEventListener('DOMContentLoaded', () => {

			// Mobile Navigation Drawer Toggle
			const burger = document.getElementById('burger');
			const burgerIcon = document.getElementById('burgerIcon');
			const mobileMenu = document.getElementById('mobileMenu');

			burger.addEventListener('click', () => {
				const isHidden = mobileMenu.classList.contains('hidden');
				if (isHidden) {
					mobileMenu.classList.remove('hidden');
					burgerIcon.classList.remove('fa-bars');
					burgerIcon.classList.add('fa-xmark');
				} else {
					mobileMenu.classList.add('hidden');
					burgerIcon.classList.remove('fa-xmark');
					burgerIcon.classList.add('fa-bars');
				}
			});

			mobileMenu.querySelectorAll('a').forEach(link => {
				link.addEventListener('click', () => {
					mobileMenu.classList.add('hidden');
					burgerIcon.classList.remove('fa-xmark');
					burgerIcon.classList.add('fa-bars');
				});
			});

			// Education Detail Modal Logic
			const eduModal = document.getElementById('eduModal');
			const eduModalBox = document.getElementById('eduModalBox');
			const eduModalTitle = document.getElementById('eduModalTitle');
			const eduModalMeta = document.getElementById('eduModalMeta');
			const eduModalBody = document.getElementById('eduModalBody');
			const eduModalClose = document.getElementById('eduModalClose');
			const eduModalCloseBtn = document.getElementById('eduModalCloseBtn');

			function openEduModal(title, meta, body) {
				eduModalTitle.textContent = title;
				eduModalMeta.textContent = meta;
				eduModalBody.textContent = body;

				eduModal.classList.remove('opacity-0', 'pointer-events-none');
				eduModalBox.classList.remove('scale-95');
				eduModalBox.classList.add('scale-100');
				document.body.style.overflow = 'hidden';
			}

			function closeEduModal() {
				eduModal.classList.add('opacity-0', 'pointer-events-none');
				eduModalBox.classList.remove('scale-100');
				eduModalBox.classList.add('scale-95');
				document.body.style.overflow = '';
			}

			document.querySelectorAll('.reveal-edu').forEach(card => {
				card.addEventListener('click', () => {
					openEduModal(card.dataset.modalTitle, card.dataset.modalMeta, card.dataset.modalBody);
				});
			});

			[eduModalClose, eduModalCloseBtn].forEach(btn => btn.addEventListener('click', closeEduModal));
			eduModal.addEventListener('click', (e) => {
				if (e.target === eduModal) closeEduModal();
			});

			// Certificate Filter & Search Logic
			const certSearch = document.getElementById('certSearch');
			const filterBtns = document.querySelectorAll('.filter-btn');
			const certCards = document.querySelectorAll('.cert-card');
			const certCounter = document.getElementById('certCounter');

			let currentCategory = 'all';

			function filterCertificates() {
				const query = certSearch.value.trim().toLowerCase();
				let visibleCount = 0;

				certCards.forEach(card => {
					const category = card.dataset.category;
					const searchData = card.dataset.search.toLowerCase();

					const matchesCategory = (currentCategory === 'all') || (category === currentCategory);
					const matchesQuery = query === '' || searchData.includes(query);

					if (matchesCategory && matchesQuery) {
						card.style.display = 'flex';
						visibleCount++;
					} else {
						card.style.display = 'none';
					}
				});

				certCounter.textContent = `Showing ${visibleCount} of ${certCards.length} certificates`;
			}

			filterBtns.forEach(btn => {
				btn.addEventListener('click', () => {
					filterBtns.forEach(b => {
						b.classList.remove('bg-sky-500', 'text-slate-950', 'shadow-md', 'shadow-sky-500/20');
						b.classList.add('bg-slate-900', 'border', 'border-slate-800', 'text-slate-400');
					});
					btn.classList.remove('bg-slate-900', 'border', 'border-slate-800', 'text-slate-400');
					btn.classList.add('bg-sky-500', 'text-slate-950', 'shadow-md', 'shadow-sky-500/20');

					currentCategory = btn.dataset.cat;
					filterCertificates();
				});
			});

			certSearch.addEventListener('input', filterCertificates);

			// Certificate Lightbox Modal Logic
			const certModal = document.getElementById('certModal');
			const certModalImg = document.getElementById('certModalImg');
			const certModalTitle = document.getElementById('certModalTitle');
			const certModalIssuer = document.getElementById('certModalIssuer');
			const certModalClose = document.getElementById('certModalClose');

			function openCertModal(imgUrl, title, issuer) {
				certModalImg.src = imgUrl;
				certModalTitle.textContent = title;
				certModalIssuer.textContent = issuer;

				certModal.classList.remove('opacity-0', 'pointer-events-none');
				document.body.style.overflow = 'hidden';
			}

			function closeCertModal() {
				certModal.classList.add('opacity-0', 'pointer-events-none');
				certModalImg.src = '';
				document.body.style.overflow = '';
			}

			certCards.forEach(card => {
				card.addEventListener('click', () => {
					openCertModal(card.dataset.full, card.dataset.title, card.dataset.issuer);
				});
			});

			certModalClose.addEventListener('click', closeCertModal);
			certModal.addEventListener('click', (e) => {
				if (e.target === certModal) closeCertModal();
			});

			// ESC key listener to close active overlays
			document.addEventListener('keydown', (e) => {
				if (e.key === 'Escape') {
					closeEduModal();
					closeCertModal();
				}
			});

			// Toast Alert System
			const toast = document.getElementById('toast');
			const toastTitle = document.getElementById('toastTitle');
			const toastMsg = document.getElementById('toastMsg');
			let toastTimer;

			function showToast(title, message) {
				toastTitle.textContent = title;
				toastMsg.textContent = message;
				toast.classList.remove('hidden-toast');

				clearTimeout(toastTimer);
				toastTimer = setTimeout(() => {
					toast.classList.add('hidden-toast');
				}, 3500);
			}

			// Copy-to-clipboard buttons
			document.querySelectorAll('.copy-btn').forEach(btn => {
				btn.addEventListener('click', (e) => {
					e.preventDefault();
					const textToCopy = btn.dataset.copy;

					// Safe clipboard fallback for iframe context
					const dummy = document.createElement('textarea');
					document.body.appendChild(dummy);
					dummy.value = textToCopy;
					dummy.select();
					document.execCommand('copy');
					document.body.removeChild(dummy);

					showToast('Copied to Clipboard!', textToCopy);
				});
			});

			// Contact Form Handler
			const contactForm = document.getElementById('contactForm');
			contactForm.addEventListener('submit', (e) => {
				e.preventDefault();
				const name = document.getElementById('formName').value;

				showToast('Message Sent!', `Thank you ${name}, your message has been transmitted.`);
				contactForm.reset();
			});

		});
	</script>
</body>

</html>
