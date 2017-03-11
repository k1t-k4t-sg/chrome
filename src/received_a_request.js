;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> received_a_request.js"); //Получил запрос
    
    "use strict";
    
    
    myModel.received_a_request = function (answer){
        
        //var answer = answer;
        
        return chrome.extension.onMessage.addListener(function(request, sender, callback){
            if(request.acceptor == OPTIONS.idExpansion){
                callback(answer);
            } 
        });
        
    };
    
    return myModel;
    
}(MANDARIN || {}));

MANDARIN.received_a_request(["uspex"]);

