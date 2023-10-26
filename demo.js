var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit', addItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('Choose Expense').value;
  var newIttem = document.getElementById('Description').value;
  var newItttem = document.getElementById('Category').value;
  var editBtn=document.createElement('input');
  editBtn.type='button';
  editBtn.class="btn float-right";
  editBtn.value="edit";

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem+" "));
  li.appendChild(document.createTextNode(newIttem+" "));
  li.appendChild(document.createTextNode(newItttem+" "));
  li.appendChild(editBtn)

  // Append li to list
  itemList.appendChild(li);
  let myObj={
    Choose_Expense:newItem,
    Description:newIttem,
    Category:newItttem
  };
  let my_Obj=JSON.stringify(myObj);
  localStorage.setItem(newIttem,my_Obj);
  editBtn.onclick= ()=>{
    localStorage.removeItem(newIttem);
    itemList.removeChild(li);
    document.getElementById('Choose Expense').value=myObj.Choose_Expense;
    document.getElementById('Description').value=myObj.Description;
    document.getElementById('Category').value=myObj.Category;
  }
  li.appendChild(editBtn);
  itemList.appendChild(li);

}