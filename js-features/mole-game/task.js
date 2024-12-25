const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

document.addEventListener('click', (e) => {
    
    const classes = e.target.classList;

    const clear = () => {
        dead.textContent = 0;
        lost.textContent = 0;
    }

    if ( classes.contains('hole_has-mole')) {
        dead.textContent++;
    } else {
        lost.textContent++;
    }
    
    if (lost.textContent == 5) {
        alert('Вы проиграли');
        clear()
    }

    if (dead.textContent == 10) {
        alert('Победа');
        clear();
    }
})

const documentClickHandler = (e) => {

}

