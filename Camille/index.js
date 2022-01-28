 const usersElement = document.querySelector('.champions');
  usersElement.innerHTML = "";
  let htmlData = "";


  for (const item of champions) {
    let html = `
    
<ul class="champions" id="champions">
<li >
<img class="image" src="${item.image}" height="120" alt="">
<div class="name">${item.name}</div>
</li>
</ul>`

    htmlData += html;

}

usersElement.innerHTML = htmlData;