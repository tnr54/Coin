/*
	*@author	Tia Rhule
	*@version	1.0, Feb.6,2104
	*Creating the Coin Class blueprint to be put onto stage
*/
function coin(){
	//properties of the coin
	//property that represents the graphic on page
		this.itemOnPage;
		//sets property values for coin position
		this.x; 
		this.y;
	//methods
	/**
	*Create function put the coin graphic on screen
	*/
	this.create = function(){
		this.itemOnPage = document.createElement("img");
		this.itemOnPage.src = "img/coin.png";
		this.itemOnPage.style.position = "absolute";
		//generate and store random x,y positions
		this.x = Math.floor(Math.random()*500); 
		this.y = Math.floor(Math.random()*500);
		this.itemOnPage.style.left = this.x+"px";
		this.itemOnPage.style.top = this.y+"px";
		//actually put onto document
		document.body.appendChild(this.itemOnPage);
	}
	this.destroy = function(){
		
	}
}
onload=init;

function init(){
	//generate one instance of the coin class
	var coin1 = new coin();
	coin1.create();	
	var coin2 = new coin();
	coin2.create();
	var coin3 = new coin();
	coin3.create();
}
