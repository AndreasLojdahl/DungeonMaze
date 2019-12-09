import Character from './Character.js'

export default{

    props:['position'],

    template:`

    <div ref="arthro" class="finalboss"></div>
    
    `,
    
    data() {       
        return {
          
    
        }
    },
    computed:{
       
    },
    methods:{
       
        
        

    },
    mounted(){
        //this.$refs.character.style.setProperty('background-color', 'blue')
        this.$refs.arthro.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`)
        this.$refs.arthro.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`)
        
    }
}