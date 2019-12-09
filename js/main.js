
import App from './DungeonMaze.js'
import DungeonMaze from './DungeonMaze.js'
//all imports are done at the top of the file.

//export const eventHub = new Vue();

new Vue({
   render: h => h(App)
}).$mount('#dungeonMaze')




// Hero image
var heroReady = false; //disablar ikonen först
var heroImage = new Image();
heroImage.onload = function () { //skapar en funktion som laddar iconen 
	heroReady = true; //säger att bilden är klar att laddas
};
heroImage.src = "images/hero.png"; //ikonens källa

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () { //skapar en funktion som laddar iconen
	monsterReady = true; //säger att bilden är klar att laddas
};
monsterImage.src = "images/goomba.png"; //ikonens källa

// Item image
var ItemReady = false; //disablar ikonen först
var ItemImage = new Image();
ItemImage.onload = function () { //skapar en funktion som laddar iconen 
	ItemReady = true; //säger att bilden är klar att laddas
};
ItemImage.src = "images/Normal Chest.png"; //ikonens källa

// Quest Item image
var QuestItemReady = false; //disablar ikonen först
var QuestItemImage = new Image();
QuestItemImage.onload = function () { //skapar en funktion som laddar iconen 
	QuestItemReady = true; //säger att bilden är klar att laddas
};
QuestItemImage.src = "images/Boss Quest Item Chest.png"; //ikonens källa

// Game objects
var hero = {
	speed: 256, // movement in pixels per second
	noSpeed: 0
};
var monster = {}; //den har inga controller
var Level = 1; //laddar poängen de startar på noll
var ATK = 3;
var health = 5;
var item1 = {};
var item2 = {};
var item3 = {};
var item4 = {};
var itemM = {};

// Handle keyboard controls
var keysDown = {};



// skapar en lista när knappen trycks ner
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

//tar bort listan när knappen inte trycks ner
addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () { //om en reset sker så aktuverar det funtionen
	hero.x = canvas.width - 1000; //placerar ikonen på specifikt ställer
	hero.y = canvas.height - 620; //placerar ikonen på specifikt ställer

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
    
    item1.x = 32 + (Math.random() * (canvas.width - 64));
    item1.y = 32 + (Math.random() * (canvas.height - 64));
    
    item2.x = 32 + (Math.random() * (canvas.width - 64));
    item2.y = 32 + (Math.random() * (canvas.height - 64));
    
    item3.x = 32 + (Math.random() * (canvas.width - 64));
    item3.y = 32 + (Math.random() * (canvas.height - 64));
    
    item4.x = 32 + (Math.random() * (canvas.width - 64));
    item4.y = 32 + (Math.random() * (canvas.height - 64));
    
    itemM.x = canvas.height - 170;
	itemM.y = canvas.width - 170;
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	// Are they touching?
	if ( //en kod som kollar om de båda ikornerna rör varandra
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		//++Level; //när spelaren rör monstret resetar spelet
		if (37 in keysDown) { // Player holding left
			hero.x += hero.speed * modifier;
		}
		if (39 in keysDown) { // Player holding right
			hero.x -= hero.speed * modifier;
		}
		if (40 in keysDown) { // Player holding down
			hero.y -= hero.speed * modifier;
		}
		if (38 in keysDown) { // Player holding up
			hero.y += hero.speed * modifier;
		}
	}

	// Are they touching?
	if ( //en kod som kollar om de båda ikornerna rör varandra
		hero.x <= (item1.x + 32)
		&& item1.x <= (hero.x + 32)
		&& hero.y <= (item1.y + 32)
		&& item1.y <= (hero.y + 32)
	) {
		//++Level; //när spelaren rör monstret resetar spelet
		if (37 in keysDown) { // Player holding left
			hero.x += hero.speed * modifier;
		}
		if (39 in keysDown) { // Player holding right
			hero.x -= hero.speed * modifier;
		}
		if (40 in keysDown) { // Player holding down
			hero.y -= hero.speed * modifier;
		}
		if (38 in keysDown) { // Player holding up
			hero.y += hero.speed * modifier;
		}
	}

	// Are they touching?
	if ( //en kod som kollar om de båda ikornerna rör varandra
		hero.x <= (item2.x + 32)
		&& item2.x <= (hero.x + 32)
		&& hero.y <= (item2.y + 32)
		&& item2.y <= (hero.y + 32)
	) {
		//++Level; //när spelaren rör monstret resetar spelet
		if (37 in keysDown) { // Player holding left
			hero.x += hero.speed * modifier;
		}
		if (39 in keysDown) { // Player holding right
			hero.x -= hero.speed * modifier;
		}
		if (40 in keysDown) { // Player holding down
			hero.y -= hero.speed * modifier;
		}
		if (38 in keysDown) { // Player holding up
			hero.y += hero.speed * modifier;
		}
	}

	// Are they touching?
	if ( //en kod som kollar om de båda ikornerna rör varandra
		hero.x <= (item3.x + 32)
		&& item3.x <= (hero.x + 32)
		&& hero.y <= (item3.y + 32)
		&& item3.y <= (hero.y + 32)
	) {
		//++Level; //när spelaren rör monstret resetar spelet
		if (37 in keysDown) { // Player holding left
			hero.x += hero.speed * modifier;
		}
		if (39 in keysDown) { // Player holding right
			hero.x -= hero.speed * modifier;
		}
		if (40 in keysDown) { // Player holding down
			hero.y -= hero.speed * modifier;
		}
		if (38 in keysDown) { // Player holding up
			hero.y += hero.speed * modifier;
		}
	}

	// Are they touching?
	if ( //en kod som kollar om de båda ikornerna rör varandra
		hero.x <= (item4.x + 32)
		&& item4.x <= (hero.x + 32)
		&& hero.y <= (item4.y + 32)
		&& item4.y <= (hero.y + 32)
	) {
		//++Level; //när spelaren rör monstret resetar spelet
		if (37 in keysDown) { // Player holding left
			hero.x += hero.speed * modifier;
		}
		if (39 in keysDown) { // Player holding right
			hero.x -= hero.speed * modifier;
		}
		if (40 in keysDown) { // Player holding down
			hero.y -= hero.speed * modifier;
		}
		if (38 in keysDown) { // Player holding up
			hero.y += hero.speed * modifier;
		}
	}


// Are they touching?
if ( //en kod som kollar om de båda ikornerna rör varandra
	hero.x <= (itemM.x + 33)
	&& itemM.x <= (hero.x + 33)
	&& hero.y <= (itemM.y + 33)
	&& itemM.y <= (hero.y + 33)
) {
	//++Level; //när spelaren rör monstret resetar spelet
	if (37 in keysDown) { // Player holding left
		hero.x += hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y -= hero.speed * modifier;
	}
	if (38 in keysDown) { // Player holding up
		hero.y += hero.speed * modifier;
		}
	}
};


