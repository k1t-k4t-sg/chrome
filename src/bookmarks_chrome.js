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
     * bookmarks_chrome Поиск закладок
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
    };
    
    myModel.added_bookmark = function(callback){
        chrome.bookmarks.onCreated.addListener(function(id, bookmark) {
            console.log("bookmarcks");
            callback([bookmark.url, "ADDED"]);
        });
    };
    
    myModel.deleted_bookmark = function(callback){
        chrome.bookmarks.onRemoved.addListener(function(id, removeInfo) {
            callback([removeInfo.node.url, "DELETE"]);
        });
    };
        
    myModel.сhanged_the_bookmark = function(callback){
        chrome.bookmarks.onChanged.addListener(function(id, changeInfo){
            callback([changeInfo.url, "CHANGED"]);
        });
    };
    
    return myModel;
    
}(MANDARIN || {}));