// ---- head tag setting ----
var head = document.querySelector("head");
var meta = document.createElement('meta');
head.append(meta);
meta.setAttribute("charset", "utf-8");
var meta = document.createElement('meta');
head.append(meta);
meta.name = "keywords";
meta.content = "github.io, github page, 20170375";
var meta = document.createElement('meta');
head.append(meta);
meta.name = "description";
meta.content = "github.io page by 20170375";
var meta = document.createElement('meta');
head.append(meta);
meta.name = "author";
meta.content = "20170375";
var meta = document.createElement('meta');
head.append(meta);
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0";


//  ---- body tag setting ----
var body = document.querySelector("body");
var script = document.createElement('script');
body.append(script);
script.id = "template-menu";
script.type="text/template";
var div = document.createElement('div');
script.append(div);
var a = document.createElement('a');
div.append(a);
a.href = "{href}";
a.innerText = "{name}";
var hr = document.createElement('hr');
div.append(hr);

var script = document.createElement('script');
body.append(script);
script.id = "template-block";
script.type="text/template";
var div = document.createElement('div');
script.append(div);
var a = document.createElement('a');
div.append(a);
a.href = "{href}";
a.innerText = "{name}";

var a = document.createElement('a');
body.append(a);
a.id = "github_link";
a.href = "https://github.com/20170375";
a.innerText = "Github";
var small = document.createElement('small');
small.innerText = " info";
a.append(small);

var header = document.createElement('header');
body.append(header);

var nav = document.createElement('nav');
body.append(nav);

var main = document.querySelector("main");
body.append(main);

var footer = document.createElement('footer');
body.append(footer);


// ---- nav tag setting ----
var nav = document.querySelector("nav");
var div = document.createElement('div');
div.className = "tabmenu";
nav.append(div);


// ---- header tag setting ----
var header = document.querySelector("header");
var a = document.createElement('a');
a.href = "https://20170375.github.io/html/index.html";
var strong = document.createElement('strong');
strong.innerText = "Github";
a.append(strong);
a.innerHTML += " Page";
header.append(a);


// ---- footer tag setting ----
var footer = document.querySelector("footer");
var form = document.createElement('form');
footer.append(form);
form.autocomplete = "off";
var input = document.createElement('input');
form.append(input);
input.id = "search_bar";
input.type = "text";
input.style.color = "#b8b8b8";
input.style.backgroundColor = "#30343c";
var input = document.createElement('input');
form.append(input);
input.type = "submit";
input.style.color = "#ffffff";
input.onclick = search;
input.value = "search";
input.style.backgroundColor = "#60646c";
var button = document.createElement('button');
form.append(button);
button.id = "top_btn";
button.onclick = "go_top()";
button.style.backgroundColor = "Transparent";
var img = document.createElement('img');
button.append(img);
img.src = "../src/top.jpg";
img.width = "30";
img.height = "30";
function search() {
    url="https://www.google.com/search?q=";
    url += document.getElementById("search_bar").value;
    window.open(url);
}
document.getElementById("search_bar").setAttribute("size", "40px");
function go_top() {
    document.location="#github_link";
}
document.getElementById("top_btn").setAttribute("onclick", "go_top()");


// ---- tabmenu setting ----
var tabmenu = document.querySelector(".tabmenu");
jQuery.getJSON("../json/tabmenu.json", function (data) {
    var resultHtml = "";
    var menu_html = document.querySelector("#template-menu").innerHTML;
    for(var i=0, len=data.length; i<len; i++) {
      resultHtml += menu_html.replace("{name}", data[i].name)
                                        .replace("{href}", data[i].href);
    }
    tabmenu.innerHTML += resultHtml;

    var menu_list = tabmenu.querySelectorAll("div");
    for(var i=0; i<menu_list.length; i++){
        menu_list[i].setAttribute("target", "_blank");
        menu_list[i].setAttribute("onmouseover", "menu_focus(this)");
        menu_list[i].setAttribute("onmouseout", "menu_focus(this)");
        menu_list[i].classList.toggle("menu_nomal");
    }
});
function menu_focus(menu) {
    menu.classList.toggle("menu_focus");
    menu.classList.toggle("menu_nomal");
}
