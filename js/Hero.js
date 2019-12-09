import Character from './Character.js'

export default{


    props: ['Stats'],

    template:/*html*/` 
    <div class="Hero">               
        
    </div>
    `,
    
    data() {
        
          return {
              hp: 10,
              attack: 3,
              level: 1,
    
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

        heroLevelsUp(){
            level++,
            attack++
        },
    

    
     

    },
    mounted(){
       
    }
}