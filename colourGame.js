var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square"); 
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");


init()

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ?numSquares=3:numSquares=6;
			//figure out howmany squares to show
			//pick new colours
			//pick new picked colour
			//update page to reflect colour
			reset();
		});
	}
}

function setUpSquares(){
	for (var i=0;i<squares.length;i++){
		//add click listeners to squares
		squares[i].addEventListener("click",function(){
			// grab color of clicked square and compare to picked color
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor){
				messageDisplay.textContent="Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetbutton.textContent="Play Again?";
			}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
		})
	}
}



function reset(){
	//genereate all new colors
	colors=generateRandomColors(numSquares);
	//pick new colors from array
	pickedColor=pickColor();
	//change colordsuplay to picked colour
	colorDisplay.textContent=pickedColor;
	resetbutton.textContent="New Colours"
	messageDisplay.textContent="";
	//change colours of squares
	for(var i=0;i<squares.length;i++){
		if( colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor="steelblue" ;
}


resetbutton.addEventListener("click",function(){
	reset();
})

colorDisplay.textContent=pickedColor; 
for (var i=0;i<squares.length;i++){
	
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		// grab color of clicked square and compare to picked color
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetbutton.textContent="Play Again?";
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	})
}

function changeColors(color){
	// all colors change color to correct color chosen
	for (var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	//make an array
	//add num randomcolors to array
	for (var i=0;i<num;i++){
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick red from 0-255
	var r=Math.floor(Math.random()*256);
	//pick green from 0-255
	var g=Math.floor(Math.random()*256);
	//pick blue from 0-255
	var b=Math.floor(Math.random()*256);

	return "rgb("+ r+", "+g+", "+b+")";
}  

