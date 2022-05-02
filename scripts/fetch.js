

let get = async (value)=>{

    let res  = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
    let  data = await res.json()
    
     console.log('data:', data)
     
 return data
}




let append_two = (data,results)=>{

 data.map(({urlToImage,title,description})=>{

let div = document.createElement("div")
let image = document.createElement("img")
let name = document.createElement("h3")
let dis = document.createElement("p")

image.src = urlToImage;
name.textContent = title;
dis.textContent = description;

div.setAttribute("class","news")
image.setAttribute("id","img")
name.setAttribute("id","name")
dis.setAttribute("id","dis")

div.append(image,name,dis)


let data_two = {
    urlToImage ,
    title,
    description,
}

div.addEventListener("click",function(){
localStorage.setItem("news",JSON.stringify(data_two))
window.location.href="news.html"

})

results.append(div)
    })

}

export {get,append_two}