// Initialize Lucide Icons
lucide.createIcons();

// Login / Auth Logic
const loginForm = document.getElementById('loginForm');
const loginSection = document.getElementById('loginSection');
const mainApp = document.getElementById('mainApp');
const loginError = document.getElementById('loginError');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signOutBtn = document.getElementById('signOutBtn');
const profileEmailDisplay = document.getElementById('profileEmailDisplay');

// Show error helper
function showAuthError(msg) {
    loginError.textContent = msg;
    loginError.classList.remove('hidden');
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.toLowerCase().trim();
    const password = document.getElementById('password').value.trim();

    if (email === 'admin' && password === '1234') {
        loginError.classList.add('hidden');
        profileEmailDisplay.textContent = 'Admin (Offline Mode)';
        
        loginSection.classList.add('fade-out');
        setTimeout(() => {
            loginSection.classList.add('hidden');
            mainApp.classList.remove('hidden');
        }, 400); // Wait for fade out animation
    } else {
        showAuthError("Invalid credentials. Try 'admin' and '1234'.");
    }
});

signUpBtn.addEventListener('click', () => {
    showAuthError("Sign up is disabled in Offline Mode. Log in as admin.");
});

signOutBtn.addEventListener('click', () => {
    // Switch UI back to login screen
    mainApp.classList.add('hidden');
    loginSection.classList.remove('hidden');
    loginSection.classList.remove('fade-out');
    document.getElementById('password').value = '';
});

// Social Login Fake Handler
window.handleSocialLogin = function(provider) {
    const btn = event.currentTarget;
    const originalContent = btn.innerHTML;
    
    // Add loading state
    btn.classList.add('btn-loading');
    
    // Simulate network delay
    setTimeout(() => {
        btn.classList.remove('btn-loading');
        
        loginError.classList.add('hidden');
        profileEmailDisplay.textContent = provider + ' User (Offline Mode)';
        
        loginSection.classList.add('fade-out');
        setTimeout(() => {
            loginSection.classList.add('hidden');
            mainApp.classList.remove('hidden');
        }, 400);
    }, 1200);
};

