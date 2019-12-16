export default{

    props:['backPack'],

    template:`
    <div ref="backpack">
    <button class="backpack-button" @click="updateBackVis">Backpack</button>
    <div :class="packwindow" class="backpack-window">
        
        <div class="items-backpack">
            <div class="backpack-pic-sword"></div>
            <div class="backpack-item-text">Sword x<span>{{swordamount}}</span></div>        
        </div>
        <div class="items-backpack">
            <div class="backpack-pic-shield"></div>
            <div class="backpack-item-text">Shield x<span>{{shieldamount}}</span></div>        
        </div>
        <div class="items-backpack">
            <div class="backpack-pic-torch"></div>
            <div class="backpack-item-text">Torch x<span>{{torchamount}}</span></div>        
        </div>
        <div class="items-backpack">
            <div class="backpack-pic-potion"></div>
            <div class="backpack-item-text">Potion x<span>{{potionamount}}</span></div>        
        </div>
        <div class="items-backpack">
            <div class="backpack-pic-gold"></div>
            <div class="backpack-item-text">Gold x<span>{{goldamount}}</span></div>        
        </div> 
    </div>
    
    </div>
   `,

    data(){
        return{
            
            
            swordamount: 0,
            shieldamount: 0,
            torchamount: 0,
            potionamount: 0,
            goldamount: 0,

            packwindow: 'showPack'

        }
    },

    watch:{
        backPack:{
            deep:true,
            handler(){
                this.updateBackpack()
            }
        }
    },

    

    methods:{

        updateBackpack(item,amount){
            
            console.log('inne i updatebackpack')
            switch(item){
                case 'gold':
                    this.goldamount += amount;
                    break;
                case 'sword':
                    this.swordamount += 1;
                    this.goldamount -= amount;
                    //this.backPack.sword = this.swordamount;
                    break;
                case 'shield':
                    this.shieldamount +=1;
                    this.goldamount -= amount;
                    break;
                case 'torch':
                    this.torchamount += 1;
                    this.goldamount -= amount;
                    break;
                case 'potion':
                    this.potionamount += 1;
                    this.goldamount -= amount;
                    break;
            }

        },
        updateBackVis(){
            if(this.packwindow == 'hidePack'){
                this.packwindow = 'showPack';
            }
            else if(this.packwindow == 'showPack'){
                this.packwindow = 'hidePack';
            }

        },
       
    }

}