document.onkeydown = (event) => {
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    if (audio) {
        audio.currentTime = 0; // reset / rewind to initial stage

        audio.play();
    }

    var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    var keys = document.querySelectorAll(`.key`);

    key.classList.add('playing');

    keys.forEach(key => key.addEventListener('transitionend', handleTransitionEnd));

    function handleTransitionEnd(event) {
        if (event.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }
};