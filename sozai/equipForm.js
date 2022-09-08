(function (document){
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
//武器防具
addEvent(document.getElementById("b_search"),"click",function () {
var searchMei = document.getElementById("equip").value;
if (!searchMei) return;

var BouguName = {"h":"Head","b":"Chest","a":"Arm","w":"Waist","l":"Leg","d":"Deco","p":"SP Deco","t":"Tower Deco","f":"Tower Sigil","c":"Cuff","s":"Sigil","n":"Cat","H":"ＰHead","B":"ＰChest"},
	BouguId = {"h":"head","b":"body","a":"arm","w":"wst","l":"leg","d":"deco","c":"decocf","p":"decosp","n":"deconk","t":"decot","f":"decof","s":"sigil","H":"head_pertnya","B":"body_pertnya"},
	BukiName = {0:"GS",1:"HBG",2:"Hammer",3:"Lance",4:"SnS",5:"LBG",6:"DS",7:"LS",8:"HH",9:"GL","A":"Bow","B":"Tonfa","C":"SwAxe","D":"MagSpike","a":"ＰGS","b":"ＰHammer"},
	BukiId = {0:"taiken",1:"heavy",2:"hammer",3:"lance",4:"katate",5:"right",6:"souken",7:"tachi",8:"horn",9:"gunlance","A":"yumi","B":"tonfa","C":"slaxe","D":"magspike","a":"taiken_partnya","c":"hammer_partnya"},
	MST_Equip = setBuki();

var txt = "<table><tr><th style=\"width:7em;\">Weapon Type</th><th style=\"width:10em;\">Weapon Name</th></tr>";
for (var i in MST_Equip.Name) {
	if (MST_Equip.Name[i].indexOf(searchMei) !== -1) {
		var eq_rui = i.charAt(0),
			eq_id = i.substring(1,5),
			eq_name = MST_Equip.Name[i],
			sp = "";
		if (MST_Equip.G.indexOf(eq_rui+eq_id) !== -1) { //G武器
			sp = "_g";
		} else if (MST_Equip.SP.indexOf(eq_rui+eq_id) !== -1) { //SP武器
			sp = "_sp";
		} else if (MST_Equip.Neko.indexOf(eq_rui+eq_id) !== -1) { //剛ねこ武器
			sp = "_n";
		} else if (MST_Equip.Sinka.indexOf(eq_rui+eq_id) !== -1) { //進化武器
			sp = "_s";
		}
		txt += "<tr><td>" + BukiName[eq_rui] + "</td><td><a href='../buki/" + BukiId[eq_rui] + sp + ".htm#l" + eq_id + "'>" + eq_name + "</a></tr>";
	}
}
document.getElementById("tblBuki").innerHTML = txt + "<table>";

MST_Equip = setBougu();
var txt = "<table><tr><th style=\"width:4em;\">Part</th><th style=\"width:10em;\">Armor Name</th></tr>";
var txts = "<table><tr><th style=\"width:4em;\">Deco type</th><th style=\"width:10em;\">Deco Name</th></tr>";
for (var i in MST_Equip.Name) {
	if (MST_Equip.Name[i].indexOf(searchMei) !== -1) {
		var eq_rui = i.charAt(0),
			eq_id = i.substring(1,5),
			eq_name = MST_Equip.Name[i],
			sp = "";
		if (eq_rui === "d" || eq_rui === "n" || eq_rui === "c" || eq_rui === "p" || eq_rui === "s" || eq_rui === "t" || eq_rui === "f") {
			txts += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/" + BouguId[eq_rui] + ".htm#l" + eq_id + "'>" + eq_name + "</a></td></tr>";
		} else {
			//防具
			if (eq_name.lastIndexOf("SP") !== -1) {
				txt += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/" + BouguId[eq_rui] + "sp.htm#l" + eq_id + "'>" + eq_name + "</a></td></tr>";
			} else {
				txt += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/tree.htm#" + BouguId[eq_rui].charAt(0) + eq_id + "'>" + eq_name + "</a></td></tr>";
			}
		}
	}
}
document.getElementById("tblBougu").innerHTML = txt + "</table>";
document.getElementById("tblDec").innerHTML = txts + "</table>";
});

document.getElementById("equip").focus();

//アンロード退避
addEvent(window,"unload",function () {
document.cookie = "equip=" + [escape(document.getElementById("equip").value),document.documentElement.scrollTop].join(":");
});
//オンロード
var w = document.cookie;
if (w.indexOf("equip=") !== -1) {
	w = w.split("equip=")[1].split(":");
	document.getElementById("equip").value = unescape(w[0]);
	/*@if (@_jscript_version < 9) 
	document.getElementById("b_search").fireEvent("onclick");
	@else@*/
	var evt = document.createEvent("MouseEvents");
	evt.initEvent("click", false, true);
	document.getElementById("b_search").dispatchEvent(evt);
	/*@end@*/
	window.scrollTo(0,parseInt(w[1]));
};

})(document);
