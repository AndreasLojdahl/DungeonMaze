            import Tile from './Tile.js'
            import Character from './Character.js'
            import Monster from './Monster.js'
            import Finalboss from './Finalboss.js'

            export default{
                components:{
                    Tile,
                    Character,
                    Monster,
                    Finalboss
                },

                template:`
                <div class="grid-layout">
                
                <tile  
                    v-for="(tile, i) of flatTiles"
                    v-bind:properties="tile"
                    v-bind:key="'tile' + i + tile.x + tile.y"
                    v-bind:class="'tile-type-' + tile.type"
                    ref="flatTiles"
                    ></tile>
                    
                    <Character 
                    ref="hero" 
                    @restart="restartGame"
                    @changemessage="changeheromessage"
                    @changehealth="changeherohealth" 
                    @changelevel="changeherolevel" 
                    v-bind:position="heroPosition">
                    </Character>

                    <!--
                    <Monster tileArray="flatTiles"></Monster>
                    <div class="buttons-div">
                    <button v-on:click="moveLeft">Left</button>
                    <button v-on:click="moveUp">Up</button>
                    <button v-on:click="moveDown">Down</button>
                    <button v-on:click="moveRight">Right</button></button>
                    </div>
                    -->
                </div>
                `,

            data(){
                return{
                    tiles: [],
                /* grid : [      20x20 map
                        ['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W'],
                        ['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],     
                    ],*/

                    grid :[
                        ['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],
                        ['W','W','W',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ','W'],
                        ['W','W',' ',' ',' ','W','W','W','W',' ',' ',' ',' ',' ','W'],
                        ['W',' ',' ',' ',' ','W',' ',' ','W',' ','W','W',' ',' ','W'],
                        ['W',' ','W','W',' ','W','B',' ',' ',' ',' ','W',' ','W','W'],
                        ['W',' ',' ',' ',' ','W',' ',' ','W',' ','W','W','W','W','W'],
                        ['W','W',' ',' ',' ','W','W','W','W',' ',' ',' ',' ','W','W'],
                        [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W','W',' ',' ','W'],
                        ['W',' ','W','W','W','W','W','W','W',' ','W','W',' ',' ','W'],
                        ['W',' ','W',' ',' ',' ','W','W',' ',' ',' ','W','W','W','W'],
                        ['W',' ',' ',' ',' ',' ','W',' ',' ','W',' ',' ',' ','W','W'],
                        ['W',' ','W','W','W','W','W',' ','W','W','W','W',' ',' ','W'],
                        ['W',' ',' ','W','W',' ',' ',' ',' ','W','W','W',' ',' ','W'],
                        ['W','W','W','W',' ',' ',' ',' ',' ','W',' ',' ',' ',' ','W'],
                        ['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],
                    ],
                    
                    // W = Wall
                    // M = Monster
                    // B = Boss
                    // C = Treasure Chest
                    // K = Key?

                        heroPosition:{
                            x:0,
                            y:7
                        },

                        itemPosition1:{
                            x:12,
                            y:4
                        },

                        itemPosition2:{
                            x:4,
                            y:13
                        },

                        finalBossData:{
                            x:6,
                            y:4
                        },

                        heroStats:{
                            hp: 10,
                            attack: 3,
                            level: 1
                        },

                    monsterPositions: [
                        {x: 12, y: 2},
                        {x: 4, y: 10},
                        {x: 13, y: 8},
                        {x: 7, y: 13},
                        {x: 12, y: 12},
                    ],

                        chestPositions: [
                            {x: 2, y: 12},
                            {x: 2, y: 2},
                            {x: 10, y: 4},
                            {x: 12, y: 4},
                            {x: 4, y: 13},
                            {x: 10, y: 13},
                            {x: 7, y: 3},
                            {x: 11, y: 1},
                            {x: 3, y: 9},
                            {x: 8, y: 13},
                        ],

                        chests: [],
                        monsters: [],
                        room1: [],
                        room2: [],
                        room3: [],
                        room4: [],
                        room5: [],

                    /*backPack:{
                        ironSword:'',
                        shield:'',
                        helmet:'',
                        chest:'',
                    },*/
                    shownMessage1: false,
                    shownMessage2: false,
                    monsterInRoom: false,
                }
            },

                computed:{
                    flatTiles(){
                        return this.tiles.flat()
                    }
                },
                createFogOfWar(){
                    let index = 7*15 + 0
                    console.log(this.flatTiles);
                    this.$refs.flatTiles[index].updateTileVisibility();
                },
                
                // moveUp(){ 
                //     let futurePositionY = this.heroPosition.y - 1
                //     if (this.grid[futurePositionY][this.heroPosition.x] !== 'W'){
                //         this.checkForStoryMessage(futurePositionY,this.heroPosition.x);
                //         this.checkForMonster(futurePositionY, this.heroPosition.x); 
                //         this.checkForItem(futurePositionY,this.heroPosition.x);
                //         this.heroPosition.y -= 1;
                //     }           
                // },
                // moveDown(){
                //     let futurePositionY = this.heroPosition.y + 1
                //     if (this.grid[futurePositionY][this.heroPosition.x] !== 'W'){
                //         this.checkForStoryMessage(futurePositionY,this.heroPosition.x);
                //         this.checkForMonster(futurePositionY,this.heroPosition.x);
                //         this.checkForItem(futurePositionY,this.heroPosition.x);
                //         this.heroPosition.y += 1;
                //     }
                //     this.checkForMonster(futurePositionY, this.heroPosition.x);
                //     console.log(futurePositionY, this.heroPosition.x)
                // },
                // moveLeft(){
                //     let futurePositionX = this.heroPosition.x - 1
                //     if (this.grid[this.heroPosition.y][futurePositionX] !== 'W'){
                //         this.checkForStoryMessage(this.heroPosition.y,futurePositionX);
                //         this.checkForMonster(this.heroPosition.y, futurePositionX);
                //         this.checkForItem(this.heroPosition.y, futurePositionX);
                //         this.$refs.hero.updateDirection('left');
                //         if(futurePositionX != -1){
                //             this.heroPosition.x -= 1;
                //         }
                //     }
                // },

                methods:{
                    createMap (){
                        this.spawnTreasureChests();
                        this.spawnMonsters();
                        for(let rows = 0; rows < this.grid.length; rows++){
                            this.tiles[rows] = [];
                            for(let cols = 0; cols < this.grid.length; cols++){
                                let properties = {
                                    x: cols,
                                    y: rows,
                                    type: this.grid[rows][cols]
                                }
                                this.tiles[rows].push(properties)
                            }
                        }
                    },
                    moveUp(){ 
                        let futurePositionY = this.heroPosition.y - 1
                        if (this.grid[futurePositionY][this.heroPosition.x] !== 'W'){
                            this.checkForStoryMessage(futurePositionY,this.heroPosition.x);
                            this.checkForMonster(futurePositionY, this.heroPosition.x); 
                            this.checkForItem(futurePositionY,this.heroPosition.x);
                            if(!this.monsterInRoom && this.grid[futurePositionY][this.heroPosition.x] !== 'C'){
                                this.heroPosition.y -= 1;
                            }
                            else if(this.monsterInRoom && this.grid[futurePositionY][this.heroPosition.x] !== 'C'){
                                this.heroPosition.y -= 1;
                            }
                            
                        }         
                        
                    },
                
                    moveRight(){
                        let futurePositionX = this.heroPosition.x + 1
                        if (this.grid[this.heroPosition.y][futurePositionX] !== 'W'){
                            this.checkForStoryMessage(this.heroPosition.y,futurePositionX);
                            this.checkForMonster(this.heroPosition.y, futurePositionX);
                            this.checkForItem(this.heroPosition.y, futurePositionX)
                            this.$refs.hero.updateDirection('right');
                            if(!this.monsterInRoom && this.grid[this.heroPosition.y][futurePositionX] !== 'C'){
                            this.heroPosition.x += 1;
                            }
                            else if(this.monsterInRoom && this.grid[this.heroPosition.y][futurePositionX] !== 'C'){
                                this.heroPosition.x += 1;
                            }
                        }
                    },
                    moveDown(){
                        let futurePositionY = this.heroPosition.y + 1
                        if (this.grid[futurePositionY][this.heroPosition.x] !== 'W'){
                            this.checkForStoryMessage(futurePositionY,this.heroPosition.x);
                            this.checkForMonster(futurePositionY,this.heroPosition.x);
                            this.checkForItem(futurePositionY,this.heroPosition.x);
                            if(!this.monsterInRoom && this.grid[futurePositionY][this.heroPosition.x] !== 'C'){
                            this.heroPosition.y += 1;
                            }
                            else if(this.monsterInRoom && this.grid[futurePositionY][this.heroPosition.x] !== 'C'){
                                this.heroPosition.y += 1;
                            }
                            console.log(this.heroPosition.y, this.heroPosition.x)
                        }

                    },
                    moveLeft(){
                        let futurePositionX = this.heroPosition.x - 1
                        if (this.grid[this.heroPosition.y][futurePositionX] !== 'W'){
                            this.checkForStoryMessage(this.heroPosition.y,futurePositionX);
                            this.checkForMonster(this.heroPosition.y, futurePositionX);
                            this.checkForItem(this.heroPosition.y, futurePositionX);
                            this.$refs.hero.updateDirection('left');
                            if(futurePositionX != -1){
                                if(!this.monsterInRoom && this.grid[this.heroPosition.y][futurePositionX] !== 'C'){
                                this.heroPosition.x -= 1;
                                }
                                else if(this.monsterInRoom && this.grid[this.heroPosition.y][futurePositionX] !== 'C'){
                                    this.heroPosition.x -= 1;
                                }
                            }
                        }
                    },
                

                    checkForMonster(positionY, positionX){
                        let state = ''
                        if (this.grid[positionY][positionX] === 'M'){ //check for M first to avoid going through monsters array each time
                            for (let monster of this.monsters){ //get specific monsterHealth
                                if ((monster.y == positionY) && (monster.x == positionX)){
                                    console.log ('monsterHealth = '+monster.monsterHealth);
                                    state = this.$refs.hero.fightMonster(monster.monsterHealth,'M');
                                }
                            }
                            if(state == 'monsterIsDead'){
                                this.changeTileType(positionY, positionX);
                            }
                        }
                        else if(this.grid[positionY][positionX] === 'B'){
                            let state = this.$refs.hero.fightMonster(50,'B')
                            if(state == 'monsterIsDead'){
                                this.changeTileType(positionY, positionX);
                            }
                            setTimeout(function(){ window.location.reload();},1000);
                            //this.restartGame('winner');
                        }
                    },
                
                    checkForItem(positionY, positionX){
                        if(this.grid[positionY][positionX] === 'C'){
                            this.isHeroInRoom(positionY, positionX)      
                        } 
                    },

                    grabTreasureChest(positionY, positionX){
                        var treasureAudio = new Audio('audio/treasure-audio.mp3')
                        treasureAudio.play()
                        console.log('grabchest')
                        for(let chest of this.chests){
                            if((chest.y == positionY) && (chest.x == positionX)){
                                console.log(positionY,chest.y)
                                console.log(positionX,chest.x)
                                console.log('inne i if sats')
                                this.$refs.hero.updateHeroLevel(chest.amountOfGold);          
                                this.changeTileType(positionY, positionX);
                            }
                            
                        }

                        
                    },

                    spawnTreasureChests(){
                            let generatedAmountOfGold = Math.floor((Math.random() * 150) + 50);
                        for(let i = 0; i < 5; i++){
                            let generatedChestPosition = this.getRandomNumber(this.chestPositions);
                        
                            this.chests[i] = {
                                y: generatedChestPosition.y,
                                x: generatedChestPosition.x,  
                                amountOfGold: generatedAmountOfGold
                            }
                            this.grid[generatedChestPosition.y][generatedChestPosition.x] = 'C'; //places Treasure Chest in the grid
                        }
                    },
                    spawnMonsters(){
                        for(let i = 0; i < 2; i++){
                            let generatedAmountOfHealth = Math.floor((Math.random() * 20) + 10);
                            let generatedMonsterPosition = this.getRandomNumber(this.monsterPositions);
                        
                            this.monsters[i] = {
                                y: generatedMonsterPosition.y,
                                x: generatedMonsterPosition.x,  
                                monsterHealth: generatedAmountOfHealth
                            }
                            this.grid[generatedMonsterPosition.y][generatedMonsterPosition.x] = 'M'; //places a Monster in the grid
                            console.log(this.monsters);
                            
                        }
                    },
                    changeherohealth(newhealth){
                        //console.log(newhealth);
                        this.$emit('changehealth', newhealth);
                    },
                    changeherolevel(newlevel){
                        this.$emit('changelevel', newlevel);
                    },
                    changeheromessage(newmessage){
                        this.$emit('changemessage', newmessage);
                    },
                    changeTileType(positionY, positionX){
                        //console.log('inne i changetiletype')
                        let index = positionY*15+positionX;
                        this.grid[positionY][positionX] = ' ';
                        this.$refs.flatTiles[index].updateTileType();

                    },
                    checkForStoryMessage(y,x){
                        if ((y === 7) && (x === 1) && (this.shownMessage1 == false)){
                        this.$refs.hero.updateMessage('storyMessage1'); 
                        this.shownMessage1 = true;
                        var soundtrack = new Audio('audio/soundtrack-DungeonMaze.mp3')
                        soundtrack.volume = 0.2;
                        soundtrack.play();
                    }
                    if ((y === 9) && (x === 9) && (this.shownMessage2 == false)){
                        this.$refs.hero.updateMessage('storyMessage2'); 
                        this.shownMessage2 = true;
                    }
                    if ((y === 13) && (x === 12) && (this.shownMessage3 == false)){
                        this.$refs.hero.updateMessage('storyMessage3'); 
                        this.shownMessage2 = true;
                    }
                    },
                    getRandomNumber(array) {
                        // randomly pick one position from the array and remove it afterwards so it can't be chosen again
                        for (let i = 0; i < array.length; i++) {
                            let randomNumber = Math.floor(Math.random() * array.length);
                            let chosenPosition = array[randomNumber];
                            array.splice(randomNumber, 1);
                            return chosenPosition; 
                        }
                    },
                    createRooms(){

                        let i= 0; 
                        for(let row = 1; row< 5; row++){
                            for(let col = 11; col <14; col++){
                                this.room1[i] = [col, row]
                                i++; 
                            }
                                    
                        }
                            
                        let i2 = 0;
                        for(let row = 3; row< 6; row++){
                            for(let col = 6; col <8; col++){
                            this.room2[i2]=[col, row];
                            i2++; 
                            }
                        }
                    
                        let i3=0;
                        for(let row = 9; row< 11; row++){
                            for(let col = 3; col <6; col++){
                                this.room3[i3]=[col, row];                 
                                i3++; 
                            }
                        }
                        
                        let i4=0;
                        for(let row =12; row<14; row++){
                            for(let col = 3; col <9; col++){
                                this.room4[i4]=[col, row];
                                i4++; 
                            }
                        }
                        
                        let i5=0;
                        for(let row = 11; row< 14; row++){
                            for(let col = 10; col <14; col++){
                                this.room5[i5]=[col, row];
                                i5++; 
                            }
                        }
                        

                    },
                    isHeroInRoom(positionY, positionX){
                        
                        let match = 0 
                        for (let r of this.room1) {
                            if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                                if(this.isMonsterNearBy(this.room1, positionY, positionX)){
                                    this.$refs.hero.updateMessage('mustDefeatMonster')
                                    match++
                                }
                                else{
                                    this.grabTreasureChest(positionY, positionX)
                                }                        
                            
                            }
                        
                        }
                        for (let r of this.room2) {
                            if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                                if(this.isMonsterNearBy(this.room2, positionY, positionX)){
                                    this.$refs.hero.updateMessage('mustDefeatMonster')
                                    match++
                                }
                                else{
                                    this.grabTreasureChest(positionY, positionX)
                                }
                            
                            }
                            
                        }
                        for (let r of this.room3) {
                            if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                                if(this.isMonsterNearBy(this.room3, positionY, positionX)){
                                    this.$refs.hero.updateMessage('mustDefeatMonster')
                                    match++
                                }
                                else{
                                    this.grabTreasureChest(positionY, positionX)
                                }
                            }
                            
                        }
                        for (let r of this.room4) {
                            if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                                if(this.isMonsterNearBy(this.room4, positionY, positionX)){
                                    this.$refs.hero.updateMessage('mustDefeatMonster')
                                    match++
                                }
                                else{
                                    this.grabTreasureChest(positionY, positionX)
                                }
                                
                            }
                            
                        }
                        for (let r of this.room5) {
                            if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                                if(this.isMonsterNearBy(this.room5, positionY, positionX)){
                                    this.$refs.hero.updateMessage('mustDefeatMonster')
                                    match++
                                }
                                else{
                                    this.grabTreasureChest(positionY, positionX)
                                }
                            }
                            
                        }
                        
                        if(match === 0 ){
                            this.grabTreasureChest(positionY, positionX)
                        }
                        
                        
                    },
                    isMonsterNearBy(room, positionY, positionX){
                    
                        let monsterCount = 0; 
                        this.room = room
                        this.positionY = positionY
                        this.positionX = positionX
                        for (let r of room) {
                            console.log(this.grid[r[1]][r[0]]) 
                            if(this.grid[r[1]][r[0]] === 'M'){
                                monsterCount++          
                            }
                        }
                        if(monsterCount>0){
                            this.monsterInRoom = true
                            return true
                        }
                        else{
                            this.monsterInRoom = false
                            return false
                        }
                        
                    },
                    restartGame(stateOfGame){

                        switch(stateOfGame){
                            case 'dead':
                                this.createMap();
                                break;
                            case 'winner':

                        }
                        
                    }
                    
                    
                },

                created(){
                    this.createMap()         //undefined = this.
                    console.log(this.tiles)
                    console.log(this.flatTiles)
                    //this.spawnTreasureChests()
                    this.createRooms()                                    
                    
                },

                mounted(){
                    
                    window.addEventListener('keydown', (e) => {
                            if(e.keyCode === 37){                                  
                                this.moveLeft()
                            }
                            if(e.keyCode === 38){  
                                e.preventDefault()
                                this.moveUp()                                                               
                            }
                            if(e.keyCode === 39){                                
                                this.moveRight()
                            }
                            if(e.keyCode === 40){     
                                e.preventDefault()                          
                                this.moveDown()
                            }
                            if (event.keyCode === 87) { //w
                                this.moveUp()
                            }
                            else if (event.keyCode === 83) { //s
                                this.moveDown();
                            }
                            else if (event.keyCode === 68) { //d
                                this.moveRight();
                            }
                            else if (event.keyCode === 65) { //a
                                this.moveLeft();
                            }
                    })
                }
            }
        

