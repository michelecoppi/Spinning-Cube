let cube = document.querySelector('.cube');

function mouseEnter(e) {
    e.preventDefault();
    cube.style.animationPlayState = 'paused';
}

function mouseLeave(e) {
    cube.style.animationPlayState = 'running';
}

cube.addEventListener('mouseenter', mouseEnter);
cube.addEventListener('mouseleave', mouseLeave);




