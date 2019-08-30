const btn = document.querySelector("button")
let number = 1
const addElement = function(){
    
    const div= document.createElement('div')
    div.textContent = number
    document.body.appendChild(div)
    
    number= number+1
    }
btn.addEventListener("click", addElement)
