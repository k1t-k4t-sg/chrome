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
            
            console.group("bookmarks_chrome")
            
            console.log("itemTree",itemTree)
            
            itemTree.forEach(function(item){
                processNode(item);
                console.log("google_bookmarks",google_bookmarks)
            });
            
            callback(google_bookmarks);
            
            console.groupEnd();
        });
    }
    
    return myModel;
    
}(MANDARIN || {}));