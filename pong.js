const paddle1 ={
x:0,
y:0,
w:16,
h:128,
}

const paddle2 ={
    x:0,
    y:0,
    w:16,
    h:128,
    }

    const ball = {
        x:0, 
        y:0,
        r:8,
    }


const canvas = document.createElement("canvas")
canvas.style.position="absolute" 
canvas.style.top="0px"  
canvas.style.left="0px"
canvas.style.width="100dvw"
canvas.style.height="100dvh" 
canvas.style.backgroundColor = "maroon"
    document.body.appendChild(canvas)

function onResize() {
    canvas.width = canvas.getBoundingClientRect().width
    canvas.height = canvas.getBoundingClientRect().height
}

new ResizeObserver(onResize).observe(canvas)

const context=canvas.getContext("2d")

function render() {
    context.fillStyle="black"
    context.fillRect(
paddle1.x,
paddle1.y,
paddle1.w,
paddle1.h,
    )
}
function animate() {
    render()
    requestAnimationFrame(animate)
}

animate()
