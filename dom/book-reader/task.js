const size = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

function updateFontSize(item) {

	size.forEach(item => item.classList.remove('font-size_active'));

	item.classList.add('font-size_active');
	book.classList.remove('book_fs-small', 'book_fs-big');

	if (item.classList.contains('font-size_small')) {
			book.classList.add('book_fs-small');
	} else if (item.classList.contains('font-size_big')) {
			book.classList.add('book_fs-big');
	}
}

size.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		updateFontSize(item);
	});
});