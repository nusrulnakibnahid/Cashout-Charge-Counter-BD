// Update current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Section switching with enhanced animations
const navButtons = document.querySelectorAll('[data-section]');
const sections = document.querySelectorAll('.page-section');

function showSection(id) {
    sections.forEach(sec => {
        if (sec.id === id) {
            sec.classList.remove('d-none');
            setTimeout(() => {
                sec.classList.add('active-section');
            }, 10);
        } else {
            sec.classList.remove('active-section');
            setTimeout(() => {
                sec.classList.add('d-none');
            }, 300);
        }
    });

    navButtons.forEach(btn => {
        if (btn.getAttribute('data-section') === id) {
            btn.classList.add('active-section-link');
        } else {
            btn.classList.remove('active-section-link');
        }
    });

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attach click events to all navigation buttons
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-section');
        if (target) {
            showSection(target);
        }
    });
});

// Language switcher with smooth transitions
const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
    // Toggle active button with animation
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const text = {
        en: {
            heroTitle: 'Fee Finder Bangladesh',
            homeDescription: 'Calculate cashout charges for bKash, Nagad, Rocket, and Upay in Bangladesh instantly.',
            feature1: 'Quick and accurate cashout fee calculation',
            feature2: 'Support for multiple mobile financial services',
            feature3: 'Fully responsive and easy to use on any device',
            bkashTitle: 'bKash Cashout Calculator',
            nagadTitle: 'Nagad Cashout Calculator',
            rocketTitle: 'Rocket Cashout Calculator',
            upayTitle: 'Upay Cashout Calculator',
            genericDesc: 'Select source and enter amount to see the cashout charge',
            sourceLabel: 'Cashout from',
            amountLabel: 'Amount (BDT)',
            resultLabel: 'Cashout charge'
        },
        bn: {
            heroTitle: 'ফি ফাইন্ডার বাংলাদেশ',
            homeDescription: 'বিকাশ, নগদ, রকেট এবং উপায় এর ক্যাশ আউট চার্জ দ্রুত হিসাব করুন।',
            feature1: 'দ্রুত এবং নির্ভুল ক্যাশ আউট ফি হিসাব',
            feature2: 'একাধিক মোবাইল ফাইন্যান্সিয়াল সার্ভিস সাপোর্ট',
            feature3: 'সব ধরনের ডিভাইসে সহজে ব্যবহারযোগ্য',
            bkashTitle: 'বিকাশ ক্যাশ আউট ক্যালকুলেটর',
            nagadTitle: 'নগদ ক্যাশ আউট ক্যালকুলেটর',
            rocketTitle: 'রকেট ক্যাশ আউট ক্যালকুলেটর',
            upayTitle: 'উপায় ক্যাশ আউট ক্যালকুলেটর',
            genericDesc: 'সোর্স নির্বাচন করুন এবং অংক লিখুন, ক্যাশ আউট চার্জ জেনে নিন',
            sourceLabel: 'ক্যাশ আউট সোর্স',
            amountLabel: 'টাকার অংক (টাকা)',
            resultLabel: 'ক্যাশ আউট চার্জ'
        }
    };

    const t = text[lang];

    // Update all text elements with fade effect
    const updateText = (id, content) => {
        const element = document.getElementById(id);
        if (element) {
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = content;
                element.style.transition = 'opacity 0.3s ease';
                element.style.opacity = '1';
            }, 150);
        }
    };

    // Hero section
    updateText('hero-title', t.heroTitle);
    updateText('home-description', t.homeDescription);
    updateText('feature-1', t.feature1);
    updateText('feature-2', t.feature2);
    updateText('feature-3', t.feature3);

    // Calculator titles
    updateText('bkash-title', t.bkashTitle);
    updateText('nagad-title', t.nagadTitle);
    updateText('rocket-title', t.rocketTitle);
    updateText('upay-title', t.upayTitle);

    // Descriptions
    updateText('bkash-description', t.genericDesc);
    updateText('nagad-description', t.genericDesc);
    updateText('rocket-description', t.genericDesc);
    updateText('upay-description', t.genericDesc);

    // Labels for all calculators
    ['bkash', 'nagad', 'rocket', 'upay'].forEach(type => {
        updateText(`${type}-source-label`, t.sourceLabel);
        updateText(`${type}-amount-label`, t.amountLabel);
        updateText(`${type}-result-label`, t.resultLabel);
    });
}

// Set default language
setLanguage('en');

// Attach language button events
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Cashout calculation with animation
function calculateCharge(amount, rate) {
    const value = parseFloat(amount || 0);
    const r = parseFloat(rate || 0);
    if (isNaN(value) || isNaN(r)) return 0;
    return (value * r) / 100;
}

function setupCalculator(type) {
    const amountInput = document.getElementById(`amount-${type}`);
    const sourceSelect = document.getElementById(`source-${type}`);
    const resultElement = document.getElementById(`result-${type}`);

    function update() {
        const charge = calculateCharge(amountInput.value, sourceSelect.value);
        
        // Animate result change
        resultElement.style.transform = 'scale(0.95)';
        resultElement.style.opacity = '0.7';
        
        setTimeout(() => {
            resultElement.textContent = `${charge.toFixed(2)} BDT`;
            resultElement.style.transform = 'scale(1)';
            resultElement.style.opacity = '1';
        }, 150);
    }

    // Add transition to result element
    resultElement.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

    amountInput.addEventListener('input', update);
    sourceSelect.addEventListener('change', update);

    // Initialize with 0
    update();
}

// Initialize all calculators
['bkash', 'nagad', 'rocket', 'upay'].forEach(setupCalculator);

// Show home by default
showSection('home');

// Add parallax effect to particles on mouse move
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        const xMove = (x - 0.5) * speed * 20;
        const yMove = (y - 0.5) * speed * 20;
        
        particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all glass cards
document.querySelectorAll('.glass-card').forEach(card => {
    observer.observe(card);
});

// Add ripple effect to buttons
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Console message for developers
console.log('%c👨‍💻 Made by Nusrul Nakib Nahid', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%c✨ Fee Finder Bangladesh - 2025', 'color: #6366f1; font-size: 12px;');
