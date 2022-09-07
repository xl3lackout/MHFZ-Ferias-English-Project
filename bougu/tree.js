(function(document){
/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
//イベントセット
var addEvent = function (elm, type, func) {
	//追加
	elm./*@cc_on @if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//アンロードで削除
	window./*@cc_on @if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@cc_on @if (@_jscript_version < 9) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
};
//線可変
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

//ツリー
var LIST_ID = "",LIST_TYPE = true,  //true=シリーズ,false=部位
	CK_NEKO = location.pathname.indexOf("partnya") !== -1,
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
		//いま表示されているものと同じか
		if (LIST_ID === id_list[0].href.substring(1)) {
			return;
		} else {
			LIST_ID = id_list[0].href.substring(1);
		}
//スキルシミュからcpy
var I_bNAME = 0,I_bSEX = 1,I_bTYPE = 2,I_bRARE = 3,I_bGR = 4,I_bF = 5,I_bW = 6,I_bT = 7,I_bD = 8,I_bI = 9,I_bSN1 = 10,I_bSP1 = 11,I_bSN2 = 12,I_bSP2 = 13,I_bSN3 = 14,I_bSP3 = 15,I_bSN4 = 16,I_bSP4 = 17,I_bSN5 = 18,I_bSP5 = 19,I_bUPGBACK = 20,I_bRECIPE1 = 21,I_bHR1 = 22,I_bLVUPPTN = 23,I_bLVMAX = 24,I_bZENY = 25,I_bDEF = 26,I_bSLOT1 = 27,I_bSLOT7 = 28,I_bZENYPTN = 29,I_bDEFPTN = 30,I_bSLOTPTN = 31,I_bUPGCNT = 32,I_bCRE = 33,I_bDEC = 34,I_bCLASS = 35,I_bTrSLOT = 36,I_bTeni = 37,I_bDOC = 38,I_bIMG = 39;
var getSozai = function (eq){
	if (eq[I_bLVUPPTN]) {
		var list = MST_Equip.sozai[parseInt(eq[I_bLVUPPTN],16)].split(",");
		//生産の場合の素材を変更
		if (eq[I_bRECIPE1]) list[0] = eq[I_bRECIPE1];
		//HR調整
		list[7+0] = eq[I_bHR1];
		for (var i = 0;i < 6 && +list[7+i+1] < +list[7+i]; list[7+i+1] = list[7+i],i++); //1つ先が小さい場合入れ替え
		return list;
	} else { //装飾品
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
		//生産の場合の半額に
		if (eq[I_bRECIPE1] && eq[I_bRECIPE1].indexOf("店売り") === -1) list[0] = zeny / 2|0;
		return list;
	} else { //装飾品
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
	} else { //装飾品
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
	} else { //装飾品
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
	return t.join(","); //ココだけ違う
};
//copyここまで
		var BUINAME = ["Head","Chest","Arm","Waist","Leg"],
			SEXNAME = ["","Male","Female"],
			TYPENAME = ["","Blademaster","Gunner"],
			CLASSTYPE = {"":" ",A:"ＳＰ",B:"<p>剛種防具</p>",C:"<p>天嵐防具</p>",D:"<p>覇種防具</p>",E:"<p>HC防具</p>",F:"<p>狩護防具</p>",G:"<p>Ｇ級覇種防具</p>",H:"<p>烈種防具</p>",I:"<p>G級防具</p>",J:"<p>G級狩護防具</p>",K:"<p>秘伝防具</p>",L:"<p>G級秘伝防具</p>",M:"<p>始種防具</p>",N:"<p>天廊防具</p>",O:"<p>遷悠防具</p>",P:"<p>辿異防具</p>",Q:"<p>辿異狩護防具</p>"},
			SKILLNAME = [,"Passive","Fate","Backpacking","Auto-Guard","Guard","Recovery","Recovery Speed","Cluster Shot Add","Protection","Thunder Res","Pierce Shot Up","Pierce Shot Add","Stun","Whim","Sharpness","Gluttony","Stealth","Expert","広域回復","広域解毒","Attack","Gather","Pellet Shot Up","Pellet Shot Add","Sleep","All Res Up","Psychic","Reload","Cold Res","Heat Res","Health","Artisan","種広域化","Ammo Combiner","Map","Hearing Protection","Combining","Normal Shot Up","Normal Shot Add","Fish","------","------","------","Throwing","Sharpening","Poison","Status Attack","肉","Anti-Theft","Bomb Boost","Hunger","Recoil","Fire Res","Wind Pressure","笛","Defense","Paralysis","Water Res","Dragon Res","Crag Shot Add","Alchemy","Auto-Reload","Gathering Speed","Evasion","Adrenaline","Everlasting","Stamina","Loading","Precision","Monster","Eating","Carving","Terrain","Deoderant","Snowball Res","Ice Res","Quake Res","Wide-Area","Vocal Chords","Cooking","Gunnery","------","------","------","Flute Expert","------","------","------","------","Breakout","Taijutsu","Strong Arm","------","Inspiration","Passive","------","------","------","------","Bond","------","Guts","------","Pressure","Capture Proficiency","------","------","Poison Coating Add","Para Coating Add","Sleep Coating Add","Fire Attack","Water Attack","Thunder Attack","Ice Attack","Dragon Attack","Fasting","----","Bomb Sword","強撃剣","Poison Sword","Para Sword","Sleep Sword","Fire Sword","Water Sword","Thunder Sword","Ice Sword","Dragon Sword","Focus","SnS Tech","DS Tech","GS Tech","LS Tech","Hammer Tech","HH Tech","Lance Tech","GL Tech","HBG Tech","LBG Tech","Bow Tech","Speed Setup","Weapon Handling","Elemental Attack","Stamina Recovery","Knife Throwing","Caring","Def Lock","Fencing","Status Res","Sobriety","Crystal Res","Magnetic Res","Light Tread","Relief","Shiriagari","Lone Wolf","Three Worlds","Reflect","Compensation","Edgemaster","Rapid Fire","Strong Attack","Encourage","Grace","Vitality","Rage","Iron Arm","Breeder","相討ち","Issen","Survivor","Steady Hand","Mounting","Exploit Weakness","Combo Expert","Hunter","Critical Shot","連撃(削除)","Evade Distance","Charge Attack Up","Bullet Saver","Movement Speed","Reinforcement","Vampirism","Adaptation","Dark Pulse","Herbal Science","Tonfa Tech","Incitement","Blazing Grace","Drug Knowledge","Absolute Defense","Mindfulness","採集の極み","Stylish","Assistance","Gentle Shot","Dissolver","Combat Supremacy","Vigorous","Sword God","Thunder Clad","Status Assault","Drawing Arts","Blast Resistance","Crit Conversion","Determination","Stylish Assault","Freeze Res","Ice Age","Lavish Attack","Switch Axe tech","Fortification","Sniper","Obscurity","Evasion Boost","Rush","Skilled","Ceaseless","Point Breakthrough","Abnormality","Spacing","Trained","Furious","MS Tech"],
			TENINAME = ["なし","Skill Slots Up+1","Skill Slots Up+2","Skill Slots Up+3","Skill Slots Up+4","Skill Slots Up+5","Skill Slots Up+6","Skill Slots Up+7","Crit Conversion Up+1","Crit Conversion Up+2","Stylish Assault Up+1","Stylish Assault Up+2","Dissolver Up+","Thunder Clad Up+1","Thunder Clad Up+2","Ice Age Up+","Ice Age Up+","Hearing Protection Up+1","Hearing Protection Up+2","Hearing Protection Up+3","Wind Res Up+1","Wind Res Up+2","Wind Res Up+3","Wind Res Up+4","Quake Res Up+1","Quake Res Up+2","Poison Res Up+1","Poison Res Up+2","Para Res Up+1","Para Res Up+2","Sleep Res Up+1","Sleep Res Up+2","Vampirism Up+1","Vampirism Up+2","Drug Knowledge Up+","Assistance Up+","Bullet Saver Up+1","Bullet Saver Up+2","Guard Up+1","Guard Up+2","Adaptation Up+1","Adaptation Up+2","Encourage Up+1","Encourage Up+2","Reflect Up+1","Reflect Up+2","Reflect Up+3","Stylish Up+","Vigorous Up+","Obscurity Up+","Soul Up+","Ceaseless Up+","Rush Up+"],
			MAKENAME = {"":"",1:"",2:"Guild",3:"NetCafe",4:"課金",5:"Subscription","-":"",e:"Event",es:"Diva Battle",s:"Diva Battle",t:"Road",u:"Interception",m:"Festival",c:"ﾊﾟﾛｰﾈ",g:"Lottery",k:"Premium",i:"Prize",p:"Bundle"},
			len = id_list[0].href.length,upglist = [[],[],[],[],[]],
			tB=document.getElementsByTagName("tbody")[0],tBCre = document.createElement("tbody"),insHeader = document.createElement("th");
		insHeader.style.height = "1em";
		insHeader.appendChild(document.createElement("br"));
		if (!LIST_TYPE) {	//部位別
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
			if (LIST_TYPE && id_list[i].previousSibling.nodeValue.lastIndexOf("(") >= 0) {	//部位別の場合はなし
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
			//詳細
			insTR.id = buiid + eqid;
			//名前
			t = "<div>" + BUINAME[l] + "</div>" + eq[I_bNAME] + "<div>";
			//強化元走査
			if (eq[I_bUPGBACK]) {
				var IDu = eq[I_bUPGBACK].substring(0,4),Txtu = MST_Equip[name][IDu];
//				if (typeof(Txtu) === "string") Txtu = MST_Equip[name][IDu] = MST_Equip[name][IDu].split(",");
				
				t += "<a href=\"#" + buiid + IDu + "\">　" + 
					 Txtu[I_bNAME] + "Lv" + eq[I_bUPGBACK].charAt(4) + "←</a>";

//				upglist[l][upglist[l].length] = IDu + eqid + eq[I_bUPGBACK].charAt(4);
			}
			//強化先走査
			for (var k = upglist[l].length-1,ck = false;k >= 0; k--){
				if (upglist[l][k].substring(0,4) === eqid) {
					t += "<a href=\"#" + buiid + upglist[l][k].substring(4,8) + "\">→" + MST_Equip[name][upglist[l][k].substring(4,8)][I_bNAME] + "</a>";
					ck = upglist[l][k].charAt(8);
				}
			}
			if (ck) t += "（Lv" + ck + "+）";
			//精錬先名称
			if (eq[I_bDEC]) t += "<a href=\"deco.htm#l" + eq[I_bDEC] + "\">→" + MST_Equip["deco"][eq[I_bDEC]].split(",")[0] + "</a>Lv7→Refined Gem";
			t += "</div>";
			t += CLASSTYPE[eq[I_bCLASS]];
			
			insTD.innerHTML = t;
			insTR.appendChild(insTD.cloneNode(true));
			//種類
			t = SEXNAME[eq[I_bSEX]];
			t += (t && eq[I_bTYPE] !== "0" ? "<br>" : "") + TYPENAME[eq[I_bTYPE]];
			t += (t && eq[I_bCRE].charAt(0) !== "1" ? "<br>" : "") + MAKENAME[eq[I_bCRE].charAt(0)];
			t += (t && eq[I_bCRE].charAt(1) !== "-" ? "<br>" : "") + MAKENAME[eq[I_bCRE].substring(1)];
			if (eq[I_bGR]) t += (!t ? "" : "<br>") + "<b>GR" + eq[I_bGR] + "</b>";
			insTD.innerHTML = !t ? "<br>" : t;
			insTR.appendChild(insTD.cloneNode(true));
			//レア
			insTD./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = eq[I_bRARE];
			insTR.appendChild(insTD.cloneNode(true));
			//耐性
			insTD.innerHTML = "Fire:" + eq[I_bF] + "<br>"
							+ "Water:" + eq[I_bW] + "<br>"
							+ "Thunder:" + eq[I_bT] + "<br>"
							+ "Ice:" + eq[I_bI] + "<br>"
							+ "Dragon:" + eq[I_bD];
			insTR.appendChild(insTD.cloneNode(true));
			//スキル
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
					t += "<ul><li><em><s>「" + TENINAME[eq[I_bTeni]] + "」</s></em>";
				}
				insTD.innerHTML = t + "</ul>";
			} else {
				insTD./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = "\n";
			}
			insTR.appendChild(insTD.cloneNode(true));

			var tdef = "",thr = "",bkhr = "",tzeny = "",treci = "", reci_data = getSozai(eq), zeny_data = getZeny(eq), def_data = getDef(eq), slot_data = getSlot(eq);
			for (var j = 0; j < eq[I_bLVMAX]; j++){
				//防御スロ
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
				//ゼニー
				tzeny += zeny_data[j] + "<br>";
				//素材
				if (j === 0 && eq[I_bRECIPE1]) {
					treci += "Create:"
				}
				treci += sozaiHtml(reci_data[j]) + "<br>";
				//強化元があるのに生産素材もある
				if (j === 0 && eq[I_bUPGBACK] && eq[I_bRECIPE1]) {
					tdef = "<br>" + tdef;
					thr  = "<br>" + thr;
					tzeny   = "<br>" + tzeny;
					treci += "強化:" + sozaiHtml(MST_Equip.sozai[parseInt(eq[I_bLVUPPTN],16)].split(",")[0]) + "<br>";
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
				//シリーズ別
				tBCre.appendChild(insTR.cloneNode(true));
			 } else {
				//部位別
				tBCreB[l].appendChild(insTR.cloneNode(true));
			}
		}
//		var insBODY = document.createElement("tbody");
//		tB.parentNode.replaceChild( insBODY,tB );
//		var wTR = tBCre.getElementsByTagName("tr");
//		for (var j = 0,m = wTR.length;j < m;insBODY.appendChild(wTR[j++].cloneNode(true)));
		if (!LIST_TYPE) {	//部位別
			for (var l = 0;l < 5;l++) {
				insHeader./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = BUINAME[l] + "装備";
				tBCre.appendChild(document.createElement("tr").appendChild(insHeader.cloneNode(true)));
				tBCre.appendChild(tBCreB[l]);
			}
		}
		tB.parentNode.replaceChild( tBCre,tB );
//		location.hash = t.href.substring(t.href.length-6,t.href.length);
	}
});
//アンロード退避
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
//オンロード
var t = document.cookie;
if (t.indexOf("bougu=" + location.pathname+location.hash) !== -1) {
	t = t.split("bougu=")[1].split("!");
	//作成種別
	if (t[1] !== "") {
		/*@if (@_jscript_version < 9) 
		document.getElementById("t"+t[1]).fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		document.getElementById("t"+t[1]).dispatchEvent(evt);
		/*@end@*/
		if (location.hash.length > 0) {
			//データ部生成
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
			//作成種別
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
						//データ部生成
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
