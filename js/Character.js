export default{

    props:['position','backPack'],

    template:`
    <div ref="shadow" id="shadow-overlay">
        <div :class="rotate" ref="hero" id="character"></div>
    </div>
    `,
    
    data() {
        return {
            x: 0,
            y: 0,
            health: 15,
            attack: 10,
            level: 1,
            rotate: 'right'
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
            this.$refs.hero.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`);
            console.log(this.position.x);
       
            this.$refs.hero.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`);
            console.log(this.position.y);

            this.$refs.shadow.style.setProperty('background', 
            `radial-gradient(circle at calc(${this.position.x} * 6.6667%) calc(${this.position.y} * 6.6667%), 
            transparent, black 40%, black 90%, black, black)`)
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
        },

        updateHealth(){
           console.log(this.health);
           this.$emit('changehealth', this.health);
            
        },

        updateLevel(){
            
            console.log(this.level);
            this.$emit('changelevel', this.level);
        },

        updateDirection(newDirection){
            console.log('inne i updateDirection')
            if(newDirection !== this.direction){
                this.rotate = newDirection;
            }
           

            /*switch(newDirection){
                case 'right':
                    console.log('inne i rgiht direct')
                        this.direction = 'right';
                        break;
                case 'left':
                        this.direction = 'left';
                        break;
            }*/
          
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
                     this.message = 'You have died. GAME OVER!'
                     this.$emit('changemessage', this.message);
                     break;
                case 'storyMessage1':
                    this.message = "What's this? You just woke up on a hard rocky floor, with a massive headache to boot. Looks like you had too much "+
                    "to drink last night... or did you? Close to you, hanging on the wall, you spot a note with a message scribbled on it. "+
                    "'If you want to get out alive, you better collect yourself enough gold. Good luck, old friend.' ... Old friend?... You can't help but wonder. "+
                    "Who on earth did this to you?"
                    this.$emit('changemessage', this.message);
                    break;
                case 'storyMessage2':
                    this.message = "You find yourself at a crossroads. Left or right? But before you make the decision, you spot another note on the wall right in "+
                    "front of you. 'DO NOT GO RIGHT. RIGHT IS NEVER THE RIGHT PATH. WHATEVER YOU DO, DO NOT GO RIGHT.' At the bottom of the note, a tiny scribble: "+
                    "If you do go right... don't touch the diamond."
                    this.$emit('changemessage', this.message);
                    break;
            }
        }
    },
    async mounted(){

        await sleep(10)  // 1000 = 1 second
        this.updateDirection();
        this.updatePosition();
        this.updateHealth();
        //this.updateLevel();
    } 

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
