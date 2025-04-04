//setTimeout
(function (){
/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
//イベントセット
var addEvent = function (elm, type, func) {
	//追加
	elm./*@if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//アンロードで削除
	window./*@if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@if (@_jscript_version < 9) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
};
//リストセット
var selectSet = function(e,v) {
	var m = v.length;
	/*@if (@_jscript_version < 9)
	e.options.length = m;
	for (var i = 0;i < m;e.options[i].value = e.options[i].text = v[i++]);
	@else@*/
	e.length = 0;
	for (var i = 0,o;i < m;i++){
		o = document.createElement("option");
		o.setAttribute("value", v[i]);
		o.appendChild(document.createTextNode(v[i]));
		e.appendChild(o.cloneNode(true));
	}
	/*@end@*/
};
var selectSet2 = function(e,t,v) {
	var m = v.length;
	/*@if (@_jscript_version < 9)
	e.options.length = m;
	for (var i = 0;i < m;e.options[i].value = v[i],e.options[i].text = t[i++]);
	@else@*/
	e.length = 0;
	for (var i = 0,o;i < m;i++){
		o = document.createElement("option");
		o.setAttribute("value", v[i]);
		o.appendChild(document.createTextNode(t[i]));
		e.appendChild(o.cloneNode(true));
	}
	/*@end@*/
};

//初期設定
var treeCK = document.getElementById("gun") === null
	ckG = location.pathname.indexOf("_g") !== -1,
	ckS = location.pathname.indexOf("_s") !== -1,
	ckGS = ckG || ckS ? 0 : 1,
	col = 4;

//HTMLにボタン追加
var tH = document.getElementsByTagName("thead")[0].rows[0],
	dt = document.createElement("div"),
	i = document.createElement("input"),
	s = document.createElement("select");
i.type = "button";
//名称ソート
i.value = "Name",i.title = "Sort by Name";
dt.appendChild(i.cloneNode(false));
//攻撃ソート
i.value = "Atk.",i.title = "Sort by Attack Value";
dt.appendChild(i.cloneNode(false));
//属性ソート
if (treeCK){
	i.value = "Elem.",i.title = "Sort by Element Value"; //,i.disabled = true
	dt.appendChild(i.cloneNode(false));
}
if (ckG) {
	//LV制限
	s.title = "Filter by Level";
	//selectSet(s,["Lv","全",50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]);
	selectSet(s,["Lv","All","Simple","50"]);
	s.selectedIndex = 0;
	dt.appendChild(s.cloneNode(true));
	var ckRare_F = function (e) {
		//return e === "Lv" || e === "All" ? function(){return true} : function (cell) {return cell.lastChild.firstChild.nodeValue === "Lv" + e;};
		return  e === "Lv" || e === "All" ? function(){return true} : 
				e === "Simple" ? function (cell) {return cell.lastChild.firstChild.nodeValue === "Lv1" || cell.lastChild.firstChild.nodeValue === "Lv50";} :
							function (cell) {return cell.lastChild.firstChild.nodeValue === "Lv" + e;};
	};
} else if (ckS) {
	//LV制限
	s.title = "Filter by Level";
	selectSet(s,["Lv","All","Simple","100"]);
	s.selectedIndex = 0;
	dt.appendChild(s.cloneNode(true));
	var ckRare_F = function (e) {
		return  e === "Lv" || e === "All" ? function(){return true} : 
				e === "Simple" ? function (cell) {return cell.lastChild.firstChild.nodeValue === "Lv1" || cell.lastChild.firstChild.nodeValue === "Lv100";} :
							function (cell) {return cell.lastChild.firstChild.nodeValue === "Lv" + e;};
	};
} else {
	//レア制限
	s.title = "Include rarity up to";
	selectSet(s,["Rarity","12","11","10","9","8","7","6","5","4","3","2","1"]);
	s.selectedIndex = 0;
	dt.appendChild(s.cloneNode(true));
	var ckRare_F = function (e) {
		return e === "Rarity" ? function(){return true} : function (cell) {return +cell.firstChild.nodeValue <= e && !cell.firstChild.nextSibling;};
	};
}
tH.cells[0].appendChild(dt);
if (treeCK){ //剣士弓
	if (location.pathname.indexOf("yumi") === -1) {
		//状態異常
		s.title = "Sort by Status";
		selectSet(s,["Status","None","Para","Sleep","Poison","Blast"]);
		dt.appendChild(s.cloneNode(true));
		var ckIzyo_F = function (e) {
			return	e === "Status" ? function(){return true} :
					e === "None"	? function (cell) {return !["Para","Sleep","Poison","Blast"].some(status => cell.textContent.includes(status));}
								: function (cell) {	return cell.textContent.lastIndexOf(e) !== -1;};
		};
	} else {
		//曲射
		s.title = "Sort by Shot Arc";
		selectSet(s,["Arc","Wide","Narrow","Bomb","Slicing"]);
		dt.appendChild(s.cloneNode(true));
		var ckIzyo_F = function (e) {
			return	e === "Arc" ? function(){return true} :
					e === "None"	? function (cell) {return !(/[散集裂断]/).test(cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/);}
								: function (cell) {return cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.lastIndexOf(e) !== -1;};
		};
	}
	//属性
	s.style.display = "block",s.title = "Sort by Element";
	selectSet(s,["Element","None","Fire","Water","Thunder","Dragon","Ice","Blaze","Light","Thunder Pole","Tenshou","Okiko","Black Flame","Music","Darkness","Crimson Demon","Wind","Sound","Burning Zero","Emperor's Roar"]);
	tH.cells[2].appendChild(s.cloneNode(true));
	tH.cells[2].childNodes.item(1).style.marginLeft = "0.5em";
	var ckZoku_F = function (e) {
		return	e === "Element" ? function(){return true} :
				e === "None"	? function (cell) {return !["Fire","Water","Thunder","Dragon","Ice","Blaze","Light","Thunder Pole","Tenshou","Okiko","Black Flame","Music","Darkness","Crimson Demon","Wind","Sound","Burning Zero","Emperor's Roar"].some(element => cell.textContent.includes(element));} :
				e === "Thunder"	? function (cell) {return cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.lastIndexOf("雷極") === -1 && cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.lastIndexOf(e) !== -1;}
							: function (cell) {return cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.lastIndexOf(e) !== -1;};
	};
	if (location.pathname.indexOf("gunlance") !== -1) {
		//ガンランス
		s.title = "Sort by Shot Type";
		selectSet(s,["Shot","Normal","Long","Spread"]);
		var ckKobetu_F = function (e) {
			return e === "Shot" ? function(){return true} : function (cell) {return cell.lastChild.firstChild.nodeValue.indexOf(e) !== -1;};
		};
	} else if (location.pathname.indexOf("horn") !== -1) {
		//狩猟笛
		s.title = "Sort by Melody";
		selectSet2(s,["Melody","White|Yellow|Red","White|Yellow|L.blue","White|D.Blue|Red","White|D.Blue|Yellow","White|Green|Red","White|Green|Yellow","White|Green|D.Blue","White|Green|L.Blue","White|L.Blue|Red","White|L.Blue|D.Blue","Purple|Yellow|Red","Purple|Yellow|L.Blue","Purple|D.Blue|Red","Purple|D.Blue|Yellow","Purple|L.Blue|Red","Purple|Green|Yellow","Purple|Green|D.Blue","Purple|Green|L.Blue","Purple|L.Blue|Red","Purple|L.Blue|D.Blue"],
					["Melody","321","327","341","342","351","352","354","357","371","374","621","627","641","642","651","652","654","657","671","674"]);
		var ckKobetu_F = function (e) {
			return e === "Melody" ? function(){return true} : function (cell) {return cell.lastChild.href.lastIndexOf(e) !== -1;};
		};
	} else if (location.pathname.indexOf("slaxe") !== -1) {
		//ガンランス
		s.title = "Sort by Phial";
		selectSet(s,["Phial","Power","Ele","Status","Stun"]);
		var ckKobetu_F = function (e) {
			return e === "Phial" ? function(){return true} : function (cell) {return cell.lastChild.firstChild.nodeValue.indexOf(e) !== -1;};
		};
	} else if (location.pathname.indexOf("yumi") !== -1) {
		//弓
		s.title = "Sort by Arrow Type";
		selectSet(s,["Arrow","1:Rpd","1:Spr","1:Prc","2:Rpd","2:Spr","2:Prc","3:Rpd","3:Spr","3:Prc","4:Rpd","4:Spr","4:Prc"]);
		col = 5; //位置補正用
		var ckKobetu_F = function (e) {
			return e === "Arrow" ? function(){return true} : function (cell) {return cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.lastIndexOf(e) !== -1;};
		};
	} else {
		s.title = "Sort by Length";
		selectSet(s,["Length","Very Long","Long","Medium","Short","Very Short","Special"]);
		var ckKobetu_F = function (e) {
			e = "："+e;
			return	e === "：Length" ? function(){return true} :
					e === "：Medium" ? function (cell) {return cell.lastChild./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf("Zenith Skill：") === -1 ?
															cell.lastChild./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ === "" :
															cell.lastChild.previousSibling./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ === "" ;}
								: function (cell) {return cell.lastChild./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf("Zenith Skill：") === -1 ?
															cell.lastChild./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf(e) !== -1 :
															cell.lastChild.previousSibling./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf(e) !== -1;};
		};
	}
	tH.cells[3].appendChild(s.cloneNode(true));
	//辿異制限
	s.title = "Sort by Zenith Skill";
	selectSet(s,["Zenith Skill","Skill Slots Up","C.Conversion Up","S.Assault Up","Dissolver Up","Thunder Clad Up","Ice Age Up","Earplugs Up","Wind Res Up","Quake Res Up","Posion Res Up","Para Res Up","Sleep Res Up","Vampirism Up","Drug Knowledge Up","Assistance Up","Bullet Saver Up","Guard Up","Adaptation Up","Encourage Up","Reflect Up","Stylish Up","Vigorous Up","Obscurity Up","Soul Up","Ceaseless Up","Rush Up"]);
	tH.cells[col-1].appendChild(s.cloneNode(true));
} else { //ガン
	dt = document.createElement("div");
	s.title = "Sort by Reload Speed"
	selectSet2(s,["Reload","Very Slow","Slow","Normal","Fast","Very Fast"],["0","0","1","2","3","4"]);
	dt.appendChild(s.cloneNode(true));
	s.title = "Sort by Recoil"
	selectSet2(s,["Recoil","Very Large","Large","Medium","Small","Smaller"],["0","0","1","2","3","4"]);
	dt.appendChild(s.cloneNode(true));
	s.title = "Sort by Bullet Speed"
	selectSet2(s,["Bullet Speed","Very Slow","Slow","Fast","Very Fast"],["0","1","2","3","4"]);
	dt.appendChild(s.cloneNode(true));
	dt.appendChild(document.createElement("br"));
	var ckGun_F = function (e1,e2,e3) {
		if (e1 === "0" && e2 === "0" && e3 === "0") {
			return function(){return true};
		} else {
			var wR = ["(Very Slow|Slow|Normal|Fast|Very Fast)","(Slow|Normal|Fast|Very Fast)","(Normal|Fast|Very Fast)","(Fast|Very Fast)","Very Fast"],
				wK = ["(Very Large|Large|Medium|Small|Smaller)","(Large|Medium|Small|Smaller)","(Medium|Small|Smaller)","(Small|Smaller)","Smaller"],
				wS = ["(Very Slow|Slow|Fast|Very Fast)","Very Slow","Slow","Fast","Very Fast"],
				reg = new RegExp("^" + wR[e1] + /*@if (@_jscript_version < 9) "\r\n" + /*@end@*/ wK[e2] + /*@if (@_jscript_version < 9) "\r\n" + /*@end@*/ wS[e3],"i");
			return function (cell) {return reg.test(cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/);};
		}
	};
	s.title = "Sort by Shot Type"
	selectSet(s,["Shot","Norm 1","Norm 1","Norm 2","Norm 3","Pierc1","Pierc2","Pierc3","Pelet1","Pelet2","Pelet3","Crag 1","Crag 2","Crag 3","Clust1","Clust2","Clust3","Psn  1","Psn  2","Para 1","Para 2","Slp  1","Slp  2","Flame","Water","Thund","Freez","Dragn","Paint","Recov","Demon","Armor"]);
	dt.appendChild(s.cloneNode(true));
	dt.appendChild(s.cloneNode(true));
	//辿異制限
	s.title = "Sort by Zenith Skill";
	selectSet(s,["Zenith Skill","Skill Slots Up","Crit Conversion Up","Stylish Assault Up","Dissolver Up","Thunder Clad Up","Ice Age Up","Hearing Protection Up","Wind Res Up","Quake Res Up","Poison Res Up","Para Res Up","Sleep Res Up","Vampirism Up","Drug Knowledge Up","Assistance Up"]);
	dt.appendChild(s.cloneNode(true));
	tH.cells[4].appendChild(dt);
	var ckTama_F = function (e1,e2) {
		if (e1 === "Shot" && e2 === "Shot") {
			return function(){return true};
		} else {
			var wT = [,"[0-9]+","(<u>|)([0-9]+|-)(</u>|)/[0-9]+","(<u>|)[0-9]+(</u>|)/(<u>|)[0-9]+(</u>|)/[0-9]"],
				reg1,reg2;
			if (e1 !== "Shot") reg1 = e1.length === 5 ? new RegExp(e1 + "：" + wT[1]) : new RegExp(e1.substring(0,5) + "：" + wT[e1.substring(5,6)],"i");
			if (e2 !== "Shot") reg2 = e2.length === 5 ? new RegExp(e2 + "：" + wT[1]) : new RegExp(e2.substring(0,5) + "：" + wT[e2.substring(5,6)],"i");

			if (e1 !== "Shot" && e2 !== "Shot") {
				return function (cell) {return reg1.test(cell.innerHTML) && reg2.test(cell.innerHTML);};
			} else if (e1 !== "Shot") {
				return function (cell) {return reg1.test(cell.innerHTML);};
			} else {
				return function (cell) {return reg2.test(cell.innerHTML);};
			}
		}
	};
	col = 5; //位置補正用
	s.style.display="block";
}
//辿異制限
var ckTeni_F = function (e) {
	e = "："+e;
	return	e === "：Zenith Skill" ? function(){return true}
						: function (cell) {return cell.lastChild./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf(e) !== -1;};
}
//スロ制限
s.title = "Filter by Slot";
selectSet(s,["slot","3","2","1"]);
tH.cells[col].removeChild(tH.cells[col].lastChild);
tH.cells[col].appendChild(s.cloneNode(true));
tH.cells[col].lastChild.style.marginLeft = "1.4em";
tH.cells[col].lastChild.style.marginTop = "2.0em";
var ckSlot_F = function (e) {
	return e === "slot" ? function(){return true} : function (cell) {return cell.firstChild.nodeValue >= e;};
};

/*@if (@_jscript_version >=  9)@*/
tH.cells[col].lastChild.style.position = "relative";
tH.cells[col].lastChild.style.right = "1.8em";
/*@end@*/

//解除
i.value = "Clear Selections",i.title = "Clear Selected Drop Downs",i.style.display = "block";
tH.cells[col+3].appendChild(i.cloneNode(true));
tH.cells[col+3].style.marginRight = "auto";

s = document.createElement("select");

s.style.display = "block", s.title = "Limit by Rank";
var dt = document.createElement("div"),
	i = document.createElement("input");
i.type = "text", i.title = "Limit to what Rank?", i.style = "width: 30px; text-align: right; font-size: 12px";
dt.appendChild(i.cloneNode(false));
selectSet(s, ["Rank","HR","SR","GR","GSR"]);
if (location.pathname.indexOf("_g") !== -1 || location.pathname.indexOf("_n") !== -1) {}
else if (treeCK && location.pathname.indexOf("yumi") === -1) {tH.cells[5].appendChild(s.cloneNode(true)); tH.cells[5].appendChild(dt);}
else {tH.cells[6].appendChild(s.cloneNode(true)); tH.cells[6].appendChild(dt);}
var rankSort = function (rank) { return rank === "Rank" ? function(){return true} : function (cell) {return RegExp(`\\b${rank}\\d*`, 'g').test(cell.innerHTML);} }
var limitRank = function (rank) {
	return rank === "" ? function(){return true} : function (cell) {
		const s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
		var concatRank = cell.innerHTML.replace("<br>", "");
		if (s[s.length-1].value == "Rank") {
			return (parseInt(concatRank.replace(/[A-Z]/g, "")) <= rank);
		}
		return (concatRank.indexOf("-") !== -1 || (RegExp(`\\b${s[s.length-1].value}\\d*`, 'g').test(concatRank) && parseInt(concatRank.replace(/[A-Z]/g, "")) <= rank));
	};
}

tH=dt=i=s=null;

//フィルター
if (treeCK){
	//剣士弓
	var filter = function () {
		var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
			i = document.getElementsByTagName("thead")[0].getElementsByTagName("input"),
			tr = document.getElementsByTagName("tbody")[0].rows,
			N = tr.length;
			w_col1 = col,
			w_col2 = col + 1,
			ckRare = ckRare_F(s[0].value),
			ckIzyo = ckIzyo_F(s[1].value),
			ckZoku = ckZoku_F(s[2].value),
			ckKobetu = ckKobetu_F(s[3].value),
			ckTeni = ckTeni_F(s[4].value),
			ckSlot = ckSlot_F(s[5].value);
			if (!ckG) { ckRank = rankSort(s[6].value), ckRankMin = limitRank(i[3].value); }
		if (location.pathname.indexOf("yumi") !== -1 && !ckG) {for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckRare(cel[ckGS]) && ckIzyo(cel[2]) && ckZoku(cel[2]) && ckKobetu(cel[3]) && ckTeni(cel[3]) && ckSlot(cel[w_col1]) && ckRank(cel[6]) && ckRankMin(cel[6]) ? "" : "none";}
		else if (location.pathname.indexOf("yumi") !== -1) {for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckRare(cel[ckGS]) && ckIzyo(cel[2]) && ckZoku(cel[2]) && ckKobetu(cel[3]) && ckTeni(cel[3]) && ckSlot(cel[w_col1]) ? "" : "none";}
		else if (!ckG) {for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckRare(cel[ckGS]) && ckIzyo(cel[2]) && ckZoku(cel[2]) && ckKobetu(cel[3]) && ckTeni(cel[3]) && ckSlot(cel[w_col1]) && ckRank(cel[5]) && ckRankMin(cel[5]) ? "" : "none";}
		else {for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckRare(cel[ckGS]) && ckIzyo(cel[2]) && ckZoku(cel[2]) && ckKobetu(cel[3]) && ckTeni(cel[3]) && ckSlot(cel[w_col1]) ? "" : "none";}
	}
} else {
	//ガン
	var filter = function () {
		var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
			i = document.getElementsByTagName("thead")[0].getElementsByTagName("input"),
			tr = document.getElementsByTagName("tbody")[0].rows,
			N = tr.length;
			ckRare = ckRare_F(s[0].value),
			ckGun = ckGun_F(s[1].value,s[2].value,s[3].value),
			ckTama = ckTama_F(s[4].value,s[5].value),
			ckTeni = ckTeni_F(s[6].value),
			ckSlot = ckSlot_F(s[7].value);
			if (!ckG) {ckRank = rankSort(s[8].value), ckRankMin = limitRank(i[2].value);}
		if (!ckG) {for (var i = 0,cel; i<N; i++) cel=tr[i].cells,tr[i].style.display = ckRare(cel[ckGS]) && ckGun(cel[3]) && ckTama(cel[4]) && ckTeni(cel[4]) && ckSlot(cel[5]) && ckRank(cel[6]) && ckRankMin(cel[6]) ? "" : "none";}
		else {for (var i = 0,cel; i<N; i++) cel=tr[i].cells,tr[i].style.display = ckRare(cel[ckGS]) && ckGun(cel[3]) && ckTama(cel[4]) && ckTeni(cel[4]) && ckSlot(cel[5]) ? "" : "none";}
	}
}

var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
for (var i = 0,max = s.length; i<max; addEvent(s[i++],"change",filter));
i = document.getElementsByTagName("thead")[0].getElementsByTagName("input");
for (var s = 0,max = i.length; s<max; addEvent(i[s++],"change",filter));

s=i=null;

var IsMouseDown = false;
//線可変
addEvent(document.getElementById("line"),"mousedown",
function (evt) {
	/*@if (@_jscript_version < 9)
	var e = window.event;
	@else@*/
	var e = evt;
	/*@end@*/
	if (e.button <= 1) {
		IsMouseDown = true;
		document.getElementById("line").style.position = "absolute";
		document.getElementById("line").style.left = (e.clientX -4)  + "px";
	}
});
addEvent(document,"mouseup",
function (evt) {
	if (IsMouseDown) {
		/*@if (@_jscript_version < 9)
		var e = window.event;
		@else@*/
		var e = evt;
		/*@end@*/
		document.getElementById("data").style.width = (document.documentElement.scrollWidth - e.clientX - 20) + "px";
		document.getElementById("tree").style.width = (e.clientX -5) + "px";
		document.getElementById("bar").style.left = e.clientX + "px";
		document.getElementById("line").style.left = (e.clientX -1) + "px";
		IsMouseDown = false;
	}
});
addEvent(document,"mousemove",
function (evt) {
	if (IsMouseDown) {
		/*@if (@_jscript_version < 9)
		var e = window.event;
		e.returnValue = false;
		@else@*/
		var e = evt;
		window.getSelection().removeAllRanges();
		/*@end@*/
		document.getElementById("line").style.left = (e.clientX -4) + "px";
	}
});

//ツリー
addEvent(document.getElementById("tree"),"click",
function (evt) {
	/*@if (@_jscript_version < 9)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.tagName === "SPAN" && t.id !== ""){
		if (location.pathname.indexOf("_partnya.") === -1) {
			switch (t.id) {
			case "t3": //SP
				if (location.pathname.indexOf("_sp.") === -1) {
					var w = location.pathname.split(".")[0].split("_")[0];
					location.href = w + "_sp.htm#" + t.id;
				}
				break;
			case "t5": //進化
				if (location.pathname.indexOf("_s.") === -1) {
					var w = location.pathname.split(".")[0].split("_")[0];
					location.href = w + "_s.htm#" + t.id;
				}
				break;
			case "t6": //剛猫
				if (location.pathname.indexOf("_n.") === -1) {
					var w = location.pathname.split(".")[0].split("_")[0];
					location.href = w + "_n.htm#" + t.id;
				}
				break;
			case "t8": //G
				if (location.pathname.indexOf("_g.") === -1) {
					var w = location.pathname.split(".")[0].split("_")[0];
					location.href = w + "_g.htm#" + t.id;
				}
				break;
			default : //通常
				if (location.pathname.indexOf("_") !== -1) {
					var w = location.pathname.split(".")[0].split("_")[0];
					location.href = w + ".htm#" + t.id;
				}
			}
		} else {
			location.href = "#" + t.id;
		}
		var cre = document.getElementById("tree").getElementsByTagName("span"),creB = document.getElementById("tree").getElementsByTagName("div");
		for (var i=0,m=cre.length; i<m; cre[i].style.color = "",creB[i++].style.display = "none");
		document.getElementById(t.id).style.color = "red";
		document.getElementById(t.id+"L").style.display = "block";
	}
});
if (treeCK && location.pathname.indexOf("yumi") === -1) {
	var GaugeType = {
"D00":"40,90,160,240,320,380,400,400",
"D01":"270,270,270,270,270,300,350,400",
"D02":"170,170,170,170,170,200,250,400",
"D03":"0,0,0,70,160,260,355,400",
"D04":"100,100,100,100,160,285,350,400",
"D05":"0,0,0,0,125,150,200,400",
"D06":"30,80,80,240,240,240,330,400",
"D07":"50,70,170,170,195,275,360,400",
"D08":"70,70,90,90,185,330,330,400",
"D09":"160,220,280,280,280,280,360,400",
"D0A":"0,90,90,115,205,270,350,400",
"D0B":"35,185,285,285,285,320,350,400",
"D0C":"30,80,80,310,310,310,310,400",
"D0D":"0,0,110,110,200,270,320,400",
"D0E":"160,320,370,370,370,370,370,400",
"D0F":"50,100,150,200,250,300,350,400",
"D10":"0,100,100,220,300,310,330,400",
"D11":"0,0,0,0,300,300,345,400",
"D12":"100,100,100,130,160,230,320,400",
"D13":"30,70,120,180,250,250,340,400",
"D14":"0,0,0,0,0,400,400,400",
"D15":"150,150,150,150,310,310,360,400",
"D16":"30,80,150,180,180,270,320,400",
"D17":"100,100,260,260,260,310,360,400",
"D18":"0,150,200,280,280,280,320,400",
"D19":"0,0,0,0,0,250,300,400",
"D1A":"50,175,225,225,225,275,350,400",
"D1B":"40,190,190,190,190,190,340,400",
"D1C":"0,0,100,250,250,250,400,400",
"D1D":"0,0,0,0,0,400,400,400",
"C00":"30,80,110,160,260,340,400,400",
"C01":"100,140,170,270,330,330,400,400",
"C02":"40,110,160,160,260,350,400,400",
"C03":"40,120,180,270,300,340,400,400",
"C04":"160,168,184,272,312,320,350,400",
"C05":"120,136,232,280,296,304,344,400",
"C06":"40,96,160,232,296,332,348,400",
"C07":"32,104,184,208,264,344,352,400",
"C08":"24,70,182,246,302,342,342,400",
"C09":"24,80,198,254,262,310,360,400",
"C0A":"40,90,160,240,320,380,400,400",
"C0B":"270,270,270,270,270,300,350,400",
"C0C":"0,0,0,70,160,260,355,400",
"C0D":"100,100,100,100,160,285,350,400",
"C0E":"55,100,145,185,235,280,400,400",
"C0F":"20,55,130,190,225,240,400,400",
"C10":"30,90,120,170,235,315,370,400",
"C11":"60,100,130,170,230,310,360,400",
"C12":"140,140,170,170,310,320,350,400",
"C13":"10,30,160,200,320,320,370,400",
"C14":"115,115,230,320,320,320,400,400",
"C15":"70,150,200,250,300,320,360,400",
"C16":"80,160,240,240,300,300,360,400",
"C17":"30,70,100,200,280,340,355,400",
"C18":"80,120,120,200,200,320,360,400",
"C19":"0,0,160,300,300,300,360,400",
"C1A":"120,120,220,220,220,340,360,400",
"C1B":"50,90,160,260,260,260,360,400",
"C1C":"220,220,220,240,300,300,350,400",
"C1D":"130,140,140,140,270,280,400,400",
"C1E":"0,100,170,200,260,330,400,400",
"C1F":"120,120,170,200,200,300,340,400",
"C20":"40,200,200,200,270,300,400,400",
"C21":"40,120,200,240,280,315,345,400",
"C22":"100,180,180,250,310,310,345,400",
"C23":"40,140,140,140,220,280,350,400",
"C24":"0,50,215,215,215,315,345,400",
"C25":"35,90,155,200,200,290,400,400",
"C26":"0,0,105,130,230,270,400,400",
"C27":"200,200,200,200,200,200,400,400",
"C28":"10,10,190,190,210,210,210,400",
"C29":"15,145,200,200,200,250,400,400",
"C2A":"0,150,150,150,200,300,370,400",
"C2B":"0,0,50,50,50,260,400,400",
"C2C":"0,0,100,250,250,250,400,400",
"C2D":"0,0,100,320,320,350,400,400",
"C2E":"0,0,100,320,320,320,400,400",
"C2F":"56,176,232,256,272,320,368,400",
"C30":"0,0,50,50,50,300,300,400",
"C31":"0,0,0,0,0,50,300,400",
"C32":"35,65,95,135,185,230,350,400",
"C33":"0,0,0,0,0,400,400,400",
"C34":"50,200,200,200,250,250,330,400",
"C35":"100,100,100,130,160,230,320,400",
"C36":"30,80,150,180,180,270,320,400",
"C37":"0,80,80,80,130,270,320,400",
"C38":"20,20,90,120,300,300,340,400",
"C39":"0,0,0,0,0,300,360,400",
"C3A":"50,70,170,170,195,275,370,400",
"C3B":"0,0,80,80,260,310,360,400",
"C3C":"66,132,198,264,330,343,346,400",
"C3D":"0,0,325,325,325,325,360,400",
"C3E":"150,200,200,200,350,350,350,400",
"C3F":"180,260,260,260,260,310,360,400",
"C40":"35,185,285,285,285,320,350,400",
"C41":"0,90,90,115,205,270,350,400",
"C42":"100,100,260,260,260,310,360,400",
"C43":"0,40,80,120,295,320,370,400",
"C44":"50,50,130,305,305,305,355,400",
"C45":"50,175,225,225,225,275,350,400",
"C46":"150,150,150,150,310,310,360,400",
"C47":"50,50,50,50,50,220,320,400",
"C48":"60,100,160,200,260,300,360,400",
"C49":"60,130,210,210,210,255,300,400",
"C4A":"170,170,170,170,170,200,250,400",
"C4B":"50,300,300,300,300,330,375,400",
"C4C":"0,0,0,0,125,150,200,400",
"C4D":"0,100,100,115,200,280,320,400",
"C4E":"0,100,100,220,300,310,330,400",
"C4F":"240,240,240,240,240,240,340,400",
"C50":"150,220,220,220,220,300,330,400",
"C51":"150,250,280,280,280,280,300,400",
"C52":"0,150,200,280,280,280,320,400",
"C53":"40,190,190,190,190,190,340,400",
"C54":"0,0,0,0,0,0,0,0",
"B00":"30,80,110,160,260,340,400,400",
"B01":"100,140,170,270,320,350,400,400",
"B02":"50,50,50,120,170,310,400,400",
"B03":"0,0,0,120,240,260,400,400",
"B04":"100,100,140,140,140,340,400,400",
"B05":"40,110,160,160,260,350,400,400",
"B06":"0,0,0,0,0,360,380,400",
"B07":"0,0,0,0,300,320,390,400",
"B08":"300,300,300,300,300,350,385,400",
"B09":"60,115,170,225,280,335,390,400",
"B0A":"200,200,200,200,200,200,400,400",
"B0B":"20,100,180,260,260,400,400,400",
"B0C":"40,120,180,270,300,340,400,400",
"B0D":"40,120,180,270,300,370,400,400",
"B0E":"0,0,0,0,0,400,400,400",
"B0F":"160,180,220,220,270,375,375,400",
"B10":"0,0,0,0,270,320,385,400",
"B11":"55,100,145,185,235,280,400,400",
"B12":"20,20,20,180,230,330,400,400",
"B13":"10,10,190,190,210,210,210,400",
"B14":"185,185,185,185,370,370,370,400",
"B15":"0,0,0,0,0,400,400,400",
"B16":"100,160,190,220,260,400,400,400",
"B17":"20,70,190,240,360,400,400,400",
"B18":"20,70,190,270,320,400,400,400",
"B19":"200,220,290,290,320,370,370,400",
"B1A":"0,0,0,0,290,340,380,400",
"B1B":"250,250,250,250,250,250,400,400",
"B1C":"70,120,170,330,380,400,400,400",
"B1D":"0,0,230,230,230,230,400,400",
"B1E":"0,0,0,120,240,260,400,400",
"B1F":"0,0,50,50,50,300,300,400",
"B20":"0,0,0,70,160,260,355,400",
"B21":"50,50,100,150,150,150,150,400",
"B22":"0,0,320,320,320,320,320,400",
"B23":"100,100,100,100,160,285,350,400",
"B24":"0,0,0,0,0,300,360,400",
"B25":"0,0,0,0,0,50,300,400",
"B26":"35,65,95,135,185,230,350,400",
"B27":"60,80,110,240,260,310,360,400",
"B28":"50,80,160,200,280,320,350,400",
"B29":"0,60,130,210,280,330,350,400",
"B2A":"40,90,160,240,320,380,400,400",
"B2B":"270,270,270,270,270,300,350,400",
"B2C":"250,250,250,250,250,300,335,400",
"B2D":"24,104,192,256,296,344,360,400",
"B2E":"0,150,150,150,200,310,370,400",
"B2F":"50,100,150,200,250,300,350,400",
"B30":"0,0,0,0,160,280,360,400",
"B31":"96,128,192,240,288,352,352,400",
"B32":"48,80,120,248,288,354,372,400",
"B33":"20,55,130,190,225,240,400,400",
"B34":"15,145,200,200,200,250,400,400",
"B35":"10,10,65,65,120,260,370,400",
"B36":"56,176,232,256,272,320,376,400",
"B37":"0,0,0,0,0,0,130,400",
"B38":"0,0,80,80,80,240,320,400",
"B39":"30,80,150,180,180,270,320,400",
"B3A":"0,0,100,250,250,250,400,400",
"B3B":"0,80,80,80,130,270,320,400",
"B3C":"50,220,270,270,270,270,330,400",
"B3D":"70,70,90,90,185,330,330,400",
"B3E":"0,0,80,80,260,310,360,400",
"B3F":"33,66,269,302,335,340,345,400",
"B40":"160,220,280,280,280,280,365,400",
"B41":"0,0,315,315,315,315,355,400",
"B42":"180,260,260,260,260,310,360,400",
"B43":"35,185,285,285,285,320,350,400",
"B44":"0,90,90,115,205,270,350,400",
"B45":"100,100,260,260,260,310,360,400",
"B46":"0,40,80,120,290,310,360,400",
"B47":"30,80,80,310,310,310,310,400",
"B48":"50,175,225,225,225,275,350,400",
"B49":"150,150,150,150,310,310,360,400",
"B4A":"50,50,50,50,50,220,320,400",
"B4B":"60,100,160,200,260,300,360,400",
"B4C":"60,130,210,210,210,255,300,400",
"B4D":"150,200,200,200,350,350,350,400",
"B4E":"170,170,170,170,170,200,250,400",
"B4F":"0,0,0,0,300,300,345,400",
"B50":"0,0,0,0,125,150,200,400",
"B51":"0,100,100,220,300,310,330,400",
"B52":"90,170,200,200,300,300,330,400",
"B53":"240,240,240,240,240,240,340,400",
"B54":"150,250,280,280,280,280,300,400",
"B55":"0,150,200,280,280,280,320,400",
"B56":"40,190,190,190,190,190,340,400",
"B57":"0,0,0,0,0,400,400,400",
"600":"30,100,250,320,370,400,400,400",
"601":"70,100,180,310,360,400,400,400",
"602":"90,170,250,320,360,400,400,400",
"603":"150,180,270,340,380,400,400,400",
"604":"120,170,220,320,400,400,400,400",
"605":"70,120,170,330,380,400,400,400",
"606":"90,100,130,300,350,400,400,400",
"607":"80,210,270,310,340,400,400,400",
"608":"40,70,90,100,400,400,400,400",
"609":"0,0,0,400,400,400,400,400",
"60A":"80,100,110,310,360,390,400,400",
"60B":"70,110,260,340,370,370,400,400",
"60C":"50,140,220,320,350,390,400,400",
"60D":"50,140,170,360,360,360,400,400",
"60E":"0,0,0,0,400,400,400,400",
"60F":"0,0,0,0,0,400,400,400",
"610":"40,70,90,110,130,400,400,400",
"611":"10,10,190,190,210,210,210,400",
"612":"0,0,0,0,0,400,400,400",
"613":"40,90,160,240,320,380,400,400",
"614":"55,100,145,185,235,280,400,400",
"615":"0,0,0,0,0,400,400,400",
"616":"100,160,190,220,260,400,400,400",
"617":"20,70,190,240,360,400,400,400",
"618":"20,70,190,270,320,400,400,400",
"619":"200,220,290,290,320,370,370,400",
"61A":"0,0,0,0,290,340,380,400",
"61B":"250,250,250,250,250,250,400,400",
"61C":"50,50,50,120,170,310,400,400",
"61D":"0,0,0,120,240,260,400,400",
"61E":"100,100,140,140,140,340,400,400",
"61F":"0,0,230,230,230,230,400,400",
"620":"30,60,90,340,340,340,340,400",
"621":"40,40,40,40,40,180,400,400",
"622":"60,115,170,225,280,335,390,400",
"623":"0,150,150,150,200,300,370,400",
"624":"0,0,0,140,280,360,360,400",
"625":"0,50,50,50,50,170,400,400",
"626":"0,0,0,0,280,280,370,400",
"627":"0,0,0,70,160,260,355,400",
"628":"50,50,100,150,150,150,150,400",
"629":"100,100,100,100,160,285,350,400",
"62A":"0,0,0,0,0,300,360,400",
"62B":"35,65,95,135,185,230,350,400",
"62C":"25,60,130,170,250,310,350,400",
"62D":"50,80,160,200,280,320,350,400",
"62E":"0,60,130,210,280,330,350,400",
"62F":"270,270,270,270,270,300,350,400",
"630":"48,80,120,248,288,344,360,400",
"631":"0,0,0,0,150,150,400,400",
"632":"80,120,160,200,280,328,360,400",
"633":"20,55,130,190,225,240,400,400",
"634":"10,10,65,65,120,260,365,400",
"635":"30,90,120,170,235,315,370,400",
"636":"50,50,50,50,50,300,300,400",
"637":"50,50,50,50,50,50,300,400",
"638":"80,136,200,232,272,320,368,400",
"639":"30,80,80,240,240,240,330,400",
"63A":"160,180,210,210,210,250,320,400",
"63B":"0,0,80,80,80,240,320,400",
"63C":"100,100,100,130,160,230,320,400",
"63D":"30,80,150,180,180,270,320,400",
"63E":"0,0,100,250,250,250,400,400",
"63F":"50,70,170,170,195,275,370,400",
"640":"70,70,90,90,185,330,330,400",
"641":"0,0,80,80,260,310,360,400",
"642":"66,132,268,333,336,339,342,400",
"643":"180,260,260,260,260,310,360,400",
"644":"200,200,200,200,200,200,200,400",
"645":"35,185,285,285,285,320,350,400",
"646":"150,200,200,200,350,350,350,400",
"647":"0,90,90,115,205,270,350,400",
"648":"100,100,260,260,260,310,360,400",
"649":"0,40,80,120,290,310,360,400",
"64A":"30,80,80,310,310,310,310,400",
"64B":"50,175,225,225,225,275,350,400",
"64C":"150,150,150,150,310,310,360,400",
"64D":"60,100,160,200,260,300,360,400",
"64E":"60,130,210,210,210,255,300,400",
"64F":"170,170,170,170,170,200,250,400",
"650":"0,0,0,0,300,300,345,400",
"651":"100,150,200,220,230,300,330,400",
"652":"0,0,0,0,125,150,200,400",
"653":"90,170,200,200,300,300,330,400",
"654":"150,220,220,220,220,300,330,400",
"655":"150,250,280,280,280,280,300,400",
"656":"0,0,0,0,0,250,300,400",
"657":"40,190,190,190,190,190,340,400",
"658":"0,0,0,0,0,400,400,400",
"400":"80,100,190,310,380,400,400,400",
"401":"50,80,210,330,390,400,400,400",
"402":"20,70,250,300,370,400,400,400",
"403":"200,210,240,340,390,400,400,400",
"404":"70,120,210,320,380,400,400,400",
"405":"130,140,170,330,390,400,400,400",
"406":"10,30,60,310,380,400,400,400",
"407":"100,190,270,300,340,400,400,400",
"408":"110,160,180,280,340,360,400,400",
"409":"100,160,190,220,260,400,400,400",
"40A":"40,70,85,150,350,380,400,400",
"40B":"100,130,130,130,280,350,400,400",
"40C":"0,0,0,0,400,400,400,400",
"40D":"30,40,50,280,350,380,400,400",
"40E":"40,110,200,220,260,320,400,400",
"40F":"30,250,250,250,290,360,400,400",
"410":"100,180,220,300,350,370,400,400",
"411":"110,160,180,260,320,360,400,400",
"412":"40,60,110,110,240,300,400,400",
"413":"40,90,160,240,320,380,400,400",
"414":"10,10,10,160,300,370,400,400",
"415":"90,170,240,290,340,385,400,400",
"416":"30,80,180,250,340,400,400,400",
"417":"20,70,180,260,310,400,400,400",
"418":"200,220,270,270,300,370,370,400",
"419":"0,0,0,0,0,400,400,400",
"41A":"0,0,0,0,290,330,370,400",
"41B":"10,10,190,190,210,210,210,400",
"41C":"200,200,200,200,200,200,400,400",
"41D":"60,115,170,225,280,335,390,400",
"41E":"0,0,230,230,230,230,400,400",
"41F":"30,60,90,340,340,340,340,400",
"420":"40,40,40,40,40,180,400,400",
"421":"0,150,150,150,200,300,370,400",
"422":"130,260,310,310,310,340,360,400",
"423":"200,275,275,275,275,275,375,400",
"424":"0,0,0,0,230,265,365,400",
"425":"0,0,0,70,160,260,355,400",
"426":"50,50,100,150,150,150,150,400",
"427":"100,100,100,100,160,285,350,400",
"428":"0,0,0,0,0,300,360,400",
"429":"0,0,50,50,50,300,300,400",
"42A":"0,0,0,0,0,50,300,400",
"42B":"70,130,170,190,230,300,350,400",
"42C":"0,0,0,0,240,280,320,400",
"42D":"50,80,160,200,280,320,350,400",
"42E":"0,60,130,210,280,330,350,400",
"42F":"270,270,270,270,270,300,350,400",
"430":"0,0,0,0,340,340,340,400",
"431":"32,80,144,248,264,344,360,400",
"432":"150,170,220,220,250,320,320,400",
"433":"40,90,150,170,210,270,350,400",
"434":"120,136,200,240,296,352,352,400",
"435":"0,0,0,0,150,150,400,400",
"436":"140,140,150,150,150,200,400,400",
"437":"0,0,0,265,265,265,400,400",
"438":"55,100,145,185,235,280,400,400",
"439":"20,55,130,190,225,240,400,400",
"43A":"64,80,104,248,280,320,360,400",
"43B":"35,50,95,95,210,250,350,400",
"43C":"30,90,120,170,235,315,370,400",
"43D":"15,145,200,200,200,250,400,400",
"43E":"80,136,200,232,272,320,368,400",
"43F":"30,80,80,240,240,240,330,400",
"440":"50,200,200,200,250,250,330,400",
"441":"30,80,150,180,180,270,320,400",
"442":"0,0,0,0,0,0,130,400",
"443":"0,0,100,250,250,250,400,400",
"444":"20,20,90,120,300,300,340,400",
"445":"50,220,270,270,270,270,330,400",
"446":"70,70,90,90,185,330,330,400",
"447":"0,0,80,80,260,310,360,400",
"448":"44,88,192,236,302,341,344,400",
"449":"180,260,260,260,260,310,360,400",
"44A":"150,200,200,200,350,350,350,400",
"44B":"0,0,0,0,270,365,385,400",
"44C":"0,90,90,115,205,270,350,400",
"44D":"100,100,260,260,260,310,360,400",
"44E":"0,40,80,120,295,315,365,400",
"44F":"50,50,130,300,300,300,350,400",
"450":"0,0,0,0,0,50,350,400",
"451":"0,0,110,110,200,270,320,400",
"452":"50,175,225,225,225,275,350,400",
"453":"150,150,150,150,310,310,360,400",
"454":"60,100,160,200,260,300,360,400",
"455":"60,130,210,210,210,255,300,400",
"456":"170,170,170,170,170,200,250,400",
"457":"0,0,0,0,125,150,200,400",
"458":"50,250,300,300,300,300,330,400",
"459":"150,220,220,220,220,300,330,400",
"45A":"150,250,280,280,280,280,300,400",
"45B":"0,0,0,0,0,250,300,400",
"45C":"40,190,190,190,190,190,340,400",
"45D":"0,0,0,0,0,400,400,400",
"300":"50,100,190,320,370,400,400,400",
"301":"90,140,230,330,380,400,400,400",
"302":"30,70,240,310,360,400,400,400",
"303":"160,210,250,340,380,400,400,400",
"304":"70,110,260,320,360,400,400,400",
"305":"50,120,170,330,380,400,400,400",
"306":"30,100,140,300,370,400,400,400",
"307":"110,190,240,320,370,400,400,400",
"308":"50,70,80,120,150,400,400,400",
"309":"230,240,250,280,355,380,400,400",
"30A":"30,50,60,240,350,400,400,400",
"30B":"70,100,130,160,290,360,400,400",
"30C":"170,190,200,200,200,200,400,400",
"30D":"20,100,180,280,320,400,400,400",
"30E":"60,80,90,290,340,380,400,400",
"30F":"140,140,140,140,220,400,400,400",
"310":"100,130,140,270,310,400,400,400",
"311":"50,110,150,260,330,380,400,400",
"312":"90,150,170,280,340,400,400,400",
"313":"40,90,160,240,320,380,400,400",
"314":"70,180,230,320,340,400,400,400",
"315":"20,20,20,380,380,380,400,400",
"316":"10,160,200,280,350,390,400,400",
"317":"10,10,10,250,280,380,400,400",
"318":"55,100,145,185,235,280,400,400",
"319":"70,135,195,245,290,330,400,400",
"31A":"250,250,250,250,330,380,400,400",
"31B":"40,60,110,110,260,360,400,400",
"31C":"90,110,180,180,300,300,400,400",
"31D":"20,20,20,20,370,370,400,400",
"31E":"100,180,200,240,360,400,400,400",
"31F":"80,160,200,270,330,400,400,400",
"320":"200,230,280,280,320,380,380,400",
"321":"0,0,0,0,400,400,400,400",
"322":"0,0,0,0,0,400,400,400",
"323":"0,0,0,0,290,340,380,400",
"324":"10,10,190,190,210,210,210,400",
"325":"200,200,200,200,200,200,400,400",
"326":"60,115,170,225,280,335,390,400",
"327":"0,0,230,230,230,230,400,400",
"328":"30,70,140,140,180,250,400,400",
"329":"0,0,0,160,200,260,400,400",
"32A":"30,60,90,340,340,340,340,400",
"32B":"40,40,40,40,40,180,400,400",
"32C":"0,150,150,150,200,300,370,400",
"32D":"0,110,170,170,280,360,360,400",
"32E":"0,120,200,200,200,250,375,400",
"32F":"140,140,140,140,220,300,350,400",
"330":"0,0,0,70,160,260,355,400",
"331":"50,50,100,150,150,150,150,400",
"332":"40,60,110,110,210,210,400,400",
"333":"100,270,315,315,315,355,355,400",
"334":"100,100,100,100,160,285,350,400",
"335":"0,0,0,0,0,300,360,400",
"336":"120,140,150,150,150,150,350,400",
"337":"80,120,160,210,260,300,350,400",
"338":"35,65,95,135,185,230,350,400",
"339":"50,80,160,200,280,320,350,400",
"33A":"0,60,130,210,280,330,350,400",
"33B":"50,70,80,120,150,150,350,400",
"33C":"270,270,270,270,270,300,350,400",
"33D":"24,104,192,256,296,344,360,400",
"33E":"40,60,110,110,230,310,350,400",
"33F":"140,140,150,150,150,200,400,400",
"340":"80,120,160,200,272,320,360,400",
"341":"80,120,160,200,280,328,355,400",
"342":"20,55,130,190,225,240,400,400",
"343":"40,70,130,160,250,290,370,400",
"344":"30,90,120,170,235,315,360,400",
"345":"80,100,160,160,255,255,350,400",
"346":"15,145,200,200,200,250,400,400",
"347":"10,10,65,65,120,260,365,400",
"348":"64,160,216,248,272,320,368,400",
"349":"30,80,80,240,240,240,330,400",
"34A":"50,200,200,200,250,250,330,400",
"34B":"160,180,210,210,210,250,320,400",
"34C":"30,80,150,180,180,270,320,400",
"34D":"0,0,100,250,250,250,400,400",
"34E":"20,20,90,120,300,300,340,400",
"34F":"50,220,270,270,270,270,330,400",
"350":"70,70,90,90,185,330,330,400",
"351":"0,0,80,80,260,310,360,400",
"352":"51,55,242,245,340,343,346,400",
"353":"44,88,288,294,300,344,351,400",
"354":"160,220,280,280,280,280,365,400",
"355":"0,0,325,325,325,325,360,400",
"356":"150,200,200,200,350,350,350,400",
"357":"180,260,260,260,260,310,360,400",
"358":"0,0,0,0,270,365,385,400",
"359":"0,90,90,115,205,270,350,400",
"35A":"100,100,260,260,260,310,360,400",
"35B":"0,40,80,120,295,315,365,400",
"35C":"30,80,80,310,310,310,310,400",
"35D":"50,50,130,305,305,305,355,400",
"35E":"0,0,110,110,200,270,320,400",
"35F":"50,175,225,225,225,275,350,400",
"360":"150,150,150,150,310,310,360,400",
"361":"60,100,160,200,260,300,360,400",
"362":"60,130,210,210,210,255,300,400",
"363":"170,170,170,170,170,200,250,400",
"364":"0,0,0,0,300,300,345,400",
"365":"150,150,350,350,350,350,375,400",
"366":"0,0,0,0,125,150,200,400",
"367":"90,170,200,200,300,300,330,400",
"368":"0,0,0,0,0,350,350,400",
"369":"150,220,220,220,220,300,330,400",
"36A":"150,250,280,280,280,280,300,400",
"36B":"0,0,0,0,0,250,300,400",
"36C":"40,190,190,190,190,190,340,400",
"36D":"0,0,0,0,0,400,400,400",
"200":"90,110,240,310,360,400,400,400",
"201":"50,90,230,330,370,400,400,400",
"202":"140,180,240,310,350,400,400,400",
"203":"190,210,260,330,370,400,400,400",
"204":"80,150,220,330,380,400,400,400",
"205":"100,110,140,310,370,400,400,400",
"206":"30,50,220,340,380,400,400,400",
"207":"60,100,180,300,360,400,400,400",
"208":"120,140,240,310,335,385,400,400",
"209":"50,70,90,240,350,400,400,400",
"20A":"40,130,160,260,340,400,400,400",
"20B":"70,80,100,170,360,400,400,400",
"20C":"50,70,130,270,330,370,400,400",
"20D":"70,100,180,280,300,400,400,400",
"20E":"130,150,160,160,270,350,400,400",
"20F":"90,150,190,310,380,380,400,400",
"210":"40,40,40,320,320,400,400,400",
"211":"60,150,270,300,350,370,400,400",
"212":"120,130,130,160,180,380,400,400",
"213":"40,90,160,240,320,380,400,400",
"214":"100,150,180,230,280,370,400,400",
"215":"70,170,200,260,350,390,400,400",
"216":"130,140,200,320,380,380,400,400",
"217":"20,20,20,200,290,340,400,400",
"218":"90,170,240,290,340,385,400,400",
"219":"250,250,250,250,330,380,400,400",
"21A":"55,100,145,185,235,280,400,400",
"21B":"50,80,140,140,270,320,400,400",
"21C":"40,60,110,110,210,210,400,400",
"21D":"100,180,190,250,360,400,400,400",
"21E":"90,160,190,270,330,400,400,400",
"21F":"200,230,280,280,320,380,380,400",
"220":"0,0,0,0,400,400,400,400",
"221":"0,0,0,0,0,400,400,400",
"222":"0,0,0,0,290,340,380,400",
"223":"10,10,190,190,210,210,210,400",
"224":"200,200,200,200,200,200,400,400",
"225":"60,120,175,230,285,340,395,400",
"226":"0,0,230,230,230,230,400,400",
"227":"30,60,90,340,340,340,340,400",
"228":"40,40,40,40,40,180,400,400",
"229":"0,150,150,150,200,300,370,400",
"22A":"120,230,230,230,230,340,360,400",
"22B":"50,170,220,220,220,250,375,400",
"22C":"0,0,0,0,230,265,360,400",
"22D":"0,0,0,70,160,260,355,400",
"22E":"50,50,100,150,150,150,150,400",
"22F":"100,100,100,100,160,285,350,400",
"230":"0,0,0,0,0,300,360,400",
"231":"150,180,210,210,270,330,330,400",
"232":"25,40,150,230,270,310,360,400",
"233":"50,80,160,200,280,320,350,400",
"234":"0,60,130,210,280,330,350,400",
"235":"80,100,110,110,220,300,350,400",
"236":"270,270,270,270,270,300,350,400",
"237":"0,0,0,0,340,340,340,400",
"238":"72,128,192,256,304,360,360,400",
"239":"35,65,95,135,185,230,350,400",
"23A":"70,120,150,200,250,320,350,400",
"23B":"80,120,160,200,280,304,360,400",
"23C":"56,88,176,248,296,352,352,400",
"23D":"0,0,0,0,150,150,400,400",
"23E":"140,140,150,150,150,200,400,400",
"23F":"0,0,0,265,265,265,400,400",
"240":"48,72,112,144,232,336,370,400",
"241":"48,80,120,248,288,344,360,400",
"242":"20,55,130,190,225,240,400,400",
"243":"20,20,20,180,260,290,350,400",
"244":"30,90,120,170,235,315,370,400",
"245":"15,145,200,200,200,250,400,400",
"246":"10,10,65,65,120,260,370,400",
"247":"64,160,216,248,272,320,376,400",
"248":"30,80,80,240,240,240,330,400",
"249":"50,200,200,200,250,250,330,400",
"24A":"100,100,100,130,160,230,320,400",
"24B":"30,80,150,180,180,270,320,400",
"24C":"0,0,100,250,250,250,400,400",
"24D":"30,70,120,180,250,250,340,400",
"24E":"160,180,210,210,210,250,320,400",
"24F":"20,20,90,120,300,300,340,400",
"250":"50,220,270,270,270,270,330,400",
"251":"50,70,170,170,195,275,370,400",
"252":"70,70,90,90,185,330,330,400",
"253":"0,0,80,80,260,310,360,400",
"254":"24,36,333,346,349,353,356,400",
"255":"170,173,339,342,345,348,352,400",
"256":"160,220,280,280,280,280,365,400",
"257":"0,0,340,340,340,340,370,400",
"258":"180,260,260,260,260,310,360,400",
"259":"0,0,0,0,270,375,390,400",
"25A":"35,185,285,285,285,320,350,400",
"25B":"0,90,90,115,205,270,350,400",
"25C":"100,100,260,260,260,310,360,400",
"25D":"0,40,80,120,300,320,370,400",
"25E":"50,50,130,310,310,310,360,400",
"25F":"0,0,110,110,200,270,320,400",
"260":"50,175,225,225,225,275,350,400",
"261":"150,150,150,150,310,310,360,400",
"262":"50,50,50,50,50,220,320,400",
"263":"0,0,350,350,350,350,380,400",
"264":"60,100,160,200,260,300,360,400",
"265":"60,130,210,210,210,255,300,400",
"266":"170,170,170,170,170,200,250,400",
"267":"0,0,0,0,300,300,345,400",
"268":"0,0,0,0,125,150,200,400",
"269":"100,100,100,100,250,250,350,400",
"26A":"90,170,200,200,300,300,330,400",
"26B":"240,240,240,240,240,240,340,400",
"26C":"150,250,280,280,280,280,300,400",
"26D":"0,150,200,280,280,280,320,400",
"26E":"0,0,0,0,0,250,300,400",
"26F":"40,190,190,190,190,190,340,400",
"270":"0,0,0,0,0,400,400,400",
"000":"80,110,220,320,380,400,400,400",
"001":"90,130,240,310,370,400,400,400",
"002":"130,140,200,330,370,400,400,400",
"003":"180,200,270,340,380,400,400,400",
"004":"120,230,280,320,400,400,400,400",
"005":"50,80,170,310,370,400,400,400",
"006":"30,100,280,320,360,400,400,400",
"007":"160,190,210,300,370,400,400,400",
"008":"110,110,110,110,110,400,400,400",
"009":"10,90,150,280,340,400,400,400",
"00A":"40,130,170,320,370,380,400,400",
"00B":"50,90,110,200,360,390,400,400",
"00C":"30,40,100,210,330,400,400,400",
"00D":"60,130,140,260,330,370,400,400",
"00E":"40,50,60,250,270,400,400,400",
"00F":"90,140,150,260,260,320,400,400",
"010":"70,90,100,190,400,400,400,400",
"011":"50,100,150,300,360,370,400,400",
"012":"10,20,30,310,360,380,400,400",
"013":"40,90,160,240,320,380,400,400",
"014":"80,120,150,170,180,200,400,400",
"015":"70,150,190,310,340,370,400,400",
"016":"70,90,100,190,370,370,400,400",
"017":"20,20,20,180,230,330,400,400",
"018":"70,135,195,245,290,330,400,400",
"019":"250,250,250,250,330,380,400,400",
"01A":"0,0,0,0,400,400,400,400",
"01B":"40,60,110,110,270,270,400,400",
"01C":"60,110,200,260,360,400,400,400",
"01D":"70,150,180,290,340,400,400,400",
"01E":"200,220,280,280,340,390,390,400",
"01F":"0,0,0,0,0,400,400,400",
"020":"0,0,50,50,180,390,400,400",
"021":"0,0,0,0,290,340,380,400",
"022":"10,10,190,190,210,210,210,400",
"023":"200,200,200,200,200,200,400,400",
"024":"60,120,175,230,285,340,395,400",
"025":"0,0,50,50,50,300,300,400",
"026":"0,0,230,230,230,230,400,400",
"027":"30,60,90,340,340,340,340,400",
"028":"40,40,40,40,40,180,400,400",
"029":"60,120,175,230,285,340,395,400",
"02A":"0,150,150,150,200,300,370,400",
"02B":"120,240,290,290,290,350,370,400",
"02C":"100,270,315,315,315,355,355,400",
"02D":"0,80,80,320,320,320,370,400",
"02E":"0,0,0,0,220,260,355,400",
"02F":"0,0,0,70,160,260,355,400",
"030":"50,50,100,150,150,150,150,400",
"031":"100,100,100,100,160,285,350,400",
"032":"0,0,0,0,0,300,360,400",
"033":"0,0,0,0,0,50,300,400",
"034":"80,120,140,150,200,290,350,400",
"035":"150,170,230,230,290,340,340,400",
"036":"20,20,20,150,200,280,350,400",
"037":"50,80,160,200,280,320,350,400",
"038":"0,60,130,210,280,330,350,400",
"039":"0,0,0,0,240,290,330,400",
"03A":"20,20,20,130,180,280,350,400",
"03B":"270,270,270,270,270,300,350,400",
"03C":"0,0,0,0,345,345,345,400",
"03D":"32,80,144,240,296,352,360,400",
"03E":"80,320,320,320,320,320,370,400",
"03F":"80,80,80,80,80,320,370,400",
"040":"80,120,150,170,180,200,350,400",
"041":"80,120,200,344,344,344,344,400",
"042":"24,40,168,256,304,352,352,400",
"043":"140,140,150,150,150,200,400,400",
"044":"0,0,0,265,265,265,400,400",
"045":"80,120,160,200,280,328,370,400",
"046":"80,136,200,232,272,328,360,400",
"047":"55,100,145,185,235,280,400,400",
"048":"20,55,130,190,225,240,400,400",
"049":"40,70,130,160,250,290,380,400",
"04A":"30,90,120,170,235,315,370,400",
"04B":"30,50,80,80,220,220,350,400",
"04C":"10,10,65,65,120,260,365,400",
"04D":"64,160,216,248,272,320,376,400",
"04E":"80,128,200,232,272,320,368,400",
"04F":"30,80,80,240,240,240,330,400",
"050":"50,200,200,200,250,250,330,400",
"051":"0,0,80,80,80,240,320,400",
"052":"30,80,150,180,180,270,320,400",
"053":"0,0,0,0,0,0,130,400",
"054":"0,0,100,250,250,250,400,400",
"055":"0,80,80,80,130,270,320,400",
"056":"30,70,120,180,250,250,340,400",
"057":"20,20,90,120,300,300,340,400",
"058":"50,220,270,270,270,270,330,400",
"059":"50,70,170,170,195,275,370,400",
"05A":"0,0,80,80,260,310,360,400",
"05B":"49,93,259,308,353,356,359,400",
"05C":"166,166,332,338,341,344,347,400",
"05D":"160,220,280,280,280,280,365,400",
"05E":"0,0,315,315,315,315,360,400",
"05F":"0,0,340,340,340,340,370,400",
"060":"180,260,260,260,260,310,360,400",
"061":"150,200,200,200,350,350,350,400",
"062":"50,100,150,200,250,300,350,400",
"063":"0,0,0,0,270,375,390,400",
"064":"0,0,0,0,270,365,385,400",
"065":"60,130,140,260,330,360,370,400",
"066":"90,130,240,310,360,360,370,400",
"067":"0,90,90,115,205,270,350,400",
"068":"100,100,260,260,260,310,360,400",
"069":"0,40,80,120,295,315,365,400",
"06A":"0,40,80,120,290,310,360,400",
"06B":"30,80,80,310,310,310,310,400",
"06C":"50,50,130,305,305,305,355,400",
"06D":"100,100,100,100,130,230,320,400",
"06E":"0,0,110,110,200,270,320,400",
"06F":"50,175,225,225,225,275,350,400",
"070":"150,150,150,150,310,310,360,400",
"071":"50,50,50,50,50,220,320,400",
"072":"60,100,160,200,260,300,360,400",
"073":"60,130,210,210,210,255,300,400",
"074":"170,170,170,170,170,200,250,400",
"075":"0,0,0,0,300,300,345,400",
"076":"0,0,0,0,125,150,200,400",
"077":"150,300,300,300,300,300,370,400",
"078":"240,240,240,240,240,240,340,400",
"079":"150,220,220,220,220,300,330,400",
"07A":"150,250,280,280,280,280,300,400",
"07B":"0,150,200,280,280,280,320,400",
"07C":"0,0,0,0,0,250,300,400",
"07D":"40,190,190,190,190,190,340,400",
"07E":"0,0,0,0,0,400,400,400"
	};
	addEvent(document,"mouseover",
	function (evt) {
		/*@if (@_jscript_version < 9)
		var t = evt.srcElement;
		@else@*/
		var t = evt.target;
		/*@end@*/
		if (t.tagName === "UL"){
			if (!t.title) t = t.previousSibling;
			if (t.title.charAt(1) <= "9") {
				var MaxSharp = +t.title.substring(3,6);
				//通常
				var wkSharp = MaxSharp,Gauge = GaugeType[t.title.substring(0,3)].split(","),wkGauge = [];
				for (var i = 0;i<8;i++) wkGauge[i] = +Gauge[i] > wkSharp ? wkSharp : Gauge[i];
				var wkT = "長さ:" + wkSharp + " ";
				if (wkGauge[0]-0 > 0) wkT += "赤:" + wkGauge[0];
				if (wkGauge[1]-wkGauge[0] > 0) wkT += "橙:" + (wkGauge[1]-wkGauge[0]);
				if (wkGauge[2]-wkGauge[1] > 0) wkT += "黄:" + (wkGauge[2]-wkGauge[1]);
				if (wkGauge[3]-wkGauge[2] > 0) wkT += "緑:" + (wkGauge[3]-wkGauge[2]);
				if (wkGauge[4]-wkGauge[3] > 0) wkT += "青:" + (wkGauge[4]-wkGauge[3]);
				if (wkGauge[5]-wkGauge[4] > 0) wkT += "白:" + (wkGauge[5]-wkGauge[4]);
				if (wkGauge[6]-wkGauge[5] > 0) wkT += "紫:" + (wkGauge[6]-wkGauge[5]);
				if (wkSharp-wkGauge[6] > 0) wkT += "空:" + (wkSharp-wkGauge[6]);
				t.title = wkT;
				//切れ味＋１
				wkSharp = MaxSharp >= 350 ? 400 : MaxSharp + 50,wkGauge = [];
				for (var i = 0;i<8;i++) wkGauge[i] = +Gauge[i] > wkSharp ? wkSharp : Gauge[i];
				wkT = "長さ:" + wkSharp + " ";
				if (wkGauge[0]-0 > 0) wkT += "赤:" + wkGauge[0];
				if (wkGauge[1]-wkGauge[0] > 0) wkT += "橙:" + (wkGauge[1]-wkGauge[0]);
				if (wkGauge[2]-wkGauge[1] > 0) wkT += "黄:" + (wkGauge[2]-wkGauge[1]);
				if (wkGauge[3]-wkGauge[2] > 0) wkT += "緑:" + (wkGauge[3]-wkGauge[2]);
				if (wkGauge[4]-wkGauge[3] > 0) wkT += "青:" + (wkGauge[4]-wkGauge[3]);
				if (wkGauge[5]-wkGauge[4] > 0) wkT += "白:" + (wkGauge[5]-wkGauge[4]);
				if (wkGauge[6]-wkGauge[5] > 0) wkT += "紫:" + (wkGauge[6]-wkGauge[5]);
				if (wkSharp-wkGauge[6] > 0) wkT += "空:" + (wkSharp-wkGauge[6]);
				t.nextSibling.title = wkT;
			}
		}
	});
}
addEvent(document,"click",
function (evt) {
	/*@if (@_jscript_version < 9)
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
			marker.id = "N"+tB.id.substring(0,2);
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
			for (var i = 0; i<N; x[i] = [Fulltohalf(tr[i].cells[0].firstChild.nodeValue)], x[i].row = tr[i++]);
			x.sort();
			for (var i = 0; i<N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		case "Sort by Attack Value":
			marker.id = "A"+tB.id.substring(0,2);
			for (var i = 0; i<N; x[i] = [tr[i].cells[2].firstChild.nodeValue.split(" ")[0]], x[i].row = tr[i++]);
			x.sort(function(a, b){return b - a});
			for (var i = 0; i<N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		case "Sort by Element Value":
			marker.id = "Z"+tB.id.substring(0,2);
			var s1 = document.getElementsByTagName("thead")[0].getElementsByTagName("select")[2].value,
				s2 = document.getElementsByTagName("thead")[0].getElementsByTagName("select")[1].value;
			for (var i = 0; i < N; i++) {
				if (tr[i].style.display === "") {
					x[i] = [0];
					var wcell = tr[i].cells[2].childNodes;
					for (var k = wcell.length; k--;) {
						var t = wcell[k].nodeValue || "";
						if (s1 !== "属性" && s1 !== "無" && t.indexOf(s1) !== -1 ||
							s2 !== "状態" && s2 !== "無" && t.indexOf(s2) !== -1) {
							x[i] = [+wcell[k].nodeValue.split(" ")[1]];
							break;
						}
					}
				} else {
					x[i] = [0];
				}
				x[i].row = tr[i];
			}
			x.sort(function(a, b){return b - a});
			for (var i=0; i<N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		case "Clear Selected Drop Downs":
			var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
			for (var i = 0,m = s.length; i  <m; s[i++].selectedIndex = 0);
			if (document.getElementById("top")) {
				var s = document.getElementById("top").getElementsByTagName("span");
				for (var i = 0,m = s.length; i < m; s[i++].style.color = "");
			}
			filter();
			break;
		}
	}
});
//G級リンク改善
if (!ckG) {
	addEvent(document.getElementById("tree"),"click",
	function (evt) {
		/*@if (@_jscript_version < 9)
		var t = evt.srcElement;
		@else@*/
		var t = evt.target;
		/*@end@*/
		if (t.tagName === "A"){
			var s = document.getElementsByTagName("select")[0];
			if (+s.value > 1) {
				location.hash = t.href.split("#")[1] + s.value;
				return false;
			}
		}
	});
}
//アンロード退避
if (treeCK){ //剣士弓
	addEvent(window,"unload",function () {
	var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),cre = document.getElementById("tree").getElementsByTagName("span");
	var dispflg = "";
	for (var i = 0,m = cre.length; i < m; i++) {
		if (cre[i].style.color !== "") {
			dispflg = cre[i].id.substring(1);
			break;
		}
	}
	document.cookie = "buki=" + [location.pathname+location.hash,s[0].selectedIndex,s[1].selectedIndex,s[2].selectedIndex,s[3].selectedIndex,s[4].selectedIndex,s[5].selectedIndex,s[6].selectedIndex,document.getElementsByTagName("tbody")[0].id,dispflg,document.getElementById("tree").scrollTop,document.getElementById("data").scrollTop].join("!");
	});
} else {
	addEvent(window,"unload",function () {
	var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),cre = document.getElementById("tree").getElementsByTagName("span");
	var dispflg = "";
	for (var i = 0,m = cre.length; i < m; i++) {
		if (cre[i].style.color !== "") {
			dispflg = cre[i].id.substring(1);
			break;
		}
	}
	document.cookie = "buki=" + [location.pathname+location.hash,s[0].selectedIndex,s[1].selectedIndex,s[2].selectedIndex,s[3].selectedIndex,s[4].selectedIndex,s[5].selectedIndex,s[6].selectedIndex,document.getElementsByTagName("tbody")[0].id,dispflg,document.getElementById("tree").scrollTop,document.getElementById("data").scrollTop].join("!");
	});
}
//オンロード
var w = document.cookie;
if (w.indexOf("buki=" + location.pathname+location.hash) !== -1) {
	w = w.split("buki=")[1].split("!");
	var s=document.getElementsByTagName("thead")[0].getElementsByTagName("select");
	if (treeCK){ //剣士弓
		if (w[1]+w[2]+w[3]+w[4]+w[5]+w[6]+w[7] > 0) {
			s[0].selectedIndex = w[1];
			s[1].selectedIndex = w[2];
			s[2].selectedIndex = w[3];
			s[3].selectedIndex = w[4];
			s[4].selectedIndex = w[5];
			s[5].selectedIndex = w[6];
			s[6].selectedIndex = w[7];
			filter();
		}
		var s1 = w[8],s2 = w[9];
	} else {
		if (w[1]+w[2]+w[3]+w[4]+w[5]+w[6]+w[7]+w[8] > 0) {
			s[0].selectedIndex = w[1];
			s[1].selectedIndex = w[2];
			s[2].selectedIndex = w[3];
			s[3].selectedIndex = w[4];
			s[4].selectedIndex = w[5];
			s[5].selectedIndex = w[6];
			s[6].selectedIndex = w[7];
			s[7].selectedIndex = w[8];
			filter();
		}
		var s1 = w[8],s2 = w[9];
	}
	//ソート
	if (s1 !== "") {
		var i = document.getElementsByTagName("thead")[0].getElementsByTagName("input");
		if (s1.length === 3) {
			/*@if (@_jscript_version < 9) 
			i[s1.charAt(2) === "N" ? 0 : s1.charAt(2) === "A" ? 1 : 2].fireEvent( "onclick" );
			@else@*/
			var evt = document.createEvent("MouseEvents");
			evt.initEvent("click", true, true);
			i[s1.charAt(2) === "N" ? 0 : s1.charAt(2) === "A" ? 1 : 2].dispatchEvent(evt);
			/*@end@*/
		}
		if (s1.length === 2) {
			/*@if (@_jscript_version < 9) 
			i[s1.charAt(1) === "N" ? 0 : s1.charAt(1) === "A" ? 1 : 2].fireEvent( "onclick" );
			@else@*/
			var evt = document.createEvent("MouseEvents");
			evt.initEvent("click", true, true);
			i[s1.charAt(1) === "N" ? 0 : s1.charAt(1) === "A" ? 1 : 2].dispatchEvent(evt);
			/*@end@*/
		}
		/*@if (@_jscript_version < 9) 
		i[s1.charAt(0) === "N" ? 0 : s1.charAt(0) === "A" ? 1 : 2].fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		i[s1.charAt(0) === "N" ? 0 : s1.charAt(0) === "A" ? 1 : 2].dispatchEvent(evt);
		/*@end@*/
	}
	//作成種別
	if (s2 !== "") {
		/*@if (@_jscript_version < 9) 
		document.getElementById("t"+s2).fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		document.getElementById("t"+s2).dispatchEvent(evt);
		/*@end@*/
	}
	document.getElementById("tree").scrollTop = parseInt(w[9]);
	document.getElementById("data").scrollTop = parseInt(w[10]);
} else if (location.hash.length > 4) {
	setTimeout(function (){
		var creB = document.getElementById("tree").getElementsByTagName("div");
		for (var i = 0,m = creB.length; i < m; i++){
			if (creB[i].innerHTML.indexOf(location.hash.substring(0,6)) !== -1) {
				//作成種別
				var treeId = creB[i].id.substring(0,creB[i].id.length-1);
				/*@if (@_jscript_version < 9) 
				document.getElementById(treeId).fireEvent( "onclick" );
				@else@*/
				var evt = document.createEvent("MouseEvents");
				evt.initEvent("click", true, true);
				document.getElementById(treeId).dispatchEvent(evt);
				/*@end@*/
				//
				var treeHREF = creB[i].getElementsByTagName("a");
				for (var j = 0,l = treeHREF.length; j < l; j++){
					if (treeHREF[j].href.lastIndexOf(location.hash.substring(0,6)) !== -1) {
						treeHREF[j].focus();
						break;
					}
				}
				break;
			}
		}
	}, 32);
} else if (location.hash.length > 0) {
		var cre = document.getElementById("tree").getElementsByTagName("span"),creB = document.getElementById("tree").getElementsByTagName("div");
		for (var i = 0,m = cre.length; i < m; cre[i].style.color = "",creB[i++].style.display = "none");
		document.getElementById(location.hash.substring(1)).style.color = "red";
		document.getElementById(location.hash.substring(1)+"L").style.display = "block";
};
})();
//}, 50);
