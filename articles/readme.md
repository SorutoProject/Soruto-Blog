# Soruto-Blog
JavaScriptで構築された、ブログソフトウェア。
## 目次
* [Soruto Blogの特徴](#feature)
* [導入(インストール)](#install)
* [知っておいたほうが良いこと](#URL)
* [他の記事へのリンクの設置](#link)
* [記事の作成](#make)
* [記事のアップロード](#upload)
* [設定ファイルについて](#config)
* [著作権表示](#copylight)
### feature
* 記事はMarkdownで記述します。
* JavaScriptで構築されているため、高速に記事を読み込みできます。
* サーバーへの負荷が少ないブログソフトウェアです。
* PHPが利用できないサーバーでも利用できます。

### install

1.<a href="https://github.com/SorutoProject/Soruto-Blog/releases" target="_blank">Release</a>ページから**最新版**をダウンロードします。  
2.ダウンロードしたZIPもしくはtar.gzを展開します。  
3.展開されたファイル(README.mdとLICENSEを除く)やディレクトリをサーバーの任意のディレクトリに転送します。

### URL
1.URLパラメータの値で記事のファイル名(拡張子なし)を指定します。  
`(導入したSoruto BlogのURL)?q=ファイル名(拡張子なし)`  
例:  
`https://sorutoproject.github.io/Soruto-Blog/?=sample`

2.URLパラメーターが設定されていないときは、  
`?q=home`
が指定されたものとして、home.mdが記事として読み込まれます。

このため、*home.md*は、ブログの**トップページを記述するファイル**になります。  
**最新の記事などのリンクなど**は、*home.md*に設置しておくことを推薦します。

### link
以下のようにすることで、Soruto Blogに投稿した他の記事へのリンクを設置できます。

`[サンプルリンク](?q=(articleディレクトリに投稿した記事のファイル名(**拡張子なし**))`  

例 (記事のファイル名はsample.md)

`[サンプルリンク](?q=sample)`  
### make
**注意**:本ソフトウェアで使用する記事を書くには**MarkDown**の記述方法を知っておく必要があります。  
MarkDown(MD)の記述方法はネットに沢山情報がありますので、ここでは割愛します。

1.**管理ツールを開く**

Ver.1.0.0から、Soruto Blog 管理ツールを追加しました。  
次のURLからアクセスできます。  
`(導入したSoruto BlogのURL)/manage`  
例:  
`https://sorutoproject.github.io/Soruto-Blog/manage`

2.**記事作成画面に移動**

トップ画面やメニューにある「記事を作成する」をクリックして記事作成画面に移動します。

3.**MarkDownを使って記事を書く**

`### ここにMarkDownで記事を書いてください`と書いてあるところがMDエディタです。  
MDエディタにMarkDown形式で入力して、記事を作成してください。  
作成中、MDエディタの下にあるプレビューに実際に表示したときのプレビューが表示されます。

4.**作成した記事をダウンロードする**

MDエディタの上にあるファイル名入力ボックスにファイル名(拡張子なし)を入力した後、  
「記事をダウンロード」ボタンをクリックして、記事をダウンロードします。

5.**ダウンロードした記事をアップロードする**

ダウンロードした記事ファイルを、  
Soruto Blogのインストールフォルダにある、「article」フォルダに転送します。

これで完了です。

### upload
**注意**:本ソフトウェアで使用する記事を書くには**MarkDown**の記述方法を知っておく必要があります。  
MarkDown(MD)の記述方法はネットに沢山情報がありますので、ここでは割愛します。


MarkDownで書いた記事のファイルをarticleディレクトリに転送します。  
それだけです。  

### config
configディレクトリ内にある、config.jsは、Soruto Blogの挙動を設定できるファイルです。  
デフォルト(Ver.1.0.0)現在では以下のようになっています。
```
var config = {
	highLight:true
};
```
config変数内の値は、JSON形式で設定してください。

なお、config.jsに、文法上のエラーがあると、**Soruto Blogが動作しなくなり可能性**がありますので、  
変更するときは注意してください。

**オプション一覧**

|オプション|種類|初期設定|説明|
|---|---|---|---|
|highLight|Boolean|true|シンタックスハイライトを有効にするか設定します。<br>値をtrueにすると、有効になります。|

---

### copyright
* mdからHTMLへの変換は<a href="https://github.com/markedjs/marked" target="_blank">**marked.js**</a>を使用しています。
	* Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
	
* ソースコードのハイライト表示には<a href="http://highlightjs.org/" target="_blank">**highlight.js**</a>を使用しています。  
	* Copyright (c) 2006, Ivan Sagalaev All rights reserved.(BSD License)
	
* 本ソフトウェアの著作権表示
	* (c)2018 Soruto Project(MIT License)
