$(document).ready(function() {
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
$(function() {
    $('.s-icon-1').click(function() {
        $('.s-icon-text').show()
        $('.s-icon-1').hide()

    })
    $('.s-icon-text').click(function() {
        $('.s-icon-1').show()
        $('.s-icon-text').hide()
    })
    $('.s-icon-2').click(function() {
        $('.s-icon2-text').show()
        $('.s-icon-2').hide()

    })
    $('.s-icon2-text').click(function() {
        $('.s-icon-2').show()
        $('.s-icon2-text').hide()
    })
    $('.s-icon-3').click(function() {
        $('.s-icon3-text').show()
        $('.s-icon-3').hide()

    })
    $('.s-icon3-text').click(function() {
        $('.s-icon-3').show()
        $('.s-icon3-text').hide()
    })

})


// function pop() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }