export default{

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
                    <div class="shield" @click="addShield"></div>
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
                    this.$emit('addItem','sword',this.itemList.sword);
                    this.$emit('transaction','afford')
                }
                else{
                    this.$emit('transaction','notAfford')
                }        
            }
        },
        addShield(){

            if(this.backpack.shieldamount < 1){

                if(this.backpack.goldamount >= this.itemList.shield){
                    this.$emit('addItem','shield',this.itemList.shield);
                    this.$emit('transaction','afford') 
                }
                else{
                    this.$emit('transaction','notAfford')
                }  
            }
        },

        addTorch(){
            if(this.backpack.torchamount < 1){

                if(this.backpack.goldamount >= this.itemList.torch){ 
                    this.$emit('addItem','torch',this.itemList.torch);
                    this.$emit('transaction','afford')    
                }
                else{
                    this.$emit('transaction','notAfford')
                }
            }
        },

        addHp(){

            if(this.backpack.potionamount < 4){

                if(this.backpack.goldamount >= this.itemList.potion){
                    this.$emit('addItem','potion',this.itemList.potion);
                    this.$emit('transaction','afford')
                }
                else{
                    this.$emit('transaction','notAfford')
                } 
            }
            
        },

        setBackPack(backpack){
            this.backpack = backpack
        }
    }
}