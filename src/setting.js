
MANDARIN.bookmarks_chrome(function(google_bookmarks){
 
    var google_bookmarks = google_bookmarks;
    
    MANDARIN.received_a_request(function(request, sender, callback){
        
        callback((request.cargo).filter(function(value, i, arr){
            
            if(google_bookmarks.indexOf(value) !== -1){
                return value
            }
            
        }));
    });
});