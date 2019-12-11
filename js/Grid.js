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
                ['W',' ','W','W',' ','W',' ',' ',' ',' ',' ','W',' ','W','W'],
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

            monsterPos: [
               [12, 2],
               [6, 4],
               [4, 10],
               [13, 8],
               [7, 13],
               [12, 12],
            ],

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

            backPack:{
                ironSword:'',
                shield:'',
                helmet:'',
                chest:'',
            },
            shownMessage1: false,
        }
    },

    computed:{
        flatTiles(){
            return this.tiles.flat()


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
           
            monsterPos: [
                [12, 2],
                [6, 4],
                [4, 10],
                [13, 8],
                [7, 13],
                [12, 12],
             ],
             itemPosition2:{
                x:4,
                y:13
            },
             
        
    },

    computed:{
        flatTiles(){
            return this.tiles.flat()
        },
    },

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
                this.checkForMonster(futurePositionY, this.heroPosition.x); 
                this.checkForItem(futurePositionY,this.heroPosition.x);
                this.heroPosition.y -= 1;
            }         
              
        },
        moveDown(){
            let futurePositionY = this.heroPosition.y + 1
            if (this.grid[futurePositionY][this.heroPosition.x] !== 'W'){
                this.checkForMonster(futurePositionY,this.heroPosition.x);
                this.checkForItem(futurePositionY,this.heroPosition.x);
                this.heroPosition.y += 1;
            }
            //this.checkForMonster(futurePositionY, this.heroPosition.x);
        },
        moveLeft(){
            let futurePositionX = this.heroPosition.x - 1
            if (this.grid[this.heroPosition.y][futurePositionX] !== 'W'){
                this.checkForMonster(this.heroPosition.y, futurePositionX);
                this.checkForItem(this.heroPosition.y, futurePositionX)
                if(futurePositionX != -1){
                    this.heroPosition.x -= 1;
                }
                
            }
        },
           
        moveRight(){
            let futurePositionX = this.heroPosition.x + 1
            if (this.grid[this.heroPosition.y][futurePositionX] !== 'W'){
                this.checkForMonster(this.heroPosition.y, futurePositionX);
                this.checkForItem(this.heroPosition.y, futurePositionX)
                this.heroPosition.x += 1;
            }
            
            console.log(this.heroPosition.x)
            console.log('Inne i moveRight')
        },

        getMonsterPos(){
            let randIndex = Math.ciel(Math.random()* this.monsterPos.length)
            let position = monsterPos[randIndex]
        },

        checkForMonster(positionY, positionX){
            if (this.grid[positionY][positionX] === 'M'){
                let state = this.$refs.hero.fightMonster(11,'M');
                if(state == 'monsterIsDead'){
                    this.changeTileType(positionY, positionX);
                }
                
            }

            else if(this.grid[positionY][positionX] === 'B'){
                let state = this.$refs.hero.fightMonster(15,'B')
               // setTimeout(function(){ window.location.reload();},1000);
                if(state == 'monsterIsDead'){
                    this.changeTileType(positionY, positionX);
                }
               // this.changeTileType(positionY, positionX);
                //this.loadMap(15,15,this.grid2)
                setTimeout(function(){ window.location.reload();},1000);
            }
            /*
             if (this.grid[positionY][positionX] === 'M'){
                this.$refs.hero.fightMonster(11);
                this.changeTileType(positionY, positionX);  
            }*/

        },
        checkForItem(positionY, positionX){
            if(this.grid[positionY][positionX] === 'C'){
                this.$refs.hero.updateHeroLevel();
                this.changeTileType(positionY, positionX);
            }
        },
        spawnTreasureChests(){
            for(let i = 0; i < 5; i++){
               let generatedAmountOfGold = Math.floor((Math.random() * 150) + 50);
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
             }
         },
        changeherohealth(newhealth){
            console.log(newhealth);
            this.$emit('changehealth', newhealth);
        },
        changeherolevel(newlevel){
            this.$emit('changelevel', newlevel);
        },
        changeheromessage(newmessage){
            this.$emit('changemessage', newmessage);
        },
        changeTileType(positionY, positionX){
            console.log('inne i changetiletype')
            let index = positionY*15+positionX;
            this.grid[positionY][positionX] = ' ';
            this.$refs.flatTiles[index].updateTileType();

        },
        checkForStoryMessage(y,x){
            if ((y === 7) && (x === 1) && (this.shownMessage1 == false)){
               alert("What's this? You just woke up on a hard rocky floor, with a massive headache to boot. Looks like you had too much "+
               "to drink last night... or did you? Close to you, hanging on the wall, you spot a note with a message scribbled on it. "+
               "'If you want to get out alive, you better collect yourself enough gold. Good luck, old friend.' ... Old friend?... You can't help but wonder. "+
               "Who on earth did this to you?"); 
               this.shownMessage1 = true;
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
                    console.log('Room1 ' + this.room1[i])
                    i++; 
                }
                        
            }
                
            let i2 = 0;
            for(let row = 3; row< 6; row++){
                for(let col = 6; col <8; col++){
                   this.room2[i2]=[col, row];
                   console.log('Room2 ' + this.room2[i2])
                   i2++; 
                }
            }
           
            let i3=0;
            for(let row = 9; row< 11; row++){
                for(let col = 3; col <6; col++){
                    this.room3[i3]=[col, row];
                    console.log('Room3 ' + this.room3[i3])
                    i3++; 
                }
            }
            
            let i4=0;
            for(let row =12; row<14; row++){
                for(let col = 3; col <9; col++){
                    this.room4[i4]=[col, row];
                    console.log('Room4 ' + this.room4[i4])
                    i4++; 
                }
            }
            
            let i5=0;
            for(let row = 11; row< 14; row++){
                for(let col = 10; col <14; col++){
                    this.room5[i5]=[col, row];
                    console.log('Room5 ' + this.room5[i5])
                    i5++; 
                }
            }
            

        },
        isHeroInRoom(){
            //console.log('test')
            let match = 0; 
            for (let r of this.room1) {
                if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                    //checkForTreasure(this.room1)
                    console.log('in room 1')
                    match++; 
                  
                }
                
            }
            for (let r of this.room2) {
                if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                    //checkForTreasure(this.room2)
                    console.log('in room 2')
                    match++;
                  
                }
                
            }
            for (let r of this.room3) {
                if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                    //checkForTreasure(this.room3)
                    console.log('in room 3')
                    match++;
                }
                
            }
            for (let r of this.room4) {
                if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                    //checkForTreasure(this.room4)
                    console.log('in room 4')
                    match++;
                  
                }
                
            }
            for (let r of this.room5) {
                if(this.heroPosition.x === r[0] && this.heroPosition.y === r[1]){
                    //checkForTreasure(this.room5)
                    console.log('in room 5')
                    match++;
                  
                }
                
            }
            if(match>0){
                return true
            }
            else{
                return false
            }
        },
         checkForTreasure(room){
             for (let r of room) {
                if (this.grid[r.x][r.y] === 'C'){
                    
                }
             }
            
            
        },

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
        
        window.addEventListener('keyup', (e) => {
                if(e.keyCode === 37){                   
                   this.moveLeft()
                }
                if(e.keyCode === 38){  
                    this.moveUp()
                }
                if(e.keyCode === 39){   
                    this.moveRight()
                }
                if(e.keyCode === 40){
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

