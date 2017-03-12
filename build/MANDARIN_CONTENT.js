;var OPTIONS = (function () {
    
    console.log("OPTIONS.js ==> retrun settings");
    
    "use strict";
    
    /**
     * Настройки
     * Настройки расширения CHROME
     * @return {OPTIONS} type Object 
    */
    
    return {
        idExpansion: chrome.runtime.id,         //id расширения
        DOM_selector: '.g .rc .r a'            //тег на странице google
    }
    
}());
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
;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> chrome_serach.js");
    
    "use strict";
    
    var google_links = [];
    
    
    /**
     * Поиск google.ru 
     * Парсинг ссылок на странице google.ru
     * @return {Arrya} google_links ссылки
    */
    myModel.chrome_serach = function(){
        
        $(OPTIONS.DOM_selector).each(function(i,elem) {
            
            google_links[ google_links.length ] = $(this).attr("href");
            
        });
        
        return google_links;
        
    };
    
    return myModel;
    
}(MANDARIN || {}));
(function($) {

$(document).ready(function(){
    
    var link = MANDARIN.chrome_serach();
    
    MANDARIN.updated_page(link, function(backMessage){
        
        $(OPTIONS.DOM_selector).each(function(){
            
            if(backMessage.indexOf($(this).attr("href")) !== -1){
                $(this).parent().prepend("<span class='MANDARIN'>&#10026;</span>");
            }
        });
    });
});    
    
}(jQuery));