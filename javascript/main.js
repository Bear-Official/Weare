let checkbox = document.getElementById("toggle");

let logo = document.getElementsByClassName("header__logo")[0];

let lang = document.getElementsByClassName("header__lang")[0];

checkbox.onchange = (e) => {
    if (checkbox.checked) {
        if (window.matchMedia("(max-width: 425px)").matches) {
            lang.style.display = "flex";
            logo.style.display = "none";
        } else if (window.matchMedia("(max-width: 700px)").matches) {
            logo.style.display = "none";
        } else if (window.matchMedia("(max-width: 768px)").matches) {
            lang.style.display = "flex";
        } else if (window.matchMedia("(max-width: 1600px)").matches) {
            lang.style.display = "none";
        }
    } else {
        logo.style.display = "";
        lang.style.display = "";
    }
};

// $(document).ready(function () {
//     $(".development__wrap").slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: false,
//         arrows: false,
//     });
// });

$(document).ready(function () {
    $(".design__box").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $(".arrow-perv"),
        nextArrow: $(".arrow-next"),
    });
});
