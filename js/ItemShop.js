export default{

    //props:['backPack'],

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
                    <div class="shop-gold-text">{{itemList.sword}} gold</div>
                </div>
                <div class="torch-option">
                    <div class="torch" @click="addTorch"></div>
                    <div class="torch-text">Torch</div>
                    <div class="shop-gold-text">{{itemList.torch}} gold</div>
                </div>
                <div class="shield-option">
                    <div class="shield" @click="addShield">Sword</div>
                    <div class="shield-text">Shield</div>
                    <div class="shop-gold-text">{{itemList.shield}} gold</div>
                </div>
                <div class="health-option">
                    <div class="health-potion" @click="addHp"></div>
                    <div class="health-text">Health Potion</div>
                    <div class="shop-gold-text">{{itemList.potion}} gold</div>
                </div>
            </div>

        </div>
     
    </div>  
    `,

    data(){
        return{

            shopwindow:'hideShop',

            //sword: 0,
            //shield: 0,
            //torch: 0,
            //potion: 0,
            //heroGold: 0,  

            itemList:{
                potion: 50,
                shield: 150,
                sword: 200,
                torch: 300,
            },

            backpack: null,
                
            
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
              
            if(this.backpack.swordamount < 1){
                if(this.backpack.goldamount >= this.itemList.sword){
                    //this.sword++;
                    this.$emit('addItem','sword',this.itemList.sword);
                    //this.heroGold = this.heroGold - this.itemList.sword;
                }        
            }
            
        },
        addShield(){
            if(this.backpack.shieldamount < 1){
                if(this.backpack.goldamount >= this.itemList.shield){
                    //this.shield++;
                    this.$emit('addItem','shield',this.itemList.shield);
                    //this.heroGold = this.heroGold - this.itemList.shield;
                }
                
            }
            
            //this.backPack.push(this.shield);
        },
        addTorch(){
            if(this.backpack.torchamount < 1){
                if(this.backpack.goldamount >= this.itemList.torch){
                    //this.torch++;
                    this.$emit('addItem','torch',this.itemList.torch);
                    //this.heroGold = this.heroGold - this.itemList.torch;
                }
                
            }
            
            //this.backPack.push(this.shield);
        },
        addHp(){
            if(this.backpack.potionamount < 4){
                if(this.backpack.goldamount >= this.itemList.potion){
                    //this.potion++;
                    this.$emit('addItem','potion',this.itemList.potion);
                    //this.heroGold = this.heroGold - this.itemList.potion;
                }
                
            }
            
            //this.backPack.push(this.healthPotion);
        },

        /*updateItemShopGold(amountOfGold,action){

            switch(action){
                case 'add':
                    this.heroGold += amountOfGold;
                    console.log('inne i updateitemshop'+this.heroGold)
                    break;
                case 'remove':
                    this.heroGold -= amountOfGold;
                    break;
                }
            
        },*/

        setBackPack(backpack){
            this.backpack = backpack
        }
    }
}