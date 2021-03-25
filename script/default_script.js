function menu_focus(menu){
    menu.classList.toggle("menu_focus");
}
function search(){
    url="https://www.google.com/search?q=";
    url += document.getElementById("search_bar").value;
    window.open(url);
}
function go_top(){
    document.location="#headline";
}

var a_list = document.getElementsByTagName("a");
for(var i=0; i<a_list.length; i++){
    if(a_list[i].classList.contains("menu_element") == false && a_list[i].id != "headline"){
        a_list[i].setAttribute("target", "_blank");
    }
}

var menu_list = document.getElementsByClassName("menu_element");
for(var i=0; i<menu_list.length; i++){
  menu_list[i].setAttribute("onmouseover", "menu_focus(this)");
  menu_list[i].setAttribute("onmouseout", "menu_focus(this)");
}

document.getElementById("search_bar").setAttribute("size", "40px");
document.getElementById("go_top").setAttribute("onclick", "go_top()");