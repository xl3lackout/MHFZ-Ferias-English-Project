/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
var SkillForm = (function (document){
//ƒ”ƒ@[ƒWƒ‡ƒ“ƒ`ƒFƒbƒN
if (document.getElementById("version").firstChild.nodeValue !== "20190429") alert("³í‚É“®ì‚µ‚È‚¢‰Â”\«‚ª‚ ‚è‚Ü‚·BƒŠƒ[ƒh‚·‚é‚©AƒLƒƒƒbƒVƒ…‚ğÁ‚µ‚Ä‚­‚¾‚³‚¢B");
//ŒÅ’è
var CK_IE6 = typeof document.documentElement.style.maxHeight === "undefined";
var CK_IE9 = false;
/*@if (@_jscript_version == 10) //IE10
	CK_IE9 = true;
@elif (@_jscript_version == 9) //IE9
	CK_IE9 = true;
@elif (@_jscript_version == 5.8) //IE8
	CK_IE9 = false;
@else
	CK_IE9 = false;
@end
@*/

var CK_MAC = navigator.userAgent.toUpperCase().indexOf("MAC") !== -1,
	I_bNAME = 0,I_bSEX = 1,I_bTYPE = 2,I_bRARE = 3,I_bGR = 4,I_bF = 5,I_bW = 6,I_bT = 7,I_bD = 8,I_bI = 9,I_bSN1 = 10,I_bSP1 = 11,I_bSN2 = 12,I_bSP2 = 13,I_bSN3 = 14,I_bSP3 = 15,I_bSN4 = 16,I_bSP4 = 17,I_bSN5 = 18,I_bSP5 = 19,I_bUPGBACK = 20,I_bRECIPE1 = 21,I_bHR1 = 22,I_bLVUPPTN = 23,I_bLVMAX = 24,I_bZENY = 25,I_bDEF = 26,I_bSLOT1 = 27,I_bSLOT7 = 28,I_bZENYPTN = 29,I_bDEFPTN = 30,I_bSLOTPTN = 31,I_bUPGCNT = 32,I_bCRE = 33,I_bDEC = 34,I_bCLASS = 35,I_bTrSLOT = 36,I_bTeni = 37,I_bDOC = 38,I_bIMG = 39,
	I_sID = 0,I_sLV = 1,I_sS1 = 2,I_sS2 = 3,I_sS3 = 4,I_sT1 = 5,I_sT2 = 6,I_sT3 = 7,
	I_iSozai1 = 0,I_iSozai2 = 1,I_iSozai3 = 2,I_iSozai4 = 3,I_iSozai5 = 4,I_iSozai6 = 5,I_iSozai7 = 6,I_iHR1 = 7,I_iHR2 = 8,I_iHR3 = 9,I_iHR4 = 10,I_iHR5 = 11,I_iHR6 = 12,I_iHR7 = 13,
	BUINAME = ["head","body","arm","wst","leg","deco"],
	MAKENAME = {"":"",1:"",2:"—Â’c",3:"ƒJƒtƒF",4:"‰Û‹à",5:"“Á“T","-":"",e:"ƒCƒxƒ“ƒg",es:"ƒCƒx/ë‰qí",s:"ë‰qí",t:"ë—ù“¹",u:"Œ}Œ‚í",m:"ëlÕ",c:"ƒpƒ[ƒl",g:"ƒKƒ`ƒƒ",k:"ƒLƒbƒg",i:"èè‘Ê“V",p:"ƒpƒbƒP"},
	CLASSTYPE = {"":" ",A:"‚r‚o",B:"„í",C:"“V—’",D:"”eí",E:"‚g‚b",F:"ëŒì",G:"G”eí",H:"—óí",I:"‚f‹‰",J:"GëŒì",K:"”é“`",L:"G”é“`",M:"ní",N:"“V˜L",O:"‘J—I",P:"’HˆÙ",Q:"’HˆÙëŒì",
					SP:"A",HC:"E",Shugo:"FJQ",GClass:"IJPQ",Gosyu:"B",Tenran:"C",Hasyu:"DG",Resyu:"H",Sisyu:"M",Tenro:"N"},
	TYPENAME = ["‹¤—p","Œ•m","ƒKƒ“ƒi["],
	SEXNAME = ["’j—","’jŒÀ’è","—ŒÀ’è"],
	TENFUNAME = ["‚È‚µ","‘®«’Ç‰Á","ó‘Ô’Ç‰Á","‰ïS’Ç‰Á","’e’Ç‰Á","","","","","","","","","","","","","[•Ğè]^‹ó‰ñ“]a","[‘oŒ•]n‘Åp","[‘åŒ•]“ã‚¬•¥‚¢","[‘åŒ•]ƒK[ƒha‡T","[‘åŒ•]ƒK[ƒha‡U","[‘¾“]ŠÑh‚µ","[e‘„]“¥aã‚°","[’È]—­ˆÚ“®p‡T","[’È]—­ˆÚ“®p‡U","[’È]—­ˆÚ“®p‡V","ƒXƒ^ƒ“’l","‰¹”š”ÍˆÍŠg‘å"],
	TENKOKUNAME = ["‚È‚µ","a‚ê–¡UP","ƒXƒLƒ‹UP","UŒ‚—ÍUP","‘®«Eó‘ÔUP","‹——£•â³","‹­Œ‚ƒrƒ“UP","–hŒä—ÍUP","ƒ_ƒ[ƒWŒyŒ¸","‘Ì—Í©“®‰ñ•œ","‚f‹‰–h‹ï","–Òi‹­‰»"],
	TENINAME = ["‚È‚µ","ƒXƒLƒ‹˜gŠg’£+1","ƒXƒLƒ‹˜gŠg’£+2","ƒXƒLƒ‹˜gŠg’£+3","ƒXƒLƒ‹˜gŠg’£+4","ƒXƒLƒ‹˜gŠg’£+5","ƒXƒLƒ‹˜gŠg’£+6","ƒXƒLƒ‹˜gŠg’£+7","‘M“]‹­‰»+1","‘M“]‹­‰»+2","IŒ‚‹­‰»+1","IŒ‚‹­‰»+2","‘®Œ‚‹­‰»","“Z—‹‹­‰»+1","“Z—‹‹­‰»+2","•XŠE‘n¶‹­‰»","•XŠE‘n¶‹­‰»","¨ğ‹­‰»+1","¨ğ‹­‰»+2","¨ğ‹­‰»+3","•—ˆ³‹­‰»+1","•—ˆ³‹­‰»+2","•—ˆ³‹­‰»+3","•—ˆ³‹­‰»+4","‘Ïk‹­‰»+1","‘Ïk‹­‰»+2","‘Ï“Å‹­‰»+1","‘Ï“Å‹­‰»+2","‘Ï–ƒáƒ‹­‰»+1","‘Ï–ƒáƒ‹­‰»+2","‘Ï‡–°‹­‰»+1","‘Ï‡–°‹­‰»+2","‹zŒŒ‹­‰»+1","‹zŒŒ‹­‰»+2","Œ€•¨‹­‰»","x‰‡‹­‰»","’eŠÛß–ñp‹­‰»+1","’eŠÛß–ñp‹­‰»+2","ƒK[ƒh«”\‹­‰»+1","ƒK[ƒh«”\‹­‰»+2","“K‰Œ‚‹­‰»+1","“K‰Œ‚‹­‰»+2","ŒÛ•‘‹­‰»+1","ŒÛ•‘‹­‰»+2","”½Ë‹­‰»+1","”½Ë‹­‰»+2","”½Ë‹­‰»+3","I—¬‹­‰»","ŒŒ‹CŠˆ«‹­‰»","“•š‹­‰»","Š…‹­‰»","–‹–³‹­‰»","–Òi‹­‰»"],
	MST_Equip = {},MST_Item = {},MST_Series_List = [],MST_Deco_List = [],MST_Item = setItem();
setItem = null;
var MST_Skill_List = [
["UŒ‚Œn",[161/*„Œ‚*/,21/*UŒ‚*/,155/*ˆê•C˜T*/,169/*ˆê‘M*/,18/*’Bl*/,205/*‘M“]*/,173/*’ÉŒ‚*/,207/*IŒ‚*/,197/*‘®Œ‚*/,202/*•ÏŒ‚*/,190/*Œ€•¨‚ÌS“¾*/,47/*“ÁêUŒ‚*/,220/*‰öŠï*/,111/*‰Î‘®«UŒ‚*/,112/*…‘®«UŒ‚*/,113/*—‹‘®«UŒ‚*/,114/*•X‘®«UŒ‚*/,115/*—´‘®«UŒ‚*/,142/*‘®«UŒ‚*/,50/*”š’e‹­‰»*/,81/*–Cpt*/,162/*ŒÛ•‘*/,85/*“J‚«–¼l*/,91/*‘Ìp*/,170/*‹t‹«*/,165/*“{*/,65/*’ê—Í*/,217/*˜r—˜‚«*/,222/*è—û*/,116/*’fH*/,128/*—­‚ß’Zk*/,179/*—­‚ßˆĞ—Í*/,141/*•ŠíJ‚«*/,154/*Kã‚ª‚è*/,184/*“K‰Œ‚*/,198/*“¬”e*/,199/*ŒŒ‹CŠˆ«*/,201/*“Z—‹*/,210/*æÒŒ‚*/,214/*“•š*/,216/*–Òi*/,218/*–‹–³*/,219/*ˆê“_“Ë”j*/,223/*‚q•±v*/,206/*•s‘Ş*/]],
["–hŒäŒn",[164/*¶–½—Í*/,157/*”½Ë*/,56/*–hŒä*/,212/*—vÇ*/,5/*ƒK[ƒh«”\*/,4/*©“®–hŒä*/,90/*‚Æ‚ñ‚¸‚ç*/]],
["‘Ì—ÍEƒXƒ^ƒ~ƒiŒn",[31/*‘Ì—Í*/,7/*‰ñ•œ‘¬“x*/,6/*‰ñ•œ*/,183/*‹zŒŒ*/,186/*–ò‘Šw*/,143/*‹C—Í‰ñ•œ*/,51/*‚Í‚ç‚Ö‚è*/,67/*ƒXƒ^ƒ~ƒi*/,71/*H–*/,16/*H‚¢‚µ‚ñ–V*/]],
["Œ•mŒn",[45/*Œ¤‚¬t*/,15/*a‚ê–¡*/,194/*I—¬*/,159/*“ */,32/* */,118/*”šŒ‚Œ•*/,120/*–Ò“ÅŒ•*/,121/*–ƒáƒŒ•*/,122/*‡–°Œ•*/,123/*‰Î‰ŠŒ•*/,124/*…ŒƒŒ•*/,125/*—‹_Œ•*/,126/*•XŒ‹Œ•*/,127/*—´‰¤Œ•*/,129/*•ĞèŒ•‹Z*/,130/*‘oŒ•‹Z*/,131/*‘åŒ•‹Z*/,132/*‘¾“‹Z*/,133/*’È‹Z*/,134/*ë—Â“J‹Z*/,135/*‘„‹Z*/,136/*e‘„‹Z*/,211/*Œ••€‹Z*/,187/*ú—´‹Z*/,224/*¥a’È‹Z*/,147/*Œ•p*/,200/*Œ•_*/]],
["ƒKƒ“ƒi[Œn",[171/*Ëè*/,38/*’Êí’e‹­‰»*/,11/*ŠÑ’Ê’e‹­‰»*/,23/*U’e‹­‰»*/,39/*’Êí’e’Ç‰Á*/,12/*ŠÑ’Ê’e’Ç‰Á*/,24/*U’e’Ç‰Á*/,60/*Ö’e’Ç‰Á*/,8/*ŠgU’e’Ç‰Á*/,108/*“Å•r’Ç‰Á*/,109/*–ƒáƒ•r’Ç‰Á*/,110/*‡–°•r’Ç‰Á*/,172/*‘•’…*/,196/*‰¸Ë*/,68/*‘•“U”*/,160/*‘¬Ë*/,62/*˜AË*/,28/*‘•“U*/,52/*”½“®*/,176/*îË*/,69/*¸–§ËŒ‚*/,34/*’e’²‡*/,180/*’eŠÛß–ñp*/,213/*‘_Œ‚*/,221/*‹óŒ„*/,137/*de‹Z*/,138/*Œye‹Z*/,139/*‹|‹Z*/]],
["ó‘ÔˆÙíŒn",[46/*“Å*/,57/*–ƒáƒ*/,25/*‡–°*/,148/*‘Ïó‘ÔˆÙí*/,13/*‹Câ*/,74/*’EL*/,75/*‘Ïá*/,79/*º‘Ñ*/,146/*‘Î–hŒäDOWN*/,149/*‘ÏŒ*/,204/*”š”j‘Ï«*/,151/*¥—Í‘Ï«*/,150/*Œ‹»‘Ï«*/,208/*“€Œ‹‘Ï«*/]],
["‘Ï«Œn",[26/*‘S‘Ï«‚t‚o*/,53/*‰Î‘Ï«*/,58/*…‘Ï«*/,76/*•X‘Ï«*/,10/*—‹‘Ï«*/,59/*—´‘Ï«*/]],
["•ÛŒìŒn",[156/*OŠE‚ÌŒì‚è*/,36/*’®Šo•ÛŒì*/,77/*‘Ïk*/,54/*•—ˆ³*/,49/*“‚İ–³Œø*/,30/*‘Ï‹*/,29/*‘ÏŠ¦*/,152/*Œx‰ú*/,73/*’nŒ`*/,215/*’´‰ñ”ğ*/,64/*‰ñ”ğ«”\*/,178/*‰ñ”ğ‹——£*/,95/*ó‚¯g*/,9/*R”»*/,102/*ª«*/,191/*â‘Î–hŒä*/]],
["ƒAƒCƒeƒ€E’²‡Œn",[174/*’²‡t*/,66/*Œø‰Ê‘±*/,78/*Lˆæ*/,14/*‹C‚Ü‚®‚ê*/,44/*“Š±*/,92/*‹­Œ¨*/,175/*ël*/,80/*“÷Ä‚«*/,40/*’Ş‚è*/,37/*’²‡¬Œ÷—¦*/,61/*˜B‹àp*/,140/*‚‘¬İ’u*/,166/*“S˜r*/,144/*ƒiƒCƒtg‚¢*/]],
["MAP’T’mŒn",[35/*’n}*/,27/*ç—¢Šá*/,17/*‹C”z*/,188/*ø“®*/]],
["Ìæ‰^”ÀŒn",[3/*‰^”À*/,63/*‚‘¬ûW*/,22/*Ìæ*/,72/*”‚¬æ‚è*/,192/*•½íS*/]],
["•ñVŒn",[2/*‰^‹C*/,70/*ƒ‚ƒ“ƒXƒ^[*/,104/*ˆ³—Í*/]],
["‚»‚Ì‘¼Œn",[167/*ƒuƒŠ[ƒ_[*/,100/*ãJ*/,94/*‚Ğ‚ç‚ß‚«*/,105/*•ßŠlãè*/,153/*‹~‰‡*/,145/*‚¢‚½‚í‚è*/,181/*ˆÚ“®‘¬“x*/,182/*Š…*/,195/*x‰‡*/,163/*‰¶’*/,158/*‘ã*/,185/*•ƒm–½–¬*/,189/*‰Š’*/,203/*”²”[p*/,209/*•XŠE‘n¶*/]]];
var MST_Skill = [
["‚È‚µ",	,,									],
["óg",	,,									],
["‰^‹C",	146,1,		,-20,161	,-10,160	,10,158	,20,159				],
["‰^”À",	132,,				,10,97					],
["©“®–hŒä",	108,,				,10,44					],
["ƒK[ƒh«”\",	107,1,		,-15,43	,-10,42	,10,40	,20,41				],
["‰ñ•œ",	149,,			,-10,166	,10,165					],
["‰ñ•œ‘¬“x",	97,1,		,-20,30	,-10,29	,10,27	,20,28				],
["ŠgU’e’Ç‰Á",	121,,				,10,68	,15,69	,20,70			],
["R”»",	128,1,		,-20,91	,-10,90	,10,88	,20,89				],
["—‹‘Ï«",	137,1,	,-20,127	,-15,126	,-10,125	,10,122	,15,123	,20,124			],
["ŠÑ’Ê’e‹­‰»",	115,,				,10,55					],
["ŠÑ’Ê’e’Ç‰Á",	118,,				,10,59	,15,60	,20,61			],
["‹Câ",	91,1,			,-10,9	,10,7	,20,8				],
["‹C‚Ü‚®‚ê",	145,1,		,-15,157	,-10,156	,10,154	,15,155				],
["a‚ê–¡",	99,1,			,-10,32	,10,31	,20,293				],
["H‚¢‚µ‚ñ–V",	125,,				,10,77	,15,78				],
["‹C”z",	95,,			,-10,20	,10,19					],
["’Bl",	101,1,				,10,35	,15,36	,20,37	,35,284	,50,285	],
["Lˆæ‰ñ•œ",	,,									],
["Lˆæ‰ğ“Å",	,,									],
["UŒ‚",	126,1,				,10,79	,15,80	,25,81	,50,286	,80,287	],
["Ìæ",	143,1,		,-15,152	,-10,151	,10,149	,15,150				],
["U’e‹­‰»",	116,,				,10,56					],
["U’e’Ç‰Á",	119,,				,10,62	,15,63	,20,64			],
["‡–°",	90,1,			,-10,6	,10,4	,20,5				],
["‘S‘Ï«‚t‚o",	133,,	,-20,103	,-15,102	,-10,101	,10,98	,15,99	,20,100			],
["ç—¢Šá",	148,1,				,10,163	,15,164				],
["‘•“U",	110,1,			,-10,49	,10,46	,15,47	,20,48			],
["‘ÏŠ¦",	140,1,		,-20,143	,-10,142	,10,139	,15,141	,25,297			],
["‘Ï‹",	139,1,		,-20,138	,-10,137	,10,134	,15,136	,25,296			],
["‘Ì—Í",	96,1,	,-20,26	,-15,25	,-10,24	,10,21	,15,22	,20,23	,30,291	,40,292	],
[" ",	100,,				,10,33					],
["íLˆæ‰»",	,,									],
["’e’²‡",	151,,				,10,172					],
["’n}",	142,,				,10,147					],
["’®Šo•ÛŒì",	129,1,				,10,92	,15,93	,25,288			],
["’²‡¬Œ÷—¦",	150,1,			,-10,170	,10,167	,15,168	,20,169			],
["’Êí’e‹­‰»",	114,,				,10,54					],
["’Êí’e’Ç‰Á",	117,,					,15,58				],
["’Ş‚è",	147,,				,10,162					],
["------",	,,									],
["------",	,,									],
["------",	,,									],
["“Š±",	109,,				,10,45					],
["Œ¤‚¬t",	104,1,			,-10,39	,10,38	,20,398				],
["“Å",	92,1,			,-10,12	,10,10	,20,11				],
["“ÁêUŒ‚",	122,,				,10,71					],
["“÷",	,,									],
["“‚İ–³Œø",	130,,				,10,94					],
["”š’e‹­‰»",	123,,				,10,72					],
["‚Í‚ç‚Ö‚è",	124,1,		,-15,76	,-10,75	,10,73	,15,74				],
["”½“®",	113,1,				,10,52	,15,53	,20,482			],
["‰Î‘Ï«",	134,1,	,-20,109	,-15,108	,-10,107	,10,104	,15,105	,20,106			],
["•—ˆ³",	141,1,				,10,144	,15,145	,20,146	,30,349		],
["“J",	,,									],
["–hŒä",	127,1,	,-20,87	,-15,86	,-10,85	,10,82	,15,83	,25,84	,35,294	,45,295	],
["–ƒáƒ",	89,1,			,-10,3	,10,1	,20,2				],
["…‘Ï«",	135,1,	,-20,115	,-15,114	,-10,113	,10,110	,15,111	,20,112			],
["—´‘Ï«",	138,1,	,-20,133	,-15,132	,-10,131	,10,128	,15,129	,20,130			],
["Ö’e’Ç‰Á",	120,,				,10,65	,15,66	,20,67			],
["˜B‹àp",	152,,				,10,173					],
["˜AË",	112,,				,10,51					],
["‚‘¬ûW",	144,,				,10,153					],
["‰ñ”ğ«”\",	154,1,				,10,177	,20,178				],
["’ê—Í",	155,,			,-15,181	,10,179	,15,180	,21,179	,30,181		],
["Œø‰Ê‘±",	156,,			,-10,183	,10,182					],
["ƒXƒ^ƒ~ƒi",	157,1,			,-10,185	,10,184	,20,289				],
["‘•“U”",	158,,				,10,186					],
["¸–§ËŒ‚",	159,1,			,-10,188	,10,187	,20,290				],
["ƒ‚ƒ“ƒXƒ^[",	160,,				,10,189					],
["H–",	161,,			,-10,191	,10,190					],
["”‚¬æ‚è",	162,,				,15,192					],
["’nŒ`",	163,1,		,-15,196	,-10,195	,10,193	,15,194				],
["’EL",	93,,				,10,14					],
["‘Ïá",	94,,				,10,17					],
["•X‘Ï«",	136,1,	,-20,121	,-15,120	,-10,119	,10,116	,15,117	,20,118			],
["‘Ïk",	164,1,				,15,197	,25,350				],
["Lˆæ",	131,1,			,-10,385	,10,95	,20,96	,30,384			],
["º‘Ñ",	165,1,				,10,198	,15,199				],
["“÷Ä‚«",	166,1,			,-10,202	,10,200	,15,201				],
["–Cpt",	167,1,				,10,203	,20,298	,35,299			],
["------",	168,,				,10,206	,15,205	,25,204			],
["------",	169,,			,-10,210	,10,209	,15,208	,25,207			],
["------",	170,,				,10,211					],
["“J‚«–¼l",	171,,				,10,212					],
["------",	172,,				,10,213					],
["------",	173,,				,10,215	,15,214				],
["------",	174,,				,10,216					],
["------",	175,,				,10,217					],
["‚Æ‚ñ‚¸‚ç",	176,,				,10,218					],
["‘Ìp",	177,1,				,10,219	,20,359				],
["‹­Œ¨",	178,1,				,10,220	,20,360				],
["------",	179,,				,10,221					],
["‚Ğ‚ç‚ß‚«",	180,,				,10,222					],
["ó‚¯g",	181,,				,10,223					],
["------",	182,,				,10,224					],
["------",	183,,				,10,225					],
["------",	184,,				,10,226					],
["------",	185,,				,10,227					],
["ãJ",	186,,				,10,228					],
["------",	187,,				,10,229					],
["ª«",	82,1,				,10,230	,20,231	,30,232			],
["------",	188,,				,10,233					],
["ˆ³—Í",	189,1,				,10,234	,20,300				],
["•ßŠlãè",	190,1,				,10,235	,20,301				],
["------",	191,,				,10,236					],
["------",	192,,				,10,237					],
["“Å•r’Ç‰Á",	193,,				,10,238					],
["–ƒáƒ•r’Ç‰Á",	194,,				,10,239					],
["‡–°•r’Ç‰Á",	195,,				,10,240					],
["‰Î‘®«UŒ‚",	196,1,				,10,241	,20,242				],
["…‘®«UŒ‚",	197,1,				,10,243	,20,244				],
["—‹‘®«UŒ‚",	198,1,				,10,245	,20,246				],
["•X‘®«UŒ‚",	199,1,				,10,247	,20,248				],
["—´‘®«UŒ‚",	200,1,				,10,249	,20,250				],
["’fH",	201,,				,10,251		,20,252			],
["----",	202,,				,10,253					],
["”šŒ‚Œ•",	203,1,				,10,254	,15,255	,20,256			],
["‹­Œ‚Œ•",	204,,				,10,257	,15,258	,20,259			],
["–Ò“ÅŒ•",	205,1,				,10,260	,15,261	,20,262			],
["–ƒáƒŒ•",	206,1,				,10,263	,15,264	,20,265			],
["‡–°Œ•",	207,1,				,10,266	,15,267	,20,268			],
["‰Î‰ŠŒ•",	208,1,				,10,269	,15,270	,20,271			],
["…ŒƒŒ•",	209,1,				,10,272	,15,273	,20,274			],
["—‹_Œ•",	210,1,				,10,278	,15,279	,20,280			],
["•XŒ‹Œ•",	211,1,				,10,275	,15,276	,20,277			],
["—´‰¤Œ•",	212,1,				,10,281	,15,282	,20,283			],
["—­‚ß’Zk",	213,1,			,-10,304	,10,303	,20,302				],
["•ĞèŒ•‹Z",	1,,2			,-10,308	,10,307	,20,306	,30,305			],
["‘oŒ•‹Z",	2,,2			,-10,312	,10,311	,20,310	,30,309			],
["‘åŒ•‹Z",	3,,2			,-10,316	,10,315	,20,314	,30,313			],
["‘¾“‹Z",	4,,2			,-10,320	,10,319	,20,318	,30,317			],
["’È‹Z",	5,,2			,-10,324	,10,323	,20,322	,30,321			],
["ë—Â“J‹Z",	6,,2			,-10,328	,10,327	,20,326	,30,325			],
["‘„‹Z",	7,,2			,-10,332	,10,331	,20,330	,30,329			],
["e‘„‹Z",	8,,2			,-10,336	,10,335	,20,334	,30,333			],
["de‹Z",	12,,2			,-10,340	,10,339	,20,338	,30,337			],
["Œye‹Z",	13,,2			,-10,344	,10,343	,20,342	,30,341			],
["‹|‹Z",	14,,2			,-10,348	,10,347	,20,346	,30,345			],
["‚‘¬İ’u",	83,1,				,10,351	,20,352				],
["•ŠíJ‚«",	79,,				,10,353					],
["‘®«UŒ‚",	80,,			,-10,355	,10,354					],
["‹C—Í‰ñ•œ",	81,1,			,-10,358	,10,357	,20,356				],
["ƒiƒCƒtg‚¢",	86,1,				,10,361	,20,362				],
["‚¢‚½‚í‚è",	87,,				,10,363	,15,364	,25,365			],
["‘Î–hŒäDOWN",	88,,				,10,366					],
["Œ•p",	85,1,				,10,367	,20,368				],
["‘Ïó‘ÔˆÙí",	84,1,			,-10,371	,10,369	,20,370	,30,491			],
["‘ÏŒ",	51,,1			,-10,387	,10,386					],
["Œ‹»‘Ï«",	53,,1			,-10,389	,10,388					],
["¥—Í‘Ï«",	54,,1			,-10,391	,10,390					],
["Œx‰ú",	41,,1				,10,392					],
["‹~‰‡",	49,,1				,10,393					],
["Kã‚ª‚è",	39,,1				,15,394					],
["ˆê•C˜T",	40,,1				,10,395					],
["OŠE‚ÌŒì‚è",	30,,1				,10,399	,15,400	,20,401			],
["”½Ë",	31,,1				,10,402	,15,403	,20,404	,16384,518		],
["‘ã",	28,,1				,10,396					],
["“ ",	25,,1				,10,405	,15,406	,20,407			],
["‘¬Ë",	29,,1				,15,397					],
["„Œ‚",	16,,1			,10,408	,15,409	,20,410	,30,411	,40,412	,50,524	],
["ŒÛ•‘",	33,,1				,10,413	,20,414	,16384,517			],
["‰¶’",	23,,1				,10,415	,20,416	,30,417			],
["¶–½—Í",	42,,1			,-10,421	,10,418	,15,419	,30,420			],
["“{",	45,,1				,15,422	,20,423				],
["“S˜r",	46,,1				,10,424	,20,425				],
["ƒuƒŠ[ƒ_[",	47,,1				,10,426					],
["‘Š“¢‚¿",	78,,				,10,427	,20,428				],
["ˆê‘M",	17,,1				,10,429	,20,430	,30,431			],
["‹t‹«",	48,,1				,10,432	,20,433				],
["Ëè",	34,,1				,15,434	,20,526				],
["‘•’…",	35,,1				,10,435	,15,436	,20,437			],
["’ÉŒ‚",	19,,1			,-10,440	,15,439					],
["’²‡t",	38,,1			,-10,444	,10,441	,15,442	,20,443			],
["ël",	50,,				,10,445	,20,446				],
["îË",	26,,1				,10,447	,15,448	,20,449			],
["˜AŒ‚(íœ)",	,,									],
["‰ñ”ğ‹——£",	56,,1				,10,457					],
["—­‚ßˆĞ—Í",	57,,1				,10,455	,20,456				],
["’eŠÛß–ñp",	58,,1				,10,453	,20,454				],
["ˆÚ“®‘¬“x",	59,,1				,10,451	,20,452				],
["Š…",	60,,1			,-10,459	,10,458					],
["‹zŒŒ",	61,,1				,10,460	,20,461				],
["“K‰Œ‚",	62,,				,10,462	,20,463				],
["•ƒm–½–¬",	65,,1				,20,464					],
["–ò‘Šw",	66,,1				,10,465					],
["ú—´‹Z",	10,,2			,-10,469	,10,468	,20,467	,30,466			],
["ø“®",	67,,				,10,471					],
["‰Š’",	68,,1				,10,472	,15,473				],
["Œ€•¨‚ÌS“¾",	70,,1				,10,474					],
["â‘Î–hŒä",	74,,						,20,475			],
["•½íS",	77,1,			,-10,478	,10,477	,15,476				],
["ÌW‚Ì‹É‚İ",	,,									],
["I—¬",	73,,1				,15,480					],
["x‰‡",	75,,				,10,481					],
["‰¸Ë",	36,,1				,10,483	,15,484	,20,485			],
["‘®Œ‚",	20,,1			,-10,487	,10,486					],
["“¬”e",	76,,				,10,488					],
["ŒŒ‹CŠˆ«",	64,,				,10,489					],
["Œ•_",	24,,1				,10,492	,20,493	,25,525			],
["“Z—‹",	21,,1				,10,494					],
["•ÏŒ‚",	71,,				,10,495					],
["”²”[p",	32,,1				,10,496	,15,497				],
["”š”j‘Ï«",	52,,				,10,498					],
["‘M“]",	102,,1				,10,499					],
["•s‘Ş",	15,,1				,10,501					],
["IŒ‚",	72,,1				,15,502					],
["“€Œ‹‘Ï«",	55,,				,10,503					],
["•XŠE‘n¶",	63,,				,10,504					],
["æÒŒ‚",	98,,1				,10,505					],
["Œ••€‹Z",	9,,2			,-10,509	,10,508	,20,507	,30,506			],
["—vÇ",	106,,1				,10,511	,15,512				],
["‘_Œ‚",	111,,1				,10,513					],
["“•š",	105,,1				,10,514					],
["’´‰ñ”ğ",	153,,					,15,515				],
["–Òi",	22,,1				,10,516					],
["˜r—˜‚«",	43,,1				,15,519					],
["–‹–³",	103,,1				,10,520					],
["ˆê“_“Ë”j",	27,,1				,10,521					],
["‰öŠï",	69,,1				,15,522					],
["‹óŒ„",	37,,1				,10,523					],
["è—û",	44,,				,10,527	,15,528				],
["‚q•±v",	18,,				,10,529					],
["¥a’È‹Z",	11,,2			,-10,533	,10,532	,20,531	,30,530			]
];
MST_Skill[""] = [""];
MST_Skill["-"] = [""];
var MST_Skill_Exe = [
"ƒXƒLƒ‹–³‚µ","–ƒáƒ”¼Œ¸","–ƒáƒ–³Œø","–ƒáƒ”{‰Á","‡–°”¼Œ¸","‡–°–³Œø","‡–°”{‰Á","‹CâŠm—¦”¼Œ¸","‹Câ–³Œø","‹Câ”{‰Á","“Å”¼Œ¸","“Å–³Œø","“Å”{‰Á","’EL","’EL","------","‘Ïá","‘Ïá","------","‰B–§","’§”­","‘Ì—Í+10","‘Ì—Í+20","‘Ì—Í+30","‘Ì—Í-10","‘Ì—Í-20","‘Ì—Í-30","ƒ_ƒ[ƒW‰ñ•œ‘¬“x+1","ƒ_ƒ[ƒW‰ñ•œ‘¬“x+2","ƒ_ƒ[ƒW‰ñ•œ‘¬“x-1","ƒ_ƒ[ƒW‰ñ•œ‘¬“x-2","‹Æ•¨+1","‚È‚Ü‚­‚ç","a‚ê–¡ƒŒƒxƒ‹+1","------","Œ©Ø‚è+1","Œ©Ø‚è+2","Œ©Ø‚è+3","“uÎg—p‚‘¬‰»","“uÎ«”\”¼Œ¸","ƒK[ƒh«”\+1","ƒK[ƒh«”\+2","ƒK[ƒh«”\-1","ƒK[ƒh«”\-2","ƒI[ƒgƒK[ƒh","“Š±‹ZpUP","‘•“U‘¬“x+1","‘•“U‘¬“x+2","‘•“U‘¬“x+3","‘•“U‘¬“x-1","------","˜AË","”½“®ŒyŒ¸+1","”½“®ŒyŒ¸+2","’Êí’eE˜AË–îˆĞ—ÍUP","ŠÑ’Ê’eEŠÑ’Ê–îˆĞ—ÍUP","U’eEŠgU–îˆĞ—ÍUP","’Êí’e‚k‚u‚P’Ç‰Á","’Êí’e‘SƒŒƒxƒ‹’Ç‰Á","ŠÑ’Ê’e‚k‚u‚P’Ç‰Á","ŠÑ’Ê’e‚k‚u1&2’Ç‰Á","ŠÑ’Ê’e‘SƒŒƒxƒ‹’Ç‰Á","U’e‚k‚u‚P’Ç‰Á","U’e‚k‚u1&2’Ç‰Á","U’e‘SƒŒƒxƒ‹’Ç‰Á","“ObÖ’e‚k‚u‚P’Ç‰Á","“ObÖ’e‚k‚u1&2’Ç‰Á","“ObÖ’e‘SƒŒƒxƒ‹’Ç‰Á","ŠgU’e‚k‚u‚P’Ç‰Á","ŠgU’e‚k‚u1&2’Ç‰Á","ŠgU’e‘SƒŒƒxƒ‹’Ç‰Á","ó‘ÔˆÙíUŒ‚‹­‰»","ƒ{ƒ}[","‚Í‚ç‚Ö‚è”¼Œ¸","‚Í‚ç‚Ö‚è–³Œø","‚Í‚ç‚Ö‚è”{‰Áy¬z","‚Í‚ç‚Ö‚è”{‰Áy‘åz","‚Ü‚ñ‚Õ‚­","E‚¢H‚¢","UŒ‚—ÍUPy¬z","UŒ‚—ÍUPy’†z","UŒ‚—ÍUPy‘åz","–hŒä+20","–hŒä+30","–hŒä+60","–hŒä-20","–hŒä-30","–hŒä-40","—_‚ÌÍ‚µ","—_‚Ì•ø—i","€_‚ÌÙ‚«","€_‚Ì•ø—i","¨ğ","‚‹‰¨ğ","“‚İ–³Œø","Lˆæ‰»+1","Lˆæ‰»+2","‰^”À‚Ì’Bl","Še‘Ï«+5","Še‘Ï«+10","Še‘Ï«+20","Še‘Ï«-5","Še‘Ï«-10","Še‘Ï«-20","‰Î‘Ï«+10","‰Î‘Ï«+20","‰Î‘Ï«+30","‰Î‘Ï«-10","‰Î‘Ï«-20","‰Î‘Ï«-30","…‘Ï«+10","…‘Ï«+20","…‘Ï«+30","…‘Ï«-10","…‘Ï«-20","…‘Ï«-30","•X‘Ï«+10","•X‘Ï«+20","•X‘Ï«+30","•X‘Ï«-10","•X‘Ï«-20","•X‘Ï«-30","—‹‘Ï«+10","—‹‘Ï«+20","—‹‘Ï«+30","—‹‘Ï«-10","—‹‘Ï«-20","—‹‘Ï«-30","—´‘Ï«+10","—´‘Ï«+20","—´‘Ï«+30","—´‘Ï«-10","—´‘Ï«-20","—´‘Ï«-30","‹‚³”¼Œ¸","‹‚³–³Œø","‹‚³–³Œø","‹‚³”{‰Áy¬z","‹‚³”{‰Áy‘åz","Š¦‚³”¼Œ¸","Š¦‚³–³Œø","Š¦‚³–³Œø","Š¦‚³”{‰Áy¬z","Š¦‚³”{‰Áy‘åz","•—ˆ³y¬z–³Œø","•—ˆ³y‘åz–³Œø","—´•—ˆ³–³Œø","’n}í”õ","------","Ìæ+1","Ìæ+2","Ìæ-1","Ìæ-2","‚‘¬”‚¬æ‚è•Ìæ","¸—ì‚Ì‹C‚Ü‚®‚ê","_‚Ì‹C‚Ü‚®‚ê","ˆ«—ì‚Ì‹C‚Ü‚®‚ê","ˆ«–‚‚Ì‹C‚Ü‚®‚ê","K‰^","Œƒ‰^","•s‰^","Ğ“ï","’Ş‚è–¼l","’T’m","©“®ƒ}[ƒLƒ“ƒO","‘Ì—Í‰ñ•œƒAƒCƒeƒ€‹­‰»","‘Ì—Í‰ñ•œƒAƒCƒeƒ€ã‰»","’²‡¬Œ÷—¦+10%","’²‡¬Œ÷—¦+15%","’²‡¬Œ÷—¦+30%","’²‡¬Œ÷—¦-5%","’²‡¬Œ÷—¦-15%","Å‘å”’e¶Y","˜B‹àp","------","------","------","‰ñ”ğ«”\+1","‰ñ”ğ«”\+2","‰Î–ê—Í+1","‰Î–ê—Í+2","S”z«","ƒAƒCƒeƒ€g—p‹­‰»","ƒAƒCƒeƒ€g—pã‰»","ƒ‰ƒ“ƒi[","“İ‘«","‘•“U”UP","‚Ô‚ê•DOWN","‚Ô‚ê•UP","‚Å‚©‚¢‚Ì—ˆ‚¢I","‘H‚¢","ƒXƒ[ƒ‰ƒCƒt","”‚¬æ‚è–¼l","’nŒ`ƒ_ƒ[ƒWŒ¸y¬z","’nŒ`ƒ_ƒ[ƒWŒ¸y‘åz","’nŒ`ƒ_ƒ[ƒW‘y¬z","’nŒ`ƒ_ƒ[ƒW‘y‘åz","‘Ïk+1","º‘Ñ–ƒáƒ“Å”¼Œ¸","º‘Ñ–ƒáƒ“Å–³Œø","Ä‚«–¼l","Ä‚«t ","©ÌEÄ‚«–¼l","–Cpt","------","------","------","------","------","------","------","------","“J‚«–¼l","------","------","------","------","------","‚Æ‚ñ‚¸‚ç","‘Ìp","‹­Œ¨+1","------","‚Ğ‚ç‚ß‚«","ó‚¯g","------","------","------","------","ãJ","------","ª«","ƒhª«","^ª«","------","ˆ³—Íy¬z","•ßŠlãè","------","------","“Åƒrƒ“’Ç‰Á","–ƒáƒƒrƒ“’Ç‰Á","‡–°ƒrƒ“’Ç‰Á","‰Î‘®«UŒ‚‹­‰»y¬z","‰Î‘®«UŒ‚‹­‰»y‘åz","…‘®«UŒ‚‹­‰»y¬z","…‘®«UŒ‚‹­‰»y‘åz","—‹‘®«UŒ‚‹­‰»y¬z","—‹‘®«UŒ‚‹­‰»y‘åz","•X‘®«UŒ‚‹­‰»y¬z","•X‘®«UŒ‚‹­‰»y‘åz","—´‘®«UŒ‚‹­‰»y¬z","—´‘®«UŒ‚‹­‰»y‘åz","‰ì˜T+1","‰ì˜T+2","--------","”šŒ‚Œ•+1","”šŒ‚Œ•+2","”šŒ‚Œ•+3","‹­Œ‚Œ•+1","‹­Œ‚Œ•+2","‹­Œ‚Œ•+3","–Ò“ÅŒ•+1","–Ò“ÅŒ•+2","–Ò“ÅŒ•+3","–ƒáƒŒ•+1","–ƒáƒŒ•+2","–ƒáƒŒ•+3","‡–°Œ•+1","‡–°Œ•+2","‡–°Œ•+3","‰Î‰ŠŒ•+1","‰Î‰ŠŒ•+2","‰Î‰ŠŒ•+3","…ŒƒŒ•+1","…ŒƒŒ•+2","…ŒƒŒ•+3","•XŒ‹Œ•+1","•XŒ‹Œ•+2","•XŒ‹Œ•+3","—‹_Œ•+1","—‹_Œ•+2","—‹_Œ•+3","—´‰¤Œ•+1","—´‰¤Œ•+2","—´‰¤Œ•+3","Œ©Ø‚è+4","Œ©Ø‚è+5","UŒ‚—ÍUPy“Á‘åz","UŒ‚—ÍUPyâ‘åz","’´‚‹‰¨ğ","â—Ï","‘_‚¢Œ‚‚¿","‘Ì—Í+40","‘Ì—Í+50","‹Æ•¨+2","–hŒä+90","–hŒä+120","‰Ä’j‰Ä—","“~«ŒR","–Cp‰¤","–Cp_","ˆ³—Íy‘åz","•ßŠl–¼l","W’†+2","W’†+1","G”O","•ĞèŒ•‹ZyŒ•¹z","•ĞèŒ•‹ZyŠF“`z","•ĞèŒ•‹Zy’Blz","•ĞèŒ•‹Zy–¢nz","‘oŒ•‹Zy‘o—´z","‘oŒ•‹ZyŠF“`z","‘oŒ•‹Zy’Blz","‘oŒ•‹Zy–¢nz","‘åŒ•‹ZyŒ•‰¤z","‘åŒ•‹ZyŠF“`z","‘åŒ•‹Zy’Blz","‘åŒ•‹Zy–¢nz","‘¾“‹Zy“_z","‘¾“‹ZyŠF“`z","‘¾“‹Zy’Blz","‘¾“‹Zy–¢nz","’È‹Zy“İŠíbz","’È‹ZyŠF“`z","’È‹Zy’Blz","’È‹Zy–¢nz","ë—Â“J‹Zy‘t’éz","ë—Â“J‹ZyŠF“`z","ë—Â“J‹Zy’Blz","ë—Â“J‹Zy–¢nz","‘„‹Zy“V‘„z","‘„‹ZyŠF“`z","‘„‹Zy’Blz","‘„‹Zy–¢nz","e‘„‹Zy–Ccz","e‘„‹ZyŠF“`z","e‘„‹Zy’Blz","e‘„‹Zy–¢nz","de‹Zyeåz","de‹ZyŠF“`z","de‹Zy’Blz","de‹Zy–¢nz","Œye‹ZyeŒ†z","Œye‹ZyŠF“`z","Œye‹Zy’Blz","Œye‹Zy–¢nz","‹|‹Zy‹|‹Sz","‹|‹ZyŠF“`z","‹|‹Zy’Blz","‹|‹Zy–¢nz","–\•—ˆ³–³Œø","‘Ïk+2","ã©t","ã© ","•ŠíJ‚«","‘®«UŒ‚‹­‰»","‘®«UŒ‚ã‰»","ƒXƒ^ƒ~ƒi‹}‘¬‰ñ•œy‘åz","ƒXƒ^ƒ~ƒi‹}‘¬‰ñ•œy¬z","ƒXƒ^ƒ~ƒi‰ñ•œ’x‰„","Ši“¬‰¤","‹­Œ¨+2","ƒXƒ[ƒCƒ“ƒOƒiƒCƒt+1","ƒXƒ[ƒCƒ“ƒOƒiƒCƒt+2","‚¢‚½‚í‚è+1","‚¢‚½‚í‚è+2","‚¢‚½‚í‚è+3","“S–Ê”ç","Œ•p+1","Œ•p+2","ó‘ÔˆÙí”¼Œ¸","ó‘ÔˆÙí–³Œø","ó‘ÔˆÙí”{‰Á","•ĞèŒ•‹Zy‘åŒ•¹z","‘oŒ•‹Zy‘å‘o—´z","‘åŒ•‹Zy‘åŒ•‰¤z","‘¾“‹Zy‘å“_z","’È‹Zy‘å“İŠíbz","ë—Â“J‹Zy‘å‘t’éz","‘„‹Zy‘å“V‘„z","e‘„‹Zy‘å–Ccz","de‹Zy‘åeåz","Œye‹Zy‘åeŒ†z","‹|‹Zy‘å‹|‹Sz","ó‚¯g+1","Lˆæ‰»+3","Lˆæ‰»-1","ğ‹","Œ‚Á•¥‚¢","Œ‹»‘Ï«","Œ‹»ã“_","¥—Í‘Ï«","¥—Íã“_","Œx‰ú","‹~‰‡","Kã‚ª‚è","ˆê•C˜T","‘ã","‘¬Ë","“u ","‹•ú+1","‹•ú+2","‹•ú+3","”½Ë+1","”½Ë+2","”½Ë+3","^‘Å+1","^‘Å+2","^‘Å+3","„Œ‚+1","„Œ‚+2","„Œ‚+3","„Œ‚+4","„Œ‚+5","Œƒ—ã+1","Œƒ—ã+2","‰¶’+1","‰¶’+2","‰¶’+3","¶–½—Í+1","¶–½—Í+2","¶–½—Í+3","¶–½—Í-1","‹t—Ø","ƒuƒ`ƒMƒŒ","“S˜r+1","“S˜r+2","ƒuƒŠ[ƒ_[","“¢‚¿•Ô‚µ+1","“¢‚¿•Ô‚µ+2","ˆê‘M+1","ˆê‘M+2","ˆê‘M+3","•s‹ü","•sš•s‹ü","„’e+1","‘•’…+1","‘•’…+2","‘•’…+3","’ÉŒ‚","ã“_“ÁŒø","ã“_‹êè","’²‡t+1","’²‡t+2","’²‡t+3","’²‡t-1","ƒnƒ“ƒ^[¶Šˆ","ƒnƒ“ƒ^[–‹i","îË+1","îË+2","îË+3","‰ñ”ğ«”\+3","ˆÚ“®‘¬“xUP+1","ˆÚ“®‘¬“xUP+2","ß–ñ–¼l","ß–ñ’Bl","—­‚ßˆĞ—ÍUP+1","—­‚ßˆĞ—ÍUP+2","‰ñ”ğ‹——£UP","Ô°","Â°","‹zŒŒ+1","‹zŒŒ+2","“K‰Œ‚+1","“K‰Œ‚+2","ÅŠúƒm‘M•","–òål","ú—´‹Zyú™€z","ú—´‹ZyŠF“`z","ú—´‹Zy’Blz","ú—´‹Zy–¢nz","ú—´‹Zy‘åú™€z","ø“®","g‰‹‚ÌˆĞŒõ+1","g‰‹‚ÌˆĞŒõ+2","Œ€•¨æˆµŠF“`","â‘Î–hŒä‘Ô¨","”ÕÎ‚Ì\‚¦","–œ‘S‚Ì”õ‚¦","–û’f‘å“G","ÌW‚Ì‹É‚İ","I—¬","x‰‡","”½“®ŒyŒ¸+3","‰¸Ë+1","‰¸Ë+2","‰¸Ë+3","‘®«“ÁŒø","‘®«”÷Œø","“¬”e","ŒŒ‹CŠˆ«","ŒŒ‹CŠˆ«+2","ó‘ÔˆÙí–³Œøy‘½íz","Œ•_+1","Œ•_+2","“Z—‹","ó‘ÔˆÙí’ÇŒ‚","”²”[p+1","”²”[p+2","”š”j‘Ï«","‘M“]","‘M“]","•s‘Şƒm\","IŒ‚","“€Œ‹‘Ï«","•XŠE‘n¶","Á”ï“ÁŒø","Œ••€‹Zya«z","Œ••€‹ZyŠF“`z","Œ••€‹Zy’Blz","Œ••€‹Zy–¢nz","Œ••€‹Zy‘åa«z","—vÇ+1","—vÇ+2","‘_Œ‚","“•š","’´‰ñ”ğ","–Òi","Œƒ—ã+2","”½Ë+3","˜r—˜‚«","–‹–³","ˆê“_“Ë”j","‰öŠï","‹óŒ„","„Œ‚+6","Œ•_+3","„’e+2","è—û+1","è—û+2","‚q•±v","¥a’È‹Zy¥¯z","¥a’È‹ZyŠF“`z","¥a’È‹Zy’Blz","¥a’È‹Zy–¢nz","¥a’È‹Zy‘å¥¯z"
];
//ŠÖ”
//ŒŸõ—pì¬ƒ^ƒCƒvw’è
var setRep = function (w){
	var d = w.c_color.checked ? "#" : "",
		t = "";
	if (!w.c_rep1.style.backgroundColor) t += "1-" + d;	//ƒCƒxƒ“ƒg
	if (!w.c_repe.style.backgroundColor) t += "1e" + d;	//ƒCƒxƒ“ƒg
	if (!w.c_repc.style.backgroundColor) t += "1c" + d;	//ƒpƒl[ƒ
	if (!w.c_reps.style.backgroundColor) t += "1s" + d;	//ë‰q
	if (!w.c_reps.style.backgroundColor && !w.c_repe.style.backgroundColor) t += "1es" + d;	//ƒCƒxƒ“ƒg+ë‰q
	if (!w.c_repi.style.backgroundColor) t += "1i" + d;	//èè‘Ê“V
	if (!w.c_rept.style.backgroundColor) t += "1t" + d;	//ë—ù“¹
	if (!w.c_rep2.style.backgroundColor) t += "2-" + d;	//—Â’c
	if (!w.c_rep3.style.backgroundColor) {
		t += "3-" + d;
		if (!w.c_repe.style.backgroundColor) t += "3e" + d;
		if (!w.c_repg.style.backgroundColor) t += "3g" + d;
		if (!w.c_repi.style.backgroundColor) t += "3i" + d;
	}
	if (!w.c_repm.style.backgroundColor) t += "2m" + d;	//ëlÕ
	if (!w.c_repu.style.backgroundColor) t += "2u" + d;	//—Â’cŒ}Œ‚í
	if (!w.c_repg.style.backgroundColor) t += "4g" + d;	//ƒKƒ`ƒƒ
	if (!w.c_repk.style.backgroundColor) t += "4k" + d;	//ƒLƒbƒg
	if (!w.c_rep5.style.backgroundColor) t += "5-" + d;	//“Á“T
	if (!w.c_repp.style.backgroundColor) t += "5p" + d;	//ƒpƒbƒP
	return t;
};
//¶Y‹­‰»‘fŞ
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
//¶Y‹­‰»ƒ[ƒj[
var getZeny = function (eq){
	if (eq[I_bLVUPPTN]) {
		var zeny = +eq[I_bZENY],ptncd = eq[I_bZENYPTN],ptn = MST_Equip.zeny[parseInt(ptncd,16)].split(",");
		var list = [zeny];
		for (var i = 1;i < 7; i++) {
			//'‚¢‚Â‚©‚ç‚©‚È‚­‚È‚Á‚½
			//if (zeny === 0 ||
			//	ptn[i] % 25 === 0 || 
			//	ptn[i] === "280" || ptn[i] === "180" || ptn[i] === "8" || ptn[i] === "115" || ptn[i] === "220" ||
			//	(ptncd === "04" && ptn[i] === "10" && (zeny === 10875 || zeny === 1125)) ||
			//	(ptncd === "05" && ptn[i] === "420" && (zeny === 1000 || zeny === 1100 || zeny === 1200 || zeny === 4100 || zeny === 8000 || zeny === 8800)) ||
			//	(ptncd === "08" && (ptn[i] === "5" || ptn[i] === "15") && (zeny === 17250 || zeny === 21250))) {
				list[i] = zeny * ptn[i] / 100|0;
			//} else {
			//	list[i] = (zeny * ptn[i] / 100|0) - 1;
			//}
		}
		//¶Y‚Ìê‡‚Ì”¼Šz‚É
		if (eq[I_bRECIPE1] && eq[I_bRECIPE1].indexOf("“X”„‚è") === -1) list[0] = zeny / 2|0;
		return list;
	} else { //‘•ü•i
		return [eq[I_bZENY],"","","","","",""];
	}
};
//–hŒäŒvZ
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
//ƒXƒƒbƒgŒvZ
var getSlot = function (eq){
	if (eq[I_bLVUPPTN]) {
		var slot = +eq[I_bSLOT1],slotmax = +eq[I_bSLOT7],ptn = MST_Equip.slot[parseInt(eq[I_bSLOTPTN],16)].split(",");
		var list = [slot + +ptn[0],slot + +ptn[1],slot + +ptn[2],slot + +ptn[3],slot + +ptn[4],slot + +ptn[5],slot + +ptn[6]];
		for (var i = 0;i < 7; i++) {
			if (list[i] >= slotmax) list[i] = slotmax;
		}
		return list;
	} else { //‘•ü•i
		return [+eq[I_bSLOT7],"","","","","",""];
	}
};

//‘•ü•i–¼‘O’²®
var cngDecName = function (name,type){
	switch (type) {
	case "":  //‘•ü•i
		name = name.replace("ì","");
		break;
	case "1": //ƒJƒt
		name = name.replace("ƒJƒt","");
		break;
	case "2": //“Vˆó
	case "3": //“V••ˆó
		name = name.replace("‚Ìˆó","");
		break;
	}
	return name.replace(/[‚`-‚y‚O-‚X]/g, function(s) {
	    return String.fromCharCode(s.charCodeAt(0) - 65248);
	});
}

var global = {
//------------------------------------‰Šú‰»----------
Init : function(){
//ğŒ
this.c_sex = document.getElementById("c_sex");
this.c_type = document.getElementById("c_type");
this.c_rui = document.getElementById("c_rui");
this.c_series = document.getElementById("c_series");
this.c_skill1 = document.getElementById("c_skill1");
this.c_skill2 = document.getElementById("c_skill2");
this.c_skill3 = document.getElementById("c_skill3");
this.c_teni = document.getElementById("c_teni");
this.c_andor = document.getElementById("c_andor");
this.c_rare = document.getElementById("c_rare");
this.c_rep1 = document.getElementById("c_rep1");
this.c_rep2 = document.getElementById("c_rep2");
this.c_rep3 = document.getElementById("c_rep3");
this.c_rep5 = document.getElementById("c_rep5");
this.c_repi = document.getElementById("c_repi");
this.c_repe = document.getElementById("c_repe");
this.c_repg = document.getElementById("c_repg");
this.c_repk = document.getElementById("c_repk");
this.c_repp = document.getElementById("c_repp");
this.c_repm = document.getElementById("c_repm");
this.c_repc = document.getElementById("c_repc");
this.c_reps = document.getElementById("c_reps");
this.c_rept = document.getElementById("c_rept");
this.c_repu = document.getElementById("c_repu");

this.c_slot = document.getElementById("c_slot");
this.c_minus = document.getElementById("c_minus");
this.c_color = document.getElementById("c_color");
this.c_upg = document.getElementById("c_upg");
this.c_hr = document.getElementById("c_hr");
this.c_cuff_lm = document.getElementById("c_cuff_lm");

this.c_series_data = this.c_skill1_data = this.c_skill2_data = this.c_skill3_data = "";

//–h‹ï
this.b_cuff = document.getElementById("b_cuff");
this.b_buki = document.getElementById("b_buki");
this.b_head = document.getElementById("b_head");
this.b_body = document.getElementById("b_body");
this.b_arm = document.getElementById("b_arm");
this.b_wst = document.getElementById("b_wst");
this.b_leg = document.getElementById("b_leg");
this.b_cuff_list = document.getElementById("b_cuff_list");
this.b_buki_list = document.getElementById("b_buki_list");
this.b_head_list = document.getElementById("b_head_list");
this.b_body_list = document.getElementById("b_body_list");
this.b_arm_list = document.getElementById("b_arm_list");
this.b_wst_list = document.getElementById("b_wst_list");
this.b_leg_list = document.getElementById("b_leg_list");
this.b_cuffDel = document.getElementById("b_cuffDel");
this.b_bukiDel = document.getElementById("b_bukiDel");
this.b_headDel = document.getElementById("b_headDel");
this.b_bodyDel = document.getElementById("b_bodyDel");
this.b_armDel = document.getElementById("b_armDel");
this.b_wstDel = document.getElementById("b_wstDel");
this.b_legDel = document.getElementById("b_legDel");
this.b_bukiLv = document.getElementById("b_bukiLv");
this.b_cuffLv = document.getElementById("b_cuffLv");
this.b_headLv = document.getElementById("b_headLv");
this.b_bodyLv = document.getElementById("b_bodyLv");
this.b_armLv = document.getElementById("b_armLv");
this.b_wstLv = document.getElementById("b_wstLv");
this.b_legLv = document.getElementById("b_legLv");
for (var i = 1; i < 4; i++){
	this["b_cuffS"+i] = document.getElementById("b_cuffS"+i);
	this["b_bukiS"+i] = document.getElementById("b_bukiS"+i);
	this["b_headS"+i] = document.getElementById("b_headS"+i);
	this["b_bodyS"+i] = document.getElementById("b_bodyS"+i);
	this["b_armS"+i] = document.getElementById("b_armS"+i);
	this["b_wstS"+i] = document.getElementById("b_wstS"+i);
	this["b_legS"+i] = document.getElementById("b_legS"+i);
	this["b_headT"+i] = document.getElementById("b_headT"+i);
	this["b_bodyT"+i] = document.getElementById("b_bodyT"+i);
	this["b_armT"+i] = document.getElementById("b_armT"+i);
	this["b_wstT"+i] = document.getElementById("b_wstT"+i);
	this["b_legT"+i] = document.getElementById("b_legT"+i);
	this["b_cuffS"+i+"_data"] = this["b_bukiS"+i+"_data"] = this["b_headS"+i+"_data"] = this["b_bodyS"+i+"_data"] = this["b_armS"+i+"_data"] = this["b_wstS"+i+"_data"] = this["b_legS"+i+"_data"] = 
															this["b_headT"+i+"_data"] = this["b_bodyT"+i+"_data"] = this["b_armT"+i+"_data"] = this["b_wstT"+i+"_data"] = this["b_legT"+i+"_data"] = "O";
}
this.b_cuffS3_data = ""; //ƒJƒt‚Ì‚R”Ô–Ú‚Í‚È‚¢
this.b_head.selectedIndex = this.b_body.selectedIndex = this.b_arm.selectedIndex = this.b_wst.selectedIndex = this.b_leg.selectedIndex = this.b_headLv.selectedIndex = this.b_bodyLv.selectedIndex = this.b_armLv.selectedIndex = this.b_wstLv.selectedIndex = this.b_legLv.selectedIndex = 0;
for (var i = 1; i < 6; i++){
	this["b_headSn"+i] = document.getElementById("b_headSn"+i);
	this["b_bodySn"+i] = document.getElementById("b_bodySn"+i);
	this["b_armSn"+i] = document.getElementById("b_armSn"+i);
	this["b_wstSn"+i] = document.getElementById("b_wstSn"+i);
	this["b_legSn"+i] = document.getElementById("b_legSn"+i);
	this["b_headSp"+i] = document.getElementById("b_headSp"+i);
	this["b_bodySp"+i] = document.getElementById("b_bodySp"+i);
	this["b_armSp"+i] = document.getElementById("b_armSp"+i);
	this["b_wstSp"+i] = document.getElementById("b_wstSp"+i);
	this["b_legSp"+i] = document.getElementById("b_legSp"+i);
}
this.b_headDef = document.getElementById("b_headDef");
this.b_bodyDef = document.getElementById("b_bodyDef");
this.b_armDef  = document.getElementById("b_armDef");
this.b_wstDef  = document.getElementById("b_wstDef");
this.b_legDef  = document.getElementById("b_legDef");
this.b_headGR = 1;
this.b_bodyGR = 1;
this.b_armGR  = 1;
this.b_wstGR  = 1;
this.b_legGR  = 1;
this.b_Def_Sum   = document.getElementById("b_Def_Sum");
this.b_headFp = document.getElementById("b_headFp");
this.b_bodyFp = document.getElementById("b_bodyFp");
this.b_armFp  = document.getElementById("b_armFp");
this.b_wstFp  = document.getElementById("b_wstFp");
this.b_legFp  = document.getElementById("b_legFp");
this.b_Fp_Sum   = document.getElementById("b_Fp_Sum");
this.b_headWp = document.getElementById("b_headWp");
this.b_bodyWp = document.getElementById("b_bodyWp");
this.b_armWp  = document.getElementById("b_armWp");
this.b_wstWp  = document.getElementById("b_wstWp");
this.b_legWp  = document.getElementById("b_legWp");
this.b_Wp_Sum   = document.getElementById("b_Wp_Sum");
this.b_headTp = document.getElementById("b_headTp");
this.b_bodyTp = document.getElementById("b_bodyTp");
this.b_armTp  = document.getElementById("b_armTp");
this.b_wstTp  = document.getElementById("b_wstTp");
this.b_legTp  = document.getElementById("b_legTp");
this.b_Tp_Sum   = document.getElementById("b_Tp_Sum");
this.b_headIp = document.getElementById("b_headIp");
this.b_bodyIp = document.getElementById("b_bodyIp");
this.b_armIp  = document.getElementById("b_armIp");
this.b_wstIp  = document.getElementById("b_wstIp");
this.b_legIp  = document.getElementById("b_legIp");
this.b_Ip_Sum   = document.getElementById("b_Ip_Sum");
this.b_headDp = document.getElementById("b_headDp");
this.b_bodyDp = document.getElementById("b_bodyDp");
this.b_armDp  = document.getElementById("b_armDp");
this.b_wstDp  = document.getElementById("b_wstDp");
this.b_legDp  = document.getElementById("b_legDp");
this.b_Dp_Sum   = document.getElementById("b_Dp_Sum");
this.b_skillP = document.getElementById("b_skillP");
this.b_skillT = document.getElementById("b_skillT");
this.b_skill = document.getElementById("b_skill");
this.b_effectT = document.getElementById("b_effectT");

this.d_mei = document.getElementById("d_mei");
this.d_doc = document.getElementById("d_doc");
this.d_Fp = document.getElementById("d_Fp");
this.d_Wp = document.getElementById("d_Wp");
this.d_Tp = document.getElementById("d_Tp");
this.d_Ip = document.getElementById("d_Ip");
this.d_Dp = document.getElementById("d_Dp");
this.d_type = document.getElementById("d_type");
this.d_sex = document.getElementById("d_sex");
this.d_rep1 = document.getElementById("d_rep1");
this.d_rep2 = document.getElementById("d_rep2");
this.d_rui = document.getElementById("d_rui");
for (var i = 1; i < 6; i++){
	this["d_sn"+i] = document.getElementById("d_sn"+i);
	this["d_sp"+i] = document.getElementById("d_sp"+i);
}
this.d_MF = document.getElementById("d_MF");
this.d_MB = document.getElementById("d_MB");
this.d_FF = document.getElementById("d_FF");
this.d_FB = document.getElementById("d_FB");
this.d_lv = [];
this.d_def = [];
this.d_zeny = [];
this.d_sozai = [];
for (var i = 1; i < 8; i++) {
	this.d_lv[i] = document.getElementById("d_lv"+i);
	this.d_def[i] = document.getElementById("d_def"+i);
	this.d_zeny[i] = document.getElementById("d_zeny"+i);
	this.d_sozai[i] = document.getElementById("d_sozai"+i);
}
this.d_zenyAll = document.getElementById("d_zenyA");
this.d_sozaiAll = document.getElementById("d_sozaiA");
//ŒŸõŒ‹‰Ê
this.s_headCK = document.getElementById("s_headCK");
this.s_headZK = document.getElementById("s_headZK");
this.s_headYA = document.getElementById("s_headYA");
this.s_head = document.getElementById("s_head");
this.s_bodyCK = document.getElementById("s_bodyCK");
this.s_bodyZK = document.getElementById("s_bodyZK");
this.s_bodyYA = document.getElementById("s_bodyYA");
this.s_body = document.getElementById("s_body");
this.s_armCK = document.getElementById("s_armCK");
this.s_armZK = document.getElementById("s_armZK");
this.s_armYA = document.getElementById("s_armYA");
this.s_arm = document.getElementById("s_arm");
this.s_wstCK = document.getElementById("s_wstCK");
this.s_wstZK = document.getElementById("s_wstZK");
this.s_wstYA = document.getElementById("s_wstYA");
this.s_wst = document.getElementById("s_wst");
this.s_legCK = document.getElementById("s_legCK");
this.s_legZK = document.getElementById("s_legZK");
this.s_legYA = document.getElementById("s_legYA");
this.s_leg = document.getElementById("s_leg");
this.s_decoCK = document.getElementById("s_decoCK");
this.s_decoZK = document.getElementById("s_decoZK");
this.s_decoYA = document.getElementById("s_decoYA");
this.s_deco = document.getElementById("s_deco");
//this.s_cuffCK = document.getElementById("s_cuffCK");
//this.s_cuffZK = document.getElementById("s_cuffZK");
this.s_cuffYA = document.getElementById("s_cuffYA");
this.s_cuff = document.getElementById("s_cuff");
//q‰æ–Ê
this.sub_Win_Style = document.getElementById("sub_Win").style;
this.sub_Win_id = "";
this.sub_Win_scroll = ["",0];
this.sub_WinBody = document.getElementById("sub_WinBody");

//ƒ{ƒ^ƒ“
this.sub_WinRemove_B_Style = document.getElementById("sub_WinRemove_B").style;
this.sub_WinClear_B_Style = document.getElementById("sub_WinClear_B").style;

//–hŒäƒVƒ~ƒ…
this.b_gousyuB = document.getElementById("b_gousyuB");
this.def_Box = document.getElementById("def_Box");
this.c_gohu = document.getElementById("c_gohu");
this.c_tume = document.getElementById("c_tume");
this.c_soko = document.getElementById("c_soko");
this.c_mesi = document.getElementById("c_mesi");
this.c_sr = document.getElementById("c_sr");
this.c_tane = document.getElementById("c_tane");
this.c_drink = document.getElementById("c_drink");
this.c_fueDEF = document.getElementById("c_fueDEF");
this.c_fueDEF_G = document.getElementById("c_fueDEF_G");
this.c_fueTAI = document.getElementById("c_fueTAI");
this.c_buki = document.getElementById("c_buki");
this.c_shien = document.getElementById("c_shien");
this.c_G_Que = document.getElementById("c_G_Que");
this.c_G_Fit = document.getElementById("c_G_Fit");
this.c_kizuna = document.getElementById("c_kizuna");
this.c_katsu = document.getElementById("c_katsu");
this.c_soko.value = 60; //’ê—Í‰Šú’l
this.b_headDef.value = 0;
this.b_bodyDef.value = 0;
this.b_armDef.value = 0;
this.b_wstDef.value = 0;
this.b_legDef.value = 0;
this.b_Def_Sum.value = 1;
this.b_Fp_Sum.value = 0;
this.b_Wp_Sum.value = 0;
this.b_Tp_Sum.value = 0;
this.b_Ip_Sum.value = 0;
this.b_Dp_Sum.value = 0;
}
//------------------------------------ƒf[ƒ^ƒZƒbƒg----------
,setSeriesList : function (data){
MST_Series_List = data;
}
,setDecoList : function (data){
MST_Deco_List = data;
}
,setEquip : function (name,data){
MST_Equip[name] = data;
}
,setEquipSplit : function (){
//--‘•”õ‚Ì”z—ñ‰»
for (var i = 0; i < 6; i++) for (var eqid in MST_Equip[BUINAME[i]]) MST_Equip[BUINAME[i]][eqid] = MST_Equip[BUINAME[i]][eqid].split(",");
//--ìƒŠƒXƒg‚Ì•ÏX
var declist = [],w = "";
declist[declist.length] = ["—š—ğ",[]];
for (var i = 0,m = MST_Skill_List.length; i < m; i++) {
	var decwk = [MST_Skill_List[i][0]];
	for (var j = 0,list = MST_Skill_List[i][1],n = list.length; j < n; j++) {
		var dec = [];
		for (var eqid in MST_Equip.deco) {
			var eq = MST_Equip.deco[eqid];
			if ((eq[I_bDEC] === "" || eq[I_bDEC] === "1") &&
				(eq[I_bSN1] == list[j] || eq[I_bSN2] == list[j] || eq[I_bSN3] == list[j] || eq[I_bSN4] == list[j] || eq[I_bSN5] == list[j])) {
				w = eq[I_bSN1] == list[j] ? eq[I_bSP1] : 
					eq[I_bSN2] == list[j] ? eq[I_bSP2] : 
					eq[I_bSN3] == list[j] ? eq[I_bSP3] : 
					eq[I_bSN4] == list[j] ? eq[I_bSP4] : 
					eq[I_bSN5] == list[j] ? eq[I_bSP5] : "0";
				dec[dec.length] = [w,eqid];
			}
		}
		dec.sort(function (a, b) {
					return +a[0] < +b[0] ? 1 : -1;
				});
		for(var v=0; v<dec.length; v++){
			dec[v].splice(0, 1);
		}
		decwk[decwk.length] = [MST_Skill[list[j]][0],dec];
	}
	declist[declist.length] = decwk;
}
MST_Deco_List = declist.concat(MST_Deco_List);
//’HˆÙƒXƒLƒ‹
declist = [],decwk = ["’HˆÙƒXƒLƒ‹"];
for (var i = 1,m = TENINAME.length; i < m; i++) {
	var dec = [];
	for (var eqid in MST_Equip.deco) {
		var eq = MST_Equip.deco[eqid];
		if (eq[I_bDEC] === "1" && eq[I_bTeni] == i) dec[dec.length] = eqid;
	}
	if (dec.length) decwk[decwk.length] = [TENINAME[i],dec];
}
declist[declist.length] = decwk;
MST_Deco_List = MST_Deco_List.concat(declist);
}
//------------------------------------ƒXƒLƒ‹ƒŠƒXƒg•\¦----------
,dispSkillList : function (buttonid){
this.c_series.value = "-",this.sub_WinBody./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = this.c_series_data = "",this.c_andor.disabled = this.c_slot.disabled = this.c_minus.disabled = this.c_upg.disabled = false;

var df = document.createDocumentFragment(),dt = document.createElement("dt"),dd = document.createElement("dd"),input = document.createElement("input");
input.type = "button",input.style.marginRight = "1px", input.style.padding = "0 1px 0 1px";
if (CK_IE9) input.style.margin = "1px", input.style.padding = "2px";

for (var i = 0,m = MST_Skill_List.length; i < m; i++) {
	df.appendChild(dt.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(MST_Skill_List[i][0]));
	df.appendChild(dd.cloneNode(false));
	for (var j = 0,dfL = df.lastChild,list = MST_Skill_List[i][1],n = list.length; j < n; j++) {
		input.value = MST_Skill[list[j]][0];
		input.name = "miniW" + list[j];
		input.style.color = MST_Skill[list[j]][3] === 1 ? "#0040FF" : MST_Skill[list[j]][3] === 2 ? "orangered" : "";
		dfL.appendChild(input.cloneNode(false));
	}
}
this.sub_WinBody.appendChild(df);
this.sub_WinRemove_B_Style.visibility = "visible";
this.sub_Win_id = buttonid;
if (CK_IE6) this.c_rare.style.visibility = this.c_slot.style.visibility = this.c_hr.style.visibility = this.s_head.style.visibility = this.s_body.style.visibility = this.s_arm.style.visibility = this.s_wst.style.visibility = this.s_leg.style.visibility = this.c_cuff_lm.style.visibility = this.c_mesi.style.visibility = this.c_sr.style.visibility = this.c_tane.style.visibility = this.c_drink.style.visibility = this.c_fueDEF.style.visibility = this.c_fueTAI.style.visibility = "hidden";

this.sub_Win_Style.top = "30px",this.sub_Win_Style.left = (20 + +buttonid.charAt(7)) + "em",this.sub_Win_Style.display = "block";
//this.sub_Win_Style.right = (18-buttonid.charAt(7)) + "%";
//ƒXƒNƒ[ƒ‹ˆÊ’uÄŒ»
this.sub_WinBody.scrollTop = this.sub_Win_scroll[0] === this.sub_Win_id ? this.sub_Win_scroll[1] : 0;
}
//------------------------------------ƒVƒŠ[ƒYƒŠƒXƒg•\¦----------
,dispSeriesList : function (buttonid){
this.c_skill1.value = this.c_skill2.value = this.c_skill3.value = "-",this.c_teni.value = "",this.sub_WinBody./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = this.c_skill1_data = this.c_skill2_data = this.c_skill3_data = "",this.c_andor.disabled = this.c_slot.disabled = this.c_minus.disabled = this.c_upg.disabled = true;

var df = document.createDocumentFragment(),dt = document.createElement("dt"),dd = document.createElement("dd"),dtG = dt.cloneNode(false),ddG = dd.cloneNode(false),input = document.createElement("input");
dt.style.fontWeight = "bold",dtG.style.marginLeft = "1em",ddG.style.marginLeft = "2em";
input.type = "button",input.style.marginRight = "1px", input.style.padding = "0 1px 0 1px";
if (CK_IE9) input.style.margin = "1px", input.style.padding = "2px";

for (var i = 0,m = MST_Series_List.length; i < m; i++) {
	df.appendChild(dt.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(MST_Series_List[i][0]));
	df.appendChild(dd.cloneNode(false));
	for (var j = 1,n = MST_Series_List[i].length; j < n; j++) {
		input.name = "miniW" + i + j;
		if (typeof MST_Series_List[i][j][1] === "object") { //ƒwƒbƒ_[—L‚è
			df.appendChild(dtG.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(MST_Series_List[i][j][0]));
			df.appendChild(ddG.cloneNode(false));
			var list = MST_Series_List[i][j][1];
		} else {
			var list = MST_Series_List[i][j];
		}
		for (var k = 0,dfL = df.lastChild,l = list.length; k < l; k++) {
			input.value = list[k];
			dfL.appendChild(input.cloneNode(false));
		}
	}
}
this.sub_WinBody.appendChild(df);
this.sub_WinRemove_B_Style.visibility = this.sub_WinClear_B_Style.visibility = "hidden";
this.sub_Win_id = buttonid;
if (CK_IE6) this.c_rare.style.visibility = this.c_slot.style.visibility = this.c_hr.style.visibility = this.s_head.style.visibility = this.s_body.style.visibility = this.s_arm.style.visibility = this.s_wst.style.visibility = this.s_leg.style.visibility = this.c_cuff_lm.style.visibility = this.c_mesi.style.visibility = this.c_sr.style.visibility = this.c_tane.style.visibility = this.c_drink.style.visibility = this.c_fueDEF.style.visibility = this.c_fueTAI.style.visibility = "hidden";

this.sub_Win_Style.top = "30px",this.sub_Win_Style.left = "13em",this.sub_Win_Style.display = "block";
//this.sub_Win_Style.left = "auto";
//ƒXƒNƒ[ƒ‹ˆÊ’uÄŒ»
this.sub_WinBody.scrollTop = this.sub_Win_scroll[0] === this.sub_Win_id ? this.sub_Win_scroll[1] : 0;

}
//------------------------------------ƒCƒ“ƒvƒbƒg----------
,dispInput : function (){
this.sub_Win_Style.display = "none";
this.c_skill1.value = this.c_skill2.value = this.c_skill3.value = "-";
this.c_teni.value ="";
var i = prompt("–h‹ï–¼‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢Bæ“ªˆê’v‚ÅŒŸõ‚µ‚Ü‚·B","");
if (i) {
	this.c_series.value = i;
	this.c_series_data = "9";
	this.search();
}
}
//------------------------------------‘•ü•iƒŠƒXƒg•\¦----------
,dispDecoList : function (buttonid){
if (this[buttonid].value === "œ" || this[buttonid].value === "-") return false;
if (this.sub_Win_Style.display === "block" && this.sub_Win_id === buttonid) return false;
this.sub_WinBody./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = "";

var slot_no = buttonid.charAt(buttonid.length-1),slot_name = buttonid.substring(0,buttonid.length-2);
//ck_type=0:‹¤—p 1:Œ•m 2:ƒKƒ“ƒi,lm_slot=Å‘åƒXƒƒbƒg”,ck_sp=SP–h‹ï,ck_cuff=ƒJƒt,ck_trWP=“V˜L•Ší,ck_hiden=”é“`ƒXƒLƒ‹ƒJƒt•\¦
var ck_type = "",ck_dec1 = "",ck_dec2 = "",lm_slot = 0,lm_cuff = +this.c_cuff_lm.value,ck_sp = false,ck_trWP = false,ck_hiden = false,ck_cuff = false,ck_minus = this.c_minus.checked,high_hr = +this.c_hr.value,ck_rep = setRep(this);
switch (slot_name) {
case "b_buki":
	ck_type = "0";
	lm_slot = 4 - slot_no;
	switch (this.b_bukiLv.value) {
	case "1": //’Êí
		ck_dec1 = ck_dec2 = "";
		break;
	case "2": //SP
		ck_dec1 =  ck_dec2 = "";
		lm_slot = 2 - slot_no;
		ck_sp = true;
		break;
	case "3": //“V˜L
		ck_dec1 = "3",ck_dec2 = "";
		ck_trWP = true;
		break;
	}
	break;
case "b_cuff":
	ck_type = "0";
	ck_dec1 =  ck_dec2 = "1";
	if (slot_no === "2" && this.b_cuffS1.value !== "›") {
		var eq = MST_Equip.deco[this[slot_name].value.split(",")[2]];
		if (eq[I_bCLASS] === "L") {
			//”é“`ƒXƒLƒ‹ƒJƒt
			lm_slot = 3 - slot_no + 1,ck_hiden = true;
		} else {
			//ƒm[ƒ}ƒ‹
			lm_slot = 3 - slot_no;
		}
	} else {
		lm_slot = 3 - slot_no;
	}
	ck_cuff = true
	break;
default:
	var eq = MST_Equip[slot_name.substring(2)][this[slot_name].value.split(",")[0]];
	ck_type = eq[I_bTYPE];
	if (buttonid.lastIndexOf("T") === -1) {
		//’Êí
		var slot_data = getSlot(eq);
		lm_slot = slot_data[this[slot_name+"Lv"].value-1] - slot_no + 1;
		ck_dec1 =  ck_dec2 = "";
		ck_sp = eq[I_bCLASS] === "A";
	} else {
		//“V˜L
		lm_slot = eq[I_bTrSLOT] - slot_no + 1;
		ck_dec1 =  ck_dec2 = "2";
	}
}

var lmck=0,lmck=0,lmskl=0,bkTitle="",df = document.createDocumentFragment(),dt = document.createElement("dt"),dd = document.createElement("dd"),dtG = dt.cloneNode(false),ddG = dd.cloneNode(false),input = document.createElement("input");
dt.style.fontWeight = "bold",dtG.style.marginLeft = "1em",ddG.style.marginLeft = "2em";
input.type = "button",input.style.marginRight = "1px", input.style.padding = "0 1px 0 1px";
if (CK_IE9) input.style.margin = "1px", input.style.padding = "2px";
//
for (var i = 0,m = MST_Deco_List.length; i < m; i++) {
	if (MST_Deco_List[i][0] === "—š—ğ" || MST_Deco_List[i][0] === "’HˆÙƒXƒLƒ‹" || MST_Deco_List[i][0] === "“Vˆó" || MST_Deco_List[i][0] === "“V••ˆó") {
		lmck = false;
	} else {
		lmck = true;
	}
	for (var j = 1,n = MST_Deco_List[i].length; j < n; j++) {
		var dfL = document.createDocumentFragment();
		if (typeof MST_Deco_List[i][j][1] === "object") { //ƒwƒbƒ_[—L‚è
			dfL.appendChild(dtG.cloneNode(false)),dfL.lastChild.appendChild(document.createTextNode(MST_Deco_List[i][j][0]));
			dfL.appendChild(ddG.cloneNode(false));
			var list = MST_Deco_List[i][j][1];
		} else {
			var list = MST_Deco_List[i][j];
		}
		for (var k = 0,l = list.length,ck = false; k < l; k++) {
			var eq = MST_Equip.deco[list[k]];

			if ((ck_type === "0" || eq[I_bTYPE] === "0" || eq[I_bTYPE] === ck_type) &&
				(ck_dec1 === eq[I_bDEC] || ck_dec2 === eq[I_bDEC])&&
				eq[I_bSLOT7] <= lm_slot && +eq[I_bHR1] <= high_hr &&
				ck_rep.indexOf(eq[I_bCRE]) !== -1) {

				switch (eq[I_bDEC]) {
				case "":
					if (ck_trWP) {	//“V˜L•Ší
						if (eq[I_bCLASS] !== "N") continue; //“V˜L•Ší‚Í“V˜LŒn‚Ì‚İ
					} else {
						if (lmck) {
							lmskl = MST_Skill_List[i-1][1][j-1];
							if (ck_minus) {
								if (!(eq[I_bSN1] == lmskl && eq[I_bSP1] >= lm_cuff || eq[I_bSN1] == lmskl && eq[I_bSP1] <= lm_cuff * -1 ||
									eq[I_bSN2] == lmskl && eq[I_bSP2] >= lm_cuff || eq[I_bSN2] == lmskl && eq[I_bSP2] <= lm_cuff * -1 ||
									eq[I_bSN3] == lmskl && eq[I_bSP3] >= lm_cuff || eq[I_bSN3] == lmskl && eq[I_bSP3] <= lm_cuff * -1 ||
									eq[I_bSN4] == lmskl && eq[I_bSP4] >= lm_cuff || eq[I_bSN4] == lmskl && eq[I_bSP4] <= lm_cuff * -1 ||
									eq[I_bSN5] == lmskl && eq[I_bSP5] >= lm_cuff || eq[I_bSN5] == lmskl && eq[I_bSP5] <= lm_cuff * -1)) continue;
							} else {
								if (!(eq[I_bSN1] == lmskl && eq[I_bSP1] >= lm_cuff ||
									eq[I_bSN2] == lmskl && eq[I_bSP2] >= lm_cuff ||
									eq[I_bSN3] == lmskl && eq[I_bSP3] >= lm_cuff ||
									eq[I_bSN4] == lmskl && eq[I_bSP4] >= lm_cuff ||
									eq[I_bSN5] == lmskl && eq[I_bSP5] >= lm_cuff)) continue;
							}
						}
						switch (eq[I_bCLASS]) {
						case "N": //“V˜LŒn
							continue;				//’Êí‚Í“V˜LŒn‚ÍœŠO
							break;
						case "A": //SPìŒn
							if (!ck_sp) continue;	//SP–h‹ï‚¶‚á‚È‚©‚Á‚½‚çœŠO
							input.style.color = "tomato";
							break;
						default:
							if (eq[I_bCLASS] === "L") {
								input.style.color = "orangered";
							} else if (eq[I_bNAME].substring(0,2).match(/^[ƒA-ƒ“]*$/)){
								input.style.color = "blue";
							} else {
								input.style.color = "";
							}
						}
					}
					break;
				case "1": //ƒJƒt
					if (eq[I_bCLASS] === "L" && ck_hiden) continue; //”é“`ƒXƒLƒ‹ƒJƒt‚ªƒZƒbƒg‚³‚ê‚Ä‚¢‚é‚È‚ç”é“`ƒXƒLƒ‹ƒJƒt”ñ•\¦
					if (eq[I_bCLASS] === "P") {
						//’HˆÙƒJƒt‚Í–³ğŒ‚Å‚¾‚·
						input.style.color = "blue";
					} else {
						if (ck_minus) {
							if (!(eq[I_bSP1] >= lm_cuff || eq[I_bSP1] <= lm_cuff * -1 ||
								eq[I_bSP2] >= lm_cuff || eq[I_bSP2] <= lm_cuff * -1 ||
								eq[I_bSP3] >= lm_cuff || eq[I_bSP3] <= lm_cuff * -1 ||
								eq[I_bSP4] >= lm_cuff || eq[I_bSP4] <= lm_cuff * -1 ||
								eq[I_bSP5] >= lm_cuff || eq[I_bSP5] <= lm_cuff * -1)) continue;
						} else {
							if (!(eq[I_bSP1] >= lm_cuff ||
								eq[I_bSP2] >= lm_cuff ||
								eq[I_bSP3] >= lm_cuff ||
								eq[I_bSP4] >= lm_cuff ||
								eq[I_bSP5] >= lm_cuff)) continue;
						}
						if (eq[I_bCLASS] === "L") {
							input.style.color = "orangered";
						} else {
							input.style.color = ""
						}
					}
					break;
				case "2": //“Vˆó
				case "3": //“V••ˆó
					input.style.color = "DarkGreen";
					break;
				}

				input.value = cngDecName(eq[I_bNAME],eq[I_bDEC]);
				input.name = "miniW" + list[k];
				dfL.appendChild(input.cloneNode(false));
				ck = true;
			}
		}
		if (ck) {
			if (bkTitle != MST_Deco_List[i][0]){
				if (MST_Deco_List[i][0] === "’HˆÙƒXƒLƒ‹" || MST_Deco_List[i][0] === "“V••ˆó") {
					df.appendChild(document.createElement("hr"));
				}
				df.appendChild(dt.cloneNode(false));
				df.lastChild.appendChild(document.createTextNode(MST_Deco_List[i][0])),
				df.appendChild(dd.cloneNode(false)),
				bkTitle = MST_Deco_List[i][0];
			}
			df.lastChild.appendChild(dfL);
		}
	}
}

this.sub_WinBody.appendChild(df);
this.sub_WinRemove_B_Style.visibility = this.sub_WinClear_B_Style.visibility = "visible";
this.sub_Win_id = buttonid;
switch (slot_name) {
case "b_cuff":
case "b_buki":
	this.sub_Win_Style.top = "115px";
	break;
case "b_head":
	this.sub_Win_Style.top = "135px";
	break;
case "b_body":
	this.sub_Win_Style.top = "155px";
	break;
case "b_arm":
	this.sub_Win_Style.top = "175px";
	break;
case "b_wst":
	this.sub_Win_Style.top = "195px";
	break;
case "b_leg":
	this.sub_Win_Style.top = "215px";
	break;
}
this.sub_Win_Style.right = "auto",this.sub_Win_Style.left = (13 + (slot_no-1)*3 + (slot_name !== "b_cuff" ? 0 : 5)) + "em",this.sub_Win_Style.display = "block";
//ƒXƒNƒ[ƒ‹ˆÊ’uÄŒ»
this.sub_WinBody.scrollTop = this.sub_Win_scroll[0] === this.sub_Win_id ? this.sub_Win_scroll[1] : 0;
}
//------------------------------------ƒƒCƒ“‚ÉƒZƒbƒg----------
,setInput : function (eqid,eqname){
this[this.sub_Win_id].value = eqname;
this[this.sub_Win_id+"_data"] = eqid;

if (this.sub_Win_id === "c_series") {
	this.c_series_data = eqid;
	this.search();
} else if (this.sub_Win_id.lastIndexOf("S1") !== -1 || this.sub_Win_id.lastIndexOf("S2") !== -1 || this.sub_Win_id.lastIndexOf("S3") !== -1 ||
			this.sub_Win_id.lastIndexOf("T1") !== -1 || this.sub_Win_id.lastIndexOf("T2") !== -1 || this.sub_Win_id.lastIndexOf("T3") !== -1) {
	//—š—ğ’Ç‰Á
	if (MST_Deco_List[0][1].join(",").indexOf(eqid) === -1) MST_Deco_List[0][1][MST_Deco_List[0][1].length] = eqid;
	this.dispData(eqid,"deco",7);
	this.cngSlot(eqid,this.sub_Win_id);
	this.calc();
}

}
//------------------------------------‘•ü•iæ‚èŠO‚µ----------
,removeDec : function (){
if (this.sub_Win_id.lastIndexOf("S1") !== -1 || this.sub_Win_id.lastIndexOf("S2") !== -1 || this.sub_Win_id.lastIndexOf("S3") !== -1 ||
	this.sub_Win_id.lastIndexOf("T1") !== -1 || this.sub_Win_id.lastIndexOf("T2") !== -1 || this.sub_Win_id.lastIndexOf("T3") !== -1) {
	this.cngSlot("O",this.sub_Win_id);
	this.calc();
} else {
	this[this.sub_Win_id].value = "-";
	this[this.sub_Win_id+"_data"] = "";
}
}
//------------------------------------‘•ü•i‘Sæ‚èŠO‚µ----------
,removeAllDec : function (){
var s1 = this.sub_Win_id.substring(0,this.sub_Win_id.length-1) + "1",
	s2 = this.sub_Win_id.substring(0,this.sub_Win_id.length-1) + "2",
	s3 = this.sub_Win_id.substring(0,this.sub_Win_id.length-1) + "3";

if (this[s1].value !== "-" ) this.cngSlot("O",s1);
if (this[s2].value !== "-" ) this.cngSlot("O",s2);
if (this[s3].value !== "-" ) this.cngSlot("O",s3);
this.calc();
}
//------------------------------------q‰æ–ÊƒNƒ[ƒY----------
,closeSubWin : function (){
if (this.sub_Win_Style.display === "none") return;
//ƒXƒNƒ[ƒ‹ˆÊ’u•Û‘¶
this.sub_Win_scroll = [this.sub_Win_id,this.sub_WinBody.scrollTop];
this.sub_Win_Style.display = "none";
if (CK_IE6) this.c_rare.style.visibility = this.c_slot.style.visibility = this.c_hr.style.visibility = this.s_head.style.visibility = this.s_body.style.visibility = this.s_arm.style.visibility = this.s_wst.style.visibility = this.s_leg.style.visibility = this.c_cuff_lm.style.visibility = this.c_mesi.style.visibility = this.c_sr.style.visibility = this.c_tane.style.visibility = this.c_drink.style.visibility = this.c_fueDEF.style.visibility = this.c_fueTAI.style.visibility = "visible";
}
//------------------------------------–h‹ïŒŸõ----------
,search : function (){
// İ’è
var ck_disp = [,,,,,];
if (this.s_headCK.checked) this.s_head.length = 0,ck_disp[0] = true;
if (this.s_bodyCK.checked) this.s_body.length = 0,ck_disp[1] = true;
if (this.s_armCK.checked)  this.s_arm.length = 0,ck_disp[2] = true;
if (this.s_wstCK.checked)  this.s_wst.length = 0,ck_disp[3] = true;
if (this.s_legCK.checked)  this.s_leg.length = 0,ck_disp[4] = true;
if (this.s_decoCK.checked) this.s_deco.length = 0,this.s_cuff.length = 0,ck_disp[5] = true;

// ğŒæ“¾
var ck_s1 = this.c_skill1_data+"",ck_s2 = this.c_skill2_data+"",ck_s3 = this.c_skill3_data+"",ck_teni = this.c_teni.value,ck_sex = this.c_sex.value,ck_type = this.c_type.value,
	ck_rui = this.c_rui.value,lm_slot = this.c_slot.value,ck_rep = setRep(this),lm_rare = +this.c_rare.value,low_hr = 0,high_hr = +this.c_hr.value,ck_gr = lm_rare === 99 ? "9" : "",
	ck_series = this.setSeries(this.c_series_data,this.c_series.value),
	s_list = [ck_s1,ck_s2,ck_s3],ck_minus = this.c_minus.checked ? -100 : 0,
	ck_andor = this.c_andor.value === "or" || (ck_s1 === "" && ck_s2 === "" && ck_s3 === "") ? 1 : 3 - (ck_s1 === "") - (ck_s2 === "") - (ck_s3 === ""),
	t_ck = MST_Skill[ck_s1][0]+"."+MST_Skill[ck_s2][0]+"."+MST_Skill[ck_s3][0];
if (ck_rui === "-") {
	var f_rui = function(){return true};
} else if (ck_rui === "") {
	var f_rui = function(t){return t === ""};
} else if (ck_rui !== "-") {
	var f_rui = function(t){return ck_rui.indexOf(t) !== -1 && t};
}
var list = [],upgList = [],df = document.createDocumentFragment(),dfC = document.createDocumentFragment(),o = document.createElement("option");
if (ck_series) { //ƒVƒŠ[ƒY•Ê
	if (ck_series.low_hr) low_hr = ck_series.low_hr; //‰ºŒÀ
	if (ck_series.high_hr && high_hr > 2001) high_hr = ck_series.high_hr; //ãŒÀ

	var f_series = function(){return true},t = "";
	for (var i = 0,m = ck_series.F1.length,_f1 = []; i < m; i++) { //‘O•ûˆê’v
		_f1[i] = "t.indexOf(\"" + ck_series.F1[i] + "\") === 0"
	}
	for (var i = 0,m = ck_series.F2.length,_f2 = []; i < m; i++) { //‘O•ûˆê’v AND ˆê•”ˆê’v
		_f2[i] = "t.indexOf(\"" + ck_series.F2[i] + "\") !== -1"
	}
	for (var i = 0,m = ck_series.R.length,_r = []; i < m; i++) { //•sˆê’v
		_r[i] = "t.indexOf(\"" + ck_series.R[i] + "\") === -1"
	}
	if (ck_series.F1.length > 0) {
		if (ck_series.F2.length > 0) {
			t = "((" + _f1.join(" || ") + ") && (" + _f2.join(" || ") + "))";
		} else {
			t = "(" + _f1.join(" || ") + ")";
		}
	}
	if (ck_series.S) t += (t ? " || (" : "(") + "t.indexOf(\"" + ck_series.S + "\") !== -1)";
	if (ck_series.R.length > 0) {
		if (t) {
			 t = "(" + t + " && ("  + _r.join(" && ") + "))";
		} else {
			 t = "(" + t + _r.join(" && ") + ")";
		}
	}
	if (t) eval("f_series = function(t){return " + t + ";}");
}
for (var i = 0; i < 6; i++) {
	if (!ck_disp[i]) continue;
	
	list.length = 0,upgList.length = 0;
	var eqlist = MST_Equip[BUINAME[i]];
	if (ck_series) { //ƒVƒŠ[ƒY•Ê
		for (var eqid in eqlist) {
			var eq = eqlist[eqid];
			//if (typeof eq === "string") eq = MST_Equip[BUINAME[i]][eqid] = MST_Equip[BUINAME[i]][eqid].split(",");
			if ((f_series(eq[I_bNAME])) &&
			    (ck_series.C === "9" || ck_series.C.indexOf(eq[I_bCRE]) !== -1) && 
			    (ck_sex === "0" || eq[I_bSEX] === "0" || ck_sex === eq[I_bSEX]) &&
			    (ck_type === "3" || eq[I_bTYPE] === "0" || ck_type === eq[I_bTYPE]) && 
			    (ck_rep.indexOf(eq[I_bCRE]) !== -1) && 
			    (f_rui(eq[I_bCLASS])) && 
			    (+eq[I_bRARE] <= lm_rare) && 
			    (eq[I_bGR] <= ck_gr) && 
			    (+eq[I_bHR1]  <= high_hr && +eq[I_bHR1] >= low_hr)) {
				//list[list.length] = [eq[I_bNAME],[eq[I_bSLOT1],eq[I_bSLOT2],eq[I_bSLOT3],eq[I_bSLOT4],eq[I_bSLOT5],eq[I_bSLOT6],eq[I_bSLOT7]].sort()[6],[+eq[I_bDEF1],_+eq[I_bDEF2],+eq[I_bDEF3],+eq[I_bDEF4],+eq[I_bDEF5],+eq[I_bDEF6],+eq[I_bDEF7]].sort()[6],eqid];
				list[list.length] = [eq[I_bUPGCNT],eq[I_bNAME],eq[I_bSLOT7],eqid];
			}
		}
		if (i !== 5) {
			list.sort(function (a, b) {
							return +a[0] < +b[0] ? 1 : -1;
						});
			for (var j = 0,n = list.length; j < n; j++) o.setAttribute("value", list[j][3]),df.appendChild(o.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(list[j][1]+" ["+list[j][2]+"]"));
			this["s_"+BUINAME[i]].appendChild(df);
			this["s_"+BUINAME[i]+"ZK"].value = "";
		} else {
			list.sort(function (a, b) {
							return a[1] > b[1] ? 1 : -1;
						});
			for (var j = 0,n = list.length; j < n; j++) {
				var w = list[j][1].lastIndexOf("ƒJƒt") !== -1 ? dfC : df;
				o.setAttribute("value",list[j][3]),w.appendChild(o.cloneNode(false)),w.lastChild.appendChild(document.createTextNode(list[j][0]+" "+list[j][1]+" ["+list[j][2]+"]"));
			}
			this.s_deco.appendChild(df);
			this.s_cuff.appendChild(dfC);
		}
		if (i === 5) break;
	} else { //ƒXƒLƒ‹•Ê
		for (var eqid in eqlist) {
			var eq = eqlist[eqid];
			//if (typeof eq === "string") eq = MST_Equip[BUINAME[i]][eqid] = MST_Equip[BUINAME[i]][eqid].split(",");
			if (
				(+(ck_s1 + ck_s2 + ck_s3 + eq[I_bSN1] === "" && eq[I_bCLASS] !== "A") + /* ƒXƒLƒ‹‚È‚µ‚ğŒŸõ‚·‚é‚Ì‚É‰ñ”ğ*/
				  (eq[I_bSN1] && (eq[I_bSN1] === ck_s1 || eq[I_bSN1] === ck_s2 || eq[I_bSN1] === ck_s3) && eq[I_bSP1] > ck_minus) + 
				  (eq[I_bSN2] && (eq[I_bSN2] === ck_s1 || eq[I_bSN2] === ck_s2 || eq[I_bSN2] === ck_s3) && eq[I_bSP2] > ck_minus) + 
				  (eq[I_bSN3] && (eq[I_bSN3] === ck_s1 || eq[I_bSN3] === ck_s2 || eq[I_bSN3] === ck_s3) && eq[I_bSP3] > ck_minus) + 
				  (eq[I_bSN4] && (eq[I_bSN4] === ck_s1 || eq[I_bSN4] === ck_s2 || eq[I_bSN4] === ck_s3) && eq[I_bSP4] > ck_minus) + 
				  (eq[I_bSN5] && (eq[I_bSN5] === ck_s1 || eq[I_bSN5] === ck_s2 || eq[I_bSN5] === ck_s3) && eq[I_bSP5] > ck_minus) >= ck_andor
				  || ck_teni !== "" && ck_s1 + ck_s2 + ck_s3 === ""
				  ) && 
			    (ck_sex === "0" || eq[I_bSEX] === "0" || ck_sex === eq[I_bSEX]) &&
			    (ck_type === "3" || eq[I_bTYPE] === "0" || ck_type === eq[I_bTYPE]) &&
			    (eq[I_bDEC] === "" || eq[I_bDEC] === "1") &&
			    (ck_rep.indexOf(eq[I_bCRE]) !== -1) && 
			    (f_rui(eq[I_bCLASS])) && 
			    (+eq[I_bRARE] <= lm_rare && eq[I_bGR] <= ck_gr) && 
			    (eq[I_bCLASS] !== ck_gr) && 
			    (+eq[I_bHR1]  <= high_hr) &&
			    (eq[I_bSLOT7]  >= lm_slot) &&
			    (ck_teni === "" || eq[I_bTeni] === ck_teni)
			   ) {
				for (var j = 0,w = []; j < 3; j++) {
					if (s_list[j] !== "") {
						w[w.length] = eq[I_bSN1] === s_list[j] ? eq[I_bSP1] : 
										eq[I_bSN2] === s_list[j] ? eq[I_bSP2] : 
										eq[I_bSN3] === s_list[j] ? eq[I_bSP3] : 
										eq[I_bSN4] === s_list[j] ? eq[I_bSP4] : 
										eq[I_bSN5] === s_list[j] ? eq[I_bSP5] : "0";
					}
				}
				list[list.length] = [w.join("."),eq[I_bNAME],eq[I_bSLOT7],eqid];
				upgList[upgList.length] = eq[I_bUPGBACK];
			}
		}
		list.sort(function (a, b) {
					if (a[0] === b[0]) {
						return a[2] < b[2] ? 1 : -1;
					} else {
						return +a[0] < +b[0] ? 1 : -1;
					}});
		if (i === 5) { //‘•ü•i
			for (var j = 0,n = list.length; j < n; j++) {
				var w = list[j][1].lastIndexOf("ƒJƒt") !== -1 ? dfC : df;
				o.setAttribute("value",list[j][3]),w.appendChild(o.cloneNode(false)),w.lastChild.appendChild(document.createTextNode(list[j][0]+" "+list[j][1]+" ["+list[j][2]+"]"));
			}
			this.s_deco.appendChild(df);
			this.s_cuff.appendChild(dfC);
			//this["s_decoZK"].value = t_ck;
			//this["s_cuffZK"].value = t_ck;
		} else {
			var upg = this.c_upg.checked ? upgList.join(",") : "";
			for (var j = 0,n = list.length; j < n; j++) {
				if (upg.indexOf(list[j][3]) === -1) o.setAttribute("value",list[j][3]),df.appendChild(o.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(list[j][0]+" "+list[j][1]+" ["+list[j][2]+"]"));
			}
			this["s_"+BUINAME[i]].appendChild(df);
		}
		this["s_"+BUINAME[i]+"ZK"].value = t_ck;
	}
}
}
//------------------------------------î•ñ•\¦----------
,dispData : function (eqid,bui,lv,dec){
if (eqid.length !== 4) return;
if (bui === "cuff") bui = "deco";
var eq = MST_Equip[bui][eqid];
//ˆÈ‰ºƒIƒ~ƒbƒg@LV•Ï‚¦‚½‚É‘fŞ‚ª•ÏX‚³‚ê‚È‚¢BB
//if (this.d_mei.innerHTML === eq[I_bNAME]) return;

//if (typeof eq === "string") eq = MST_Equip[bui][eqid] = MST_Equip[bui][eqid].split(",");
//Ú×
this.d_mei.firstChild.nodeValue = eq[I_bNAME];
this.d_doc.firstChild.nodeValue = eq[I_bDOC] || "";
if (eq[I_bTeni]) this.d_doc.firstChild.nodeValue += "[" + TENINAME[eq[I_bTeni]] + "]";
this.d_Fp.firstChild.nodeValue = eq[I_bF];
this.d_Wp.firstChild.nodeValue = eq[I_bW];
this.d_Tp.firstChild.nodeValue = eq[I_bT];
this.d_Ip.firstChild.nodeValue = eq[I_bI];
this.d_Dp.firstChild.nodeValue = eq[I_bD];
switch (eq[I_bDEC]) {
//case "1": //ƒJƒt
//	this.d_sn1.firstChild.nodeValue = eq[I_bCLASS] === "P" ? TENINAME[eq[I_bSN1]] : MST_Skill[eq[I_bSN1]][0];
//	break;
case "2": //“Vˆó
	this.d_sn1.firstChild.nodeValue = TENKOKUNAME[eq[I_bSN1]];
	break;
case "3": //“V••ˆó
	this.d_sn1.firstChild.nodeValue = TENFUNAME[eq[I_bSN1]] || "";
	break;
default:
	this.d_sn1.firstChild.nodeValue = MST_Skill[eq[I_bSN1]][0];
	break;
}
this.d_sp1.firstChild.nodeValue = eq[I_bSP1];
this.d_sn2.firstChild.nodeValue = MST_Skill[eq[I_bSN2]][0];
this.d_sp2.firstChild.nodeValue = eq[I_bSP2];
this.d_sn3.firstChild.nodeValue = MST_Skill[eq[I_bSN3]][0];
this.d_sp3.firstChild.nodeValue = eq[I_bSP3];
this.d_sn4.firstChild.nodeValue = MST_Skill[eq[I_bSN4]][0];
this.d_sp4.firstChild.nodeValue = eq[I_bSP4];
this.d_sn5.firstChild.nodeValue = MST_Skill[eq[I_bSN5]][0];
this.d_sp5.firstChild.nodeValue = eq[I_bSP5];
this.d_type.firstChild.nodeValue = TYPENAME[eq[I_bTYPE]];
this.d_sex.firstChild.nodeValue = SEXNAME[eq[I_bSEX]];
this.d_rep1.firstChild.nodeValue = MAKENAME[eq[I_bCRE].charAt(0)];
this.d_rep2.firstChild.nodeValue = MAKENAME[eq[I_bCRE].replace("#","").substring(1)];
this.d_rui.firstChild.nodeValue = CLASSTYPE[eq[I_bCLASS]] + (eq[I_bGR] ? "[GR"+eq[I_bGR]+"]":"");

//‘fŞ
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
	return t.join("<br>");
};
var zeny_sum = 0, gzeny_sum = 0, sozai_pool = [], upg_txt = "", flg_dec = 0,reci_data = getSozai(eq), zeny_data = getZeny(eq), def_data = getDef(eq), slot_data = getSlot(eq);
for (var i = 1,j = 0,m = eq[I_bLVMAX]; j < m; i++,j++) {
	if (+reci_data[I_iHR1+j] >= 10000) {
		this.d_lv[i].firstChild.nodeValue = "–¢";
	} else if (+reci_data[I_iHR1+j] >= 3000) {
		this.d_lv[i].firstChild.nodeValue = "Lv"+i+"FGSR" + (reci_data[I_iHR1+j]-3000);
	} else if (+reci_data[I_iHR1+j] >= 2000) {
		this.d_lv[i].firstChild.nodeValue = "Lv"+i+"FGR" + (reci_data[I_iHR1+j]-2000);
	} else if (+reci_data[I_iHR1+j] >= 1000) {
		this.d_lv[i].firstChild.nodeValue = "Lv"+i+"FSR" + (reci_data[I_iHR1+j]-1000);
	} else {
		this.d_lv[i].firstChild.nodeValue = "Lv"+i+"FHR" + reci_data[I_iHR1+j];
	}
	this.d_lv[i].style.backgroundColor = +reci_data[I_iHR1+j] <= +this.c_hr.value ? "white" : "gray";
	this.d_def[i].firstChild.nodeValue = def_data[j] + "F" + slot_data[j];
	this.d_zeny[i].firstChild.nodeValue = zeny_data[j] + (+reci_data[I_iHR1+j] >= 2000 ? "Gz" : "z");
	//¸˜B	
	if (reci_data[I_iSozai1+j].indexOf("@") !== -1) {
		var wkmain = reci_data[I_iSozai1+j].split("@");
		var wklist = wkmain[1].split(" ");
		for (var k = 0,n = wklist.length,wk = []; k < n; k++) {
			wk[k] = "<span class=ldec onclick=\"SkillForm.dispData('" + eqid + "','" + bui + "'," + lv + "," + k + ")\">"+ MST_Equip[BUINAME[wklist[k].charAt(0)]][wklist[k].substring(1)][I_bNAME] + "</span>Lv7‚æ‚è¸˜B";
		}
		this.d_sozai[i].innerHTML = (wkmain[0] ? sozaiHtml(wkmain[0])+"<br>or<br>" : "") + wk.join("<br>");
		dec = dec || 0; //G,GF‚Å•¡”‚ ‚é‚Æ‚«‚Éw’è‚³‚ê‚é
		upg_txt = "¨" + MST_Equip[BUINAME[wklist[dec].charAt(0)]][wklist[dec].substring(1)][I_bNAME] + "Lv7‚æ‚è¸˜B";
		flg_dec = true;
	} else {
		this.d_sozai[i].innerHTML = sozaiHtml(reci_data[I_iSozai1+j]);
	}
}
//‚ ‚Ü‚è‚ğƒNƒŠƒA
for (; i <= 7; i++) {
	this.d_lv[i].style.backgroundColor = "gray";
	this.d_lv[i].firstChild.nodeValue = 
	this.d_def[i].firstChild.nodeValue = 
	this.d_zeny[i].firstChild.nodeValue = 
	this.d_sozai[i].innerHTML = "";
}
//‰æ‘œ
if (eq[I_bIMG] && this.d_MF.style.display !== "none") {
	var ss = MST_Equip.jpg[parseInt(eq[I_bIMG],16)].split(" ");
	if (ss[1] > "0") {
		this.d_MF.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss[0]+"MF"+ss[1]+"_s.jpg";
		this.d_MB.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss[0]+"MB"+ss[1]+"_s.jpg";
		this.d_FF.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss[0]+"FF"+ss[1]+"_s.jpg";
		this.d_FB.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss[0]+"FB"+ss[1]+"_s.jpg";
	} else {
		this.d_MF.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss+"MF"+"_s.jpg";
		this.d_MB.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss+"MB"+"_s.jpg";
		this.d_FF.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss+"FF"+"_s.jpg";
		this.d_FB.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss+"FB"+"_s.jpg";
	}
	this.d_MF.style.visibility = this.d_MB.style.visibility = this.d_FF.style.visibility = this.d_FB.style.visibility = "visible"
} else {
//	this.d_MF.src = this.d_MB.src = this.d_FF.src = this.d_FB.src = "../img/w.jpg"
	this.d_MF.style.visibility = this.d_MB.style.visibility = this.d_FF.style.visibility = this.d_FB.style.visibility = "hidden"
}
//ì‰»‚µ‚½‘•”õ‚Ì‘fŞ‚ğƒZƒbƒg
if (flg_dec) {
	bui = BUINAME[wklist[dec].charAt(0)];
	eq = MST_Equip[bui][wklist[dec].substring(1)];
	reci_data = getSozai(eq), zeny_data = getZeny(eq);
}

//‹­‰»Œ³‚ª‚ ‚é‚Ì‚É¶Y‘fŞ‚à‚ ‚é
if (eq[I_bUPGBACK] && eq[I_bRECIPE1]){
	//¸˜BˆÈŠO‚È‚ç•\¦
	if (!flg_dec) this.d_sozai[1].innerHTML = sozaiHtml(MST_Equip.sozai[parseInt(eq[I_bLVUPPTN],16)].split(",")[0]) + "<br>---¶Y---<br>" + this.d_sozai[1].innerHTML;
	reci_data[I_iSozai1] = eq[I_bRECIPE1];
}

//‘fŞ‡Œv
for (var i = 1,j = 0,m = eq[I_bLVMAX]; j < m; i++,j++) {
	if (i <= lv && reci_data[I_iSozai1+j]) {
		if (+reci_data[I_iHR1+j] >= 2000) {
			gzeny_sum += +zeny_data[j];
		} else {
			zeny_sum += +zeny_data[j];
		}
		sozai_pool[sozai_pool.length] = reci_data[I_iSozai1+j];
	}
}

//‹­‰»Œ³‘–¸
if (eq[I_bUPGBACK] && !eq[I_bRECIPE1]) {
	var hasei_lv = eq[I_bUPGBACK].charAt(4), hasei_eq = MST_Equip[bui][eq[I_bUPGBACK].substring(0,4)], reci_data = getSozai(hasei_eq), zeny_data = getZeny(hasei_eq);
	upg_txt = hasei_eq[I_bNAME] + " LV" + hasei_lv + upg_txt;
	if (!flg_dec) this.d_sozai[1].innerHTML = upg_txt + "<br>" + this.d_sozai[1].innerHTML;
	do {
		for (var i = 1,j = 0; i <= hasei_lv; i++,j++){
			if (+reci_data[I_iHR1+j] >= 2000) {
				gzeny_sum += +zeny_data[j];
			} else {
				zeny_sum += +zeny_data[j];
			}
			sozai_pool[sozai_pool.length] = reci_data[I_iSozai1+j];
		}
		if (hasei_eq[I_bUPGBACK] && !hasei_eq[I_bRECIPE1]) {
			hasei_lv = hasei_eq[I_bUPGBACK].charAt(4), hasei_eq = MST_Equip[bui][hasei_eq[I_bUPGBACK].substring(0,4)], reci_data = getSozai(hasei_eq), zeny_data = getZeny(hasei_eq);
			upg_txt = hasei_eq[I_bNAME] + "LV" + hasei_lv + "¨" + upg_txt
		} else {
			hasei_lv = 0;
		}
	} while (hasei_lv);
	upg_txt += "¨<br>";
}
//ì‰»‚µ‚½‘•”õ‚ÌƒAƒbƒvƒOƒŒ[ƒhƒeƒLƒXƒg‚Ì’²®
if (flg_dec) {
	if (upg_txt.charAt(0) === "¨") upg_txt = upg_txt.substring(1) + "<br>";
	upg_txt = upg_txt.replace("¨<br>","<br>");
}
this.d_zenyAll.innerHTML = (zeny_sum || !gzeny_sum ? zeny_sum + "z<br>" : "") + (gzeny_sum ? gzeny_sum + "Gz" : "");

//‘fŞ‡Œv
sozai_pool = sozai_pool.join(" ").replace(/R/g,"").split(" ").sort();
var sozai_sum = [], toku = "";
for (var i = 0,m = sozai_pool.length; i < m; i++) {
	var w = sozai_pool[i];
	for (var j = 0,n = sozai_sum.length; j < n; j++) {
		if (sozai_sum[j][0] === w.substring(0,4)){
			sozai_sum[j][1] += +w.substring(4);
			break;
		}
	}
	if (j >= n) {
		if (!isNaN(w.charAt(w.length-1)) || !isNaN(w.charAt(w.length-2))) {
			sozai_sum[sozai_sum.length] = [w.substring(0,4), +w.substring(4)];
		} else {
			if (w && w !== "‚È‚µ" && w !== "or") toku = w.replace("<br>","") + "<br>";
		}
	}
}
for (var i = 0,m = sozai_sum.length; i < m; sozai_sum[i] = sozai_sum[i++].join(""));
sozai_sum = sozai_sum.sort(function (a, b){return MST_Item[b.substring(0,4)][5]+b.substring(0,4) < MST_Item[a.substring(0,4)][5]+a.substring(0,4) ? 1 : -1});
this.d_sozaiAll.innerHTML = upg_txt + toku + "<span>" + sozaiHtml(sozai_sum.join(" ")).replace(/<br>/g,"</span>,<span>") + "</span>";
//ƒAƒNƒ‰ŒÀ’èˆ—
if (!eq[I_bNAME].indexOf("ƒAƒNƒ‰") && CLASSTYPE.GClass.indexOf(eq[I_bCLASS]) === -1 && eq[I_bNAME].indexOf("ƒoƒŒƒbƒ^") === -1) this.d_sozaiAll.innerHTML = "¦F‚É‚æ‚è‘fŞ‚ªˆÙ‚È‚é¦<br>" + this.d_sozaiAll.innerHTML
}
//------------------------------------–h‹ïƒZƒbƒg----------
,setData : function (eqid,bui) {
if (!eqid) return;
switch (bui) {
case "cuff": //ƒJƒt
	//—š—ğ’Ç‰Á
	if (MST_Deco_List[0][1].join(",").indexOf(eqid) === -1) MST_Deco_List[0][1][MST_Deco_List[0][1].length] = eqid;
	var eq = MST_Equip.deco[eqid];
	for (var j = 1; j < 4 ; j++) {
		if ( this["b_cuffS"+j+"_data"] === "O" &&
			(eq[I_bSLOT7] === "2" && j === 1 && this["b_cuffS2_data"].length !== 4 || eq[I_bSLOT7] === "1")) {
			this.cngSlot(eqid,"b_cuffS"+j);
			this.calc();
			return;
		}
	}
	//‹­§ã‘‚«
	this.cngSlot(eqid,"b_cuffS1");
	this.calc();
	break;
case "deco": //‘•ü•i
	//—š—ğ’Ç‰Á
	if (MST_Deco_List[0][1].join(",").indexOf(eqid) === -1) MST_Deco_List[0][1][MST_Deco_List[0][1].length] = eqid;
	var eq = MST_Equip.deco[eqid];
	for (var i = 0; i < 5; i++) { //•”ˆÊ•Ê
		for (var j = 1; j < 4 ; j++) {
			if ( this["b_"+BUINAME[i]+"S"+j+"_data"] === "O" &&
				(eq[I_bCLASS] !== "A" || eq[I_bCLASS] === "A" && MST_Equip[BUINAME[i]][this["b_"+BUINAME[i]].value.split(",")[0]][I_bCLASS] === "A") &&
				(eq[I_bSLOT7] === "3" && j === 1 && this["b_"+BUINAME[i]+"S2_data"].length !== 4 && this["b_"+BUINAME[i]+"S3_data"].length !== 4 ||
				 eq[I_bSLOT7] === "2" && j <= 2 && this["b_"+BUINAME[i]+"S"+(j+1)+"_data"].length !== 4 ||
				 eq[I_bSLOT7] === "1")) {
				this.cngSlot(eqid,"b_"+BUINAME[i]+"S"+j);
				this.calc();
				return;
			}
		}
	}
	break;
default: //–h‹ï
	//•¡”ƒZƒbƒg‘Î‰‚ÅƒIƒ~ƒbƒg
	////Šù‚É‚ ‚é‚©ƒ`ƒFƒbƒN
	//for (var i = 0,m = this["b_"+bui].length; i < m; i++) {
	//	if (this["b_"+bui][i].value.split(",")[0] === eqid) {
	//		this["b_"+bui].selectedIndex = i;
	//		this.cngData(bui);
	//		this.calc();
	//		return;
	//	}
	//}
	var eq = MST_Equip[bui][eqid],reci_data = getSozai(eq), slot_data = getSlot(eq);
	//ƒf[ƒ^’Ç‰Á(–¼‘O:eqid,LV,ƒXƒ1,ƒXƒ2,ƒXƒ3,“Vˆó1,“Vˆó2,“Vˆó3)
	//LV‚ğ§ŒÀ
	for (var i = 0; i < eq[I_bLVMAX] && +reci_data[I_iHR1+i] <= +this.c_hr.value; i++);
	var lv = i--,o = document.createElement("option");
	o.setAttribute("value", eqid+"," +lv+"," + (slot_data[i] > 0 ? "O,":",") + (slot_data[i] > 1 ? "O,":",") + (slot_data[i] > 2 ? "O":"")
							+ (eq[I_bCLASS] === "N" ? ","+(eq[I_bTrSLOT] > 0 ? "O,":",") + (eq[I_bTrSLOT] > 1 ? "O,":",") + (eq[I_bTrSLOT] > 2 ? "O":"") :"")
							);
	o.setAttribute("selected","selected");
	o.appendChild(document.createTextNode(eq[I_bNAME]));
	this["b_"+bui].appendChild(o);
	this.cngData(bui);
	this.calc();
}
}
//------------------------------------–h‹ïíœ----------
,delData : function (bui) {
//ˆêŒ‚¾‚¯‚©‰¼‘•”õ‚È‚çˆ—‚µ‚È‚¢
if (this["b_"+bui].length === 1 ||
	this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "‰¼‘•”õ" ||
	this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "ƒZƒbƒg") return;

//síœ
var i = this["b_"+bui].selectedIndex;
this["b_"+bui].options[i] = null;
this["b_"+bui].selectedIndex = i === 0 ? 0 : --i;
this.cngData(bui);

//ˆêŒ‚¾‚¯‚©‰¼‘•”õ‚È‚çíœ‚ğ–³Œø‰»
if (this["b_"+bui].length === 1 || this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "‰¼‘•”õ") this["b_"+bui+"Del"].disabled = true;
}
//------------------------------------ƒf[ƒ^“ü‚ê‘Ö‚¦----------
,cngData : function (bui) {
var w = this["b_"+bui].value.split(","),slot_suu = 0;
switch (bui) {
case "buki":
	slot_suu = 3;
	break;
case "cuff":
	slot_suu = 2;
	break;
default:
	var eq = MST_Equip[bui][w[I_sID]], reci_data = getSozai(eq), def_data = getDef(eq), slot_suu = getSlot(eq)[w[I_sLV]-1];
	//if (typeof eq === "string") eq = MST_Equip[bui][w[0]] = MST_Equip[bui][w[0]].split(",");
	//LV‚ğ§ŒÀ
	for (var i = 0; i < eq[I_bLVMAX] && +reci_data[I_iHR1+i] <= +this.c_hr.value; i++);
	var lv = i--;
	if (this["b_"+bui+"Lv"].length !== lv) {
		this["b_"+bui+"Lv"].length = 0;
		var df = document.createDocumentFragment(),o = document.createElement("option");
		for (var i = 1; i <= lv; i++) o.setAttribute("value",i),df.appendChild(o.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(i));
		this["b_"+bui+"Lv"].appendChild(df);
		if (lv < w[I_sLV]) w[I_sLV] = lv;
		if (CK_IE6) this["b_"+bui+"Lv"][w[I_sLV]-1].setAttribute("selected","selected");
	}
	this["b_"+bui+"Lv"].selectedIndex = w[I_sLV]-1;

	//Ú×
	this["b_"+bui+"GR"] = eq[I_bGR] ? eq[I_bGR] : 1;
	this["b_"+bui+"Def"].firstChild.nodeValue = def_data[w[1]-1];
	this["b_"+bui+"Def"].value = def_data[w[1]-1];
	this["b_"+bui+"Fp"].firstChild.nodeValue = eq[I_bF];
	this["b_"+bui+"Wp"].firstChild.nodeValue = eq[I_bW];
	this["b_"+bui+"Tp"].firstChild.nodeValue = eq[I_bT];
	this["b_"+bui+"Ip"].firstChild.nodeValue = eq[I_bI];
	this["b_"+bui+"Dp"].firstChild.nodeValue = eq[I_bD];
	this["b_"+bui+"Sn1"].firstChild.nodeValue = MST_Skill[eq[I_bSN1]][0];
	this["b_"+bui+"Sp1"].firstChild.nodeValue = eq[I_bSP1];
	this["b_"+bui+"Sn2"].firstChild.nodeValue = MST_Skill[eq[I_bSN2]][0];
	this["b_"+bui+"Sp2"].firstChild.nodeValue = eq[I_bSP2];
	this["b_"+bui+"Sn3"].firstChild.nodeValue = MST_Skill[eq[I_bSN3]][0];
	this["b_"+bui+"Sp3"].firstChild.nodeValue = eq[I_bSP3];
	this["b_"+bui+"Sn4"].firstChild.nodeValue = MST_Skill[eq[I_bSN4]][0];
	this["b_"+bui+"Sp4"].firstChild.nodeValue = eq[I_bSP4];
	this["b_"+bui+"Sn5"].firstChild.nodeValue = MST_Skill[eq[I_bSN5]][0];
	this["b_"+bui+"Sp5"].firstChild.nodeValue = eq[I_bSP5];

	//“VˆóƒXƒƒbƒg
	this["b_"+bui+"T1"].style.display = this["b_"+bui+"T2"].style.display = this["b_"+bui+"T3"].style.display = eq[I_bCLASS] === "N" ? "inline" : "none";
	switch (eq[I_bTrSLOT]-0) {
	case 0:
		this["b_"+bui+"T1"].disabled = this["b_"+bui+"T2"].disabled = this["b_"+bui+"T3"].disabled = 1;
	 	this["b_"+bui+"T1"].value = this["b_"+bui+"T2"].value = this["b_"+bui+"T3"].value = "-";
	 	this["b_"+bui+"T1_data"]  = this["b_"+bui+"T2_data"]  = this["b_"+bui+"T3_data"]  = "";
		break;
	case 1:
		this["b_"+bui+"T1"].disabled = 0;
		this["b_"+bui+"T2"].disabled = this["b_"+bui+"T3"].disabled = 1;
	 	this["b_"+bui+"T1"].value = "›";
	 	this["b_"+bui+"T1_data"]  = "O";
		this["b_"+bui+"T2"].value = this["b_"+bui+"T3"].value = "-";
		this["b_"+bui+"T2_data"]  = this["b_"+bui+"T3_data"]  = "";
		break;
	case 2:
		this["b_"+bui+"T1"].disabled = this["b_"+bui+"T2"].disabled = 0;
		this["b_"+bui+"T3"].disabled = 1;
	 	this["b_"+bui+"T1"].value = this["b_"+bui+"T2"].value = "›";
	 	this["b_"+bui+"T1_data"]  = this["b_"+bui+"T2_data"]  = "O";
		this["b_"+bui+"T3"].value = "-";
		this["b_"+bui+"T3_data"]  = "";
		break;
	case 3:
		this["b_"+bui+"T1"].disabled = this["b_"+bui+"T2"].disabled = this["b_"+bui+"T3"].disabled = 0;
	 	this["b_"+bui+"T1"].value = this["b_"+bui+"T2"].value = this["b_"+bui+"T3"].value = "›";
	 	this["b_"+bui+"T1_data"]  = this["b_"+bui+"T2_data"]  = this["b_"+bui+"T3_data"]  = "O";
		break;
	}
	//“Vˆó
	if (eq[I_bCLASS] === "N") for (var i = 1; i <= eq[I_bTrSLOT]; this.cngSlot(w[I_sT1+i-1],"b_"+bui+"T"+i,i++));
}
//ƒXƒƒbƒg
switch (slot_suu) {
case 0:
	this["b_"+bui+"S1"].disabled = this["b_"+bui+"S2"].disabled = this["b_"+bui+"S3"].disabled = 1;
 	this["b_"+bui+"S1"].value = this["b_"+bui+"S2"].value = this["b_"+bui+"S3"].value = "-";
 	this["b_"+bui+"S1_data"]  = this["b_"+bui+"S2_data"]  = this["b_"+bui+"S3_data"]  = "";
	break;
case 1:
	this["b_"+bui+"S1"].disabled = 0;
	this["b_"+bui+"S2"].disabled = this["b_"+bui+"S3"].disabled = 1;
 	this["b_"+bui+"S1"].value = "›";
 	this["b_"+bui+"S1_data"]  = "O";
	this["b_"+bui+"S2"].value = this["b_"+bui+"S3"].value = "-";
	this["b_"+bui+"S2_data"]  = this["b_"+bui+"S3_data"]  = "";
	break;
case 2:
	this["b_"+bui+"S1"].disabled = this["b_"+bui+"S2"].disabled = 0;
	this["b_"+bui+"S3"].disabled = 1;
 	this["b_"+bui+"S1"].value = this["b_"+bui+"S2"].value = "›";
 	this["b_"+bui+"S1_data"]  = this["b_"+bui+"S2_data"]  = "O";
	this["b_"+bui+"S3"].value = "-";
	this["b_"+bui+"S3_data"]  = "";
	break;
case 3:
	this["b_"+bui+"S1"].disabled = this["b_"+bui+"S2"].disabled = this["b_"+bui+"S3"].disabled = 0;
 	this["b_"+bui+"S1"].value = this["b_"+bui+"S2"].value = this["b_"+bui+"S3"].value = "›";
 	this["b_"+bui+"S1_data"]  = this["b_"+bui+"S2_data"]  = this["b_"+bui+"S3_data"]  = "O";
	break;
}
//‘•ü•i
for (var i = 1; i <= slot_suu; this.cngSlot(w[I_sS1+i-1],"b_"+bui+"S"+i,i++));

this["b_"+bui+"Del"].disabled = this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "‰¼‘•”õ" ||
								this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "ƒZƒbƒg";
//–h‹ï‚Ìê‡
if (bui.lastIndexOf("buki") === -1 && bui.lastIndexOf("cuff") === -1) this.dispData(w[0],bui,w[1]);
}
//------------------------------------–h‹ïƒŒƒxƒ‹•ÏX----------
,cngLv : function (bui) {
var tag=this["b_"+bui], w = tag.value.split(",");
w[I_sLV] = this["b_"+bui+"Lv"].value;
tag.options[tag.selectedIndex].value = w.join(",");
}
//------------------------------------ƒXƒƒbƒgó‘Ô•ÏX----------
,cngSlot : function (eqid,buttonid) {
if (eqid === "X") return; //œ‚¾‚Á‚½‚ç‰½‚à‚µ‚È‚¢
//alert(eqid+":"+no+":"+buttonid);
//ƒXƒƒbƒg‚ğ•ÏX
var no = buttonid.charAt(buttonid.length-1),tag = this[buttonid.substring(0,buttonid.length-2)],w = tag.value.split(","),
	eq = MST_Equip.deco[eqid],
	H = (buttonid.charAt(buttonid.length-2) === "S" ? 0 : I_sT1-I_sS1),
	slot1 = buttonid.substring(0,buttonid.length-1)+"1",slot2 = buttonid.substring(0,buttonid.length-1)+"2",slot3 = buttonid.substring(0,buttonid.length-1)+"3";
if (no === "1") {
	switch (eq[I_bSLOT7]) {
	case "":
	case "0":
	case "1":
		if (this[slot2].value === "œ") {
			this[slot2].disabled = 0;
			this[slot2].value = "›";
			w[I_sS2+H] = this[slot2+"_data"] = "O";
			if (this[slot3].value === "œ") {
				this[slot3].disabled = 0;
				this[slot3].value = "›";
				w[I_sS3+H] = this[slot3+"_data"] = "O";
			}
		}
		break;
	case "2":
		if (this[slot2].value === "-") return;
		this[slot2].disabled = 1;
		this[slot2].value = "œ";
		w[I_sS2+H] = this[slot2+"_data"] = "X";
		if (this[slot3].value === "œ") {
			this[slot3].disabled = 0;
			this[slot3].value = "›";
			w[I_sS3+H] = this[slot3+"_data"] = "O";
		}
		break;
	case "3":
		if (this[slot2].value === "-" || this[slot3].value === "-") return;
		this[slot3].disabled = this[slot2].disabled = 1;
		this[slot3].value = this[slot2].value = "œ";
		w[I_sS3+H] = w[I_sS2+H] = this[slot3+"_data"] = this[slot2+"_data"] = "X";
		break;
	}
} else if (no === "2" && this[slot2].value !== "œ") {
	switch (eq[I_bSLOT7]) {
	case "":
	case "0":
	case "1":
		if (this[slot3].value === "œ") {
			this[slot3].disabled = 0;
			this[slot3].value = "›";
			w[I_sS3+H] = this[slot3+"_data"] = "O";
		}
		break;
	case "2":
		if (this[slot3].value === "-") return;
		this[slot3].disabled = 1;
		this[slot3].value = "œ";
		w[I_sS3+H] = this[slot3+"_data"] = "X";
		break;
	}
}
//ƒZƒbƒg
w[I_sS1 + +no -1 + H] = this[buttonid+"_data"] = eqid;
switch (eq[I_bDEC]) {
case "":
	var tohankaku = function (t){
		//”z—ñ‚ğ—pˆÓ‚·‚é
		var hankaku = new Array("¶Ş", "·Ş", "¸Ş", "¹Ş", "ºŞ", "»Ş", "¼Ş", "½Ş", "¾Ş", "¿Ş", "ÀŞ", "ÁŞ", "ÂŞ", "ÃŞ", "ÄŞ", "ÊŞ", "Êß", "ËŞ", "Ëß", "ÌŞ", "Ìß", "ÍŞ", "Íß", "ÎŞ", "Îß", "³Ş", "§", "±", "¨", "²", "©", "³", "ª", "´", "«", "µ", "¶", "·", "¸", "¹", "º", "»", "¼", "½", "¾", "¿", "À", "Á", "¯", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ğ", "Ñ", "Ò", "Ó", "¬", "Ô", "­", "Õ", "®", "Ö", "×", "Ø", "Ù", "Ú", "Û", "Ü", "¦", "İ", "1", "2", "3", "4", "5", "¥", "°", "ß");
		var zenkaku  = new Array("ƒK", "ƒM", "ƒO", "ƒQ", "ƒS", "ƒU", "ƒW", "ƒY", "ƒ[", "ƒ]", "ƒ_", "ƒa", "ƒd", "ƒf", "ƒh", "ƒo", "ƒp", "ƒr", "ƒs", "ƒu", "ƒv", "ƒx", "ƒy", "ƒ{", "ƒ|", "ƒ”", "ƒ@", "ƒA", "ƒB", "ƒC", "ƒD", "ƒE", "ƒF", "ƒG", "ƒH", "ƒI", "ƒJ", "ƒL", "ƒN", "ƒP", "ƒR", "ƒT", "ƒV", "ƒX", "ƒZ", "ƒ\", "ƒ^", "ƒ`", "ƒb", "ƒc", "ƒe", "ƒg", "ƒi", "ƒj", "ƒk", "ƒl", "ƒm", "ƒn", "ƒq", "ƒt", "ƒw", "ƒz", "ƒ}", "ƒ~", "ƒ€", "ƒ", "ƒ‚", "ƒƒ", "ƒ„", "ƒ…", "ƒ†", "ƒ‡", "ƒˆ", "ƒ‰", "ƒŠ", "ƒ‹", "ƒŒ", "ƒ", "ƒ", "ƒ’", "ƒ“", "‚P", "‚Q", "‚R", "‚S", "‚T", "E", "[", "K");
		//•ÏŠ·ŠJn
		for (i=0; i<=88; i++) { //89•¶š‚ ‚é‚Ì‚Å‚»‚Ì•ª‚¾‚¯ŒJ‚è•Ô‚·
			while (t.indexOf(zenkaku[i]) >= 0){ //ŠY“–‚·‚é”¼ŠpƒJƒi‚ª‚È‚­‚È‚é‚Ü‚ÅŒJ‚è•Ô‚·
				t = t.replace(zenkaku[i], hankaku[i]); //”¼ŠpƒJƒi‚É‘Î‰‚·‚é‘SŠpƒJƒi‚É’uŠ·‚·‚é
			}
		}
		return t; //•ÏŠ·‚ªI‚í‚Á‚½‚ç•\¦
	}
	this[buttonid].value = tohankaku(cngDecName(eq[I_bNAME],eq[I_bDEC]));
	break;
case "1": //ƒJƒt
	this[buttonid].value = cngDecName(eq[I_bNAME],eq[I_bDEC]).replace("P","").replace("S","");
	break;
case "2": //“Vˆó
case "3": //“V••ˆó
	this[buttonid].value = cngDecName(eq[I_bNAME],eq[I_bDEC]);
	break;
}
tag.options[tag.selectedIndex].value = w.join(",");
//•ŠíƒJƒt‚Ìê‡ƒZƒbƒg–¼‚ğ•ÏXAŸƒZƒbƒg‚Ìì¬
if (buttonid.lastIndexOf("buki") !== -1 || buttonid.lastIndexOf("cuff") !== -1) {
	if (w[I_sS1].length <= 1 && w[I_sS2].length <= 1 &&w[I_sS3].length <= 1) {
		//ƒf[ƒ^‚È‚µ
		tag.options[tag.selectedIndex].text = "ƒZƒbƒg";
		if (tag.selectedIndex !== tag.length-1) { //ÅIs‚©
			//síœ
			tag.options[tag.selectedIndex].text = "-"; //Á‚·‚½‚ß‚ÉƒZƒbƒgˆÈŠO‚Ì–¼Ì‚É•ÏX
			this.delData(buttonid.substring(2,buttonid.length-2));
		}
	} else {
		//ƒf[ƒ^‚ ‚è
		this[buttonid.substring(0,buttonid.length-2)+"Del"].disabled = false;
		tag.options[tag.selectedIndex].text = (w[I_sS1].length <= 1 ? "" : this[slot1].value.substring(0,2))
											+ (w[I_sS2].length <= 1 ? "" : this[slot2].value.substring(0,2))
											+ (w[I_sS3].length <= 1 ? "" : this[slot3].value.substring(0,2));
		if (tag.selectedIndex === tag.length-1) { //ÅIs‚©
			//V‹Ks’Ç‰Á
			var o = document.createElement("option");
			o.setAttribute("value", buttonid.lastIndexOf("buki") !== -1 ? "0000,1,O,O,O" : "0000,1,O,O,")
			//o.setAttribute("selected","selected");
			o.appendChild(document.createTextNode("ƒZƒbƒg"));
			tag.appendChild(o);
		}
	}
}
}
//------------------------------------”­“®ƒXƒLƒ‹ŒvZ----------
,calc : function () {
//GR‚Ì•Ï“®
for (var i = 0; i < 5 ;i++) {
	if (this["b_"+BUINAME[i]+"GR"] < this.c_G_Fit.value && this["b_"+BUINAME[i]+"Def"].value > 0) {
		this["b_"+BUINAME[i]+"Def"].firstChild.nodeValue = +this["b_"+BUINAME[i]+"Def"].value + (this.c_G_Fit.value - this["b_"+BUINAME[i]+"GR"]) * 20;
	} else {
		this["b_"+BUINAME[i]+"Def"].firstChild.nodeValue = this["b_"+BUINAME[i]+"Def"].value;
	}
}

this.b_Def_Sum.value = +this.b_headDef.firstChild.nodeValue + +this.b_bodyDef.firstChild.nodeValue + +this.b_armDef.firstChild.nodeValue + +this.b_wstDef.firstChild.nodeValue + +this.b_legDef.firstChild.nodeValue + 1;
this.b_Fp_Sum.value = +this.b_headFp.firstChild.nodeValue + +this.b_bodyFp.firstChild.nodeValue + +this.b_armFp.firstChild.nodeValue + +this.b_wstFp.firstChild.nodeValue + +this.b_legFp.firstChild.nodeValue;
this.b_Wp_Sum.value = +this.b_headWp.firstChild.nodeValue + +this.b_bodyWp.firstChild.nodeValue + +this.b_armWp.firstChild.nodeValue + +this.b_wstWp.firstChild.nodeValue + +this.b_legWp.firstChild.nodeValue;
this.b_Tp_Sum.value = +this.b_headTp.firstChild.nodeValue + +this.b_bodyTp.firstChild.nodeValue + +this.b_armTp.firstChild.nodeValue + +this.b_wstTp.firstChild.nodeValue + +this.b_legTp.firstChild.nodeValue;
this.b_Ip_Sum.value = +this.b_headIp.firstChild.nodeValue + +this.b_bodyIp.firstChild.nodeValue + +this.b_armIp.firstChild.nodeValue + +this.b_wstIp.firstChild.nodeValue + +this.b_legIp.firstChild.nodeValue;
this.b_Dp_Sum.value = +this.b_headDp.firstChild.nodeValue + +this.b_bodyDp.firstChild.nodeValue + +this.b_armDp.firstChild.nodeValue + +this.b_wstDp.firstChild.nodeValue + +this.b_legDp.firstChild.nodeValue;
//ƒXƒLƒ‹ƒ|ƒCƒ“ƒgŒvZ
var point = [], senyu_point = [], cuff_hiden = false, cuff_hiden_exe = "", gou = 0, sp = 0, hc = 0, tr = 0, hs = 0, sg = 0, g = 0, rs = 0, ss = 0,
				Tup = 0, Tsup = 0, tkup = 0, tzup = 0, tbup = 0, tdcut = 0, teni_point = [];
for (var i = 0,m=MST_Skill.length; i < m; point[i++] = 0);
for (var i = 0,m=TENINAME.length; i < m; teni_point[i++] = 0);
for (var i = 0; i < 5; i++) { //•”ˆÊ•Ê
	for (var k = 0,eq = MST_Equip[BUINAME[i]][this["b_" + BUINAME[i]].value.substring(0,4)]; k < 5; point[eq[I_bSN1+2*k]] += +eq[I_bSP1+2*k] ,k++);
	//–h‹ïƒ`ƒFƒbƒN
	if (eq[I_bCLASS]) {
		if (CLASSTYPE.GClass.indexOf(eq[I_bCLASS]) >= 0) g++;
		if (CLASSTYPE.Shugo.indexOf(eq[I_bCLASS]) >= 0) sg++;
		if (CLASSTYPE.SP.indexOf(eq[I_bCLASS]) >= 0) sp++;
		if (CLASSTYPE.HC.indexOf(eq[I_bCLASS]) >= 0) hc++;
		if (CLASSTYPE.Gosyu.indexOf(eq[I_bCLASS]) >= 0) gou++;
		if (CLASSTYPE.Tenran.indexOf(eq[I_bCLASS]) >= 0) tr++;
		if (CLASSTYPE.Hasyu.indexOf(eq[I_bCLASS]) >= 0) hs++;
		if (CLASSTYPE.Resyu.indexOf(eq[I_bCLASS]) >= 0) rs++;
		if (CLASSTYPE.Sisyu.indexOf(eq[I_bCLASS]) >= 0) ss++;
		if (eq[I_bCLASS] === "O") { //‘J—I
			if (eq[I_bNAME].indexOf("G") >= 0) g++;
			var sen_skill_name = eq[I_bDOC].split("á‘J—I–h‹ïF")[1].split("â")[0].replace("‘®«UŒ‚y","‘®«UŒ‚‹­‰»y");
			S : for (var k = 0, m=MST_Skill.length; k < m; k++) {
				for (var j = 5,n = MST_Skill[k].length; j < n; j+=2) {
					if (MST_Skill_Exe[MST_Skill[k][j]] == sen_skill_name) {
						senyu_point[k] = j-1;
						break S;
					}
				}
			}
		} else if (eq[I_bTeni]) { //’HˆÙ
			teni_point[eq[I_bTeni]] += 1;
		}
	}
	for (var j = 1; j < 4; j++) { //ƒXƒƒbƒg
		//‘•ü•i
		if (this["b_" + BUINAME[i] + "S" + j+"_data"].length === 4) {
			var eq = MST_Equip.deco[this["b_" + BUINAME[i] + "S" + j+"_data"]];
			for (var k = 0; k < 4; point[eq[I_bSN1+2*k]] += +eq[I_bSP1+2*k] ,k++);
		}
		//“Vˆó
		if (this["b_" + BUINAME[i] + "T" + j+"_data"].length === 4) {
			var eq = MST_Equip.deco[this["b_" + BUINAME[i] + "T" + j+"_data"]];
			switch (eq[I_bSN1]) {
			case "0" : //a‚ê–¡UP
				Tup = 1;
				break;
			case "1" : //ƒXƒLƒ‹UP
				Tsup = 1;
				break;
			case "2" : //UŒ‚—ÍUP
				tkup++;
				break;
			case "3" : //‘®«Eó‘ÔUP
				tzup++;
				break;
			case "4" : //‹——£•â³
				Tup = 1;
				break;
			case "5" : //‹­Œ‚ƒrƒ“UP
				Tup = 1;
				break;
			case "6" : //–hŒä—ÍUP
				tbup++;
				break;
			case "7" : //ƒ_ƒ[ƒWŒyŒ¸
				tdcut++;
				break;
			case "8" : //‘Ì—Í©“®‰ñ•œ
				hc++;
				break;
			case "9" : //‚f‹‰–h‹ï
				g++;
				break;
			}
		}
	}
}
for (var j = 1; j < 4; j++) {
	if (this["b_bukiS" + j+"_data"].length === 4) { //•ŠíƒXƒƒbƒg
		var eq = MST_Equip.deco[this["b_bukiS" + j+"_data"]];
		if (eq[I_bDEC] !== "3") {
			for (var k = 0; k < 4; point[eq[I_bSN1+2*k]] += +eq[I_bSP1+2*k] ,k++);
		}
		if (eq[I_bTeni]) teni_point[eq[I_bTeni]] += 1 //’HˆÙ
	}
	if (this["b_cuffS" + j+"_data"].length === 4) { //ƒJƒtƒXƒƒbƒg
		var eq = MST_Equip.deco[this["b_cuffS" + j+"_data"]];
		for (var k = 0; k < 4; point[eq[I_bSN1+2*k]] += +eq[I_bSP1+2*k], k++);
		if (MST_Skill[eq[I_bSN1]][3] === 2) cuff_hiden = eq[I_bSN1]; //”é“`ƒXƒLƒ‹ƒJƒt
		if (eq[I_bTeni]) teni_point[eq[I_bTeni]] += 1 //’HˆÙ
	}
}
var txt = "<div>" + (g>2 ? "G‹‰¸´‚Å•Ší”{—¦+30" : "") + "</div>";
if (hs*33+tr*6 >= 100 || rs || ss || Tsup) {
	txt += "<div>í½·Ù×İ¸UP</div>";
} else if (gou || tr || hs) {
	txt += "<div>‘Ì—Í" + (tr || hs ? 100-hs*33-tr*6 : [0,100,90,83,76,70][gou]) + "%ˆÈã‚Å½·Ù×İ¸UP</div>";
}
if (tr || hs || rs || ss || tkup) {
	txt += "<div>„í/”eí/G‹‰¸´‚Å•Ší”{—¦+" + ((tr + hs + rs) === 5 ? 80 : ss+tkup >= 5 ? 110 : 15 * (tr + hs + rs) + 20 * (ss + tkup)) + "UP[„•Šíª]</div>"
}
if (hs || rs || ss || tzup) {
	txt += "<div>„í/”eí/G‹‰¸´‚Å‘®«" + ((hs + rs) * 2 + (ss + tzup) * 3) + "%UP[„•Šíª]</div>"
}
if (tr>=2 || hs || rs || ss || Tup) txt += "<div>„í/”eí/G‹‰¸´‚Å•Ší«”\UP[“V—’ª]</div>";
this.b_effectT.innerHTML =  txt +
							"<div>" + ["","HC¸´‚Å½ÀĞÅ150‚Å8•b–ˆ‰ñ•œ","HC¸´‚Å½ÀĞÅ125‚Å4•b–ˆ‰ñ•œ","HC¸´‚Å½ÀĞÅ100‚Å2•b–ˆ‰ñ•œ","HC¸´‚Å½ÀĞÅ75‚Å1.5•b–ˆ‰ñ•œ","HC¸´‚Å½ÀĞÅ50‚Å1•b–ˆ‰ñ•œ"][hc+sg] + "</div>" +
							"<div>" + ["","SR100ˆÈ~¸´‚ÅÀŞÒ°¼Ş10%Œ¸","SR100ˆÈ~¸´‚ÅÀŞÒ°¼Ş17%Œ¸","SR100ˆÈ~¸´‚ÅÀŞÒ°¼Ş24%Œ¸","SR100ˆÈ~¸´‚ÅÀŞÒ°¼Ş27%Œ¸","SR100ˆÈ~¸´‚ÅÀŞÒ°¼Ş30%Œ¸"][sg+tdcut] + "</div>" +
							"<div>" + ["","HC/”eí/G‹‰¸´‚Å–hŒä+20","HC/”eí/G‹‰¸´‚Å–hŒä+40","HC/”eí/G‹‰¸´‚Å–hŒä+60","HC/”eí/G‹‰¸´‚Å–hŒä+80","HC/”eí/G‹‰¸´‚Å–hŒä+100"][sg+tbup] + "</div>" +
							"<div>" + (sp ? "HR100ˆÈ~¸´‚Å–hŒä+100" : "") + "</div>";
this.b_gousyuB.style.display = gou || tr || hs || rs || ss || Tsup ? "inline" : "none";
var sup = this.b_gousyuB.value === "×İ¸UP‚ ‚è";
//Å‘åƒXƒLƒ‹”­“®”
var exemax = g === 5 ? 12 : g >= 3 ? 11 : 10;
//ƒXƒLƒ‹
for (var i = 0, list = [], exe = [], m=MST_Skill.length; i < m; i++) {
	if (point[i] === 0) continue;
	//ƒXƒLƒ‹ƒ|ƒCƒ“ƒgƒŠƒXƒg
	list[list.length] = [MST_Skill[i][0],point[i]]; //ƒXƒLƒ‹–¼,ƒ|ƒCƒ“ƒg
	//”­“®ƒXƒLƒ‹
	for (var j = 4,ck = 0,n = MST_Skill[i].length; j < n; j+=2) {
		if (MST_Skill[i][j] < 0) {
			//ƒ}ƒCƒiƒX”­“®(”­“®‚µ‚½‚ço‚é)
			if (MST_Skill[i][j] >= point[i]) {
				ck = j;
				if (sup && MST_Skill[i][2] && 3 <= j - 2) ck -= 2;
				break;
			}
		} else {
			//ƒvƒ‰ƒX”­“®(‘«‚è‚È‚¢ê‡o‚é)
			if (MST_Skill[i][j] <= point[i]) {
				ck = j;
				if (sup && MST_Skill[i][2] && MST_Skill[i].length > j + 2) ck += 2;
				if (senyu_point[i] && senyu_point[i] >= ck) ck = 0; //‘J—I‘ÎÛ‚È‚çœŠO
			} else {
				break;
			}
		}
	}
	if (ck && i == cuff_hiden) cuff_hiden_exe = MST_Skill_Exe[MST_Skill[i][ck+1]],ck=0; //”é“`ƒXƒLƒ‹ƒJƒt‚ÍãŒÀœŠO
	if (ck) exe[exe.length] = [MST_Skill[i][1],MST_Skill_Exe[MST_Skill[i][ck+1]],i,point[i]]; //”­“®‡,”­“®ƒXƒLƒ‹,ƒXƒLƒ‹ID,ƒ|ƒCƒ“ƒg
}
//ƒXƒLƒ‹ƒŠƒXƒg
list.sort(function(a, b) {return b[1] - a[1]});
this.b_skillP.innerHTML = list.join("<br>").replace(/,/g," ");
var t = "";
//’HˆÙ–h‹ï
for (var i = 0, m=teni_point.length; i < m; i++) {
	if (teni_point[i]) {
		if (TENINAME[i].slice(-2,-1) === "+") {
			for (var j = teni_point[i]-1; j >= 0 ; j--) {
				if (i + j < m) {
					if (TENINAME[i].slice(0,4) === TENINAME[i+j].slice(0,4)) {
						t +=  TENINAME[i+j] + "<br>";
						break;
					}
				}
			}
		} else {
			t +=  TENINAME[i] + "<br>";
		}
	}
}
//‘J—I–h‹ï
for (var i = 0, m=senyu_point.length; i < m; i++) {
	if (senyu_point[i]) t +=  MST_Skill_Exe[MST_Skill[i][senyu_point[i]+1]] + "<br>";
}
if (t) t = "<i>" + t + "</i>";
//”é“`ƒJƒtƒXƒLƒ‹
if (cuff_hiden_exe) t += "<div style='color:darkorange'>" + cuff_hiden_exe + "</div>";
//”­“®ƒXƒLƒ‹
exe.sort(function(a, b) {return a[0]-b[0]});
//’HˆÙƒXƒLƒ‹(ƒXƒLƒ‹˜gŠg’£+1)
if (teni_point[1]) exemax += teni_point[1];
var exelm = exe.slice(0,exemax);
exelm.sort(function(a, b) {
		if (a[3] === b[3]) {
			return a[2] - b[2];
		} else {
			return b[3] - a[3];
		}});
this.c_soko.value = 60; //’ê—Í‰Šú’l
for (var i = 0; i < exelm.length; i++) {
	t += exelm[i][1] + "<br>";
	switch (exelm[i][1].substring(0,3)) {
	case "–hŒä+":
	case "–hŒä-":
		this.b_Def_Sum.value += +exelm[i][1].substring(2);
		break;
	case "‰Î‘Ï«":
		this.b_Fp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "…‘Ï«":
		this.b_Wp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "—‹‘Ï«":
		this.b_Tp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "•X‘Ï«":
		this.b_Ip_Sum.value += +exelm[i][1].substring(3);
		break;
	case "—´‘Ï«":
		this.b_Dp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "Še‘Ï«":
		this.b_Fp_Sum.value += +exelm[i][1].substring(3);
		this.b_Wp_Sum.value += +exelm[i][1].substring(3);
		this.b_Tp_Sum.value += +exelm[i][1].substring(3);
		this.b_Ip_Sum.value += +exelm[i][1].substring(3);
		this.b_Dp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "S”z«":
		this.c_soko.value = 42;
		break;
	case "‰Î–ê":
	case "‹t—Ø":
	case "ƒuƒ`ƒM":
		this.c_soko.value = 90;
		break;
	case "¶–½—Í":
		switch (exelm[i][1].charAt(4)) {
		case "1":
			this.b_Def_Sum.value += 15;
			break;
		case "2":
			this.b_Def_Sum.value += 45;
			break;
		case "3":
			this.b_Def_Sum.value += 90;
			break;
		}
		break;
	}
}

//ãŒÀ“Ë”j
if (exe.length > exemax) {
	t +=  "<small>(";
	for (var i = exemax; i < exe.length; t += exe[i++][1]) + "<br>";
	t +=  ")</small>";
}
this.calcDef();
this.b_skillT.innerHTML = t;
}
//------------------------------------“J‚Ìù—¥•ÏX----------
,cngFueExe : function (){
if (this.c_G_Que.selectedIndex) {
	var i = this.c_fueDEF.selectedIndex;
	this.c_fueDEF.selectedIndex = 0;
	this.c_fueDEF.style.display = "none";
	this.c_fueDEF_G.style.display = "inline";
	this.c_fueDEF_G.selectedIndex = i;
} else {
	var i = this.c_fueDEF_G.selectedIndex;
	if (i > 0 || this.c_fueDEF_G.style.display != "none") {
		this.c_fueDEF_G.selectedIndex = 0;
		this.c_fueDEF_G.style.display = "none";
		this.c_fueDEF.style.display = "inline";
		this.c_fueDEF.selectedIndex = i;
	}
}
}
//------------------------------------–hŒä‘Ï«----------
,calcDef : function (){
var b_Def_Sum = +this.b_Def_Sum.value,sr_defCut = 100,sr_defAdd = 0;
var tai = {	"b_Fp_Sum" : +this.b_Fp_Sum.value,
			"b_Wp_Sum" : +this.b_Wp_Sum.value,
			"b_Tp_Sum" : +this.b_Tp_Sum.value,
			"b_Ip_Sum" : +this.b_Ip_Sum.value,
			"b_Dp_Sum" : +this.b_Dp_Sum.value};
//–hŒä
b_Def_Sum += (this.c_gohu.checked ? 16 : 0) + (this.c_tume.checked ? 24 : 0) + (this.c_soko.checked ? +this.c_soko.value : 0) + +this.c_mesi.value + +this.c_tane.value + +this.c_buki.value + +this.c_shien.value;

if (this.c_drink.value !== "0") { //ƒhƒŠƒ“ƒN
	tai["b_" + this.c_drink.value.charAt(0) + "p_Sum"] += +this.c_drink.value.substring(1);
}
if (this.c_fueTAI.value !== "0") { //“J
	tai["b_" + this.c_fueTAI.value.charAt(0) + "p_Sum"] += +this.c_fueTAI.value.substring(1);
}
if (this.c_sr.value !== "0") { //SR
	switch (this.c_sr.value.charAt(0)) {
	case "S":
		sr_defCut = 100-this.c_sr.value.substring(1,3);
		tai["b_Fp_Sum"] -= this.c_sr.value.substring(3);
		tai["b_Wp_Sum"] -= this.c_sr.value.substring(3);
		tai["b_Tp_Sum"] -= this.c_sr.value.substring(3);
		tai["b_Ip_Sum"] -= this.c_sr.value.substring(3);
		tai["b_Dp_Sum"] -= this.c_sr.value.substring(3);
		break;
	case "B":
		sr_defAdd = +this.c_sr.value.substring(1);
		break;
	case "A":
		tai["b_Fp_Sum"] += +this.c_sr.value.substring(1);
		tai["b_Wp_Sum"] += +this.c_sr.value.substring(1);
		tai["b_Tp_Sum"] += +this.c_sr.value.substring(1);
		tai["b_Ip_Sum"] += +this.c_sr.value.substring(1);
		tai["b_Dp_Sum"] += +this.c_sr.value.substring(1);
		break;
	default:
		tai["b_" + this.c_sr.value.charAt(0) + "p_Sum"] += +this.c_sr.value.substring(1);
	}
}
b_Def_Sum = Math.floor(b_Def_Sum * this.c_fueDEF.value * sr_defCut / 10000) + sr_defAdd+ (this.c_kizuna.checked ? 40 : 0) + +this.c_katsu.value + +this.c_fueDEF_G.value - 150 * this.c_G_Que.value;
if (b_Def_Sum < 1) b_Def_Sum = 1;

this.b_Def_Sum.firstChild.nodeValue = b_Def_Sum
this.b_Fp_Sum.firstChild.nodeValue = tai["b_Fp_Sum"];
this.b_Wp_Sum.firstChild.nodeValue = tai["b_Wp_Sum"];
this.b_Tp_Sum.firstChild.nodeValue = tai["b_Tp_Sum"];
this.b_Ip_Sum.firstChild.nodeValue = tai["b_Ip_Sum"];
this.b_Dp_Sum.firstChild.nodeValue = tai["b_Dp_Sum"];
}
//------------------------------------ƒeƒLƒXƒgo—Í----------
,creText : function (){
var sp = "@@@@@@@@@@";
var w = this.b_cuff.value.split(",");
var t = "¶ÌF@@@@@@@@@@@@@@@@@@ "+MST_Equip.deco[w[2]][I_bNAME]+" "+MST_Equip.deco[w[3]][I_bNAME]+"\n";
var w = this.b_buki.value.split(",");
t += "•F@@@@@@@@@@@@@@@@@@ "+MST_Equip.deco[w[2]][I_bNAME]+" "+MST_Equip.deco[w[3]][I_bNAME]+" "+MST_Equip.deco[w[4]][I_bNAME]+"\n";
if (this.b_head.value === "0000,1,O,O,O") {
	t += "“ªF‚È‚µ\n";
} else {
	var w = this.b_head.value.split(",");
	t += "“ªF"+(MST_Equip.head[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"@"+("  "+this.b_headDef.firstChild.nodeValue).slice(-3)+"@"+MST_Equip.deco[this.b_headS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_headS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_headS3_data][I_bNAME];
	if (MST_Equip.head[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_headT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_headT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_headT3_data][I_bNAME]+"]";
	t += "\n"
}
if (this.b_body.value === "0000,1,O,O,O") {
	t += "“·F‚È‚µ\n"
} else {
	var w = this.b_body.value.split(",");
	t += "“·F"+(MST_Equip.body[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"@"+("  "+this.b_bodyDef.firstChild.nodeValue).slice(-3)+"@"+MST_Equip.deco[this.b_bodyS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_bodyS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_bodyS3_data][I_bNAME];
	if (MST_Equip.body[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_bodyT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_bodyT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_bodyT3_data][I_bNAME]+"]";
	t += "\n"
}
if (this.b_arm.value === "0000,1,O,O,O") {
	t += "˜rF‚È‚µ\n"
} else {
	var w = this.b_arm.value.split(",");
	t += "˜rF"+(MST_Equip.arm[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"@"+("  "+this.b_armDef.firstChild.nodeValue).slice(-3)+"@"+MST_Equip.deco[this.b_armS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_armS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_armS3_data][I_bNAME];
	if (MST_Equip.arm[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_armT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_armT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_armT3_data][I_bNAME]+"]";
	t += "\n"
}
if (this.b_wst.value === "0000,1,O,O,O") {
	t += "˜F‚È‚µ\n"
} else {
	var w = this.b_wst.value.split(",");
	t += "˜F"+(MST_Equip.wst[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"@"+("  "+this.b_wstDef.firstChild.nodeValue).slice(-3)+"@"+MST_Equip.deco[this.b_wstS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_wstS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_wstS3_data][I_bNAME];
	if (MST_Equip.wst[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_wstT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_wstT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_wstT3_data][I_bNAME]+"]";
	t += "\n"
}
if (this.b_leg.value === "0000,1,O,O,O") {
	t += "‹rF‚È‚µ\n"
} else {
	var w = this.b_leg.value.split(",");
	t += "‹rF"+(MST_Equip.leg[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"@"+("  "+this.b_legDef.firstChild.nodeValue).slice(-3)+"@"+MST_Equip.deco[this.b_legS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_legS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_legS3_data][I_bNAME];
	if (MST_Equip.leg[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_legT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_legT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_legT3_data][I_bNAME]+"]";
	t += "\n"
}
t += "\n";
t += "–hŒä—ÍF"+this.b_Def_Sum.firstChild.nodeValue;
t += " ‰Î‘Ï«F"+this.b_Fp_Sum.firstChild.nodeValue;
t += " …‘Ï«F"+this.b_Wp_Sum.firstChild.nodeValue;
t += " —‹‘Ï«F"+this.b_Tp_Sum.firstChild.nodeValue;
t += " •X‘Ï«F"+this.b_Ip_Sum.firstChild.nodeValue;
t += " —´‘Ï«F"+this.b_Dp_Sum.firstChild.nodeValue+"\n";
t += "\n";
t += "”­“®ƒXƒLƒ‹\n";
t += this.b_skillT.innerHTML.replace(/<br>/ig,",");
if (CK_MAC) {
	t = t.replace("‡T","I");
	t = t.replace("‡U","II");
	t = t.replace("‡V","III");
	t = t.replace("‡W","IV");
	t = t.replace("‡X","V");
	t = t.replace("‡Y","VI");
	t = t.replace("‡Z","VII");
	t = t.replace("‡[","VIII");
	t = t.replace("‡\","IX");
	t = t.replace("‡]","X");
}
return t;
}
//------------------------------------ƒtƒ@ƒCƒ‹“Ç‚İ‚İ----------
,getFile : function (data){
//“Ç‚İ‚İ
//ÀsŠJn(–h‹ï“WŠJ‚ğ’†~‚µ‘¦Às)
//clearTimeout(TimeId);
//for (var i = 0; i < 6; i++) for (var eqid in MST_Equip[BUINAME[i]]) if (typeof MST_Equip[BUINAME[i]][eqid] === "string") MST_Equip[BUINAME[i]][eqid] = MST_Equip[BUINAME[i]][eqid].split(",");
////d•Ï(æ“ª‚PŒ…‚ğ‚È‚­‚µ‚½)‘Î‰
//for (var s = 0; s < 6; s++) {
//	for (var i = 0,w = data[s].split(","),m = w.length; i < m; i++) w[i] = (w[i].length === 5) ? w[i].substring(1,5) : w[i];
//	data[s] = w.join(",");
//}
//

var select_name = ["buki","head","body","arm","wst","leg","cuff"];

//this.b_buki.value = data[0];
//for (var i = 1,w = data[0].split(",");i < 4;this.cngSlot(w[1+i],"b_bukiS"+i), i++);

//if (data[6]){
//	this.b_cuff.value = data[6];
//	for (var i = 1,w = data[6].split(",");i < 4;this.cngSlot(w[1+i],"b_cuffS"+i), i++);
//}
for (var i = 0,m = data.length; i < m; i++) {
	var list = data[i].split("/");
	this["b_" + select_name[i]].length = 0;
	for (var j = 0,n = list.length; j < n; j++) {
		var wk = list[j].split(",");
		if (wk[0].length !== 4 ||
			wk[1].length !== 1 ||
			wk[2].length > 4 ||
			wk[3].length > 4 ||
			wk[4].length > 4 ) {
			alert("‚±‚Ìƒtƒ@ƒCƒ‹‚Í“Ç‚İ‚ß‚Ü‚¹‚ñ");
			location.href = "skillsimu.htm";
		}
		var eqid = wk[0];
		//if (eqid === "0000") continue;

		var o = document.createElement("option");
		o.setAttribute("value", list[j]);
		if (i >= 1 && i <= 5) {
			o.appendChild(document.createTextNode(MST_Equip[select_name[i]][eqid][I_bNAME]));
		} else{
			if (j > 0) this["b_" + select_name[i]].options[this["b_" + select_name[i]].length-1] = null;
			o.appendChild(document.createTextNode("ƒZƒbƒg"));
		}
		this["b_" + select_name[i]].appendChild(o);
		
		this["b_" + select_name[i]].selectedIndex = j;
		this.cngData(select_name[i]);
	}
}
this.calc();
}

}//ƒOƒ[ƒoƒ‹
global.Init();
global.Init=null;
return global;
})(document);

//------------------------------------ƒCƒxƒ“ƒg“\‚è•t‚¯----------
(function(){
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
addEvent(window,"resize",
function () {
	document.getElementById("f_search").style.height = document.getElementById("f_bougu").style.height = (Number(window.innerHeight) || document.documentElement.clientHeight || document.body.clientHeight) - 85 + "px";
});
addEvent(window,"load",
function () {
//		this.onresize();
	document.getElementById("f_search").style.height = document.getElementById("f_bougu").style.height = (Number(window.innerHeight) || document.documentElement.clientHeight || document.body.clientHeight) - 85 + "px";

	var w = location.search.substring(1).split("|");
	if (w.length !== 6 && w.length !== 7) return;
//	SkillForm.getFile(w);
	setTimeout(function (){
		SkillForm.getFile(w);
		}, 64);
});
addEvent(document,"dblclick",
function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.id.substring(0,5) === "c_rep") {t.style.backgroundColor = t.style.backgroundColor ? "" : "gray";}
	else if (t.id === "s_head" || t.id === "s_body" || t.id === "s_arm" || t.id === "s_wst" || t.id === "s_leg" || t.id === "s_deco" || t.id === "s_cuff") SkillForm.setData(t.value,t.id.substring(2));
	/*@if (true)
	@else@*/
	if (t.tagName.toUpperCase() === "OPTION") {
		var p = t.parentNode;
		if (p.id === "s_head" || p.id === "s_body" || p.id === "s_arm" || p.id === "s_wst" || p.id === "s_leg" || p.id === "s_deco" || p.id === "s_cuff") SkillForm.setData(p.value,p.id.substring(2));
	}
	/*@end@*/
});
addEvent(document,"click",
function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	switch (t.id) {
	case "c_input":
		SkillForm.dispInput();
		break;
	case "c_series":
		SkillForm.dispSeriesList(t.id);
		break;
	case "c_skill1":
	case "c_skill2":
	case "c_skill3":
		SkillForm.dispSkillList(t.id);
		break;
	case "c_minus":
		for (var i=0;i<7;SkillForm.c_cuff_lm.options[i++].text = (t.checked ? "}" : "+") + i);
		break;
	case "search_B":
		SkillForm.search();
		break;
	case "s_head":
	case "s_body":
	case "s_arm":
	case "s_wst":
	case "s_leg":
	case "s_deco":
	case "s_cuff":
		SkillForm.dispData(t.value,t.id.substring(2),7);
		break;
	case "s_headYA":
	case "s_bodyYA":
	case "s_armYA":
	case "s_wstYA":
	case "s_legYA":
	case "s_decoYA":
	case "s_cuffYA":
		var w = t.id.substring(0,t.id.length-2);
		SkillForm.setData(SkillForm[w].value,t.id.substring(2,t.id.length-2));
		break;
	case "sub_WinRemove_B":
		SkillForm.removeDec();
		SkillForm.closeSubWin();
		break;
	case "sub_WinClear_B":
		SkillForm.removeAllDec();
		SkillForm.closeSubWin();
		break;
	case "sub_WinClose_B":
		SkillForm.closeSubWin();
		break;
	case "b_defimg":
		if (t.value === "–hŒä‘Ï«"){
			t.value = "‰æ‘œ";
			SkillForm.d_MF.style.display = SkillForm.d_MB.style.display = SkillForm.d_FF.style.display = SkillForm.d_FB.style.display = "none";
			SkillForm.def_Box.style.display = "";
		} else {
			t.value = "–hŒä‘Ï«";
			SkillForm.def_Box.style.display = "none";
			SkillForm.d_MF.style.display = SkillForm.d_MB.style.display = SkillForm.d_FF.style.display = SkillForm.d_FB.style.display = "inline";
		}
		break;
	case "b_gousyuB":
		t.value = t.value === "×İ¸UP‚ ‚è" ? "×İ¸UP‚È‚µ" : "×İ¸UP‚ ‚è";
		SkillForm.calc();
		break;
	case "b_head":
	case "b_body":
	case "b_arm":
	case "b_wst":
	case "b_leg":
		SkillForm.dispData(t.value.substring(0,4),t.id.substring(2),t.value.substring(5,6));
		break;
	case "b_cuffDel":
	case "b_bukiDel":
	case "b_headDel":
	case "b_bodyDel":
	case "b_armDel":
	case "b_wstDel":
	case "b_legDel":
		SkillForm.delData(t.id.substring(2,t.id.length-3));
		SkillForm.calc();
		break;
	case "b_headLv":
	case "b_bodyLv":
	case "b_armLv":
	case "b_wstLv":
	case "b_legLv":
		SkillForm.dispData(SkillForm[t.id.substring(0,t.id.length-2)].value.substring(0,4),SkillForm[t.id.substring(0,t.id.length-2)].id.substring(2),SkillForm[t.id.substring(0,t.id.length-2)].value.substring(5,6));
		break;
	case "b_save":
		SkillForm.b_skill.value = SkillForm.creText().replace(/<br>/g,"\n");

		var select_name = ["buki","head","body","arm","wst","leg","cuff"];
		if(window.confirm("‘S‚Ä•Û‘¶‚µ‚Ü‚·‚©H\nOK:‘S‚Ä ƒLƒƒƒ“ƒZƒ‹:•\¦•ª‚Ì‚İ")){
			for (var i = 0,m = select_name.length; i < m; i++) {
				var wk = "";
				//•ŠíƒJƒt‚ÌÅŒã‚Ìs‚Í—v‚ç‚È‚¢(ƒZƒbƒg‚Ì‚İ‚¾‚Á‚½‚ç‚¢‚é)
				for (var j = 0,n = SkillForm["b_" + select_name[i]].length - ((i===0 || i===6) && SkillForm["b_" + select_name[i]].length !== 1 ? 1 : 0); j < n; j++) {
					wk += "/" + SkillForm["b_" + select_name[i]].options[j].value;
				}
				SkillForm["b_" + select_name[i] + "_list"].value = wk.substring(1);
			}
		} else {
			for (var i = 0,m = select_name.length; i < m; i++) {
				SkillForm["b_" + select_name[i] + "_list"].value = SkillForm["b_" + select_name[i]].value;
			}
		}
		var tg = document.getElementById("f3");
		tg.action = "download.cgi";
		tg.encoding = "application/x-www-form-urlencoded";
		tg=null;
		break;
	case "b_text":
		var f4=window.open("","");
		f4.document.open("text/html; charset=Shift_JIS");
		f4.document.write("<font face='‚l‚r ƒSƒVƒbƒN'><pre>");
		f4.document.write(SkillForm.creText());
		f4.document.write("</pre>");
		f4.document.close();
		f4=null;
		break;
	case "c_gohu":
	case "c_tume":
	case "c_soko":
	case "c_kizuna":
		SkillForm.calcDef();
		break;
	case "c_buki":
		t.select();
		break;
	default:
		if (t.id.substring(0,5) === "c_rep") {
			t.style.backgroundColor = t.style.backgroundColor ? "" : "gray";
		} else if (t.id.lastIndexOf("S1") !== -1 || t.id.lastIndexOf("S2") !== -1 || t.id.lastIndexOf("S3") !== -1 ||
					t.id.lastIndexOf("T1") !== -1 || t.id.lastIndexOf("T2") !== -1 || t.id.lastIndexOf("T3") !== -1) {
			if (t.disabled) return;
			SkillForm.dispData(SkillForm[t.id+"_data"],"deco",7);
			SkillForm.dispDecoList(t.id);
		} else if (t.tagName.toUpperCase() === "INPUT" && t.type.toUpperCase() === "BUTTON") {
//				ƒ{ƒ^ƒ“‚È‚Ì‚É‚È‚É‚àˆ—‚ª‚È‚¢‚È‚ç¬‰æ–Ê
			SkillForm.setInput(t.name.substring(5),t.value);
			SkillForm.closeSubWin();
		} else {
			SkillForm.closeSubWin();
		}
		/*@if (true)
		@else@*/
		if (t.tagName.toUpperCase() === "OPTION") {
			var p = t.parentNode;
			if (p.id === "s_head" || p.id === "s_body" || p.id === "s_arm" || p.id === "s_wst" || p.id === "s_leg" || p.id === "s_deco" || p.id === "s_cuff") SkillForm.dispData(p.value,p.id.substring(2),7);
		}
		/*@end@*/
	}
});
var change_event = function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
//			SkillForm.change_event(t.id);
	switch (t.id) {
	case "c_teni":
		SkillForm.c_series.value = "-",SkillForm.sub_WinBody./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = SkillForm.c_series_data = "",SkillForm.c_andor.disabled = SkillForm.c_slot.disabled = SkillForm.c_minus.disabled = SkillForm.c_upg.disabled = false;
		break;
	case "c_hr":
		if (SkillForm.b_head.length > 1) SkillForm.cngData("head");
		if (SkillForm.b_body.length > 1) SkillForm.cngData("body");
		if (SkillForm.b_arm.length > 1) SkillForm.cngData("arm");
		if (SkillForm.b_wst.length > 1) SkillForm.cngData("wst");
		if (SkillForm.b_leg.length > 1) SkillForm.cngData("leg");
		if (+SkillForm.c_hr.value <=50){
			SkillForm.cngSlot("O","b_cuffS1");
			SkillForm.cngSlot("O","b_cuffS2");
			SkillForm.calc();
			SkillForm.b_cuffS1.disabled = SkillForm.b_cuffS2.disabled = 1;
		} else {
			SkillForm.b_cuffS1.disabled = SkillForm.b_cuffS2.disabled = 0;
		}
		break;
	case "b_buki":
	case "b_cuff":
	case "b_head":
	case "b_body":
	case "b_arm":
	case "b_wst":
	case "b_leg":
		SkillForm.cngData(t.id.substring(2));
		SkillForm.calc();
		break;
	case "b_bukiLv":
		SkillForm.cngLv(t.id.substring(2,t.id.length-2));
		break;
	case "b_headLv":
	case "b_bodyLv":
	case "b_armLv":
	case "b_wstLv":
	case "b_legLv":
		SkillForm.cngLv(t.id.substring(2,t.id.length-2));
		SkillForm.cngData(t.id.substring(2,t.id.length-2));
		SkillForm.calc();
		break;
	case "b_read":
		var tg = document.getElementById("f3");
		tg.action = "upload.cgi";
		tg.encoding = "multipart/form-data";
		tg.submit();
		tg=null;
		break;
	case "c_G_Que":
		SkillForm.cngFueExe();
	case "c_G_Fit":
		SkillForm.calc();
	case "c_mesi":
	case "c_sr":
	case "c_tane":
	case "c_drink":
	case "c_fueDEF":
	case "c_fueDEF_G":
	case "c_fueTAI":
	case "c_buki":
	case "c_shien":
	case "c_katsu":
		SkillForm.calcDef();
		break;
	}
}
addEvent(document.getElementById("c_hr"),"change",change_event);
addEvent(document.getElementById("b_buki"),"change",change_event);
addEvent(document.getElementById("b_cuff"),"change",change_event);
addEvent(document.getElementById("b_head"),"change",change_event);
addEvent(document.getElementById("b_body"),"change",change_event);
addEvent(document.getElementById("b_arm"),"change",change_event);
addEvent(document.getElementById("b_wst"),"change",change_event);
addEvent(document.getElementById("b_leg"),"change",change_event);
addEvent(document.getElementById("b_bukiLv"),"change",change_event);
addEvent(document.getElementById("b_headLv"),"change",change_event);
addEvent(document.getElementById("b_bodyLv"),"change",change_event);
addEvent(document.getElementById("b_armLv"),"change",change_event);
addEvent(document.getElementById("b_wstLv"),"change",change_event);
addEvent(document.getElementById("b_legLv"),"change",change_event);
addEvent(document.getElementById("b_read"),"change",change_event);

addEvent(document.getElementById("c_mesi"),"change",change_event);
addEvent(document.getElementById("c_sr"),"change",change_event);
addEvent(document.getElementById("c_tane"),"change",change_event);
addEvent(document.getElementById("c_drink"),"change",change_event);
addEvent(document.getElementById("c_fueDEF"),"change",change_event);
addEvent(document.getElementById("c_fueDEF_G"),"change",change_event);
addEvent(document.getElementById("c_G_Que"),"change",change_event);
addEvent(document.getElementById("c_G_Fit"),"change",change_event);
addEvent(document.getElementById("c_G_Fit"),"change",change_event);
addEvent(document.getElementById("c_katsu"),"change",change_event);
addEvent(document.getElementById("c_buki"),"change",change_event);
addEvent(document.getElementById("c_shien"),"change",change_event);
addEvent(document.getElementById("c_teni"),"change",change_event);

//ì‚ÌÚ×•\¦
addEvent(document.getElementById("sub_WinBody"),"mouseover",
function (evt) {
	if (SkillForm.sub_Win_id.lastIndexOf("S1") !== -1 || SkillForm.sub_Win_id.lastIndexOf("S2") !== -1 || SkillForm.sub_Win_id.lastIndexOf("S3") !== -1 ||
		SkillForm.sub_Win_id.lastIndexOf("T1") !== -1 || SkillForm.sub_Win_id.lastIndexOf("T2") !== -1 || SkillForm.sub_Win_id.lastIndexOf("T3") !== -1) {
		/*@if (true)
		var t = evt.srcElement;
		@else@*/
		var t = evt.target;
		/*@end@*/
		if (t.tagName.toUpperCase() === "INPUT") SkillForm.dispData(t.name.substring(5),"deco",7);
	}
});
})();
