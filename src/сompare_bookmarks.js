MANDARIN.bookmarks_chrome(function(google_bookmarks){
    
    var google_bookmarks = google_bookmarks;
    
    MANDARIN.received_a_request(function(request, sender, callback){
        
        var link_seaech = request.cargo;
        
        var filter_Mandarin = link_seaech.filter(function(value, i, arr){
            
            if(google_bookmarks.indexOf(value) !== -1){
                return value
            }
            
        });
        callback(filter_Mandarin);
    });
});