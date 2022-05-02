// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js"
document.querySelector("#navbar").innerHTML= navbar()




import {get,append_two} from "./fetch.js"

let search = (e)=>{
if(e.key==="Enter"){

let value = document.querySelector("#search_input").value
get(value).then((data)=>{
let container = document.querySelector("#results")
container.innerHTML=null;
    append_two(data.articles,container)
})


}
}

document.querySelector("#search_input").addEventListener("keydown",search)

