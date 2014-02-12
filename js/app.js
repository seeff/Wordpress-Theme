(function ($) {

  // On dom ready
  $(function () {

    $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });

    var twelveMonthsDate;
    var sixMonthsDate;
    var twelveMonthsDate = $("#twelveMonthsDate").val();
    var sixMonthsDate = $("#sixMonthsDate").val();


    var $productHolder = $('.product-options-holder');
    $('input:radio[name="name"]').change(function(){
        if($(this).val() == 'Month to Month'){
           $productHolder.html("<input type=\"hidden\" name=\"price\" value=\"12.00\"<\/input>\r\n<input type=\"hidden\" name=\"sub_frequency\" value=\"1m\"><\/input>\r\n<input type=\"hidden\" name=\"category\" value=\"MonthToMonth\">\r\n<input type=\"hidden\" name=\"code\" value=\"month_to_month\"><\/input>\r\n<input type=\"hidden\" name=\"2:code\" value=\"month_to_month\"><\/input>"); 
        }

        if ($(this).val() == 'Six Months Subscription'){
          $productHolder.html( "<input type=\"hidden\" name=\"sub_enddate\" value=\""+sixMonthsDate+"\"><\/input>\r\n <input type=\"hidden\" name=\"price\" value=\"0.00\"><\/input>\r\n<input type=\"hidden\" name=\"sub_frequency\" value=\"1m\"><\/input>\r\n<input type=\"hidden\" name=\"code\" value=\"free\"><\/input>\r\n<input type=\"hidden\" name=\"2:name\" value=\"Six Months Subscription Paid\"><\/input>\r\n<input type=\"hidden\" name=\"2:price\" value=\"72.00\"><\/input>\r\n<input type=\"hidden\" name=\"2:code\" value=\"6m\"><\/input>\r\n<input type=\"hidden\" name=\"2:category\" value=\"SixMonths\"><\/input>\r\n");
        } 

        if ($(this).val() == 'Twelve Months Subscription'){
          $productHolder.html("<input type=\"hidden\" name=\"sub_enddate\" value=\""+twelveMonthsDate+"\"><\/input>\r\n"+"<input type=\"hidden\" name=\"price\" value=\"0.00\"><\/input>\r\n<input type=\"hidden\" name=\"sub_frequency\" value=\"1m\"><\/input>\r\n<input type=\"hidden\" name=\"code\" value=\"free\"><\/input>\r\n<input type=\"hidden\" name=\"2:name\" value=\"Twelve Months Subscription Paid\"><\/input>\r\n<input type=\"hidden\" name=\"2:price\" value=\"144.00\"><\/input>\r\n<input type=\"hidden\" name=\"2:code\" value=\"12m\"><\/input>\r\n<input type=\"hidden\" name=\"2:category\" value=\"TwelveMonths\"><\/input>");
        }
    });

    
    $(".imgLiquidFill").imgLiquid({fill:true, horizontalAlign:'center', verticalAlign:'center'});

    $(".radio-duration").click(function() {
        // $(".check-duration").css("color", "#1abc9c");
        // $(".check-duration").css("display", "inline-block");
        $(".duration-button").html("Select\<span class\=\"fui\-arrow\-right\"\>\<\/span\>");
        $(this).children(".duration-button").text("Selected");
        $('.radio-duration').not(this).stop().animate({
            opacity: 0.4
        }, 150);
        // Make this opaque
        $(this).stop().animate({
            opacity: 1.0
        }, 150);
        // var divID = '.gender-scroll' + this.id;
        // $('html, body').animate({
        //  scrollTop: $(divID).offset().top
        // }, 1000);
        
        // $( this.children(".selected")).addClass("hidden");
    });

      // $('.radio-duration').hover(function() {
      //     // Make all images (except this) transparent
      //     $('.radio-duration').not(this).stop().animate({
      //         opacity: 0.4
      //     }, 150);
      //     // Make this opaque
      //     $(this).stop().animate({
      //         opacity: 1.0
      //     }, 150);
      // });

    $(".radio-gender").click(function() {
        // $(".check-gender").css("color", "#1abc9c");
        // $(".check-gender").css("display", "inline-block");
        $(".gender-button").html("Select\<span class\=\"fui\-arrow\-right\"\>\<\/span\>");
        $(this).children(".gender-button").text("Selected");
        $('.radio-gender').not(this).stop().animate({
            opacity: 0.4
        }, 150);
        // Make this opaque
        $(this).stop().animate({
            opacity: 1.0
        }, 150);
        // var divID = '.style-scroll' + this.id;
        // $('html, body').animate({
        //  scrollTop: $(divID).offset().top
        // }, 1000);
    });
      // $('.radio-gender').hover(function() {
      //     // Make all images (except this) transparent
      //     $('.radio-gender').not(this).stop().animate({
      //         opacity: 0.4
      //     }, 150);
      //     // Make this opaque
      //     $(this).stop().animate({
      //         opacity: 1.0
      //     }, 150);
      // });

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
        }, 150);        // var divID = '.submit-scroll' + this.id;
        // $('html, body').animate({
        //  scrollTop: $(divID).offset().top
        // }, 1000);
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
        $(window).bind('scroll', function() {
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

    //USE SCROLL WHEEL FOR THIS FIDDLE DEMO

    function fade($ele) {
        $ele.fadeIn(1000).delay(2000).fadeOut(1000, function() {
            var $next = $(this).next('.a-testimonial');
            fade($next.length > 0 ? $next : $(this).parent().children().first());
        });
    }
    fade($('#testimonials > .a-testimonial').first());

    // Customization stuff
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches
    var num_fieldset = 1;

    $(".next").click(function(){
        if(animating) return false;
        animating = true;
        current_fs = $('fieldset:nth-of-type(' + num_fieldset + ')');
        num_fieldset += 1;
        next_fs = $('fieldset:nth-of-type(' + num_fieldset + ')');

        
        // current_fs = $(this).parent().parent().parent();
        // next_fs = current_fs.next(); 
     //     console.log(current_fs);
        // console.log(next_fs);
        
        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50)+"%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({'transform': 'scale('+scale+')'});
                next_fs.css({'left': left, 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $(".previous").click(function(){
        if(animating) return false;
        animating = true;
        
        current_fs = $('fieldset:nth-of-type(' + num_fieldset + ')');
        num_fieldset -= 1;
        previous_fs = $('fieldset:nth-of-type(' + num_fieldset + ')');
        
        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1-now) * 50)+"%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $(".submit").click(function(){
        return false;
    })
  });

}(jQuery))
