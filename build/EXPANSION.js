;var OPTIONS = (function () {
    
    console.log("OPTIONS.js ==> options");
    
    "use strict";
    
    /**
     * Настройки
     * Настройки расширения CHROME
     * @return {OPTIONS} type Object 
    */
    
    return {
        ID_EXPANSION: chrome.runtime.id,  //id расширения
        DOM_SELECTOR: '.g .rc .r a'      //тег на странице google
    }
    
}());
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
            
            if(port.name !== OPTIONS.ID_EXPANSION){
                console.log("port.name !== OPTIONS.ID_EXPANSION");
                return false
            }
            
            port.onMessage.addListener(function(msg) {
                callback(msg, port);
            });
        });
    };
    
    return myModel;
    
}(MANDARIN || {}));
;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> bookmarks_chrome.js");
    
    "use strict";
    
    var google_bookmarks; // закладки с браузера
    
    
    /**
     * Перебор вложенных закладок
     * @param {node} Arrya закладки
     * @return {Arrya} google_bookmarks ссылки
    */
    function processNode(node) {
        if(node.children) {
            node.children.forEach(function(child) { 
                processNode(child); 
            });
        }
        
        if(node.url) {
            google_bookmarks[ google_bookmarks.length ] = node.url;
        }
        
    };
    
    /**
     * Поиск закладок
     * Парсинг закладок в браузере
     * @param {callback} callback, function
     * @return {Arrya} google_bookmarks ссылки
    */
    myModel.bookmarks_chrome = function(callback){
        
        google_bookmarks = [];
        
        return chrome.bookmarks.getTree(function(itemTree){
            
            itemTree.forEach(function(item){
                processNode(item);
            });
            
            callback(google_bookmarks);
        });
    }
    
    return myModel;
    
}(MANDARIN || {}));
(function(){
    
    "use strict"
    
    // chrome expansion
    
    MANDARIN.received_a_request(function(msg, port){
        MANDARIN.bookmarks_chrome(function(google_bookmarks){
            
            var google_bookmarks = google_bookmarks;
            
            var google_bookmarks_link = (msg.obj).filter(function(value, i, arr){
                if(google_bookmarks.indexOf(value) !== -1){
                    return value
                }
            });
            
            port.postMessage({question: google_bookmarks_link});
            
        });
        
    });
      
}());