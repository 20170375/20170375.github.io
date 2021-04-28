// ---- blockmenu setting ----
var block_menu = document.querySelector(".blockmenu");
jQuery.getJSON("../json/blockmenu.json", function (data) {
  var resultHtml = "";
  var block_html = document.querySelector("#template-block").innerHTML;
  for(var i=0, len=data.length; i<len; i++) {
    resultHtml += block_html.replace("{name}", data[i].name)
                                      .replace("{href}", data[i].href);
  }
  block_menu.innerHTML = resultHtml + block_menu.innerHTML;

  var blocks = block_menu.querySelectorAll("div");
  for(var i=0; i<blocks.length; i++){
    blocks[i].setAttribute("onmouseover", "block_focus(this)");
    blocks[i].setAttribute("onmouseout", "block_focus(this)");
    blocks[i].classList.toggle("block_nomal");
  }

});
function block_focus(block){
  block.classList.toggle("block_focus");
  block.classList.toggle("block_nomal");
}