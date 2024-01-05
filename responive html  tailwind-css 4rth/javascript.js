document.getElementById('hamBurger').addEventListener('click', function() {
    // Create the hamburgerMenu div if it doesn't exist
    let hamburgerMenu = document.getElementById('hamburgerMenu');
    if (!hamburgerMenu) {
      hamburgerMenu = document.createElement('div');
      hamburgerMenu.id = 'hamburgerMenu';
      document.body.appendChild(hamburgerMenu);
    }

    // Toggle the visibility of the hamburgerMenu
    if (hamburgerMenu.style.display === 'block') {
      hamburgerMenu.style.display = 'none';
    } else {
      hamburgerMenu.style.display = 'block';
    }
  });