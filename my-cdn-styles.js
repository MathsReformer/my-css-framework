// my-cdn-styles.js
(function () {
  // 1. Define your CSS shortcut rules mapping to real CSS properties
  const rules = {
    'bg-blue': 'background-color: #3b82f6;',
    'bg-red': 'background-color: #ef4444;',
    'text-white': 'color: #ffffff;',
    'text-large': 'font-size: 24px;',
    'p-20': 'padding: 20px;',
    'rounded': 'border-radius: 8px;'
  };

  function compileShapedCSS() {
    let generatedCSS = '';
    const uniqueClassesFound = new Set();

    // 2. Find all elements on the page with a class attribute
    const elements = document.querySelectorAll('[class]');
    
    elements.forEach(el => {
      // Split the class string into individual shortcut utility tokens
      const classList = el.getAttribute('class').split(/\s+/);
      
      classList.forEach(className => {
        // If it matches our dictionary and hasn't been added yet
        if (rules[className] && !uniqueClassesFound.has(className)) {
          uniqueClassesFound.add(className);
          // Build the valid CSS rule
          generatedCSS += `.${className} { ${rules[className]} }\n`;
        }
      });
    });

    // 3. Inject it into a <style> block in the head
    let styleTag = document.getElementById('my-dynamic-cdn-css');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'my-dynamic-cdn-css';
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = generatedCSS;
  }

  // 4. Run the compiler when the HTML is parsed
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', compileShapedCSS);
  } else {
    compileShapedCSS();
  }

  // 5. Watch for dynamic changes (like Tailwind's real CDN engine does)
  const observer = new MutationObserver(() => compileShapedCSS());
  observer.observe(document.body, { attributes: true, subtree: true, childList: true });
})();
