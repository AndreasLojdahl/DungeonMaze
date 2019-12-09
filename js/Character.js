import Monster from './Monster.js'
import Hero from './Hero.js'
import Finalboss from './Finalboss.js'

export default{

    props:['position'],

    template:`

    <div ref="hero" class="character"></div>
    `,
    
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    watch:{
        position:{
            deep: true,
            handler(){
                this.updatePosition()
            }
        }
    },
    methods:{
        updatePosition(){
            this.$refs.hero.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`)
        console.log(this.position.x)
       
        this.$refs.hero.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`)
        console.log(this.position.y)
        }
       
    
        

    },
    mounted(){
        this.updatePosition();
       
    }
    

}