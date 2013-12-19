function removescrollbar() {
	var w = window.innerWidth;
	var i = document.getElementById ('iframe');
	if (i) i.style.width = w+18;
	else alert ("no iframe wtf");
}

//document.addEventListener('DOMContentLoaded', removescrollbar);
window.onload = removescrollbar;
window.onresize = removescrollbar;
