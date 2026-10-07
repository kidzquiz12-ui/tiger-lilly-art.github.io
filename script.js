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
// =====================================================
// ARTIST Q&A
// =====================================================

const qaButtons = document.querySelectorAll('.qa-question-button');
const qaQuestion = document.querySelector('#qa-question');
const qaAnswer = document.querySelector('#qa-answer');

qaButtons.forEach(function(button) {

    button.addEventListener('click', function() {

        // Change the question
        qaQuestion.textContent = button.dataset.question;

        // Change the answer
        qaAnswer.textContent = button.dataset.answer;

        // Remove active state from all buttons
        qaButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        // Highlight the question we clicked
        button.classList.add('active');

    });

});
