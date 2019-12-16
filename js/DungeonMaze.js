import Grid from './Grid.js'
//import ItemShop from './ItemShop.js'
export default {

    props:['health'],

    props:['level'],

    components:{
        Grid,
        //ItemShop
    },
    
    template: ` 
    <div id="app" class="content">

        <video autoplay muted loop id="myVideo">
        <source src="/images/Candle.mp4" type="video/mp4">
        </video>

        <video autoplay muted loop id="myVideo2">
        <source src="/images/Candle.mp4" type="video/mp4">
        </video>
        <h1>Dungeon Maze</h1>
        <!--<div class="buttons">
            <button class="shop-button" @click="updateShopVisability">Item Shop</button>
            <button class="backpack-button">Backpack</button>
            
        </div>
        
        <ItemShop ref="itemshop" v-bind="{backpack,heroGold}" @addedSword="addItemToBackPack"></ItemShop>-->
        <div :class="popup" ref="modal" class="my-modal" >
            <span class="my-modal-span">{{ message }}</span>
        </div>
        
        <div class="char-info">
        <h3 class="health">Health: 
            <span class="health-points" 
            >{{ healthPoints }}
            </span>
        </h3>
        <h3 class="level">Level: 
            <span class="level-number"
            >{{ levelNumber }}
        </span>
        </h3>

        </div>
        <grid v-bind="backpack" @changehealth="changedhealth" @changelevel="changedlevel" @changemessage="changedmessage"></grid>
       
    </div>  
    `, 

    data() {
        return{
            healthPoints: 0,
            levelNumber: 0,

            message: '',

            popup: 'hide',

            backpack:[],
            heroGold: 0
            
            
            
        }
    },

    methods: {
        addItemToBackPack(item){
            
            this.backpack.push(item);
            console.log(this.backpack)
        },
        changedhealth(newhealth){
            console.log(this.healthPoints, newhealth);
            this.healthPoints = newhealth;
        },
        changedlevel(newlevel){
            console.log(this.levelNumber, newlevel);
            this.levelNumber = newlevel;
        },
        changedmessage(newmessage){
            this.message = newmessage;
            //this.$refs.modal.style.setProperty('display', 'flex');
            //this.showPopUp();
            //this.removePopUp();
            setTimeout((function(){
                this.popup = 'show';
            }).bind(this),);
            setTimeout(() => {
                this.popup = 'hide';
            }, 1000);
                      
        },
        /*updateShopVisability(){
            this.$refs.itemshop.updateShopVis();
        }*/
    
    },

    computed: {
        
    },

}