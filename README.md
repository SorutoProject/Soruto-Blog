# Soruto-Blog
JavaScriptで構築された、ブログソフトウェア。

### Soruto Blogの特徴
* JavaScriptで構築されているため、高速に記事を読み込みできます。
* サーバーへの負荷が少ないブログソフトウェアです。
* PHPが利用できないサーバーでも利用できます。

### 導入(インストール)方法

1.[Release](https://github.com/SorutoProject/Soruto-Blog/releases){:target="_blank"}ページから**最新版**をダウンロードします。  
2.ダウンロードしたZIPもしくはtar.gzを展開します。  
3.展開されたファイルをサーバーの任意のディレクトリに転送します。

### 知っておいたほうが良いこと
1.URLパラメータの値で記事のファイル名を指定します。  
`http://example.com/?q=ファイル名`

2.URLパラメーターが設定されていないときは、  
`http://example.com/?q=home`
が指定されたものとして、home.mdが開かれます。

このため、*home.md*は、ブログの**トップページを記述するファイル**になります。  
**最新の記事などのリンクなど**は、*home.md*に設置しておくことを推薦します。

### ある記事から他の記事へのリンクの設置方法
以下のようにすることで、Soruto Blogに投稿した他の記事へのリンクを設置できます。

`[サンプルリンク](?q=(articleディレクトリに投稿した記事のファイル名(**拡張子なし**))`  

例 (記事のファイル名はsample.md)

`[サンプルリンク](?q=sample)`  

### 記事のアップロード方法
**注意**:本ソフトウェアで使用する記事を書くには**MarkDown**の記述方法を知っておく必要があります。  
MarkDown(MD)の記述方法はネットに沢山情報がありますので、ここでは割愛します。


MarkDownで書いた記事のファイルをarticleディレクトリに転送します。  
それだけです。  

### 他のライブラリの使用について
 * mdからHTMLへの変換は[**marked.js**](https://github.com/markedjs/marked){:target="_blank"}を使用して行っています。
 
(c)2018 Soruto Project  
This app is licensed under the MIT License.
