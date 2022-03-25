var onoff = false;
//イベントセット
var addEvent = function (elm, type, func) {
	//追加
	elm./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//アンロードで削除
	window./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@cc_on @if (true) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
}
addEvent(document,"click",
function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.tagName.toUpperCase() === "INPUT") {
		if (!onoff) {
			/*@if (true)
			document.styleSheets[0].addRule( "table#hp tr.h", "display: block;");
			document.styleSheets[0].addRule( "table#hp tr.h", "display: table-row;");
			if (typeof document.documentElement.style.maxHeight !== "undefined") document.styleSheets[0].addRule( "table#hp tr.h>td", "display: table-cell;");
			@else@*/
			document.styleSheets[0].insertRule("table#hp tr.h {display: table-row;}", document.styleSheets[0].cssRules.length);
			document.styleSheets[0].insertRule("table#hp tr.h>td {display: table-cell;}", document.styleSheets[0].cssRules.length);
			/*@end@*/
			onoff = true;
		} else {
			/*@if (true)
			document.styleSheets[0].addRule( "table#hp tr.h","display: none;");
			@else@*/
			document.styleSheets[0].insertRule("table#hp tr.h {display: none;}", document.styleSheets[0].cssRules.length);
			/*@end@*/
			onoff = false;
		}
	}
});
