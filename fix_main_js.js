// Read main.js
const fs = require('fs');
const path = 'main.js';

let content = fs.readFileSync(path, 'utf8');

// Optimize counters: Ensure unobserve is called (it is).
// Ensure toggle doesn't force layout thrashing.
// But the biggest issue might be the multiple DOMContentLoaded listeners or heavy operations.
// We see multiple 'document.addEventListener("DOMContentLoaded"...)' in the file.
// Ideally we should merge them, but it's not critical for performance unless they conflict.

// One Quick Fix: Check if loop is efficient.
// The requestAnimationFrame loop looks fine.

// Check for map listing rendering.
// It renders ALL creches? 
// The map logic might be heavy if generating many markers.
// Oh wait, looking at main.js content from previous turn:
// It has "Dynamic Daycare Listing" which renders cards.
// But it also has  logic which generates random related daycares.

// The issue might be the sheer number of images if not lazy loaded.
// The python script just fixed that in HTML, but dynamically generated images in JS need 'loading="lazy"'.

// Let's inject loading="lazy" into the JS templates.
// 1. In renderCreches: <img src="${imgUrl}" ...>
// It already has loading="lazy" in the snippet I saw?
// line 234: <img src="${imgUrl}" alt="${c.name}" width="300" height="200" loading="lazy" ...>
// Yes it does.

// 2. In related daycares map:
// line 420: <img src="${related.imgUrl}" ... loading="lazy">
// Yes it does.

// So why is it slow?
// Maybe the 'filter' logic on every input event?
// line 273: searchInput.addEventListener('input', (e) => renderCreches(e.target.value));
// Debouncing would be good.

// Let's add debounce to the search input.
const debounceCode = `
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
`;

// Insert debounce function at top of DOMContentLoaded or helper section
// And use it.
// searchInput.addEventListener('input', debounce((e) => renderCreches(e.target.value), 300));

if (!content.includes('function debounce')) {
    // Insert before renderCreches
    content = content.replace('function renderCreches', debounceCode + '\n        function renderCreches');
    // Replace event listener
    content = content.replace(
        "searchInput.addEventListener('input', (e) => renderCreches(e.target.value));",
        "searchInput.addEventListener('input', debounce((e) => renderCreches(e.target.value), 300));"
    );
    console.log("Added debounce to search.");
}

// Another optimization: The 'values-grid' animations.
// If there are many elements observing, it can be janky.
// But mostly fine.

fs.writeFileSync(path, content);
