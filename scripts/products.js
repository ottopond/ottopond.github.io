// JavaScript Document

function showProduct(tag) {
	$(".rightColumn").children(":visible").hide("slide", {direction:'left'}, 500, function () { $("#"+tag).show("slide", {direction:'right'}, 500); });
	
	return false;
};