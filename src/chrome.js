(function($) {
    
    console.info("WWW.GOOGLE.COM ==> выполняется на сайте");

$(document).ready(function(){
    
    var link = MANDARIN.chrome_serach();
    
    
    MANDARIN.postMes({obj: link});
    
    MANDARIN.onMes(function(msg){
        
        console.log(msg.question);
        
        var google_bookmarks = msg.question
        
        $(OPTIONS.DOM_selector).each(function(){
            
            if(google_bookmarks.indexOf($(this).attr("href")) !== -1){
                $(this).parent().prepend("<span class='MANDARIN'>&#10026;</span>");
            }
        });
        
        google_bookmarks = null;
    });
});  
    
}(jQuery));