let intervalId
let tracker = true
document.getElementById("pause").addEventListener("click", stopCount)

document.getElementById("plus").addEventListener("click", manuallyIncrement)
document.getElementById("minus").addEventListener("click", manuallyDecrement)
let counter = document.getElementById('counter')

const likeCounter = {}
document.getElementById("heart").addEventListener("click", liker)
function liker(e) {
    console.log(counter.innerText)
    likeCounter[counter.innerText] = 1
    console.log(likeCounter)
   
}


function  increaseCount() {
    if (!intervalId) {
        intervalId = setInterval(incrementNumbers, 1000)

    }
   
}
function incrementNumbers() {
   
   
    counter.innerText++
}
//incrementNumbers() 
increaseCount()

function stopCount() {
    if (tracker === true) {
        tracker = false
        document.getElementById('minus').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('heart').disabled = true
        // document.getElementById('pause').disabled = true
        document.getElementById("pause").innerText = "resume"
        console.log("pause")
        console.log(tracker)
        clearInterval(intervalId)
    } else if (tracker === false) { 
        tracker = true
        document.getElementById('minus').disabled = false
        document.getElementById('plus').disabled = false
        document.getElementById('heart').disabled = false
        // document.getElementById('pause').disabled = false
        document.getElementById("pause").innerText = "pause"
        console.log("play")
        console.log(tracker)
        intervalId = setInterval(incrementNumbers, 1000)
    } 
    
}


function manuallyIncrement() {
    
    counter.innerText++
}

function manuallyDecrement() {
    
    counter.innerText--
}
 const init = () => {
   const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event.target.children[0].value)

const comment = document.getElementById("comment-input").value
  console.log(document.getElementById("comment-input").value)

  const listDiv = document.getElementById("list")
  console.log(document.getElementById("list"))

  const element = document.createElement("p")
  listDiv.append(element)
  element.innerHTML = comment


    })
}
document.addEventListener("DOMContentLoaded", init)



//Write a comment in the input box x
//push submit button  x
//access the comment from the input box x
//after we submit the comment 
    //    we expect to see the comment under "comments"
    // use getElementById to select the element under comments x
    // create a <p> element with the comment in it
    // append the <p> element under comments
// after we submit the comment we want the box to refresh










