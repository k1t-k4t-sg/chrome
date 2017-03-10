
chrome.extension.onMessage.addListener(function(request, sender, callback){
  if(request.acceptor == OPTIONS.idExpansion){
    
    console.log(request);
      
    callback(sender.url);
  }
});