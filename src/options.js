;var OPTIONS = (function () {
    
    console.log("OPTIONS.js ==> retrun settings");
    
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