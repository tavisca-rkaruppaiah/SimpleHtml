//visible particluar divs
function visibleSomePages(visibleid, hidepartone, hideparttwo )
{
    document.getElementById(visibleid).style.display='block';
    document.getElementById(hidepartone).style.display='none';
    document.getElementById(hideparttwo).style.display='none';
}

   // ARRAY FOR HEADER.
var arrHead = new Array();
arrHead = ['', 'ItemName'];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.

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

//method for search 

function search()
{
    let searchItem = document.getElementById('item').value;
    if(searchItem.length == 0)
    {
        alert('Enter item Name');
        console.log('Empty Item Name');
    }
    else
    {
        console.log('item is available');
    }
}

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
            var button = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // ADD THE BUTTON's 'onclick' EVENT.
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        }
        else 
        {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', getItem);

            td.appendChild(ele);
        }
    }
}

// DELETE TABLE ROW.
function removeRow(oButton) 
{
    var itemTab = document.getElementById('itemTable');
    itemTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
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