// Draw everything
var render = function () {
	if (bgReady) { //om bilden finns tillkänlig ritas den
		ctx.drawImage(bgImage, 0, 0); //ställer in var den ritas
	}

	if (heroReady) {  //om bilden finns tillkänlig ritas den
		ctx.drawImage(heroImage, hero.x, hero.y); //ställer in var den ritas
	}

	if (monsterReady) { //om bilden finns tillkänlig ritas den
		ctx.drawImage(monsterImage, monster.x, monster.y); //ställer in var den ritas
    }
    if (ItemReady) {
        ctx.drawImage(ItemImage, item1.x, item1.y )
    }

    if (ItemReady) {
        ctx.drawImage(ItemImage, item2.x, item2.y )
    }
    if (ItemReady) {
        ctx.drawImage(ItemImage, item3.x, item3.y )
    }
    if (ItemReady) {
        ctx.drawImage(ItemImage, item4.x, item4.y )
    }
    if (QuestItemReady) {
        ctx.drawImage(QuestItemImage, itemM.x, itemM.y )
    }
    
    //skapar en poeäng mätare på toppen av sidan
	ctx.fillStyle = "rgb(250, 250, 250)"; //ställer in hur texten ska se ut
	ctx.font = "24px Helvetica"; //ställer in storleken
	ctx.textAlign = "left"; //bilden ritas uppe till vänster
	ctx.textBaseline = "top"; //bilden ritas på uppe i fönstret
	ctx.fillText("Level: " + Level, 220, 7); // ställer in del av text + hur många gånger monstret har fångats

	 //skapar en poeäng mätare på toppen av sidan
	 ctx.fillStyle = "rgb(250, 250, 250)"; //ställer in hur texten ska se ut
	 ctx.font = "24px Helvetica"; //ställer in storleken
	 ctx.textAlign = "right"; //bilden ritas uppe till vänster
	 ctx.textBaseline = "bottom"; //bilden ritas på uppe i fönstret
	 ctx.fillText("Health: " + health, 100, 30); // ställer in del av text + hur många gånger monstret har fångats

	  //skapar en poeäng mätare på toppen av sidan
	ctx.fillStyle = "rgb(250, 250, 250)"; //ställer in hur texten ska se ut
	ctx.font = "24px Helvetica"; //ställer in storleken
	ctx.textAlign = "left"; //bilden ritas uppe till vänster
	ctx.textBaseline = "top"; //bilden ritas på uppe i fönstret
	ctx.fillText("ATK: " + ATK, 120, 7); // ställer in del av text + hur många gånger monstret har fångats
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// en förfrågan där allt material och bilder visas igen
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// spela spelet
var then = Date.now();
reset();
main();

    render: h => h(DungeonMaze)
// }).$mount('#dungeonMaze')
