# Soruto Blog
JavaScriptで構築された、ブログソフトウェア。
## 目次
* [Soruto Blogの特徴](#soruto-blogの特徴)
* [導入(インストール)](#導入インストール)
* [URLパラメータ](#urlパラメータ)
* [他の記事へのリンクの設置](#他の記事へのリンクの設置)
* [記事の作成](#記事の作成)
* [記事のアップロード](#記事のアップロード)
* [設定ファイルについて](#設定ファイルについて)
* [著作権表示](#著作権表示)

### Soruto Blogの特徴
* 記事はMarkdownで記述します。
* JavaScriptで構築されているため、高速に記事を読み込みできます。
* サーバーへの負荷が少ないブログソフトウェアです。
* PHPが利用できないサーバーでも利用できます。

### 導入(インストール)

A.**ダウンロードとサーバーへの転送**  
1.<a href="https://github.com/SorutoProject/Soruto-Blog/archive/master.zip" target="_blank">ここをクリックして</a>ダウンロードします。  

2.ダウンロードしたZIPもしくはtar.gzを展開します。  

3.展開されたファイル(README.mdとLICENSEを除く)やディレクトリをサーバーの任意のディレクトリに転送します。

**B.ブログ名の設定**  
4.サーバーのSoruto Blogを転送したフォルダにある *index.html* を開きます。  

5.index.htmlの3行目にある

```
<title>Soruto Blog</title>
```

を自分のブログ名に変更します。  
	例えば、ブログ名を **Soruto Blog 公式ブログ** にしたい場合は、

```
<title>Soruto Blog 公式ブログ</title>
```

とします。

6.index.htmlの14行目にある
```
<b>Soruto Blog</b>
```

を手順5のように書き換えます。

以上で導入は完了です。

### URLパラメータ
1.URLパラメータの値で記事のファイル名(拡張子なし)を指定します。  
`(導入したSoruto BlogのURL)?q=ファイル名(拡張子なし)`  
例:  
`https://sorutoproject.github.io/Soruto-Blog/?q=sample`

2.URLパラメーターが設定されていないときは、  
`?q=home`
が指定されたものとして、home.mdが記事として読み込まれます。

このため、*home.md*は、ブログの**トップページを記述するファイル**になります。  
**最新の記事などのリンクなど**は、*home.md*に設置しておくことを推薦します。

### 他の記事へのリンクの設置
以下のようにすることで、Soruto Blogに投稿した他の記事へのリンクを設置できます。

`[サンプルリンク](?q=(articlesディレクトリに投稿した記事のファイル名(**拡張子なし**))`  

例 (記事のファイル名はsample.md)

`[サンプルリンク](?q=sample)`  
### 記事の作成
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
Soruto Blogのインストールフォルダにある、「articles」フォルダに転送します。

これで完了です。

### 記事のアップロード
**注意**:本ソフトウェアで使用する記事を書くには**MarkDown**の記述方法を知っておく必要があります。  
MarkDown(MD)の記述方法はネットに沢山情報がありますので、ここでは割愛します。


MarkDownで書いた記事のファイルをarticlesディレクトリに転送します。  
それだけです。  

### 設定ファイルについて
configディレクトリ内にある、config.jsは、Soruto Blogの挙動を設定できるファイルです。  
デフォルト(2018年7月3日)現在では以下のようになっています。
```
var config = {
	highLight:true,
	backtoTopButton:500,
	async:false,
	publish:false
};
```
config変数内の値は、JSON形式で設定してください。

なお、config.jsに、文法上のエラーがあると、**Soruto Blogが動作しなくなる可能性**がありますので、  
変更するときは注意してください。

**オプション一覧**

|オプション|種類|デフォルト|説明|
|---|---|---|---|
|highLight|Boolean|true|シンタックスハイライトを有効にするか設定します。<br>値を`true`にすると、有効になります。|
|backtoTopButton|Number|500|どれくらいスクロールしたら記事の先頭へ<br>戻るボタンを表示するか設定します。<br>値を`false`にすると、非表示になります。|
|async|Boolean|false|ブログ内リンクをクリックしたときに非同期で読み込むかを設定します。<br>値を`true`にすると有効になります<br>※β版機能のため、バグが含まれる可能性があります|
|publish|Boolean|false|このオプションを`false`にすると、ブログは非公開モードになります。<br>非公開モードでは、一切記事を閲覧できなくなるので、<br>ブログを非公開にしたい時以外は`true`にしておいてください。|

---

### 著作権表示
* mdからHTMLへの変換は<a href="https://github.com/markedjs/marked" target="_blank">**marked.js**</a>を使用しています。
	* Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)

* ソースコードのハイライト表示には<a href="http://highlightjs.org/" target="_blank">**highlight.js**</a>を使用しています。  
	* Copyright (c) 2006, Ivan Sagalaev All rights reserved.(BSD License)

* Soruto Blog 管理ツールのMDエディタには、<a href="http://codemirror.net/" target="_blank">**CodeMirror**</a>を使用しています
	* Copyright (C) 2017 by Marijn Haverbeke <marijnh@gmail.com> and others(MIT License)

* 本ソフトウェアの著作権表示
	* Copyright (c) 2018 Soruto Project(MIT License)
