chrome.contextMenus.create({
    type: 'normal',
    title: '排楼',
    id: 'miPaiLou',
    contexts: ['all'],
    onclick: pailouOnClick
});

	//把用户名保存到额外属性中，这样防止重入
var code = 'var list = document.getElementsByClassName("comment-list")[0];\
	var replies = list.childNodes; \
for(var i=0;i<replies.length;i++){ \
	var reply = replies[i]; \
	var nameNode = reply.getElementsByClassName("name")[0]; \
	if(nameNode.dataset.username)continue;\
	var username = nameNode.innerText; \
	nameNode.dataset.username=username; \
	} \
for(var i=0;i<replies.length;i++){\
	var reply = replies[i];\
	var nameNode = reply.getElementsByClassName("name")[0];\
	var username = nameNode.dataset.username;\
	var num = i+1;\
	if(num>0&&num<=83&&num%10==3)\
	{\
		var text=reply.getElementsByClassName("text")[0].innerText;\
		var msg = "第"+num+"楼:【"+username+"】:"+text;\
		console.log(msg);\
	}\
	var name = num+"楼："+username;\
	nameNode.innerText=name;\
}\
';

function pailouOnClick(info, tab) {
	chrome.tabs.query({active: true}, function(tabs) {
	  var tab = tabs[0];
	  chrome.tabs.executeScript(tab.id, {
		code: code
	  });
	});
}