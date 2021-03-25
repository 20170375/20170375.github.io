function go_top(){
    document.location="#headline";
}
function search(){
    url="https://www.google.com/search?q=";
    url += document.getElementById("search_bar").value;
    window.open(url);
}

var a_list = document.getElementsByTagName("a");
for(var i=0; i<a_list.length; i++){
    if(a_list[i].classList.contains("menu_element") == false){
        a_list[i].setAttribute("target", "_blank");
    }
}
