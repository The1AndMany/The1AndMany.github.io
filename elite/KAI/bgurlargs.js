bg = 1;
function bgurlargcheck() {
	argcheck = window.location.href.search("bg=");
	if (argcheck != -1) {
		bgtemp = window.location.href.slice(argcheck + 3);
		otherargcheck = bgtemp.search("&");
		if (otherargcheck != -1) {
			bg = Number(bgtemp.slice(0, otherargcheck));
		} else {
			bg = bgtemp;
		}
		changebg();
	}
}
function nextbg() {
	if (bg == 10) {
		for (i=0; i < document.getElementsByClassName("bgpreserve").length; i++) {
			document.getElementsByClassName("bgpreserve")[i].href = document.getElementsByClassName("bgpreserve")[i].href.replace("?bg=" + bg, "");
		}
		bg = 0;
	}
	bg++;
	changebg();
}
function changebg() {
	document.getElementsByTagName("body")[0].background = "bg/bg" + bg + ".jpg"
	bgpreservetest = document.getElementsByClassName("bgpreserve")[0].href.search("bg=");
	if (bgpreservetest == -1) {
		if (bg == 1) {
		} else {
			for (i=0; i < document.getElementsByClassName("bgpreserve").length; i++) {
				document.getElementsByClassName("bgpreserve")[i].href += "?bg=" + bg;
			}
		}
	} else {
		for (i=0; i < document.getElementsByClassName("bgpreserve").length; i++) {
			document.getElementsByClassName("bgpreserve")[i].href = document.getElementsByClassName("bgpreserve")[i].href.replace("bg=" + (bg - 1), "bg=" + bg);
		}
	}
}