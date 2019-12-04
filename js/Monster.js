//import Character from './Character.js'

export default{


    template:/*html*/` 
    <div class="monster">               
        
    </div>
    `,
    
    data() {
        
          return {
              position: 1,
    
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