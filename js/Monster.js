import Character from './Character.js'


export default{

    props: ['position'],

    template:/*html*/` 
    <div ref="monster" class="monster">               
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
        this.$refs.monster.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`)
        this.$refs.monster.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`)
    }
}