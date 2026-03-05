// Just prevent default submit for demo
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Message sent! (demo)");
});
