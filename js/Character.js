export default{

    props:['position'],

    template:`

    <div ref="hero" class="character"></div>
    `,
    
    data() {
        return {
            x: 0,
            y: 0
        }
    },
    computed:{
       
    },
    methods:{
        moveUp: function(){
            this.position-= 50
        },
        moveDown: function(){
            this.position+= 50
        },
        moveLeft: function(){
            console.log("test");
            this.position2-= 50
        },
        moveRight: function(){
            this.position2+= 50
        },
    },
    mounted(){
        //this.$refs.character.style.setProperty('background-color', 'blue')
        this.$refs.hero.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`)
        this.$refs.hero.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`)
    }
    

}