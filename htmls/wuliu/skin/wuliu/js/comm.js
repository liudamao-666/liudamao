$(document).ready(function() {
   //nav 		
    var obj=null;
    var As=document.getElementById('starlist').getElementsByTagName('a');
    obj = As[0];
    for(i=1;i<As.length;i++){if(window.location.href.indexOf(As[i].href)>=0)
    obj=As[i];}
    obj.id='selected';
	  	
    //header
	var new_scroll_position = 0;
	var last_scroll_position;
	var header = document.getElementById("header");

	window.addEventListener('scroll', function(e) {
	  last_scroll_position = window.scrollY;

	  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
		header.classList.remove("slideDown");
		header.classList.add("slideUp");

	  } else if (new_scroll_position > last_scroll_position) {
		header.classList.remove("slideUp");
		header.classList.add("slideDown");
	  }

	  new_scroll_position = last_scroll_position;
	});	
 
 //nav
	$("#mnavh").click(function(){
    $("#starlist").toggle();
	$("#mnavh").toggleClass("open");
	});
   
});


	