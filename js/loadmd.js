// load marked.js
var script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
document.head.append(script);

// view md file from json
var md_list = document.querySelector(".md_list");
function load_md(json) {
    jQuery.getJSON(json, function (data) {
        for ( var i=0; i<data.length; ++i ) {
            jQuery.get(data[i].href, function (data) {
                var div = document.createElement('div')
                md_list.append(div);
                div.style.margin = "10px";
                div.style.padding = "20px";
                div.style.borderRadius = "10px";
                div.style.backgroundColor = "#282d34";
                div.innerHTML = marked(data);
                var br = document.createElement('br');
                md_list.append(br);
                var hr = md_list.querySelectorAll("div > hr");
                for ( var i=0; i<hr.length; ++i ) {
                    hr[i].style.backgroundColor = "#646464";
                    hr[i].style.margin = "0";
                    hr[i].style.height = "2.5px";
                    hr[i].style.borderWidth = "0px";
                }
            });
        }
    });
};