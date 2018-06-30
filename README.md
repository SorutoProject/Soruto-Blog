# Soruto-Blog
JavaScriptで構築された、ブログソフトウェア。
## 目次
* [Soruto Blogの特徴](#soruto-blogの特徴)
* [導入(インストール)](#導入インストール)
* [知っておいたほうが良いこと](#知っておいたほうが良いこと)
* [他の記事へのリンクの設置](#他の記事へのリンクの設置)
* [記事のアップロード](#記事のアップロード)
* [他のライブラリの使用について](#他のライブラリの使用について)
### Soruto Blogの特徴
* 記事はMarkdownで記述します。
* JavaScriptで構築されているため、高速に記事を読み込みできます。
* サーバーへの負荷が少ないブログソフトウェアです。
* PHPが利用できないサーバーでも利用できます。

### 導入(インストール)

1.<a href="https://github.com/SorutoProject/Soruto-Blog/releases" target="_blank">Release</a>ページから**最新版**をダウンロードします。  
2.ダウンロードしたZIPもしくはtar.gzを展開します。  
3.展開されたファイル(README.mdとLICENSEを除く)やディレクトリをサーバーの任意のディレクトリに転送します。

### 知っておいたほうが良いこと
1.URLパラメータの値で記事のファイル名(拡張子なし)を指定します。  
`導入したSoruto BlogのURL?q=ファイル名(拡張子なし)`  
例:  
`https://sorutoproject.github.io/Soruto-Blog/?=sample`

2.URLパラメーターが設定されていないときは、  
`?q=home`
が指定されたものとして、home.mdが記事として読み込まれます。

このため、*home.md*は、ブログの**トップページを記述するファイル**になります。  
**最新の記事などのリンクなど**は、*home.md*に設置しておくことを推薦します。

### 他の記事へのリンクの設置
以下のようにすることで、Soruto Blogに投稿した他の記事へのリンクを設置できます。

`[サンプルリンク](?q=(articleディレクトリに投稿した記事のファイル名(**拡張子なし**))`  

例 (記事のファイル名はsample.md)

`[サンプルリンク](?q=sample)`  

### 記事のアップロード
**注意**:本ソフトウェアで使用する記事を書くには**MarkDown**の記述方法を知っておく必要があります。  
MarkDown(MD)の記述方法はネットに沢山情報がありますので、ここでは割愛します。


MarkDownで書いた記事のファイルをarticleディレクトリに転送します。  
それだけです。  

### 他のライブラリの使用について
* mdからHTMLへの変換は<a href="https://github.com/markedjs/marked" target="_blank">**marked.js**</a>を使用しています。
	* Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
	
* ソースコードのハイライト表示には<a href="http://highlightjs.org/" target="_blank">**highlight.js**</a>を使用しています。
	* Copyright (c) 2006, Ivan Sagalaev All rights reserved.
	
* 本ソフトウェアの著作権表示
	* (c)2018 Soruto Project(MIT License)
