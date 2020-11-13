jQuery(document).ready(function($){
  
			
    var obj=null;
    var As=document.getElementById('starlist').getElementsByTagName('a');
    obj = As[0];
    for(i=1;i<As.length;i++){if(window.location.href.indexOf(As[i].href)>=0)
    obj=As[i];}
    obj.id='selected';
	
	
	 $(window).scroll(function() {
        var h = $("body").height() - window.getHeight();
        //console.log(h);
        if ($(window).scrollTop() > 28 && h > 120) {
            $(".topnav").addClass("is-fixed").find("").fadeOut(400);			
		

        } else if ($(window).scrollTop() < 28) {
            $(".topnav").removeClass("is-fixed").find("").fadeIn(400);
		

        }
    });

	
});


   window.getHeight = function() {
    if (window.innerHeight != undefined) {
        return window.innerHeight;
    } else {
        var B = document.body
          , D = document.documentElement;
        return Math.min(D.clientHeight, B.clientHeight);
    }
	}