export default{

    //props:['backPack'],

    template:`
    <div ref="backpack">
    <button class="backpack-button" @click="updateBackVis">Backpack</button>
    <div :class="packwindow" class="backpack-window">
        
        <div class="items-backpack">
            <div class="backpack-pic-sword"></div>
            <div class="backpack-item-text">Sword x<span class="span-pack">{{swordamount}}</span></div>        
        </div>
        <div class="items-backpack">
            <div class="backpack-pic-shield"></div>
            <div class="backpack-item-text">Shield x<span class="span-pack">{{shieldamount}}</span></div>        
        </div>
        <div class="items-backpack">
            <div class="backpack-pic-torch"></div>
            <div class="backpack-item-text">Torch x<span class="span-pack">{{torchamount}}</span></div>        
        </div>
        <div class="items-backpack">
            <div class="backpack-pic-potion"></div>
            <div class="backpack-item-text">Potion x<span class="span-pack">{{potionamount}}</span></div>        
        </div>
        <div class="items-backpack">
            <div class="backpack-pic-gold"></div>
            <div class="backpack-item-text">Gold x<span class="span-pack">{{goldamount}}</span></div>        
        </div> 
    </div>
    
    </div>
   `,

    data(){
        return{
            
            packwindow: 'showPack',

            swordamount: 0,
            shieldamount: 0,
            torchamount: 0,
            potionamount: 0,
            goldamount: 0,
            
        }
    },

    /*watch:{
        backPack:{
            deep:true,
            handler(){
                this.updateBackpack()
            }
        }
    },*/

    

    methods:{

        updateBackpack(item,gold){
            
            console.log('inne i updatebackpack')
            switch(item){
                case 'gold':
                    this.goldamount += gold;
                    console.log('updatebackpack'+this.goldamount)
                    break;
                case 'sword':
                    this.swordamount += 1;
                    this.goldamount -= gold;
                    
                    break;
                case 'shield':
                    this.shieldamount +=1;
                    this.goldamount -= gold;
                    break;
                case 'torch':
                    this.torchamount += 1;
                    this.goldamount -= gold;
                    break;
                case 'potion':
                    this.potionamount += 1;
                    this.goldamount -= gold;
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

        isItemEquipped(item){

            switch(item){
                case 'sword':
                    if(this.swordamount == 1){
                        return true;
                    }
                    break;
                case 'shield':
                    if(this.shieldamount == 1){
                        return true;
                    }
                    break;
                case 'torch':
                    if(this.swordamount == 1){
                        return true;
                    }
                    break;

            }   

        },

        isTorchEquipped(){
            if(this.torchamount == 1){
                return true;
            }
        }


       
    }

}