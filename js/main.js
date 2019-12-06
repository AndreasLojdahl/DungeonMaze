import DungeonMaze from './DungeonMaze.js'
//all imports are done at the top of the file.

//export const eventHub = new Vue();

new Vue({
    render: h => h(DungeonMaze)
}).$mount('#dungeonMaze')