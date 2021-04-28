// ---- head tag setting ----
var head = document.querySelector("head");
var head_html = "<meta charset=\"utf-8\"><meta name=\"keywords\" content=\"github.io, github page, 20170375\"><meta name=\"description\" content=\"github.io page by 20170375\"><meta name=\"author\" content=\"20170375\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">";
head.innerHTML = head_html + head.innerHTML;


//  ---- body tag setting ----
var body = document.querySelector("body");
var body_html = "";
body_html += "<script id=\"template-menu\" type=\"text/template\"><div><a href={href}>{name}</a><hr></div></script>";
body_html += "<script id=\"template-block\" type=\"text/template\"><div><a href={href}>{name}</a></div></script>";
body_html += "<a id=\"github_link\" href=\"https://github.com/20170375\">GitHub<small> info</small></a>";
body_html += "<header></header>";
body_html += "<nav></nav>";
body.innerHTML = body_html + body.innerHTML;


// ---- nav tag setting ----
var nav = document.querySelector("nav");
var nav_html = "<div class=\"tabmenu\"></div>";
nav.innerHTML = nav_html;


// ---- header tag setting ----
var header = document.querySelector("header");
var header_html = "<a href=\"https://20170375.github.io/html/index.html\"><strong>GitHub</strong> Page</a>";
header.innerHTML = header_html;


// ---- footer tag setting ----
var footer = document.querySelector("footer");
var footer_html = "<form autocomplete=\"off\"><input id=\"search_bar\" type=\"text\"><input type=\"submit\" onclick=\"search()\" value=\"search\"><button id=\"go_top\" onclick=\"go_top()\">Top</button></form>";
footer.innerHTML = footer_html;
function search() {
    url="https://www.google.com/search?q=";
    url += document.getElementById("search_bar").value;
    window.open(url);
}
document.getElementById("search_bar").setAttribute("size", "40px");
function go_top() {
    document.location="#headline";
}
document.getElementById("go_top").setAttribute("onclick", "go_top()");


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
