function searchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.querySelector("#searchInput");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".champions_search");
  li = ul.getElementsByTagName("li");

  const inputDisplay = input.value.length > 1 ? "block" : "none";
  ul.style.display = inputDisplay;

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

const championsSearch = document.querySelector(".champions_search");
championsSearch.innerHTML = "";
let championsSearchHtmlData = "";

for (const item of champions) {
  let html = `
        <li style="display: none;">
            <img src="${item.image}" alt="">
            <a style="color: white; font-size: 19px" href="${item.link}">${item.name}</a>
        </li>`;
  championsSearchHtmlData += html;
}
championsSearch.innerHTML  = championsSearchHtmlData;