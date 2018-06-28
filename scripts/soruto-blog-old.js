/*
 * Soruto Blog
 * A blog software in JavaScript.
 * Built with  marked.js
 * (C)2018 Soruto Project
*/
//グローバル関数の定義
var ptitle;
var articleUrl;

window.onload = function(){
	ptitle = document.title;
	//menuLoad();
	var arg = new Object;
	var pair=location.search.substring(1).split('&');
	for(var i=0;pair[i];i++) {
    	var kv = pair[i].split('=');
    	arg[kv[0]]=kv[1];
	}
	if(arg.q){
		pageLoad(arg.q,false);
	}else{
    	pageLoad("home");
	}
}
function pageLoad(name,pushURL){
	try{
	//showload info
	document.getElementById("sorutoblog-loader-25317").style.display = "block";
	//非同期読み込み用URL書き換え処理
	if(pushURL !== false && history.pushState){
	history.pushState('','','?q=' + name);
	}
 var xhr = new XMLHttpRequest();
  xhr.open('GET', "articles/" + name + ".md", true);
  xhr.onreadystatechange = function(){
    // 本番用
    if (xhr.readyState === 4 && xhr.status === 200){
        setArticle(xhr.responseText);
    }
    else if (xhr.readyState === 4 && xhr.status === 404){
        setArticleHTML("<h2>404 Not Found</h2>要求されたページ\"" + name + "\"は存在しません。<br>URLを直接入力された場合は、URLが間違っていないか確認してください。<br><br>","404 Not Found")
    }
    // ローカルファイル用
    else if (xhr.readyState === 4 && xhr.status === 0){
      setArticle(xhr.responseText);
    }
  };
  xhr.send(null);
}catch(e){
	setArticleHTML("<h2>エラーが発生しました</h2>記事をダウンロード中にエラーが発生したため、処理を中止しました。<br><br>","エラーが発生しました");
	console.log(e);
 
	}
}
function menuLoad(){
 var xhr = new XMLHttpRequest();
  xhr.open('GET', "articles/menu.html", true);
  xhr.onreadystatechange = function(){
    // 本番用
    if (xhr.readyState === 4 && xhr.status === 200){
        setMenuHTML(xhr.responseText);
	}
    // ローカルファイル用
    else if (xhr.readyState === 4 && xhr.status === 0){
      setMenuHTML(xhr.responseText);
    }
  };
  xhr.send(null);
}
function setArticle(md){
    var html = marked(md);
    var title = md.split("\n")[0].split("#").join("");
    setArticleHTML(html,title);
}
function setMenuHTML(html){
    document.getElementById("sorutoblog-menu-63108").innerHTML = html;
}
function setArticleHTML(html,title){
	//delete load info
	window.setTimeout(function(){
	document.getElementById("sorutoblog-loader-25317").style.display = "none";
	},300);
    document.getElementById("sorutoblog-article-71536").innerHTML = html;
    document.title = title + " - " + ptitle;
	//addLinkEvent();
}
//リンクをクリック時に非同期で記事を読み込む処理
function addLinkEvent(){
if(history.pushState){
	link = document.getElementsByTagName('a');
	for (var i = 0; i < link.length; i++) {
		link[i].addEventListener('click',redirect,false);
		}
	}
}
function redirect(ev){
	var linkUrl = ev.target.href;
	var ClientUrl = location.href.split("?")[0];
	if(ClientUrl.indexOf(linkUrl) != -1){
		ev.preventDefault();
		var articleId = linkUrl.split("?q=")[1];
		pageLoad(articleId);
	}
}
function updateCheck(){
	
}