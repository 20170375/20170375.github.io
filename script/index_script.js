function menu_focus(menu){
    menu.classList.toggle("menu_focus");
}
function block_focus(block){
    block.classList.toggle("block_focus");
}

var menu_list = document.getElementsByClassName("menu_element");
for(var i=0; i<menu_list.length; i++){
  menu_list[i].setAttribute("onmouseover", "menu_focus(this)");
  menu_list[i].setAttribute("onmouseout", "menu_focus(this)");
}
    
var blocks = document.getElementsByClassName("blocks");
for(var i=0; i<blocks.length; i++){
  blocks[i].setAttribute("onmouseover", "block_focus(this)");
  blocks[i].setAttribute("onmouseout", "block_focus(this)");
}
