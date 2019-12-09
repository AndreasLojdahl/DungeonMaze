export default{

    props: ['properties','type'],
    
    template:`
       <!-- <button v-on:click="logPosition" class="tile"></button>     v-on:click = @click-->
        <div class="tile" v-on:click="logPosition"> </div>
    `,

    data(){
        return{
            
        }
    },

    methods: {
        logPosition(){
            console.log(this.properties.x, this.properties.y, this.properties.type)       
        },
    }, 

    mounted(){
       /* if(this.properties.type === 'W') {
            this.$refs.tile.style.setProperty('background-color', 'blue')
        }*/
    }
}