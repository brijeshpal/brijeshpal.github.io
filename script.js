/* ===== Loader ===== */
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 600);
});

/* ===== Theme Toggle ===== */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function setTheme(dark) {
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    themeToggle.innerHTML = dark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch(e) {}
}

// Initialize theme
(function() {
    let saved;
    try { saved = localStorage.getItem('theme'); } catch(e) {}
    if (saved === 'dark') setTheme(true);
    else if (saved === 'light') setTheme(false);
    else setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
})();

themeToggle.addEventListener('click', () => {
    setTheme(html.getAttribute('data-theme') !== 'dark');
});

/* ===== Mobile Nav ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

/* ===== Navbar Scroll ===== */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('.section, #hero');
const navAnchors = navLinks.querySelectorAll('a');

function onScroll() {
    // Navbar shadow
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Scroll-to-top
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);

    // Active section highlight
    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ===== Scroll to Top ===== */
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== Typing Animation ===== */
const typingEl = document.getElementById('typingText');
const words = [
    'PhD Scholar',
    'AI Researcher',
    'ML Engineer',
    'Cybersecurity Researcher',
    'Deep Learning Enthusiast'
];
let wordIdx = 0, charIdx = 0, isDeleting = false;

function typeLoop() {
    const current = words[wordIdx];
    typingEl.textContent = current.substring(0, charIdx);

    if (!isDeleting) {
        charIdx++;
        if (charIdx > current.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1800);
            return;
        }
        setTimeout(typeLoop, 70 + Math.random() * 40);
    } else {
        charIdx--;
        if (charIdx < 0) {
            isDeleting = false;
            charIdx = 0;
            wordIdx = (wordIdx + 1) % words.length;
            setTimeout(typeLoop, 400);
            return;
        }
        setTimeout(typeLoop, 35);
    }
}
setTimeout(typeLoop, 1500);

/* ===== Scroll Reveal ===== */
const reveals = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger siblings
            const siblings = entry.target.parentElement.querySelectorAll('[data-reveal]');
            let idx = Array.from(siblings).indexOf(entry.target);
            setTimeout(() => {
                entry.target.classList.add('revealed');
            }, idx * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

/* ===== Animated Counters ===== */
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            let count = 0;
            const duration = 1600;
            const step = Math.max(1, Math.floor(target / (duration / 30)));
            const timer = setInterval(() => {
                count += step;
                if (count >= target) {
                    count = target;
                    clearInterval(timer);
                }
                el.textContent = count;
            }, 30);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

/* ===== Skill Bars ===== */
const fills = document.querySelectorAll('.fill');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width + '%';
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
fills.forEach(el => skillObserver.observe(el));

/* ===== Particle Canvas ===== */
(function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    const PARTICLE_COUNT = 60;

    function resize() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.r = Math.random() * 2 + 0.5;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.alpha = Math.random() * 0.4 + 0.1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > w) this.vx *= -1;
            if (this.y < 0 || this.y > h) this.vy *= -1;
        }
        draw() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = isDark
                ? `rgba(79,138,255,${this.alpha})`
                : `rgba(26,86,219,${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function drawLines() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    const alpha = (1 - dist / 140) * 0.12;
                    ctx.strokeStyle = isDark
                        ? `rgba(79,138,255,${alpha})`
                        : `rgba(26,86,219,${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => { p.update(); p.draw(); });
        drawLines();
        requestAnimationFrame(animate);
    }
    animate();
})();

/* ===== Contact Form ===== */
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const subject = document.getElementById('formSubject').value;
    const message = document.getElementById('formMessage').value;
    const mailto = `mailto:brijeshpal8878@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.open(mailto, '_blank');
});
