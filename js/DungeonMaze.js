import Grid from './Grid.js'

export default {

    components:{
        Grid
    },
    
    template: ` 

    <div id="app">

        <h1>Dungeon Maze</h1>
        <div class="char-info">
        <h3 class="health">Health: <span class="health-points">10</span></h3><h3 class="level">Level: <span class="level-number">1</span></h3>
        </div>
        
        <grid></grid>

        
       
        
    </div>  
    `, 

    data() {
        return{

        }
    },

    methods: {

    },

    computed: {
        
    },

}