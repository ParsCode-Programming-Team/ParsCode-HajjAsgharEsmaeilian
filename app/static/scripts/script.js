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
