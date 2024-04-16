const colorChange = document.querySelector('#color')
const background = document.querySelector('.image-sec')
const image = document.querySelector('img')
const padding = document.querySelector('#padding')

colorChange.addEventListener('input',(e)=>{
    const finalColor = e.target.value
    background.style.background = finalColor;
})

const blurChange = document.querySelector('#blur')

blurChange.addEventListener('input',(e)=>{
    const blurImg = e.target.value;
    image.style.filter = `blur(${blurImg}px)`
})

padding.addEventListener('input',(e)=>{
    const paddingValue = e.target.value
    image.style.padding = `${paddingValue * 10}px`
})