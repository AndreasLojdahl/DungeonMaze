export default{

    props:['position'],

    template:`

    <div ref="hero" class="character"></div>
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
        this.$refs.hero.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`)
        this.$refs.hero.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`)
    }
    

}