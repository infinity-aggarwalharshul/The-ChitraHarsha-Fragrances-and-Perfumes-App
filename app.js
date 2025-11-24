// The ChitraHarsha - Main Application Logic
// Copyright (c) 2025 The ChitraHarshaVPK Ventures Pvt Ltd

// State Management
const state = {
    currentView: 'HOME',
    cart: [],
    user: null,
    rates: { USD: 83.10, EUR: 90.50, CHC: 82.00 }
};

// Products Database
const PRODUCTS = [
    { id: 1, name: "Veda Essence", notes: "Mysore Sandalwood, Jasmine", price: 2500, type: "Ayurvedic Perfume", category: "PERFUME", chcPrice: 50, image: "🌸" },
    { id: 2, name: "Quantum Mist", notes: "Ozone, Citrus, Metallic", price: 4500, type: "Futuristic EDP", category: "PERFUME", chcPrice: 90, image: "⚛️" },
    { id: 3, name: "Royal Oudh", notes: "Agarwood, Rose, Amber", price: 8000, type: "Luxury Attar", category: "PERFUME", chcPrice: 160, image: "👑" },
    { id: 4, name: "Cyber-Fresh Deo", notes: "Arctic Ice, Menthol", price: 450, type: "Zero-Gas Body Spray", category: "DEODORANT", chcPrice: 9, image: "❄️" },
    { id: 5, name: "Smart Mist IoT", notes: "Lavender, Vanilla", price: 1200, type: "App Controlled", category: "ROOM", chcPrice: 24, image: "📱" },
    { id: 6, name: "Himalayan Air", notes: "Pine, Mountain Breeze", price: 299, type: "Eco-Aerosol", category: "ROOM", chcPrice: 6, image: "🏔️" }
];

// Innovative Bottle Designs
const BOTTLE_DESIGNS = [
    { id: 1, name: "Quantum Holographic Bottle", tech: "AR-Enabled Labels", material: "Recycled Glass", innovation: "Holographic display shows product info via smartphone", image: "🔮", year: 2025 },
    { id: 2, name: "Smart IoT Dispenser", tech: "WiFi + Bluetooth", material: "Biodegradable Plastic", innovation: "App-controlled fragrance intensity and scheduling", image: "📡", year: 2025 },
    { id: 3, name: "Vedic Geometry Design", tech: "Sacred Patterns", material: "Crystal Glass", innovation: "Ancient sacred geometry enhances fragrance energy", image: "🕉️", year: 2025 },
    { id: 4, name: "Eco-Refill System", tech: "Zero-Waste", material: "Bamboo + Glass", innovation: "Magnetic refill pods reduce plastic waste by 95%", image: "♻️", year: 2025 },
    { id: 5, name: "Temperature-Responsive", tech: "Thermochromic", material: "Smart Polymer", innovation: "Color changes based on fragrance temperature", image: "🌡️", year: 2025 },
    { id: 6, name: "Quantum Sensor Bottle", tech: "Real-time Monitoring", material: "Titanium Alloy", innovation: "Tracks usage, freshness, and optimal spray timing", image: "⚡", year: 2025 }
];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeRates();
    navigateTo('HOME');
    initChat();
});

// Live Currency Rates
function initializeRates() {
    setInterval(() => {
        state.rates.USD += (Math.random() - 0.5) * 0.1;
        state.rates.EUR += (Math.random() - 0.5) * 0.1;
        state.rates.CHC += (Math.random() - 0.5) * 0.5;
        
        document.getElementById('usdRate').textContent = `USD: ₹${state.rates.USD.toFixed(2)}`;
        document.getElementById('eurRate').textContent = `EUR: ₹${state.rates.EUR.toFixed(2)}`;
        document.getElementById('chcRate').textContent = `⚡ CHC: ₹${state.rates.CHC.toFixed(2)}`;
    }, 2000);
}

