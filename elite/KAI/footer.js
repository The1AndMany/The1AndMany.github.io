function varreset() {
	html = document.documentElement;
	div = document.getElementById(id2);
	totalHeight = div.scrollHeight + Number(removepx(styleclass("footer", 0, "height")));
}

function styleclass(classname, classnumber, value) {
	var element = document.getElementsByClassName(classname)[classnumber],
		style = window.getComputedStyle(element),
		test = style.getPropertyValue(value);
	return test;
}
function styleid(idname, value) {
	var element = document.getElementById(idname),
		style = window.getComputedStyle(element),
		test = style.getPropertyValue(value);
	return test;
}
function removepx(px) {
	var test = px.replace('px','');
	return test;
}

var body = !!document.getElementById("body");
var centerbody = !!document.getElementById("centerbody");
if (body) {
	var id = "body";
	var id2 = "boxbound";
} else if (centerbody) {
	var id = "centerbody";
	var id2 = "centerboxbound";
}
var initpad = styleid(id, "padding")

function resize() {
	document.getElementById(id).style.paddingBottom = initpad;
	document.getElementById(id).style.height = '';
	varreset();
	if (totalHeight > html.clientHeight) {
		document.getElementById(id).style.paddingBottom = Number(removepx(styleid(id, "padding"))) + Number(removepx(styleclass("footer", 0, "height"))) + "px";
		document.getElementById(id).style.height = div.scrollHeight + Number(removepx(styleclass("footer", 0, "height"))) + "px";
	}
}