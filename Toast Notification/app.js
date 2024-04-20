const btn = document.querySelector('button')
const toast = document.querySelector('.toast')
const container = document.querySelector('.container')
const notification = document.querySelector('.notification')




btn.addEventListener('click',(e)=>{
   toastNoti()
    
})


const randomNo = () =>{
 return Math.floor(Math.random()*4)
}


 function toastNoti(){
    const createCard = document.createElement('p')
   
    const arr = ["one","two","three","four"]
    const color = ['orange','green','blue','red']
    createCard.innerText = `Messsage ${arr[randomNo()]}`;
    createCard.style.color = `${color[randomNo()]}`
    notification.appendChild(createCard);
    setTimeout(()=>{
        const p = document.querySelectorAll('p')
        const change = p.length 
        if(p.length>0){
            notification.removeChild(p[0])
        }
       
    },5000)
}
