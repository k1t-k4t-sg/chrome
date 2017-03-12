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
;var MANDARIN = (function (myModel) {
    console.log("MANDARIN.js ==> bookmarks_chrome.js");
    
    "use strict";
    
    var google_bookmarks = [];
    
    
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
        return chrome.bookmarks.getTree(function(itemTree){
            itemTree.forEach(function(item){
                processNode(item);
            });
            
            callback(google_bookmarks)
        });
    }
    
    return myModel;
    
}(MANDARIN || {}));
MANDARIN.bookmarks_chrome(function(google_bookmarks){
    
    var google_bookmarks = google_bookmarks;
    
    MANDARIN.received_a_request(function(request, sender, callback){
        
        var link_seaech = request.cargo;
        
        var filter_Mandarin = link_seaech.filter(function(value, i, arr){
            
            if(google_bookmarks.indexOf(value) !== -1){
                return value
            }
            
        });
        callback(filter_Mandarin);
    });
});