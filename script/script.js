function go_home(){
    document.location.href="../index.html";
}

function go_top(){
    document.location="#headline";
}

function search(){
    url="https://www.google.com/search?q=";
    url += document.getElementById("search_bar").value;
    window.open(url);
}
