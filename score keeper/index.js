const firstScore = document.querySelector('.first')
const secondScore = document.querySelector('.second')
const btnFirst = document.querySelector('.btnOne')
const btnTwo = document.querySelector('.btnTwo')
const numberSet = document.querySelector('#numberSet')
const reset = document.querySelector('.reset')
let value1=0;
let value2=0;

btnFirst.addEventListener('click',function(){

    if(value1===numberSet.value-1){
        diableFirstButton(true)
    }
    
    if(value1<=numberSet.value-1){
        value1+=1
    firstScore.innerText = value1
    }
    
})

btnTwo.addEventListener('click',function(){
    if(value2===numberSet.value-1){
        diableFirstButton(true)
    }
    if(value2<=numberSet.value-1){
        value2+=1
        console.log(value2)
        secondScore.innerText = value2
    }

})
    
reset.addEventListener('click',update)

function update(){
    firstScore.innerText = 0
    secondScore.innerText = 0
    numberSet.value  = 1
    diableFirstButton(false)
}

function diableFirstButton(state){
    btnFirst.disabled = state
    btnTwo.disabled = state
}

