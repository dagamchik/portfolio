// Исчезновение блоков
$(window).scroll(function(){
		if($(window).scrollTop()>2){
			$('.main-cont-soc').fadeOut(150)
		}else{
			$('.main-cont-soc').fadeIn(400)
		}
    });

// Blur-эффект    
var display = 0;
	var changeScroll = 50; // количество пикселей до срабатывания эффекта
	var speed = 400; // скорость смены эффекта
	
	function blur() {
		var curentScroll = $(window).scrollTop();
		if(curentScroll <= changeScroll){
			if(display == 1){
				$("div#blur").fadeOut(speed);
				display = 0;
			}
		}else{
			if(display == 0){
				$("div#blur").fadeIn(speed);
				display = 1;
			}
		}
	}
	$(window).scroll(blur);
    blur();

    // Всплывающее окно
  $('.button__1, .your__order, .project-btn').click(function() {
    $('.overlay').fadeIn(600);
    $('.modal-window').addClass('modal-window-animate');
    $('body').addClass('stop-scroll');
  });
// Закрыть окно
  $('.form-window-close').click(function() {
    $('.overlay').fadeOut(400);
    $('.modal-window').removeClass('modal-window-animate');
    $('body').removeClass('stop-scroll');
  });


 /* HAMBURGER*/

 $('.hamburger-btn').on('click', function(e){
 	e.preventDefault;
 	$(this).toggleClass('menu_btn_active');
 	$('.menu-nav').toggleClass('menu-nav_active');
 })