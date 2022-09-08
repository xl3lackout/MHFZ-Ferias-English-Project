(function(){
var Fulltohalf = (function (){
	var han = "0123456789.,-+ABCDEFGHIJKLMNOPQRSTUVWXYZｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｧｨｨｩｩｪｪｫｫｯｯｬｬｭｭｮｮｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾊﾋﾌﾍﾎﾊﾋﾌﾍﾎｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾊﾋﾌﾍﾎﾊﾋﾌﾍﾎｳ";
	var zen = "０１２３４５６７８９．，－＋ＡＢＣＤＥＦＪＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんぁァぃィぅゥぇェぉォっッゃャゅュょョがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽガギグゲゴザジズゼゾダジヅデドバビブベボパピプペポヴ";
	return function (strVal) {
		for (var i=0,str = "",m=strVal.length,c = "",n=0; i<m; i++){
			c = strVal.charAt(i),n = zen.indexOf(c,0);
			str += (n >= 0) ? han.charAt(n) : "ﾞ" + c;
		}
		return str;
	}
})();
SkillForm.setDecoList([
["天刻印",[
"2CB3", //斬れ味UPの印
"2CB4", //スキルUPの印
"2CB5", //攻撃力UPの印
"2CB6", //属性・状態UPの印
"2CB7", //距離補正の印
"2CB8", //強撃ビンUPの印
"2CB9", //防御力UPの印
"2CBA", //ダメージ軽減の印
"2CBB", //体力自動回復の印
"2CBC" //Ｇ級防具の印
]],["天封印",[
"17BA", //[片手]真空回転斬
"17BB", //[双剣]刃打術
"17BC", //[大剣]薙ぎ払い
"17BD", //[大剣]ガード斬Ⅰ
"17BE", //[大剣]ガード斬Ⅱ
"17BF", //[太刀]貫刺し
"17C0", //[銃槍]踏込斬上げ
"17C1", //[鎚]溜移動術Ⅰ
"17C2", //[鎚]溜移動術Ⅱ
"17C3", //[鎚]溜移動術Ⅲ
"17C4", //スタン値の印
"17C5", //音爆範囲拡大の印
"2B04", //火属性の印
"2B05", //水属性の印
"2B06", //雷属性の印
"2B07", //龍属性の印
"2B08", //氷属性の印
"2B09", //麻痺属性の印
"2B0A", //睡眠属性の印
"2B0B", //毒属性の印
"2B0C", //会心の印
"2B0D", //通常弾の印Ⅰ
"2B0E", //貫通弾の印Ⅰ
"2B0F", //散弾の印Ⅰ
"2B10", //徹甲榴弾の印Ⅰ
"2B11", //火炎弾の印Ⅰ
"2B12", //水冷弾の印Ⅰ
"2B13", //電撃弾の印Ⅰ
"2B14", //氷結弾の印Ⅰ
"2B15", //通常弾の印Ⅱ
"2B16", //貫通弾の印Ⅱ
"2B17", //散弾の印Ⅱ
"2B18", //徹甲榴弾の印Ⅱ
"2B19", //火炎弾の印Ⅱ
"2B1A", //水冷弾の印Ⅱ
"2B1B", //電撃弾の印Ⅱ
"2B1C", //氷結弾の印Ⅱ
"3918", //スキル枠の印
"3919", //閃転強化の印
"391A", //巧撃強化の印
"391B", //属撃強化の印
"391C", //纏雷強化の印
"391D", //氷界強化の印
"391E", //吸血強化の印
"391F", //劇物強化の印
"3920", //支援強化の印
"3921", //耳栓強化の印
"3922", //風圧強化の印
"3923", //耐震強化の印
"3924", //耐毒強化の印
"3925", //耐麻強化の印
"3926", //耐睡強化の印
"3927", //節約強化の印
"3928", //ガ性強化の印
"3929", //適応強化の印
"392A", //鼓舞強化の印
"392B", //反射強化の印
"392C", //巧流強化の印
"392D", //血気強化の印
"3A61", //雌伏強化の印
"3AFD", //喝強化の印
"3D97", //猛進強化の印
"4086" //幕無強化の印
]]
]);
SkillForm.setSeriesList([
["Hunting",["BlizeGX","Ｔシャツ","King Beetle|Butterfly","ian ,Helper|Guild Guard,Healer","Guild Knight Red|Maid,Private","King Lobster","Black Belt","Jersey","Skull","Steel","Safety","Chainmail","Cat Piercings","High Metal","Hunter's","Battle","ピアス","Bistro","Belt","Bone","Hope","Makluva","Mafumofu","Metal","Melan","Melahoa","Rookie","Rouge","Leather","混沌","Shinobi","SP"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["Monster",["Felyne","Akantor","Akura","Abiorugu","Io","Espinas","Empress","Kaiser","Plesioth","Remobra","Garuga","Cepha","Ceanataur","Kirin","Kuaru","クシャ","Kut-Ku","Gravios","Guren","Gen","Gypceros","Gogo","Congalala","Hermitaur","Zamuza","Hornetaur","Diablos","Dragon>ミラ","Basarios","Pariapuria","Hypnoc","Blango","Bullfango","Khezu","Beru","Mizuha|Toyotama","Gougarf","Mosswine","Monoblos","Lavasioth","Raviente","Vespoid","Veloci","Rukodiora","Rathian","Rathalos","Tigrex","暁,曙|凛,艶","Inari|Tamamo","Kagura|Kamiza","Golden|Black Cub","Gold 剛|不動","夜叉|修羅"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Quest",["Arc","Azul","アスハルテ","アナキ","Apkallu","アナトリ","Aruru","Iriku>Afti","Vol","Kakabu","Kukubo","コカロ","Gospel","Jess","Jyaga","Shasse","Death Stench","Noir","Rath Duo","ローク","Demon Lord|童子","Noon Glow|夕茜","Black Tiger|黒豹","刹帝利|婆羅門","Trancendant"," Ｇ貢献証"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Mystery Quests",["Arietta>Tempest","ヴィリヴラ>Angriff","Vento>Mistral","ジスト","ディジ Gear>>Salvacion","Purogia>>ビステマ","Luxt","Royal>Lord","White Snake|White Bird"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Gou/Sky/Heaven",["Voljang","Algol","Altera","Wind","Varusa","エミット","Odiva","Gasura","Garuba","Guan","Gureado","Stroma","Diore","Diboa","Toa","Toridcless","Harudo","Flame","Blitz","Furoru","Pobo","Meraginasu","Lils","Wadatsumi|Okami","武者|日光","Elegance|Grace","Kurai|Kurai"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Hiden",["片手剣","双剣","大剣","太刀","ランス","ガンランス","ハンマー","狩猟笛","穿龍棍","ｽﾗｯｼｭｱｯｸｽ","ﾏｸﾞﾈｯﾄｽﾊﾟｲｸ","ライト","ヘビィ","弓"]],
	[" ＧRank",["Elzelion G","Zena G","Kirin G","Rukodiora G","Akantor Ｇ","Akura G","Abi G","Io G","Weiss G","Vola G","Venom G","Orange Espinas G","Espinas G","Entora G","Empress G","Kaiser G","Plesioth G","Green Plesi G","Garuga G","Cepha G","Ceanataur G","Kuaru G","Kut-Ku G","Blue Kut Ku G","Kushala G","Black Gravios G","Gravios G","Guren G","Gen G","Gypceros G","Gogo G","Congalala G","Hermitaur G","Giaorugu Ｇ","Jebia G","Shourou Ｇ|Mitama Ｇ","Sol G","Black Diablos G","Diablos G","Disu G","Doragyurosu G","Dragon G","Torpedo G","Basarios G","Vulcan G","Pariapuria G","Pietra G","Hypnoc G","Bright Hypnoc G","White Hypnoc G","Farunokku G","Franky G","Plunder G","Blango G","Khezu G","Red Khezu G","Hyuj G","Beru G","Pokara G","Hope G","Gougarf G","Mizuha Ｇ|Toyotama Ｇ","Monodevil G","Monoblos G","Lavasioth G","Veloci G","Rath Heart G","Rath  G","Rathian G","Rathalos G","Tigrex G","Lune G","Rebidiora G","Inari Ｇ|Tamamo Ｇ","Kagura Ｇ|Kamiza Ｇ","Mikagura Ｇ|Satokagura Ｇ","Golden Ｇ|Black Cub Ｇ","Shadow Ｇ|Shade Ｇ","Elegance Ｇ|Grace Ｇ","Genesis Ｇ|Motion Ｇ","Solv Rule Ｇ|Solv Lord Ｇ","Wrath Ｇ|Anger Ｇ","Lightning Ｇ|Thunder Ｇ","Dreadrock Ｇ|Redrock Ｇ","Conqueror Ｇ|Emperor Ｇ"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Diva Battle",["Asaku","Abuyado","Gorukku","Desordre","Deliver","Haragan","Brooke","Resega"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Road",["Nerishoku","Rengoku","Nerigeki","Cleora","Nerihi Ｚ","Renka Ｚ","Neriotori Ｚ","White Fatalis GX","Lumiere","Saint G","ウィル","Keisu","Nyui","ニンファ","Harimeno","Bonito","Miniomu","Meirida","Rios","Ranvuo","Rodokuru","Once"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Exotic",["Shagaru","Seregios","Tempest|Welkin","Gore","Uragaan","Zinogre","Nargacuga","Vangis","Brachy","Barioth","Stygian"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Zenith",["Harudo Ｚ","Zamuza Ｚ","Gravios Ｚ","Baruragaru Ｚ","Bogabado Z","Anorupatisu Ｚ","Inagami Ｚ","Gasura Ｚ","Plesioth Ｚ","Gear Z","Toridcless Ｚ","Doragyurosu Ｚ","Hyujikiki Z","Midogaron Ｚ","Rukodiora Ｚ","Tigrex Z","Vashimu Z","Rathalos Z","Blango Z","Espinas Z","Hypnoc Z","Khezu Z","Hermitaur Z"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["Guild",["Kirin","Corsage","Comrade","Comrade red Ｇ","Schutz>>Zwinger","Soldato>Gable","テネール","フェリ","Mixes","Ledia>Rurudi","狩人","眼鏡","猟団員"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["Festival",["Zindol Ｇ","Bita Ｇ","Koreputo Ｇ","Lynx G","Arumyu G","Cassius G","Cariva G","Core G","Liebre G","Rizuvue G","Pashio","Vakusu","Norukku","Valier","Eguiene","Atra","Aneshisu","Uida>スティーダ","Vinen","Eques","Oorowa","Onero","Orykto","Orchesis","Ordre","Kabariba","Kinioru","Kuraaji","Konseru G","Zaakaa |Chaser","Shikari","Strega","Cheni","Diina","Diru","Toruboda","Nisuru","Higakure","Pupen","Breo","Perce","Maaden","Madaru","Yoruti","Rudeos","Roses G","True Shadow|翔影","Kosho|紅楼","Post Festivities"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Interception",["Myunru Ｚ","Fanru Ｚ","Shanru Z","Utatsumugu","Utante Z","Furante Z","Merente Z","Rikante Z","Utaei","Burning CliffＧ|Crimson CliffＧ","Katante Z"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["Events",["Shandy","Banquet","Taruta","Guridi Ｚ","Elysi G","Shifunyi Z","Rapin G","Kashoku Ｚ","Aruganosu|Goruganosu","Kiyoshi Ｚ","Fonce G","Bonne G","Korinyi Z","DonruGX","Heruto Ｇ：Iroasu Ｇ","Demonclad Ｇ|Youthclad Ｇ","Rave","Marble","Cure","鬼凛 Ｇ|童凛 Ｇ","Rohokku","Red Cat テイル","Azul G","アトロ","ウナペルト","Excelle","Otono","Oleum","Kaioru","Anteka","Ganeto","Kalais","キノス系","Kirin Corno","Quoiz","グラッシュ","Craft","Kuranto","Coord","Shimashima","Shell カ","Shirukku","Strength","Santa","Shiusu Ｇ","Shieri","Jess G","Suforu","Tangusu|Kobaruta","Tangusu G |Kobaruta Ｇ","Chiru G","チャチャ","チャーム系","Dogumea","トリート","Harvest>>コピアイ","High Metal Ｕ","Harubadaa |Tracker","Beretta","Harokyu","Piercings(ｲﾍﾞﾝﾄ)","Piercings(書物)","Piercings(海陸空)","Piercings(ビギナー)","Piercings(封印石)","Mask","Buran","Furogada G","Moss Cover","Yurisu","Yupuk","Lars","Rance","Riaruo","Lucchese","Luchar","Reiresu G","Reuasu G","ロ Black Blos|ライード","Blue Sky|Welkin","Valued Word|式部","Demon Lord|童子","Demon Tale Ｇ|童伝 Ｇ","若紅葉|翡戸隠","Pale Sakura|Sakura Cloud","Crushing Fog|Fog"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["Prize",["Patapatagook","Barrel Cat","Tandress"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["NetCafe",["Ruruta","アデュス>デュスノ","Amitie>Pistis","Embrace","Orden>Orutemo","Kaila","Gagachu","Kyuura","Jumpin'>Blink","スフレ","Solene","Desert","トイスト","Trance","トロピオ","Magisa>>Buruho|Wizard>>マー Gear","Lapine","リエーザ>Risaaza","ルクス>Lucis","Regis>Regyukusu","Wagune"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["イベント",["カフェピアス"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["Lottery",
	["Agria>Flower","Shoko","Ecole>Dian","Es Quera>Pandeum","Ukon","Guns>Wild","Cubie","Kruss |Quote","Kemor","Konato","Starina","ゼーレ>Schnite","Zeroi","ティーア>Viruto","Dicto>Diletto","Deyuru","Howx","Falco","Hypnoc ルータ>Garuda","Hypnolia>Feral","Pirata","Fauve>Fias","Nimbus","Muse>Tune","Mirado","Latria","Ridere","Riot","Loose","Rutare","Rail","ロット","Robust","Rolling Flow|旋転","Rolling Sky|Rolling Earth","Moonlight","Dawnbreak"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["Blademaster [同性能は１枠にまとめ]",["アセルス：ウルバヌ","インジン：Clevan","ウーズィ：ヴェンガ","ヴァンデ：ヴェロシ","ヴィン：クルシッド","ヴェスナ：アレス","オール：フィーブル","カタフ：Miru","ゲレオン：ミッシナ","カリフ：ルルス","ゲレール：ビリス","Kurenesu：ファクト","ケック：プリース","ゴラエス：Jeamu","コンシラ：Toresupa","コンセト：Rosa","シデロ：Pasu マ","ジャッグ：Shipureru","Suifudo：シャッド","Suini：シュロス","スクラ：マグヌス","スディブ：アスティ","Sumatosu：タニイ","デスモ：ケプト","ノット：マシャル","バーク：ヴィリヤ","バシリス：Amyusu","バステル：Haosu","Baraban：Serieux","Fakiru：Franc","ファルム：ソレルス","フィブラ：アガトン","フェサー：カウント","Forutu：ヴェルス","ブリガン：ラプラル","Predator：Suteraru","フリゲト：マドニカ","フルイト：スケ Ina","Purokusu：フィデル","ベラノ：カリノ","メタロ：ヴァラク","Merodesu：フュージ","リガス：ランプロ","レーラー：ギエール","レガーメ：スプリン","厳岩：フラート","不破：ナーレー","無想：ヘイツ"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Gunner [同性能は１枠にまとめ]",["アルジャ：ネウロン","Guraasu：アエトス","シアンス：フュルス","シター：Nada","Sufera：ウェネス","Diesel：パルフェ","Dexter：Meterosu","Passhio：ミナム","プリジド：Hakyura","ヘンフロ：レキトリ","ミーツェ：ソフィス","ミスク：ハウット","ラソス：ペンブル","ハネツァ：Pasu","プラム：サザール","俊激：レーング"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Piercings",["Ena","ジオ","セケン","トリア"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Coin",["Alisha","Gems","Ryoso","Ricca","Fine","Firl","Finis","Kotona","Anbu","Kinkou","Recolis","Loli","Alisys","Rocras","Rabius","Alicia","Favila","Lenigan","Dins","Fins","Desutora G","Rokka","Penre","Zakka","Rantana","Sharufu","Kamara","Ruche","Levin","Shui","Alfi","Kaifa","Straza","Saine","Wing","Pinbi","Pribu","Sharuru","Dylan","Miriam","Kasamie","Hesyumu","Panse","Muruta","Howla","Marriage","Sakufi","Asumo","Felyne|Melynx","Wasou","Arben","Vichi","Salta","Cielo","Shiruti","Zuibei","Sailor","テリュオ","Harze","Bronte","Bendi","Revenants","Waka","Keravuno","Aura","Kurofi","Chiarim"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Coin(Wholesale)",["デストラ G","Arbiter G"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["FP",["Guild Bard|Scholar","Yukumo Kasa","Aelucanth|Rhopessa"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Collab",["Dista|Ionia","Kireek|Quna","Silver Armour|Rose Ball Gown","Twelve Paladins' Armor|Rebellion Armour","Holy Maiden Armor|Dragon Slayer Armor","Gray|Urpina","Noel|Bune","YoRHa No.9 Type S|YoRHa No.2 Type B","Rocbouquet|Alkaiser","Adel|Claudia","Yukine|Snow Miku","Elegant","Orloj|Dolce","Kaiji|Mikoko","L'Amore|Ruban","CE Kevlar|AB Layer","Plug","Unit-01|Unit-00","Mark.06|Unit-02","Ryu|Nina"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["Hiden",["片手剣","双剣","大剣","太刀","ランス","ガンランス","ハンマー","狩猟笛","穿龍棍","ｽﾗｯｼｭｱｯｸｽ","ﾏｸﾞﾈｯﾄｽﾊﾟｲｸ","ライト","ヘビィ","弓"]]
],
["Premium",["Crush Gun","Bow Saint","Scream Lance","Song","Piercing Light","Crush Lance","Twin Star","Spring Sword","Riot Hammer","Sword Hero","Colour Axe","Blast Gun","Heaven Blade","Wander","Pelegri","Gudan","IS Academy","Asteli","Lien","Carrol","Miku","Akahara,Knight King","Hero King ,Gorgon","Shaln","Blaze","Rampage","Rage","Espi・","Aonoko","Mandora","Poogie","Gauss","Weber","Gilbert","Bright","Juari","Tinku","Honour","Semu","Hevria","Tiuru","Dinato","Duque","Granu","Chiyo","Blue Ice Emperor","White Ice Emperor","Red Ice Emperor","Evol"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["Old",["Arge","Abitto","Arma","Aristo","Ex","Edio","Omet","Carmine|Sagittario","Cultu","Cayssis","Camarera","Galitos","Gold Cat","Silver Cat","Claire","Cloth","Gloria","Genom","Gelt","Gold","Siena","Sheriff","White Cat","Steno","Suriito","Serena","Zodic","Dusk","Dante,Lady","Divol","Text","Demon,Shadow|Chaos,Soul","Truss","Naga","Nekodan","Noir Head","Bunny Band","Pics","Pharan","Ferme","Promise>Bliss","Star Festival|Tanabata","White Metal>>Ciel","Maisto","Magos","Magisa|Wizard","Marin","Metenera","Melety","Riburi","Regalia","Reflet","Real","Rast","昇龍,百裂|波動,気功","竜巻,千裂|真空,覇山","Shinryu,Cannon|Reppa,Axel","Randa|Randa","Issen,蜂針|構射,気弾","Green 竜ノGreen 竜ノ羽織","Red 竜ノ|Red 竜ノ羽織","Survey Corps,Training Corps","Tenpi","Oyun"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
],
["Bundle",["Ash","Amistad","Gania","戯曲","Zyra","Secuti","Bande","Perifu","Rough Cat テイル","Regnum","Flight"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["PS3/4/WiiU",["メトリー：アミロ"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["Subscription",["Emil","Amezari","ヴェラン","Aerial","エクスト","Carriage","Black Cat テイル","グリンデ","Kurossu","Gothic>Beil","Smart","Sufia","Solflare","Duo","テリオグ","Trume","ノメル","ハセルヴォルフット","Historia","Boot Up","ファミ通Ｔシャツ","フィ Diablos ーム>>ヴェルフ","Patapatagook","ムース","ライダー>ライジング","ランデグ","ルワージュ","Lodge Wear","Yuenesu","旋風,天空|巴,天昇","正拳,龍星|灼熱,虎襲","抜胴,長根|花火,流星","雷刃,天星|迅雷,飛燕","歌姫ＤＩＶＡピアス"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["HL",["Kelis","Eris","Dios","レグラ","Charis"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["EX",["Felyne の Cat Ears","エクストラ","Kelbi","Chullo","Fellow"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["PS3/WiiU",["ノヴィー：Pisces","Holy King ,Hero King"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
]
]);
SkillForm.setSeries = function (_id,_mei) {
	if (_mei === "-") return "";
	var mei = _mei.replace(/Ｇ/g,"").replace(/Ｚ/g,"").replace(/GX/g,"");
	var series = {C:"9",low_hr:0,high_hr:0,F1:[mei],F2:[],S:"",R:[]};
	switch (_id.charAt(0)) {
	case "0": //狩猟
		series.C = "1-#2m#1c#";
		switch (_id.substring(1)) {
		case "2": //モンスター
			series.high_hr = 1999;	//HRまで
			break;
		case "5": //剛種
			series.R = ["Ｚ","ZY","ZF","ZX"];
			break;
		case "7": //Ｇ級
			series.low_hr = 2001;	//GRから
			series.R = ["Ｚ","ZY","ZF","ZX"];
			break;
		case "8": //狩衛戦
			series.C = "1s#";
			break;
		case "9": //天廊
			series.C = "1t#";
			break;
		case "11": //辿異
			series.low_hr = 2200;	//GRから
			series.high_hr = 3000;	//GSRまで
			break;
		}
		break;
	case "1": //猟団
		series.C = "2-#2m#2u#";
		break;
	case "2": //イベント
		series.C = "1e#1i#";
		break;
	case "3": //ネカフェ
		series.C = "3-#3e#";
		break;
	case "4": //ガチャ
		series.C = "4g#";
		break;
	case "5": //キット
		series.C = "4k$";
		break;
	case "6": //パッケージ
		series.C = "5p#";
		break;
	case "7": //特典
		series.C = "5-#";
		break;
	}
	switch (mei) {
	case "ベルト":
		series.F1 = ["アイアン","スキンライト","ハイド"];
		break;
	case "Chainmail":
		series.F1 = ["Chainmail","Ｃ・"];
		break;
	case "Veloci":
		series.F1 = ["Veloci","Gia"];
		break;
	case "Rathian":
		if (_id.charAt(1) !== "7") series.F1 = ["Rathian","Rath Heart","ゴールド","G・Lune R"];
		break;
	case "Rathalos":
		if (_id.charAt(1) !== "7") series.F1 = ["Rathalos","Rath","Silver Sol","S・Sol R"];
		break;
	case "King Lobster":
		series.F1 = ["King Lobster","Ｋ・"];
		break;
	case "Piercings(ｲﾍﾞﾝﾄ)":
		series.F1 = ["Tribute Piercings"];
		break;
	case "Piercings(書物)":
		series.F1 = ["衝撃のピアス","射手のピアス","先見のピアス","捨身のピアス","慈愛のピアス"];
		break;
	case "Piercings(海陸空)":
		series.F1 = ["マーレピアス","海洋のピアス","スカイピアス","天空のピアス","ランドピアス","大地のピアス"];
		break;
	case "Piercings(ビギナー)":
		series.F1 = ["ルーフスピアス","シーニーピアス","ジョーヌピアス","アルブスピアス","プレートピアス"];
		break;
	case "Piercings(封印石)":
		series.F1 = ["ソウイル","アンサズ","エオロー","ラグズ","ゲーボ","テイワズ","ウルズ","エイワズ"];
		break;
	case "カフェピアス":
		series.F1 = [];
		series.C = "3e#";
		series.S = "Piercings";
		break;
	case "Piercings":
		series.F1 = ["Red Piercings","Blue Piercings","Black Piercings","White Piercings","Safety"];
		break;
	case "ネコピアス":
		series.F1 = [];
		series.S = "ネコ";
		break;
	case "フェイク":
		series.F1 = [];
		series.S = mei;
		series.R = ["チャチャ"];
		break;
	case "バレッタ":
	case "Corsage":
	case "Metal":
	case "Ｔシャツ":
	case "Jersey":
	case "眼鏡":
		series.F1 = [];
		series.S = mei;
		break;
	case "SP":
		series.F1 = [];
		series.S = mei;
		series.C = "9";
		break;
	case "Monoblos":
		series.F1 = ["モノブロ","Monodevil"];
		if (_mei === "Monoblos G ") series.R = ["Monodevil"];
		break;
	case "Dragon>ミラ":
		series.F1 = ["Dragon","ミラ Vulcan","White Fatalis"];
		break;
	case "Comrade":
		series.F1 = ["Comrade","Comrade red"];
		series.high_hr = 1999;
		break;
	case "Comrade red":
		series.low_hr = 2001;
		break;
	case "White Metal>>Ciel":
		series.F1 = ["White Metal","Celeste","Ciel"];
		break;
	case "Purogia>>ビステマ":
		series.F1 = ["Purogia","Oracion","Requiem","ビステマ"];
		break;
	case "Duo":
		series.F1 = ["Duo","Quad","Core"];
		break;
	case "エクスト":
		series.R = ["エクストラ"];
		break;
	case "Magisa|Wizard":
		series.F1 = ["Magisa","Crowley","Wizard","Faust"];
		break;
	case "Magisa>>Buruho|Wizard>>マー Gear":
		series.F1 = ["Magisa","Crowley","Buruho","Wizard","Faust","マー Gear"];
		break;
	case "ディジ Gear>>Salvacion":
		series.F1 = ["ディジ Gear","Priere","Salvacion"];
		break;
	case "Ian,Helper|Guild Guard,Healer":
		series.F1 = ["ian","Helper","Healer","Guild Guard","Ｇ・Guard"];
		break;
	case "キノス系":
		series.F1 = ["Kinosu","Himeros","Bureshisu","Charien"];
		break;
	case "Kirin Verde":
		series.F1 = ["Kirin Verde","Kirin Rufus","Kirin アピリ"];
		break;
	case "Espinas":
		series.F1 = ["Espinas","Weiss"];
		break;
	case "Schutz>>Zwinger":
		series.F1 = ["Schutz","Hilfe","Zwinger"];
		break;
	case "Espi・":
		series.F1 = ["Espi"];
		series.F2 = ["Mask"];
		break;
	case "High Metal U":
		series.F1 = ["High Metal U Helm","High Metal R Helm"];
		break;
	case "Boot Up":
		series.F1 = ["Boot Up","Buto F"];
		break;
	case "フィ Diablos ーム>>ヴェルフ":
		series.F1 = ["フィ Diablos ーム","エピ Diablos ーム","ヴェルフィ","ヴェルフ"];
		break;
	case "Harvest>>コピアイ":
		series.F1 = ["Harvest","Freyja","フレイ","クロノス","レアー","ハーデス","コルヌー","コピアイ"];
		series.R = ["Flame"];
		break;
	case "チャーム系":
		series.F1 = [];
		series.S = "チャーム";
		break;
	case "Shourou|Mitama":
		series.F1 = ["Shourou","Mitama","Shantien"];
		break;
	case "Diablos":
		series.F1 = ["Diablos","Diablos"];
		if (_mei === "Diablos G ") series.R = ["Diablos"];
		break;
	case "片手剣":
		series.F1 = ["リリオ","Garnet","Rubellite"];
		series.S = "剣聖";
		break;
	case "双剣":
		series.F1 = ["フレサ","Amethyst","ラズライト"];
		series.S = "双龍";
		break;
	case "大剣":
		series.F1 = ["クラBeru","Coral","Zircon"];
		series.S = "剣王";
		break;
	case "太刀":
		series.F1 = ["シルエラ","Quartz","Spinel"];
		series.S = "刀神";
		break;
	case "ランス":
		series.F1 = ["セレソ","Ruby","Pyrope"];
		series.S = "天槍";
		break;
	case "ガンランス":
		series.F1 = ["オリバ","Sapphire","アイオラ"];
		series.S = "砲皇";
		break;
	case "ハンマー":
		series.F1 = ["カメ Lea","Emerald","Jade"];
		series.S = "鈍器獣";
		break;
	case "狩猟笛":
		series.F1 = ["ハシント","Pearl","Agate"];
		series.S = "奏帝";
		break;
	case "穿龍棍":
		series.F1 = ["Hisui","Blood"];
		series.S = "穿凰";
		break;
	case "ライト":
		series.F1 = ["ラウレル","Topaz","Citrine"];
		series.S = "銃傑";
		break;
	case "ヘビィ":
		series.F1 = ["ココ","Tourmaline","Peridot"];
		series.S = "銃仙";
		break;
	case "弓":
		series.F1 = ["グラナダ","Lapis","Turquoise"];
		series.S = "弓鬼";
		break;
	case "ｽﾗｯｼｭｱｯｸｽ":
		series.F1 = ["Onyx","Rutile"];
		series.S = "斬将";
		break;
	case "ﾏｸﾞﾈｯﾄｽﾊﾟｲｸ":
		series.F1 = ["Tanzanite","Hematite"];
		series.S = "磁星";
		break;
	case "貢献証":
		series.F1 = ["Contra","Jintora","Antora","Bintora","Tantora"];
		break;
	case "Survey Corps,Training Corps":
		series.F1 = ["Survey Corps","Training Corps","VM Equipment"];
		break;
	case "Franky":
		series.F1 = ["Frank"];
		break;
	case "Tangusu|Kobaruta":
		series.F1 = mei.split(/[|,]/);
		if (_mei === "Tangusu Ｇ|Kobaruta Ｇ") {
			series.low_hr = 2001;
		} else {
			series.high_hr = 1999;
		}
		break;
	case "Empress":
		series.F1 = ["Empress","Lunastra"];
		break;
	case "Rath Heart":
		series.F1 = ["Rath Heart","Heart"];
		break;
	case "Rath":
		series.F1 = ["Rath ","Soul"];
		break;
	case "Black Diablos":
		series.F1 = ["Black Diablos","Blk Diablos"];
		break;
	case "Monodevil":
		series.F1 = ["Monodevil","Wht Mono"];
		break;
	case "White Hypnoc":
		series.F1 = ["White Hypnoc","White Hypnoc"];
		break;
	case "Raviente":
		series.high_hr = 0;
		series.R = ["狂","猛","極"];
		break;
	case "Raviente  : Violent":
		series.high_hr = 0;
		series.F1 = ["ラヴィ狂"];
		series.S = "：狂";
		break;
	case "ラヴィ：猛":
		series.F1 = ["ラヴィ猛"];
		series.S = "：猛";
		break;
	case "ラヴィ：極":
		series.F1 = ["ラヴィＧ極"];
		series.S = "：極";
		break;
	case "Kabariba":
		series.F1 = ["Kabariba","Kabari"];
		break;
	case "Toruboda":
		series.F1 = ["Toruboda","Torubo"];
		break;
	case "Felyne|Melynx":
		series.F1 = ["Felyne","Melynx","Tabby","Brown","Calico","Monotone","Chashiro","Two-tone"];
		break;
	default:
		if (mei.indexOf("：") !== -1) {
			series.F1 = mei.split("：");
		} else if (mei.indexOf("|") !== -1) {
			series.F1 = mei.split(/[|,]/);
		} else if (mei.indexOf(",") !== -1) {
			series.F1 = mei.split(",");
		} else if (mei.indexOf(">") !== -1) {
			series.F1 = mei.split(">");
		}

		break;
	}

	return series;
}
})();
