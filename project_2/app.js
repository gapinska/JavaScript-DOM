const btn = document.querySelector("button")
let number = 1
btn.addEventListener("click", function(){
    const listItem = document.createElement("li")
    listItem.textContent = number
    document.body.appendChild(listItem)
    if(number%3===0){
        listItem.classList.add("big")
    }

    number +=2

    
})