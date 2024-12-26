const dropdowns = document.querySelectorAll('.dropdown');
  
dropdowns.forEach(dropdown => {
  const dropdownValue = dropdown.querySelector('.dropdown__value');
  const dropdownList = dropdown.querySelector('.dropdown__list');
  const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
  
  dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
  });

  dropdownItems.forEach(item => {
    const link = item.querySelector('.dropdown__link');
    link.addEventListener('click', (event) => {
      event.preventDefault();
      dropdownValue.textContent = link.textContent;
      dropdownList.classList.remove('dropdown__list_active');
    });
  });
  
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownList.classList.remove('dropdown__list_active');
    }
  });
});