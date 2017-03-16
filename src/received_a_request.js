;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> received_a_request.js"); //Получил запрос
    
    "use strict";
    
    var onConnect = chrome.runtime.onConnect;
    
    myModel.received_a_request = function (callback){
        
        onConnect.addListener(function(port) {
            
            if(port.name !== OPTIONS.idExpansion){
                console.log("port.name !== OPTIONS.idExpansion");
                return false
            }
            
            port.onMessage.addListener(function(msg) {
                
                //console.group("onMessage");
                
                //console.log("пришол запрос с поиска google");
                //console.log("search", msg);
                //console.groupEnd();
                callback(msg, port);

                //msg получил запрос
                //port.postMessage(); отправка 
            });
        });
    };
    
    return myModel;
    
    //MANDARIN.received_a_request(function(msg, port){
    //  console.log(msg);
    //  port.postMessage({question: "I don't get it."});
    //});
    
}(MANDARIN || {}));













































//;var MANDARIN = (function (myModel) {
//    console.log("MANDARIN.js ==> received_a_request.js"); //Получил запрос
//    
//    "use strict";
//    
//    /**
//     * Получить запрос
//     * Пользователь обновил страницу, Получил запрос 
//     * @param {callback} Callback_rec, function  
//     * @return callback([arrya]) 
//    */
//    
//    myModel.received_a_request = function (callback_rec){
//        
//        return chrome.extension.onMessage.addListener(function(request, sender, callback){
//            if(request.acceptor == OPTIONS.idExpansion){
//                callback_rec(request, sender, callback)
//            }
//        });
//        
//    };
//    
//    return myModel;
//    
//}(MANDARIN || {}));
//
//