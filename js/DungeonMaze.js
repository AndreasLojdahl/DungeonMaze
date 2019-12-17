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

        <!--
        <div class="mainmenu" ref="menu">
            <span class="mainmenuspan"><h2>Welcome to Dungeon Maze!</h2></span>
            <span class="mainmenuspan"><p>Which Story would you like to play?</p></span>

            <span class="mainmenuspan">
                <form>
                    <input type="radio" name="kidnapped" value="kidnapped" checked>Kidnapped<br>
                    <input type="radio" name="markusstory" value="markusstory">Markus' Story<br>
                    <input type="radio" name="tutorial" value="tutorial">Tutorial 
                </form> 
            </span>
        </div>
        -->

        <div :class="{popup, mymodal: isVisible, storypopup: isActive}"
        tabindex="0" ref="modal">
            <span ref="modalspan" @click="hideDiv()" :class="{mymodalspan: isVisible, storypopupspan: isActive}"
            >{{ message }}
            <span ref="pressenter" class="pressentertext"> 
            press enter to continue
            </span>
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
            Character-level: 
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
            mainmenu: ''
        }
    },

    methods: {
        showUserMenu(){ //why does it appear BEHIND the grid?????
            this.$refs.menu.style.setProperty('display', 'flex'); 
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
            var firstWord = this.message.replace(/ .*/,'');
            console.log(this.message);
            console.log(firstWord);
            //this.$refs.modal.style.setProperty('display', 'flex');
            //this.showPopUp();
            //this.removePopUp();
            
            if (newmessage.length > 100){
                this.isVisible = false;
                this.isActive = true;
                this.$refs.pressenter.style.setProperty('display', 'flex')

                if (firstWord == "What'sss"){
                    this.popup = 'show';
                }
                setTimeout((function(){
                    this.$refs.modal.style.setProperty('display', 'flex');
                    //this.popup = 'show';
                }).bind(this),);
                setTimeout(() => {
                    this.$refs.modal.style.setProperty('display', 'none');
                    this.$refs.pressenter.style.setProperty('display', 'none')
                    //this.popup = 'hide';
                }, 150000);
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
                }, 1000);
            }          
        },
        hideDiv(){
            this.$refs.modal.style.setProperty('display', 'none');
            this.$refs.pressenter.style.setProperty('display', 'none')
        } 
    },

    computed: {
        
    },
    
    created() {
        
    },

    mounted(){
        window.addEventListener('keyup', (e) => {
                if(e.keyCode === 13){                
                    this.hideDiv();
                }
        })
    }
    
}