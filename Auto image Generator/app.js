const URL = 'https://source.unsplash.com/random/'
const image = document.querySelector('.image')
const max = 20;




function randomNo (){
    let randNo = Math.floor(Math.random()* max)
    return randNo;
}


for(let i=0;i<max;i++){

    let url = `${URL}${randomNo()}`

    const img = document.createElement('img')
    img.src = url
    image.appendChild(img)
}




