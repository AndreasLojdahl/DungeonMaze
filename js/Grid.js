import Tile from './Tile.js'
import Character from './Character.js'
import Chest from './Chest.js'
import Monster from './Monster.js'
import Finalboss from './Finalboss.js'

export default{
    components:{
        Tile,
        Character,
        Chest,
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
        @changehealth="changeherohealth" 
        v-bind:position="heroPosition">
        </Character>

        <Chest 
        ref="chest" 
        @changehealth="changeherohealth" 
        v-bind:position1="heroPosition">
        </Chest>

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
                [' ',' ','M',' ',' ',' ',' ',' ',' ',' ','W','W',' ',' ','W'],
                ['W',' ','W','W','W','W','W','W','W',' ','W','W',' ',' ','W'],
                ['W',' ','W',' ',' ',' ','W','W',' ',' ',' ','W','W','W','W'],
                ['W',' ',' ',' ',' ',' ','W',' ',' ','W',' ',' ',' ','W','W'],
                ['W',' ','W','W','W','W','W',' ','W','W','W','W',' ',' ','W'],
                ['W',' ','K','W','W',' ',' ',' ',' ','W','W','W',' ',' ','W'],
                ['W','W','W','W',' ',' ',' ',' ',' ','W',' ',' ',' ',' ','W'],
                ['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],
            ],
            
            // W = Wall
            // M = Monster
            // B = Boss
            // T = Treasure Chest
            // K = Key?

            heroPosition:{
                x:0,
                y:7
            },

            monsterPos: [
               [12, 2],
               [6, 4],
               [4, 10],
               [13, 8],
               [7, 13],
               [12, 12],
            ],

            chestPositions: [
                [2,12],
                [2,2],
                [10,4],
                [12,4],
                [4,13],
                [10,13],
                [7,3],
                [11,1],
                [3,9],
                [8,13]
            ],

            chests: [],

            backPack:{
                ironSword:'',
                shield:'',
                helmet:'',
                chest:'',
            }
        }
    },

    computed:{
        flatTiles(){
            return this.tiles.flat()
        }
     },

     methods:{
         createMap (heigth,width){
             for(let rows = 0; rows < heigth; rows++){
                 this.tiles[rows] = [];
                 for(let cols = 0; cols < width; cols++){
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
             this.heroPosition.y -= 1;
             }         
             this.checkForMonster(futurePositionY, this.heroPosition.x);   
         },
         moveDown(){
             let futurePositionY = this.heroPosition.y + 1
             if (this.grid[futurePositionY][this.heroPosition.x] !== 'W'){
                 this.heroPosition.y += 1;
             }
             this.checkForMonster(futurePositionY, this.heroPosition.x);
         },
         moveLeft(){
             let futurePositionX = this.heroPosition.x - 1
             if (this.grid[this.heroPosition.y][futurePositionX] !== 'W'){
                 this.heroPosition.x -= 1;
             }
             this.checkForMonster(this.heroPosition.y, futurePositionX);
         },
         moveRight(){
             let futurePositionX = this.heroPosition.x + 1
             if (this.grid[this.heroPosition.y][futurePositionX] !== 'W'){
             this.heroPosition.x += 1;
             }
             this.checkForMonster(this.heroPosition.y, futurePositionX);
         },
         getMonsterPos(){
             let randIndex = Math.ciel(Math.random()* this.monsterPos.length)
             let position = monsterPos[randIndex]
         },
         checkForMonster(positionY, positionX){
            if (this.grid[positionY][positionX] === 'M'){
                 this.$refs.hero.fightMonster(11);
                 this.grid[positionY][positionX] === ' '
            }
         },
         changeherohealth(newhealth){
            console.log(newhealth);
            this.$emit('changehealth', newhealth);
        }, 
    },
 
     created(){
        this.createMap(15,15)         //undefined = this.
        console.log(this.tiles)
        console.log(this.flatTiles)
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
        })
    
    }
        

}