(function($) {

    
    $(document).ready(function(){
        
        var link = MANDARIN.chrome_serach();
        
        console.log(link);
        
        MANDARIN.updated_page(link, function(backMessage){
            console.log(backMessage)
        });
        
        
        
    });
    
    
}(jQuery));