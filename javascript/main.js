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

    $(".documents__box").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $(".documents-perv"),
        nextArrow: $(".documents-next"),

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.2,
                },
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".team__box").slick({
        slidesToShow: 5.5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: $(".arrow_next"),
        nextArrow: $(".arrow_perv"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".feedback__box").slick({
        slidesToShow: 1,
        slidesToScroll: 0.9,
        infinite: false,
        arrows: true,
        prevArrow: $(".feedback-perv"),
        nextArrow: $(".feedback-next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // $(".second__slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: false,
    //     arrows: false,
    // });
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
