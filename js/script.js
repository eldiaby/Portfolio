// ================================================== //
// Header typing effect
const typingText = function (text, typingEl, delay, callback) {
  let index = 0;
  typingEl.style.opacity = 1; // Ensure it's visible when typing starts

  const interval = setInterval(() => {
    typingEl.textContent = 'I' + text.slice(0, index + 1); // Keep 'I' fixed and add characters after it
    index++;

    if (index === text.length) {
      clearInterval(interval);
      setTimeout(() => {
        callback(); // Call the callback to delete the text after typing
      }, 1000); // Wait for a while before deleting
    }
  }, delay);
};

const deleteText = function (typingEl, text, delay, callback) {
  let index = text.length;

  // Adding blur effect while deleting text to smoothen the deletion
  const interval = setInterval(() => {
    if (index > 0) {
      typingEl.textContent = 'I' + text.slice(0, index - 1); // Keep 'I' fixed and delete the rest
      index--;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        callback(); // Restart typing after deletion
      }, 500); // Wait for a while before restarting typing
    }
  }, delay);
};

const runTypingEffect = function () {
  const text = ' am Eldiaby Hosny'; // The text after 'I'
  const typingEl = document.getElementById('typing-text');
  const typingDelay = 100; // Delay between typing each letter

  function cycleTyping() {
    typingText(text, typingEl, typingDelay, function () {
      deleteText(typingEl, text, typingDelay, function () {
        cycleTyping(); // Repeat the cycle
      });
    });
  }

  cycleTyping();
};

runTypingEffect();
// ================================================== //
