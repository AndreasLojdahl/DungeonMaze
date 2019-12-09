import Grid from './Grid.js'
import Character from './Character.js'

export default {

    components:{
        Grid,
        Character,
    },
    
    template: ` 
    <div id="app">
        <h1>Dungeon Maze</h1>
        <div class="char-info">
        <h3 class="health">Health: 
            <span class="health-points" 
            @changeHealth="changedHealth"
            >{{ healthPoints }}
            </span>
        </h3>
        <h3 class="level">Level: 
            <span class="level-number">1</span>
        </h3>
        </div>
        <grid></grid>
    </div>  
    `, 

    data() {
        return{
            healthPoints: '',
        }
    },

    methods: {
        changedHealth(newHealth){
            healthPoints = newHealth;
        }
    },

    computed: {
        
    },

}