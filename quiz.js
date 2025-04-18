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

let home = document.querySelectorAll("button")[4]
home.style.borderRadius ="25px"
home.style.border ="0"







