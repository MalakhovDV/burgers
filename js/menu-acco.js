
function accordionMenu() {
    const menuItems = document.querySelectorAll('.menu-acco__item'); // полуаем все li элементы  
    const menuAccord = document.querySelector('.menu-acco'); // полуаем ul элемент

    menuAccord.addEventListener('click', event => {
      event.preventDefault();
      let target = event.target.parentNode; 
      let content = target.nextElementSibling; 
      let item = target.parentNode; 
  
      const tarWidth = target.clientWidth;
      const windowWidth = document.documentElement.clientWidth; 
      const closeMenuWidth = tarWidth * menuItems.length; 

      if (event.target.classList.contains('menu-acco__trigger-text')) {
        moveMenu();
      }

      target = event.target; 
      content = target.nextElementSibling;
      item = target.parentNode;

      if (target.classList.contains('menu-acco__trigger')) {
        moveMenu();
      }

      function moveMenu() {
        for (const iterator of menuItems) {
          if (iterator != item) {
            iterator.classList.remove('menu-acco__item--active');
            iterator.lastElementChild.style.width = 0;
            menuAccord.style.transform = `translateX(0)`;
          }
        }
        if (item.classList.contains('menu-acco__item--active')) {
          item.classList.remove('menu-acco__item--active');
          content.style.width = 0;
        } else {
          item.classList.add('menu-acco__item--active');
          content.style.width = windowWidth - closeMenuWidth + 'px';
        }
      }
    });
  }
  
  accordionMenu();
  
  