// Navigation
function navigateTo(view) {
    state.currentView = view;
    const content = document.getElementById('mainContent');
    
    switch(view) {
        case 'HOME':
            content.innerHTML = renderHome();
            break;
        case 'SHOP':
            content.innerHTML = renderShop();
            break;
        case 'BOTTLES':
            content.innerHTML = renderBottles();
            break;
        case 'JOBS':
            content.innerHTML = renderJobs();
            break;
        case 'ABOUT':
            content.innerHTML = renderAbout();
            break;
        default:
            content.innerHTML = renderHome();
    }
    
    window.scrollTo(0, 0);
}

// Render Home Page
function renderHome() {
    return `
        <div class="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 bg-slate-950">
            <div class="absolute inset-0 pointer-events-none">
                <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            <div class="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <div class="mb-10 flex justify-center">
                    <div class="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs md:text-sm font-bold uppercase tracking-widest backdrop-blur-xl">
                        <span class="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                        Made In India • MeghRaj Cloud Secured
                    </div>
                </div>
                
                <h1 class="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                    <span class="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">THE FUTURE</span>
                    <span class="block font-thin text-cyan-400 font-mono text-4xl md:text-7xl mt-2 tracking-widest">OF FRAGRANCE</span>
                </h1>
                
                <p class="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Vedic Science meets <span class="text-white font-semibold">Quantum Computing</span>.<br/>
                    Experience the <span class="text-cyan-400">Scent-O-Verse</span> economy.
                </p>
                
                <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button onclick="navigateTo('SHOP')" class="px-12 py-6 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105">
                        🛍️ Explore Market
                    </button>
                    <button onclick="navigateTo('BOTTLES')" class="px-12 py-6 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white rounded-2xl font-bold transition-all transform hover:scale-105">
                        ✨ Innovative Bottles
                    </button>
                </div>

                <div class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div class="bg-black/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                        <div class="text-3xl mb-3">🛡️</div>
                        <p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Security</p>
                        <p class="text-white font-bold font-mono text-lg">Quantum AES-256</p>
                    </div>
                    <div class="bg-black/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                        <div class="text-3xl mb-3">💾</div>
                        <p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Database</p>
                        <p class="text-white font-bold font-mono text-lg">10 Trillion SQL</p>
                    </div>
                    <div class="bg-black/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                        <div class="text-3xl mb-3">☁️</div>
                        <p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Hosted On</p>
                        <p class="text-white font-bold font-mono text-lg">MeghRaj GI</p>
                    </div>
                    <div class="bg-black/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                        <div class="text-3xl mb-3">⚡</div>
                        <p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Latency</p>
                        <p class="text-white font-bold font-mono text-lg">< 12ms</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render Shop
function renderShop() {
    return `
        <div class="pt-10 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
            <div class="mb-8 border-b border-gray-800 pb-6">
                <h2 class="text-4xl font-bold text-white mb-2">The <span class="text-cyan-400">Sugandh Collection</span></h2>
                <p class="text-gray-400 text-sm">Perfumes • Deos • Room Care</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${PRODUCTS.map(p => `
                    <div class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all group transform hover:-translate-y-2 duration-300">
                        <div class="h-64 bg-slate-950 relative flex items-center justify-center">
                            <div class="text-8xl">${p.image}</div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-white">${p.name}</h3>
                            <p class="text-gray-400 text-sm mt-1">${p.notes}</p>
                            <p class="text-cyan-300 font-mono mt-2">₹${p.price}</p>
                            <button onclick="addToCart(${p.id})" class="w-full mt-6 py-3 bg-white/5 hover:bg-cyan-600 text-white rounded-xl font-bold transition-all">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Render Innovative Bottles
function renderBottles() {
    return `
        <div class="pt-10 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 text-yellow-400 text-sm font-bold mb-6">
                    ✨ NEW FEATURE - 2025
                </div>
                <h2 class="text-5xl font-bold text-white mb-4">Innovative <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Bottle Designs</span></h2>
                <p class="text-gray-400 text-lg max-w-2xl mx-auto">Cutting-edge technology meets sustainable design. Experience the future of perfume packaging.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${BOTTLE_DESIGNS.map(b => `
                    <div class="bg-gradient-to-br from-slate-900 to-slate-950 border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-all group transform hover:scale-105 duration-300 shadow-xl">
                        <div class="h-56 bg-gradient-to-br from-slate-950 to-black relative flex items-center justify-center overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all"></div>
                            <div class="text-9xl relative z-10 group-hover:scale-110 transition-transform">${b.image}</div>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="text-xl font-bold text-white">${b.name}</h3>
                                <span class="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">${b.year}</span>
                            </div>
                            <div class="space-y-2 mb-4">
                                <div class="flex items-start gap-2">
                                    <span class="text-cyan-400 text-xs">🔬</span>
                                    <p class="text-gray-400 text-sm"><span class="text-cyan-300 font-semibold">Tech:</span> ${b.tech}</p>
                                </div>
                                <div class="flex items-start gap-2">
                                    <span class="text-green-400 text-xs">♻️</span>
                                    <p class="text-gray-400 text-sm"><span class="text-green-300 font-semibold">Material:</span> ${b.material}</p>
                                </div>
                            </div>
                            <div class="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                <p class="text-gray-300 text-sm leading-relaxed">${b.innovation}</p>
                            </div>
                            <button class="w-full mt-4 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white rounded-xl font-bold transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-16 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-3xl p-8 text-center">
                <h3 class="text-2xl font-bold text-white mb-4">🏆 Patent Pending Technologies</h3>
                <p class="text-gray-300 mb-6">Our innovative bottle designs are protected under Indian Patent Law. Application numbers available in TRADEMARK.md</p>
                <button onclick="window.open('TRADEMARK.md', '_blank')" class="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold transition-all">
                    View Legal Documentation
                </button>
            </div>
        </div>
    `;
}

// Render Jobs
function renderJobs() {
    return `
        <div class="pt-20 pb-20 px-4 min-h-screen flex items-center justify-center">
            <div class="w-full max-w-2xl bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-xl">
                <h2 class="text-3xl font-bold text-white mb-6">💼 Career Opportunities</h2>
                <p class="text-gray-400 mb-8">Join our team of 330+ professionals across 14 departments.</p>
                
                <div class="space-y-4">
                    <div class="bg-slate-950 p-6 rounded-2xl border border-gray-800">
                        <h3 class="text-xl font-bold text-white mb-2">Research & Development</h3>
                        <p class="text-gray-400 text-sm mb-4">Work on cutting-edge fragrance technology</p>
                        <button class="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all">Apply Now</button>
                    </div>
                    
                    <div class="bg-slate-950 p-6 rounded-2xl border border-gray-800">
                        <h3 class="text-xl font-bold text-white mb-2">Data Science</h3>
                        <p class="text-gray-400 text-sm mb-4">Analyze 10 Trillion SQL database</p>
                        <button class="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render About
function renderAbout() {
    return `
        <div class="pt-20 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
            <h2 class="text-4xl font-bold text-white mb-10 border-b border-gray-800 pb-4">About Us</h2>
            
            <div class="space-y-8">
                <div class="bg-slate-900/50 p-8 rounded-2xl border border-gray-800">
                    <h3 class="text-2xl font-bold text-cyan-400 mb-4">The Chitra-Harshul Legacy</h3>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        Founded by visionary duo <strong>Chitra & Harshul</strong>, The ChitraHarshaVPK Ventures represents the pinnacle of "Ancient Wisdom meets Future Tech".
                    </p>
                    <p class="text-gray-300 leading-relaxed">
                        We operate on a dual-axis philosophy: <strong>Sugandh Veda</strong> (The Science of Scent) and <strong>Quantum AI</strong>. Our mission is to decentralize the fragrance economy using Blockchain.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-slate-900/50 p-6 rounded-xl border border-green-900/50">
                        <h4 class="text-lg font-bold text-green-400 mb-3">🌱 Sustainability</h4>
                        <p class="text-gray-400 text-sm">95% reduction in plastic waste through innovative refill systems</p>
                    </div>
                    
                    <div class="bg-slate-900/50 p-6 rounded-xl border border-blue-900/50">
                        <h4 class="text-lg font-bold text-blue-400 mb-3">🔬 Innovation</h4>
                        <p class="text-gray-400 text-sm">6 patent-pending bottle technologies for 2025</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Cart Functions
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        state.cart.push(product);
        updateCartBadge();
        showNotification(`${product.name} added to cart!`);
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (state.cart.length > 0) {
        badge.classList.remove('hidden');
        badge.classList.add('flex');
        badge.textContent = state.cart.length;
    } else {
        badge.classList.add('hidden');
    }
}

// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    
    if (sidebar.classList.contains('translate-x-full')) {
        sidebar.classList.remove('translate-x-full');
        backdrop.classList.remove('hidden');
    } else {
        sidebar.classList.add('translate-x-full');
        backdrop.classList.add('hidden');
    }
}

// Chat Functions
function initChat() {
    const messages = [
        { role: 'bot', text: 'Namaste! I am Veda 2.0. How can I assist you today?' }
    ];
    renderChatMessages(messages);
}

function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    const chatToggle = document.getElementById('chatToggle');
    
    if (chatBox.classList.contains('hidden')) {
        chatBox.classList.remove('hidden');
        chatToggle.classList.add('hidden');
    } else {
        chatBox.classList.add('hidden');
        chatToggle.classList.remove('hidden');
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const messagesDiv = document.getElementById('chatMessages');
    messagesDiv.innerHTML += `
        <div class="flex justify-end">
            <div class="max-w-[85%] p-4 rounded-2xl text-sm bg-cyan-600 text-white rounded-tr-none">
                ${message}
            </div>
        </div>
    `;
    
    input.value = '';
    
    setTimeout(() => {
        const reply = getBotReply(message);
        messagesDiv.innerHTML += `
            <div class="flex justify-start">
                <div class="max-w-[85%] p-4 rounded-2xl text-sm bg-white/5 text-cyan-50 border border-white/10 rounded-tl-none">
                    ${reply}
                </div>
            </div>
        `;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000);
}

function getBotReply(message) {
    const lower = message.toLowerCase();
    if (lower.includes('bottle') || lower.includes('design')) {
        return 'Our innovative bottle designs feature AR-enabled labels, IoT connectivity, and eco-friendly materials. Visit the Innovative Bottles section to learn more!';
    } else if (lower.includes('price') || lower.includes('cost')) {
        return 'Our products range from ₹85 to ₹8000. We accept INR, USD, EUR, and CHC cryptocurrency.';
    } else if (lower.includes('job') || lower.includes('career')) {
        return 'We have openings across 14 departments. Visit our Job Portal for biometric registration.';
    } else {
        return 'Thank you for your query. Our team will assist you shortly. You can also explore our product catalog or innovative bottle designs!';
    }
}

function renderChatMessages(messages) {
    const messagesDiv = document.getElementById('chatMessages');
    messagesDiv.innerHTML = messages.map(m => `
        <div class="flex ${m.role === 'bot' ? 'justify-start' : 'justify-end'}">
            <div class="max-w-[85%] p-4 rounded-2xl text-sm ${m.role === 'bot' ? 'bg-white/5 text-cyan-50 border border-white/10 rounded-tl-none' : 'bg-cyan-600 text-white rounded-tr-none'}">
                ${m.text}
            </div>
        </div>
    `).join('');
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-slide-in';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Export for global access
window.navigateTo = navigateTo;
window.addToCart = addToCart;
window.toggleSidebar = toggleSidebar;
window.toggleChat = toggleChat;
window.sendMessage = sendMessage;
