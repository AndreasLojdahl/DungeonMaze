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
            money: 0,
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
        money:{
            deep: true,
            handler(){
                this.updateMoney()
            }
        },
        level:{
            handler(){
                this.updateLevel()
            }
        },
        message:{
            deep:true,
            handler(){
                this.updateMessage()
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

        /*checkChest() {
        this.health++;
        this.level++;
        },*/

       /* heroLevelsUp(){
            level++,
            this.attack++,
            this.health++
        },*/

        fightMonster(monsterHealth,type){

            while (this.health > 0){

                monsterHealth--;
                this.health--;

                if (monsterHealth == 0){
                    this.updateMessage(type);
                    //alert('You have defeated the monster!');
                    return 'monsterIsDead';
                } 
                if (this.health == 0){

                    this.updateMessage('dead');

                    this.$refs.hero.style.setProperty('background','none')
                    setTimeout(function(){ window.location.reload();},1000);
                    //alert("You have died. GAME OVER."); 
                    //window.location.reload();
                }
            }
        },
        updateHeroLevel(){
            this.level += 1;
            this.health += 10;
            this.money += 1000;
        },

        updateHealth(){
           console.log(this.health);
           this.$emit('changehealth', this.health);
            
        },

        updateLevel(){
            
            console.log(this.level);
            this.$emit('changelevel', this.level);
        },
        
        updateMoney(){
            console.log(this.money);
            this.$emit('changemoney', this.money);
         }
     },
     

        updateMessage(type){

            switch(type){
                 case 'M':
                    this.message = 'You have defeated a monster!';
                    this.$emit('changemessage', this.message);
                    break;
                 case 'B':
                     this.message = 'You have defeated the boss, you have won the game!';
                     this.$emit('changemessage', this.message);
                     break;
                 case 'dead':
                     this.message = 'You have died GAME OVER!'
                     this.$emit('changemessage', this.message);
                     break;
                case 'storyMessage1':
                    this.message = "What's this? You just woke up on a hard rocky floor, with a massive headache to boot. Looks like you had too much "+
                    "to drink last night... or did you? Close to you, hanging on the wall, you spot a note with a message scribbled on it. "+
                    "'If you want to get out alive, you better collect yourself enough gold. Good luck, old friend.' ... Old friend?... You can't help but wonder. "+
                    "Who on earth did this to you?"
                    this.$emit('changemessage', this.message);
                     break;
            }
        },
        mounted(){
            this.updatePosition();
            this.updateHealth();
            this.updateLevel();
            this.updateMoney();
        } 

        
    }



   
