;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> updated_page.js"); //Обновил страницу
    
    "use strict";
    
    /**
     * Обновил страницу
     * Пользователь обновил страницу, отправка запроса скрипту  
     * @param {object} Cargo, Команда запроса для скрипта  
     * @return backMessage ответ 
    */
    
    myModel.updated_page = function (cargo, callback){
        
        var acceptorOptions = {
            acceptor: OPTIONS.idExpansion, // options.js
            cargo: cargo
        };
        
        return chrome.extension.sendMessage(acceptorOptions, function(backMessage){
            callback(backMessage);
        })
        
    };
    
    return myModel;
    
}(MANDARIN || {}));