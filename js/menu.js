/*menu*/
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
  nav.classList.toggle('movimiento');
});

/*slider*/
//almacenar slider en una variable
var slider = $('.banner');
//almacenar botones

//mover ultima imagen al primer lugar
$('.banner-informacion:last').insertBefore('.banner-informacion:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');




function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('.banner-informacion:first').insertAfter('.banner-informacion:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 8000);
}
autoplay();
