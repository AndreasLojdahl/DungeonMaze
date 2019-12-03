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

        <!--<div class="box">
        <table>
            <tr>
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>   
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>   
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/sand.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
            </tr>
            <tr>
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td>  
                <td><img src="/images/wall.jpg"></td> 
            </tr>
        </table>-->
        


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