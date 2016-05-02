$( document ).ready(function() {

	var stickyMenu = $('#menu').offset().top;

	$(window).scroll(function() {  
		if ($(window).scrollTop() > stickyMenu) {
			$('#menu').addClass('affix');
		}
		else {
			$('#menu').removeClass('affix');
		}  
	});

	$("#content1link").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$('#content1').offset().top}, 1500);
	});

	$("#content2link").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$('#content2').offset().top}, 1500);
	});
	$("#content3link").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$('#content3').offset().top}, 1500);
	});
	
});