// Mock Database of Medicines
const medicinesData = [
    {
        id: 'paracetamol',
        name: 'Paracetamol (500mg)',
        use: 'Fever and Mild Pain Relief',
        companies: 'Crocin, Dolo, Calpol, Tylenol',
        diseases: ['fever', 'headache', 'body ache', 'mild pain'],
        timing: 'Every 6 to 8 hours',
        timingDesc: 'Do not take more than 4 doses in 24 hours.',
        food: 'Can be taken with or without food.',
        foodDesc: 'Taking with food may help prevent stomach upset.',
        sideEffects: 'Rare, but can include nausea or allergic reactions.',
        marketPrice: 30,
        ourPrice: 18
    },
    {
        id: 'amoxicillin',
        name: 'Amoxicillin (500mg)',
        use: 'Bacterial Infections',
        companies: 'Novamox, Mox, Amoxil',
        diseases: ['infection', 'bacterial infection', 'throat infection', 'ear infection'],
        timing: 'Every 8 hours (3 times a day)',
        timingDesc: 'Take at evenly spaced times. Complete the full course.',
        food: 'Take with a meal or snack.',
        foodDesc: 'Helps prevent stomach upset and improves absorption.',
        sideEffects: 'Nausea, vomiting, diarrhea, or mild skin rash.',
        marketPrice: 85,
        ourPrice: 55
    },
    {
        id: 'cetirizine',
        name: 'Cetirizine (10mg)',
        use: 'Allergies and Cold Symptoms',
        companies: 'Zyrtec, Cetzine, Alerid',
        diseases: ['allergy', 'cold', 'sneezing', 'runny nose', 'itching'],
        timing: 'Once a day',
        timingDesc: 'Usually taken in the evening.',
        food: 'Can be taken with or without food.',
        foodDesc: '',
        sideEffects: 'Drowsiness, dry mouth, headache.',
        marketPrice: 40,
        ourPrice: 22
    },
    {
        id: 'pantoprazole',
        name: 'Pantoprazole (40mg)',
        use: 'Acidity and Acid Reflux',
        companies: 'Pan, Pantocid, Protonix',
        diseases: ['acidity', 'gas', 'acid reflux', 'heartburn', 'stomach ulcer'],
        timing: 'Once a day in the morning',
        timingDesc: 'Take it at the same time every day.',
        food: 'Take on an empty stomach.',
        foodDesc: 'At least 1 hour before a meal (usually breakfast).',
        sideEffects: 'Headache, diarrhea, stomach pain.',
        marketPrice: 120,
        ourPrice: 75
    },
    {
        id: 'ibuprofen',
        name: 'Ibuprofen (400mg)',
        use: 'Pain, Inflammation, and Fever',
        companies: 'Brufen, Advil, Motrin',
        diseases: ['pain', 'inflammation', 'fever', 'muscle ache', 'toothache'],
        timing: 'Every 6 to 8 hours as needed',
        timingDesc: 'Do not exceed the maximum daily limit.',
        food: 'Take with food or milk.',
        foodDesc: 'Strictly avoid taking on an empty stomach to prevent ulcers.',
        sideEffects: 'Stomach ache, heartburn, dizziness.',
        marketPrice: 45,
        ourPrice: 25
    },
    {
        id: 'azithromycin',
        name: 'Azithromycin (500mg)',
        use: 'Bacterial Infections (Throat, Lungs)',
        companies: 'Zithromax, Azee, Azithral',
        diseases: ['throat infection', 'lung infection', 'cough', 'bacterial infection', 'tonsils'],
        timing: 'Once a day',
        timingDesc: 'Usually for 3 to 5 days. Complete the full course.',
        food: 'Take on an empty stomach or with food depending on brand.',
        foodDesc: 'Tablets can be taken with food, but liquid suspension is usually 1 hour before meals.',
        sideEffects: 'Diarrhea, nausea, abdominal pain.',
        marketPrice: 110,
        ourPrice: 70
    },
    {
        id: 'metformin',
        name: 'Metformin (500mg)',
        use: 'Type 2 Diabetes Management',
        companies: 'Glycomet, Glucophage, Riomet',
        diseases: ['diabetes', 'high blood sugar', 'type 2 diabetes'],
        timing: 'Once or twice a day',
        timingDesc: 'As prescribed by your doctor. Do not skip doses.',
        food: 'Take with meals.',
        foodDesc: 'Taking with a meal helps reduce stomach and bowel side effects.',
        sideEffects: 'Nausea, diarrhea, stomach ache, metallic taste.',
        marketPrice: 65,
        ourPrice: 40
    },
    {
        id: 'omeprazole',
        name: 'Omeprazole (20mg)',
        use: 'Heartburn, Acid Reflux, Ulcers',
        companies: 'Omez, Prilosec, Losec',
        diseases: ['heartburn', 'acid reflux', 'gas', 'stomach ulcer', 'acidity'],
        timing: 'Once a day in the morning',
        timingDesc: 'For best results, take it consistently every day.',
        food: 'Take on an empty stomach.',
        foodDesc: 'Take 30-60 minutes before your first meal of the day.',
        sideEffects: 'Headache, stomach pain, gas, nausea.',
        marketPrice: 55,
        ourPrice: 30
    },
    {
        id: 'amlodipine',
        name: 'Amlodipine (5mg)',
        use: 'High Blood Pressure, Angina',
        companies: 'Amlokind, Norvasc, Stamlo',
        diseases: ['high blood pressure', 'hypertension', 'angina', 'chest pain'],
        timing: 'Once a day',
        timingDesc: 'Take it at the same time every day to maintain even blood levels.',
        food: 'Can be taken with or without food.',
        foodDesc: 'Avoid large amounts of grapefruit or grapefruit juice.',
        sideEffects: 'Swelling of ankles/feet, dizziness, flushing, fatigue.',
        marketPrice: 75,
        ourPrice: 42
    },
    {
        id: 'diclofenac',
        name: 'Diclofenac (50mg)',
        use: 'Severe Pain and Joint Inflammation',
        companies: 'Voveran, Reactin, Dicloran',
        diseases: ['severe pain', 'joint pain', 'arthritis', 'back pain', 'inflammation'],
        timing: 'Twice or thrice a day',
        timingDesc: 'As prescribed. Do not use for long-term without doctor consultation.',
        food: 'Take with or immediately after food.',
        foodDesc: 'Taking on an empty stomach can cause severe gastric irritation.',
        sideEffects: 'Stomach pain, heartburn, nausea, dizziness.',
        marketPrice: 80,
        ourPrice: 50
    },
    {
        id: 'ranitidine',
        name: 'Ranitidine (150mg)',
        use: 'Acidity and Stomach Ulcers',
        companies: 'Aciloc, Rantac, Zinetac',
        diseases: ['acidity', 'stomach ulcer', 'gas', 'indigestion'],
        timing: 'Once or twice a day',
        timingDesc: 'Often taken before breakfast or at bedtime.',
        food: 'Can be taken with or without food.',
        foodDesc: 'Works best when taken 30-60 minutes before eating or drinking items that cause heartburn.',
        sideEffects: 'Headache, constipation, diarrhea.',
        marketPrice: 35,
        ourPrice: 20
    },
    {
        id: 'domperidone',
        name: 'Domperidone (10mg)',
        use: 'Nausea, Vomiting, and Digestion',
        companies: 'Domstal, Motilium, Vomistop',
        diseases: ['nausea', 'vomiting', 'indigestion', 'feeling sick'],
        timing: 'Up to three times a day',
        timingDesc: 'Take exactly as directed by your doctor. Do not exceed the dose.',
        food: 'Take 15-30 minutes before meals.',
        foodDesc: 'Taking it before food makes it act faster.',
        sideEffects: 'Dry mouth, headache, stomach cramps.',
        marketPrice: 50,
        ourPrice: 32
    },
    {
        id: 'ciprofloxacin',
        name: 'Ciprofloxacin (500mg)',
        use: 'Severe Bacterial Infections',
        companies: 'Cifran, Ciplox, Zoxan',
        diseases: ['urinary tract infection', 'uti', 'typhoid', 'stomach infection', 'severe infection'],
        timing: 'Every 12 hours (Twice a day)',
        timingDesc: 'Swallow whole with plenty of fluids. Do not chew.',
        food: 'Can be taken with or without food.',
        foodDesc: 'Avoid taking with dairy products (milk, yogurt) or calcium-fortified juices alone, as they decrease absorption.',
        sideEffects: 'Nausea, diarrhea, dizziness, tendon issues (rare).',
        marketPrice: 95,
        ourPrice: 60
    },
    {
        id: 'black-dog',
        name: 'Black Dog (Alcohol)',
        use: 'Recreational Beverage',
        companies: 'Diageo / United Spirits',
        diseases: ['stress', 'relaxation'],
        timing: 'Occasional/Moderate',
        timingDesc: 'Avoid heavy consumption. DO NOT mix with medications like Paracetamol or Ibuprofen.',
        food: 'Best consumed after or alongside a meal.',
        foodDesc: 'Drinking on an empty stomach rapidly increases intoxication and stomach lining irritation.',
        sideEffects: 'Dehydration, liver stress (long term), impaired judgement, drowsiness.',
        marketPrice: 1800,
        ourPrice: 1650
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const clearSearchBtn = document.getElementById('clearSearch');
const emptyState = document.getElementById('emptyState');
const medicineDetails = document.getElementById('medicineDetails');

// Search Logic
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length > 0) {
        clearSearchBtn.classList.remove('hidden');
        const filtered = medicinesData.filter(med => 
            med.name.toLowerCase().includes(query) || 
            med.use.toLowerCase().includes(query) ||
            (med.diseases && med.diseases.some(disease => disease.toLowerCase().includes(query)))
        );
        renderSearchResults(filtered);
    } else {
        clearSearchBtn.classList.add('hidden');
        searchResults.classList.add('hidden');
    }
});

