// JavaScript Document

function Geoff_show(page,direction,oldpage) {
	
	var d1;
	var d2;
	
	if(direction)
	{
		d1 = 'left';
		d2 = 'right';
	}
	else
	{
		d1 = 'right';
		d2 = 'left';
	}
	
/*	var element1 = document.getElementById("BPanels1");
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
	element6.style.display = 'none';*/


	if(oldpage==1)
		$("#BPanels1").hide("slide", {direction:d1}, 500, function () { $("#BPanels"+page.toString()).show("slide", {direction:d2}, 500); });
	if(oldpage==2)
		$("#BPanels2").hide("slide", {direction:d1}, 500, function () { $("#BPanels"+page.toString()).show("slide", {direction:d2}, 500); });
	if(oldpage==3)
		$("#BPanels3").hide("slide", {direction:d1}, 500, function () { $("#BPanels"+page.toString()).show("slide", {direction:d2}, 500); });
	if(oldpage==4)
		$("#BPanels4").hide("slide", {direction:d1}, 500, function () { $("#BPanels"+page.toString()).show("slide", {direction:d2}, 500); });
	if(oldpage==5)
		$("#BPanels5").hide("slide", {direction:d1}, 500, function () { $("#BPanels"+page.toString()).show("slide", {direction:d2}, 500); });
	if(oldpage==6)
		$("#BPanels6").hide("slide", {direction:d1}, 500, function () { $("#BPanels"+page.toString()).show("slide", {direction:d2}, 500); });
	
	
//	var element = document.getElementById("BPanels"+page.toString());
//	element.style.display = 'block';
	
//	$("#BPanels"+page.toString()).show("slide", {direction:'left'}, 500);
	
	return false;
};