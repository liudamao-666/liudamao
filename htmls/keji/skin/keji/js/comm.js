$(document).ready(function() {
	

	//nav 
	$("#mnavh").click(function() {
        $("#starlist").toggle();
        $("#mnavh").toggleClass("open");
        $(".sub").hide();
		});
		
	var obj=null;
    var As=document.getElementById('starlist').getElementsByTagName('a');
    obj = As[0];
    for(i=1;i<As.length;i++){if(window.location.href.indexOf(As[i].href)>=0)
    obj=As[i];}
    obj.id='selected';
	
	
	//nav menu
  
  $(".menu").click(function(event) {	
  $(this).children('.sub').slideToggle();
  $(this).siblings('.menu').children('.sub').slideUp('');	
   event.stopPropagation()
   });
   $(".menu a").click(function(event) {
   event.stopPropagation(); 
   });
   $(".sub li").click(function(event) {
   event.stopPropagation(); 
   });
	
	


		

	
     $('.icon-search-img').click(function(){
          $(".search").toggle(300);
	
    });
	
	

		
	 $('#tab li').click(function(){
   $(this).addClass('current').siblings().removeClass('current');
   $('.content-box>section:eq('+$(this).index()+')').show().siblings().hide();
    });  
   
});

   
