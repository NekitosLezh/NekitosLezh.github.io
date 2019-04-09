// header-nav

// floating scroll
$(document).ready(function() {


 $("a.navLink").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 1000,
       easing: "swing"
    });
    return false;
 });


 });

// floating scroll







