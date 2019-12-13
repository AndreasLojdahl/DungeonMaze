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

        <div :class="{popup, mymodal: isVisible, storypopup: isActive}" ref="modal">
            <span ref="modalspan" @click="hideDiv"
            :class="{mymodalspan: isVisible, storypopupspan: isActive}"
            >{{ message }}
                <button :class="popup">{{choice1}}</button>
                <button :class="popup">{{choice1}}</button>
                <button id="buttonOK">OK</button>
            </span>
        </div>

        <h1>Dungeon Maze</h1>
        <div class="char-info">
        <h3 class="health">Health: 
            <span class="health-points" 
            >{{ healthPoints }}
            </span>
        </h3>
        <h3 class="level">
            Level: 
            <span class="level-number">
                {{ levelNumber }}
            </span>
        </h3>
        </div>

        <grid @changehealth="changedhealth" 
        @changelevel="changedlevel" 
        @changemessage="changedmessage">
        </grid>
       
    </div>  
    `, 

    data() {
        return{
            healthPoints: 0,
            levelNumber: 0,
            message: '',
            popup: 'hide',
            isActive: false,
            isVisible: false,
            choice1: 'Touch the diamond',
            choice2: 'Ignore the diamond',
            buttonOK: '',
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
        changedmessage(newmessage){
            this.message = newmessage;
            var firstWord = this.message.replace(/ .*/,'');
            console.log(this.message);
            console.log(firstWord);
            //this.$refs.modal.style.setProperty('display', 'flex');
            //this.showPopUp();
            //this.removePopUp();
            
            if (newmessage.length > 100){
                this.isVisible = false;
                this.isActive = true;

                if (firstWord == "What'sss"){
                    this.popup = 'show';
                }
                
                setTimeout((function(){
                    this.$refs.modal.style.setProperty('display', 'flex');
                    //this.popup = 'show';
                }).bind(this),);
    
                setTimeout(() => {
                    this.$refs.modal.style.setProperty('display', 'none');
                    //this.popup = 'hide';
                }, 15000);

            } else {
                this.isActive = false,
                this.isVisible = true,
                
            setTimeout((function(){
                this.$refs.modal.style.setProperty('display', 'flex');
                //this.popup = 'show';
            }).bind(this),);

            setTimeout(() => {
                this.$refs.modal.style.setProperty('display', 'none');
                //this.popup = 'hide';
                }, 1500);
            }          
        },
        hideDiv(){
            if (this.$refs.modal.style.display === "block") {
                this.$refs.modal.style.setProperty('display', 'none');
            }
        } 
    },

    computed: {
        
    },


}