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




