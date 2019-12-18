export default{

    props:['position'],

    template:`

    <div ref="item1" class="chest1"></div>
   
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
        this.$refs.item1.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`)
        this.$refs.item1.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`)
        
    }
}
