export default{

    props: ['properties'],
    template:`
       <!-- <button v-on:click="logPosition" class="tile"></button>     v-on:click = @click-->
        <div class="tile" v-on:click="logPosition"> </div>
    `,
    data(){
        return{
            type: ' '
        }
      
    },
    watch:{
        properties:{
            deep: true,
            handler(){
                this.updateTileType()
            }
        }
    },
    
    methods: {
        logPosition(){
            console.log(this.properties.x, this.properties.y, this.properties.type)
            
            
            
        },

        updateTileType(){
            if(this.properties.type === 'I'){
                this.properties.type = ' ';
            }
        }

       

      
    }, 
    mounted(){
       /* if(this.properties.type === 'W') {
            this.$refs.tile.style.setProperty('background-color', 'blue')
        }*/
        
    }
}