//import Character from './Character.js'

export default{


    props: ['position'],

    template:/*html*/` 
    <div ref="monster" class="monster">               
        
    </div>
    `,
    
    data() {
        
          return {
              position: 1,
              health: 9,
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
     

    },
    mounted(){
       
    }
}