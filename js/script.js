const audio = document.querySelector('audio');
const box = document.querySelector('.box');
const topRightText = document.querySelector('.top-right-text');
const cinnamon = document.querySelector('.cinnamon');
const recipe = document.querySelector('.recipe');
const showStepsBtn = document.getElementById('showStepsBtn');
const stepsDiv = document.getElementById('steps');

if (audio) {
    function pauseAudio() {
        audio.pause();
    }

    function playAudio() {
        audio.play();
    }
}

if (box && topRightText) {
    box.addEventListener('mouseenter', () => {
        topRightText.style.display = 'block';
    });

    box.addEventListener('mouseleave', () => {
        topRightText.style.display = 'none';
    });
}

if (cinnamon && recipe) {
    cinnamon.addEventListener('mouseenter', () => {
        recipe.style.display = 'block';
    });

    cinnamon.addEventListener('mouseleave', () => {
        recipe.style.display = 'none';
    });
}

if (showStepsBtn && stepsDiv) {
    showStepsBtn.addEventListener('click', function() {
        stepsDiv.removeAttribute('hidden');
        this.setAttribute('hidden', 'true');
    });
}
