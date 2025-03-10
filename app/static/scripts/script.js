var con = document.querySelector('.content');
con.style.display = 'none';

function ShowContent() {
    var div = document.querySelector('.content');
    div.style.display = 'flex';
}

document.getElementById("icon-scroll").addEventListener("click", function() {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight + 200) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    });

    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
