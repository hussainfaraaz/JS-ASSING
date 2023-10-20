



function addItem() {
  var input = document.getElementById("newItem").value;
  var itemList = document.getElementById("itemList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  


  var edit = document.createElement("button");
  edit.appendChild(document.createTextNode("edit"));
  edit.onclick = function(){
    li.innerHTML = prompt ("Edit-Produt");
    edit.marginLeft = "10px";
  }
  li.appendChild(edit);

  var del = document.createElement("button");
  del.appendChild(document.createTextNode("Delete"));
  del.onclick = function() {
      itemList.removeChild(li);
  }


  
 
  li.appendChild(del);
  itemList.appendChild(li);
  
  document.getElementById("newItem").value = "";
}