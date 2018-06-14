/*
 * Soruto Blog
 * A blog software in JavaScript.
 * Built with jQuery and marked.js
 * (C)2018 Soruto Project
*/
window.onload = function(){
    pageLoad("article/menu.md");
    alert("OK")
}
function pageLoad(url){
 var xhr = new XMLHttpRequest();
  xhr.open('GET', "articles/" + url + ".md", true);
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
function setArticle(md){
    var html = marked(md);
    setArticleHTML(html);
}
function setArticleHTML(html){
    document.getElementById("article").innerHTML = html;
}