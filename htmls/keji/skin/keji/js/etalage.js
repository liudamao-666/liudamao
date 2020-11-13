jQuery(document).ready(function($){
             $('#etalage').etalage({
                thumb_image_width: 400,
                thumb_image_height: 300,
                source_image_width: 1200,
                source_image_height: 900,
                show_hint: true,
                click_callback: function (image_anchor, instance_id) {
                    alert('Callback example:\nYou clicked on an image with the anchor: "' + image_anchor + '"\n(in Etalage instance: "' + instance_id + '")');
                }
            });    

});



