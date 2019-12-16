import ItemShop from './ItemShop.js'
import BackPack from './BackPack.js'
export default{

    props:['position'],
    components:{
        ItemShop,
        BackPack
    },

    template:`
    <div>
        <BackPack ref="backpack"></BackPack>
        <ItemShop @addItem="updateBackPack" ref="itemshop"></ItemShop>
        <div :class="rotate" ref="hero" id="character"></div>
    </div>
    
    <!--<div ref="shadow" id="shadow-overlay">-->
       <!-- <div :class="rotate" ref="hero" id="character"></div>-->
    <!--</div>-->
    `,
    
    data() {
        return {
            x: 0,
            y: 0,
            health: 15,
            //attack: 10,
            //level: 1,
            rotate: 'right',

            

           /* backPack:{
                
                sword: 0,
                shield: 0,
                torch: 0,
                healtpotion: 0,
                gold: 0,

            }*/

         
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
        backPack:{
            deep: true,
            handler(){
                this.updateBackPack()
            }
        }

    },

    methods:{

        updatePosition(){
            this.$refs.hero.style.setProperty('left', `calc(${this.position.x} * 6.6667%)`);
            console.log(this.position.x);
       
            this.$refs.hero.style.setProperty('top', `calc(${this.position.y} * 6.6667%)`);
            console.log(this.position.y);

            //this.$refs.shadow.style.setProperty('background', `radial-gradient(circle at calc(${this.position.x} * 6.6667%) calc(${this.position.y} * 6.6667%), transparent, black 40%, black, black, black)`)
            console.log(this.$refs.shadow);
        },

        /*updateGold(goldAmount){
            this.gold = this.gold + goldAmount;
        },*/

        updateBackPack(typeOfItem,costOfItem){

            switch(typeOfItem){
                case 'sword':
                    console.log('inne i sword')
                    //this.backPack.sword += 1;
                    this.$refs.backpack.updateBackpack('sword',costOfItem);
                    //this.backPack.gold = this.backPack.gold - costOfItem;
                    
                    
                    console.log(this.backPack.sword)
                    //this.backpack.push(item)
                    break;
                case 'shield':
                    //this.backPack.shield += 1;
                    this.$refs.backpack.updateBackpack('shield',costOfItem);
                    //this.backPack.gold = this.backPack.gold - costOfItem;
                    
                    //this.backpack.push(item)
                    break;
                case 'torch':
                    //this.backPack.torch += 1;
                    this.$refs.backpack.updateBackpack('torch',costOfItem);
                    //this.backPack.gold = this.backPack.gold - costOfItem;
                    

                    //this.backpack.push(item)
                    break;
                case 'potion':
                    console.log('inne i potion')
                    //this.backPack.potion += 1;
                    this.$refs.backpack.updateBackpack('potion',costOfItem);
                    //this.backPack.gold = this.backPack.gold - costOfItem;
                    
                    //this.backpack.push(item)
                    this.health += 5;
                    break;
            }
            

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
                
                if (monsterHealth < 0){
                    this.updateMessage(type);
                    //alert('You have defeated the monster!');
                    return 'monsterIsDead';
                } 
                if (this.health < 0){

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
            //this.backPack.gold += 20;
            this.$refs.backpack.updateBackpack('gold',20);
           // this.$refs.itemshop.updateItemShopGold(20,'add');
            
        },

        updateHealth(){

           console.log(this.health);
           this.$emit('changehealth', this.health);
            
        },

        updateLevel(){
            
            console.log(this.level);
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
