(function(document){
/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
//ƒCƒxƒ“ƒgƒZƒbƒg
var addEvent = function (elm, type, func) {
	//’Ç‰Á
	elm./*@cc_on @if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//ƒAƒ“ƒ[ƒh‚Åíœ
	window./*@cc_on @if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@cc_on @if (@_jscript_version < 9) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
};
//ü‰Â•Ï
	var IsMouseDown = false;
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
			document.getElementById("line").style.left = (e.clientX -1)  + "px";
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
			document.getElementById("line").style.left = (e.clientX -4)  + "px";
		}
	});

//ƒcƒŠ[
var LIST_ID = "",LIST_TYPE = true,  //true=ƒVƒŠ[ƒY,false=•”ˆÊ
	CK_NEKO = location.pathname.indexOf("_partnya") !== -1,
	MST_Item = setItem(),MST_Equip = SkillForm.MST_Equip;
setItem = SkillForm = null;
addEvent(document.getElementById("tree"),"click",
function (evt) {
	/*@if (@_jscript_version < 9)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	
	if (t.tagName === "SPAN" && t.id !== ""){
		var cre = document.getElementById("tree").getElementsByTagName("span"),creB = document.getElementById("tree").getElementsByTagName("div");
		for (var i = 0,m = cre.length; i < m; cre[i].style.color = "",creB[i++].style.display = "none");
		document.getElementById(t.id).style.color = "red";
		document.getElementById(t.id+"L").style.display = "block";
	} else if (!CK_NEKO && t.tagName === "A"){

		var id_list = t.parentNode.getElementsByTagName("a");
		//‚¢‚Ü•\¦‚³‚ê‚Ä‚¢‚é‚à‚Ì‚Æ“¯‚¶‚©
		if (LIST_ID === id_list[0].href.substring(1)) {
			return;
		} else {
			LIST_ID = id_list[0].href.substring(1);
		}
//ƒXƒLƒ‹ƒVƒ~ƒ…‚©‚çcpy
var I_bNAME = 0,I_bSEX = 1,I_bTYPE = 2,I_bRARE = 3,I_bGR = 4,I_bF = 5,I_bW = 6,I_bT = 7,I_bD = 8,I_bI = 9,I_bSN1 = 10,I_bSP1 = 11,I_bSN2 = 12,I_bSP2 = 13,I_bSN3 = 14,I_bSP3 = 15,I_bSN4 = 16,I_bSP4 = 17,I_bSN5 = 18,I_bSP5 = 19,I_bUPGBACK = 20,I_bRECIPE1 = 21,I_bHR1 = 22,I_bLVUPPTN = 23,I_bLVMAX = 24,I_bZENY = 25,I_bDEF = 26,I_bSLOT1 = 27,I_bSLOT7 = 28,I_bZENYPTN = 29,I_bDEFPTN = 30,I_bSLOTPTN = 31,I_bUPGCNT = 32,I_bCRE = 33,I_bDEC = 34,I_bCLASS = 35,I_bTrSLOT = 36,I_bTeni = 37,I_bDOC = 38,I_bIMG = 39;
var getSozai = function (eq){
	if (eq[I_bLVUPPTN]) {
		var list = MST_Equip.sozai[parseInt(eq[I_bLVUPPTN],16)].split(",");
		//¶Y‚Ìê‡‚Ì‘fŞ‚ğ•ÏX
		if (eq[I_bRECIPE1]) list[0] = eq[I_bRECIPE1];
		//HR’²®
		list[7+0] = eq[I_bHR1];
		for (var i = 0;i < 6 && +list[7+i+1] < +list[7+i]; list[7+i+1] = list[7+i],i++); //1‚Âæ‚ª¬‚³‚¢ê‡“ü‚ê‘Ö‚¦
		return list;
	} else { //‘•ü•i
		return [eq[I_bRECIPE1],"","","","","","",eq[I_bHR1],"","","","","",""];
	}
};
var getZeny = function (eq){
	if (eq[I_bLVUPPTN]) {
		var zeny = +eq[I_bZENY],ptncd = eq[I_bZENYPTN],ptn = MST_Equip.zeny[parseInt(ptncd,16)].split(",");
		var list = [zeny];
		for (var i = 1;i < 7; i++) {
			if (zeny === 0 ||
				ptn[i] % 25 === 0 || 
				ptn[i] === "280" || ptn[i] === "180" || ptn[i] === "8" || ptn[i] === "115" || ptn[i] === "220" ||
				(ptncd === "04" && ptn[i] === "10" && (zeny === 10875 || zeny === 1125)) ||
				(ptncd === "05" && ptn[i] === "420" && (zeny === 1000 || zeny === 1100 || zeny === 1200 || zeny === 4100 || zeny === 8000 || zeny === 8800)) ||
				(ptncd === "08" && (ptn[i] === "5" || ptn[i] === "15") && (zeny === 17250 || zeny === 21250))) {
				list[i] = zeny * ptn[i] / 100|0;
			} else {
				list[i] = (zeny * ptn[i] / 100|0) - 1;
			}
		}
		//¶Y‚Ìê‡‚Ì”¼Šz‚É
		if (eq[I_bRECIPE1] && eq[I_bRECIPE1].indexOf("“X”„‚è") === -1) list[0] = zeny / 2|0;
		return list;
	} else { //‘•ü•i
		return [eq[I_bZENY],"","","","","",""];
	}
};
var getDef = function (eq){
	if (eq[I_bLVUPPTN]) {
		var def = +eq[I_bDEF],ptncd = eq[I_bDEFPTN],ptn = MST_Equip.def[parseInt(ptncd,16)].split(",");
		var list = [def];
		for (var i = 1;i < 7; i++) {
			if (ptn[i] === "100" ||
				ptncd === "05" && ptn[i] === "102" && def === 51 ||
				(ptn[i] * def) % 100 === 0 &&
				!(ptn[i] === "120" && (def === 25 || def === 45 || def === 50 || def === 90 || def === 100)) &&
				!(ptn[i] === "108" && (def === 25))) {
				def = def * ptn[i] / 100|0;
			} else {
				def = (def * ptn[i] / 100|0) + 1;
			}
			list[i] = def;
		}
		return list;
	} else { //‘•ü•i
		return ["","","","","","",""];
	}
};
var getSlot = function (eq){
	if (eq[I_bLVUPPTN]) {
		var slot = +eq[I_bSLOT1],slotmax = +eq[I_bSLOT7],ptn = MST_Equip.slot[parseInt(eq[I_bSLOTPTN],16)].split(",");
		var list = [slot + +ptn[0],slot + +ptn[1],slot + +ptn[2],slot + +ptn[3],slot + +ptn[4],slot + +ptn[5],slot + +ptn[6]];
		for (var i = 0;i < 7; i++) {
			if (list[i] >= slotmax) list[i] = slotmax;
		}
		return list;
	} else { //‘•ü•i
		return [eq[I_bSLOT7],"","","","","",""];
	}
};
var sozaiHtml = function (recipe) {
	if (!recipe) return "";
	var t = [],list = recipe.split(" ");
	for (var i = 0,cnt = 0,m = list.length; i < m; i++) {
		var w = list[i];
		if (!isNaN(w.charAt(w.length-1)) || !isNaN(w.charAt(w.length-2))) {
			if (w.lastIndexOf("R") !== -1) {
				t[cnt++] = "<a href='../sozai/sozai.htm?" + w.substring(0,4) + "W' target=_blank class=r>" + MST_Item[w.substring(0,4)][0] + "</a>x" + parseInt(w.substring(4));
			} else {
				t[cnt++] = "<a href='../sozai/sozai.htm?" + w.substring(0,4) + "W' target=_blank>" + MST_Item[w.substring(0,4)][0] + "</a>x" + w.substring(4);
			}
		} else {
			t[cnt++] = w;
		}
	}
	return t.join(","); //ƒRƒR‚¾‚¯ˆá‚¤
};
//copy‚±‚±‚Ü‚Å
		var BUINAME = ["“ª","“·","˜r","˜","‹r"],
			SEXNAME = ["","’j«","—«"],
			TYPENAME = ["","Œ•m","ƒKƒ“"],
			CLASSTYPE = {"":" ",A:"‚r‚o",B:"<p>„í–h‹ï</p>",C:"<p>“V—’–h‹ï</p>",D:"<p>”eí–h‹ï</p>",E:"<p>HC–h‹ï</p>",F:"<p>ëŒì–h‹ï</p>",G:"<p>‚f‹‰”eí–h‹ï</p>",H:"<p>—óí–h‹ï</p>",I:"<p>G‹‰–h‹ï</p>",J:"<p>G‹‰ëŒì–h‹ï</p>",K:"<p>”é“`–h‹ï</p>",L:"<p>G‹‰”é“`–h‹ï</p>",M:"<p>ní–h‹ï</p>",N:"<p>“V˜L–h‹ï</p>",O:"<p>‘J—I–h‹ï</p>",P:"<p>’HˆÙ–h‹ï</p>",Q:"<p>’HˆÙëŒì–h‹ï</p>"},
			SKILLNAME = [,"óg","‰^‹C","‰^”À","©“®–hŒä","ƒK[ƒh«”\","‰ñ•œ","‰ñ•œ‘¬“x","ŠgU’e’Ç‰Á","R”»","—‹‘Ï«","ŠÑ’Ê’e‹­‰»","ŠÑ’Ê’e’Ç‰Á","‹Câ","‹C‚Ü‚®‚ê","a‚ê–¡","H‚¢‚µ‚ñ–V","‹C”z","’Bl","Lˆæ‰ñ•œ","Lˆæ‰ğ“Å","UŒ‚","Ìæ","U’e‹­‰»","U’e’Ç‰Á","‡–°","‘S‘Ï«‚t‚o","ç—¢Šá","‘•“U","‘ÏŠ¦","‘Ï‹","‘Ì—Í"," ","íLˆæ‰»","’e’²‡","’n}","’®Šo•ÛŒì","’²‡¬Œ÷—¦","’Êí’e‹­‰»","’Êí’e’Ç‰Á","’Ş‚è","------","------","------","“Š±","Œ¤‚¬t","“Å","“ÁêUŒ‚","“÷","“‚İ–³Œø","”š’e‹­‰»","‚Í‚ç‚Ö‚è","”½“®","‰Î‘Ï«","•—ˆ³","“J","–hŒä","–ƒáƒ","…‘Ï«","—´‘Ï«","Ö’e’Ç‰Á","˜B‹àp","˜AË","‚‘¬ûW","‰ñ”ğ«”\","’ê—Í","Œø‰Ê‘±","ƒXƒ^ƒ~ƒi","‘•“U”","¸–§ËŒ‚","ƒ‚ƒ“ƒXƒ^[","H–","”‚¬æ‚è","’nŒ`","’EL","‘Ïá","•X‘Ï«","‘Ïk","Lˆæ","º‘Ñ","“÷Ä‚«","–Cpt","------","------","------","“J‚«–¼l","------","------","------","------","‚Æ‚ñ‚¸‚ç","‘Ìp","‹­Œ¨","------","‚Ğ‚ç‚ß‚«","ó‚¯g","------","------","------","------","ãJ","------","ª«","------","ˆ³—Í","•ßŠlãè","------","------","“Å•r’Ç‰Á","–ƒáƒ•r’Ç‰Á","‡–°•r’Ç‰Á","‰Î‘®«UŒ‚","…‘®«UŒ‚","—‹‘®«UŒ‚","•X‘®«UŒ‚","—´‘®«UŒ‚","’fH","----","”šŒ‚Œ•","‹­Œ‚Œ•","–Ò“ÅŒ•","–ƒáƒŒ•","‡–°Œ•","‰Î‰ŠŒ•","…ŒƒŒ•","—‹_Œ•","•XŒ‹Œ•","—´‰¤Œ•","—­‚ß’Zk","•ĞèŒ•‹Z","‘oŒ•‹Z","‘åŒ•‹Z","‘¾“‹Z","’È‹Z","ë—Â“J‹Z","‘„‹Z","e‘„‹Z","de‹Z","Œye‹Z","‹|‹Z","‚‘¬İ’u","•ŠíJ‚«","‘®«UŒ‚","‹C—Í‰ñ•œ","ƒiƒCƒtg‚¢","‚¢‚½‚í‚è","‘Î–hŒäDOWN","Œ•p","‘Ïó‘ÔˆÙí","‘ÏŒ","Œ‹»‘Ï«","¥—Í‘Ï«","Œx‰ú","‹~‰‡","Kã‚ª‚è","ˆê•C˜T","OŠE‚ÌŒì‚è","”½Ë","‘ã","“ ","‘¬Ë","„Œ‚","ŒÛ•‘","‰¶’","¶–½—Í","“{","“S˜r","ƒuƒŠ[ƒ_[","‘Š“¢‚¿","ˆê‘M","‹t‹«","Ëè","‘•’…","’ÉŒ‚","’²‡t","ël","îË","˜AŒ‚(íœ)","‰ñ”ğ‹——£","—­‚ßˆĞ—Í","’eŠÛß–ñp","ˆÚ“®‘¬“x","Š…","‹zŒŒ","“K‰Œ‚","•ƒm–½–¬","–ò‘Šw","ú—´‹Z","ø“®","‰Š’","Œ€•¨‚ÌS“¾","â‘Î–hŒä","•½íS","ÌW‚Ì‹É‚İ","I—¬","x‰‡","‰¸Ë","‘®Œ‚","“¬”e","ŒŒ‹CŠˆ«","Œ•_","“Z—‹","•ÏŒ‚","”²”[p","”š”j‘Ï«","‘M“]","•s‘Ş","IŒ‚","“€Œ‹‘Ï«","•XŠE‘n¶","æÒŒ‚","Œ••€‹Z","—vÇ","‘_Œ‚","“•š","’´‰ñ”ğ","–Òi","˜r—˜‚«","–‹–³","ˆê“_“Ë”j","‰öŠï","‹óŒ„","è—û","‚q•±v","¥a’È‹Z"],
			TENINAME = ["‚È‚µ","ƒXƒLƒ‹˜gŠg’£+1","ƒXƒLƒ‹˜gŠg’£+2","ƒXƒLƒ‹˜gŠg’£+3","ƒXƒLƒ‹˜gŠg’£+4","ƒXƒLƒ‹˜gŠg’£+5","ƒXƒLƒ‹˜gŠg’£+6","ƒXƒLƒ‹˜gŠg’£+7","‘M“]‹­‰»+1","‘M“]‹­‰»+2","IŒ‚‹­‰»+1","IŒ‚‹­‰»+2","‘®Œ‚‹­‰»","“Z—‹‹­‰»+1","“Z—‹‹­‰»+2","•XŠE‘n¶‹­‰»","•XŠE‘n¶‹­‰»","¨ğ‹­‰»+1","¨ğ‹­‰»+2","¨ğ‹­‰»+3","•—ˆ³‹­‰»+1","•—ˆ³‹­‰»+2","•—ˆ³‹­‰»+3","•—ˆ³‹­‰»+4","‘Ïk‹­‰»+1","‘Ïk‹­‰»+2","‘Ï“Å‹­‰»+1","‘Ï“Å‹­‰»+2","‘Ï–ƒáƒ‹­‰»+1","‘Ï–ƒáƒ‹­‰»+2","‘Ï‡–°‹­‰»+1","‘Ï‡–°‹­‰»+2","‹zŒŒ‹­‰»+1","‹zŒŒ‹­‰»+2","Œ€•¨‹­‰»","x‰‡‹­‰»","’eŠÛß–ñp‹­‰»+1","’eŠÛß–ñp‹­‰»+2","ƒK[ƒh«”\‹­‰»+1","ƒK[ƒh«”\‹­‰»+2","“K‰Œ‚‹­‰»+1","“K‰Œ‚‹­‰»+2","ŒÛ•‘‹­‰»+1","ŒÛ•‘‹­‰»+2","”½Ë‹­‰»+1","”½Ë‹­‰»+2","”½Ë‹­‰»+3","I—¬‹­‰»","ŒŒ‹CŠˆ«‹­‰»","“•š‹­‰»","Š…‹­‰»","–‹–³‹­‰»","–Òi‹­‰»"],
			MAKENAME = {"":"",1:"",2:"—Â’c",3:"ƒJƒtƒF",4:"‰Û‹à",5:"“Á“T","-":"",e:"ƒCƒx",es:"ƒCƒx/ë‰qí",s:"ë‰qí",t:"ë—ù“¹",u:"Œ}Œ‚í",m:"ëlÕ",c:"ÊßÛ°È",g:"ƒKƒ`ƒƒ",k:"ƒLƒbƒg",i:"èè‘Ê“V",p:"ƒpƒbƒP"},
			len = id_list[0].href.length,upglist = [[],[],[],[],[]],
			tB=document.getElementsByTagName("tbody")[0],tBCre = document.createElement("tbody"),insHeader = document.createElement("th");
		insHeader.style.height = "1em";
		insHeader.appendChild(document.createElement("br"));
		if (!LIST_TYPE) {	//•”ˆÊ•Ê
			var tBCreB = [document.createDocumentFragment(),document.createDocumentFragment(),document.createDocumentFragment(),document.createDocumentFragment(),document.createDocumentFragment()];
		}
		for (var i = 0,m = id_list.length,name = "",eq = "",l = 0;i < m;i++) {
			var buiid = id_list[i].href.charAt(len-5),eqid = id_list[i].href.substring(len-4);
			switch (buiid) {
			case "h":	name = "head", l = 0;break;
			case "b":	name = "body", l = 1;break;
			case "a":	name = "arm", l = 2;break;
			case "w":	name = "wst", l = 3;break;
			case "l":	name = "leg", l = 4;break;
			}
			eq = MST_Equip[name][eqid];
			if (typeof eq === "string") eq = MST_Equip[name][eqid] = MST_Equip[name][eqid].split(",");
			if (eq[I_bUPGBACK]) upglist[l][upglist[l].length] = eq[I_bUPGBACK].substring(0,4) + eqid + eq[I_bUPGBACK].charAt(4);
		}
		for (var i = 0,m = id_list.length,name = "",eq = "",l = 0,t = "";i < m;i++) {
			if (LIST_TYPE && id_list[i].previousSibling.nodeValue.lastIndexOf("(") >= 0) {	//•”ˆÊ•Ê‚Ìê‡‚Í‚È‚µ
				tBCre.appendChild(document.createElement("tr").appendChild(insHeader.cloneNode(true)));
			}
			var buiid = id_list[i].href.charAt(len-5),eqid = id_list[i].href.substring(len-4),insTR = document.createElement("tr"),insTD = document.createElement("td");

			switch (buiid) {
			case "h":	name = "head", l = 0;break;
			case "b":	name = "body", l = 1;break;
			case "a":	name = "arm", l = 2;break;
			case "w":	name = "wst", l = 3;break;
			case "l":	name = "leg", l = 4;break;
			}
			eq = MST_Equip[name][eqid];
//			if (typeof(eq) === "string") eq = MST_Equip[name][eqid] = MST_Equip[name][eqid].split(",");
			//Ú×
			insTR.id = buiid + eqid;
			//–¼‘O
			t = "<div>" + BUINAME[l] + "</div>" + eq[I_bNAME] + "<div>";
			//‹­‰»Œ³‘–¸
			if (eq[I_bUPGBACK]) {
				var IDu = eq[I_bUPGBACK].substring(0,4),Txtu = MST_Equip[name][IDu];
//				if (typeof(Txtu) === "string") Txtu = MST_Equip[name][IDu] = MST_Equip[name][IDu].split(",");
				
				t += "<a href=\"#" + buiid + IDu + "\">@" + 
					 Txtu[I_bNAME] + "Lv" + eq[I_bUPGBACK].charAt(4) + "©</a>";

//				upglist[l][upglist[l].length] = IDu + eqid + eq[I_bUPGBACK].charAt(4);
			}
			//‹­‰»æ‘–¸
			for (var k = upglist[l].length-1,ck = false;k >= 0; k--){
				if (upglist[l][k].substring(0,4) === eqid) {
					t += "<a href=\"#" + buiid + upglist[l][k].substring(4,8) + "\">¨" + MST_Equip[name][upglist[l][k].substring(4,8)][I_bNAME] + "</a>";
					ck = upglist[l][k].charAt(8);
				}
			}
			if (ck) t += "iLv" + ck + "ˆÈãj";
			//¸˜Bæ–¼Ì
			if (eq[I_bDEC]) t += "<a href=\"deco.htm#l" + eq[I_bDEC] + "\">¨" + MST_Equip["deco"][eq[I_bDEC]].split(",")[0] + "</a>Lv7‚æ‚è¸˜B";
			t += "</div>";
			t += CLASSTYPE[eq[I_bCLASS]];
			
			insTD.innerHTML = t;
			insTR.appendChild(insTD.cloneNode(true));
			//í—Ş
			t = SEXNAME[eq[I_bSEX]];
			t += (t && eq[I_bTYPE] !== "0" ? "<br>" : "") + TYPENAME[eq[I_bTYPE]];
			t += (t && eq[I_bCRE].charAt(0) !== "1" ? "<br>" : "") + MAKENAME[eq[I_bCRE].charAt(0)];
			t += (t && eq[I_bCRE].charAt(1) !== "-" ? "<br>" : "") + MAKENAME[eq[I_bCRE].substring(1)];
			if (eq[I_bGR]) t += (!t ? "" : "<br>") + "<b>GR" + eq[I_bGR] + "</b>";
			insTD.innerHTML = !t ? "<br>" : t;
			insTR.appendChild(insTD.cloneNode(true));
			//ƒŒƒA
			insTD./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = eq[I_bRARE];
			insTR.appendChild(insTD.cloneNode(true));
			//‘Ï«
			insTD.innerHTML = "‰Î:" + eq[I_bF] + "<br>"
							+ "…:" + eq[I_bW] + "<br>"
							+ "—‹:" + eq[I_bT] + "<br>"
							+ "•X:" + eq[I_bI] + "<br>"
							+ "—´:" + eq[I_bD];
			insTR.appendChild(insTD.cloneNode(true));
			//ƒXƒLƒ‹
			if (eq[I_bSP1]) {
				t = "<ul><li><em>" + SKILLNAME[eq[I_bSN1]] + "</em>" + eq[I_bSP1];
				if (eq[I_bSP2]) {
					t += "<ul><li><em>" + SKILLNAME[eq[I_bSN2]] + "</em>" + eq[I_bSP2];
					if (eq[I_bSP3]) {
						t += "<ul><li><em>" + SKILLNAME[eq[I_bSN3]] + "</em>" + eq[I_bSP3];
						if (eq[I_bSP4]) {
							t += "<ul><li><em>" + SKILLNAME[eq[I_bSN4]] + "</em>" + eq[I_bSP4];
							if (eq[I_bSP5]) {
								t += "<ul><li><em>" + SKILLNAME[eq[I_bSN5]] + "</em>" + eq[I_bSP5];
							}
						}
					}
				}
				if (eq[I_bCLASS] === "P") {
					t += "<ul><li><em><s>u" + TENINAME[eq[I_bTeni]] + "v</s></em>";
				}
				insTD.innerHTML = t + "</ul>";
			} else {
				insTD./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = "\n";
			}
			insTR.appendChild(insTD.cloneNode(true));

			var tdef = "",thr = "",bkhr = "",tzeny = "",treci = "", reci_data = getSozai(eq), zeny_data = getZeny(eq), def_data = getDef(eq), slot_data = getSlot(eq);
			for (var j = 0; j < eq[I_bLVMAX]; j++){
				//–hŒäƒXƒ
				tdef += def_data[j]+"/"+slot_data[j] + "<br>";
				//HR
				if (reci_data[7+j] === bkhr) {
					thr += "|<br>";
				} else {
					if (reci_data[7+j] < 1000) {
						thr += "HR" + reci_data[7+j] + "<br>";
					} else if (reci_data[7+j] < 2000) {
						thr += "SR" + (reci_data[7+j]-1000) + "<br>";
					} else if (reci_data[7+j] < 3000) {
						thr += "GR" + (reci_data[7+j]-2000) + "<br>";
					} else if (reci_data[7+j] < 4000) {
						thr += "GSR" + (reci_data[7+j]-3000) + "<br>";
					}
					bkhr = reci_data[7+j];
				}
				//ƒ[ƒj[
				tzeny += zeny_data[j] + "<br>";
				//‘fŞ
				if (j === 0 && eq[I_bRECIPE1]) {
					treci += "¶Y:"
				}
				treci += sozaiHtml(reci_data[j]) + "<br>";
				//‹­‰»Œ³‚ª‚ ‚é‚Ì‚É¶Y‘fŞ‚à‚ ‚é
				if (j === 0 && eq[I_bUPGBACK] && eq[I_bRECIPE1]) {
					tdef = "<br>" + tdef;
					thr  = "<br>" + thr;
					tzeny   = "<br>" + tzeny;
					treci += "‹­‰»:" + sozaiHtml(MST_Equip.sozai[parseInt(eq[I_bLVUPPTN],16)].split(",")[0]) + "<br>";
				}
			}
			insTD.innerHTML = tdef;
			insTR.appendChild(insTD.cloneNode(true));
			insTD.innerHTML = thr;
			insTR.appendChild(insTD.cloneNode(true));
			insTD.innerHTML = tzeny;
			insTR.appendChild(insTD.cloneNode(true));
			insTD.innerHTML = treci;
			insTR.appendChild(insTD.cloneNode(true));
			insTD.innerHTML = eq[I_bDOC].substring(0,13)+"<br>"+eq[I_bDOC].substring(13,26)+"<br>"+eq[I_bDOC].substring(26);
			insTR.appendChild(insTD.cloneNode(true));

			if (LIST_TYPE) {
				//ƒVƒŠ[ƒY•Ê
				tBCre.appendChild(insTR.cloneNode(true));
			 } else {
				//•”ˆÊ•Ê
				tBCreB[l].appendChild(insTR.cloneNode(true));
			}
		}
//		var insBODY = document.createElement("tbody");
//		tB.parentNode.replaceChild( insBODY,tB );
//		var wTR = tBCre.getElementsByTagName("tr");
//		for (var j = 0,m = wTR.length;j < m;insBODY.appendChild(wTR[j++].cloneNode(true)));
		if (!LIST_TYPE) {	//•”ˆÊ•Ê
			for (var l = 0;l < 5;l++) {
				insHeader./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = BUINAME[l] + "‘•”õ";
				tBCre.appendChild(document.createElement("tr").appendChild(insHeader.cloneNode(true)));
				tBCre.appendChild(tBCreB[l]);
			}
		}
		tB.parentNode.replaceChild( tBCre,tB );
//		location.hash = t.href.substring(t.href.length-6,t.href.length);
	}
});
//ƒAƒ“ƒ[ƒh‘Ş”ğ
addEvent(window,"unload",function () {
	var cre = document.getElementById("tree").getElementsByTagName("span"),
		dispflg = "";
	for (var i=0,m=cre.length; i<m; i++) {
		if (cre[i].style.color !== "") {
			dispflg = cre[i].id.substring(1);
			break;
		}
	}
	document.cookie = "bougu=" + [location.pathname+location.hash,dispflg,document.getElementById("tree").scrollTop,document.getElementById("data").scrollTop].join("!");
});
//ƒIƒ“ƒ[ƒh
var t = document.cookie;
if (t.indexOf("bougu=" + location.pathname+location.hash) !== -1) {
	t = t.split("bougu=")[1].split("!");
	//ì¬í•Ê
	if (t[1] !== "") {
		/*@if (@_jscript_version < 9) 
		document.getElementById("t"+t[1]).fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		document.getElementById("t"+t[1]).dispatchEvent(evt);
		/*@end@*/
		if (location.hash.length > 0) {
			//ƒf[ƒ^•”¶¬
			var treehref = document.getElementById("t"+t[1]+"L").getElementsByTagName("a");
			for (var j=0,l=treehref.length; j<l; j++){
				if (treehref[j].href.lastIndexOf(location.hash) !== -1) {
					treehref[j].focus();

					setTimeout(function (){
						/*@if (@_jscript_version < 9) 
						treehref[j].fireEvent( "onclick" );
						@else@*/
						var evt = document.createEvent("MouseEvents");
						evt.initEvent("click", true, true);
						treehref[j].dispatchEvent(evt);
						/*@end@*/
						document.getElementById("data").scrollTop = parseInt(t[3]);
					}, 32);
					break;
				}
			}
		}
	}
	document.getElementById("tree").scrollTop = parseInt(t[2]);

} else if (location.hash.length > 0) {
	var creB = document.getElementById("tree").getElementsByTagName("div");
	for (var i=0,m=creB.length; i<m; i++){
		if (creB[i].innerHTML.indexOf(location.hash) !== -1) {
			//ì¬í•Ê
			var treeid = creB[i].id.substring(0,creB[i].id.length-1);
			/*@if (@_jscript_version < 9) 
			document.getElementById(treeid).fireEvent( "onclick" );
			@else@*/
			var evt = document.createEvent("MouseEvents");
			evt.initEvent("click", true, true);
			document.getElementById(treeid).dispatchEvent(evt);
			/*@end@*/
			//
			var treehref = creB[i].getElementsByTagName("a");
			for (var j=0,l=treehref.length; j<l; j++){
				if (treehref[j].href.lastIndexOf(location.hash) !== -1) {
					treehref[j].focus();
//					setTimeout(function (){
						//ƒf[ƒ^•”¶¬
						/*@if (@_jscript_version < 9) 
						treehref[j].fireEvent( "onclick" );
						@else@*/
						var evt = document.createEvent("MouseEvents");
						evt.initEvent("click", true, true);
						treehref[j].dispatchEvent(evt);
						/*@end@*/
//					}, 32);

					break;
				}
			}
			break;
		}
	}
};

})(document);
