function block_focus(block){
    block.classList.toggle("block_focus");
}
    
var blocks = document.getElementsByClassName("blocks");
for(var i=0; i<blocks.length; i++){
  blocks[i].setAttribute("onmouseover", "block_focus(this)");
  blocks[i].setAttribute("onmouseout", "block_focus(this)");
}
