$(document).ready(function() {
    //nav     
    var obj = null;
    var As = document.getElementById('starlist').getElementsByTagName('a');
    obj = As[0];
    for (i = 1; i < As.length; i++) {
        if (window.location.href.indexOf(As[i].href) >= 0) obj = As[i];
    }
    obj.id = 'selected';
    //nav
    $("#mnavh").click(function() {
        $("#starlist").toggle();
        $("#mnavh").toggleClass("open");
    });
 
    //banner
    $('#banner').easyFader();
    //nav menu   
	
   //nav menu   
   $(".menu").click(function(event) {
   $(this).children('.sub').slideToggle();
   event.stopPropagation(); 
   });
   $(".sub li").click(function(event) {
   event.stopPropagation(); 
   });
   
  
var obj=null;
var As=document.getElementById('pageContents').getElementsByTagName('a');
obj = As[0];
for(i=1;i<As.length;i++){if(window.location.href.indexOf(As[i].href)>=0)
obj=As[i];}
obj.id='pagecurrent'


   
});

