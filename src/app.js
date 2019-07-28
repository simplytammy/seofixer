$(document).ready(function(){
	//Navbar Transition
 $(window).scroll(() => {
        let windowTop = $(window).scrollTop();
        windowTop > 300 ? $(".navbar").css('position', 'fixed') : $(".navbar").css('position', 'relative');
    });
//Customize Bootstrap dropdown speed
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});
	
});
