// JavaScript Document

function Geoff_show(page) {
	
	var element1 = document.getElementById("BPanels1");
	element1.style.display = 'none';
	var element2 = document.getElementById("BPanels2");
	element2.style.display = 'none';
	var element3 = document.getElementById("BPanels3");
	element3.style.display = 'none';
	var element4 = document.getElementById("BPanels4");
	element4.style.display = 'none';
	var element5 = document.getElementById("BPanels5");
	element5.style.display = 'none';
	var element6 = document.getElementById("BPanels6");
	element6.style.display = 'none';
	
//	var element = document.getElementById("BPanels"+page.toString());
//	element.style.display = 'block';
	
	$("#BPanels"+page.toString()).show("slide", {}, 500);
	
	return false;
};