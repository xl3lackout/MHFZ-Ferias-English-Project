(function(){
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

//HTMLにボタン追加
var tH = document.getElementsByTagName("thead")[0].rows[0],
	i = document.createElement("input"),
	s = document.createElement("select");
i.type = "button",i.style.display = s.style.display = "block",
i.style.marginRight = i.style.marginLeft = s.style.marginRight = "auto";

//場所
s.title = "Sort by Map";
selectSet(s,["Map","Jungle","Desert","Swamp","Snowy Mountains","Volcano","Great Forest","Forest and Hills","Tower","Gorge","Highlands","Tide Island","Polar Sea","Flower Fields","Bamboo Forest","Fort","Interceptor Base","Schrade","Arena","Battlefield","Solitude Island"]);
s.selectedIndex = 0;
tH.cells[2].appendChild(s.cloneNode(true));
//ターゲット
s.title = "Filter by Target";
selectSet(s,["Broken, Don't Use","Felyne","Akantor","Akura Vashimu","Akura Jebia","Anorupatisu","Abiorugu","Apceros","Aptonoth","Amatsu","Aruganosu","Unknown","Ioprey","Inagami","Deviljho","イビルジョー蝕","Yian Garuga","Yian Kut-Ku","Blue Yian Kut-Ku","Varusaburosu","Voljang","Volganos","Red Volganos","Uragaan","Uruki","Egyurasu","Espinas","Orange Espinas","White Espinas","Elzelion","Erupe","Chameleos","Odibatorasu","Anteka","Gasurabazura","Plesioth","Green Plesioth","Remobra","Hermitaur","Kamu Orugaron","Garuba Daora","Cephalos","Hornetaur","Giaorugu","Giaprey","Kirin","Kuarusepusu","Guanzorumu","Kushala Daora","Kusubami","Gravios","Black Gravios","Gureadomosu","Gurenzeburu","Keoaruboru","Genprey","Gypceros","Purple Gypceros","Kelbi","Gore Magala","Gougarf","Kokomoa","Gogomoa","Goruganosu","Conga","Shen Gaoren","Shagaru Magala","Shantien","Shogun Ceanataur","Zinogre","Stygian Zinogre","Zenaserisu","Zerureusu","Seregios","Taikun Zamuza","Daimyo Hermitaur","Great Thunderbug","Shakalaka","Diablos","Black Diablos","Diorex","Tigrex","Disufiroa","Teostra","Dyuragaua","Toa Tesukatora","Duremudira","Iodrome","Cephadrome","Gendrome","Bulldrome","Velocidrome","Blangonga","Doragyurosu","Toridcless","Lunastra","Nargacuga","Nono Orugaron","Basarios","Congalala","Pariapuria","Harudomerugu","Baruragaru","Hypnocatrice","White Hypnocatrice","Bright Hypnocatrice","Hyujikiki","Farunokku","Forokururu","Brachydios","Blango","Burukku","Bullfango","Khezu","Red Khezu","Barioth","Berukyurosu","Pokara","Pokaradon","Popo","Bogabadorumu","Poborubarumu","Mi Ru","Midogaron","Fatalis","Crimson Fatalis","White Fatalis","Meraginasu","Melynx","Mosswine","Monoblos","White Monoblos","Ceanataur","Yama Kurai","Yama Tsukami","Rajang","Raviente","Berserk Raviente","Lao-Shan Lung","Ashen Lao-Shan Lung","Vespoid","Velociprey","Rathian","Pink Rathian","Gold Rathian","Rathalos","Azure Rathalos","Silver Rathalos","Rukodiora","Rebidiora"]);
tH.cells[6].appendChild(s.cloneNode(true));
	var ckTtarget_F = function (e) {
	if (e === "Broken, Don't Use") {
		return function(){return true};
	} else {
		var reg = new RegExp(">[\w]+\s"+e+"\s[0-9]+<");
		return function (cell) {return reg.test(">"+cell.innerHTML.replace("アクラ・ジェビア奇種","アクラ・ジェビア").replace("ヒプノック奇種","ヒプノック繁殖期").split("奇種").join("亜種").split("変種").join(""));};
	}
};
/*こっちは亜種も引っかかるので没
var ckTtarget = function (cell,s) {
		return s === "-" ? true : (cell.innerHTML.indexOf(s) === 0 || cell.innerHTML.indexOf(">"+s) >= 1);
	}
*/

//HR
s.title = "Filter by HR";
if (location.pathname.indexOf("_g") !== -1 && location.pathname.indexOf("_go") === -1) {
	selectSet(s,["GR","1+"]);
} else {
	selectSet(s,["HR","100+","91+","81+","71+","61+","51+","41+","31+","22+","17+","15+","11+","8+","5+","3+","2","1"]);
}
tH.cells[7].appendChild(s.cloneNode(true));
var ckHr_F = function (e) {
	if (e === "HR" || e === "GR") {
		return function(){return true};
	} else {
		e = parseInt(e);
		return function (cell) {
			if (!cell.firstChild) return true;   //指定なし

			var wk = cell.firstChild.nodeValue.replace("-","");

			if (wk.indexOf("+") !== -1) {
				return parseInt(wk.substring(2))  <= e;
			} else if (wk.indexOf("Under") !== -1) {
				return parseInt(wk.substring(2))  >= e;
			} else {
				var hantei = wk.substring(2).split("～");
				return hantei[0] <= e && hantei[1] >= e;
			}
		}
	}
};

//季節
s.title = "Filter by Season";
selectSet(s,["Season","Warm","Cold","Breed"]);
s.style.position = "relative",s.style.top = "0",s.style.right = "-150px";
tH.cells[1].appendChild(s.cloneNode(true));
var ckField_F = function (e1,e2) {
	if (e1 === "Map" && e2 === "Season") {
		return function(){return true};
	} else if (e1 !== "Map" && e2 !== "Season") {
		return function (cell) {return cell.firstChild.nodeValue.indexOf(e1) !== -1 && cell.childNodes[2].nodeValue === e2;};
	} else if (e1 !== "Map") {
		return function (cell) {return cell.firstChild.nodeValue.indexOf(e1) !== -1;};
	} else {
		return function (cell) {return cell.childNodes[2].nodeValue === e2;};
	}
};

//金額ソート
i.value = "Amt",i.title = "Sort by Amount";
tH.cells[4].appendChild(i.cloneNode(false));

//HRPソート
i.value = "Point",i.title = "Sort by HRP";
tH.cells[5].appendChild(i.cloneNode(false));

tH=i=s=null;

//イベントのみソートしてみる
if (location.pathname.indexOf("ev_") !== -1) {
	var marker = document.createElement("tbody"),
		tB = document.getElementsByTagName("tbody")[0],
		tr = tB.rows,
		N = tr.length,
		x = [],
		date = new Date(),
		dateTxt = (date.getFullYear() + "/" + ("00" + (date.getMonth() + 1)).slice(-2) + "/" + ("00" + date.getDate()).slice(-2));

	for (var i = 0,w = ""; i<N;) {
		w = tr[i].cells[1].lastChild.firstChild.nodeValue.split("～")[1];
		if (tr[i].className !== "h" && w < dateTxt) tr[i].className = "h";	//期間を過ぎたら非表示
		x[i] = [w + ("000" + i).slice(-3)],
		x[i].row = tr[i++];
	}
	//x.sort(function(a, b){return b < a});
	x.sort();
	for (var i = 0; i<N; marker.appendChild(x[i++].row));
	tB.parentNode.replaceChild( marker,tB );
}
//フィルター
var filter = function () {
	var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
		tr = document.getElementsByTagName("tbody")[0].rows,
		N = tr.length;
	//状態
	if (document.getElementById("top")) {
		var sw = document.getElementById("top").getElementsByTagName("span");
		if (sw[0].style.color !== "") { //今週分のみ
			var ckLine = function (tr) {return tr.className === "" || tr.className === "e" || tr.className === "r";};
		} else if (sw[1].style.color !== "") { //全て
			var ckLine = function () {return true;};
		} else { //廃止除く
			var ckLine = function (tr) {return tr.className !== "h";};
		}
	} else {
		var ckLine = function () {return true;};
	}
	var ckField = ckField_F(s[1].value,s[0].value),ckTtarget = ckTtarget_F(s[2].value),ckHr = ckHr_F(s[3].value);
	for (var i = 0; i < N; i++ ) {
		tr[i].style.display = ckLine(tr[i]) && ckField(tr[i].cells[2]) && ckTtarget(tr[i].cells[6]) && ckHr(tr[i].cells[7]) ? "" : "none";
		/*@if (@_jscript_version <= 5.7)
		if (tr[i].style.display === "" && tr[i].cells[0].style.borderStyle === "none") {
			tr[i].cells[0].style.borderStyle = tr[i].cells[1].style.borderStyle = tr[i].cells[2].style.borderStyle = tr[i].cells[3].style.borderStyle = tr[i].cells[4].style.borderStyle = tr[i].cells[5].style.borderStyle = tr[i].cells[6].style.borderStyle = tr[i].cells[7].style.borderStyle = "ridge";
		} else if (tr[i].style.display !== "" && tr[i].cells[0].style.borderStyle !== "none") {
			tr[i].cells[0].style.borderStyle = tr[i].cells[1].style.borderStyle = tr[i].cells[2].style.borderStyle = tr[i].cells[3].style.borderStyle = tr[i].cells[4].style.borderStyle = tr[i].cells[5].style.borderStyle = tr[i].cells[6].style.borderStyle = tr[i].cells[7].style.borderStyle = "none";
		}
		/*@end@*/
	}
}

var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
for (var i = 0,max = s.length; i < max; addEvent(s[i++],"change",filter));
s=null;
if (document.getElementById("top")){
	addEvent(document.getElementById("top"),"click",
	function (evt) {
		/*@if (@_jscript_version < 9)
		var t = evt.srcElement;
		@else@*/
		var t = evt.target;
		/*@end@*/
		if (t.tagName === "SPAN"){
			var sw = document.getElementById("top").getElementsByTagName("span");
			sw[0].style.color = sw[1].style.color = sw[2].style.color = "";
			t.style.color = "red";
			filter();
			if (sw[1].style.color !== "") { //全て表示の場合
				/*@if (@_jscript_version < 9)
				document.styleSheets[0].addRule( "table#list tr.h", "display: block;");
				document.styleSheets[0].addRule( "table#list tr.h", "display: table-row;");
				@else@*/
				document.styleSheets[0].insertRule( "table#list tr.h { display: table-row;} ",document.styleSheets[0].cssRules.length );
				/*@end@*/
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
			N = tr.length
			x = [];
		x.sum = function (cell){
				return parseInt(cell.firstChild.nodeValue) + parseInt(cell.childNodes[2].nodeValue) + parseInt(cell.childNodes[4].nodeValue);
			}
		switch (t.title) {
		case "Sort by Amount":
			var col = 4;
			marker.id = "Z"+tB.id.charAt(0);
			break;
		case "Sort by HRP":
			var col = 5;
			marker.id = "H"+tB.id.charAt(0);
			break;
/*		case "場所順にソート":
			var col = 2;
			break;
*/		}
		for (var i = 0; i < N; x[i] = [x.sum(tr[i].cells[col])], x[i].row=tr[i++]);
		x.sort(function(a, b){return b - a});
		for (var i = 0; i < N; marker.appendChild(x[i++].row));
		tB.parentNode.replaceChild( marker,tB );
	}
});

//アンロード退避
addEvent(window,"unload",function () {
var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
	dispflg = "";
if (document.getElementById("top")) {
	var sw = document.getElementById("top").getElementsByTagName("span");
	if (sw[0].style.color !== "") { //今週分のみ
		dispflg = 0;
	} else if (sw[1].style.color !== "") { //全て
		dispflg = 1;
	} else { //廃止除く
		//dispflg = 2;
	}
}
document.cookie = "quest=" + [location.pathname,s[0].selectedIndex,s[1].selectedIndex,s[2].selectedIndex,s[3].selectedIndex,document.getElementsByTagName("tbody")[0].id,dispflg,document.documentElement.scrollTop].join("!");
});
//オンロード
var w = document.cookie;
if (w.indexOf("quest=" + location.pathname) !== -1) {
	w = w.split("quest=")[1].split("!");
	var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
	if (w[1]+w[2]+w[3]+w[4] > 0) {
		s[0].selectedIndex = w[1];
		s[1].selectedIndex = w[2];
		s[2].selectedIndex = w[3];
		s[3].selectedIndex = w[4];
		filter();
	}
	//ソート
	if (w[5] !== "") {
		var i = document.getElementsByTagName("thead")[0].getElementsByTagName("input");
		if (w[5].length === 2) {
			/*@if (@_jscript_version < 9) 
			i[w[5].charAt(1) === "Z" ? 0 : 1].fireEvent( "onclick" );
			@else@*/
			var evt = document.createEvent("MouseEvents");
			evt.initEvent("click", true, true);
			i[w[5].charAt(1) === "Z" ? 0 : 1].dispatchEvent(evt);
			/*@end@*/
		}
		/*@if (@_jscript_version < 9) 
		i[w[5].charAt(0) === "Z" ? 0 : 1].fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		i[w[5].charAt(0) === "Z" ? 0 : 1].dispatchEvent(evt);
		/*@end@*/
	}
	//今週分のみなど
	if (w[6] !== "") {
		/*@if (@_jscript_version < 9) 
		document.getElementById("top").getElementsByTagName("span")[+w[6]].fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		document.getElementById("top").getElementsByTagName("span")[+w[6]].dispatchEvent(evt);
		/*@end@*/
	}
//	window.scrollTo(0,parseInt(w[7]));
};
//廃止クエスト
if (location.pathname.indexOf("x") !== -1) { //全て表示の場合
	/*@if (@_jscript_version < 9)
	document.styleSheets[0].addRule( "table#list tr.h", "display: block;");
	document.styleSheets[0].addRule( "table#list tr.h", "display: table-row;");
	@else@*/
	document.styleSheets[0].insertRule( "table#list tr.h { display: table-row;} ",document.styleSheets[0].cssRules.length );
	/*@end@*/
}

})();
