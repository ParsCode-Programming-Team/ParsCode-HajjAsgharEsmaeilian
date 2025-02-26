document.getElementById("icon-scroll").addEventListener("click", function() {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
    });
});
