window.onload = function() {
    var main = document.querySelector('main');
    main.style.filter = 'blur(5px)';
    setTimeout(function() {
        main.style.transition = 'filter 2s';
        main.style.filter = 'blur(0)';
    }, 2000);
}
