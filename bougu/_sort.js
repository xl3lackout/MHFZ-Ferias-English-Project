setTimeout(function (){
/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
//ƒCƒxƒ“ƒgƒZƒbƒg
var addEvent = function (elm, type, func) {
	//’Ç‰Á
	elm./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//ƒAƒ“ƒ[ƒh‚Åíœ
	window./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@cc_on @if (true) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
};
//ƒŠƒXƒgƒZƒbƒg
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

//HTML‚Éƒ{ƒ^ƒ“’Ç‰Á

//‰Šúİ’è
var armorCK = location.pathname.indexOf("deco") === -1,
	tH = document.getElementsByTagName("thead")[0].rows[0],
	dt = document.createElement("div"),
	i = document.createElement("input"),
	s = document.createElement("select");
dt.className = "m",i.type = "button";
//–¼Ìƒ\[ƒg
i.value = "–¼‘O",i.title = "–¼‘O‡‚Éƒ\[ƒg";
dt.appendChild(i.cloneNode(false));
tH.cells[0].appendChild(dt);
if (armorCK) {
	//–hŒäƒ\[ƒg
	i.value = "–hŒä",i.title = "–hŒä‡‚Éƒ\[ƒg";
	dt.appendChild(i.cloneNode(false));
	//ƒŒƒA§ŒÀ
	s.title = "ƒŒƒA‚Åi‚İ";
	selectSet(s,["Ú±","11","10","9","8","7","6","5","4","3","2","1"]);
	s.selectedIndex = 0;
	dt.appendChild(s.cloneNode(true));
	var ckRare_F = function (e) {
		return e === "Ú±" ? function(){return true} : function (cell) {return +cell.firstChild.nodeValue <= e};
	};
	//‘Ï«ƒ\[ƒg
	s.style.display = "block",s.title = "‘Ï«‡‚Éƒ\[ƒg";
	selectSet(s,["‡","‰Î","…","—‹","•X","—´"]);
	tH.cells[3].appendChild(s.cloneNode(true));
	//ƒXƒ§ŒÀ
	s.title = "ƒXƒƒbƒg‚Åi‚İ";
	selectSet(s,["½Û","3","2","1"]);
	tH.cells[5].removeChild(tH.cells[5].childNodes.item(1));
	tH.cells[5].appendChild(s.cloneNode(true));
	var ckSlot_F = function (e) {
		return e === "½Û" ? function(){return true} : function (cell) {return cell.lastChild.nodeValue.split("/")[1] >= e;};
	};
} else { //‘•ü•i
	//G§ŒÀ
	s.title = "GR‚Åi‚İ";
	selectSet(s,["GR","GX","GF","G"]);
	s.selectedIndex = 0;
	if (location.pathname.indexOf("deco.htm") === -1) s.style.display = "none";
	dt.appendChild(s.cloneNode(true));
	var ckGr_F = function (e) {
		return e === "GR" ? function(){return true} : 
				e === "GX" ? function (cell) {return cell.firstChild.nodeValue.indexOf("ËìGX") !== -1 || cell.firstChild.nodeValue.indexOf("Œ•ìGX") !== -1;} :
				e === "GF" ? function (cell) {return cell.firstChild.nodeValue.indexOf("ËìGF") !== -1 || cell.firstChild.nodeValue.indexOf("Œ•ìGF") !== -1;} :
							function (cell) {return cell.firstChild.nodeValue.indexOf("Ëì‚f") !== -1 || cell.firstChild.nodeValue.indexOf("Œ•ì‚f") !== -1;};
	};
	//‘fŞi‚è‚±‚İ
	var dt = document.createElement("div"),
		i = document.createElement("input");
	i.type = "text",i.title = "‘fŞ‚Åi‚İ";
	dt.appendChild(i.cloneNode(false));
	i.type = "button",i.value = "i‚İ",i.title = "‘fŞ‚Åi‚İ";
	dt.appendChild(i.cloneNode(false));
	tH.cells[7].appendChild(dt);
	var ckSozai_F = function (e) {
		return e === "" ? function(){return true} : function (cell) {return cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf(e) !== -1;}
	};
}
//ƒXƒLƒ‹§ŒÀ
s.style.display = "block",s.title = "ƒXƒLƒ‹‚Åi‚İ";
if (location.pathname.indexOf("deconk") !== -1) {
	selectSetGroup(s,[
	["ƒXƒLƒ‹",["‘I‘ğ"]],
	["UŒ‚Œn",["UŒ‚","‰ïS","“x‹¹","‰Î‘®«‹­‰»","…‘®«‹­‰»","—‹‘®«‹­‰»","•X‘®«‹­‰»","—´‘®«‹­‰»","Œ•p","SŠáp","ŠÑ’Ê“Š±","“Á‘å“Š±","–ƒáƒUŒ‚","‡–°UŒ‚","“ÅUŒ‚","“ÁêUŒ‚"]],
	["–hŒäŒn",["–hŒä","”½Ë_Œo","”½Ëp"]],
	["‘Ì—ÍEƒXƒ^ƒ~ƒiŒn",["‘Ì—Í"]],
	["ó‘ÔˆÙíŒn",["“Å","–ƒáƒ","‡–°","‹Câ"]],
	["‘Ï«Œn",["‘S‘Ï«","‰Î‘Ï«","…‘Ï«","—‹‘Ï«","•X‘Ï«","—´‘Ï«"]],
	["•ÛŒìŒn",["–h‰¹","‘Ïk","•—ˆ³","’_—Í"]],
	["ƒAƒCƒeƒ€E’²‡Œn",["‹Sl“Jp","‰ñ•œ“Jp","d‰»“Jp","áƒã©p"]],
	["•ñVŒn",["‰^"]],
	["‚»‚Ì‘¼Œn",["•œ‹A—Í","”­•±p","Œƒ—ãp","ãJp","ˆÚ“®‘¬“x"]]
	]);
} else if (location.pathname.indexOf("decotk") !== -1 || location.pathname.indexOf("decotf") !== -1) {
	selectSet(s,["‘I‘ğ"]);
	s.style.display = "none";
} else {
	selectSetGroup(s,[
	["ƒXƒLƒ‹",["‘I‘ğ"]],
	["UŒ‚Œn",["„Œ‚","UŒ‚","ˆê•C˜T","ˆê‘M","’Bl","‘M“]","’ÉŒ‚","IŒ‚","‘®Œ‚","•ÏŒ‚","Œ€•¨‚ÌS“¾","“ÁêUŒ‚","‰öŠï","‰Î‘®«UŒ‚","…‘®«UŒ‚","—‹‘®«UŒ‚","•X‘®«UŒ‚","—´‘®«UŒ‚","‘®«UŒ‚","”š’e‹­‰»","–Cpt","ŒÛ•‘","“J‚«–¼l","‘Ìp","‹t‹«","“{","’ê—Í","˜r—˜‚«","è—û","’fH","—­‚ß’Zk","—­‚ßˆĞ—Í","•ŠíJ‚«","Kã‚ª‚è","“K‰Œ‚","“¬”e","ŒŒ‹CŠˆ«","“Z—‹","æÒŒ‚","“•š","–Òi","–‹–³","ˆê“_“Ë”j","‚q•±v","•s‘Ş"]],
	["–hŒäŒn",["¶–½—Í","”½Ë","–hŒä","—vÇ","ƒK[ƒh«”\","©“®–hŒä","‚Æ‚ñ‚¸‚ç"]],
	["‘Ì—ÍEƒXƒ^ƒ~ƒiŒn",["‘Ì—Í","‰ñ•œ‘¬“x","‰ñ•œ","‹zŒŒ","–ò‘Šw","‹C—Í‰ñ•œ","‚Í‚ç‚Ö‚è","ƒXƒ^ƒ~ƒi","H–","H‚¢‚µ‚ñ–V"]],
	["Œ•mŒn",["Œ¤‚¬t","a‚ê–¡","I—¬","“ "," ","”šŒ‚Œ•","–Ò“ÅŒ•","–ƒáƒŒ•","‡–°Œ•","‰Î‰ŠŒ•","…ŒƒŒ•","—‹_Œ•","•XŒ‹Œ•","—´‰¤Œ•","•ĞèŒ•‹Z","‘oŒ•‹Z","‘åŒ•‹Z","‘¾“‹Z","’È‹Z","ë—Â“J‹Z","‘„‹Z","e‘„‹Z","Œ••€‹Z","ú—´‹Z","¥a’È‹Z","Œ•p","Œ•_"]],
	["ƒKƒ“ƒi[Œn",["Ëè","’Êí’e‹­‰»","ŠÑ’Ê’e‹­‰»","U’e‹­‰»","’Êí’e’Ç‰Á","ŠÑ’Ê’e’Ç‰Á","U’e’Ç‰Á","Ö’e’Ç‰Á","ŠgU’e’Ç‰Á","“Å•r’Ç‰Á","–ƒáƒ•r’Ç‰Á","‡–°•r’Ç‰Á","‘•’…","‰¸Ë","‘•“U”","‘¬Ë","˜AË","‘•“U","”½“®","îË","¸–§ËŒ‚","’e’²‡","’eŠÛß–ñp","‘_Œ‚","‹óŒ„","de‹Z","Œye‹Z","‹|‹Z"]],
	["ó‘ÔˆÙíŒn",["“Å","–ƒáƒ","‡–°","‘Ïó‘ÔˆÙí","‹Câ","’EL","‘Ïá","º‘Ñ","‘Î–hŒäDOWN","‘ÏŒ","”š”j‘Ï«","¥—Í‘Ï«","Œ‹»‘Ï«","“€Œ‹‘Ï«"]],
	["‘Ï«Œn",["‘S‘Ï«‚t‚o","‰Î‘Ï«","…‘Ï«","•X‘Ï«","—‹‘Ï«","—´‘Ï«"]],
	["•ÛŒìŒn",["OŠE‚ÌŒì‚è","’®Šo•ÛŒì","‘Ïk","•—ˆ³","“‚İ–³Œø","‘Ï‹","‘ÏŠ¦","Œx‰ú","’nŒ`","’´‰ñ”ğ","‰ñ”ğ«”\","‰ñ”ğ‹——£","ó‚¯g","R”»","ª«","â‘Î–hŒä"]],
	["ƒAƒCƒeƒ€E’²‡Œn",["’²‡t","Œø‰Ê‘±","Lˆæ","‹C‚Ü‚®‚ê","“Š±","‹­Œ¨","ël","“÷Ä‚«","’Ş‚è","’²‡¬Œ÷—¦","˜B‹àp","‚‘¬İ’u","“S˜r","ƒiƒCƒtg‚¢"]],
	["MAP’T’mŒn",["’n}","ç—¢Šá","‹C”z","ø“®"]],
	["Ìæ‰^”ÀŒn",["‰^”À","‚‘¬ûW","Ìæ","”‚¬æ‚è","•½íS"]],
	["•ñVŒn",["‰^‹C","ƒ‚ƒ“ƒXƒ^[","ˆ³—Í"]],
	["‚»‚Ì‘¼Œn",["ƒuƒŠ[ƒ_[","ãJ","‚Ğ‚ç‚ß‚«","•ßŠlãè","‹~‰‡","‚¢‚½‚í‚è","ˆÚ“®‘¬“x","Š…","x‰‡","‰¶’","‘ã","•ƒm–½–¬","‰Š’","”²”[p","•XŠE‘n¶"]]
	]);
}
tH.cells[4].appendChild(s.cloneNode(true));
tH.cells[4].appendChild(s.cloneNode(true));
var ckSkill_F = function (e) {
	return e === "‘I‘ğ" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf(">"+e+"<") !== -1;};
	};
//’HˆÙ§ŒÀ
if (armorCK || location.pathname.indexOf("decocz") !== -1) {
	s = document.createElement("select");
	s.title = "’HˆÙ‚Åi‚İ";
	selectSet(s,["’HˆÙ","ƒXƒLƒ‹˜gŠg’£","‘M“]‹­‰»","IŒ‚‹­‰»","‘®Œ‚‹­‰»","“Z—‹‹­‰»","•XŠE‘n¶‹­‰»","¨ğ‹­‰»","•—ˆ³‹­‰»","‘Ïk‹­‰»","‘Ï“Å‹­‰»","‘Ï–ƒáƒ‹­‰»","‘Ï‡–°‹­‰»","‹zŒŒ‹­‰»","Œ€•¨‹­‰»","x‰‡‹­‰»","’eŠÛß–ñp‹­‰»","ƒK[ƒh«”\‹­‰»","“K‰Œ‚‹­‰»","ŒÛ•‘‹­‰»","”½Ë‹­‰»","I—¬‹­‰»","ŒŒ‹CŠˆ«‹­‰»","“•š‹­‰»","Š…‹­‰»","–‹–³‹­‰»","–Òi‹­‰»"]);
	tH.cells[4].appendChild(s.cloneNode(true));
	var ckTeni_F = function (e) {
		return e === "’HˆÙ" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf("u"+e) !== -1;};
		};
}
tH=dt=i=s=null;

//ƒtƒBƒ‹ƒ^[
if (armorCK) {
	//–h‹ï
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
	//‘•ü•i
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
	//‘•ü•i
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
	//–h‹ï
} else {
	//‘•ü•i
	for (var i = 0,max = s.length; i < max; addEvent(s[i++],"change",filter));
	addEvent(document.getElementsByTagName("thead")[0].getElementsByTagName("input")[1],"change",filter);
}
s=null;

//ƒCƒxƒ“ƒg“o˜^
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
		case "–¼‘O‡‚Éƒ\[ƒg":
			var Fulltohalf = (function (){
				var han = "0123456789.,-+ABCDEFGHIJKLMNOPQRSTUVWXYZ±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜ¦İ±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜ¦İ§§¨¨©©ªª««¯¯¬¬­­®®¶·¸¹º»¼½¾¿ÀÁÂÃÄÊËÌÍÎÊËÌÍÎ¶·¸¹º»¼½¾¿ÀÁÂÃÄÊËÌÍÎÊËÌÍÎ³";
				var zen = "‚O‚P‚Q‚R‚S‚T‚U‚V‚W‚XDC|{‚`‚a‚b‚c‚d‚e‚i‚g‚h‚i‚j‚k‚l‚m‚n‚o‚p‚q‚r‚s‚t‚u‚v‚w‚x‚yƒAƒCƒEƒGƒIƒJƒLƒNƒPƒRƒTƒVƒXƒZƒ\ƒ^ƒ`ƒcƒeƒgƒiƒjƒkƒlƒmƒnƒqƒtƒwƒzƒ}ƒ~ƒ€ƒƒ‚ƒ„ƒ†ƒˆƒ‰ƒŠƒ‹ƒŒƒƒƒ’ƒ“‚ ‚¢‚¤‚¦‚¨‚©‚«‚­‚¯‚±‚³‚µ‚·‚¹‚»‚½‚¿‚Â‚Ä‚Æ‚È‚É‚Ê‚Ë‚Ì‚Í‚Ğ‚Ó‚Ö‚Ù‚Ü‚İ‚Ş‚ß‚à‚â‚ä‚æ‚ç‚è‚é‚ê‚ë‚í‚ğ‚ñ‚Ÿƒ@‚¡ƒB‚£ƒD‚¥ƒF‚§ƒH‚Áƒb‚áƒƒ‚ãƒ…‚åƒ‡‚ª‚¬‚®‚°‚²‚´‚¶‚¸‚º‚¼‚¾‚À‚Ã‚Å‚Ç‚Î‚Ñ‚Ô‚×‚Ú‚Ï‚Ò‚Õ‚Ø‚ÛƒKƒMƒOƒQƒSƒUƒWƒYƒ[ƒ]ƒ_ƒWƒdƒfƒhƒoƒrƒuƒxƒ{ƒpƒsƒvƒyƒ|ƒ”";
				return function (strVal) {
					for (var i = 0,str = "",m = strVal.length,c,n; i<m; i++){
						c = strVal.charAt(i),n = zen.indexOf(c,0);
						str += n >= 0 ? han.charAt(n) : "Ş" + c;
					}
					return str;
				}
			})();
			for (var i = 0; i < N; x[i] = [Fulltohalf(tr[i].cells[0].firstChild.nodeValue)], x[i].row=tr[i++]);
			x.sort();
			for (var i = 0; i < N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		case "–hŒä‡‚Éƒ\[ƒg":
			for (var i = 0; i < N; x[i] = [tr[i].cells[5].lastChild.nodeValue.split("/")[0]], x[i].row=tr[i++]);
			x.sort(function(a, b){return b - a});
			for (var i = 0; i < N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		}
	}
});
}, 32);
