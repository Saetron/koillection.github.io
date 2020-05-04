let icons = document.getElementsByClassName('grid-element');

Array.prototype.forEach.call(icons, function(icon) {
    icon.addEventListener("mouseenter", function( event ) {
        Array.prototype.forEach.call(icons, function(element) {
            element.classList.remove('active')
        });
        icon.classList.add('active');

        Array.prototype.forEach.call(document.querySelectorAll("[data-name]"), function(image) {
            image.classList.add('hidden')
        });
        document.querySelectorAll("[data-name='"+ icon.dataset.for +"']")[0].classList.remove('hidden');
    }, false);
});
