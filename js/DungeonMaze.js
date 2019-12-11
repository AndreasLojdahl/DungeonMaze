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
            <span ref="modalspan" class="my-modal-span">{{ message }}</span>
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

        </div>
        <grid @changehealth="changedhealth" @changelevel="changedlevel" @changemessage="changedmessage"></grid>
       
    </div>  
    `, 

    data() {
        return{
            healthPoints: 0,
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
        changedmessage(newmessage){
            this.message = newmessage;
            //this.$refs.modal.style.setProperty('display', 'flex');
            //this.showPopUp();
            //this.removePopUp();
            
            if (newmessage.length > 100){
                this.$refs.modal.style.setProperty('background-image', 'url(/images/scroll.png)');
                this.$refs.modal.style.setProperty('height', '65%');
                this.$refs.modalspan.style.setProperty('font-family', 'Mansalva');
                this.$refs.modalspan.style.setProperty('font-size', '150%');
                this.$refs.modalspan.style.setProperty('color', 'black');

                setTimeout((function(){
                    this.popup = 'show';
                }).bind(this),);
    
                setTimeout(() => {
                    this.popup = 'hide';
                }, 10000);

            } else {
                this.$refs.modal.style.setProperty('background-image', 'none');
                this.$refs.modal.style.setProperty('height', '20%');
                this.$refs.modal.style.setProperty('background-color', 'rgba(187, 114, 49, 0.336)');
                this.$refs.modal.style.setProperty('margin-top', '17%');
                this.$refs.modalspan.style.setProperty('font-family', 'monospace');
                this.$refs.modalspan.style.setProperty('font-size', '300%');
                this.$refs.modalspan.style.setProperty('color', 'rgb(236, 205, 178)');
                this.$refs.modalspan.style.setProperty('padding', '0%');

                
            setTimeout((function(){
                this.popup = 'show';
            }).bind(this),);

            setTimeout(() => {
                this.popup = 'hide';
            }, 1500);
            }          
        },
    
    },

    computed: {
        
    },

}