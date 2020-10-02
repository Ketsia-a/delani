// $(function() {
//     $('#portofolio').hover(function() {
//         $(this).width(1.25 * $(this).width());
//         $(this).width(1.25 * $(this).height());
//     }, function() {
//         $(this).width(0.8 * $(this).width());
//         $(this).width(0.8 * $(this).height());
//     });
// });
$(function() {
    $('#image1').hover(function() {
        $('.overlay1').toggle();
    })
    $('#image2').hover(function() {
        $('.overlay2').toggle();
    })
    $('#image3').hover(function() {
        $('.overlay3').toggle();
    })
    $('#image4').hover(function() {
        $('.overlay4').toggle();
    })
    $('#image5').hover(function() {
        $('.overlay5').toggle();
    })
    $('#image6').hover(function() {
        $('.overlay6').toggle();
    })
    $('#image7').hover(function() {
        $('.overlay7').toggle();
    })
    $('#image8').hover(function() {
        $('.overlay8').toggle();
    })
})