(function(){
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();


const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
const icon = document.getElementById("icon");
btn.addEventListener('click', () =>{
    nav.classList.toggle('navactive');
    btn.classList.toggle('btnactive');
    icon.classList.toggle('fa-times');
})
 