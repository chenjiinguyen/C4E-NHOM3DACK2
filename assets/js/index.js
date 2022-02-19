const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams)
const userElements = document.querySelector(".champions")
userElements.innerHTML = ""
let htmlData = ""
if(params.lane){
    for(const item of champions){
        if(item.lane.includes(params.lane)){
            let html = `
            <li >
            <img class="image" src="${item.image}" height="120" alt="">
            <a class="click" href="${item.link}"><div class="name">${item.name}</div></a>
            </li>`
            htmlData += html
        }
    }
}
else{
    for(const item of champions){
            let html = `
            <li >
            <img class="image" src="${item.image}" height="120" alt="">
            <a class="click" href="${item.link}"><div class="name">${item.name}</div></a>
            </li>`
        htmlData += html
    }
}
userElements.innerHTML = htmlData



