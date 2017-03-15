;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> updated_page.js");
    
    "use strict";
    
    
    var port = chrome.runtime.connect({name: OPTIONS.idExpansion});
    
    myModel.postMes = function (obj){
        
        return port.postMessage(obj);
        
    };
    
    myModel.onMes = function(callback){
        port.onMessage.addListener(function(msg) {
            
            callback(msg);
            
        });
    }
    
    return myModel;
    
}(MANDARIN || {}));






MANDARIN.postMes({obj: "privet"});
MANDARIN.onMes(function(msg){
    console.log(msg);
});





























//var port = chrome.runtime.connect({name: "knockknock"});

//port.postMessage({joke: "Knock knock"});
//
//port.onMessage.addListener(function(msg) {
//    
//    console.log(msg)
//
//});





























//;var MANDARIN = (function (myModel) {
//    console.log("MANDARIN.js ==> updated_page.js"); //Обновил страницу
//    
//    "use strict";
//    
//    /**
//     * Обновил страницу
//     * Пользователь обновил страницу, отправка запроса скрипту  
//     * @param {object} Cargo, Команда запроса для скрипта  
//     * @return backMessage ответ 
//    */
//    
//    myModel.updated_page = function (cargo, callback){
//        
//        var acceptorOptions = {
//            acceptor: OPTIONS.idExpansion, // options.js
//            cargo: cargo
//        };
//        
//        return chrome.extension.sendMessage(acceptorOptions, function(backMessage){
//            callback(backMessage);
//        })
//        
//    };
//    
//    return myModel;
//    
//}(MANDARIN || {}));