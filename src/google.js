(function($) {
    
    "use strict"
    
    //search chrome google.ru

    $(document).ready(function(){
        
        var link = MANDARIN.chrome_serach();
        
        MANDARIN.postMes({obj: link});
        
        MANDARIN.onMes(function(msg){
            
            if(msg.question != undefined){
                
                console.log("msg.question");
                
                var google_bookmarks = msg.question
                $(OPTIONS.DOM_SELECTOR).each(function(){
                    if(google_bookmarks.indexOf($(this).attr("href")) !== -1){
                        $(this).parent().prepend(OPTIONS.DOM_SPAN);
                    }
                });
            }
            
            if(msg.link_add != undefined){
                var link_add = msg.link_add;

                $(OPTIONS.DOM_SELECTOR+'[href="'+link_add[0]+'"]').parent().prepend(OPTIONS.DOM_SPAN);
                
            }
            
            if(msg.link_remove != undefined){
                var link_remove = msg.link_remove;
            
                $($(OPTIONS.DOM_SELECTOR+'[href="'+link_remove[0]+'"]').siblings(".MANDARIN")).remove();
                
            }
          
            link_remove = null;
            link_add = null;
            google_bookmarks = null;
        });
    });  
    
}(jQuery));