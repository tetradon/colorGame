var numberOfSquares=6;
var colors =[];
var pickedColor ;
var colorDisplay = document.querySelector("#pickedColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");


main();

function main(){
	initButtons();
	initSquares();
	resetGame();
}
	

function initButtons(){

	resetButton.addEventListener("click", function(){
		resetGame();
	});

	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			for (var i = 0; i < modeButtons.length; i++){
				modeButtons[i].classList.remove("selected");
			}
		this.classList.add("selected");
		if(this.textContent === "Easy")
			numberOfSquares = 3;
		else if(this.textContent === "Medium")
			numberOfSquares = 6;
		else
			numberOfSquares = 9;
		resetGame();
		})
	}
}

function initSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				h1.style.backgroundColor = clickedColor;
				changeColors(pickedColor);
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
	})
	}
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateColors(num){
	var generatedColors = []
	for (var i = 0; i < num; i++) {
		generatedColors[i] = getRandomColor();
	}
	return generatedColors;
}

function getRandomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

function resetGame(){
	h1.style.backgroundColor = "#95b0db";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	colors = generateColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display = "none";
	}
}