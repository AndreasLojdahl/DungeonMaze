import Monster from './Monster.js'

export default{

    props:['position'],

    template:`

    <div ref="hero" class="character"></div>
    `,
    
    data() {       
        return {
          
    
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