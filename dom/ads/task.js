const rotator = document.querySelectorAll('.rotator__case');
let index = 0;

function rotateTheElements() {
	
	setInterval(() => {
		rotator.forEach(element => 
			element.classList.remove('rotator__case_active'));
			rotator[index].classList.add('rotator__case_active');
			index = (index + 1) % rotator.length;
	}, 1000)
}

rotateTheElements();