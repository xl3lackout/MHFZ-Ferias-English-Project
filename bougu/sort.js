setTimeout(function (){
/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
//イベントセット
var addEvent = function (elm, type, func) {
	//追加
	elm./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//アンロードで削除
	window./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@cc_on @if (true) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
};
//リストセット
var selectSet = function(e,v) {
	var m = v.length;
	/*@if (@_jscript_version < 9)
	e.options.length = m;
	for (var i = 0; i < m; e.options[i].value = e.options[i].text = v[i++]);
	@else@*/
	e.length = 0;
	for (var i = 0,o; i < m; i++){
		o = document.createElement("option");
		o.setAttribute("value", v[i]);
		o.appendChild(document.createTextNode(v[i]));
		e.appendChild(o.cloneNode(true));
	}
	/*@end@*/
};
var selectSetGroup = function(e,v) {
	var m = v.length;
	e.length = 0;
	for (var j = 0,g; j < m; j++){
		g = document.createElement("optgroup");
		g.label = v[j][0];
		var w = v[j][1], n = w.length;
		for (var i = 0,o; i < n ;i++){
			o = document.createElement("option");
			o.setAttribute("value", w[i]);
			o.appendChild(document.createTextNode(w[i]));
			g.appendChild(o.cloneNode(true));
		}
		e.appendChild(g.cloneNode(true));
	}
};

//HTMLにボタン追加

//初期設定
var armorCK = location.pathname.indexOf("deco") === -1,
	tH = document.getElementsByTagName("thead")[0].rows[0],
	dt = document.createElement("div"),
	i = document.createElement("input"),
	s = document.createElement("select");
dt.className = "m",i.type = "button";
//名称ソート
i.value = "名前",i.title = "名前順にソート";
dt.appendChild(i.cloneNode(false));
tH.cells[0].appendChild(dt);
if (armorCK) {
	//防御ソート
	i.value = "防御",i.title = "防御順にソート";
	dt.appendChild(i.cloneNode(false));
	//レア制限
	s.title = "レアで絞込み";
	selectSet(s,["ﾚｱ","11","10","9","8","7","6","5","4","3","2","1"]);
	s.selectedIndex = 0;
	dt.appendChild(s.cloneNode(true));
	var ckRare_F = function (e) {
		return e === "ﾚｱ" ? function(){return true} : function (cell) {return +cell.firstChild.nodeValue <= e};
	};
	//耐性ソート
	s.style.display = "block",s.title = "耐性順にソート";
	selectSet(s,["順","火","水","雷","氷","龍"]);
	tH.cells[3].appendChild(s.cloneNode(true));
	//スロ制限
	s.title = "スロットで絞込み";
	selectSet(s,["ｽﾛ","3","2","1"]);
	tH.cells[5].removeChild(tH.cells[5].childNodes.item(1));
	tH.cells[5].appendChild(s.cloneNode(true));
	var ckSlot_F = function (e) {
		return e === "ｽﾛ" ? function(){return true} : function (cell) {return cell.lastChild.nodeValue.split("/")[1] >= e;};
	};
} else { //装飾品
	//G制限
	s.title = "GRで絞込み";
	selectSet(s,["GR","GX","GF","G"]);
	s.selectedIndex = 0;
	if (location.pathname.indexOf("deco.htm") === -1) s.style.display = "none";
	dt.appendChild(s.cloneNode(true));
	var ckGr_F = function (e) {
		return e === "GR" ? function(){return true} : 
				e === "GX" ? function (cell) {return cell.firstChild.nodeValue.indexOf("射珠GX") !== -1 || cell.firstChild.nodeValue.indexOf("剣珠GX") !== -1;} :
				e === "GF" ? function (cell) {return cell.firstChild.nodeValue.indexOf("射珠GF") !== -1 || cell.firstChild.nodeValue.indexOf("剣珠GF") !== -1;} :
							function (cell) {return cell.firstChild.nodeValue.indexOf("射珠Ｇ") !== -1 || cell.firstChild.nodeValue.indexOf("剣珠Ｇ") !== -1;};
	};
	//素材絞りこみ
	var dt = document.createElement("div"),
		i = document.createElement("input");
	i.type = "text",i.title = "素材で絞込み";
	dt.appendChild(i.cloneNode(false));
	i.type = "button",i.value = "絞込み",i.title = "素材で絞込み";
	dt.appendChild(i.cloneNode(false));
	tH.cells[7].appendChild(dt);
	var ckSozai_F = function (e) {
		return e === "" ? function(){return true} : function (cell) {return cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf(e) !== -1;}
	};
}
//スキル制限
s.style.display = "block",s.title = "スキルで絞込み";
if (location.pathname.indexOf("deconk") !== -1) {
	selectSetGroup(s,[
	["スキル",["選択"]],
	["攻撃系",["攻撃","会心","度胸","火属性強化","水属性強化","雷属性強化","氷属性強化","龍属性強化","剣術","心眼術","貫通投擲","特大投擲","麻痺攻撃","睡眠攻撃","毒攻撃","特殊攻撃"]],
	["防御系",["防御","反射神経","反射術"]],
	["体力・スタミナ系",["体力"]],
	["状態異常系",["毒","麻痺","睡眠","気絶"]],
	["耐性系",["全耐性","火耐性","水耐性","雷耐性","氷耐性","龍耐性"]],
	["保護系",["防音","耐震","風圧","胆力"]],
	["アイテム・調合系",["鬼人笛術","回復笛術","硬化笛術","痺罠術"]],
	["報酬系",["運"]],
	["その他系",["復帰力","発奮術","激励術","絆術","移動速度"]]
	]);
} else if (location.pathname.indexOf("decotk") !== -1 || location.pathname.indexOf("decotf") !== -1) {
	selectSet(s,["選択"]);
	s.style.display = "none";
} else {
	selectSetGroup(s,[
	["スキル",["選択"]],
	["攻撃系",["剛撃","攻撃","一匹狼","一閃","達人","閃転","痛撃","巧撃","属撃","変撃","劇物の心得","特殊攻撃","怪奇","火属性攻撃","水属性攻撃","雷属性攻撃","氷属性攻撃","龍属性攻撃","属性攻撃","爆弾強化","砲術師","鼓舞","笛吹き名人","体術","逆境","怒","底力","腕利き","手練","断食","溜め短縮","溜め威力","武器捌き","尻上がり","適応撃","闘覇","血気活性","纏雷","贅撃","雌伏","猛進","幕無","一点突破","獅子奮迅","不退"]],
	["防御系",["生命力","反射","防御","要塞","ガード性能","自動防御","とんずら"]],
	["体力・スタミナ系",["体力","回復速度","回復","吸血","薬草学","気力回復","はらへり","スタミナ","食事","食いしん坊"]],
	["剣士系",["研ぎ師","斬れ味","巧流","刀匠","匠","爆撃剣","猛毒剣","麻痺剣","睡眠剣","火炎剣","水激剣","雷神剣","氷結剣","龍王剣","片手剣技","双剣技","大剣技","太刀技","鎚技","狩猟笛技","槍技","銃槍技","剣斧技","穿龍棍技","磁斬鎚技","剣術","剣神"]],
	["ガンナー系",["射手","通常弾強化","貫通弾強化","散弾強化","通常弾追加","貫通弾追加","散弾追加","榴弾追加","拡散弾追加","毒瓶追加","麻痺瓶追加","睡眠瓶追加","装着","穏射","装填数","速射","連射","装填","反動","扇射","精密射撃","弾調合","弾丸節約術","狙撃","空隙","重銃技","軽銃技","弓技"]],
	["状態異常系",["毒","麻痺","睡眠","耐状態異常","気絶","脱臭","耐雪","声帯","対防御DOWN","耐酔","爆破耐性","磁力耐性","結晶耐性","凍結耐性"]],
	["耐性系",["全耐性ＵＰ","火耐性","水耐性","氷耐性","雷耐性","龍耐性"]],
	["保護系",["三界の護り","聴覚保護","耐震","風圧","盗み無効","耐暑","耐寒","警戒","地形","超回避","回避性能","回避距離","受け身","審判","根性","絶対防御"]],
	["アイテム・調合系",["調合師","効果持続","広域","気まぐれ","投擲","強肩","狩人","肉焼き","釣り","調合成功率","錬金術","高速設置","鉄腕","ナイフ使い"]],
	["MAP探知系",["地図","千里眼","気配","煽動"]],
	["採取運搬系",["運搬","高速収集","採取","剥ぎ取り","平常心"]],
	["報酬系",["運気","モンスター","圧力"]],
	["その他系",["ブリーダー","絆","ひらめき","捕獲上手","救援","いたわり","移動速度","喝","支援","恩寵","代償","黒ノ命脈","炎寵","抜納術","氷界創生"]]
	]);
}
tH.cells[4].appendChild(s.cloneNode(true));
tH.cells[4].appendChild(s.cloneNode(true));
var ckSkill_F = function (e) {
	return e === "選択" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf(">"+e+"<") !== -1;};
	};
//辿異制限
if (armorCK || location.pathname.indexOf("decocz") !== -1) {
	s = document.createElement("select");
	s.title = "辿異で絞込み";
	selectSet(s,["辿異","スキル枠拡張","閃転強化","巧撃強化","属撃強化","纏雷強化","氷界創生強化","耳栓強化","風圧強化","耐震強化","耐毒強化","耐麻痺強化","耐睡眠強化","吸血強化","劇物強化","支援強化","弾丸節約術強化","ガード性能強化","適応撃強化","鼓舞強化","反射強化","巧流強化","血気活性強化","雌伏強化","喝強化","幕無強化","猛進強化"]);
	tH.cells[4].appendChild(s.cloneNode(true));
	var ckTeni_F = function (e) {
		return e === "辿異" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf("「"+e) !== -1;};
		};
}
tH=dt=i=s=null;

