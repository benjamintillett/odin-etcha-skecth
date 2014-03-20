
var darken = function(current_color){
    var rgbArray = current_color.replace("rgb(","").replace(")","").split(",");
    for (i=0 ; i < rgbArray.length ; i++) {
         rgbArray[i] -= 10;   
    };
    var newColor = "rgb(" + rgbArray.join(",") + ")";
    return newColor    
};


var drawRow = function(size){
	for ( var i = 0 ; i < size ; i++){
		$(".container").append("<div class='square'>");
	};
	$(".container").append("<div class='end'>");
	var squareDimensions = (960/size).toString() + "px";
	$(".square").width(squareDimensions);	
	$(".square").height(squareDimensions);	
};


var drawGrid = function(size){
	for ( var i = 0 ; i < size ; i++){
		drawRow(size);
	};
	$('.square').hover(function(){
		var color = $(this).css("background-color");
		var darkerColor = darken(color);
		$(this).css("background-color",darkerColor);
	});
};

$(document).ready(function(){
	drawGrid(32);
		
	$('button').click(function(){
		$('.square').remove();
		var newSize = prompt("Please enter a number");
		$(".container").append("<div>" + newSize + "</div>");
    drawGrid(parseInt(newSize));		
	});	


		
});