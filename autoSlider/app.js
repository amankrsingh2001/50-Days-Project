const display = document.querySelector('h1')
const input = document.querySelector('#input')
const text = display.innerText;
const str = "We Love Programmer"
const arr = str.split('')

let interid = setInterval(textDisplay, 500);
let i = 0

input.addEventListener('input',(e)=>{
    clearInterval(interid)
    let timer = e.target.value;
    let value =500/timer
   interid =  setInterval(textDisplay,value)
   
})


function textDisplay (){
    if(i>arr.length-1){
        i = 0;
        display.textContent = " ";
    }
        display.textContent += arr[i]
        i++
}


console.log(interid)