;var OPTIONS = (function () {
    
    console.log("OPTIONS.js ==> options");
    
    "use strict";
    
    /**
     * Настройки
     * Настройки расширения CHROME
     * @return {OPTIONS} type Object 
    */
    
    return {
        idExpansion: chrome.runtime.id,  //id расширения
        DOM_selector: '.g .rc .r a'      //тег на странице google
    }
    
}());
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
    
    "use strict"
    
    //search chrome google.ru

    $(document).ready(function(){
        
        var link = MANDARIN.chrome_serach();
        
        MANDARIN.postMes({obj: link});
        
        MANDARIN.onMes(function(msg){
            
            var google_bookmarks = msg.question
            
            $(OPTIONS.DOM_selector).each(function(){
                if(google_bookmarks.indexOf($(this).attr("href")) !== -1){
                    $(this).parent().prepend("<span class='MANDARIN'>&#10026;</span>");
                }
            });
            
            google_bookmarks = null;
        });
    });  
    
}(jQuery));