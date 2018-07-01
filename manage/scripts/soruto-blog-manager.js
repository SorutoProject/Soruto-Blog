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
		document.getElementById("view").style.display = "none";
	}else if(s == "make"){
		document.getElementById("home").style.xIndex = "1";
		document.getElementById("make").style.zIndex = "2";
		document.getElementById("view").style.display = "block";
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
    document.getElementById("view").contentWindow.document.body.innerHTML = '<style>body{background:#4c4c4c;color:#000;font-family:\'メイリオ\',Meiryo,\'Hiragino Kaku Gothic ProN\',\'ヒラギノ角ゴ ProN W3\',sans-serif}h1{border-bottom:#aaa 1px solid;padding-left:5px}h2,h3{border-left:#33c 8px solid;border-bottom:#33c 1px solid;padding-left:5px}code{display:inline-block;background:#eee;border-radius:3px;border:#ddd 1px solid;overflow:auto}table{border-collapse:collapse}table th,table td{border:1px solid #999}table tr:nth-child(even){background:#eee}blockquote{border-left:#ddd 5px solid;padding-left:5px;color:#777}.info{color:#3a87ad;background-color:#d9edf7;border:1px solid #bce8f1;font-size:13px;line-height:19px;padding:6px 10px;border-radius:0;margin:1em 0 1em}.warn{color:#c09853;background-color:#fcf8e3;border:1px solid #fbeed5;font-size:13px;line-height:19px;padding:6px 10px;border-radius:0;margin:1em 0 1em}.alert{color:#b94a48;background-color:#f2dede;border:1px solid #eed3d7;font-size:13px;line-height:19px;padding:6px 10px;border-radius:0;margin:1em 0 1em}#sorutoblog-loader-25317 img{border-radius:50%}#sorutoblog-article-71536{position:absolute;width:100%;height:100%;);top:0px;left:0;right:0;margin:auto;background:#fafafa;z-index:1;box-shadow:0 0 4px;overflow:auto}#sorutoblog-article-71536>*{margin-left:5px}</style><div id="sorutoblog-article-71536">'+viewcode + "</div>";
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