//フィルター
if (armorCK) {
	//防具
	var filter = function () {
		var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
			tr = document.getElementsByTagName("tbody")[0].rows, 
			N = tr.length,
			ckRare = ckRare_F(s[0].value),
			ckSkill1 = ckSkill_F(s[2].value),
			ckSkill2 = ckSkill_F(s[3].value),
			ckTeni = ckTeni_F(s[4].value),
			ckSlot = ckSlot_F(s[5].value);
		for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckRare(cel[2]) && ckSkill1(cel[4]) && ckSkill2(cel[4]) && ckTeni(cel[4]) && ckSlot(cel[5]) ? "" : "none";
		}
	var taisort = function () {
		var s1 = document.getElementsByTagName("thead")[0].getElementsByTagName("select")[1].selectedIndex;
		if (!s1) return false;
		s1--
		
		var marker = document.createElement("tbody"),
			tB = document.getElementsByTagName("tbody")[0],
			tr = tB.rows,
			N = tr.length,
			x = [];
		for (var i = 0; i  <N; i++) {
			x[i] = tr[i].style.display ? [0] : [+tr[i].cells[3].childNodes[s1*2].nodeValue.substring(2)];
			x[i].row = tr[i];
		}
		x.sort(function(a, b){return b - a});
		for (var i = 0; i < N; marker.appendChild(x[i++].row));
		tB.parentNode.replaceChild( marker,tB );
		}
} else if (location.pathname.indexOf("decocz") !== -1) {
	//装飾品
	var filter = function () {
		var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
			i = document.getElementsByTagName("thead")[0].getElementsByTagName("input"),
			tr = document.getElementsByTagName("tbody")[0].rows,
			N = tr.length;
			ckGr = ckGr_F(s[0].value),
			ckSkill1 = ckSkill_F(s[1].value),
			ckSkill2 = ckSkill_F(s[2].value),
			ckTeni = ckTeni_F(s[3].value),
			ckSozai = ckSozai_F(i[1].value);
		for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckGr(cel[0]) && ckSkill1(cel[4]) && ckSkill2(cel[4]) && ckTeni(cel[4]) && ckSozai(cel[7]) ? "" : "none";
		}
} else {
	//装飾品
	var filter = function () {
		var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
			i = document.getElementsByTagName("thead")[0].getElementsByTagName("input"),
			tr = document.getElementsByTagName("tbody")[0].rows,
			N = tr.length;
			ckGr = ckGr_F(s[0].value),
			ckSkill1 = ckSkill_F(s[1].value),
			ckSkill2 = ckSkill_F(s[2].value),
			ckSozai = ckSozai_F(i[1].value);
		for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckGr(cel[0]) && ckSkill1(cel[4]) && ckSkill2(cel[4]) && ckSozai(cel[7]) ? "" : "none";
		}
}

