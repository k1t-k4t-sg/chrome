;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> received_a_request.js"); //Получил запрос
    
    "use strict";
    
    /**
     * Получить запрос
     * Пользователь обновил страницу, Получил запрос 
     * @param {callback} Callback_rec, function  
     * @return callback([arrya]) 
    */
    
    myModel.received_a_request = function (callback_rec){
        
        return chrome.extension.onMessage.addListener(function(request, sender, callback){
            if(request.acceptor == OPTIONS.idExpansion){
                callback_rec(request, sender, callback)
            }
        });
        
    };
    
    return myModel;
    
}(MANDARIN || {}));

