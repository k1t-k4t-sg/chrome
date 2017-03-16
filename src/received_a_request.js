;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> received_a_request.js"); //Получил запрос
    
    "use strict";
    
    var onConnect = chrome.runtime.onConnect;
    
    
    /**
     * Получить запрос
     * Получает запрос onMessage и отправка ответа postMessage
     * @param {callback} callback, function(msg, port)
     * @return msg {object}, port {object}
    */
    
    myModel.received_a_request = function (callback){
        
        onConnect.addListener(function(port) {
            
            if(port.name !== OPTIONS.idExpansion){
                console.log("port.name !== OPTIONS.idExpansion");
                return false
            }
            
            port.onMessage.addListener(function(msg) {
                callback(msg, port);
            });
        });
    };
    
    return myModel;
    
}(MANDARIN || {}));