import Tile from './Tile.js'
import Character from './Character.js'
import Chest1 from './Chest.js'
import Chest2 from './Chest.js'
    export default{
    components:{
        Tile,
        Chest1,
        Chest2,
        Character
    },

    
    

    
    template:`
    
    
    <div class="grid-layout">
       
       <tile 
       v-for="(tile, i) of flatTiles"
        v-bind:properties="tile"
        v-bind:key="'tile' + i + tile.x + tile.y"
        v-bind:class="'tile-type-' + tile.type"
        ></tile>
        
    
        
        <Character v-bind:position="heroPosition"></Character>
        <Chest1 v-bind:position="itemPosition1"></Chest1>
        <Chest2 v-bind:position="itemPosition2"></Chest2>
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
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','W','W',' ',' ','W'],
                ['W',' ','W','W','W','W','W','W','W',' ','W','W',' ',' ','W'],
                ['W',' ','W',' ',' ',' ','W','W',' ',' ',' ','W','W','W','W'],
                ['W',' ',' ',' ',' ',' ','W',' ',' ','W',' ',' ',' ','W','W'],
                ['W',' ','W','W','W','W','W',' ','W','W','W','W',' ',' ','W'],
                ['W',' ',' ','W','W',' ',' ',' ',' ','W','W','W',' ',' ','W'],
                ['W','W','W','W',' ',' ',' ',' ',' ','W',' ',' ',' ',' ','W'],
                ['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],
            ],
            
            itemPosition1:{
                x:12,
                y:4
            },

            itemPosition2:{
                x:4,
                y:13
            },
            
            heroPosition:{
                x:0,
                y:7
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
            this.heroPosition.y += 1;
            console.log('Inne i moveUp')
        },
        moveDown(){
            this.heroPosition.y -= 1;
        },
        moveLeft(){
            this.heroPosition.x += 1;
        },
        moveRight(){
            this.heroPosition.x -= 1;
        },

        
     
       
    },

    

    created(){
       
        this.createMap(15,15)         //undefined = this.
        
        console.log(this.tiles)

        console.log(this.flatTiles)
    },
    mounted(){

    }

}