// Clear Search
clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
    clearSearchBtn.classList.add('hidden');
    searchResults.classList.add('hidden');
    showEmptyState();
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        searchResults.classList.add('hidden');
    }
});

// Render Dropdown Results
function renderSearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-result-item" style="color: var(--text-muted); cursor: default;">
                No medicines found. Try another search.
            </div>
        `;
    } else {
        searchResults.innerHTML = results.map(med => `
            <div class="search-result-item" onclick="selectMedicine('${med.id}')">
                <i data-lucide="pill" class="item-icon"></i>
                <div>
                    <div style="font-weight: 500;">${med.name}</div>
                    <div style="font-size: 0.85rem; color: var(--text-muted);">${med.use}</div>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }
    searchResults.classList.remove('hidden');
}

// Handle Selection
window.selectMedicine = function(id) {
    const medicine = medicinesData.find(m => m.id === id);
    if (medicine) {
        searchInput.value = medicine.name;
        searchResults.classList.add('hidden');
        clearSearchBtn.classList.remove('hidden');
        renderMedicineDetails(medicine);
    }
};

// Render Details Card
function renderMedicineDetails(med) {
    emptyState.classList.add('hidden');
    medicineDetails.classList.remove('hidden');

    medicineDetails.innerHTML = `
        <div class="med-header">
            <h2 class="med-title">${med.name}</h2>
            <div class="med-use">
                <i data-lucide="activity"></i>
                <span>${med.use}</span>
            </div>
            ${med.companies ? `
            <div class="med-companies" style="margin-top: 0.5rem; font-size: 0.95rem; color: var(--primary); display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="building-2" style="width: 1.1rem; height: 1.1rem;"></i>
                <span><strong>Popular Brands:</strong> ${med.companies}</span>
            </div>` : ''}
        </div>

        <div class="info-grid">
            <div class="info-card highlight">
                <div class="info-icon">
                    <i data-lucide="clock"></i>
                </div>
                <div class="info-content">
                    <h3>Time Gap & Schedule</h3>
                    <p>${med.timing}</p>
                    <div class="desc">${med.timingDesc}</div>
                </div>
            </div>

            <div class="info-card">
                <div class="info-icon">
                    <i data-lucide="utensils"></i>
                </div>
                <div class="info-content">
                    <h3>Food Instructions</h3>
                    <p>${med.food}</p>
                    ${med.foodDesc ? `<div class="desc">${med.foodDesc}</div>` : ''}
                </div>
            </div>

            <div class="info-card warning">
                <div class="info-icon">
                    <i data-lucide="alert-triangle"></i>
                </div>
                <div class="info-content">
                    <h3>Side Effects to Watch For</h3>
                    <p>${med.sideEffects}</p>
                </div>
            </div>
        </div>
    `;
    
    // Re-initialize icons in the newly added HTML
    lucide.createIcons();
}

