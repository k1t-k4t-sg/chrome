;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> Updated page"); //Обновил страницу
    
    "use strict";
    
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

MANDARIN.updated_page("comand", function(backMessage){
    console.log(backMessage+ "chrome.js")
});