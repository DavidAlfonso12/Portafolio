function togglemenu() {
    // almacenamos el elemento con el id main-menu en la variable menu
    const menu = document.getElementById('main-menu');
    // agregamos/quitamos la clase visible
    menu.classList.toggle('visible');
}