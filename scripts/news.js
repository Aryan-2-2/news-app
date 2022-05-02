// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js"
document.querySelector("#navbar").innerHTML= navbar()




let datas = JSON.parse(localStorage.getItem("news")) 


document.querySelector("#detailed_news").innerHTML = null;




let image = document.createElement("img")
let name = document.createElement("h3")
let dis = document.createElement("p")

image.src = datas.urlToImage;
name.textContent = datas.title;
dis.textContent = datas.description;


document.querySelector("#detailed_news").append(image,name,dis)
