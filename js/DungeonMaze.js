import Grid from './Grid.js'

export default {

    props:['health'],

    components:{
        Grid,
    },
    
    template: ` 
    <div id="app">
        <h1>Dungeon Maze</h1>
        <div class="char-info">
        <h3 class="health">Health: 
            <span class="health-points" 
            >{{ healthPoints }}
            </span>
        </h3>
        <h3 class="level">Level: 
            <span class="level-number">{{ level }}</span>
        </h3>
        </div>
        <grid @changehealth="changedhealth" @changelevel="changedLevel"></grid>
    </div>  
    `, 

    data() {
        return{
            healthPoints: 0,
            level: 0,
        }
    },

    methods: {
        changedhealth(newhealth){
            console.log(this.healthPoints, newhealth);
            this.healthPoints = newhealth;
        },
        changedLevel(newlevel){
            this.level = newlevel;
        }
    
    },

    computed: {
        
    },

}