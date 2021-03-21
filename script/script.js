function go_home(){
    document.location.href="../";
}

function go_top(){
    document.location="#headline";
}

function search(){
    typed = document.getElementById("search_bar").value;
    if(typed.length > 0){
        url="https://www.google.com/search?q=";
        url += typed;
        window.open(url);
    }
    console.log("not yet typed");
}
