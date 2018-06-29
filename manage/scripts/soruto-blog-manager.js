codeMirrorElement = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
	mode:"markdown",
	theme:"darcula"
  });
codeMirrorElement.on("change", function (cm, event) {
        viewArticle();
});

window.onload = function(){
	setPage("home");
}
function setPage(s){
	if(s == "home"){
		document.getElementById("home").style.zIndex = "2";
		document.getElementById("make").style.zIndex = "1";
	}else if(s == "make"){
		document.getElementById("home").style.xIndex = "1";
		document.getElementById("make").style.zIndex = "2";
	}
}
function viewArticle(){
	codeMirrorElement.save();
	var code = document.getElementById("editor").value;
	var html = marked(code,{
		"headerIds":false
	});
	var viewcode = html.split("<a").join("<u");
	viewcode = viewcode.split("</a>").join("</u>");//リンクを置き換え(404エラー対策)
    document.getElementById("view").contentWindow.document.body.innerHTML = '<style>code,table tr:nth-child(even){background:#eee}#sorutoblog-article-71536,blockquote,h1,h2,h3{padding-left:5px}body{background:#4c4c4c;color:#000;font-family:\'メイリオ\',Meiryo,\'Hiragino Kaku Gothic ProN\',\'ヒラギノ角ゴ ProN W3\',sans-serif}h1{border-bottom:#aaa 1px solid}h2,h3{border-left:#33c 8px solid;border-bottom:#33c 1px solid}code{display:inline-block;border-radius:3px;border:1px solid #ddd;overflow:auto}table{border-collapse:collapse}table td,table th{border:1px solid #999}blockquote{border-left:#ddd 5px solid;color:#777}@media screen and (min-width:650px){#sorutoblog-article-71536{position:absolute;width:90%;top:5px;left:0;right:0;margin:auto;background:#fafafa;z-index:1;box-shadow:0 0 4px;overflow:auto}}@media screen and (max-width:650px){#sorutoblog-article-71536{position:absolute;width:95%;top:5px;left:0;right:0;margin:auto;background:#fafafa;z-index:1;box-shadow:0 0 4px}}</style><div id="sorutoblog-article-71536">'+viewcode + "</div>";
}
function download(){
codeMirrorElement.save();
var content  = document.getElementById("editor").value;
var name     = document.getElementById("filename").value + ".md";
var mimeType = "text/markdown";
if(name==".md"){
	alert("ファイル名を入力してください");
}else{
// BOMは文字化け対策
var bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
var blob = new Blob([bom, content], {type : mimeType});

var a = document.createElement('a');
a.download = name;
a.target   = '_blank';
a.id = "downloadlink";

if (window.navigator.msSaveBlob) {
  // for IE
  window.navigator.msSaveBlob(blob, name)
}
else if (window.URL && window.URL.createObjectURL) {
  // for Firefox
  a.href = window.URL.createObjectURL(blob);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
else if (window.webkitURL && window.webkitURL.createObject) {
  // for Chrome
  a.href = window.webkitURL.createObjectURL(blob);
  a.click();
}
else {
  // for Safari
  window.open('data:' + mimeType + ';base64,' + window.Base64.encode(content), '_blank');
}
}
}
function genFilename(){
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	var date = time.getDate();
	var hour = time.getHours();
	var minute = time.getMinutes();
	document.getElementById("filename").value = year + "." +  month + "." + date + "." + hour + "." + minute;
}