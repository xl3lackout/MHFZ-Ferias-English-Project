/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
var GalleryForm = function(){
this.add_change_event = function (tag) {
	var wk = document.getElementById(tag);
	wk./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/
		'change',
		function (evt) {
			/*@if (true)
			var t = evt.srcElement;
			@else@*/
			var t = evt.target;
			/*@end@*/
			GF.change_event(t.id);
		},
		false
		);
	}
//運勢
this.L_type = document.getElementById("L_type");
this.L_color = document.getElementById("L_color");
this.L_lv = document.getElementById("L_lv");
this.add_change_event("L_type");
this.add_change_event("L_color");
this.add_change_event("L_lv");
//狩人珠
this.L_skill = document.getElementById("L_skill");
this.add_change_event("L_skill");
//検索
this.S_rank = document.getElementById("S_rank");
this.S_extra = document.getElementById("S_extra");
this.S_event = document.getElementById("S_event");
this.S_type = document.getElementById("S_type");
this.S_color = document.getElementById("S_color");
this.S_series = document.getElementById("S_series");
this.S_set = document.getElementById("S_set");
this.S_sort = document.getElementById("S_sort");
this.S_kagu_list = document.getElementById("S_kagu_list");
this.S_add = document.getElementById("S_add");
this.add_change_event("S_rank");
this.add_change_event("S_type");
this.add_change_event("S_color");
this.add_change_event("S_set");
this.add_change_event("S_series");
this.add_change_event("S_sort");
this.add_change_event("S_kagu_list");

//配置
for (var i=1;i<=MAX_KAGU_LIST;i++){
	this["G_kagu"+i] = "";
	this["G_kagu"+i+"Name"] = document.getElementById("G_kagu"+i+"Name");
	this["G_kagu"+i+"Suu"] = document.getElementById("G_kagu"+i+"Suu");
	this["G_kagu"+i+"Zeny"] = document.getElementById("G_kagu"+i+"Zeny");
	this["G_kagu"+i+"Sozai_Zeny"] = document.getElementById("G_kagu"+i+"Sozai_Zeny");
	this["G_kagu"+i+"Sozai"] = document.getElementById("G_kagu"+i+"Sozai");
	this.add_change_event("G_kagu"+i+"Suu");
}
this.G_kaguZeny_Sum = document.getElementById("G_kaguZeny_Sum");
this.G_kaguSozai_Sum = document.getElementById("G_kaguSozai_Sum");
//総合評価
this.G_point = document.getElementById("G_point");
this.G_luck_point = document.getElementById("G_luck_point");
this.G_cool_point = document.getElementById("G_cool_point");
this.G_cute_point = document.getElementById("G_cute_point");
this.G_text = document.getElementById("G_text");
this.G_skill_point = document.getElementById("G_skill_point");
this.G_all_point = document.getElementById("G_all_point");

//情報
this.D_name = document.getElementById("D_name");
this.D_rank = document.getElementById("D_rank");
this.D_type = document.getElementById("D_type");
this.D_color = document.getElementById("D_color");
this.D_point = document.getElementById("D_point");
this.D_bonus_point = document.getElementById("D_bonus_point");
this.D_cool_point = document.getElementById("D_cool_point");
this.D_cute_point = document.getElementById("D_cute_point");
for (var i=1;i<=5;this["D_series"+i] = document.getElementById("D_series"+(i++)));
this.D_zeny = document.getElementById("D_zeny");
this.D_zeny_sozai = document.getElementById("D_zeny_sozai");
this.D_sozai = document.getElementById("D_sozai");
//個別評価
this.K_type = document.getElementById("K_type");
this.K_series = document.getElementById("K_series");
this.K_set = document.getElementById("K_set");
this.K_variety = document.getElementById("K_variety");
this.K_bonus = document.getElementById("K_bonus");
this.K_count = document.getElementById("K_count");
this.K_lucky_color = document.getElementById("K_lucky_color");
this.K_lucky_type = document.getElementById("K_lucky_type");
this.List_type = document.getElementById("List_type");
this.List_series = document.getElementById("List_series");

