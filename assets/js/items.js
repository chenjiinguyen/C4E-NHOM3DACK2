function myFunctionInput() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
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

document.getElementById("click0").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Project/index.html"
});
document.getElementById("click1").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Project/index2.html"
});
document.getElementById("click2").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Project/index3.html";
});
document.getElementById("click3").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Project/index4.html";
});
document.getElementById("click4").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Project/index5.html";
});
document.getElementById("click5").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Project/index6.html";
});



document.getElementById("click6").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Items/indexItems.html"
});
document.getElementById("click7").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Items/index9.html"
});
document.getElementById("click8").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Items/index10.html";
});
document.getElementById("click9").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Items/index11.html";
});
document.getElementById("click10").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Items/index12.html";
});
document.getElementById("click11").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Items/index8.html";
});


document.getElementById("click12").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Runes/indexRunes.html"
});
document.getElementById("click13").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Runes/index14.html"
});
document.getElementById("click14").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Runes/index15.html";
});
document.getElementById("click15").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Runes/index16.html";
});
document.getElementById("click16").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Runes/index17.html";
});
document.getElementById("click17").addEventListener("click", function() {
  window.location = "http://127.0.0.1:5500/Runes/index18.html";
});

