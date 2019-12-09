import Grid from './Grid.js'
//import Hero from './Creatures.js'

export default {

    props:['health'],

    components:{
        Grid
    },
    
    template: ` 
    <div id="app">

        <h1>Dungeon Maze</h1>
        <div class="char-info">
        <h3 id="health">Health: <span class="healthpoints">10</span></h3><h3 class="level">Level: <span class="level-number">1</span></h3>
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