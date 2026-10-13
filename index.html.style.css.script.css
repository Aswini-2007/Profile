<!DOCTYPE html>
<html lang="en" class="scroll-smooth dark">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Komara Aswini — CSE & Cyber Security Portfolio</title>
	
	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
	
	<!-- Tailwind CSS CDN -->
	<script src="https://cdn.tailwindcss.com"></script>
	<script>
		tailwind.config = {
			darkMode: 'class',
			theme: {
				extend: {
					fontFamily: {
						sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
					},
					colors: {
						brand: {
							bg: '#0B0F19',
							surface: '#111827',
							card: '#1E293B',
							accent: '#38BDF8',
							indigo: '#6366F1',
							emerald: '#10B981',
						}
					},
					animation: {
						'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
						'float': 'float 6s ease-in-out infinite',
					},
					keyframes: {
						pulseGlow: {
							'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
							'50%': { opacity: '0.8', transform: 'scale(1.05)' },
						},
						float: {
							'0%, 100%': { transform: 'translateY(0px)' },
							'50%': { transform: 'translateY(-10px)' },
						}
					}
				}
			}
		}
	</script>

	<!-- FontAwesome Icons -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

	<style>
		body {
			background-color: #0B0F19;
			color: #F8FAFC;
			font-family: 'Plus Jakarta Sans', sans-serif;
			overflow-x: hidden;
		}

		/* Custom Scrollbar */
		::-webkit-scrollbar {
			width: 8px;
		}
		::-webkit-scrollbar-track {
			background: #0B0F19;
		}
		::-webkit-scrollbar-thumb {
			background: #1E293B;
			border-radius: 9999px;
			border: 2px solid #0B0F19;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #38BDF8;
		}

		/* Glassmorphic Container Utility */
		.glass-card {
			background: rgba(30, 41, 59, 0.5);
			backdrop-filter: blur(12px);
			-webkit-backdrop-filter: blur(12px);
			border: 1px solid rgba(255, 255, 255, 0.08);
			box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
		}

		.glass-card:hover {
			border-color: rgba(56, 189, 248, 0.3);
			box-shadow: 0 15px 35px -10px rgba(56, 189, 248, 0.15);
		}

		.glass-nav {
			background: rgba(11, 15, 25, 0.82);
			backdrop-filter: blur(16px);
			-webkit-backdrop-filter: blur(16px);
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		}

		/* Text Gradients */
		.text-gradient-cyan {
			background: linear-gradient(135deg, #38BDF8 0%, #6366F1 50%, #10B981 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.text-gradient-silver {
			background: linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		/* Profile Image Glow Effect */
		.avatar-glow {
			position: relative;
		}
		.avatar-glow::before {
			content: '';
			position: absolute;
			inset: -4px;
			border-radius: 9999px;
			background: linear-gradient(135deg, #38BDF8, #6366F1, #10B981);
			z-index: -1;
			filter: blur(10px);
			opacity: 0.75;
			animation: pulseGlow 4s ease-in-out infinite;
		}

		/* Toast Notification Slide Animation */
		#toast {
			transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
		}
		#toast.hidden-toast {
			transform: translateY(100px) scale(0.9);
			opacity: 0;
			pointer-events: none;
		}
	</style>
</head>

<body class="selection:bg-sky-500 selection:text-slate-900 relative">

	<!-- Ambient Glow Orbs in Background -->
	<div class="fixed top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
	<div class="fixed bottom-1/3 right-0 translate-x-1/3 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>
	<div class="fixed top-2/3 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

	<!-- NAVBAR -->
	<header class="sticky top-0 z-50 glass-nav transition-all duration-300">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
			
			<!-- Brand Logo -->
			<a href="#home" class="flex items-center gap-3 group">
				<div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
					KA
				</div>
				<span class="font-extrabold text-xl tracking-tight text-gradient-silver group-hover:text-sky-400 transition-colors">
					Komara <span class="text-sky-400">Aswini</span>
				</span>
			</a>

			<!-- Status Badge (Desktop) -->
			<div class="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
				<span class="relative flex h-2.5 w-2.5">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
					<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
				</span>
				<span>Available for Opportunities</span>
			</div>

			<!-- Nav Links (Desktop) -->
			<nav class="hidden md:flex items-center gap-8 text-sm font-medium">
				<a href="#about" class="text-slate-300 hover:text-sky-400 transition-colors">About</a>
				<a href="#education" class="text-slate-300 hover:text-sky-400 transition-colors">Education</a>
				<a href="#skills" class="text-slate-300 hover:text-sky-400 transition-colors">Skills</a>
				<a href="#certifications" class="text-slate-300 hover:text-sky-400 transition-colors">Certifications</a>
				<a href="#projects" class="text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
				<a href="#contact" class="px-4 py-2 rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 font-semibold transition-all hover:scale-105">Get in Touch</a>
			</nav>

			<!-- Mobile Burger Button -->
			<button id="burger" aria-label="Toggle Menu" class="md:hidden p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-sky-400 focus:outline-none">
				<i class="fa-solid fa-bars text-lg" id="burgerIcon"></i>
			</button>
		</div>

		<!-- Mobile Navigation Drawer -->
		<div id="mobileMenu" class="hidden md:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl px-6 py-6 space-y-4">
			<div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 w-max mb-2">
				<span class="relative flex h-2 w-2">
					<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
					<span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
				</span>
				<span>Available for Opportunities</span>
			</div>
			<a href="#about" class="block text-slate-300 hover:text-sky-400 py-2 text-base font-medium">About</a>
			<a href="#education" class="block text-slate-300 hover:text-sky-400 py-2 text-base font-medium">Education</a>
			<a href="#skills" class="block text-slate-300 hover:text-sky-400 py-2 text-base font-medium">Skills</a>
			<a href="#certifications" class="block text-slate-300 hover:text-sky-400 py-2 text-base font-medium">Certifications</a>
			<a href="#projects" class="block text-slate-300 hover:text-sky-400 py-2 text-base font-medium">Projects</a>
			<a href="#contact" class="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-slate-950 font-bold shadow-lg shadow-sky-500/20 mt-2">Get in Touch</a>
		</div>
	</header>

	<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">

		<!-- HERO SECTION -->
		<section id="home" class="min-h-[80vh] flex flex-col justify-center pt-8">
			<div class="grid lg:grid-cols-12 gap-12 items-center">
				
				<!-- Left Text Column -->
				<div class="lg:col-span-7 space-y-8 text-center lg:text-left">
					
					<!-- Tagline pill -->
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs sm:text-sm font-semibold text-sky-400 border-sky-500/20">
						<i class="fa-solid fa-graduation-cap text-sky-400"></i>
						<span>CSE Student · Sreenidhi University</span>
					</div>

					<!-- Main Title -->
					<div class="space-y-3">
						<h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
							Hi, I'm <br class="hidden sm:inline">
							<span class="text-gradient-cyan">Komara Aswini</span>
						</h1>
						<p class="text-lg sm:text-xl text-slate-400 font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0">
							A dedicated Computer Science & Engineering student building modern software systems with an active focus on <span class="text-slate-200 font-semibold">Cyber Security</span>, <span class="text-slate-200 font-semibold">C++</span>, <span class="text-slate-200 font-semibold">Python</span>, <span class="text-slate-200 font-semibold">Java</span>, and responsive frontend architectures.
						</p>
					</div>

					<!-- Stats Banner -->
					<div class="grid grid-cols-3 gap-4 pt-2 max-w-lg mx-auto lg:mx-0">
						<div class="p-4 rounded-2xl glass-card text-center lg:text-left border border-slate-800">
							<div class="text-2xl sm:text-3xl font-extrabold text-sky-400">6+</div>
							<div class="text-xs text-slate-400 font-medium mt-1">Certifications</div>
						</div>
						<div class="p-4 rounded-2xl glass-card text-center lg:text-left border border-slate-800">
							<div class="text-2xl sm:text-3xl font-extrabold text-indigo-400">4+</div>
							<div class="text-xs text-slate-400 font-medium mt-1">Core Languages</div>
						</div>
						<div class="p-4 rounded-2xl glass-card text-center lg:text-left border border-slate-800">
							<div class="text-2xl sm:text-3xl font-extrabold text-emerald-400">2029</div>
							<div class="text-xs text-slate-400 font-medium mt-1">B.Tech Grad</div>
						</div>
					</div>

					<!-- CTA Buttons & Social Links -->
					<div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
						<a href="#certifications" class="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-500 bg-[length:200%_auto] hover:bg-right text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-sky-500/20 transition-all duration-300 hover:scale-105 flex items-center gap-2">
							<span>Explore Certifications</span>
							<i class="fa-solid fa-arrow-right text-xs"></i>
						</a>
						<a href="#contact" class="px-8 py-4 rounded-full glass-card hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all hover:scale-105 border border-slate-700">
							Get in Touch
						</a>

						<div class="flex items-center gap-3 pl-2 sm:border-l sm:border-slate-800 sm:ml-2">
							<a href="https://www.linkedin.com/in/komara-aswini277" target="_blank" rel="noopener" aria-label="LinkedIn Profile" class="w-11 h-11 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all hover:scale-110">
								<i class="fa-brands fa-linkedin-in text-lg"></i>
							</a>
							<a href="https://github.com/Aswini-2007" target="_blank" rel="noopener" aria-label="GitHub Profile" class="w-11 h-11 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all hover:scale-110">
								<i class="fa-brands fa-github text-lg"></i>
							</a>
							<a href="mailto:Komaraaswini@gmail.com" aria-label="Send Email" class="w-11 h-11 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all hover:scale-110">
								<i class="fa-solid fa-envelope text-lg"></i>
							</a>
						</div>
					</div>

				</div>

				<!-- Right Column Profile Picture Spotlight -->
				<div class="lg:col-span-5 flex justify-center">
					<div class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
						<!-- Glow background ring -->
						<div class="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 blur-2xl opacity-40 animate-pulse-glow"></div>
						
						<!-- Outer frame -->
						<div class="avatar-glow relative w-full h-full rounded-full p-2 bg-slate-900 border border-slate-800 shadow-2xl">
							<img src="https://cdn.phototourl.com/member/2026-09-27-417b8473-b9ce-430a-b2f3-5d76393818dc.png" 
								alt="Komara Aswini Portrait" 
								class="w-full h-full object-cover rounded-full filter saturate-105"
								onerror="this.onerror=null; this.src='https://placehold.co/400x400/1E293B/38BDF8?text=Komara+Aswini';">
						</div>

						<!-- Floating Tech Badge -->
						<div class="absolute -bottom-2 -left-2 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-sky-500/30 shadow-2xl animate-float">
							<div class="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-sm">
								<i class="fa-solid fa-shield-halved"></i>
							</div>
							<div>
								<div class="text-xs font-bold text-slate-200">Focus Domain</div>
								<div class="text-[11px] text-sky-400 font-semibold">Cyber Security</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>

		<!-- ABOUT SECTION -->
		<section id="about" class="pt-12">
			<div class="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
				<div class="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
				
				<div class="max-w-3xl space-y-6">
					<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wider uppercase">
						About Me
					</div>
					<h2 class="text-3xl sm:text-4xl font-extrabold text-gradient-silver">
						Passionate about solving complex problems through technology
					</h2>
					<p class="text-slate-300 leading-relaxed text-base sm:text-lg">
						I am a Computer Science & Engineering undergraduate at <strong class="text-sky-400 font-semibold">Sreenidhi University</strong> with a drive for understanding hardware-software interaction, algorithmic thinking, and cybersecurity concepts. Through hands-on programming in C++, Python, Java, and modern web tech, I enjoy creating scalable solutions and exploring the cloud landscape.
					</p>

					<div class="grid sm:grid-cols-2 gap-4 pt-4">
						<div class="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
							<div class="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 text-lg">
								<i class="fa-solid fa-code"></i>
							</div>
							<div>
								<h3 class="font-bold text-slate-200 text-sm">Software Development</h3>
								<p class="text-xs text-slate-400 mt-1">Clean object-oriented architecture in C++, Java, and Python.</p>
							</div>
						</div>

						<div class="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
							<div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 text-lg">
								<i class="fa-solid fa-user-shield"></i>
							</div>
							<div>
								<h3 class="font-bold text-slate-200 text-sm">Cyber Security</h3>
								<p class="text-xs text-slate-400 mt-1">Understanding network security, threat vectors, and data protection.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- EDUCATION SECTION -->
		<section id="education" class="space-y-10 pt-8">
			<div class="text-center max-w-2xl mx-auto space-y-3">
				<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wider uppercase">
					Academic History
				</div>
				<h2 class="text-3xl sm:text-4xl font-extrabold text-gradient-silver">Education Journey</h2>
				<p class="text-slate-400 text-sm sm:text-base">Click any milestone card to open detailed academic metrics and focus topics.</p>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
				
				<!-- Degree Card -->
				<div class="reveal-edu glass-card p-6 rounded-2xl space-y-4 cursor-pointer group transition-all hover:-translate-y-1 relative"
					data-modal-title="Sreenidhi University"
					data-modal-meta="B.Tech · Computer Science & Engineering (2025 - 2029)"
					data-modal-body="Currently pursuing B.Tech in Computer Science and Engineering. Focusing heavily on Data Structures & Algorithms, Object-Oriented Programming (C++/Java), Database Management Systems (DBMS), Operating Systems, and Cyber Security principles. Participated in multiple tech workshops and cloud computing certifications.">
					
					<div class="flex items-center justify-between">
						<span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">Degree</span>
						<span class="text-xs text-slate-400 font-medium">Graduation 2029</span>
					</div>
					<div>
						<h3 class="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">Sreenidhi University</h3>
						<p class="text-sm text-slate-400 mt-1">B.Tech in Computer Science & Engineering</p>
					</div>
					<div class="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
						<span>Hyderabad, TS</span>
						<span class="text-sky-400 font-medium flex items-center gap-1">Details <i class="fa-solid fa-chevron-right text-[10px]"></i></span>
					</div>
				</div>

				<!-- Intermediate Card -->
				<div class="reveal-edu glass-card p-6 rounded-2xl space-y-4 cursor-pointer group transition-all hover:-translate-y-1 relative"
					data-modal-title="Fiitjee Junior College"
					data-modal-meta="Intermediate (10+2) · MPC (Maths, Physics, Chemistry)"
					data-modal-body="Completed Senior Secondary Intermediate Education with a score of 78.6%. Mastered core analytical topics in Higher Mathematics, Physics, and Chemistry which laid a rigorous analytical foundation for engineering and problem-solving.">
					
					<div class="flex items-center justify-between">
						<span class="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">Intermediate</span>
						<span class="text-xs text-slate-300 font-bold bg-indigo-500/20 px-2 py-0.5 rounded">78.6%</span>
					</div>
					<div>
						<h3 class="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">Fiitjee Junior College</h3>
						<p class="text-sm text-slate-400 mt-1">Intermediate (10+2) MPC Stream</p>
					</div>
					<div class="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
						<span>Senior Secondary</span>
						<span class="text-indigo-400 font-medium flex items-center gap-1">Details <i class="fa-solid fa-chevron-right text-[10px]"></i></span>
					</div>
				</div>

				<!-- School Card -->
				<div class="reveal-edu glass-card p-6 rounded-2xl space-y-4 cursor-pointer group transition-all hover:-translate-y-1 relative"
					data-modal-title="Seventh Day Adventist High School"
					data-modal-meta="10th Standard · Secondary Schooling"
					data-modal-body="Completed 10th grade secondary schooling with a high academic CGPA of 8.5. Developed foundational problem-solving, communication skills, and active participation in science and computer club activities.">
					
					<div class="flex items-center justify-between">
						<span class="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">10th Schooling</span>
						<span class="text-xs text-slate-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">8.5 CGPA</span>
					</div>
					<div>
						<h3 class="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">Seventh Day Adventist High School</h3>
						<p class="text-sm text-slate-400 mt-1">Secondary School Leaving Certificate</p>
					</div>
					<div class="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
						<span>Secondary Education</span>
						<span class="text-emerald-400 font-medium flex items-center gap-1">Details <i class="fa-solid fa-chevron-right text-[10px]"></i></span>
					</div>
				</div>

			</div>
		</section>

		<!-- SKILLS SECTION -->
		<section id="skills" class="space-y-10 pt-8">
			<div class="text-center max-w-2xl mx-auto space-y-3">
				<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase">
					Tech Matrix
				</div>
				<h2 class="text-3xl sm:text-4xl font-extrabold text-gradient-silver">Skills &amp; Expertise</h2>
				<p class="text-slate-400 text-sm sm:text-base">Core programming competencies, web tools, domains, and interpersonal skills.</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				
				<!-- Programming Languages -->
				<div class="glass-card p-6 rounded-2xl space-y-4">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-lg">
							<i class="fa-solid fa-code"></i>
						</div>
						<h3 class="font-bold text-slate-100 text-lg">Programming Languages</h3>
					</div>
					<div class="flex flex-wrap gap-2 pt-2">
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-sky-500/50 hover:text-sky-400 transition-all">C++</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-sky-500/50 hover:text-sky-400 transition-all">Python</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-sky-500/50 hover:text-sky-400 transition-all">Java</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-sky-500/50 hover:text-sky-400 transition-all">C</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-sky-500/50 hover:text-sky-400 transition-all">JavaScript ES6+</span>
					</div>
				</div>

				<!-- Web Technologies -->
				<div class="glass-card p-6 rounded-2xl space-y-4">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg">
							<i class="fa-solid fa-laptop-code"></i>
						</div>
						<h3 class="font-bold text-slate-100 text-lg">Web Technologies</h3>
					</div>
					<div class="flex flex-wrap gap-2 pt-2">
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-all">HTML5</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-all">CSS3</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-all">Frontend Basics</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-all">Responsive Web Design</span>
					</div>
				</div>

				<!-- Tools & Environments -->
				<div class="glass-card p-6 rounded-2xl space-y-4">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
							<i class="fa-solid fa-wrench"></i>
						</div>
						<h3 class="font-bold text-slate-100 text-lg">Tools &amp; IDEs</h3>
					</div>
					<div class="flex flex-wrap gap-2 pt-2">
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-all">GitHub</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-all">Git</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-all">VS Code</span>
					</div>
				</div>

				<!-- Focus Domains -->
				<div class="glass-card p-6 rounded-2xl space-y-4">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">
							<i class="fa-solid fa-layer-group"></i>
						</div>
						<h3 class="font-bold text-slate-100 text-lg">Specializations</h3>
					</div>
					<div class="flex flex-wrap gap-2 pt-2">
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all">Computer Science</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all">Cyber Security</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all">Artificial Intelligence</span>
					</div>
				</div>

				<!-- Soft Skills -->
				<div class="glass-card p-6 rounded-2xl space-y-4">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
							<i class="fa-solid fa-brain"></i>
						</div>
						<h3 class="font-bold text-slate-100 text-lg">Soft Skills</h3>
					</div>
					<div class="flex flex-wrap gap-2 pt-2">
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-amber-500/50 hover:text-amber-400 transition-all">Problem Solving</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-amber-500/50 hover:text-amber-400 transition-all">Analytical Thinking</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-amber-500/50 hover:text-amber-400 transition-all">Teamwork</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-amber-500/50 hover:text-amber-400 transition-all">Time Management</span>
					</div>
				</div>

				<!-- Spoken Languages -->
				<div class="glass-card p-6 rounded-2xl space-y-4">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-lg">
							<i class="fa-solid fa-comments"></i>
						</div>
						<h3 class="font-bold text-slate-100 text-lg">Spoken Languages</h3>
					</div>
					<div class="flex flex-wrap gap-2 pt-2">
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-pink-500/50 hover:text-pink-400 transition-all">Telugu (Native)</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-pink-500/50 hover:text-pink-400 transition-all">English (Proficient)</span>
						<span class="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium hover:border-pink-500/50 hover:text-pink-400 transition-all">Hindi (Conversational)</span>
					</div>
				</div>

			</div>
		</section>

		<!-- CERTIFICATIONS SECTION -->
		<section id="certifications" class="space-y-8 pt-8">
			<div class="text-center max-w-2xl mx-auto space-y-3">
				<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wider uppercase">
					Verified Credentials
				</div>
				<h2 class="text-3xl sm:text-4xl font-extrabold text-gradient-silver">Certifications</h2>
				<p class="text-slate-400 text-sm sm:text-base">Filter or search through my accredited learning credentials.</p>
			</div>

			<!-- Search & Filter Controls -->
			<div class="glass-card p-6 rounded-2xl space-y-6">
				<div class="flex flex-col md:flex-row items-center justify-between gap-4">
					
					<!-- Search input -->
					<div class="relative w-full md:w-96">
						<i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
						<input type="text" id="certSearch" placeholder="Search certificates (e.g., AWS, AI, Cloud)..." 
							class="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors">
					</div>

					<!-- Category Pills -->
					<div class="flex flex-wrap items-center gap-2 w-full md:w-auto" id="categoryPills">
						<button class="filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-sky-500 text-slate-950 transition-all shadow-md shadow-sky-500/20" data-cat="all">All</button>
						<button class="filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all" data-cat="ai">AI &amp; ML</button>
						<button class="filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all" data-cat="cloud">Cloud &amp; AWS</button>
						<button class="filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all" data-cat="data">Data Science</button>
					</div>

				</div>

				<div class="text-xs text-slate-400 font-medium flex items-center justify-between border-t border-slate-800/80 pt-4">
					<span id="certCounter">Showing 6 of 6 certificates</span>
					<span class="text-sky-400/80"><i class="fa-solid fa-circle-info mr-1"></i>Click card to inspect certificate</span>
				</div>
			</div>

			<!-- Certificate Grid -->
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="certGrid">
				
				<!-- Cert 1 -->
				<div class="cert-card glass-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between space-y-4 group cursor-pointer transition-all hover:-translate-y-1"
					data-category="cloud"
					data-search="aws certified developer associate infosys springboard cloud"
					data-full="https://cdn.phototourl.com/member/2026-09-27-4cef1885-ad40-4066-aef5-58d17aac475b.jpg"
					data-title="AWS Certified Developer"
					data-issuer="Infosys Springboard · June 8, 2025">
					<div class="space-y-3">
						<div class="w-full h-44 rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 flex items-center justify-center p-2">
							<img src="https://cdn.phototourl.com/member/2026-09-27-4cef1885-ad40-4066-aef5-58d17aac475b.jpg" 
								alt="AWS Certified Developer" 
								class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
								onerror="this.onerror=null; this.src='https://placehold.co/600x400/1E293B/38BDF8?text=AWS+Developer';">
						</div>
						<div class="flex items-center justify-between">
							<span class="px-2.5 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[11px] font-bold">Cloud &amp; AWS</span>
							<span class="text-[11px] text-slate-400 font-medium">June 8, 2025</span>
						</div>
						<h3 class="font-bold text-slate-100 text-lg group-hover:text-sky-400 transition-colors">AWS Certified Developer</h3>
					</div>
					<div class="pt-2 text-xs text-slate-400 border-t border-slate-800/80 flex items-center justify-between">
						<span>Infosys Springboard</span>
						<span class="text-sky-400 font-medium">View Full <i class="fa-solid fa-expand text-[10px] ml-1"></i></span>
					</div>
				</div>

				<!-- Cert 2 -->
				<div class="cert-card glass-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between space-y-4 group cursor-pointer transition-all hover:-translate-y-1"
					data-category="ai"
					data-search="generative ai for all infosys springboard artificial intelligence"
					data-full="https://cdn.phototourl.com/member/2026-09-27-8f061c4f-b3a8-4de5-bd23-49791d7c3787.jpg"
					data-title="Generative AI for All"
					data-issuer="Infosys Springboard · June 5, 2025">
					<div class="space-y-3">
						<div class="w-full h-44 rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 flex items-center justify-center p-2">
							<img src="https://cdn.phototourl.com/member/2026-09-27-8f061c4f-b3a8-4de5-bd23-49791d7c3787.jpg" 
								alt="Generative AI for All" 
								class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
								onerror="this.onerror=null; this.src='https://placehold.co/600x400/1E293B/38BDF8?text=Generative+AI';">
						</div>
						<div class="flex items-center justify-between">
							<span class="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold">AI &amp; ML</span>
							<span class="text-[11px] text-slate-400 font-medium">June 5, 2025</span>
						</div>
						<h3 class="font-bold text-slate-100 text-lg group-hover:text-indigo-400 transition-colors">Generative AI for All</h3>
					</div>
					<div class="pt-2 text-xs text-slate-400 border-t border-slate-800/80 flex items-center justify-between">
						<span>Infosys Springboard</span>
						<span class="text-indigo-400 font-medium">View Full <i class="fa-solid fa-expand text-[10px] ml-1"></i></span>
					</div>
				</div>

				<!-- Cert 3 -->
				<div class="cert-card glass-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between space-y-4 group cursor-pointer transition-all hover:-translate-y-1"
					data-category="ai"
					data-search="ai primer certification infosys springboard artificial intelligence"
					data-full="https://cdn.phototourl.com/member/2026-09-27-6f464f00-49f4-479f-b89a-a7bea7d5512b.jpg"
					data-title="AI Primer Certification"
					data-issuer="Infosys Springboard · June 19, 2025">
					<div class="space-y-3">
						<div class="w-full h-44 rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 flex items-center justify-center p-2">
							<img src="https://cdn.phototourl.com/member/2026-09-27-6f464f00-49f4-479f-b89a-a7bea7d5512b.jpg" 
								alt="AI Primer Certification" 
								class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
								onerror="this.onerror=null; this.src='https://placehold.co/600x400/1E293B/38BDF8?text=AI+Primer';">
						</div>
						<div class="flex items-center justify-between">
							<span class="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold">AI &amp; ML</span>
							<span class="text-[11px] text-slate-400 font-medium">June 19, 2025</span>
						</div>
						<h3 class="font-bold text-slate-100 text-lg group-hover:text-indigo-400 transition-colors">AI Primer Certification</h3>
					</div>
					<div class="pt-2 text-xs text-slate-400 border-t border-slate-800/80 flex items-center justify-between">
						<span>Infosys Springboard</span>
						<span class="text-indigo-400 font-medium">View Full <i class="fa-solid fa-expand text-[10px] ml-1"></i></span>
					</div>
				</div>

				<!-- Cert 4 -->
				<div class="cert-card glass-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between space-y-4 group cursor-pointer transition-all hover:-translate-y-1"
					data-category="data"
					data-search="data science google cloud simplilearn skillup"
					data-full="https://cdn.phototourl.com/member/2026-09-27-4e4823fa-a4a9-4ee0-850c-7a60df0ec6f2.png"
					data-title="Data Science"
					data-issuer="Google Cloud · Simplilearn SkillUp">
					<div class="space-y-3">
						<div class="w-full h-44 rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 flex items-center justify-center p-2">
							<img src="https://cdn.phototourl.com/member/2026-09-27-4e4823fa-a4a9-4ee0-850c-7a60df0ec6f2.png" 
								alt="Data Science" 
								class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
								onerror="this.onerror=null; this.src='https://placehold.co/600x400/1E293B/38BDF8?text=Data+Science';">
						</div>
						<div class="flex items-center justify-between">
							<span class="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">Data Science</span>
							<span class="text-[11px] text-slate-400 font-medium">Google Cloud</span>
						</div>
						<h3 class="font-bold text-slate-100 text-lg group-hover:text-emerald-400 transition-colors">Data Science</h3>
					</div>
					<div class="pt-2 text-xs text-slate-400 border-t border-slate-800/80 flex items-center justify-between">
						<span>Simplilearn SkillUp</span>
						<span class="text-emerald-400 font-medium">View Full <i class="fa-solid fa-expand text-[10px] ml-1"></i></span>
					</div>
				</div>

				<!-- Cert 5 -->
				<div class="cert-card glass-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between space-y-4 group cursor-pointer transition-all hover:-translate-y-1"
					data-category="ai"
					data-search="introduction to artificial intelligence ibm coursera July 2025"
					data-full="https://cdn.phototourl.com/member/2026-09-27-aa117319-0185-433b-bad6-5bf817902b92.jpg"
					data-title="Intro to Artificial Intelligence"
					data-issuer="IBM · Coursera · July 6, 2025">
					<div class="space-y-3">
						<div class="w-full h-44 rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 flex items-center justify-center p-2">
							<img src="https://cdn.phototourl.com/member/2026-09-27-aa117319-0185-433b-bad6-5bf817902b92.jpg" 
								alt="Intro to Artificial Intelligence" 
								class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
								onerror="this.onerror=null; this.src='https://placehold.co/600x400/1E293B/38BDF8?text=Intro+to+AI';">
						</div>
						<div class="flex items-center justify-between">
							<span class="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold">AI &amp; ML</span>
							<span class="text-[11px] text-slate-400 font-medium">July 6, 2025</span>
						</div>
						<h3 class="font-bold text-slate-100 text-lg group-hover:text-indigo-400 transition-colors">Intro to Artificial Intelligence</h3>
					</div>
					<div class="pt-2 text-xs text-slate-400 border-t border-slate-800/80 flex items-center justify-between">
						<span>IBM · Coursera</span>
						<span class="text-indigo-400 font-medium">View Full <i class="fa-solid fa-expand text-[10px] ml-1"></i></span>
					</div>
				</div>

				<!-- Cert 6 -->
				<div class="cert-card glass-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between space-y-4 group cursor-pointer transition-all hover:-translate-y-1"
					data-category="all"
					data-search="climate change isb bharti institute of public policy"
					data-full="https://cdn.phototourl.com/member/2026-09-27-f03cb935-c9fe-4575-9f55-fe6d40e59396.jpg"
					data-title="Climate Change & Public Policy"
					data-issuer="ISB · Bharti Institute of Public Policy">
					<div class="space-y-3">
						<div class="w-full h-44 rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 flex items-center justify-center p-2">
							<img src="https://cdn.phototourl.com/member/2026-09-27-f03cb935-c9fe-4575-9f55-fe6d40e59396.jpg" 
								alt="Climate Change" 
								class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
								onerror="this.onerror=null; this.src='https://placehold.co/600x400/1E293B/38BDF8?text=Climate+Change';">
						</div>
						<div class="flex items-center justify-between">
							<span class="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[11px] font-bold">Policy &amp; Environment</span>
							<span class="text-[11px] text-slate-400 font-medium">ISB Executive</span>
						</div>
						<h3 class="font-bold text-slate-100 text-lg group-hover:text-purple-400 transition-colors">Climate Change</h3>
					</div>
					<div class="pt-2 text-xs text-slate-400 border-t border-slate-800/80 flex items-center justify-between">
						<span>Bharti Institute of Public Policy</span>
						<span class="text-purple-400 font-medium">View Full <i class="fa-solid fa-expand text-[10px] ml-1"></i></span>
					</div>
				</div>

			</div>
		</section>

		<!-- PROJECTS & SHOWCASE SECTION -->
		<section id="projects" class="space-y-8 pt-8">
			<div class="text-center max-w-2xl mx-auto space-y-3">
				<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wider uppercase">
					Code Repository
				</div>
				<h2 class="text-3xl sm:text-4xl font-extrabold text-gradient-silver">Featured Projects</h2>
				<p class="text-slate-400 text-sm sm:text-base">Explore my GitHub activities, software labs, and coding experiments.</p>
			</div>

			<!-- GitHub Highlight Banner -->
			<div class="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden">
				<div class="grid lg:grid-cols-12 gap-8 items-center">
					<div class="lg:col-span-8 space-y-4">
						<div class="flex items-center gap-3">
							<div class="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-200 text-2xl">
								<i class="fa-brands fa-github"></i>
							</div>
							<div>
								<h3 class="text-2xl font-bold text-slate-100">GitHub Repository Hub — Aswini-2007</h3>
								<p class="text-xs text-sky-400 font-semibold">Active Code Repositories · C++, Python, Java</p>
							</div>
						</div>
						<p class="text-slate-300 text-sm sm:text-base leading-relaxed">
							My core coding assignments, algorithmic practice, and domain projects live on GitHub. I build clean implementations of data structures, cybersecurity scripts, and web interfaces.
						</p>
						<div class="flex flex-wrap gap-2 pt-2">
							<span class="px-3 py-1 rounded-lg bg-slate-900 text-xs text-slate-300 border border-slate-800">C++ Data Structures</span>
							<span class="px-3 py-1 rounded-lg bg-slate-900 text-xs text-slate-300 border border-slate-800">Python Automation</span>
							<span class="px-3 py-1 rounded-lg bg-slate-900 text-xs text-slate-300 border border-slate-800">Java OOP</span>
							<span class="px-3 py-1 rounded-lg bg-slate-900 text-xs text-slate-300 border border-slate-800">Cyber Security Basics</span>
						</div>
					</div>
					<div class="lg:col-span-4 flex justify-start lg:justify-end">
						<a href="https://github.com/Aswini-2007" target="_blank" rel="noopener" class="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-sky-500/20 transition-all hover:scale-105 text-center flex items-center justify-center gap-3">
							<i class="fa-brands fa-github text-lg"></i>
							<span>Visit GitHub Profile</span>
						</a>
					</div>
				</div>
			</div>

			<!-- Project Cards Grid -->
			<div class="grid md:grid-cols-2 gap-6">
				
				<!-- Project 1 -->
				<div class="glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">Security &amp; Network</span>
							<i class="fa-solid fa-lock text-slate-500"></i>
						</div>
						<h3 class="text-xl font-bold text-slate-100">Cybersecurity Lab Experiments</h3>
						<p class="text-sm text-slate-400 leading-relaxed">
							A compilation of security scripts analyzing cryptographic hashing, packet analysis fundamentals, and basic vulnerability assessment scripts written in Python and C++.
						</p>
					</div>
					<div class="pt-4 flex items-center justify-between border-t border-slate-800">
						<div class="flex gap-2">
							<span class="text-xs text-slate-400">Python</span> · 
							<span class="text-xs text-slate-400">C++</span>
						</div>
						<a href="https://github.com/Aswini-2007" target="_blank" rel="noopener" class="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1">
							Source Code <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
						</a>
					</div>
				</div>

				<!-- Project 2 -->
				<div class="glass-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">Web Development</span>
							<i class="fa-solid fa-code text-slate-500"></i>
						</div>
						<h3 class="text-xl font-bold text-slate-100">Personal Developer Portfolio</h3>
						<p class="text-sm text-slate-400 leading-relaxed">
							Interactive, responsive web application featuring modern glassmorphism UI, real-time certification search filters, lightbox modal previews, and smooth transitions.
						</p>
					</div>
					<div class="pt-4 flex items-center justify-between border-t border-slate-800">
						<div class="flex gap-2">
							<span class="text-xs text-slate-400">HTML5</span> · 
							<span class="text-xs text-slate-400">Tailwind CSS</span> ·
							<span class="text-xs text-slate-400">JS ES6</span>
						</div>
						<a href="https://github.com/Aswini-2007" target="_blank" rel="noopener" class="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
							Live Demo <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
						</a>
					</div>
				</div>

			</div>
		</section>

		<!-- CONTACT SECTION -->
		<section id="contact" class="space-y-10 pt-8">
			<div class="text-center max-w-2xl mx-auto space-y-3">
				<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wider uppercase">
					Connect
				</div>
				<h2 class="text-3xl sm:text-4xl font-extrabold text-gradient-silver">Let's Work Together</h2>
				<p class="text-slate-400 text-sm sm:text-base">Reach out directly via email, phone, or send a quick message below.</p>
			</div>

			<div class="grid lg:grid-cols-12 gap-8">
				
				<!-- Direct Contact Cards Column -->
				<div class="lg:col-span-5 space-y-4">
					
					<!-- Email Card -->
					<div class="glass-card p-5 rounded-2xl flex items-center justify-between group hover:border-sky-500/40 transition-all">
						<a href="mailto:Komaraaswini@gmail.com" class="flex items-center gap-4 min-w-0">
							<div class="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0 text-xl">
								<i class="fa-solid fa-envelope"></i>
							</div>
							<div class="min-w-0">
								<div class="text-xs text-slate-400 font-medium">Email Address</div>
								<div class="text-sm font-bold text-slate-200 truncate group-hover:text-sky-400 transition-colors">Komaraaswini@gmail.com</div>
							</div>
						</a>
						<button class="copy-btn p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all" data-copy="Komaraaswini@gmail.com" title="Copy email">
							<i class="fa-solid fa-copy text-sm"></i>
						</button>
					</div>

					<!-- Phone Card -->
					<div class="glass-card p-5 rounded-2xl flex items-center justify-between group hover:border-indigo-500/40 transition-all">
						<a href="tel:+919573926665" class="flex items-center gap-4 min-w-0">
							<div class="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 text-xl">
								<i class="fa-solid fa-phone"></i>
							</div>
							<div class="min-w-0">
								<div class="text-xs text-slate-400 font-medium">Phone Number</div>
								<div class="text-sm font-bold text-slate-200 truncate group-hover:text-indigo-400 transition-colors">+91 95739 26665</div>
							</div>
						</a>
						<button class="copy-btn p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-all" data-copy="+919573926665" title="Copy phone number">
							<i class="fa-solid fa-copy text-sm"></i>
						</button>
					</div>

					<!-- LinkedIn Card -->
					<div class="glass-card p-5 rounded-2xl flex items-center justify-between group hover:border-sky-500/40 transition-all">
						<a href="https://www.linkedin.com/in/komara-aswini277" target="_blank" rel="noopener" class="flex items-center gap-4 min-w-0">
							<div class="w-12 h-12 rounded-xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0 text-xl">
								<i class="fa-brands fa-linkedin-in"></i>
							</div>
							<div class="min-w-0">
								<div class="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
								<div class="text-sm font-bold text-slate-200 truncate group-hover:text-sky-400 transition-colors">komara-aswini277</div>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/komara-aswini277" target="_blank" rel="noopener" class="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all">
							<i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
						</a>
					</div>

					<!-- GitHub Card -->
					<div class="glass-card p-5 rounded-2xl flex items-center justify-between group hover:border-emerald-500/40 transition-all">
						<a href="https://github.com/Aswini-2007" target="_blank" rel="noopener" class="flex items-center gap-4 min-w-0">
							<div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 text-xl">
								<i class="fa-brands fa-github"></i>
							</div>
							<div class="min-w-0">
								<div class="text-xs text-slate-400 font-medium">GitHub Handle</div>
								<div class="text-sm font-bold text-slate-200 truncate group-hover:text-emerald-400 transition-colors">Aswini-2007</div>
							</div>
						</a>
						<a href="https://github.com/Aswini-2007" target="_blank" rel="noopener" class="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all">
							<i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
						</a>
					</div>

				</div>

				<!-- Contact Form Column -->
				<div class="lg:col-span-7">
					<form id="contactForm" class="glass-card p-8 rounded-3xl space-y-6">
						<h3 class="text-xl font-bold text-slate-100">Send Me a Message</h3>
						
						<div class="grid sm:grid-cols-2 gap-4">
							<div class="space-y-2">
								<label for="formName" class="text-xs font-semibold text-slate-300">Your Name *</label>
								<input type="text" id="formName" required placeholder="John Doe" 
									class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors">
							</div>
							<div class="space-y-2">
								<label for="formEmail" class="text-xs font-semibold text-slate-300">Your Email *</label>
								<input type="email" id="formEmail" required placeholder="john@example.com" 
									class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors">
							</div>
						</div>

						<div class="space-y-2">
							<label for="formSubject" class="text-xs font-semibold text-slate-300">Subject</label>
							<input type="text" id="formSubject" placeholder="Inquiry / Opportunity" 
								class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors">
						</div>

						<div class="space-y-2">
							<label for="formMessage" class="text-xs font-semibold text-slate-300">Message *</label>
							<textarea id="formMessage" rows="4" required placeholder="Hello Aswini, I would like to discuss..." 
								class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"></textarea>
						</div>

						<button type="submit" class="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
							<i class="fa-solid fa-paper-plane text-sm"></i>
							<span>Send Message</span>
						</button>
					</form>
				</div>

			</div>
		</section>

	</main>

	<!-- FOOTER -->
	<footer class="border-t border-slate-800/80 bg-slate-950/80 mt-20 py-10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
			
			<div class="flex items-center gap-3">
				<div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-slate-950 text-sm">
					KA
				</div>
				<span class="text-sm font-semibold text-slate-300">
					© 2026 Komara Aswini. Built for Engineering Excellence.
				</span>
			</div>

			<div class="flex items-center gap-6 text-xs text-slate-400">
				<a href="#home" class="hover:text-sky-400 transition-colors">Home</a>
				<a href="#about" class="hover:text-sky-400 transition-colors">About</a>
				<a href="#education" class="hover:text-sky-400 transition-colors">Education</a>
				<a href="#certifications" class="hover:text-sky-400 transition-colors">Certifications</a>
				<a href="#contact" class="hover:text-sky-400 transition-colors">Contact</a>
			</div>

			<a href="#home" class="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all hover:scale-110" aria-label="Back to top">
				<i class="fa-solid fa-arrow-up text-sm"></i>
			</a>

		</div>
	</footer>

	<!-- EDUCATION DETAIL MODAL -->
	<div id="eduModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300" role="dialog" aria-modal="true">
		<div class="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-700 shadow-2xl transform scale-95 transition-transform duration-300" id="eduModalBox">
			<div class="flex items-start justify-between">
				<div class="space-y-1">
					<span id="eduModalMeta" class="text-xs font-bold text-sky-400"></span>
					<h3 id="eduModalTitle" class="text-2xl font-bold text-slate-100"></h3>
				</div>
				<button id="eduModalClose" aria-label="Close detail modal" class="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 flex items-center justify-center transition-colors">
					<i class="fa-solid fa-xmark text-lg"></i>
				</button>
			</div>
			<p id="eduModalBody" class="text-sm text-slate-300 leading-relaxed"></p>
			<div class="pt-2 text-right">
				<button id="eduModalCloseBtn" class="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors">
					Close Window
				</button>
			</div>
		</div>
	</div>

	<!-- CERTIFICATE LIGHTBOX MODAL -->
	<div id="certModal" class="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl opacity-0 pointer-events-none transition-opacity duration-300" role="dialog" aria-modal="true">
		<button id="certModalClose" aria-label="Close full view" class="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-sky-400 flex items-center justify-center transition-all hover:scale-110">
			<i class="fa-solid fa-xmark text-xl"></i>
		</button>
		
		<div class="max-w-4xl max-h-[80vh] w-full flex items-center justify-center p-2">
			<img id="certModalImg" src="" alt="Full Certificate View" class="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-slate-800 bg-white">
		</div>

		<div class="text-center space-y-1 mt-4">
			<h3 id="certModalTitle" class="text-xl font-bold text-slate-100"></h3>
			<p id="certModalIssuer" class="text-xs font-medium text-sky-400"></p>
		</div>
	</div>

	<!-- TOAST NOTIFICATION -->
	<div id="toast" class="hidden-toast fixed bottom-6 right-6 z-50 glass-card px-5 py-4 rounded-2xl flex items-center gap-3 border border-sky-500/40 shadow-2xl">
		<div class="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm" id="toastIcon">
			<i class="fa-solid fa-check"></i>
		</div>
		<div>
			<div class="text-xs font-bold text-slate-200" id="toastTitle">Success</div>
			<div class="text-xs text-slate-400" id="toastMsg">Action completed successfully.</div>
		</div>
	</div>

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
