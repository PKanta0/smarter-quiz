let bt = document.querySelectorAll("button")

bt.forEach(button => {
    button.onmouseover = () => {
        button.style.backgroundColor = "bisque"
        button.style.cursor = "pointer"
        button.style.color = "black"
    }

    button.onmouseout = () => {
        button.style.backgroundColor = ""
        button.style.color = ""
    }

})

let imgBt = document.querySelectorAll(".img-bt")
imgBt.forEach(img => {
    img.onmouseover = () => {
        img.style.transform = "scale(1.2)"
    }
    img.onmouseout = () => {
        img.style.transform = ""
    }

});

let bar = document.querySelectorAll(".bar")

bar.forEach(div => {
    div.onmouseover = () => {
        div.style.transform = "scale(1.2)"
    }

    div.onmouseout = () => {
        div.style.transform = ""
    }
})



let barr = {
    score: parseInt(localStorage.getItem("score")) || 0,
    button : document.querySelector(".a"),
    display : document.querySelector(".bar")
}

let correcter = false

barr.display.textContent = `Score ${barr.score} : 5`

barr.button.addEventListener("click",()=>{
    updatescore(barr)
})

function updatescore(correct) {
    if (!correcter) {
        correct.score +=1
        localStorage.setItem("score", correct.score)
        if (correct.score == 1) {
            correcter = true
            alert("winner")
            
            
        }
        correct.display.textContent = `Score ${correct.score} : 5`
    }
    window.location.href = "https://codepen.io/K-Best/full/XJJJjqw"
}

document.querySelector("#resetScore").addEventListener("click", () => {
    localStorage.removeItem("score")
    location.reload()
})