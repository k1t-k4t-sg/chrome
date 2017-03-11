(function($) {
    
    //MANDARIN.received_a_request(function(request, sender, callback){
    //    console.log(request.cargo);
    //    callback(["asdssssss"]);
    //});
    //
    //MANDARIN.updated_page("comand", function(backMessage){
    //    console.log(backMessage+ "==> updated_page.js")
    //});
    
    $(document).ready(function(){
        
        console.log(MANDARIN.chrome_serach());
        
    });
    
    
}(jQuery));


//chrome.bookmarks.getTree(function(itemTree){
//    itemTree.forEach(function(item){
//        processNode(item);
//    });
//});
//
//function processNode(node) {
//    // recursively process child nodes
//    if(node.children) {
//        node.children.forEach(function(child) { processNode(child); });
//    }
//
//    // print leaf nodes URLs to console
//    if(node.url) { console.log(node.url); }
//}