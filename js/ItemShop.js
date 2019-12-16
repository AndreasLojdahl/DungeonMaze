export default{

    props:['backPack'],

    template:`
    <div class="item-shop-window">
        <div class="buttons">
            <button class="shop-button" @click="updateShopVis">Item Shop</button>
            
            
        </div>
    
         <div :class="shopwindow" class="item-shop" ref="shop">
            <div class="shop-header">Item Shop</div>
            <div class="item-section">
                <div class="sword-option">
                    <div class="sword" @click="addSword"></div>
                    <div class="sword-text">Ironsword</div>
                    <div class="shop-gold-text">15 gold</div>
                </div>
                <div class="torch-option">
                    <div class="torch" @click="addTorch"></div>
                    <div class="torch-text">Torch</div>
                    <div class="shop-gold-text">30 gold</div>
                </div>
                <div class="shield-option">
                    <div class="shield" @click="addShield">Sword</div>
                    <div class="shield-text">Shield</div>
                    <div class="shop-gold-text">10 gold</div>
                </div>
                <div class="health-option">
                    <div class="health-potion" @click="addHp"></div>
                    <div class="health-text">Health Potion</div>
                    <div class="shop-gold-text">5 gold</div>
                </div>
            </div>

        </div>
     
    </div>  
    `,

    data(){
        return{

            shopwindow:'hideShop',

            sword: 0,
            shield: 0,
            torch: 0,
            potion: 0,
            heroGold: 0,  

            itemList:{
                potion: 5,
                shield: 10,
                sword: 15,
                torch: 30,
            }
                
            
        }
    },
    methods:{

        updateShopVis(){
            if(this.shopwindow == 'hideShop'){
                this.shopwindow = 'showShop';
            }
            else if(this.shopwindow == 'showShop'){
                this.shopwindow = 'hideShop';
            }
        },

        addSword(){
              
            if(this.sword < 1){
                if(this.heroGold > this.itemList.sword){
                    this.sword++;
                    this.$emit('addItem','sword',this.itemList.sword);
                    this.heroGold = this.heroGold - this.itemList.sword;
                }        
            }
            
        },
        addShield(){
            if(this.shield < 1){
                if(this.heroGold > this.itemList.shield){
                    this.shield++;
                    this.$emit('addItem','shield',this.itemList.shield);
                    this.heroGold = this.heroGold - this.itemList.shield;
                }
                
            }
            
            //this.backPack.push(this.shield);
        },
        addTorch(){
            if(this.torch < 1){
                if(this.heroGold > this.itemList.torch){
                    this.torch++;
                    this.$emit('addItem','torch',this.itemList.torch);
                    this.heroGold = this.heroGold - this.itemList.torch;
                }
                
            }
            
            //this.backPack.push(this.shield);
        },
        addHp(){
            if(this.potion < 4){
                if(this.heroGold > this.itemList.potion){
                    this.potion++;
                    this.$emit('addItem','potion',this.itemList.potion);
                    this.heroGold = this.heroGold - this.itemList.potion;
                }
                
            }
            
            //this.backPack.push(this.healthPotion);
        },

        updateHeroGold(amountOfGold,action){

            switch(action){
                case 'add':
                    this.heroGold += amountOfGold;
                    break;
                case 'remove':
                    this.heroGold -= amountOfGold;
                    break;
                }
            
        }
    }
}