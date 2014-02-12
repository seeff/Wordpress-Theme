(function ( $ ) { 

	$('input:radio[name="name"]').change(function(){
	    if($(this).val() == 'Month to Month'){
	       $( "#checkout-button" ).before( "<input type=\"hidden\" name=\"price\" value=\"12.00\"<\/input>"); 
	    }if($(this).val() == 'Month to Month - Hello Giggles'){
	       $( "#checkout-button" ).before( "<input type=\"hidden\" name=\"price\" value=\"12.00\"<\/input>"); 
	    } 
	});

    


    $(".imgLiquidFill").imgLiquid({fill:true, horizontalAlign:'center', verticalAlign:'center'});

	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
	$(".inline").colorbox({inline:true, width:"50%"});



	$(".radio-duration").click(function() {

		$(".duration-button").html("Select\<span class\=\"fui\-arrow\-right\"\>\<\/span\>");
		$(this).children(".duration-button").text("Selected");
		$('.radio-duration').not(this).stop().animate({
	        opacity: 0.4
	    }, 150);
	    // Make this opaque
	    $(this).stop().animate({
	        opacity: 1.0
	    }, 150);

	});


	$(".radio-gender").click(function() {

		$(".gender-button").html("Select\<span class\=\"fui\-arrow\-right\"\>\<\/span\>");
		$(this).children(".gender-button").text("Selected");
		$('.radio-gender').not(this).stop().animate({
	        opacity: 0.4
	    }, 150);
	    $(this).stop().animate({
	        opacity: 1.0
	    }, 150);
	});


	$(".radio-style").click(function() {
		$(".check-style").css("color", "#1abc9c");
		$(".check-style").css("display", "inline-block");
		$(".style-button").html("Select\<span class\=\"fui\-arrow\-right\"\>\<\/span\>");
		$(this).children(".style-button").text("Selected");
		$('.radio-style').not(this).stop().animate({
	        opacity: 0.4
	    }, 150);
	    // Make this opaque
	    $(this).stop().animate({
	        opacity: 1.0
	    }, 150);	
		
	});






    $(".duration-container :radio").hide().click(function(e){
	    e.stopPropagation();
	});
	$(".duration-container div").click(function(e){
	    $(this).closest(".duration-container").find("div").removeClass("selected-div");
	    $(this).addClass("selected-div").find(":radio").click();
	});$(".duration-container :radio").hide().click(function(e){
	    e.stopPropagation();
	});
	$(".duration-container div").click(function(e){
	    $(this).closest(".duration-container").find("div").removeClass("selected-div");
	    $(this).addClass("selected-div").find(":radio").click();
	});



    $(".gender-container :radio").hide().click(function(e){
	    e.stopPropagation();
	});
	$(".gender-container div").click(function(e){
	    $(this).closest(".gender-container").find("div").removeClass("selected-div");
	    $(this).addClass("selected-div").find(":radio").click();
	});$(".gender-container :radio").hide().click(function(e){
	    e.stopPropagation();
	});
	$(".gender-container div").click(function(e){
	    $(this).closest(".gender-container").find("div").removeClass("selected-div");
	    $(this).addClass("selected-div").find(":radio").click();
	});


	    $(".style-container :radio").hide().click(function(e){
	    e.stopPropagation();
	});
	$(".style-container div").click(function(e){
	    $(this).closest(".style-container").find("div").removeClass("selected-div");
	    $(this).addClass("selected-div").find(":radio").click();
	});$(".style-container :radio").hide().click(function(e){
	    e.stopPropagation();
	});
	$(".style-container div").click(function(e){
	    $(this).closest(".style-container").find("div").removeClass("selected-div");
	    $(this).addClass("selected-div").find(":radio").click();
	});
	
var num = 10; //number of pixels before modifying styles
if ($(window).width() > 767) {
	$(window).bind('scroll', function($) {
		if ($(window).scrollTop() > num) {
			$('.navbar').addClass('navbar-condensed');
			$('.navbar .navbar-brand').addClass('navbar-brand-condensed');
			$('.navbar-nav').addClass('navbar-nav-condensed');
		} else {
			$('.navbar').removeClass('navbar-condensed');
			$('.navbar .navbar-brand').removeClass('navbar-brand-condensed');
			$('.navbar-nav').removeClass('navbar-nav-condensed');
		}
	});
}


//TESTIMONIALS

function fade($ele) {
	$ele.fadeIn(1000).delay(2000).fadeOut(1000, function() {
		var $next = $(this).next('.a-testimonial');
		fade($next.length > 0 ? $next : $(this).parent().children().first());
	});
}
fade($('#testimonials > .a-testimonial').first());
});


