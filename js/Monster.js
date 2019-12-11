import Character from './Character.js'


export default{

    props: ['monsterPosition'],

    template:/*html*/` 
    <div ref="monster" class="monster">               
    </div>
    `,
    
    data() {
          return {
              x:0,
              y:0
              
    
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
        this.setMonsterPosition()
    }
}