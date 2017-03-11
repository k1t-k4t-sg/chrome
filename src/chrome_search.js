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
            
            google_links[ google_links.length ] = $(this).attr("href");;
            
        });
        
        return google_links;
        
    };
    
    return myModel;
    
}(MANDARIN || {}));