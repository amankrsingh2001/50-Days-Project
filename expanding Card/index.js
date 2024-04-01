const expand = document.querySelectorAll('.card')

expand.forEach(card=>{
    card.addEventListener("click",()=>{
       removeActiveClasslist()
       card.classList.add('active')
    })
})

function removeActiveClasslist(card){
    expand.forEach((card)=>{
        card.classList.remove('active')
    })
}