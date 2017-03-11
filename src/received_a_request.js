;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> received_a_request.js"); //Получил запрос
    
    "use strict";
    
    
    myModel.received_a_request = function (callback_rec){
        
        return chrome.extension.onMessage.addListener(function(request, sender, callback){
            if(request.acceptor == OPTIONS.idExpansion){
                callback_rec(request, sender, callback)
            }
        });
        
    };
    
    return myModel;
    
}(MANDARIN || {}));



//MANDARIN.received_a_request(function(request, sender, callback){
//    console.log(request.cargo);
//    callback(["asdssssss"]);
//});