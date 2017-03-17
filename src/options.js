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