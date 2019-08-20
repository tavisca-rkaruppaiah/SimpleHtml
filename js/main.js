function addItemToList()
{
    var li = document.createElement("LI");  
    var input = document.getElementById("item");
    console.log(input.value);
    li.innerHTML = input.value;
    input.value = "";
    document.getElementById("items").appendChild(li);
    console.log('ragu');
}

function visibleSomePages(id)
{
    document.getElementById(id).style.display='block';
    console.log("ulla varuthu");
}