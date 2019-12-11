import Monster from './Monster.js'
import Hero from './Hero.js'
import Finalboss from './Finalboss.js'


export default{

    props:['position','backPack'],

    template:`
    <div ref="hero" class="character"></div>
    `,
    
    data() {
        return {
            x: 0,
            y: 0,
            health: 15,
            attack: 10,
            level: 1,
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
        },
        level:{
            handler(){
                this.updateLevel()
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

        checkChest() {
        this.heroLevelsUp()
        },

        heroLevelsUp(){
            this.level++,
            this.health++
        },

        fightMonster(monsterHealth){
            while (this.health > 0){
                monsterHealth--;
                this.health--;
                if (monsterHealth == 0){
                    alert("You defeated the monster!");  
                    return;
                } 
                if (this.health == 0){
                    alert("You have died. GAME OVER."); 
                    window.location.reload();
                }
            }
        },
       updateHealth(){
           console.log(this.health);
           this.$emit('changehealth', this.health);
        
        },
        updateLevel(){
            console.log(this.level);
            this.$emit('changelevel', this.level);
        }, 
    },
    mounted(){
        this.updatePosition();
        this.updateHealth();
        this.updateLevel();
        }
    }
    }}
