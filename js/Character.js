import ItemShop from './ItemShop.js'
import BackPack from './BackPack.js'
export default{

    props:['position'],
    components:{
        ItemShop,
        BackPack
    },

    template:`
    <div ref="shadow" id="shadow-overlay">
        <BackPack ref="backpack"></BackPack>
        <ItemShop @addItem="updateBackPack" ref="itemshop"></ItemShop>
        
        <div :class="rotate" ref="hero" id="character"></div>
          
    </div>
    `,
    
    data() {
        return {
            x: 0,
            y: 0,
            health: 15,
            attack: 10,
            level: 0,
            rotate: 'right',
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
        },
        /*backPack:{
            deep: true,
            handler(){
                this.updateBackPack()
            }
        }*/

    },

    methods:{

        updatePosition(){
            var step = new Audio('audio/step-audio.mp3')
            step.play();

            this.$refs.hero.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`)
            //console.log(this.position.x)
       
            this.$refs.hero.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`)
           // console.log(this.position.y)
            
           let isTorchEquipped = this.$refs.backpack.isTorchEquipped();
           if(isTorchEquipped == true){
            this.$refs.shadow.style.setProperty('background', 
            `radial-gradient(circle at calc(${this.position.x} * 6.6667%) calc(${this.position.y} * 6.6667%), 
            transparent, black 50%, black 80%, black, black)`)
           }
           else{
            this.$refs.shadow.style.setProperty('background', 
            `radial-gradient(circle at calc(${this.position.x} * 6.6667%) calc(${this.position.y} * 6.6667%), 
            transparent, black, black, black, black)`)
           }
           
        },
        
        updateBackPack(typeOfItem,costOfItem){

            switch(typeOfItem){

                case 'sword':
                    this.$refs.backpack.updateBackpack('sword',costOfItem);
                    break;
                case 'shield':
                    this.$refs.backpack.updateBackpack('shield',costOfItem);
                    break;
                case 'torch':
                    this.$refs.backpack.updateBackpack('torch',costOfItem);
                    break;
                case 'potion':
                    this.$refs.backpack.updateBackpack('potion',costOfItem);
                    this.health += 5;
                    break;
            }
        },

        fightMonster(monsterHealth,type){

            var punch = new Audio('audio/punch-audio.mp3')
            punch.play();

            while (this.health > 0){

                let isSwordEquipped = this.$refs.backpack.isItemEquipped('sword');
                let isShieldEquipped = this.$refs.backpack.isItemEquipped('shield');

                if(isSwordEquipped == true){
                    monsterHealth = monsterHealth -2;
                }else{
                    monsterHealth--;
                }
                if(isShieldEquipped == true){
                    this.health--;
                }
                else{
                    this.health = this.health -2;
                }
                if (this.health <= 0){

                    this.updateMessage('dead');

                    this.$refs.hero.style.setProperty('background','none')
                    setTimeout(function(){ window.location.reload();},1000);
                    //this.$emit('restart','dead')
                    
                    //alert("You have died. GAME OVER."); 
                    //window.location.reload();
                }
                
                if (monsterHealth <= 0){
                    this.updateMessage(type);
                    //alert('You have defeated the monster!');
                    return 'monsterIsDead';
                } 
                
            }
        },
        updateHeroLevel(gold){
            this.level += 1;
            this.health += 10;
           
            this.$refs.backpack.updateBackpack('gold',gold);
           
            
        },

        updateHealth(){
          // console.log(this.health);
           this.$emit('changehealth', this.health);
            
        },

        updateLevel(){
            
            //console.log(this.level);
            this.$emit('changelevel', this.level);

        },
        updateShopVisability(){
            this.$refs.itemshop.updateShopVis();
        },

        updateDirection(newDirection){

            if(newDirection !== this.direction){
                this.rotate = newDirection;
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
                     this.message = 'You have died. GAME OVER!'
                     this.$emit('changemessage', this.message);
                     break;
                case 'mustDefeatMonster':
                     this.message = 'There is a monster nearby! Defeat it to get to the treasure.'
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
        this.$refs.itemshop.setBackPack(this.$refs.backpack);
        //this.updateLevel();
    } 

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
