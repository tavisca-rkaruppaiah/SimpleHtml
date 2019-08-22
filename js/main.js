//visible particluar divs
function visibleSomePages(visibleid, hidepartone, hideparttwo, buttonid, otherb, otherbut )
{
    document.getElementById(visibleid).style.display='block';
    document.getElementById(buttonid).style.backgroundColor =  "rgb(255, 204, 93)";
    document.getElementById(otherb).style.backgroundColor =  "#f1f1f1";
    document.getElementById(otherbut).style.backgroundColor =  "#f1f1f1";
    document.getElementById(hidepartone).style.display='none';
    document.getElementById(hideparttwo).style.display='none';
}

function redirectPages(url)
{
    location.replace(url);
}
// ARRAY FOR HEADER.
var arrHead = new Array();
arrHead = ['', 'ItemName', ''];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.
   
// FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
// ADD THE TABLE TO YOUR WEB PAGE.
function createTable() 
{
    var itemTable = document.createElement('table');
    itemTable.setAttribute('id', 'itemTable');            // SET THE TABLE ID.
   
    var tr = itemTable.insertRow(-1);
   
    for (var h = 0; h < arrHead.length; h++) 
    {
        var th = document.createElement('th');          // TABLE HEADER.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }
   
    var div = document.getElementById('cont');
    div.appendChild(itemTable);    // ADD THE TABLE TO YOUR WEB PAGE.
}
var count = 0;
// ADD A NEW ROW TO THE TABLE.s
function addRow() 
{
    var itemTab = document.getElementById('itemTable');
    let getItem = document.getElementById('item').value;

    if(getItem.length == 0)
    {
        alert('Enter Item Name');
        return false;
    }

    var rowCnt = itemTab.rows.length;        // GET TABLE ROW COUNT.
    var tr = itemTab.insertRow(rowCnt);      // TABLE ROW.
    tr = itemTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) 
    {
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(c);

        if (c == 0) 
        {    // FIRST COLUMN.
            // ADD A BUTTON.
            var buttonDel = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            buttonDel.setAttribute('type', 'button');
            buttonDel.setAttribute('value', 'Del');
            buttonDel.setAttribute('id', 'delete');

            // ADD THE BUTTON's 'onclick' EVENT.
            buttonDel.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(buttonDel);
        }
        else if(c == 2)
        {
            var buttonEdit = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            buttonEdit.setAttribute('type', 'button');
            buttonEdit.setAttribute('value', 'Edit');
            buttonEdit.setAttribute('id', 'edit');

            // ADD THE BUTTON's 'onclick' EVENT.
            buttonEdit.setAttribute('onclick', 'editRow(this)');

            td.appendChild(buttonEdit);
        }
        else 
        {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('p');
            ele.setAttribute('id', 'item'+count);
            ele.innerHTML = getItem;
            td.appendChild(ele);
            count++;
            //submit();
        }
    }
    document.getElementById('item').value = "";

}

// DELETE TABLE ROW.
function removeRow(oButton) 
{
    let itemTab = document.getElementById('itemTable');
    itemTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
}

//Edit Table Row

function editRow(oButton)
{
    let itemTab = document.getElementById('itemTable');
    itemTab.rows.item(oButton.parentNode.parentNode.rowIndex).cells[1].childNodes[0].innerHTML;
    console.log(itemTab.rows.item(oButton.parentNode.parentNode.rowIndex).cells[1].childNodes[0].innerHTML);
    console.log(oButton.parentNode.parentNode.rowIndex);  
    let tempButton = itemTab.rows.item(oButton.parentNode.parentNode.rowIndex).cells[2].childNodes[0].value;
    console.log(tempButton);
    console.log(oButton.parentElement.previousElementSibling);
    let ele=oButton.parentElement.previousElementSibling;
    console.log(ele.childNodes[0]);
    let input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","getdata");
    console.log(ele.textContent);
    input.setAttribute('value', ele.textContent);
    ele.replaceChild(input,ele.childNodes[0]);

    var prev=oButton.parentElement;
    console.log(prev);
    var savebutton=document.createElement("input");
    savebutton.setAttribute('type','button');
    savebutton.setAttribute('value', 'Save');
    savebutton.setAttribute("onclick","saveNewValue(this)");
    prev.replaceChild(savebutton,prev.childNodes[0]);


}

// save the new values

function saveNewValue(oButton)
{
    console.log('save new value');
    console.log(oButton.parentElement);
    let ele=oButton.parentElement.previousElementSibling;

    console.log(ele.childNodes[0]);
    console.log(ele.nextElementSibling.childNodes[0]);
    console.log(document.getElementById('getdata').value);
    let eleP = document.createElement('p');
    eleP.setAttribute('id', 'item'+count);
    eleP.innerHTML = document.getElementById('getdata').value;
    ele.replaceChild(eleP, ele.childNodes[0]);

    var buttonEdit = document.createElement('input');

    // SET INPUT ATTRIBUTE.
    buttonEdit.setAttribute('type', 'button');
    buttonEdit.setAttribute('value', 'Edit');
    buttonEdit.setAttribute('id', 'edit');

    // ADD THE BUTTON's 'onclick' EVENT.
    buttonEdit.setAttribute('onclick', 'editRow(this)');
    ele.nextElementSibling.replaceChild(buttonEdit, ele.nextElementSibling.childNodes[0]);
}


// EXTRACT AND SUBMIT TABLE DATA.
function submit() 
{
    var myTab = document.getElementById('itemTable');
    var values = new Array();

    // LOOP THROUGH EACH ROW OF THE TABLE.
    for (row = 1; row < myTab.rows.length - 1; row++) 
    {
        for (c = 0; c < myTab.rows[row].cells.length; c++) 
        {   
            // EACH CELL IN A ROW.
            var element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') 
            {
                   values.push("'" + element.childNodes[0].value + "'");
            }
        }
    }
    console.log(values);
}

//validate email
function validateEmail(emailField)
{
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

    return true;
}
//login function
function login()
{
    if(validPassword() == true)
    {
        alert('sucessfully logged');
    }
}

function validPassword()
{
    var pass = document.getElementById('pass').value;
    if(pass.length == 0)
    {
        alert('invalid password');
        console.log('false');
        return false;
    }

    return true;
}

function jsonPlace()
{
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => console.log(json))
}
