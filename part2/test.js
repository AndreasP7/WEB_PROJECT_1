

let heart = document.getElementsByClassName("inactive_heart" )
heart = heart[1]
console.log(heart)
heart.addEventListener("click", ()=>{
    heart.style.background = rgb(126, 187, 168)
})


function toggle_favorite( element){

    var currentColor = element.style.backgroundColor
    if (currentColor === 'rgb(77, 78, 78)') {
        // If it's gray, change it to blue
        element.style.backgroundColor = 'blue';
    }
    else {
        // If it's blue, change it to gray
        element.style.backgroundColor = 'gray';
    }

    console.log("CLick")

}