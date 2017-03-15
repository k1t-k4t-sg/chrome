console.info("MANDARIN.JS ==> выполняется в расширении")


//MANDARIN.bookmarks_chrome(function(google_bookmarks){
// 
//    var google_bookmarks = google_bookmarks;
//    
//    MANDARIN.received_a_request(function(request, sender, callback){
//        
//        callback((request.cargo).filter(function(value, i, arr){
//            
//            if(google_bookmarks.indexOf(value) !== -1){
//                return value
//            }
//            
//        }));
//    });
//});



MANDARIN.received_a_request(function(msg, port){
    
    MANDARIN.bookmarks_chrome(function(google_bookmarks){
        
        var google_bookmarks = google_bookmarks;
        
        //console.log(google_bookmarks);
        
        var asd = (msg.obj).filter(function(value, i, arr){
            
            if(google_bookmarks.indexOf(value) !== -1){
                return value
            }
            
        })
        
        //console.log(asd);
        port.postMessage({question: asd});
        
    });
    
    
    
    
    
    
    
    
    //console.log(msg);
    //port.postMessage({question: "I don't get it."});
});