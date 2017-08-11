/*simple test to make sure jquery works

$(document).ready(function(){
	$("h1").click(function(){
		$(this).css("background-color","#ff0000");
	})
});
*/

$(document).ready(function() {

	$(".js--how-section").waypoint(function(direction){
		if (direction == "down") {
			$("nav").addClass("fixed-nav");
		} else {	
			$("nav").removeClass("fixed-nav");
		}
	})

	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});


	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});


	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated pulse');
	}, {
		offset: '50%'
	});



});


