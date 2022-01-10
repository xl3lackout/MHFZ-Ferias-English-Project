<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="ja">
<head>
<meta http-equiv="content-type" content="text/html; charset=shift_jis">
<meta http-equiv="content-style-type" content="text/css">
<meta http-equiv="content-script-type" content="text/javascript">
<link href="css\bbs.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
<!--
function popup(url) {
	window.open(url, "notice", "width=550,height=480,scrollbars=1");
}
// -->
</script>
<title>掲示板</title>
</head>
<body>
<div align="center">
<h1>掲示板</h1>
<hr width="95%">
[<a href="..\index.html" target="_top">トップに戻る</a>]
[<a href="#msg">新規投稿</a>]
[<a href="wforum-1.cgi?mode=relate&job=new">新着表示</a>]

[<a href="wforum-2.cgi?mode=find">ワード検索</a>]
[<a href="wforum-3.cgi?mode=note" target="notice" onclick="popup('./wforum.cgi?mode=note')">留意事項</a>]
[<a href="admin.cgi">管理用</a>]
<hr width="95%">
<table>
<tr>
	<td>
		・ 48時間以内の記事は <font color="#ff3300">new!</font> で表示されます。<br>
		・ ツリー先頭部の ▼ をクリックすると関連記事を一括表示します。
	</td>
</tr>
</table>
</div>

<dl>
<ul>
<dt class="p"><a href="wforum-215.cgi?mode=relate&no=1&page=80">▼</a> - <a href="wforum-216.cgi?mode=read&no=1&reno=no&oya=1&page=80#1">いつの間にか</a> - <b>小部屋愛好家</b> 18/08/04-21:44 <font color="#008000">No.1</font> 
<ul>
<li><a href="wforum-217.cgi?mode=read&no=2&reno=1&oya=1&page=80#2">良き事ですね♪</a> - <b>白饅頭娘。</b> 18/08/06-19:29 <font color="#008000">No.2</font> 
<li><a href="wforum-218.cgi?mode=read&no=4&reno=1&oya=1&page=80#4">Re: いつの間にか</a> - <b>フェリアス</b> 18/08/12-20:36 <font color="#008000">No.4</font> 
</li></li></ul>
<dt class="p"><a href="wforum-219.cgi?mode=relate&no=3&page=80">▼</a> - <a href="wforum-220.cgi?mode=read&no=3&reno=no&oya=3&page=80#3">これからも</a> - <b>アイマール</b> 18/08/10-16:32 <font color="#008000">No.3</font> 
</dt></dt></ul>
</dl>


<blockquote>| <a href="wforum-82.cgi?page=0">1</a>
| <a href="wforum-29.cgi?page=10">2</a>
| <a href="wforum-30.cgi?page=20">3</a>
| <a href="wforum-31.cgi?page=30">4</a>
| <a href="wforum-32.cgi?page=40">5</a>
| <a href="wforum-33.cgi?page=50">6</a>
| <a href="wforum-34.cgi?page=60">7</a>
| <a href="wforum-35.cgi?page=70">8</a>
| <b>9</b>
|
</blockquote>

<hr width="95%">
<a name="msg" id="msg"></a>
<form action="./regist.cgi" method="post" enctype="multipart/form-data">
<input type="hidden" name="mode" value="regist">
<input type="hidden" name="no" value="new">
<blockquote>
<h4>メッセージをどうぞ…</h4>
<table border="0" cellspacing="0" cellpadding="1">
<tr>
	<td nowrap=""><b>おなまえ</b></td>
	<td><input type="text" name="name" size="28" value="" maxlength="15"></td>
</tr><tr>
	<td nowrap=""><b>Ｅメール</b></td>
	<td><input type="text" name="email" size="28" value="">
		<select name="smail">
		<option value="0">表示
<option value="1">非表示

		</select>
	</td>
</tr><tr>
	<td nowrap=""><b>タイトル</b></td>
	<td><input type="text" name="sub" size="40" value="" maxlength="20"></td>
</tr><tr>
	<td colspan="2"><b>メッセージ</b><br>
	<textarea name="message" rows="8" cols="62"></textarea>
	</td>
</tr><tr>
	<td nowrap=""><b>参照先</b></td>
	<td><input type="text" name="url" size="60" value="http://"></td>
<!-- image_begin -->
</tr><tr>
	<td nowrap=""><b>画像UP</b></td>
	<td><input type="file" name="upfile" size="50"></td>
<!-- image_end -->
</tr><tr>
	<td nowrap=""><b>暗証キー</b></td>
	<td class="small"><input type="password" name="pwd" size="8" value="" maxlength="8"> （英数字で8文字以内）</td>
<!-- captcha_begin -->
</tr><tr>
	<td nowrap=""><b>投稿キー</b></td>
	<td class="small"><input type="text" name="captcha" size="8" style="ime-mode:inactive" value="" maxlength="8">
		（右画像の数字を入力）
		<img src="captcha-23.cgi?c7219070747e69554a1114b34bc5b447" class="capt" alt="投稿キー">
		<input type="hidden" name="str_crypt" value="c7219070747e69554a1114b34bc5b447">
	</td>
<!-- captcha_end -->
</tr>
</table>
<br>
<input type="submit" value="投稿する" class="btn">
</form>
</blockquote>
<hr width="95%">
<div align="center">
<form action="./regist.cgi" method="post">
<span class="num">- 投稿記事修正/削除フォーム -</span><br>
処理 <select name="mode">
<option value="user_edit">修正
<option value="user_dele">削除
</select>
No <input type="text" name="num" size="4" style="ime-mode:inactive">
暗証キー <input type="password" name="pwd" size="6">
<input type="submit" value="送信"></form>
<hr width="95%">
</div>
<p style="margin-top:2.5em;text-align:center;font-family:Verdana,Helvetica,Arial;font-size:10px;">
- <a href="http://www.kent-web.com/" target="_top">WebForum</a> -
</p>
</body>
</html>

