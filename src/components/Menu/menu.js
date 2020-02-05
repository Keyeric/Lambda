let menuItems = [
    'About',
    'Media',
    "Blog",
    "Contact",
  ];

  function Hamburger(array){
    const menu = document.createElement('div');
    const unorderedList =document.createElement('nav');
    
  array.forEach(content => {
    const item = document.createElement('a');
    item.textContent = content;
    item.href = `#${content}`;
    unorderedList.append(item);
  });
  
  menu.append(unorderedList);
  
  menu.classList.add('menu');

  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
    });
    return menu;
}
const menuMenu = document.querySelector('.top');
menuMenu.append(Hamburger(menuItems));

