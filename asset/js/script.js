document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuToggle = document.getElementById('menu-toggle');

    menuIcon.addEventListener('click', function () {
        if (menuToggle.checked) {
            menuToggle.checked = false;
        } else {
            menuToggle.checked = true;
        }
    });
});


