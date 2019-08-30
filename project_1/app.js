const btn = document.querySelector("button")
const addElement = function(){
    const div= document.createElement('div')
    document.body.appendChild(div)
    }
btn.addEventListener("click", addElement)
