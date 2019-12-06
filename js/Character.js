import Monster from './Monster.js'

export default{

    props:['position'],

    template:`

    <div ref="hero" class="character"></div>
    `,
    
    data() {
        return {
            x: 0,
            y: 0,
            health: 15,
        }
    },
    watch:{
        position:{
            deep: true,
            handler(){
                this.updatePosition()
            }
        },
        health:{
            handler(){
                this.updateHealth()
            }
        }
    },
    methods:{
        updatePosition(){
            this.$refs.hero.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`)
        console.log(this.position.x)
       
        this.$refs.hero.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`)
        console.log(this.position.y)
        },

        fightMonster(monsterHealth){
            while (this.health > 0){
                monsterHealth--;
                this.health--;
                if (monsterHealth >= 0){
                    alert("You defeated the monster!");  
                } 
                if (this.health == 0){
                    alert("You have died. GAME OVER."); 
                }
            }
        },
       updateHealth(){
           this.$emit('changeHealth', this.health);
       }
    
        

    },
    mounted(){
        this.updatePosition();
       
    }
    

}