bars = document.querySelector('.bars');
bars.onclick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}


if (navBar.classList.contains("active")) {
    body.style.overflow = "hidden";
} else {
    body.style.overflow =  "auto";
 }

 