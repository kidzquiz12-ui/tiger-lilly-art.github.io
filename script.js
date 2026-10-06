const lilyCursor = document.querySelector('.water-lily-cursor');

document.addEventListener('mousemove', (event) => {
    lilyCursor.style.left = `${event.clientX}px`;
    lilyCursor.style.top = `${event.clientY}px`;
});
