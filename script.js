$(document).ready(function() {
	var array = [];
	var input = 90;
	var css = (1/input)*100 + "%";

	for (i=0; i < input; i++) {
		array.push("<div class='block'></div>");
	};
	for (j=0; j < input; j++) {
		$(".container").append(array)
		$(".container").append("</br>")
	};
	$(".block").css("height",css).css("width",css)
	$(".block").mouseenter(function() {
		$(this).removeClass("block").addClass("black")
	});
	$("#button").click(function() {
		$(".container").empty();
		input=parseInt(prompt("How many this time?"), 10);
		var arraya = [];
		var css = (1/input)*100 + "%";
		for (k=0; k < input; k++) {
			arraya.push("<div class='block'></div>");
		};		
		for (l=0; l < input; l++) {
			$(".container").append(arraya)
			$(".container").append("</br>")
		};
		$(".block").css("height",css).css("width",css)
		$(".block").mouseenter(function() {
			$(this).removeClass("block").addClass("black")
		});
	});
});


