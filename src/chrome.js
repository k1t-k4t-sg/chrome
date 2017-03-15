(function($) {
    
    console.info("WWW.GOOGLE.COM ==> выполняется на сайте")

$(document).ready(function(){
    
    var link = MANDARIN.chrome_serach();
    
    MANDARIN.updated_page(link, function(backMessage){
        
        $(OPTIONS.DOM_selector).each(function(){
            
            if(backMessage.indexOf($(this).attr("href")) !== -1){
                $(this).parent().prepend("<span class='MANDARIN'>&#10026;</span>");
            }
        });
    });
});  
    
}(jQuery));