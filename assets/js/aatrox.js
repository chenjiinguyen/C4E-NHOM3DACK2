const usersElement = document.querySelector(".aatrox");
usersElement.innerHTML = "";
let htmlData = "";
let i = 0;
for (const item of aatrox) {
    let html = `
            <li class="dropdownA">
            <img class="image" src="${item.image}" height="80" alt="">
            <div class="dropdown-contentB">
            <a class="description">${item.description}</a>
            </div>
            </li>`;

  htmlData += html;
  i++;
}

usersElement.innerHTML = htmlData;