//初期設定
for(var i=0,wkMax=luck_type_name.length;i<wkMax;this.L_lv.options[i] = new Option(luck_type_name[i],i++));
for(var i=0,wkMax=kagu_type_name.length;i<wkMax;this.L_type.options[i] = new Option(kagu_type_name[i],i),this.S_type.options[i] = new Option(kagu_type_name[i],i++));
for(var i=0,wkMax=color_type_name.length;i<wkMax;this.L_color.options[i] = new Option(color_type_name[i],i),this.S_color.options[i] = new Option(color_type_name[i],i++));
for(var i=0,wkMax=rank_type_name.length-3;i<wkMax;this.S_rank.options[i] = new Option(rank_type_name[i],i++));
for(var i=0,wkMax=series_type_name.length;i<wkMax;this.S_series.options[i] = new Option(series_type_name[i],i++));
for(var i=0,wkMax=set_type_name.length;i<wkMax;this.S_set.options[i] = new Option(set_type_name[i],i++));
for(var i=1;i<=10;i++){
	for(var j=0;j<=10;this["G_kagu"+i+"Suu"].options[j] = new Option(j,j++));
	this["G_kagu"+i+"Suu"].options[11] = new Option("削",99);
}
for(var i=0,wkMax=skill_name.length;i<wkMax;this.L_skill.options[i] = new Option(skill_name[i],i++));
this.S_rank.selectedIndex = this.S_rank.length - 1;

this.kagu_list_search();

//クリックイベント
document./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/
	'click',
	function (evt) {
		/*@if (true)
		var t = evt.srcElement;
		@else@*/
		var t = evt.target;
		/*@end@*/
		switch (t.id) {
		case "S_event":
		case "S_extra":
			GF.kagu_list_search()
			break;
		case "S_add":
			GF.kagu_add()
			break;
		case "G_kagu1Suu":
		case "G_kagu2Suu":
		case "G_kagu3Suu":
		case "G_kagu4Suu":
		case "G_kagu5Suu":
		case "G_kagu6Suu":
		case "G_kagu7Suu":
		case "G_kagu8Suu":
		case "G_kagu9Suu":
		case "G_kagu10Suu":
			GF.kagu_disp(GF[t.id.replace("Suu","")]);
			break;
		case "G_kagu1Zeny":
		case "G_kagu2Zeny":
		case "G_kagu3Zeny":
		case "G_kagu4Zeny":
		case "G_kagu5Zeny":
		case "G_kagu6Zeny":
		case "G_kagu7Zeny":
		case "G_kagu8Zeny":
		case "G_kagu9Zeny":
		case "G_kagu10Zeny":
			GF.cri_type_cng(t.id.replace("Zeny",""),0);
			GF.sozai_sum();
			break;
		case "G_kagu1Sozai_Zeny":
		case "G_kagu2Sozai_Zeny":
		case "G_kagu3Sozai_Zeny":
		case "G_kagu4Sozai_Zeny":
		case "G_kagu5Sozai_Zeny":
		case "G_kagu6Sozai_Zeny":
		case "G_kagu7Sozai_Zeny":
		case "G_kagu8Sozai_Zeny":
		case "G_kagu9Sozai_Zeny":
		case "G_kagu10Sozai_Zeny":
			GF.cri_type_cng(t.id.replace("Sozai_Zeny",""),1);
			GF.sozai_sum();
			break;
		case "G_text":
			var f4=window.open("","");
			f4.document.open("text/html; charset=Shift_JIS");
			f4.document.write("<pre>");
			f4.document.write(GF.cre_text());
			f4.document.write("</pre>");
			f4.document.close();
			break;
		}
	},
	false
	);

