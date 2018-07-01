/*
 * Soruto Blog
 * A blog software in JavaScript.
 * Built with  marked.js
 * (C)2018 Soruto Project
*/

//config は先にconfig.jsを読み込んで定義済み

var ptitle;
//marked.jsの設定
(function() {
var renderer = new marked.Renderer()
  if(config.highLight === true){
  //シンタックスハイライトを有効にする
  renderer.code = function(code, language) {
    return '<pre><code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
  };
  }
//見出しにhashをつける(半角スペースは-に、()は消す)
renderer.heading = function (text, level) {
  var escapedText = text.toLowerCase().replace(" ","-").replace("(","").replace(")","");

  return '<h' + level + '><a name="' +
                escapedText +
                 '" class="anchor" href="#' +
                 escapedText +
                 '"><span class="header-link"></span></a>' +
                  text + '</h' + level + '>';
}
marked.setOptions({
  renderer: renderer,
});
})();
//ページ読み込み時の処理
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
		pageLoad(arg.q);
    history.replaceState({page:arg.q},'','?q=' + arg.q);
	}else{
    	pageLoad("home");
      history.replaceState({page:"home"},'','?q=home');
	}
	if(config.backtoTopButton !== false){
		document.getElementById("sorutoblog-backtop").onclick = new Function("backtoTop()");
		window.onscroll = function(){
		//指定した数字以上にスクロールしたときにページトップに戻るボタンを出す
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;  // IE、Firefox、Opera||Chrome、Safari
			if(scroll >= config.backtoTopButton){
				document.getElementById("sorutoblog-backtop").style.display = "block";
			}else{
				document.getElementById("sorutoblog-backtop").style.display = "none";
			}
		}
	}
}
//ページがスクロールされたときの処理
function pageLoad(name,hash){
	try{
	//showload info
	document.getElementById("sorutoblog-loader-25317").style.display = "block";
 var xhr = new XMLHttpRequest();
  xhr.open('GET', "articles/" + name + ".md", true);
  xhr.onreadystatechange = function(){
    // 本番用
    if (xhr.readyState === 4 && xhr.status === 200){
        setArticle(xhr.responseText,hash);
    }
    else if (xhr.readyState === 4 && xhr.status === 404){
        setArticleHTML("<h2>404 Not Found</h2>要求されたページ\"" + name + "\"は存在しません。<br>URLを直接入力された場合は、URLが間違っていないか確認してください。<br><br>","404 Not Found",hash);
    }
    // ローカルファイル用
    else if (xhr.readyState === 4 && xhr.status === 0){
      setArticle(xhr.responseText,hash);
    }
  };
  xhr.overrideMimeType("text/markdown");
  //キャッシュを無効化
  xhr.setRequestHeader('Pragma', 'no-cache');
  xhr.setRequestHeader('Cache-Control', 'no-cache');
  xhr.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
  xhr.send(null);
}catch(e){
	setArticleHTML("<h2>エラーが発生しました</h2>記事をダウンロード中にエラーが発生したため、処理を中止しました。<br><br>","エラーが発生しました",hash);
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
function setArticle(md,hash){
    var html = marked(md);
    var title = md.split("\n")[0].split("#").join("");
    setArticleHTML(html,title,hash);
}
function setMenuHTML(html){
    document.getElementById("sorutoblog-menu-63108").innerHTML = html;
}
function setArticleHTML(html,title,hash){
    document.getElementById("sorutoblog-article-71536").innerHTML = html + "<br><br>";
    document.title = title + " - " + ptitle;

    //config.jsで記事の非同期読み込みが有効になっているときの処理
    if(config.async === true){
      var links = document.getElementsByTagName('a');
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click',redirect,false);
      }
    }

    //URLにハッシュが設定されているときに、そこに飛ぶ
	  if(location.hash != ""){
      var pageHash = location.hash;
      location.hash = "";
      location.hash = pagehash;
  	}
    //非同期読み込みでhashがあったとき
    if(hash !== undefined){
      location.hash = hash;
    }
    //delete load gif
    window.setTimeout(function(){
    document.getElementById("sorutoblog-loader-25317").style.display = "none";
    },300);
}
function backtoTop(){
	scrollTo(0,0)
}
//非同期読み込みでの記事読み込み用(addEventListenerから指定)
function redirect(ev){
    var linkUrl = ev.target.href;
    var target = ev.target.target;
    var blogFilePath = location.href.split("?")[0];
    var noneHash = location.href.split("#")[0];
    var jumpPageNoneHash = ev.target.href.split("#")[0];
    var linkPath = linkUrl.split("?")[0];
    console.log(noneHash + "\n" + jumpPageNoneHash);
    console.log(blogFilePath + "\n" + linkPath);
    //リンクのtargetに_blankが指定されているとき
    if(target == "_blank"){return false;}
    //ハッシュ以外が一致するとき(ページ内移動)
    if(noneHash == jumpPageNoneHash){return false;}
    //ブログない記事のとき(リンクのパスがSoruto BlogのURLであるとき)
    if(blogFilePath == linkPath){
      //デフォルトの処理を無効化
      ev.preventDefault();
      //linkUrlから記事ファイル名を取得
      var articleId = linkUrl.split("?q=")[1].split("#")[0];
      //linkUrlからハッシュを取得
      var hash = linkUrl.split("#")[1];
      pageLoad(articleId,hash);
      history.pushState({page:articleId},null,"?q=" + articleId);
      }
}
//非同期のとき、戻る・進むボタンを押したときの処理を定義
window.onpopstate=function(e){
  try{
  var articleId = e.state.page;
  var hash = location.href.split("#")[1];
  pageLoad(articleId,hash)
//if (!e.originalEvent.state) return; // 初回アクセス時に再読み込みしてしまう対策
}catch(e){}
}
