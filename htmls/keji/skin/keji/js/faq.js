$(function(){    

     $(".foldContent").fadeOut(0);
     $("h5").click(function() {
          $(".foldContent").not($(this).next()).slideUp('');
          $(this).next().slideToggle(400);
     });
	
})