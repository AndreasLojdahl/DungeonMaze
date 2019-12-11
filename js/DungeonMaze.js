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
        <grid @changehealth="changedhealth"></grid>
        <!--<grid @changelevel="changedlevel"></grid>-->
    </div>  
    `, 

    data() {
        return{
            healthPoints: 0,
            levelNumber: 0
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
        }
    },

    computed: {
        
    },

}