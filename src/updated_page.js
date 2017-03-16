;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> updated_page.js");
    
    "use strict";
    
    /**
     * port = id расширения браузера
    */
    var port = chrome.runtime.connect({
        name: OPTIONS.idExpansion
    });
    
    /**
     * postMes - Отправка запроса на странице
     * Отправка запроса и слушать
     * @param {obj} сообщение object
     * @return postMessage(obj)
    */
    myModel.postMes = function (obj){
        return port.postMessage(obj);
    };
    
    /**
     * onMes - Принять ответ 
     * Принимает ответ от received_a_request
     * @param {callback} сообщение msg
     * @return callback(msg) обработка сообщения
    */
    myModel.onMes = function(callback){
        port.onMessage.addListener(function(msg) {
            callback(msg);
        });
    };
    
    return myModel;
    
}(MANDARIN || {}));