


var main = document.querySelector('.main');
var nav = document.querySelector('.nav');


window.onscroll = function () {

    if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    } else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');

    }

}




/*
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
*/

//scrollFunction
$(window).scroll(function(){
    var scrollTop = $(document).scrollTop();
    var anchors = $('body').find('article');

    for (var i = 0; i < anchors.length; i++){
        if (scrollTop > $(anchors[i]).offset().top - 100 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 50) {
            $('.nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
        } else if (($(window).innerHeight() + $(window).scrollTop()) >= $("body").height()) {
          $('.contact').addClass('active');
          $('.port').removeClass('active');
}

        else {
            $('.nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
        }
    }
});


/* ----------------------------RESEARCH PROJECTS---------------------------- */

$(function() {
        $('.project-card > .pc-content').hover(function () {
            var card = $(this).parent('.project-card');

            if (card.hasClass('pc-active')) {
                card.removeClass('pc-active');
            } else {
                card.addClass('pc-active');

            }
        });
    });
