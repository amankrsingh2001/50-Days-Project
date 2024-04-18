const APIURL = 'https://api.github.com/users/'
const inputValue = document.querySelector('#search')
const showBlock = document.querySelector('.showCase')



inputValue.addEventListener('change',async (e)=>{
    const name = e.target.value;  
   const apiData = await url(name)

    showBlock.style.display = "block";

    card(apiData)

  
   

})


const url = async (name)=>{
    try{
        const response = await fetch(`${APIURL}${name}`)
        const data = await response.json()
        return data
    }catch(error){
        console.log("Error aa")
   

    }
}

function card(apiData){

    const userCard = `<div class='main'>

    <img src =${apiData.avatar_url}>

    <div class='name'>
    <h1>${apiData.name}</h1>
    <h3>${apiData.email}</h3>
    
    <div class='info'>

    <p>${apiData.followers} followers</p>
    <p>${apiData.following} following</p>
    <p>${apiData.public_repos} repos</p>
    </div>
    </div>

    </div>`
    showBlock.innerHTML = userCard
}