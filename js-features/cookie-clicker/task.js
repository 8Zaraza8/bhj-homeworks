    const clickerCounter = document.getElementById('clicker__counter');
    const image = document.getElementById('cookie');
    const clickerRate = document.getElementById('clicker__rate');
    let clickTime = null;

document.addEventListener('click', function () {
    clickerCounter.textContent++;

    // Нужно перевести скорость в секунды
    const currentTime = new Date();  
    if (clickTime){
        const clickerSpeed = currentTime - clickTime; 
        clickerRate.textContent = clickerSpeed;
    }
    clickTime = currentTime;
    
    if (image.width === 200) {
        image.width = 250;
    } else {
        image.width = 200;
    }
  }) 
