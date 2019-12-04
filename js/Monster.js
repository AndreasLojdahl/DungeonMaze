//import Character from './Character.js'

export default{

    props: ['tileArray'],

    template:/*html*/`
    <div class="monster">               
        <div v-for= "tile of tileArray">{{tile.type}}</div>
    </div>
    `,
    
    data() {
        
          return {
              position: 1,
              monsterPos: 
    
        }
        
    },
    computed:{
       
    },
    created(){


    },
    methods:{
        
        isAlive(){
            return true
            console.log(this.tileArray.type)
        },
        // getPosition(){
            
        //     let randIndex = Math.ciel(Math.random()*1 /*tilesArray.length*/)
        //     if(tilesArray(randIndex).type === room ){
        //         position = tilesArray(randIndex)
        //     }else{
        //         this.getPosition
        //     }

        //     return position;

        // }

    },
    mounted(){
       
    }
}