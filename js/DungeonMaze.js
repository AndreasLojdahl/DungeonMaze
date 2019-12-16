import Grid from './Grid.js'

export default {

    props:['health'],

    props:['level'],

    components:{
        Grid,
    },
    
    template: ` 
    <div id="app" class="content">

        <video autoplay muted loop id="myVideo">
        <source src="/images/Candle.mp4" type="video/mp4">
        </video>

        <video autoplay muted loop id="myVideo2">
        <source src="/images/Candle.mp4" type="video/mp4">
        </video>
        <div :class="popup" ref="modal" class="my-modal" >
            <span class="my-modal-span">{{ message }}</span>
        </div>
        <h1>Dungeon Maze</h1>
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
        <h3 class="money">Money: 
            <span class="money-amount" 
            >{{ moneyAmount }}
            </span>
        </h3>
        

        </div>
        <grid @changehealth="changedhealth" @changelevel="changedlevel" @changemoney="changedmoney" @changemessage="changedmessage"></grid>
       
    </div>  
    `, 

    data() {
        return{
            healthPoints: 0,
            moneyAmount: 0,
            levelNumber: 0,

            message: '',

            popup: 'hide'
        }
    },

    methods: {
        changedhealth(newhealth){
            console.log(this.healthPoints, newhealth);
            this.healthPoints = newhealth;
        },
        changedlevel(newlevel){
            console.log(this.levelNumber, newlevel);
            this.levelNumber = newlevel;
        },
        changedmoney(newmoney){
            console.log(this.moneyAmount, newmoney);
            this.moneyAmount = newmoney;
        },
        changedmessage(newmessage){
            this.message = newmessage;
            this.$refs.modal.style.setProperty('display', 'flex');
            this.showPopUp();
            this.removePopUp();
            setTimeout((function(){
                this.popup = 'show';
            }).bind(this),);
            setTimeout(() => {
                this.popup = 'hide';
            }, 1000);
                      
        },
    
    },

    computed: {
        
    },

}