//チェンジイベント
this.change_event = function(obj_name){
	switch (obj_name){
	case "L_type":
	case "L_color":
	case "L_lv":
	case "L_skill":
		GF.clsc();
		break;
	case "S_rank":
	case "S_series":
	case "S_type":
	case "S_color":
	case "S_set":
	case "S_sort":
		this.kagu_list_search()
		break;
	case "G_kagu1Suu":
	case "G_kagu2Suu":
	case "G_kagu3Suu":
	case "G_kagu4Suu":
	case "G_kagu5Suu":
	case "G_kagu6Suu":
	case "G_kagu7Suu":
	case "G_kagu8Suu":
	case "G_kagu9Suu":
	case "G_kagu10Suu":
		if (GF[obj_name].value == 99) GF.kagu_del(obj_name.replace("Suu",""));
		GF.sozai_sum();
		GF.clsc();
		break;
	case "S_kagu_list":
		GF.kagu_disp(GF.S_kagu_list.value);
		break;
	}
}
}
//---家具検索----------------------------------------------------------
GalleryForm.prototype.kagu_list_search = function(){
var S_extra = this.S_extra.checked;
var S_event = this.S_event.checked;
var S_type = this.S_type.value;
var S_rank = this.S_rank.value;
var S_color = this.S_color.value;
var S_series = this.S_series.value;
var S_set = this.S_set.value;
var S_sort = this.S_sort.value;
var wkList = [],i = 0;

for (var id = 0,m = kagu_data.length; id < m; id++) {
	if ((kagu_data[id][gRank] <= S_rank || (kagu_data[id][gRank] == 7 && S_extra) || (kagu_data[id][gRank] == 8 && S_event)) &&
		(S_type == 0 || kagu_data[id][gType] == S_type) &&
		(S_color == 0 || kagu_data[id][gColor1] == S_color || kagu_data[id][gColor2] == S_color) &&
		(S_series == 0 || kagu_data[id][gSeries1] == S_series || kagu_data[id][gSeries2] == S_series || kagu_data[id][gSeries3] == S_series || kagu_data[id][gSeries4] == S_series || kagu_data[id][gSeries5] == S_series) &&
		(S_set == 0 || kagu_data[id][gSet] == S_set)) {
		wkList[i++] = kagu_data[id];
	}
}
switch (S_sort){
	case "0": //名前順
		wkList.sort(function (a, b){return a[gName] > b[gName] ? 1 : -1});
		break;
	case "1": //ランク順
		wkList.sort(function (a, b){return a[gRank]-b[gRank]});
		break;
	case "2": //金額順
		wkList.sort(function (a, b){return a[gSozai_Zeny]-b[gSozai_Zeny]});
		break;
}
this.S_kagu_list.length = 0;

for (var i = 0,c = 0,wkRank = -1,m = wkList.length; i < m; i++) {
	if (S_sort == "1" && wkList[i][gRank]-0 > wkRank) {
		var wk = this.S_kagu_list.options[c++] = new Option(rank_type_name[wkList[i][gRank]],"");
		wk.style.backgroundColor = "aquamarine";
		wkRank = wkList[i][gRank]-0;
	}
	this.S_kagu_list.options[c++] = new Option("[" + color_type_name[wkList[i][gColor1]] + (wkList[i][gColor1] == wkList[i][gColor2] ? "" : "/"+color_type_name[wkList[i][gColor2]]) + "]" + wkList[i][gName],wkList[i][gId]);
}
if (c == 0) this.S_kagu_list.options[0] = new Option("None","");
this.S_kagu_list.selectedIndex = 0;
this.kagu_disp(this.S_kagu_list.value);

}
//---家具追加----------------------------------------------------------
GalleryForm.prototype.kagu_add = function(){
if (!this.S_kagu_list.value) return;

for (var row=1;row<=MAX_KAGU_LIST;row++){
	if (this["G_kagu"+row] == this.S_kagu_list.value) return;
}
for (var row=1;row<=MAX_KAGU_LIST;row++){
	if (this["G_kagu"+row] != "") continue;

	this["G_kagu"+row] = this.S_kagu_list.value;
	this["G_kagu"+row+"Name"].innerHTML = kagu_data[this["G_kagu"+row]][gName];
	this["G_kagu"+row+"Suu"].selectedIndex = 0;
	this["G_kagu"+row+"Zeny"].innerHTML = kagu_data[this["G_kagu"+row]][gZeny] + "z";
	this["G_kagu"+row+"Zeny"].style.backgroundColor = "";
	this["G_kagu"+row+"Sozai_Zeny"].innerHTML = kagu_data[this["G_kagu"+row]][gSozai_Zeny] + "z";
	this["G_kagu"+row+"Sozai"].innerHTML = this.sozai_disp(kagu_data[this["G_kagu"+row]][gSozai],",");
	this["G_kagu"+row+"Sozai_Zeny"].style.backgroundColor = this["G_kagu"+row+"Sozai"].style.backgroundColor = "gray";
	break;
}
}
//---家具削除----------------------------------------------------------
GalleryForm.prototype.kagu_del = function(wkId){
if (!this[wkId]) return;
if (!window.confirm("Miraculous?")) {
	this[wkId+"Suu"].selectedIndex = this[wkId+"Suu"].options.length-2;
	return;
}
this[wkId] = this[wkId+"Name"].innerHTML = this[wkId+"Zeny"].innerHTML = this[wkId+"Sozai_Zeny"].innerHTML = this[wkId+"Sozai"].innerHTML = "";
this[wkId+"Suu"].selectedIndex = 0;
this[wkId+"Zeny"].style.backgroundColor = this[wkId+"Sozai_Zeny"].style.backgroundColor = this[wkId+"Sozai"].style.backgroundColor = "";
}
//---素材切り替え----------------------------------------------------------
GalleryForm.prototype.cri_type_cng = function (wkId,wktype) {
if (!this[wkId]) return;
if (wktype) {
	this[wkId+"Zeny"].style.backgroundColor = "gray";
	this[wkId+"Sozai_Zeny"].style.backgroundColor = this[wkId+"Sozai"].style.backgroundColor = "";
} else {
	this[wkId+"Zeny"].style.backgroundColor = "";
	this[wkId+"Sozai_Zeny"].style.backgroundColor = this[wkId+"Sozai"].style.backgroundColor = "gray";
}
}
//---家具情報表示------------------------------------------------------
GalleryForm.prototype.kagu_disp = function (wk) {
alert(wk);
if (!wk) return;

var Txt = kagu_data[wk];

this.D_name.innerHTML = Txt[gName];
this.D_rank.innerHTML = rank_type_name[Txt[gRank]];
this.D_type.innerHTML = Txt[gType] == 0 ? "-" : kagu_type_name[Txt[gType]];
this.D_color.innerHTML = color_type_name[Txt[gColor1]] + (Txt[gColor1] == Txt[gColor2] ? "" : "/"+color_type_name[Txt[gColor2]]);
this.D_point.innerHTML = Txt[gPoint]+"pt";
this.D_bonus_point.innerHTML =Txt[gBonus_point]+"pt";
this.D_cool_point.innerHTML = Txt[gCool_point]+"pt";
this.D_cute_point.innerHTML = Txt[gCute_point]+"pt";
this.D_series1.innerHTML = this.D_series2.innerHTML = this.D_series3.innerHTML = this.D_series4.innerHTML = this.D_series5.innerHTML = "";
for (var i=1,row=1;i<=5;i++) {
	if (Txt[gSeries1-1+i]) this["D_series"+(row++)].innerHTML = series_type_name[Txt[gSeries1-1+i]];
}
this.D_zeny.innerHTML = Txt[gZeny]+"z";
this.D_zeny_sozai.innerHTML = Txt[gSozai_Zeny]+"z";
this.D_sozai.innerHTML = this.sozai_disp(Txt[gSozai]);
}
//---素材表示----共通------------------------------------------------------
GalleryForm.prototype.sozai_disp = function (wk,wkjion) {
if (!wk) return "";
var wkSeizo = new Array(),wkS = wk.split(" ");
for (var i = 0,cnt = 0,wkMax = wkS.length; i < wkMax; i++) {
	var wkK = wkS[i];
	if (isNaN(wkK.charAt(wkK.length-1)) == false || isNaN(wkK.charAt(wkK.length-2)) == false) {
		if (wkK.lastIndexOf("R") > 0) {
				txt[cnt++] = "<a href='../sozai/sozai.htm?" + wkK.substring(0,4) + "W' target=_blank class=r>" + itemS[wkK.substring(0,4)][0] + "</a>x" + parseInt(wkK.substring(4));
		} else {
			wkSeizo[cnt++] = "<a href='../sozai/sozai.htm?" + wkK.substring(0,4) + "W' target=_blank>" + itemS[wkK.substring(0,4)][0] + "</a>x" + wkK.substring(4);
		}
	} else {
		wkSeizo[cnt++] = wkK;
	}
}
return wkSeizo.join(wkjion ? wkjion : "<br>");
}
//---素材合計----------------------------------------------------------
GalleryForm.prototype.sozai_sum = function () {
var sum_zeny = 0,sum_sozai = new Array();
for (var row=1;row<=MAX_KAGU_LIST;row++){
	if (this["G_kagu"+row] == "") continue;

	var Txt = kagu_data[this["G_kagu"+row]];
	if (this["G_kagu"+row+"Zeny"].style.backgroundColor == "") {
		//ゼニー
		sum_zeny += Txt[gZeny] * this["G_kagu"+row+"Suu"].value;
	} else {
		//素材
		sum_zeny += Txt[gSozai_Zeny] * this["G_kagu"+row+"Suu"].value;

		for (var i = 0,wSozai = Txt[gSozai].replace(/R/g,"").split(" "),wSozai_Max = wSozai.length; i < wSozai_Max; i++) {
			var wkK = wSozai[i],ck = false;
			for (var j = 0,sum_sozai_Max = sum_sozai.length; j < sum_sozai_Max; j++) {
				if (sum_sozai[j][0] == wkK.substring(0,4)){
					sum_sozai[j][1] += (wkK.substring(4) - 0) * this["G_kagu"+row+"Suu"].value;
					ck = true;
					break;
				}
			}
			if (ck) continue;
			if (isNaN(wkK.charAt(wkK.length-1)) == false || isNaN(wkK.charAt(wkK.length-2)) == false) {
				sum_sozai[sum_sozai.length] = [wkK.substring(0,4),(wkK.substring(4) - 0) * this["G_kagu"+row+"Suu"].value];
			} else {
				sum_sozai[sum_sozai.length] = [wkK,""];
			}
		}
	}
}
sum_sozai.sort();
var sum_sozai_txt = new Array(),toku = "";
for (var i = 0,cnt = 0,sum_sozai_Max = sum_sozai.length; i < sum_sozai_Max; i++) {
	if (sum_sozai[i][1] == "") {
		if (sum_sozai[i][0] != "" && sum_sozai[i][0] != "なし") toku = sum_sozai[i][0].replace("<br>","") + "<br>";
	} else {
		sum_sozai_txt[cnt++] = sum_sozai[i].join("");
	}
}
this.G_kaguZeny_Sum.innerHTML = sum_zeny + "z";
this.G_kaguSozai_Sum.innerHTML = this.sozai_disp(sum_sozai_txt.join(" "),",");
}
//---評価計算----------------------------------------------------------
GalleryForm.prototype.clsc = function () {
//基本
var series_max = series_type_name.length-1;
var series_point_sum = 0,series_point = new Array(series_max + 1);
var type_max = kagu_type_name.length-1;
var type_point_sum = 0,type_point = new Array(type_max + 1);
var set_max = set_type_name.length-1;
var set_point_sum = 0,set_point = new Array(set_max + 1);
var variety_point_sum = 0,lucky_color_point_sum = 0,lucky_type_point_sum = 0,bonus_point_sum = 0,count_point_sum = 0,cute_point_sum = 0,cool_point_sum = 0,luck_point = skill_point = 0;

for (var row = 1; row <= MAX_KAGU_LIST; row++) {
	if (this["G_kagu"+row] == "") continue;
	if (this["G_kagu"+row+"Suu"].value == 0) continue;
	
	var item_count = this["G_kagu"+row+"Suu"].value-0;

	var Txt = kagu_data[this["G_kagu"+row]];
	//シリーズ
	for (var j = 1; j <= 5; j++) {
		var kagu_series = Txt[gSeries1+j-1];
		if (kagu_series) {
			if (typeof(series_point[kagu_series]) == "undefined") series_point[kagu_series] = [0,0];
			
			series_point[kagu_series][0] += item_count;
			series_point[kagu_series][1] += Txt[gPoint] * item_count;
		}
	}
	//タイプ
	if (Txt[gType] != 0) {
		var kagu_type = Txt[gType];
		if (typeof(type_point[kagu_type]) == "undefined") type_point[kagu_type] = [0,0];

		type_point[kagu_type][0] += item_count;
		//高評価の家具
		if (kagu_type == this.L_type.value) {
			lucky_type_point_sum += 500 * item_count;
		}
	
	}
	//セット
	if (Txt[gSet] != 0) {
		var kagu_set = Txt[gSet];
		if (typeof(set_point[kagu_set]) == "undefined") set_point[kagu_set] = [[0,0],[0,0],[0,0]];
		if (set_point[kagu_set][0][0] == 0) {
			set_point[kagu_set][0][0] = Txt[gId];
			set_point[kagu_set][0][1] += item_count;
		} else if (set_point[kagu_set][1][0] == 0) {
			set_point[kagu_set][1][0] = Txt[gId];
			set_point[kagu_set][1][1] += item_count;
		} else {
			set_point[kagu_set][2][0] = Txt[gId];
			set_point[kagu_set][2][1] += item_count;
		}
	}
	//バラエティ
	if (item_count >= 50) {
		variety_point_sum += -90000;
	} else if (item_count >= 40) {
		variety_point_sum += -70000;
	} else if (item_count >= 30) {
		variety_point_sum += -50000;
	} else if (item_count >= 20) {
		variety_point_sum += -30000;
	} else if (item_count >= 10) {
		variety_point_sum += -10000;
	} else if (item_count >= 8) {
		variety_point_sum += -2000;
	} else if (item_count >= 4) {
		variety_point_sum += -1000;
	} else if (item_count >= 2) {
		variety_point_sum += -500;
	}
	//高評価の色
	if (Txt[gColor1] == this.L_color.value && Txt[gColor2] == this.L_color.value) {
		lucky_color_point_sum += 200 * item_count;
	} else if (Txt[gColor1] == this.L_color.value && Txt[gColor2] != this.L_color.value) {
		lucky_color_point_sum += 500 * item_count;
	} else if (Txt[gColor1] != this.L_color.value && Txt[gColor2] == this.L_color.value) {
		lucky_color_point_sum += 100 * item_count;
	}
	//ボーナス
	bonus_point_sum += Txt[gBonus_point] * item_count;
	//かわいい
	cute_point_sum += Txt[gCute_point] * item_count;
	//かっこいい
	cool_point_sum += Txt[gCool_point] * item_count;
	//家具の数
	count_point_sum += 200 * item_count
}
//シリーズ
for (var i = 1,wkavg = 0; i <= series_max; i++) {
	if (typeof(series_point[i]) == "undefined") continue;

	if (series_point[i][0] >= 10) {
		wkavg = 13333;
	} else if (series_point[i][0]  >= 8) {
		wkavg = 2666;
	} else if (series_point[i][0]  >= 4) {
		wkavg = 1333;
	} else if (series_point[i][0]  >= 2) {
		wkavg = 666;
	} else {
		wkavg = 0;
	}
	var point = Math.floor(series_point[i][1] / series_point[i][0] / 6 * wkavg);

	series_point[i][1] = point;
	series_point_sum += point;
}
var wkTxt = "";
var table = this.List_series;
var row_index = 0;
for (var i = 1; i <= series_max; i++) {
	if (typeof(series_point[i]) == "undefined") continue;

	if (row_index >= table.rows.length) {
		var row = table.insertRow(row_index);
		row.insertCell(0).appendChild(document.createTextNode(series_type_name[i] + "x" + series_point[i][0]));
		row.insertCell(1).appendChild(document.createTextNode(series_point[i][1]));
		row.cells.item(1).className = "n";
	} else {
		var row = table.rows.item(row_index);
		row.cells.item(0).innerHTML = series_type_name[i] + "x" + series_point[i][0];
		row.cells.item(1).innerHTML = series_point[i][1];
	}
	row_index++;
		
}
var n = table.rows.length;
while (row_index < n) {
	table.deleteRow(-1);
	row_index++;
}
this.K_series.innerHTML = series_point_sum;

//タイプ
for (var i = 1; i <= type_max; i++) {
	if (typeof(type_point[i]) == "undefined") continue;
	var point = 0;

	if (type_point[i][0] >= 10) {
		point = 10000;
	} else if (type_point[i][0] >= 8) {
		point = 4000;
	} else if (type_point[i][0] >= 4) {
		point = 2000;
	} else if (type_point[i][0] >= 2) {
		point = 1000;
	}

	type_point[i][1] = point;
	type_point_sum += point;
}
var wkTxt = "";
var table = this.List_type;
var row_index = 0;
for (var i = 1; i <= series_max; i++) {
	if (typeof(type_point[i]) == "undefined") continue;

	if (row_index >= table.rows.length) {
		var row = table.insertRow(row_index);
		row.insertCell(0).appendChild(document.createTextNode(kagu_type_name[i] + "x" + type_point[i][0]));
		row.insertCell(1).appendChild(document.createTextNode(type_point[i][1]));
		row.cells.item(1).className = "n";
	} else {
		var row = table.rows.item(row_index);
		row.cells.item(0).innerHTML = kagu_type_name[i] + "x" + type_point[i][0];
		row.cells.item(1).innerHTML = type_point[i][1];
	}
	row_index++;
		
}
var n = table.rows.length;
while (row_index < n) {
	table.deleteRow(-1);
	row_index++;
}
this.K_type.innerHTML = type_point_sum;
//セット
for (var i = 1; i <= set_max; i++) {
	if (typeof(set_point[i]) == "undefined") continue;
	var set_count = 999;
	set_count = Math.min(set_point[i][0][1], set_count);
	set_count = Math.min(set_point[i][1][1], set_count);
	set_count = Math.min(set_point[i][2][1], set_count);
	
	var point = set_count * 8000;
	
//			scorebook.set_points[i] = point;
	set_point_sum += point;
}
this.K_set.innerHTML = set_point_sum;
//バラエティ
this.K_variety.innerHTML = variety_point_sum;
//高評価の色
this.K_lucky_color.innerHTML = lucky_color_point_sum;
//高評価の家具
this.K_lucky_type.innerHTML = lucky_type_point_sum;
//ボーナス
this.K_bonus.innerHTML = bonus_point_sum;
//家具の数
this.K_count.innerHTML = count_point_sum;

//ラッキー
if (this.L_lv.value == 1) {
	luck_point = -5000;
} else if (this.L_lv.value == 2) {
	luck_point = -2000;
} else if (this.L_lv.value == 3) {
	luck_point = 2000;
} else if (this.L_lv.value == 4) {
	luck_point = 5000;
} else if (this.L_lv.value == 5) {
	luck_point = 8000;
}
this.G_luck_point.innerHTML = luck_point
//狩人珠
if (this.L_skill.value == 1) {
	skill_point = 5000;
} else if (this.L_skill.value == 2) {
	skill_point = 7000;
} else if (this.L_skill.value == 3) {
	skill_point = 10000;
}
this.G_skill_point.innerHTML = skill_point

//個別評価合計
this.G_point.innerHTML = series_point_sum
					 + set_point_sum
					 + type_point_sum
					 + bonus_point_sum
					 + count_point_sum
					 + variety_point_sum
					 + lucky_color_point_sum
					 + lucky_type_point_sum;
this.G_all_point.innerHTML = series_point_sum
					 + set_point_sum
					 + type_point_sum
					 + bonus_point_sum
					 + count_point_sum
					 + variety_point_sum
					 + lucky_color_point_sum
					 + lucky_type_point_sum
					 + luck_point
					 + skill_point;
//かわいい
this.G_cute_point.innerHTML = cute_point_sum;
//かっこいい
this.G_cool_point.innerHTML = cool_point_sum;

}
GalleryForm.prototype.cre_text = function (){
var html = "";
//運勢
if (this.L_type.value > 0) html += "　Furniture Type：" + kagu_type_name[this.L_type.value];
if (this.L_color.value > 0) html += "　Furniture Color：" + color_type_name[this.L_color.value];
if (this.L_lv.value > 0) html += "　Placement Luck：" + luck_type_name[this.L_lv.value];
if (html != "") html = "Luck" + html+"\n";
//狩人珠
if (this.L_skill.value > 0) html += "Hunter Jewel：" + skill_name[this.L_skill.value]+"\n";

for (var row = 1; row <= MAX_KAGU_LIST; row++) {
	if (this["G_kagu"+row] == "") continue;
	if (this["G_kagu"+row+"Suu"].value == 0) continue;
	html += this["G_kagu"+row+"Name"].innerHTML + "x"+this["G_kagu"+row+"Suu"].value + (this["G_kagu"+row+"Zeny"].style.backgroundColor == "" ? " (Zenny)" : " (Mats)") + "\n";
}
html += "\nZenny Required:" + this.G_kaguZeny_Sum.innerHTML+"\n";
html += "Mats Required:" + this.G_kaguSozai_Sum.innerHTML+"\n";

html += "\nComprehensive evaluation\n";
html += "Evaluation point:" + this.G_all_point.innerHTML+"\n";
html += "Cute:" + this.G_cute_point.innerHTML+"\n";
html += "Cool:" + this.G_cool_point.innerHTML+"\n";

return html;
}
