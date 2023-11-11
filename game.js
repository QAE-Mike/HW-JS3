const STEP = 36
 let robotRight = 0
 letrobotLeft = 1

 function render() {
    gameMap.innerHTML = `
 <div class="robot" 
        style="transform:translateX(${robotRight * STEP}px)">
    </div>
`
gameMap.innerHTML = `
 <div class="robot" 
        style="transform:translateX(${robotLeft / STEP}px)">
    </div>
`

}
 
 render()