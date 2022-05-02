// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js"
document.querySelector("#navbar").innerHTML= navbar()



//import { getdata,append } from "./fetch.js"




let url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"

let container = document.querySelector("#results")


let getdata = async ()=>{

    let res  = await fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
    let  data = await res.json()

    let exact  = data.articles
    append(exact)
   
    
}
getdata()



let append = (data)=>{
let results =  document.querySelector("#results")
results.innerHTML = null;
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

let search = (e)=>{
    if(e.key==="Enter"){
    
window.location.href="search.html"    
    }
    
    }
    
    document.querySelector("#search_input").addEventListener("keydown",search)





    import {get,append_two} from "./fetch.js"
let sidebar= document.querySelector("#sidebar").children
console.log('sidebar:', sidebar)
var value = `https://masai-mock-api.herokuapp.com/news?q=in}`

function cSearch(){
let container = document.querySelector("#results")

get(this.id,value).then((data)=>{

    append_two(data.articles,container)
})
}

for(let el of sidebar){
    el.addEventListener("click",cSearch)

}