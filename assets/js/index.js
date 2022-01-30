function myFunctionInput() {
  var input, filter, ul, li, div, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("champions");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("div")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}


const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const usersElement = document.querySelector('.champions');
usersElement.innerHTML = "";
let htmlData = "";

if(params.lane){
for (const item of champions) {
    if (item.lane.includes(params.lane)) {
        let html = `
        
<ul class="champions" id="champions">
<li >
    <img class="image" src="${item.image}" height="120" alt="">
    <a class="click" href="${item.link}"><div class="name">${item.name}</div></a>
</li>
</ul>`;
        htmlData += html;
    
}
}
}else{
    for (const item of champions) {
        let html = `
        
<ul class="champions" id="champions">
<li >
    <img class="image" src="${item.image}" height="120" alt="">
    <a class="click" href="${item.link}"><div class="name">${item.name}</div></a>
</li>
</ul>`;
        htmlData += html;
    
}
}

usersElement.innerHTML = htmlData;


