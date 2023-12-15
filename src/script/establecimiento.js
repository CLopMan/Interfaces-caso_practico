

let index = 2
let source = ["image//IMG_6940.jpeg", "image//cat-cafe.jpg", "image//1.png", "image//mocha.jpg", "image//mocha(1).jpg"]

function center_new_img(n, n_elems, slides) {
    for (i = 0; i < n_elems; ++i) {

        slides[((i + n + 2) % n_elems)].src = source[i];
    }
}

function next_slide(n) { //sums n to the slide
    
    var slides = document.getElementsByClassName("est_img_gall")

    index += n;

    if (index > slides.length - 1) index = 0;
    if (index < 0) index = slides.length -1;

    slides[2].style.width="25%";
    slides[2].style.opacity="100%";
    slides[2].style.marginBottom="0";
    slides[2].style.marginTop="0";

    /*for (s=0; s < slides.length; ++s) {
        slides[s].style.opacity="60%";
        slides[s].style.width="10%";
        slides[s].style.marginBottom="2.5%";
        slides[s].style.marginTop="2.5%";
    }
    slides[index].style.width="15%";
    slides[index].style.opacity="100%";
    slides[index].style.marginBottom="0";
    slides[index].style.marginTop="0";*/

    center_new_img(index, slides.length, slides);

    return index;
    
}

$(document).ready(function() {
    $("#est_galeria").scrollLeft(50)
    next_slide(1);
    $("#img0").on('click', function() {
        next_slide(2);
    });
    $("#img1").on('click', function() {
        next_slide(1);
    });
    $("#img2").on('click', function() {
        next_slide(0);
    });
    $("#img3").on('click', function() {
        next_slide(-1);
    });
    $("#img4").on('click', function() {
        next_slide(-2);
    });
});
