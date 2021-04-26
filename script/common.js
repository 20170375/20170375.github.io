// ---- head tag setting ----
var head = document.querySelector("head");
var head_html = "<meta charset=\"utf-8\"><meta name=\"keywords\" content=\"github.io, github page, 20170375\"><meta name=\"description\" content=\"github.io page by 20170375\"><meta name=\"author\" content=\"20170375\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">";
head.innerHTML = head_html + head.innerHTML;


// ---- body tag setting ----
var body = document.querySelector("body");
var body_html = "<a id=\"github_link\" href=\"https://github.com/20170375\">GitHub<small> info</small></a>";
body_html += "<header></header>";
body_html += "<nav><ul class=\"menu_list\"></ul></nav>";
body.innerHTML = body_html + body.innerHTML;


// ---- header tag setting ----
var header = document.querySelector("header");
var header_html = "<a id=\"headline\" href=\"https://20170375.github.io/html/index.html\"><strong>GitHub</strong> Page</a>";
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


// ---- menu setting ----
jQuery.getJSON("../json/menu.json", function (data) {
    var resultHtml = document.querySelector(".menu_list").innerHTML;
    var menu_html = document.querySelector("#template-menu").innerHTML;
    for(var i=0, len=data.length; i<len; i++) {
      resultHtml += menu_html.replace("{name}", data[i].name)
                                        .replace("{href}", data[i].href);
    }
    document.querySelector(".menu_list").innerHTML = resultHtml;
});
var a_list = document.getElementsByTagName("a");
for(var i=0; i<a_list.length; i++){
    if(a_list[i].classList.contains("menu_element") == false && a_list[i].id != "headline"){
        a_list[i].setAttribute("target", "_blank");
    }
}
function menu_focus(menu) {
    menu.classList.toggle("menu_focus");
}
var menu_list = document.getElementsByClassName("menu_element");
for(var i=0; i<menu_list.length; i++){
  menu_list[i].setAttribute("onmouseover", "menu_focus(this)");
  menu_list[i].setAttribute("onmouseout", "menu_focus(this)");
}
