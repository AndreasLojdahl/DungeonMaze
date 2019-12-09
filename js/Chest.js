export default{

    props:['chestPosition'],

    template:`
    <div ref="item1" class="chest1"></div>
    `,
    
    data() {
        return {
            x: 0,
            y: 0,
            amountOfGold: 0,
        }
    },

    watch:{
        position:{
            deep: true,
            handler(){
                this.updatePosition()
            }
        },
    },

    methods:{
        updatePosition(){
            this.$refs.item1.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`)
            console.log(this.position.x)
       
            this.$refs.item1.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`)
            console.log(this.position.y)
        },

    },

    mounted(){
        this.updatePosition();       
    }
}
