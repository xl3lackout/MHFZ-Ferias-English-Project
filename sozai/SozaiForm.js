/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
(function (document){
//固定
var item_id = location.search.substring(1,5).toUpperCase(),
	MST_Item = setItem(),
	MST_Quest = setQuest(),
	MST_Saisyu = setSaisyu(),
	MST_Mos = setMonster(),
	MST_Other = setOther(),
	Quest_Season = ["",":Warm",":Breeding",":Cold"],
	Quest_Time = ["","/Day","/Night"],
	Saisyu_Name = ["General","Jungle","Desert","Swamp","Snowy Mtn","Volcano","Forest & Hills","Tower", "Great Forest","Interception Base","Fortress","Town","Battleground",
	"Arena","Gorge","Solitude Island","Highlands","Tidal Island","Polar Sea","Flower Field","White Lake","Painted Falls"],
	Saisyu_Id	= ["",	"mitu","saba","numa","yuki","kaza","mori","tou","zyu", "def",		"toride","siro","kessen","tougi",	"kyou","sima","kou", "shio","kyoku","hana","bya","sai"];
setItem = setQuest = setSaisyu = setMonster = setOther = null;
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
//------------------------------------説明----------
var item = MST_Item[item_id];
if (typeof item === 'undefined') {
	document.getElementById("loading").style.display="none";
	//ボタン
	if (location.search.charAt(5) === "W") {
		document.getElementById("b_back").value = "閉じる";
		addEvent(document.getElementById("b_back"),"click",function () {window.close();});
	} else {
		addEvent(document.getElementById("b_back"),"click",function () {history.back();});
	}
	return;
}
document.getElementById("d_mei").firstChild.nodeValue = item[0];
document.getElementById("d_rea").firstChild.nodeValue = isNaN(item[1]) ? item[1].replace("X","[宅配X]") : item[1];
document.getElementById("d_buy").firstChild.nodeValue = item[2] + "z";
document.getElementById("d_stock").firstChild.nodeValue = item[3];
if (+item[4] >= 5000) {
	document.getElementById("d_hrmei").firstChild.nodeValue = "-";
	document.getElementById("d_hr").firstChild.nodeValue = "-";
} else if (+item[4] >= 3000) {
	document.getElementById("d_hrmei").firstChild.nodeValue = "GSR";
	document.getElementById("d_hr").firstChild.nodeValue = item[4] - 3000;
} else if (+item[4] >= 2000) {
	document.getElementById("d_hrmei").firstChild.nodeValue = "GR";
	document.getElementById("d_hr").firstChild.nodeValue = item[4] - 2000;
} else if (+item[4] >= 1000) {
	document.getElementById("d_hrmei").firstChild.nodeValue = "SR";
	document.getElementById("d_hr").firstChild.nodeValue = item[4] - 1000;
} else {
	document.getElementById("d_hr").firstChild.nodeValue = item[4];
}
document.getElementById("d_setu").firstChild.nodeValue = item[6];

//------------------------------------採取----------
var creSaiLink = function (data,obj,rank,season) {
	if (!data) return;
	for (var i = 0,list = data.split(","),m = list.length,txt = ""; i < m; i++) {
		var w = list[i].split("|"),
			map_id = Saisyu_Id[w[0]] + "-";
		txt += Saisyu_Name[w[0]] + " Area:" +
				(w[3].indexOf("h") !== -1	? w[3].replace("h"," <span id=\"" + map_id + w[1] + "." + map_id + rank + "." + w[2] + "." + season + i + "\"><span class=h>Day</span> ")
											: w[3].replace("y"," <span id=\"" + map_id + w[1] + "." + map_id + rank + "." + w[2] + "." + season + i + "\"><span class=y>Night</span> ")
				) + "%</span>" +
				(w.length > 4	? " <span id=\"" + map_id + w[4] + "." + map_id + rank + "." + w[5] + "." + season + i + "\"><span class=y>Night</span> " + w[6] + "%</span><br>"
								: "<br>");
	}
	obj.innerHTML = txt;/*.replace(/s /g," Mining ").replace(/m /g," Insects ").replace(/t /g," Fishing ")*/;
	if (m > 4) {
		obj.style.height = "5em";
		obj.style.overflow = "auto";
	}
}
//下位
if (MST_Saisyu.Kai[item_id]) {
	var sai = MST_Saisyu.Kai[item_id].split("^");
	creSaiLink(sai[0],document.getElementById("sai_kaion"),"kai","on");
	creSaiLink(sai[1],document.getElementById("sai_kaikan"),"kai","kan");
	creSaiLink(sai[2],document.getElementById("sai_kaihan"),"kai","han");
}
//上位
if (MST_Saisyu.Zyoui[item_id]) {
	var sai = MST_Saisyu.Zyoui[item_id].split("^");
	creSaiLink(sai[0],document.getElementById("sai_zyouion"),"zyoui","on");
	creSaiLink(sai[1],document.getElementById("sai_zyouikan"),"zyoui","kan");
	creSaiLink(sai[2],document.getElementById("sai_zyouihan"),"zyoui","han");
}
//凄腕
if (MST_Saisyu.Sugo[item_id]) {
	var sai = MST_Saisyu.Sugo[item_id].split("^");
	creSaiLink(sai[0],document.getElementById("sai_sugoon"),"sugo","on");
	creSaiLink(sai[1],document.getElementById("sai_sugokan"),"sugo","kan");
	creSaiLink(sai[2],document.getElementById("sai_sugohan"),"sugo","han");
}
//G級
if (MST_Saisyu.G[item_id]) {
	var sai = MST_Saisyu.G[item_id].split("^");
	creSaiLink(sai[0],document.getElementById("sai_gon"),"g","on");
	creSaiLink(sai[1],document.getElementById("sai_gkan"),"g","kan");
	creSaiLink(sai[2],document.getElementById("sai_ghan"),"g","han");
}
//------------------------------------モンスター----------
var creMosLink = function (data,obj) {
	if (!data) return;
	for (var i = 0,list = data.split(","),m = list.length,txt = ""; i < m; i++) {
		var w = list[i].split("|");
		txt += "<a href=\"../mons/" + w[0] + "_h.htm\">" + MST_Mos.Name[w[0]] + "</a> " + w[1] + "<br>";
	}
	obj.innerHTML = txt;
}
creMosLink(MST_Mos.Kai[item_id],document.getElementById("mos_kai"));
creMosLink(MST_Mos.Zyoui[item_id],document.getElementById("mos_zyoui"));
creMosLink(MST_Mos.Sugo[item_id],document.getElementById("mos_sugo"));
creMosLink(MST_Mos.G[item_id],document.getElementById("mos_g"));
//------------------------------------クエスト----------
var creQueLink = function (data,obj) {
	if (!data) return;
	for (var i = 0,list = data.split(","),m = list.length,txt = ""; i < m; i++) {
		var w = MST_Quest.Name[list[i].substring(0,4)].split(","),hosyu = list[i].substring(6).split("%");
		txt += "<a href=\"../quest/" + w[0] + ".htm#l" + list[i].substring(0,4) + "\"" + (w[1].charAt(4) ? " class="+w[1].charAt(4) : "") + ">" + MST_Quest.Btype[parseInt(w[1].substring(0,2),16)] + Quest_Season[w[1].charAt(2)] + Quest_Time[w[1].charAt(3)] + ":" + w[3] + MST_Quest.Qtype[parseInt(w[2],16)] + w[4] + "</a> " + MST_Quest.Htype[parseInt(list[i].substring(4,6),16)] + " - " + (hosyu.length === 1 ? hosyu[0] + "x" : hosyu[0] + "x (" + hosyu[1] + "%)") + "<br>";
	}
	obj.innerHTML = txt;
}
creQueLink(MST_Quest.Kai[item_id],document.getElementById("que_kai"));
creQueLink(MST_Quest.Zyoui[item_id],document.getElementById("que_zyoui"));
creQueLink(MST_Quest.Sugo[item_id],document.getElementById("que_sugo"));
creQueLink(MST_Quest.G[item_id],document.getElementById("que_g"));
//------------------------------------店売り----------
if (MST_Other.Shop[item_id]) {
	var ShopName = ["Gen. (basic)","Gen. (books)","Gen. (Ammo)","Gen. (Tools)","Gen. (Dojo)","Gen. (Special)","Gen. Store (GCP Exchange)","Grocery Store","Combiner","Shot","Guild Shop","MyTore Gen. Store","NetCafe Shop","Hunter Festival","On Balloon","Special Item Shop","Guild Reception","On Ravi Balloon","Sky Corridor","Diva(Exchange)","Diva (Limited)","Gen. (Lottery)","Hunting Season","Road (Exchange)","Harisen Cat","Guild Interception","MezFes"];
	for (var i = 0,list = MST_Other.Shop[item_id].split(","),m = list.length,txt = ""; i < m; txt += ShopName[+list[i].substring(0,2)] + list[i++].substring(2) + "<br>");
	document.getElementById("shop").innerHTML = txt;
}
//------------------------------------調合----------
var CyougoType = ["","","Pickling・","Mocha Pot:","My Garden:","","MyTore Adventurer:",""],
	CyougoName = ["Combo:","MyTore Combo:LV","CP Combo:","GCP Combo:","Special Combo:","秘伝珠交換:","魂綬勲交換:","秘伝カフ素材交換:"],
	JijiMei = ["Jungle/Great Forest Elder:","Forest and Hills Elder:","Swamp Elder:","Desert Elder:","Snowy Mountain Elder:","Gorge Elder:","Highlands Elder:","Tide Island Elder:","Polar Sea Elder:","Bamboo Forest Elder:","Elder:"];
if (MST_Other.Cyougo[item_id]) {
	var JijiMeiKoukan = [" Exchange with 「Value/トッテオキ」 with high probability"," Exchange with 「Treasure/オタカラ」 with high probability"," Exchange with High chance"," Exchange with Low chance"," Exchange with"],
		GalleryName = ["Gallery Competition:","Gallery CompetitionＧ:"],
		GalleryPont =["Prizes under 1999 points ","Prizes of 2000 points or more ","Prizes of 10000 points or more ","Prizes of 20000 points or more ","Prizes of 40000 points or more ","Prizes of 60000 points or more ","Prizes of 60000 points or more ","Prizes of 80000 points or more ","Prizes of 90000 points or more ","Prizes of 100000 points or more "],
		GardenName = ["Watering","Cleaning","Cooking","Mining","Catching","Bargains","Lost and Found Cat"],
		BoukenName = ["Lv1 寒い湖畔","Lv1 足の裏が暑い砂漠の平地","Lv1 霧の掛かった湿地","Lv1 緑が生い茂った平地","Lv2 きれいな湖岸","Lv2 遺跡が見える場所","Lv2 危険な毒の沼地","Lv2 巨木のある深緑の平地","Lv2 溶岩流れる洞窟","Lv3 遺跡となった場所","Lv3 襲撃されやすい場所","Lv3 吹雪いた山頂","Lv3 伝説が生まれそうな場所","Lv3 熱すぎる火口付近","(稀)ジメっとして生臭い場所","(稀)ランゴスタの巣","(稀)何かの巣","(稀)大闘技場付近","(稀)秘密の抜け穴","LV3 落雷、落石注意の平地","Lv3 風が強い赤土の谷","Lv3 潮の香りがする水辺","(SR稀) 長く険しい道","GR 身を焦がす灼地","GR 緑豊かな水辺","GR 輝く壁面の洞穴","GR 地面が凍る場所","GR(稀) 甘い香りのする草原","GR600 花弁が舞い散る平地","GR600 驟雨の降る丘","GR600 氷雪吹き巻く頂","GR600 光が射す場所","GR600(稀) 危険植物の洞窟","GR600(稀) 草木の生えない荒地"],
		BoukenRank = [" で最大 ","★1 で最大 ","★2 で最大 ","★3(HR31) で最大 ","HR1～10 で最大 ","HR11～20 で最大 ","HR21～30 で最大 ","HR31～ で最大 ","HR100～ で最大 ","HR1～ で ","HR1～16 で ","HR1～30 で ","HR1～99 で ","HR17～ で ","HR17～30 で ","HR17～99 で ","HR31～ で ","HR31～99 で ","HR51～ で ","HR100～ で ","GR600～ で "],
		BoukenDan = ["(上段) ","(下段) "],
		MakaTubo = [" Soak for less than 5 minutes (white)"," Soak for more than 5 minutes (purple)"," Soak for more than 10 minutes (blue)"," Soak for at least 15 minutes (green)"," Soak for more than 20 minutes (yellow)"," Soak for 30 minutes or more (red)"],
		NyakaTubo = ["Pickle to 0:White ","Pickle Until 1:Purple  ","Pickle Until 2:Blue ","Pickle Until 3:Green ","Pickle Until 4:Yellow ","Pickle Until 5:Red ","Pickle Until 6:Rainbow "];
	for (var i = 0,list = MST_Other.Cyougo[item_id].split(","),m = list.length,txt = ""; i < m; i++) {
		txt += CyougoType[list[i].charAt(0)];
		switch (list[i].charAt(0)) {
		case "0": //調合
			txt += CyougoName[list[i].charAt(1)] + list[i].substring(2) + "<br>";
			break;
		case "1": //交換
			txt += JijiMei[list[i].charAt(1)] + list[i].substring(2,list[i].length-1) + JijiMeiKoukan[list[i].charAt(list[i].length-1)] + "<br>";
			break;
		case "2": //壷
			txt += list[i].substring(1,9) + MakaTubo[list[i].charAt(9)] + "<br>";
			break;
		case "3": //ニャカ
			txt += list[i].substring(1,6) + NyakaTubo[list[i].charAt(6)] + list[i].substring(7) + "<br>";
			break;
		case "4": //マイガーデン
			txt += GardenName[list[i].charAt(1)] + BoukenRank[list[i].substring(2,4)-0] + list[i].substring(4) + "<br>";
			break;
		case "5": //ギャラリー
			txt += GalleryName[list[i].charAt(1)] + GalleryPont[list[i].charAt(2)] + list[i].substring(3) + "<br>";
			break;
		case "6": //冒険
			txt += BoukenName[list[i].substring(1,3)-0] + BoukenDan[list[i].charAt(3)] + list[i].substring(4) + "<br>";
			break;
		default:
			txt += list[i].substring(1) + "<br>";
			break;
		}
	}
	document.getElementById("cyougou").innerHTML = txt.replace(/\|[0-9A-F]{4}/g, function(s1){return " <a href=\"../sozai/sozai.htm?" + s1.substring(1) + "\">" + MST_Item[s1.substring(1)][0] + "</a> "});
	//.replace(/K\d+\%/g, function(s1){return "x (" + s1.substring(1) + ")"})/*.replace(/K/g,"x ")*/;
}
if (MST_Quest.Lot[item_id]) { //くじ
	for (var i = 0,list = MST_Quest.Lot[item_id].split(","),m = list.length,txt = ""; i < m; i++) {
		var w = MST_Quest.Name[list[i].substring(0,4)].split(","),hosyu = list[i].substring(6).split("%");
		txt += "<a href=\"../quest/" + w[0] + ".htm#l" + list[i].substring(0,4) + "\"" + (w[1].charAt(4) ? " class="+w[1].charAt(4) : "") + ">" + MST_Quest.Btype[parseInt(w[1].substring(0,2),16)] + Quest_Season[w[1].charAt(2)] + Quest_Time[w[1].charAt(3)] + ":" + w[3] + MST_Quest.Qtype[parseInt(w[2],16)] + w[4] + "</a> " + MST_Quest.Htype[parseInt(list[i].substring(4,6),16)] + " - " + (hosyu.length === 1 ? hosyu[0] + "x" : hosyu[0] + "x (" + hosyu[1] + "%)") + "<br>";
	}
	document.getElementById("cyougou").innerHTML = (MST_Other.Cyougo[item_id] ? document.getElementById("cyougou").innerHTML : "") + txt.replace(/HR\D/g,"SR");
}
//------------------------------------その他の利用----------
if (MST_Other.Riyou[item_id]) {
	for (var i = 0,list = MST_Other.Riyou[item_id].split(","),m = list.length,txt = ""; i < m; i++) {
		txt += CyougoType[list[i].charAt(0)].replace("・",":");
		switch (list[i].charAt(0)) {
		case "0": //調合
			txt += CyougoName[list[i].charAt(1)] + list[i].substring(2) + "Created<br>";
			break;
		case "1": //交換
			txt += JijiMei[list[i].charAt(1)] + list[i].substring(2) + "と交換可能<br>";
			break;
		case "7": //他
			txt += list[i].substring(1) + "<br>";
			break;
		default:
			txt += list[i].substring(1) + "が入手可能<br>";
			break;
		}
	}
	document.getElementById("riyou").innerHTML = txt.replace(/\|[0-9A-F]{4}/g, function(s1){return " <a href=\"../sozai/sozai.htm?" + s1.substring(1) + "\">" + MST_Item[s1.substring(1)][0] + "</a> "}).replace(/K\d+\%/g, function(s1){return "x (" + s1.substring(1) + ")"})/*.replace(/K/g,"x ")*//*.replace(/M/g,"調合して ")*/;
}
if (MST_Quest.Riyou[item_id]) { //クエスト
	for (var i = 0,list = MST_Quest.Riyou[item_id].split(","),m = list.length,txt = ""; i < m; i++) {
		var w = MST_Quest.Name[list[i].substring(0,4)].split(",");
		txt += "<a href=\"../quest/" + w[0] + ".htm#l" + list[i].substring(0,4) + "\"" + (w[1].charAt(4) ? " class="+w[1].charAt(4) : "") + ">" + MST_Quest.Btype[parseInt(w[1].substring(0,2),16)] + Quest_Season[w[1].charAt(2)] + Quest_Time[w[1].charAt(3)] + ":" + w[3] + MST_Quest.Qtype[parseInt(w[2],16)] + w[4] + "</a> -" + list[i].substring(5) + "x " +(list[i].charAt(4) === "N" ? "納品<br>" : "受注で消費<br>");
	}
	document.getElementById("riyou").innerHTML = (MST_Other.Riyou[item_id] ? document.getElementById("riyou").innerHTML : "") + txt.replace(/HR\D/g,"SR");
}

//------------------------------------採取MAP表示----------
var showMap = function (evt){
	/*@if (@_jscript_version < 9)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.tagName === "SPAN") {
		var txt = (t.id || t.parentNode.id).split(".");
		document.getElementById("sai_map").src = "../img/saisyu/" + txt[0] + ".png";
		document.getElementById("sai_link").href = "../saisyu/"+ txt[1]+".htm#l"+ txt[2];
		document.getElementById("sai_link").style.display = "";
	}
}
//イベントセット
addEvent(document.getElementById("sai_kaion"),"click",showMap);
addEvent(document.getElementById("sai_kaikan"),"click",showMap);
addEvent(document.getElementById("sai_kaihan"),"click",showMap);
addEvent(document.getElementById("sai_zyouion"),"click",showMap);
addEvent(document.getElementById("sai_zyouikan"),"click",showMap);
addEvent(document.getElementById("sai_zyouihan"),"click",showMap);
addEvent(document.getElementById("sai_sugoon"),"click",showMap);
addEvent(document.getElementById("sai_sugokan"),"click",showMap);
addEvent(document.getElementById("sai_sugohan"),"click",showMap);
addEvent(document.getElementById("sai_gon"),"click",showMap);
addEvent(document.getElementById("sai_gkan"),"click",showMap);
addEvent(document.getElementById("sai_ghan"),"click",showMap);

//ボタン
if (location.search.charAt(5) === "W") {
	document.getElementById("b_back").value = "閉じる";
	addEvent(document.getElementById("b_back"),"click",function () {window.close();});
} else {
	addEvent(document.getElementById("b_back"),"click",function () {history.back();});
}
MST_Item = MST_Quest = MST_Saisyu = MST_Mos = MST_Other =null;

//武器防具
addEvent(document.getElementById("b_yt"),"click",function () {
var BouguName = {"h":"Head","b":"Chest","a":"Arm","w":"Waist","l":"Leg","d":"Deco","p":"SP Deco","c":"Cuff","t":"Tower Deco","f":"Tower Sigil","k":"Tower Sigil","z":"Ｚ Cuff","s":"Sigil","n":"Cat","H":"ＰHead","B":"ＰChest"},
	BouguId = {"h":"head","b":"body","a":"arm","w":"wst","l":"leg","d":"deco","c":"decocf","p":"decosp","n":"deconk","t":"decotr","f":"decotf","k":"decotk","z":"decocz","s":"sigil","H":"head_pertnya","B":"body_pertnya"},
	BukiName = {0:"GS",1:"HBG",2:"Hammer",3:"Lance",4:"SnS",5:"LBG",6:"DS",7:"LS",8:"HH",9:"GL","A":"Bow","B":"Tonfa","C":"SwAxe","D":"MagSpike","a":"ＰGS","c":"ＰHammer"},
	BukiId = {0:"taiken",1:"heavy",2:"hammer",3:"lance",4:"katate",5:"right",6:"souken",7:"tachi",8:"horn",9:"gunlance","A":"yumi","B":"tonfa","C":"slaxe","D":"magspike","a":"taiken_partnya","c":"hammer_partnya"},
	Craft = {0:"Craft",1:"Upgrade",2:"G Craft",3:"G Upgrade",4:"GLv"},
	MST_Equip = setBuki();
if (MST_Equip.Sozai[item_id]) {
	var txt = "<table><tr><th style=\"width:7em;\">Weapon Type</th><th style=\"width:10em;\">Weapon Name</th><th style=\"width:2.5em;\">Craft</th><th style=\"width:2em;\">Num.</th></tr>";
	for (var i = 0,su_sum = 0,list = MST_Equip.Sozai[item_id].split(","),m = list.length; i < m; i++) {
		var eq_rui = list[i].charAt(0),
			eq_id = list[i].substring(1,5),
			eq_cra = list[i].charAt(5),
			su = list[i].substring(6),
			eq_name = MST_Equip.Name[eq_rui+eq_id],
			sp = "",
			lv = "";
		if (eq_cra === "2" || eq_cra === "3" || eq_cra === "4") { //G武器
			sp = "_g";
			if (eq_cra === "4") {
				lv = +list[i].substring(6,8);
				su = list[i].substring(8);
			}
		} else if (MST_Equip.SP.indexOf(eq_rui+eq_id) !== -1) { //SP武器
			sp = "_sp";
		} else if (MST_Equip.Neko.indexOf(eq_rui+eq_id) !== -1) { //剛ねこ武器
			sp = "_n";
		} else if (MST_Equip.Sinka.indexOf(eq_rui+eq_id) !== -1) { //進化武器
			sp = "_s";
		}
		txt += "<tr><td>" + BukiName[eq_rui] + "</td><td><a href='../buki/" + BukiId[eq_rui] + sp + ".htm#l" + eq_id + lv + "'>" + eq_name + "</a></td><td>" + Craft[eq_cra] + lv + "</td><td style=\"text-align:right;\">" + su + "</td></tr>";
		su_sum += +su;
	}
	document.getElementById("tblBuki").innerHTML = txt + "<tr><td colspan=4 style=\"text-align:right;\">" + su_sum + "</td></tr></table>";
}
MST_Equip = setBougu();
if (MST_Equip.Sozai[item_id]) {
	var txt = "<table><tr><th style=\"width:4em;\">Part</th><th style=\"width:10em;\">Armor Name</th><th style=\"width:1.5em;\">LV</th><th style=\"width:2em;\">Num.</th></tr>";
	var txts = "<table><tr><th style=\"width:4em;\">Deco type</th><th style=\"width:10em;\">Deco Name</th><th style=\"width:2em;\">Num.</th></tr>";
	for (var i = 0,su_sum = 0,list = MST_Equip.Sozai[item_id].split(","),m = list.length; i < m; i++) {
		var eq_rui = list[i].charAt(0),
			eq_id = list[i].substring(1,5),
			lv = list[i].charAt(5),
			su = list[i].substring(6),
			eq_name = MST_Equip.Name[eq_rui+eq_id],
			sp = "";
		if (eq_rui === "d" || eq_rui === "n" || eq_rui === "c" || eq_rui === "p" || eq_rui === "s" || eq_rui === "t" || eq_rui === "f" || eq_rui === "k" || eq_rui === "z") {
			//装飾品カフ
			txts += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/" + BouguId[eq_rui] + ".htm#l" + eq_id + "'>" + eq_name + "</a></td><td style=\"text-align:right;\">" + su + "</td></tr>";
		} else {
			//防具
			if (eq_name.lastIndexOf("SP") !== -1) {
				txt += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/" + BouguId[eq_rui] +  "sp.htm#l" + eq_id + "'>" + eq_name + "</a></td><td style=\"text-align:center;\">" + lv.replace("0","Base") + "</td><td style=\"text-align:right;\">" + su + "</td></tr>";
			} else {
				txt += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/tree.htm#" + BouguId[eq_rui].charAt(0) + eq_id + "'>" + eq_name + "</a></td><td style=\"text-align:center;\">" + lv.replace("0","Base") + "</td><td style=\"text-align:right;\">" + su + "</td></tr>";
			}
		su_sum += +su;
		}
	}
	if (su_sum) document.getElementById("tblBougu").innerHTML = txt + "<tr><td colspan=4 style=\"text-align:right;\">" + su_sum + "</td></tr></table>";
	document.getElementById("tblDec").innerHTML = txts + "<tr><td colspan=4 style=\"text-align:right;\"></td></tr></table>";
}
MST_Equip = setBuki = setBougu = null;
document.getElementById("b_yt").disabled = true;
});

document.getElementsByTagName("table")[0].style.width = "auto";
document.getElementById("loading").style.display="none";
document.getElementById("b_yt").disabled = false;

//アンロード退避
addEvent(window,"unload",function () {
document.cookie = "item=" + [item_id,Number(document.getElementById("b_yt").disabled),document.documentElement.scrollTop].join(":");
});
//オンロード
var w = document.cookie;
if (w.indexOf("item=" + item_id) !== -1) {
	w = w.split("item=")[1].split(":");
	if (w[1] === "1") {
		/*@if (@_jscript_version < 9) 
		document.getElementById("b_yt").fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", false, true);
		document.getElementById("b_yt").dispatchEvent(evt);
		/*@end@*/
	}
	window.scrollTo(0,parseInt(w[2]));
};

})(document);
