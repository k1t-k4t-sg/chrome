(function($) {
    
    
    

    
    
    
    
    
    
    

$(document).ready(function(){        
    MANDARIN.updated_page( MANDARIN.chrome_serach(), function(backMessage){
        
        $(OPTIONS.DOM_selector).each(function(){
            
            if(backMessage.indexOf($(this).attr("href")) !== -1){
                $(this).parent().prepend("<span class='MANDARIN'>Тест</span>");  
            }
        });
    });
});    
    
}(jQuery));