var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
if (armorCK) {
	addEvent(s[0],"change",filter);
	addEvent(s[1],"change",taisort);
	addEvent(s[2],"change",filter);
	addEvent(s[3],"change",filter);
	addEvent(s[4],"change",filter);
	addEvent(s[5],"change",filter);
	//防具
} else {
	//装飾品
	for (var i = 0,max = s.length; i < max; addEvent(s[i++],"change",filter));
	addEvent(document.getElementsByTagName("thead")[0].getElementsByTagName("input")[1],"change",filter);
}
s=null;

//イベント登録
addEvent(document,"click",
function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.tagName === "INPUT"){
		var marker = document.createElement("tbody"),
			tB = document.getElementsByTagName("tbody")[0],
			tr = tB.rows,
			N = tr.length,
			x = [];
		switch (t.title) {
		case "名前順にソート":
			var Fulltohalf = (function (){
				var han = "0123456789.,-+ABCDEFGHIJKLMNOPQRSTUVWXYZｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｧｨｨｩｩｪｪｫｫｯｯｬｬｭｭｮｮｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾊﾋﾌﾍﾎﾊﾋﾌﾍﾎｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾊﾋﾌﾍﾎﾊﾋﾌﾍﾎｳ";
				var zen = "０１２３４５６７８９．，－＋ＡＢＣＤＥＦＪＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁァぃィぅゥぇェぉォっッゃャゅュょョがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽガギグゲゴザジズゼゾダジヅデドバビブベボパピプペポヴ";
				return function (strVal) {
					for (var i = 0,str = "",m = strVal.length,c,n; i<m; i++){
						c = strVal.charAt(i),n = zen.indexOf(c,0);
						str += n >= 0 ? han.charAt(n) : "ﾞ" + c;
					}
					return str;
				}
			})();
			for (var i = 0; i < N; x[i] = [Fulltohalf(tr[i].cells[0].firstChild.nodeValue)], x[i].row=tr[i++]);
			x.sort();
			for (var i = 0; i < N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		case "防御順にソート":
			for (var i = 0; i < N; x[i] = [tr[i].cells[5].lastChild.nodeValue.split("/")[0]], x[i].row=tr[i++]);
			x.sort(function(a, b){return b - a});
			for (var i = 0; i < N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		}
	}
});
}, 32);
