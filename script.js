// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 90;
            const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll Progress Bar =====
window.onscroll = function () {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }

    // Header Effect
    const header = document.querySelector('.header');
    if (header) {
        if (winScroll > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
};

// ===== Background Slideshow =====
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 4 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 4000); // 4 seconds interval (at least 2s as requested)
}

// ===== Typewriter Effect =====
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 200;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init TypeWriter
document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    if (txtElement) {
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new TypeWriter(txtElement, words, wait);
    }
}

// ===== Contact Form - WhatsApp Integration =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Build WhatsApp message
        const whatsappMsg = `*New Inquiry from Website* 📦

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}

*Message:*
${message}

---
Sent via Swift Logistics website`;

        const encodedMsg = encodeURIComponent(whatsappMsg);
        const whatsappNumber = '254728570356';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Reset form
        contactForm.reset();

        // Show confirmation
        alert('Perfect! Opening WhatsApp now so we can chat. We usually reply within 2 hours during business hours.');
    });
}

// ===== Quote Button =====
const getQuoteBtn = document.getElementById('getQuoteBtn');
if (getQuoteBtn) {
    getQuoteBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== Chatbot =====
const chatbot = document.getElementById('chatbot');
const chatToggle = document.getElementById('chatToggle');
const chatbotClose = document.getElementById('chatbotClose');
const chatBody = document.getElementById('chatbotBody');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

// More human, conversational chatbot responses
const chatResponses = {
    // Greetings
    greetings: [
        "Hey there! 👋 What can I help you with today?",
        "Hi! Thanks for reaching out. What would you like to know?",
        "Hello! I'm here to help. Fire away with your questions!",
        "Hey! Looking for shipping info? You're in the right place.",
        "Welcome to RICOAN7 INTERNATIONAL LIMITED! 🚢 How can I assist you?"
    ],

    // Services general
    services: [
        "We provide comprehensive business solutions:\n\n🚛 Transport & Logistics\n🌍 Imports & Exports\n📦 General Supplies\n🤝 Entrepreneurs & Commission Agents\n\nWhich service are you interested in?",
        "Great question! We're basically a one-stop shop for shipping. We do ocean & air freight, customs clearance, and warehousing. What are you looking to ship?",
    ],

    // Ocean freight
    ocean: [
        "Ocean freight is our bread and butter! 🌊\n\nWe do both:\n• FCL (Full Container Load) - you get the whole container\n• LCL (Less Container Load) - share space with others\n\nIt's slower than air, but way cheaper. Great for heavy stuff or large orders. Need a quote?",
        "Sea shipping is perfect for bulk cargo! We handle everything from port pickup to your door. Takes longer than air freight, but your wallet will thank you 😊\n\nWhat are you shipping?",
    ],

    // Air freight
    air: [
        "Air freight is the way to go when time matters! ✈️\n\nWe offer:\n• Express (2-5 days globally)\n• Standard air freight\n• Temperature control for sensitive items\n• Live tracking\n\nWhat's the rush on?",
        "Need it there yesterday? Air freight's your friend. We ship worldwide and you can track everything in real-time. A bit pricier than ocean, but speed costs!\n\nWhere's it headed?",
    ],

    // Customs
    customs: [
        "Ah, customs. Everyone's favorite headache 😅\n\nGood news - we handle ALL of it:\n• Documentation\n• Duty calculations\n• KRA compliance\n• The whole bureaucratic mess\n\nYou just relax. We'll deal with the government stuff.",
        "Customs clearance = paperwork nightmare. But that's literally our job! We know KRA requirements inside out. We'll get your goods through customs fast and legally. No surprises, no delays.",
    ],

    // Warehousing
    warehouse: [
        "Need somewhere to stash your stuff? We've got you covered! 🏢\n\n• Short or long-term storage\n• Climate-controlled if needed\n• Inventory management\n• Distribution when you're ready\n\nThink of it as your stuff's temporary home. How much space do you need?",
        "Our warehouses are secure, spacious, and flexible. Store for a day or a year - whatever works for you. We can also handle inventory management if you need it.\n\nWhat are you storing?",
    ],

    // Pricing
    pricing: [
        "Pricing depends on a few things:\n• What you're shipping\n• Where it's going\n• How big/heavy it is\n• How fast you need it\n\nBest bet? Give us a call at +254 728 570 356 or fill out the contact form. We'll give you an honest quote within a few hours!",
        "I wish I could give you exact prices right here, but shipping quotes are super specific to each job. Call or WhatsApp us at +254 728 570 356 and we'll get you a quote ASAP. We're pretty competitive!",
    ],

    // Contact info
    contact: [
        "Here's how to reach us:\n\n📞 +254 728 570 356 (Call or WhatsApp)\n✉️ info@ricoan.co.ke\n📍 Nairobi, Kenya\n\nWe're fastest on WhatsApp - just click that green button! 👇",
        "Let's connect!\n\n📞 Call/WhatsApp: +254 728 570 356\n📧 Email: info@ricoan.co.ke\n\nWe usually reply within 2 hours during business hours. For urgent stuff, WhatsApp is your best bet!",
    ],

    // Business hours
    hours: [
        "We're open:\n🕐 Mon-Fri: 8am - 6pm\n🕐 Saturday: 9am - 2pm\n🕐 Sunday: Closed (even we need rest!)\n\nFor urgent inquiries outside hours, WhatsApp us and we'll get back to you ASAP.",
        "Office hours:\n• Weekdays: 8am-6pm\n• Saturday: 9am-2pm\n• Sunday: Taking a break!\n\nWhatsApp works 24/7 though - we check it regularly even off-hours.",
    ],

    // Tracking
    tracking: [
        "Want to track your shipment? I get it - it's nerve-wracking not knowing where your stuff is!\n\nJust call or WhatsApp us at +254 728 570 356 with your tracking number. We'll give you a real-time update on where your cargo is.",
        "Tracking is easy! Just hit us up with your tracking number:\n📞 +254 728 570 356\n📧 info@ricoan.co.ke\n\nWe'll tell you exactly where your shipment is and when it'll arrive.",
    ],

    // Thanks/positive
    thanks: [
        "You're welcome! Happy to help 😊",
        "Anytime! That's what we're here for.",
        "My pleasure! Let me know if you need anything else.",
    ],

    // Default/confused
    default: [
        "Hmm, I'm not 100% sure what you mean. Could you rephrase that?\n\nI can help with:\n• Our services\n• Pricing\n• Contact info\n• Business hours\n• Tracking shipments",
        "I'm a bit confused 😅 Could you ask that differently?\n\nI'm good at answering questions about our services, prices, contact details, and shipment tracking.",
        "Sorry, I didn't quite catch that. Try asking about:\n• What we ship (ocean, air, customs, warehousing)\n• How much it costs\n• How to reach us\n• Tracking your cargo",
    ]
};

// Keywords for detection
const keywords = {
    greetings: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', 'sup'],
    services: ['service', 'services', 'what do you do', 'what do you offer', 'help with', 'can you'],
    ocean: ['ocean', 'sea', 'ship', 'container', 'fcl', 'lcl', 'freight', 'cargo', 'bulk'],
    air: ['air', 'flight', 'fly', 'express', 'fast', 'urgent', 'quick', 'plane'],
    customs: ['custom', 'clearance', 'documentation', 'paperwork', 'kra', 'import', 'export', 'duty', 'tax'],
    warehouse: ['warehouse', 'storage', 'store', 'inventory', 'keep', 'hold'],
    pricing: ['price', 'cost', 'quote', 'rate', 'how much', 'expensive', 'cheap', 'affordable'],
    contact: ['contact', 'reach', 'call', 'email', 'phone', 'whatsapp', 'address', 'location'],
    hours: ['hours', 'open', 'close', 'time', 'when', 'available'],
    tracking: ['track', 'where is', 'location', 'status', 'update'],
    thanks: ['thank', 'thanks', 'appreciate', 'grateful']
};

function toggleChat() {
    if (chatbot) chatbot.classList.toggle('active');
    if (chatbot && chatbot.classList.contains('active')) {
        chatInput.focus();
    }
}

if (chatToggle) chatToggle.addEventListener('click', toggleChat);
if (chatbotClose) chatbotClose.addEventListener('click', toggleChat);

function addChatMessage(text, isUser = false) {
    if (!chatBody) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = isUser ? 'user-msg' : 'bot-msg';

    const msgText = document.createElement('p');
    msgText.textContent = text;
    msgText.style.whiteSpace = 'pre-line';

    msgDiv.appendChild(msgText);
    chatBody.appendChild(msgDiv);

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(userMsg) {
    const msg = userMsg.toLowerCase();

    // Check each keyword category
    for (const [category, words] of Object.entries(keywords)) {
        if (words.some(word => msg.includes(word))) {
            const responses = chatResponses[category];
            // Return random response from category
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }

    // Default response if no match
    return chatResponses.default[Math.floor(Math.random() * chatResponses.default.length)];
}

function sendChatMessage() {
    if (!chatInput) return;
    const userMsg = chatInput.value.trim();

    if (userMsg === '') return;

    // Add user message
    addChatMessage(userMsg, true);

    // Clear input
    chatInput.value = '';

    // Simulate typing delay
    setTimeout(() => {
        const reply = getBotReply(userMsg);
        addChatMessage(reply, false);
    }, 600);
}

if (chatSend) chatSend.addEventListener('click', sendChatMessage);

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards only
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== Chatbot Pulse Animation =====
setTimeout(() => {
    if (chatbot && !chatbot.classList.contains('active')) {
        chatToggle.style.animation = 'pulse 1.5s ease-in-out 2';
    }
}, 4000);

// Add pulse keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.08); }
    }
`;
document.head.appendChild(style);

// ===== Console Message =====
console.log('🚀 RICOAN7 website loaded!');
console.log('💬 Having issues? Contact us at +254 728 570 356');
