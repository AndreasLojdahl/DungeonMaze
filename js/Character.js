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
        <ItemShop @addItem="updateBackPack" @transaction="updateMessage" ref="itemshop"></ItemShop>
        
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
            money: 0,
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
        

/* heroLevelsUp(){
            level++,
            this.attack++,
            this.health++
        },*/
        // checkChest() {
        
        // this.heroLevelsUp()
        // }
            
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
        fightFinalBoss(finalBossHealth,type){

            while (this.health > 0){

                finalBossHealth--;
                this.health--;

                if (finalBossHealth == 0 && this.shownMessage2 == false ){
                    this.updateMessage('storyMessage4');
                
                   
                    
                    return 'finalBossIsDead';

                    
                } 
                 else if (finalBossHealth == 0) {
                     this.updateMessage('storyMessage5');
                
                    alert("Your winner");

                    alert("You have a highscore of" + this.money);
                    
                    return 'finalBossIsDead';

                     
                    
                 } 
                else if (this.health == 0){

                    this.updateMessage('storyMessage6');

                    this.$refs.hero.style.setProperty('background','none')
                    setTimeout(function(){ window.location.reload();},1000);
                    
                    //alert("You have died. GAME OVER."); 
                    //window.location.reload();
                }
           
            }
        },
        // updateHeroLevel(){
        updateHeroLevel(gold){
            this.level += 1;
            this.health += 10;
           
            this.$refs.backpack.updateBackpack('gold',gold);
           
            
            this.money += this.health * 10;
        },

        updateHealth(){
          // console.log(this.health);
           this.$emit('changehealth', this.health);
            
        },
        
        updateMoney(){
            console.log(this.money);
            this.$emit('changemoney', this.money);
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
                    this.message = 'You have defeated a Fishmen!';
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
                    this.message = "You walk down the stares of a large staircase. You wonder if this is the right place. Suddenly you remember your mission. "+
                    "I was payed to exterminate the Monster in this place " + "the Knight thought. " + "Its supposed to be this Arthro fella " + "Strange when i think this name I feel sadness. " 
                    + "The Knight looked around and saw several other monsters. He quickly hid himself. " + "What a bunch of fishmen fellas " + "It semmed like the monsters had been corrupted by something " + "I need to find the source of this curse and destroy it. "
                    this.$emit('changemessage', this.message);
                    break;
                
                    case 'storyMessage2':
                    this.message = "Inside in the Chest the Knight finds a strange neil of sorts. " + "What is this it lacks the sharpness to be a weapon and it has this strange aura the Knight thought. " 
                    + "Seeing the Neil though triggers a memory in the Knight and he suddenly remembers " + "This was once my home i used to live with my father. " + "But one day he became the bearer of a infection or a curse that slowly corrupted his mind. "
                    + "That was then he used a fragment of the curses power to wipe my memory of him and this place. " + "Man what a plot twist the knight thought"
                    this.$emit('changemessage', this.message);
                    break;
                    
                    case 'storyMessage3':
                    this.message ="Wow i found the monster i most be going in the right direction. " + "As the Knight entered the chamber he sensed that the source of the curse was close. " + "And there he was Arthro the source of the curse. "
                    + "Arthro had sealed himself in this champer to seal away the curse forever but i seems that he has reached his limit. " + "If something wasnt done soon the curse would spead beyond the maze. " + "Suddenly a voice told the knight something important. "
                    + "You need atleast 70 health to defeat him! "
                     
                    this.$emit('changemessage', this.message);
                    break;   
                    
                    case 'storyMessage4':
                    this.message = "The knight swung forward and impaled the puppet of the curse. " + "As the corpse layed there the Knight suddenly felt hollow like his emotions and his mind were slowly fading. "
                    this.$emit('changemessage', this.message);
                    break;
                    
                    case 'storyMessage5':
                    this.message = "As the Knight prepared to deal the killing blow against the puppet that was once his father." + "suddenly the neil he found earlier acted on its own accord "
                    + "its swong into Arthro and like a anchor dragged the core of the curse out. now it could be destroyed" + "the Knight thrusted fowrad at the curse with his sword and destroyed it. suddenly the celling started to collapse "
                    + "I need to escape here before i am crushed as well the knight thought " + "The knight looked att the blocked intrance that was his home but he felt no saddness only relief that it was finally over"
                    this.$emit('changemessage', this.message);
                    break;

                    case 'storyMessage6':
                    this.message = "The Knight's body hit the floor as his face turned pale. " + "Are you still counting my deaths player! "
                    this.$emit('changemessage', this.message);
                    break;
                            
                // case 'storyMessage2':
                //     this.message = "You find yourself at a crossroads. Left or right? But before you make the decision, you spot another note on the wall right in "+
                //     "front of you. 'DO NOT GO RIGHT. RIGHT IS NEVER THE RIGHT PATH. WHATEVER YOU DO, DO NOT GO RIGHT.' At the bottom of the note, a tiny scribble: "+
                //     "If you do go right... don't touch the snake."
                //     this.$emit('changemessage', this.message);
                //     break;
                case 'afford':
                    this.message = 'You have bought an Item!'
                    this.$emit('changemessage', this.message);
                    break;
                case 'notAfford':
                    this.message = "You don't have enough gold!"
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
        this.updateLevel();
        this.updateMoney();
        this.$refs.itemshop.setBackPack(this.$refs.backpack);
        //this.updateLevel();
    } 

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}