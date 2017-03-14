//function asd(){
//    
//    var google_bookmarks = [];
// 
//    function processNode(node) {
//        if(node.children) {
//            node.children.forEach(function(child) { 
//                processNode(child); 
//            });
//        }
//        
//        if(node.url) {
//            google_bookmarks[ google_bookmarks.length ] = node.url;
//        }
//        
//    };
//    
//    /**
//     * Поиск закладок
//     * Парсинг закладок в браузере
//     * @param {callback} callback, function
//     * @return {Arrya} google_bookmarks ссылки
//    */
//    chrome.bookmarks.getTree(function(itemTree){
//        itemTree.forEach(function(item){
//            processNode(item);
//        });
//        
//        console.log(google_bookmarks);
//    });
//}
//
//chrome.runtime.onInstalled.addListener(function() {
//    console.log("bookmark search exporter extention Installed.");
//    asd()
//});
// 
// 
//chrome.bookmarks.onCreated.addListener(function(id, bookmark) {
//    console.log(bookmark);
//    asd()
//});
// 
//chrome.bookmarks.onRemoved.addListener(function(id, removeInfo) {
//    console.log("bookmark removed .. " +  id);
//    asd()
//});