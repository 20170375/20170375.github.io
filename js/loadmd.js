// view md file from json
var md_list = document.querySelector(".md_list");
function load_md(json) {
    jQuery.getJSON(json, function (data) {
        for ( var i=0; i<data.length; ++i ) {
            var md_file = document.createElement('div');
            md_file.style.textAlign = "center";
            var h2 = document.createElement('h2');
            h2.innerText = data[i].name;
            h2.style.alignSelf = "left";
            md_list.append(h2);
            var iframe = document.createElement('iframe');
            iframe.style.width = "80%";
            iframe.style.height = "700px";
            iframe.style.border = "none";
            iframe.style.backgroundColor = "#60646c";
            iframe.src = data[i].href;
            md_file.append(iframe);
            if ( i != data.length-1 ) {
                md_file.innerHTML += "<hr color=\"#30343c\" background-color=\"#30343c\">";
            }
            md_list.append(md_file);
        }
    });
};