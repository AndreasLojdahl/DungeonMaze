export default{

    props: ['properties'],
    template:`
       <!-- <button v-on:click="logPosition" class="tile"></button>     v-on:click = @click-->
        <div ref="tile" class="tile visible hidden" v-on:click="logPosition"> </div>
    `,

    data(){
        return{
            type: ' ',
            visible: false,
            hidden: true,
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
                this.$refs.tile.style.setProperty('background', 'none')
                this.properties.type = ' ';
            }
            else if( this.properties.type === 'M'){
                this.$refs.tile.style.setProperty('background', 'none')
                this.properties.type = ' ';
            }
            else if(this.properties.type === 'C'){
                this.$refs.tile.style.setProperty('background', 'none')
                this.properties.type = ' ';
            }
        },

        updateTileVisibility(tileIndex){
                this.tileIndex.hidden = false;
                this.tileIndex.visible = true;
        }
    }, 

    mounted(){
       /* if(this.properties.type === 'W') {
            this.$refs.tile.style.setProperty('background-color', 'blue')
        }*/
        
    }
}