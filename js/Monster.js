//import Character from './Character.js'

export default{


    props: ['position'],

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
     

    },
    mounted(){
       
    }
}