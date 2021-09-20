// image slider

jQuery(document).ready(function ($) {
  
    // This is for the auto sliding
    setInterval(function () {
        moveRight();
    }, 5000);
    
    //variables
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 300, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 300, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('.control_prev').click(function () {
        moveLeft();
    });

    $('.control_next').click(function () {
        moveRight();
    });

});




// Video slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {  
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i,
      x = document.getElementsByClassName("video-slide"),
      y = document.getElementsByTagName("video");
  
  if (n > x.length) {
    slideIndex = 1
  }
  
  if (n < 1) {
    slideIndex = x.length
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    y[i].pause();
  }
  
  x[slideIndex-1].style.display = "block";
  
}

// link - hidder
// const showClass = (e)=>{
//     icons.forEach(item =>{
//        return item.classList.toggle(".team-link");

//     })
// }


// const icons = document.querySelectorAll(".icon");
// const images = document.querySelectorAll(".team-img");
// images.forEach(item => item.addEventListener('transitionend', showClass))