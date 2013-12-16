var untilcm = 16; // use pinch to enlarge it!
const inchratio = 2.54;
var cmpos = "right";
var inchpos = "left";

function swap() {
	if (cmpos=="right") {
		cmpos = "left";
		inchpos = "right";
	} else {
		cmpos = "right";
		inchpos = "left";
	}
	init();
}

var memo_left = undefined;
var memo_right = undefined;

function init() {
	var m = document.getElementById("marks");

	if (cmpos=="left" && memo_left) {
		m.innerHTML = memo_left;
		return;
	} else 
	if (cmpos=="right" && memo_right) {
		m.innerHTML = memo_right;
		return;
	}

	var untilinch = untilcm/inchratio;
	var str = "";
	var ws = "&nbsp;&nbsp;&nbsp;&nbsp;";
/*
	str += "<div class='deepfont' style='position:absolute;top:2mozmm;"+cmpos+":30mozmm'>&nbsp;cm&nbsp;</div>";
	str += "<div class='deepfont' style='position:absolute;top:2mozmm;"+inchpos+":30mozmm'>inch</div>";
*/
	for (var cm=0; cm<untilcm; cm++) {
		var pos = 10 + (cm*10);
		var line = (cmpos=="left")?("_____ "+cm):(cm+" _____"+ws);
		str += "<div style='font-weight:bold;position:absolute;"+cmpos+":0mozmm;top:"+pos+"mozmm'>"+line+"</div>";
		if (cm+1<untilcm)
		for (var mm=1;mm<10;mm++) {
			var pos = 10 + (cm*10) + mm;
			var line = ((mm==5)? "__": "_") + ws;
			str += "<div style='position:absolute;"+cmpos+":0mozmm;top:"+pos+"mozmm'>"+line+"</div>";
		}
	}
	for (var inch=0; inch<untilinch; inch++) {
		var pos = 10 + (inch*10*2.54);
		var line = (inchpos=="left")?("_____ "+inch):(inch+" _____"+ws);
		str += "<div style='font-weight:bold;position:absolute;"+inchpos+":0mozmm;top:"+pos+"mozmm'>"+line+"</div>";
		if (inch+1<untilinch)
		for (var mi=1;mi<16;mi++) {
			var pos = 10 + (inch*10*2.54) + (1.60*mi);
			var line = ((mi==8)?"___":(mi%2)? "_": "__")+ws;
			str += "<div style='position:absolute;"+inchpos+":0mozmm;top:"+pos+"mozmm'>"+line+"</div>";
		}
	}
	str += "<div style='position:absolute;right:0mozmm;top:"+(pos+10)+"mozmm'>&nbsp;</div>";

	if (cmpos=="left") {
		memo_left = str;
	} else {
		memo_right = str;
	}
	m.innerHTML = str;
}
window.onclick = swap;
window.onload = init;
