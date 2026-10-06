const lilyCursor = document.querySelector('.water-lily-cursor');

document.addEventListener('mousemove', function(event) {

    lilyCursor.style.left = event.clientX + 'px';
    lilyCursor.style.top = event.clientY + 'px';

    // Create a tiny water ripple
    const ripple = document.createElement('div');
    ripple.classList.add('cursor-ripple');

    ripple.style.left = event.clientX + 'px';
    ripple.style.top = event.clientY + 'px';

    document.body.appendChild(ripple);

    // Remove it after the animation
    setTimeout(() => {
        ripple.remove();
    }, 700);
});
