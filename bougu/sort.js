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
i.value = "名前",i.title = "Sort by Name";
dt.appendChild(i.cloneNode(false));
tH.cells[0].appendChild(dt);
if (armorCK) {
	//防御ソート
	i.value = "防御",i.title = "Sort by Defense";
	dt.appendChild(i.cloneNode(false));
	//レア制限
	s.title = "Filter by Rarity";
	selectSet(s,["Rarity","11","10","9","8","7","6","5","4","3","2","1"]);
	s.selectedIndex = 0;
	dt.appendChild(s.cloneNode(true));
	var ckRare_F = function (e) {
		return e === "Rarity" ? function(){return true} : function (cell) {return +cell.firstChild.nodeValue <= e};
	};
	//耐性ソート
	s.style.display = "none",s.title = "Sort by Resistances";
	selectSet(s,["Res","Fire","Water","Thunder","Ice","Dragon"]);
	tH.cells[3].appendChild(s.cloneNode(true));
	//スロ制限
	s.title = "Sort by Slot";
	selectSet(s,["Slot","3","2","1"]);
	tH.cells[5].removeChild(tH.cells[5].childNodes.item(1));
	tH.cells[5].appendChild(s.cloneNode(true));
	var ckSlot_F = function (e) {
		return e === "Slot" ? function(){return true} : function (cell) {return cell.lastChild.nodeValue.split("/")[1] >= e;};
	};
} else { //装飾品
	//G制限
	s.title = "GR Sort";
	selectSet(s,["GR","GX","GF","G"]);
	s.selectedIndex = 0;
	if (location.pathname.indexOf("deco.htm") === -1) s.style.display = "none";
	dt.appendChild(s.cloneNode(true));
	var ckGr_F = function (e) {
		return e === "GR" ? function(){return true} : 
				e === "GX" ? function (cell) {return cell.firstChild.nodeValue.indexOf("GN GX") !== -1 || cell.firstChild.nodeValue.indexOf("BM GX") !== -1;} :
				e === "GF" ? function (cell) {return cell.firstChild.nodeValue.indexOf("GN GF") !== -1 || cell.firstChild.nodeValue.indexOf("BM GF") !== -1;} :
							function (cell) {return cell.firstChild.nodeValue.indexOf("GN G") !== -1 || cell.firstChild.nodeValue.indexOf("BM G") !== -1;};
	};
	//素材絞りこみ
	var dt = document.createElement("div"),
		i = document.createElement("input");
	i.type = "text",i.title = "Filter by Material";
	dt.appendChild(i.cloneNode(false));
	i.type = "button",i.value = "Search",i.title = "Filter by Material";
	dt.appendChild(i.cloneNode(false));
	tH.cells[7].appendChild(dt);
	var ckSozai_F = function (e) {
		return e === "" ? function(){return true} : function (cell) {return cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf(e) !== -1;}
	};
}
//スキル制限
s.style.display = "block",s.title = "Sort by Skill";
if (location.pathname.indexOf("deconk") !== -1) {
	selectSetGroup(s,[
	["Skill",["Selection"]],
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
	selectSet(s,["Selection"]);
	s.style.display = "none";
} else {
	selectSetGroup(s,[
	["Skill",["Selection"]],
	["Attack",["Strong Attack","Attack","Lone Wolf","Issen","Expert","Crit Conversion","Exploit Weakness","Stylish Assault","Dissolver","Status Assault","Drug Knowledge","Status Attack","Abnormality","Fire Attack","Water Attack","Thunder Attack","Ice Attack","Dragon Attack","Elemental Attack","Bomb Boost","Gunnery","Encourage","Flute Expert","Taijutsu","Survivor","Rage","Adrenaline","Skilled","Trained","Fasting","Focus","Charge Attack Up","Weapon Handling","Shiriagari","Adaptation","Combat Supremacy","Vigorous","Thunder Clad","Lavish Attack","Obscurity","Rush","Ceaseless","Point Breakthrough","Furious","Determination"]],
	["Defense",["Vitality","Reflect","Defense","Fortification","Guard","Auto-Guard","Breakout"]],
	["Health・Stam",["Health","Recovery Speed","Recovery","Vampirism","Herbal Science","Stamina Recovery","Hunger","Stamina","Eating","Gluttony"]],
	["Blade",["Sharpening","Sharpness","Stylish","Edgemaster","Artisan","Bomb Sword","Poison Sword","Para Sword","Sleep Sword","Fire Sword","Water Sword","Thunder Sword","Ice Sword","Dragon Sword","SnS Tech","DS Tech","GS Tech","LS Tech","Hammer Tech","HH Tech","Lance Tech","GL Tech","Switch Axe tech","Tonfa Tech","MS Tech","Fencing","Sword God"]],
	["Gunner",["Steady Hand","Normal Shot Up","Pierce Shot Up","Pellet Shot Up","Normal Shot Add","Pierce Shot Add","Pellet Shot Add","Crag Shot Add","Cluster Shot Add","Poison Coating Add","Para Coating Add","Sleep Coating Add","Mounting","Gentle Shot","Loading","Rapid Fire","Auto-Reload","Reload","Recoil","Critical Shot","Precision","Ammo Combiner","Bullet Saver","Sniper","Spacing","HBG Tech","LBG Tech","Bow Tech"]],
	["Status",["Poison","Paralysis","Sleep","Status Res","Stun","Deoderant","Snowball Res","Vocal Chords","Def Lock","Sobriety","Blast Resistance","Magnetic Res","Crystal Res","Freeze Res"]],
	["Res",["All Res Up","Fire Res","Water Res","Ice Res","Thunder Res","Dragon Res"]],
	["Protection",["Three Worlds","Hearing Protection","Quake Res","Wind Pressure","Anti-Theft","Heat Res","Cold Res","Light Tread","Terrain","Evasion Boost","Evasion","Evade Distance","Passive","Protection","Guts","Absolute Defense"]],
	["Item・Combo",["Combo Expert","Everlasting","Wide-Area","Whim","Throwing","Strong Arm","Hunter","Cooking","Fish","Combining","Alchemy","Speed Setup","Iron Arm","Knife Throwing"]],
	["MAP System",["Map","Psychic","Stealth","Incitement"]],
	["Gathering",["Backpacking","Gathering Speed","Gather","Carving","Mindfulness"]],
	["Reward",["Fate","Monster","Pressure"]],
	["Other",["Breeder","Bond","Inspiration","Capture Proficiency","Relief","Caring","Movement Speed","Reinforcement","Assistance","Grace","Compensation","Dark Pulse","Blazing Grace","Drawing Arts","Ice Age"]]
	]);
}
tH.cells[4].appendChild(s.cloneNode(true));
tH.cells[4].appendChild(s.cloneNode(true));
var ckSkill_F = function (e) {
	return e === "Selection" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf(">"+e+"<") !== -1;};
	};
//辿異制限
if (armorCK || location.pathname.indexOf("decocz") !== -1) {
	s = document.createElement("select");
	s.title = "Sort by Zenith Skill";
	selectSet(s,["Zenith Skill","Skill Slots Up","Crit Conversion Up","Stylish Assault Up","Dissolver Up","Thunder Clad Up","Ice Age Up","Hearing Protection Up","Wind Res Up","Quake Res Up","Poison Res Up","Para Res Up","Sleep Res Up","Vampirism Up","Drug Knowledge Up","Assistance Up","Bullet Saver Up","Guard Up","Adaptation Up","Encourage Up","Reflect Up","Stylish Up","Vigorous Up","Obscurity Up","Soul Up","Ceaseless Up","Rush Up"]);
	tH.cells[4].appendChild(s.cloneNode(true));
	var ckTeni_F = function (e) {
		return e === "Zenith Skill" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf("「"+e) !== -1;};
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
		case "Sort by Name":
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
		case "Sort by Defence":
			for (var i = 0; i < N; x[i] = [tr[i].cells[5].lastChild.nodeValue.split("/")[0]], x[i].row=tr[i++]);
			x.sort(function(a, b){return b - a});
			for (var i = 0; i < N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		}
	}
});
}, 32);
