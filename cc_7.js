const input = document.getElementById('cta-input');
const button = document.getElementById('cta-button');
const headline = document.getElementById('cta-headline');

button.addEventListener('click', () => {
    if (input.value.trim()) {
        headline.textContent = input.value;
        input.value = '';
    }
});