// Show Empty State
function showEmptyState() {
    medicineDetails.classList.add('hidden');
    emptyState.classList.remove('hidden');
}

// Tab Switching Logic
const navTabs = document.querySelectorAll('.nav-tab');
const tabContents = document.querySelectorAll('.tab-content');
const helpDeskModal = document.getElementById('helpDeskModal');

// Ensure modal has visible styles when not hidden
helpDeskModal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(5px); 
    z-index: 1000; display: flex; align-items: center; justify-content: center; 
    opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
`;

navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        
        // Handle Help Desk Modal logic specifically
        if (targetId === 'helpDeskSection') {
            helpDeskModal.classList.remove('hidden');
            helpDeskModal.style.opacity = '1';
            helpDeskModal.style.pointerEvents = 'auto';
            return; // Don't switch tabs, just show overlay over the current screen!
        }

        // Standard Tab Switching for others
        navTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        tabContents.forEach(content => content.classList.add('hidden'));
        
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
    });
});

window.closeHelpDesk = function() {
    helpDeskModal.style.opacity = '0';
    helpDeskModal.style.pointerEvents = 'none';
    setTimeout(() => {
        helpDeskModal.classList.add('hidden');
    }, 300); // Wait for transition
};

// ==========================================
// Scanner OCR Logic (Tesseract.js)
// ==========================================

const openScannerBtn = document.getElementById('openScannerBtn');
const closeScannerBtn = document.getElementById('closeScannerBtn');
const scannerModal = document.getElementById('scannerModal');
const cameraStream = document.getElementById('cameraStream');
const captureBtn = document.getElementById('captureBtn');
const snapshotCanvas = document.getElementById('snapshotCanvas');
const scannerStatus = document.getElementById('scannerStatus');

let videoTrack = null;

// Open Scanner
openScannerBtn.addEventListener('click', async () => {
    scannerModal.classList.remove('hidden');
    scannerStatus.textContent = "Requesting camera access...";
    
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
        });
        cameraStream.srcObject = stream;
        videoTrack = stream.getVideoTracks()[0];
        scannerStatus.textContent = "Point camera at the medicine name...";
        captureBtn.disabled = false;
    } catch (err) {
        console.error("Camera access error:", err);
        scannerStatus.textContent = "Error accessing camera. Please ensure permissions are granted.";
        captureBtn.disabled = true;
    }
});

// Close Scanner
closeScannerBtn.addEventListener('click', closeScanner);

function closeScanner() {
    scannerModal.classList.add('hidden');
    if (videoTrack) {
        videoTrack.stop();
        videoTrack = null;
    }
    cameraStream.srcObject = null;
}

// Capture and Scan
captureBtn.addEventListener('click', async () => {
    if (!videoTrack) return;

    captureBtn.disabled = true;
    scannerStatus.textContent = "Analyzing image... please wait.";

    // Capture frame to canvas
    snapshotCanvas.width = cameraStream.videoWidth;
    snapshotCanvas.height = cameraStream.videoHeight;
    const ctx = snapshotCanvas.getContext('2d');
    ctx.drawImage(cameraStream, 0, 0, snapshotCanvas.width, snapshotCanvas.height);

    // Run Tesseract OCR
    try {
        const result = await Tesseract.recognize(
            snapshotCanvas,
            'eng',
            { logger: m => console.log(m) }
        );

        const text = result.data.text.toLowerCase();
        console.log("OCR Result:", text);
        
        let foundMedicine = null;

        // Fuzzy match against medicines data
        for (const med of medicinesData) {
            // Check if exact name or ID is in the text
            const basicName = med.name.toLowerCase().split(' ')[0];
            if (text.includes(med.id) || text.includes(basicName)) {
                foundMedicine = med;
                break;
            }
            // Check if any brand name is in the text
            if (med.companies) {
                const brands = med.companies.toLowerCase().split(',').map(b => b.trim());
                for (const brand of brands) {
                    if (brand.length > 3 && text.includes(brand)) {
                        foundMedicine = med;
                        break;
                    }
                }
            }
            if(foundMedicine) break;
        }

        if (foundMedicine) {
            scannerStatus.textContent = `Identified: ${foundMedicine.name}!`;
            setTimeout(() => {
                closeScanner();
                // Ensure we are on home tab
                document.querySelector('[data-target="homeSection"]').click();
                // Show details
                selectMedicine(foundMedicine.id);
            }, 1500);
        } else {
            scannerStatus.textContent = "Medicine not found. Please try scanning again or searching manually.";
            setTimeout(() => {
                scannerStatus.textContent = "Point camera at the medicine name...";
                captureBtn.disabled = false;
            }, 3000);
        }

    } catch (err) {
        console.error("OCR Error:", err);
        scannerStatus.textContent = "Error scanning image. Please try again.";
        captureBtn.disabled = false;
    }
});

// ==========================================
// Buy Medicines (Store UI) Logic
// ==========================================

function renderStore() {
    const storeGrid = document.getElementById('storeGrid');
    if (!storeGrid) return;
    
    // Filter out black-dog from medical store
    const storeMedicines = medicinesData.filter(med => med.id !== 'black-dog');

    storeGrid.innerHTML = storeMedicines.map(med => {
        const discount = Math.round(((med.marketPrice - med.ourPrice) / med.marketPrice) * 100);
        return `
            <div class="store-card">
                <div class="store-card-header">
                    <div class="store-card-icon">
                        <i data-lucide="pill"></i>
                    </div>
                    <div class="store-card-title">
                        <h3>${med.name}</h3>
                        <p>${med.use}</p>
                    </div>
                </div>
                <div class="price-comparison">
                    <div class="market-price">
                        <span>Market Price</span>
                        <span>₹${med.marketPrice}</span>
                    </div>
                    <div class="our-price">
                        <span>Our Price (${discount}% OFF)</span>
                        <span>₹${med.ourPrice}</span>
                    </div>
                </div>
                <button class="buy-btn" onclick="buyMedicine('${med.name}', ${med.ourPrice})">
                    <i data-lucide="shopping-cart"></i> Buy Now
                </button>
            </div>
        `;
    }).join('');

    // Initialize icons in the new HTML
    lucide.createIcons();
}

// ==========================================
// Offline Cart Logic
// ==========================================
let cartItems = [];

// Simulate buying a medicine
window.buyMedicine = function(name, price) {
    cartItems.push({name, price});
    renderCart();
    alert(`Successfully added ${name} to your cart for ₹${price}!`);
};

function renderCart() {
    const cartItemsList = document.getElementById('cartItemsList');
    if (!cartItemsList) return;
    
    if (cartItems.length === 0) {
        cartItemsList.innerHTML = '<p style="color: var(--text-muted);">Your cart is empty. Go to the Home or Cart tab to buy medicines.</p>';
        return;
    }

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    cartItemsList.innerHTML = `
        <ul style="list-style: none; padding: 0; margin: 0;">
            ${cartItems.map(item => `
                <li style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border);">
                    <span>${item.name}</span>
                    <span style="color: #10b981; font-weight: 600;">₹${item.price}</span>
                </li>
            `).join('')}
        </ul>
        <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 15px; font-size: 1.2rem;">
            <span>Total:</span>
            <span>₹${total}</span>
        </div>
        <button class="buy-btn" style="margin-top: 20px;" onclick="alert('Proceeding to secure checkout...')">Checkout Now</button>
    `;
}

// Initialize store and cart on load
renderStore();
renderCart();
