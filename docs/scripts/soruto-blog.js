/*
 * Soruto Blog
 * A blog software in JavaScript.
 * Built with jQuery and marked.js
 * (C)2018 Soruto Project
*/
window.onload = function(){
	//menuLoad();
	var arg = new Object;
	var pair=location.search.substring(1).split('&');
	for(var i=0;pair[i];i++) {
    	var kv = pair[i].split('=');
    	arg[kv[0]]=kv[1];
	}
	if(arg.q){
		pageLoad(arg.q);
	}else{
    	pageLoad("home");
	}
	//delete load info
	document.getElementById("sorutoblog-loader-25317").style.display = "none";
}
function pageLoad(name){
 var xhr = new XMLHttpRequest();
  xhr.open('GET', "articles/" + name + ".md", true);
  xhr.onreadystatechange = function(){
    // 本番用
    if (xhr.readyState === 4 && xhr.status === 200){
        setArticle(xhr.responseText);
    }
    else if (xhr.readyState === 4 && xhr.status === 404){
        setArticleHTML("<h2>404 Not Found</h2>要求されたページは存在しません。")
    }
    // ローカルファイル用
    else if (xhr.readyState === 4 && xhr.status === 0){
      setArticle(xhr.responseText);
    }
  };
  xhr.send(null);
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
    setArticleHTML(html);
}
function setMenuHTML(html){
    document.getElementById("sorutoblog-menu-63108").innerHTML = html;
}
function setArticleHTML(html){
    document.getElementById("sorutoblog-article-71536").innerHTML = html;
    }