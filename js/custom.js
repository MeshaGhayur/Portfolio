$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
function hover(element) {
  element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}

function unhover(element) {
  element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
}
var title = document.querySelector('title');
title.innerText = title.innerText + ' - Mesha Ghayur';