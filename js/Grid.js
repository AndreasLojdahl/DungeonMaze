import Tile from './Tile.js'
import Character from './Character.js'
import Monster from './Monster.js'

export default{
    components:{
        Tile,
        Character,
        Monster
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

        <div class="buttons-div">

        <button v-on:click="moveLeft">Left</button>
        <button v-on:click="moveUp">Up</button>
        <button v-on:click="moveDown">Down</button>
        <button v-on:click="moveRight">Right</button></button>
        </div>
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
                [' ',' ','M',' ',' ',' ','M',' ',' ',' ','W','W',' ',' ','W'],
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
        },
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
               /* if(this.grid[this.heroPosition.y][futurePositionX] == 'M'){
                    let index = this.heroPosition.y*15+futurePositionX;
                    this.grid[this.heroPosition.y][futurePositionX] = ' ';
                    console.log(this.grid[this.heroPosition.y][futurePositionX])
                    //this.flatTiles[index].type = ' ';
                    console.log(this.flatTiles[index].type);
                    this.$refs.flatTiles[index].updateTileType();
                    console.log(this.$refs.flatTiles[index].properties.type);
                }*/
            //this.heroPosition.x -= 1;
            //console.log(this.flatTiles[0]);
            //console.log(this.$refs.foo0);
            //this.flatTiles[0].type = ' ';
            //this.tiles[0][0].updateTileType();
            }
            this.checkForMonster(this.heroPosition.y, futurePositionX);
        },

        moveRight(){
            let futurePositionX = this.heroPosition.x + 1
            if (this.grid[this.heroPosition.y][futurePositionX] !== 'W'){
            this.heroPosition.x += 1;
            }
            this.checkForMonster(this.heroPosition.y, futurePositionX);
            
            console.log(this.heroPosition.x)
            console.log('Inne i moveRight')
        },
        getMonsterPos(){
            let randIndex = Math.ciel(Math.random()* this.monsterPos.length)
            let position = monsterPos[randIndex]
        },
        checkForMonster(positionY, positionX){
             if (this.grid[positionY][positionX] === 'M'){
                this.$refs.hero.fightMonster(11);
                let index = positionY*15+positionX;
                this.grid[positionY][positionX] = ' ';
                //console.log(this.grid[this.position.y][futurePositionX])
                //this.flatTiles[index].type = ' ';
                //console.log(this.flatTiles[index].type);
                this.$refs.flatTiles[index].updateTileType();
                console.log(this.$refs.flatTiles[index].properties.type);
             }
        },
        changeherohealth(newhealth){
            console.log(newhealth);
            this.$emit('changehealth', newhealth);
        }
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