// DOM references
const nicheInput = document.getElementById('nicheInput');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const errorMessage = document.getElementById('errorMessage');
const resultsSection = document.getElementById('resultsSection');
const loadingState = document.getElementById('loadingState');
const resultsContent = document.getElementById('resultsContent');
const domainsGrid = document.getElementById('domainsGrid');
const resultCount = document.getElementById('resultCount');

// Domain generation ingredients
const prefixes = ['AI', 'Smart', 'Pro', 'Go', 'My'];
const suffixes = ['Hub', 'Lab', 'Tools', 'Now', 'Pro'];
const brandableSuffixes = ['ify', 'ora', 'zen', 'labs'];
const extensions = ['.com', '.xyz', '.ai', '.site'];

// Build domain suggestions using local logic (no API)
function generateDomains(niche) {
    const domains = [];
    const cleanNiche = niche.toLowerCase().trim();

    // Prefix + niche + suffix
    for (const prefix of prefixes) {
        for (const suffix of suffixes) {
            const baseName = `${prefix.toLowerCase()}${cleanNiche}${suffix.toLowerCase()}`;
            const ext = extensions[Math.floor(Math.random() * extensions.length)];
            domains.push({
                name: baseName,
                extension: ext,
                fullDomain: `${baseName}${ext}`,
                type: 'prefix-suffix'
            });
        }
    }

    // Niche + brandable ending
    for (const suffix of brandableSuffixes) {
        const baseName = `${cleanNiche}${suffix}`;
        const ext = extensions[Math.floor(Math.random() * extensions.length)];
        domains.push({
            name: baseName,
            extension: ext,
            fullDomain: `${baseName}${ext}`,
            type: 'brandable'
        });
    }

    // Niche variants
    for (const variant of ['', 'the', 'get', 'app', 'ai', 'pro']) {
        const baseName = variant ? `${variant}${cleanNiche}` : cleanNiche;
        const ext = extensions[Math.floor(Math.random() * extensions.length)];
        domains.push({
            name: baseName,
            extension: ext,
            fullDomain: `${baseName}${ext}`,
            type: 'variant'
        });
    }

    // Reverse style names
    for (const suffix of suffixes.slice(0, 3)) {
        const baseName = `${suffix.toLowerCase()}${cleanNiche}`;
        const ext = extensions[Math.floor(Math.random() * extensions.length)];
        domains.push({
            name: baseName,
            extension: ext,
            fullDomain: `${baseName}${ext}`,
            type: 'reverse'
        });
    }

    // Remove duplicates and randomize final list
    const uniqueDomains = Array.from(new Map(domains.map((d) => [d.name, d])).values());

    return uniqueDomains
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);
}

// Identify a few names as trending
function isTrendingName(domain) {
    const trendingPatterns = ['ify', 'ora', 'zen', 'labs', 'ai', 'app'];
    return trendingPatterns.some((pattern) => domain.name.includes(pattern));
}

// Render cards into the results grid
function displayDomains(domains) {
    domainsGrid.innerHTML = '';

    domains.forEach((domain, index) => {
        const card = document.createElement('div');
        card.className = 'domain-card';
        card.style.animationDelay = `${index * 0.04}s`;

        const isTrending = isTrendingName(domain) && index < 3;

        card.innerHTML = `
            <div class="top-row">
                <div class="availability-badge">Available</div>
                ${isTrending ? '<div class="trending-badge">🔥 Trending</div>' : '<div></div>'}
            </div>
            <div class="domain-name">
                <span class="domain-name-text">${domain.name}</span><span class="domain-extension-inline">${domain.extension}</span>
            </div>
            <button class="btn-buy" onclick="buyDomain('${domain.fullDomain}')">
                💸 Buy Now – ₹99/year
            </button>
            <div class="urgency-text">⚡ Low price today</div>
        `;

        domainsGrid.appendChild(card);
    });
}

// Open Namecheap results in a new tab
function buyDomain(fullDomain) {
    const url = `https://www.namecheap.com/domains/registration/results/?domain=${fullDomain}`;
    window.open(url, '_blank');
}

// Keep UX focused by bringing results into view
function scrollToResults() {
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Main generation flow with validation + loading state
function handleGenerate() {
    errorMessage.textContent = '';
    const niche = nicheInput.value.trim();

    if (!niche) {
        errorMessage.textContent = '❌ Please enter a niche name';
        resultsSection.classList.remove('active');
        return;
    }

    if (niche.length < 2) {
        errorMessage.textContent = '❌ Niche must be at least 2 characters';
        resultsSection.classList.remove('active');
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(niche)) {
        errorMessage.textContent = '❌ Please use only letters and spaces';
        resultsSection.classList.remove('active');
        return;
    }

    resultsSection.classList.add('active');
    loadingState.style.display = 'block';
    resultsContent.style.display = 'none';

    setTimeout(() => {
        const domains = generateDomains(niche);
        resultCount.textContent = `${domains.length} domains`;
        displayDomains(domains);

        loadingState.style.display = 'none';
        resultsContent.style.display = 'block';

        scrollToResults();
    }, 1200);
}

// Reset input and hide results
function handleClear() {
    nicheInput.value = '';
    errorMessage.textContent = '';
    resultsSection.classList.remove('active');
    nicheInput.focus();
}

// Wire interactions
generateBtn.addEventListener('click', handleGenerate);
clearBtn.addEventListener('click', handleClear);

nicheInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleGenerate();
    }
});

// Initial focus for faster typing
nicheInput.focus();
