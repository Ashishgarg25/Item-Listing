var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form Submit Event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', remItem);

//Filter Event
filter.addEventListener('keyup', filterItems);

//Adding Items

function addItem(e){
    e.preventDefault();

    //console.log();

    var newItem = document.getElementById('item').value;

    //Create New li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create Delete button element
    var del = document.createElement('button');
    
    //Add Clases to delete button
    del.className = 'btn btn-danger btn-sm float-right delete';

    //Append Text Node
    del.appendChild(document.createTextNode('x'));

    li.appendChild(del);

    itemList.appendChild(li);
}

//Remove Items

function remItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Search Filter

function filterItems(e){
    //convert text to lower case
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');

    //Convert to Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}