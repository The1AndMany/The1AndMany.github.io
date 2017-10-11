function urlargs() {
	var args = window.location.search
	var nonhref = 3
	var linkloc = args.search('link=');
	if (linkloc != -1) {
		var linkarg = args.substring(linkloc + 5, linkloc + 7);
		if (linkarg == 'wb') {
			wb(nonhref);
		} else if (linkarg == 'bg') {
			bg(nonhref);
		} else if (linkarg == 'bw') {
			bw(nonhref);
		}
	}
}

// Don't forget to change the offset when adding or subtracting links to the end of the document (e.g. Removing the test() button or adding a button to enable the typing interface

function wb(nonhref) {
	for (i=0; i < document.getElementsByTagName("a").length; i++) {
		document.getElementsByTagName("a")[i].style.color = "black";
		document.getElementsByTagName("a")[i].style.backgroundColor = "transparent";
	}
	for (i=0; i < document.getElementsByTagName("a").length - nonhref; i++) {
		var hreftemp = document.getElementsByTagName("a")[i].href + '?link=wb';
		document.getElementsByTagName("a")[i].setAttribute('href', hreftemp);
	}
	preexistingurlargs();
}

function bg(nonhref) {
	for (i=0; i < document.getElementsByTagName("a").length; i++) {
		document.getElementsByTagName("a")[i].style.color = "rgb(0, 255, 0)";
		document.getElementsByTagName("a")[i].style.backgroundColor = "black";
	}
	for (i=0; i < document.getElementsByTagName("a").length - nonhref; i++) {
		var hreftemp = document.getElementsByTagName("a")[i].href + '?link=bg';
		document.getElementsByTagName("a")[i].setAttribute('href', hreftemp);
	}
	preexistingurlargs();
}

function bw(nonhref) {
	for (i=0; i < document.getElementsByTagName("a").length; i++) {
		document.getElementsByTagName("a")[i].style.color = "white";
		document.getElementsByTagName("a")[i].style.backgroundColor = "rgb(0, 0, 255)";
	}
	for (i=0; i < document.getElementsByTagName("a").length - nonhref; i++) {
		var hreftemp = document.getElementsByTagName("a")[i].href + '?link=bw';
		document.getElementsByTagName("a")[i].setAttribute('href', hreftemp);
	}
	preexistingurlargs();
}

function preexistingurlargs() {
	var loginhref = document.getElementById("login").href.replace('?link=', '&link=');
	document.getElementById("login").href = loginhref;
}